import { createAction, createListenerMiddleware, ListenerEffectAPI, PayloadAction } from '@reduxjs/toolkit';
import * as React from 'react';
import { AppDispatch, RechartsRootState } from './store';
import { setMouseOverAxisIndex } from './tooltipSlice';
import { selectActivePropsFromChartPointer } from './selectors/selectActivePropsFromChartPointer';

import { getChartPointer } from '../util/getChartPointer';
import { selectTooltipEventType } from './selectors/selectTooltipEventType';

export const touchEventAction = createAction<React.TouchEvent<HTMLDivElement>>('touchMove');

export const touchEventMiddleware = createListenerMiddleware();

touchEventMiddleware.startListening({
  actionCreator: touchEventAction,
  effect: (
    action: PayloadAction<React.TouchEvent<HTMLDivElement>>,
    listenerApi: ListenerEffectAPI<RechartsRootState, AppDispatch>,
  ) => {
    const touchEvent = action.payload;
    const state = listenerApi.getState();
    const tooltipEventType = selectTooltipEventType(state, state.tooltip.settings.shared);
    const activeProps = selectActivePropsFromChartPointer(
      state,
      getChartPointer({
        clientX: touchEvent.touches[0].clientX,
        clientY: touchEvent.touches[0].clientY,
        currentTarget: touchEvent.currentTarget,
      }),
    );
    if (tooltipEventType === 'axis' && activeProps?.activeIndex != null) {
      listenerApi.dispatch(
        setMouseOverAxisIndex({
          activeIndex: activeProps.activeIndex,
          activeDataKey: undefined,
          activeCoordinate: activeProps.activeCoordinate,
        }),
      );
    }
  },
});
