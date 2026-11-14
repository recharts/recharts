import { createAction, createListenerMiddleware, ListenerEffectAPI } from '@reduxjs/toolkit';
import { setKeyboardInteraction, TooltipInteractionState } from './tooltipSlice';
import { AppDispatch, RechartsRootState } from './store';
import {
  selectTooltipAxisDomain,
  selectTooltipAxisTicks,
  selectTooltipDisplayedData,
} from './selectors/tooltipSelectors';
import { selectCoordinateForDefaultIndex } from './selectors/selectors';
import { AxisDirection, selectChartDirection, selectTooltipAxisDataKey } from './selectors/axisSelectors';
import { combineActiveTooltipIndex } from './selectors/combiners/combineActiveTooltipIndex';
import { selectTooltipEventType } from './selectors/selectTooltipEventType';

export const keyDownAction = createAction<KeyboardEvent['key']>('keyDown');
export const focusAction = createAction('focus');
export const blurAction = createAction('blur');

/**
 * Converts an arrow key into a step through the data, taking the direction of the chart into account.
 *
 * - ArrowRight / ArrowLeft step forward / backward. They are flipped only for the `right-to-left` direction,
 *   that is a horizontal layout with a reversed XAxis. In a vertical layout they are never flipped,
 *   not even when the YAxis is reversed.
 * - ArrowDown / ArrowUp step along the categories of a vertical chart, and follow the direction of the YAxis.
 *   They are ignored in all other layouts, where the browser keeps their default.
 *
 * @param key the pressed key
 * @param direction the direction in which the data are laid out
 * @returns +1 for the next data point, -1 for the previous one, or null if the key does not move the tooltip
 */
function getKeyboardMovement(key: KeyboardEvent['key'], direction: AxisDirection | undefined): 1 | -1 | null {
  switch (key) {
    case 'ArrowRight':
      return direction === 'right-to-left' ? -1 : 1;
    case 'ArrowLeft':
      return direction === 'right-to-left' ? 1 : -1;
    case 'ArrowDown':
      if (direction === 'top-to-bottom') {
        return 1;
      }
      return direction === 'bottom-to-top' ? -1 : null;
    case 'ArrowUp':
      if (direction === 'top-to-bottom') {
        return -1;
      }
      return direction === 'bottom-to-top' ? 1 : null;
    default:
      return null;
  }
}

export const keyboardEventsMiddleware = createListenerMiddleware<RechartsRootState>();

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
        if (
          key !== 'ArrowRight' &&
          key !== 'ArrowLeft' &&
          key !== 'ArrowDown' &&
          key !== 'ArrowUp' &&
          key !== 'Enter'
        ) {
          return;
        }

        // TODO this is lacking index for charts that do not support numeric indexes
        const resolvedIndex = combineActiveTooltipIndex(
          keyboardInteraction,
          selectTooltipDisplayedData(currentState),
          selectTooltipAxisDataKey(currentState),
          selectTooltipAxisDomain(currentState),
        );
        const currentIndex = resolvedIndex == null ? -1 : Number(resolvedIndex);
        const isOutsideDomain = !Number.isFinite(currentIndex) || currentIndex < 0;
        const tooltipTicks = selectTooltipAxisTicks(currentState);
        const displayedData = selectTooltipDisplayedData(currentState);
        const tooltipEventType = selectTooltipEventType(currentState, currentState.tooltip.settings.shared);
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

        const movement = getKeyboardMovement(key, selectChartDirection(currentState));
        if (movement == null) {
          return;
        }
        let nextIndex: number;
        if (isOutsideDomain) {
          const axisDataKey = selectTooltipAxisDataKey(currentState);
          const domain = selectTooltipAxisDomain(currentState);

          // Build a minimal TooltipInteractionState for the candidate-index check.
          const mkInteraction = (i: number): TooltipInteractionState => ({
            active: false,
            index: String(i),
            dataKey: undefined,
            graphicalItemId: undefined,
            coordinate: undefined,
          });

          nextIndex = -1;
          if (movement > 0) {
            for (let i = 0; i < displayedData.length; i++) {
              if (combineActiveTooltipIndex(mkInteraction(i), displayedData, axisDataKey, domain) != null) {
                nextIndex = i;
                break;
              }
            }
          } else {
            for (let i = displayedData.length - 1; i >= 0; i--) {
              if (combineActiveTooltipIndex(mkInteraction(i), displayedData, axisDataKey, domain) != null) {
                nextIndex = i;
                break;
              }
            }
          }

          if (nextIndex < 0) {
            return;
          }
        } else {
          nextIndex = currentIndex + movement;
          const dataLength = tooltipTicks?.length || displayedData.length;
          if (dataLength === 0 || nextIndex >= dataLength || nextIndex < 0) {
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
