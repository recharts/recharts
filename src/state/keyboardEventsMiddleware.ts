import {
  AnyAction,
  createAction,
  createListenerMiddleware,
  ListenerEffectAPI,
  ListenerMiddlewareInstance,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import { setKeyboardInteraction, TooltipInteractionState } from './tooltipSlice';
import { ChartData } from './chartDataSlice';
import { AppDispatch, RechartsRootState } from './store';
import { TickItem, TooltipEventType } from '../util/types';
import {
  selectTooltipAxisDomain,
  selectTooltipAxisTicks,
  selectTooltipDisplayedData,
} from './selectors/tooltipSelectors';
import { selectCoordinateForDefaultIndex } from './selectors/selectors';
import { selectChartDirection, selectTooltipAxisDataKey } from './selectors/axisSelectors';
import { combineActiveTooltipIndex } from './selectors/combiners/combineActiveTooltipIndex';
import { selectTooltipEventType } from './selectors/selectTooltipEventType';
import { selectAllUnfilteredGraphicalItems } from './selectors/graphicalItemSelectors';

/**
 * The number of indexes the keyboard steps through.
 *
 * An `axis` interaction indexes the tooltip ticks; where there are no ticks, it indexes the rows of the displayed data.
 * An `item` interaction indexes the data of the hovered item. The keyboard has no hovered item and shows the first one
 * (see `combineTooltipPayloadConfigurations`), so it steps through the entries of that item: the data of the item where it
 * has its own, and the rows of the displayed data otherwise, which with the data on the chart are the rows of the chart data.
 * The displayed data alone is the concatenation of the data of all items, which is more than one item has.
 */
export const selectKeyboardIndexCount = (
  state: RechartsRootState,
  tooltipEventType: TooltipEventType | undefined,
  tooltipTicks: ReadonlyArray<TickItem> | undefined,
  displayedData: ChartData,
): number => {
  if (tooltipEventType !== 'item' && tooltipTicks?.length) {
    return tooltipTicks.length;
  }
  if (tooltipEventType === 'item') {
    const firstItemId = state.tooltip.tooltipItemPayloads[0]?.settings.graphicalItemId;
    const firstItem =
      firstItemId == null ? undefined : selectAllUnfilteredGraphicalItems(state).find(item => item.id === firstItemId);
    const itemData = firstItem?.data;
    if (itemData != null && itemData.length > 0) {
      return itemData.length;
    }
  }
  return displayedData.length;
};

export const keyDownAction = createAction<KeyboardEvent['key']>('keyDown');
export const focusAction = createAction('focus');
export const blurAction = createAction('blur');

export const keyboardEventsMiddleware: ListenerMiddlewareInstance<
  RechartsRootState,
  ThunkDispatch<RechartsRootState, unknown, AnyAction>,
  unknown
> = createListenerMiddleware<RechartsRootState>();

let rafId: number | null = null;
let timeoutId: ReturnType<typeof setTimeout> | null = null;
let latestKeyboardActionPayload: KeyboardEvent['key'] | null = null;

keyboardEventsMiddleware.startListening({
  actionCreator: keyDownAction,
  effect: (
    action: ReturnType<typeof keyDownAction>,
    listenerApi: ListenerEffectAPI<RechartsRootState, AppDispatch>,
  ) => {
    latestKeyboardActionPayload = action.payload;

    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }

    const state: RechartsRootState = listenerApi.getState();
    const { throttleDelay, throttledEvents } = state.eventSettings;
    const isThrottled = throttledEvents === 'all' || throttledEvents.includes('keydown');

    if (timeoutId !== null && (typeof throttleDelay !== 'number' || !isThrottled)) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }

    const callback = () => {
      try {
        const currentState = listenerApi.getState();
        const accessibilityLayerIsActive = currentState.rootProps.accessibilityLayer !== false;
        if (!accessibilityLayerIsActive) {
          return;
        }
        const { keyboardInteraction } = currentState.tooltip;
        const key = latestKeyboardActionPayload;
        if (key !== 'ArrowRight' && key !== 'ArrowLeft' && key !== 'Enter') {
          return;
        }

        const tooltipTicks = selectTooltipAxisTicks(currentState);
        const displayedData = selectTooltipDisplayedData(currentState);
        const tooltipEventType = selectTooltipEventType(currentState, currentState.tooltip.settings.shared);
        const indexCount = selectKeyboardIndexCount(currentState, tooltipEventType, tooltipTicks, displayedData);

        // TODO this is lacking index for charts that do not support numeric indexes
        const resolvedIndex = combineActiveTooltipIndex(
          keyboardInteraction,
          tooltipEventType,
          displayedData,
          tooltipTicks,
          selectTooltipAxisDataKey(currentState),
          selectTooltipAxisDomain(currentState),
        );
        const currentIndex = resolvedIndex == null ? -1 : Number(resolvedIndex);
        const isOutsideDomain = !Number.isFinite(currentIndex) || currentIndex < 0;
        if (key === 'Enter') {
          if (isOutsideDomain) {
            return;
          }
          const coordinate = selectCoordinateForDefaultIndex(
            currentState,
            tooltipEventType,
            'hover',
            String(keyboardInteraction.index),
          );
          listenerApi.dispatch(
            setKeyboardInteraction({
              active: !keyboardInteraction.active,
              activeIndex: keyboardInteraction.index,
              activeCoordinate: coordinate,
            }),
          );
          return;
        }

        const direction = selectChartDirection(currentState);
        const directionMultiplier = direction === 'left-to-right' ? 1 : -1;
        const movement = key === 'ArrowRight' ? 1 : -1;
        let nextIndex: number;
        if (isOutsideDomain) {
          const axisDataKey = selectTooltipAxisDataKey(currentState);
          const domain = selectTooltipAxisDomain(currentState);
          const effectiveMovement = movement * directionMultiplier;

          // Build a minimal TooltipInteractionState for the candidate-index check.
          const mkInteraction = (i: number): TooltipInteractionState => ({
            active: false,
            index: String(i),
            dataKey: undefined,
            graphicalItemId: undefined,
            coordinate: undefined,
          });

          nextIndex = -1;
          if (effectiveMovement > 0) {
            for (let i = 0; i < indexCount; i++) {
              if (
                combineActiveTooltipIndex(
                  mkInteraction(i),
                  tooltipEventType,
                  displayedData,
                  tooltipTicks,
                  axisDataKey,
                  domain,
                ) != null
              ) {
                nextIndex = i;
                break;
              }
            }
          } else {
            for (let i = indexCount - 1; i >= 0; i--) {
              if (
                combineActiveTooltipIndex(
                  mkInteraction(i),
                  tooltipEventType,
                  displayedData,
                  tooltipTicks,
                  axisDataKey,
                  domain,
                ) != null
              ) {
                nextIndex = i;
                break;
              }
            }
          }

          if (nextIndex < 0) {
            return;
          }
        } else {
          nextIndex = currentIndex + movement * directionMultiplier;
          if (indexCount === 0 || nextIndex >= indexCount || nextIndex < 0) {
            return;
          }
        }
        const coordinate = selectCoordinateForDefaultIndex(currentState, tooltipEventType, 'hover', String(nextIndex));
        listenerApi.dispatch(
          setKeyboardInteraction({
            active: true,
            activeIndex: nextIndex.toString(),
            activeCoordinate: coordinate,
          }),
        );
      } finally {
        rafId = null;
        timeoutId = null;
      }
    };

    if (!isThrottled) {
      callback();
      return;
    }

    if (throttleDelay === 'raf') {
      rafId = requestAnimationFrame(callback);
    } else if (typeof throttleDelay === 'number') {
      if (timeoutId === null) {
        callback();
        latestKeyboardActionPayload = null;

        timeoutId = setTimeout(() => {
          if (latestKeyboardActionPayload) {
            callback();
          } else {
            timeoutId = null;
            rafId = null;
          }
        }, throttleDelay);
      }
    }
  },
});

keyboardEventsMiddleware.startListening({
  actionCreator: focusAction,
  effect: (_action, listenerApi: ListenerEffectAPI<RechartsRootState, AppDispatch>) => {
    const state: RechartsRootState = listenerApi.getState();
    const accessibilityLayerIsActive = state.rootProps.accessibilityLayer !== false;
    if (!accessibilityLayerIsActive) {
      return;
    }
    const { keyboardInteraction } = state.tooltip;
    if (keyboardInteraction.active) {
      return;
    }
    if (keyboardInteraction.index == null) {
      const nextIndex = '0';
      const tooltipEventType = selectTooltipEventType(state, state.tooltip.settings.shared);
      const coordinate = selectCoordinateForDefaultIndex(state, tooltipEventType, 'hover', String(nextIndex));
      listenerApi.dispatch(
        setKeyboardInteraction({
          active: true,
          activeIndex: nextIndex,
          activeCoordinate: coordinate,
        }),
      );
    }
  },
});

keyboardEventsMiddleware.startListening({
  actionCreator: blurAction,
  effect: (_action, listenerApi: ListenerEffectAPI<RechartsRootState, AppDispatch>) => {
    const state: RechartsRootState = listenerApi.getState();
    const accessibilityLayerIsActive = state.rootProps.accessibilityLayer !== false;
    if (!accessibilityLayerIsActive) {
      return;
    }
    const { keyboardInteraction } = state.tooltip;
    if (keyboardInteraction.active) {
      listenerApi.dispatch(
        setKeyboardInteraction({
          active: false,
          activeIndex: keyboardInteraction.index,
          activeCoordinate: keyboardInteraction.coordinate,
        }),
      );
    }
  },
});
