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
import { DataKey, TickItem, TooltipEventType } from '../util/types';
import { getValueByDataKey } from '../util/ChartUtils';
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

/**
 * The position in the tooltip ticks of the tick that places the entry at an index, for an `item` interaction.
 *
 * Line, Area and Bar give their tooltip entries no position of their own, so an entry is placed by the tick of its category.
 * That is the tick at the position of the entry as long as the ticks are the categories of the data in the order of the data,
 * and the tick nearest to the entry where they are the nice numbers of a numeric axis. Where the ticks leave out the repeats
 * of a category (`allowDuplicatedCategory={false}`), the tick at the position of an entry can be another category, so the
 * tick of the category is read by value. Returns -1 where no tick places the entry.
 */
export const selectTickPositionOfEntry = (
  index: number,
  displayedData: ChartData,
  tooltipTicks: ReadonlyArray<TickItem> | undefined,
  axisDataKey: DataKey<unknown> | undefined,
): number => {
  if (tooltipTicks == null || tooltipTicks.length === 0) {
    return index;
  }
  const tick = tooltipTicks[index];
  const category = getValueByDataKey(displayedData[index], axisDataKey);
  const positionOfCategory = tooltipTicks.findIndex(t => t.value === category);
  if (positionOfCategory >= 0 && tick?.value !== category) {
    return positionOfCategory;
  }
  return tick != null ? index : -1;
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
        const axisDataKey = selectTooltipAxisDataKey(currentState);
        /*
         * The index of an `axis` interaction is a position in the ticks. An `item` interaction indexes the entries of the first item,
         * so its coordinate is read at the position of the tick that places the entry.
         */
        const tickPositionOf = (index: number): number =>
          tooltipEventType === 'item'
            ? selectTickPositionOfEntry(index, displayedData, tooltipTicks, axisDataKey)
            : index;

        // TODO this is lacking index for charts that do not support numeric indexes
        const resolvedIndex = combineActiveTooltipIndex(
          keyboardInteraction,
          tooltipEventType,
          displayedData,
          tooltipTicks,
          axisDataKey,
          selectTooltipAxisDomain(currentState),
        );
        const currentIndex = resolvedIndex == null ? -1 : Number(resolvedIndex);
        /*
         * An index at or beyond the index count is one that the data no longer has: the first item has fewer entries than before,
         * or another chart has sent it. Either arrow leaves it, and enters the indexes from its own side.
         */
        const isOutsideDomain = !Number.isFinite(currentIndex) || currentIndex < 0 || currentIndex >= indexCount;
        if (key === 'Enter') {
          const tickPosition = isOutsideDomain ? -1 : tickPositionOf(currentIndex);
          if (tickPosition < 0) {
            return;
          }
          const coordinate = selectCoordinateForDefaultIndex(
            currentState,
            tooltipEventType,
            'hover',
            String(tickPosition),
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
                tickPositionOf(i) >= 0 &&
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
                tickPositionOf(i) >= 0 &&
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
        const tickPosition = tickPositionOf(nextIndex);
        if (tickPosition < 0) {
          return;
        }
        const coordinate = selectCoordinateForDefaultIndex(
          currentState,
          tooltipEventType,
          'hover',
          String(tickPosition),
        );
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
