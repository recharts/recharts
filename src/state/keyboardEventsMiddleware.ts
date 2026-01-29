import { createAction, createListenerMiddleware, ListenerEffectAPI } from '@reduxjs/toolkit';
import { setKeyboardInteraction } from './tooltipSlice';
import { AppDispatch, RechartsRootState } from './store';
import {
  selectTooltipAxisDomain,
  selectTooltipAxisTicks,
  selectTooltipDisplayedData,
} from './selectors/tooltipSelectors';
import { selectCoordinateForDefaultIndex } from './selectors/selectors';
import { selectChartDirection, selectTooltipAxisDataKey } from './selectors/axisSelectors';
import { combineActiveTooltipIndex } from './selectors/combiners/combineActiveTooltipIndex';

export const keyDownAction = createAction<KeyboardEvent['key']>('keyDown');
export const focusAction = createAction('focus');

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
        if (key !== 'ArrowRight' && key !== 'ArrowLeft' && key !== 'Enter') {
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
        if (!Number.isFinite(currentIndex) || currentIndex < 0) {
          return;
        }
        const tooltipTicks = selectTooltipAxisTicks(currentState);
        if (key === 'Enter') {
          const coordinate = selectCoordinateForDefaultIndex(
            currentState,
            'axis',
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
        const nextIndex = currentIndex + movement * directionMultiplier;
        if (tooltipTicks == null || nextIndex >= tooltipTicks.length || nextIndex < 0) {
          return;
        }
        const coordinate = selectCoordinateForDefaultIndex(currentState, 'axis', 'hover', String(nextIndex));

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
      const coordinate = selectCoordinateForDefaultIndex(state, 'axis', 'hover', String(nextIndex));
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
