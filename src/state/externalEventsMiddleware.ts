import { createAction, createListenerMiddleware, ListenerEffectAPI, PayloadAction } from '@reduxjs/toolkit';
import { SyntheticEvent } from 'react';
import { CategoricalChartFunc } from '../chart/types';
import { MouseHandlerDataParam } from '../synchronisation/types';
import {
  selectActiveLabel,
  selectActiveTooltipCoordinate,
  selectActiveTooltipDataKey,
  selectActiveTooltipIndex,
  selectIsTooltipActive,
} from './selectors/tooltipSelectors';
import { AppDispatch, RechartsRootState } from './store';

type ExternalEventActionPayload = {
  reactEvent: SyntheticEvent;
  handler: CategoricalChartFunc | undefined;
};

export const externalEventAction = createAction<ExternalEventActionPayload>('externalEvent');

export const externalEventsMiddleware = createListenerMiddleware<RechartsRootState>();

/*
 * We need a Map keyed by event type because this middleware handles MULTIPLE different event types
 * (click, mouseenter, mouseleave, mousedown, mouseup, contextmenu, dblclick, touchstart, touchmove, touchend)
 * from the same DOM element. Different event types should NOT cancel each other's animation frames.
 * For example, a click event and a mousemove event can happen in quick succession and both should be processed.
 * This is different from mouseMoveMiddleware which only handles one event type and uses a single rafId.
 */
const rafIdMap = new Map<string, number>();
const timeoutIdMap = new Map<string, ReturnType<typeof setTimeout>>();
const latestEventMap = new Map<string, ExternalEventActionPayload>();

externalEventsMiddleware.startListening({
  actionCreator: externalEventAction,
  effect: (
    action: PayloadAction<ExternalEventActionPayload>,
    listenerApi: ListenerEffectAPI<RechartsRootState, AppDispatch>,
  ) => {
    const { handler, reactEvent } = action.payload;
    if (handler == null) {
      return;
    }
    reactEvent.persist();

    const eventType = reactEvent.type;
    latestEventMap.set(eventType, action.payload);

    // Cancel any pending execution for this event type
    const existingRafId = rafIdMap.get(eventType);
    if (existingRafId !== undefined) {
      cancelAnimationFrame(existingRafId);
      rafIdMap.delete(eventType);
    }

    const state = listenerApi.getState();
    const { throttleDelay, throttledEvents } = state.eventSettings;

    /*
     * reactEvent.type gives us the event type as a string, e.g., 'click', 'mousemove', etc.
     * which is the same as the names used in throttledEvents array
     * but that array is strictly typed as ReadonlyArray<keyof GlobalEventHandlersEventMap> | 'all' | undefined
     * so that we can have relevant autocomplete and type checking elsewhere.
     * This makes TypeScript panic because it refuses to call .includes() on ReadonlyArray<keyof GlobalEventHandlersEventMap>
     * with a string argument.
     * To satisfy TypeScript, we need to explicitly typecast throttledEvents here.
     */
    const eventListAsString: 'all' | ReadonlyArray<string> | undefined = throttledEvents;

    // Check if this event type should be throttled
    // throttledEvents can be 'all' or an array of event names
    const isThrottled = eventListAsString === 'all' || eventListAsString?.includes(eventType);

    const existingTimeoutId = timeoutIdMap.get(eventType);
    if (existingTimeoutId !== undefined && (typeof throttleDelay !== 'number' || !isThrottled)) {
      clearTimeout(existingTimeoutId);
      timeoutIdMap.delete(eventType);
    }

    const callback = () => {
      const latestAction = latestEventMap.get(eventType);

      try {
        if (!latestAction) {
          // This happens if the event was consumed by the leading edge and no new event came in
          return;
        }

        const { handler: latestHandler, reactEvent: latestEvent } = latestAction;
        const currentState: RechartsRootState = listenerApi.getState();
        const nextState: MouseHandlerDataParam = {
          activeCoordinate: selectActiveTooltipCoordinate(currentState),
          activeDataKey: selectActiveTooltipDataKey(currentState),
          activeIndex: selectActiveTooltipIndex(currentState),
          activeLabel: selectActiveLabel(currentState),
          activeTooltipIndex: selectActiveTooltipIndex(currentState),
          isTooltipActive: selectIsTooltipActive(currentState),
        };

        if (latestHandler) {
          latestHandler(nextState, latestEvent);
        }
      } finally {
        rafIdMap.delete(eventType);
        timeoutIdMap.delete(eventType);
        latestEventMap.delete(eventType);
      }
    };

    if (!isThrottled) {
      // Execute immediately
      callback();
      return;
    }

    if (throttleDelay === 'raf') {
      const rafId = requestAnimationFrame(callback);
      rafIdMap.set(eventType, rafId);
    } else if (typeof throttleDelay === 'number') {
      if (!timeoutIdMap.has(eventType)) {
        /*
         * Leading edge execution - execute immediately on the first event
         * and then start the cooldown period to throttle subsequent events.
         */
        callback();

        // Start cooldown
        const timeoutId = setTimeout(callback, throttleDelay);
        timeoutIdMap.set(eventType, timeoutId);
      }
    } else {
      // Should not happen based on type, but fallback to immediate
      callback();
    }
  },
});
