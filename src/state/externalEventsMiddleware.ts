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

externalEventsMiddleware.startListening({
  actionCreator: externalEventAction,
  effect: (
    action: PayloadAction<ExternalEventActionPayload>,
    listenerApi: ListenerEffectAPI<RechartsRootState, AppDispatch>,
  ) => {
    if (action.payload.handler == null) {
      return;
    }

    const state: RechartsRootState = listenerApi.getState();
    const nextState: MouseHandlerDataParam = {
      activeCoordinate: selectActiveTooltipCoordinate(state),
      activeDataKey: selectActiveTooltipDataKey(state),
      activeIndex: selectActiveTooltipIndex(state),
      activeLabel: selectActiveLabel(state),
      activeTooltipIndex: selectActiveTooltipIndex(state),
      isTooltipActive: selectIsTooltipActive(state),
    };

    action.payload.handler(nextState, action.payload.reactEvent);
  },
});
