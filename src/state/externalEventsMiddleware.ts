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

export const externalEventsMiddleware = createListenerMiddleware();

/*
 * We need a Map keyed by event type because this middleware handles MULTIPLE different event types
 * (click, mouseenter, mouseleave, mousedown, mouseup, contextmenu, dblclick, touchstart, touchmove, touchend)
 * from the same DOM element. Different event types should NOT cancel each other's animation frames.
 * For example, a click event and a mousemove event can happen in quick succession and both should be processed.
 * This is different from mouseMoveMiddleware which only handles one event type and uses a single rafId.
 */
const rafIdMap = new Map<string, number>();

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

    // Cancel any pending animation frame for this event type
    const existingRafId = rafIdMap.get(eventType);
    if (existingRafId !== undefined) {
      cancelAnimationFrame(existingRafId);
    }

    const rafId = requestAnimationFrame(() => {
      try {
        /*
         * Here it is important that we get the latest state inside the animation frame callback,
         * not from the outer scope, because there may have been other actions dispatched
         * between the time the event was fired and the animation frame callback is executed.
         * One of those actions is the one that actually sets the active tooltip state!
         */
        const state: RechartsRootState = listenerApi.getState();
        const nextState: MouseHandlerDataParam = {
          activeCoordinate: selectActiveTooltipCoordinate(state),
          activeDataKey: selectActiveTooltipDataKey(state),
          activeIndex: selectActiveTooltipIndex(state),
          activeLabel: selectActiveLabel(state),
          activeTooltipIndex: selectActiveTooltipIndex(state),
          isTooltipActive: selectIsTooltipActive(state),
        };

        handler(nextState, reactEvent);
      } finally {
        rafIdMap.delete(eventType);
      }
    });

    rafIdMap.set(eventType, rafId);
  },
});
