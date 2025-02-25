import { createAction, createListenerMiddleware, ListenerEffectAPI, PayloadAction } from '@reduxjs/toolkit';
import * as React from 'react';
import { AppDispatch, RechartsRootState } from './store';
import { setActiveMouseOverItemIndex, setMouseOverAxisIndex } from './tooltipSlice';
import { selectActivePropsFromChartPointer } from './selectors/selectActivePropsFromChartPointer';

import { getChartPointer } from '../util/getChartPointer';

export const touchEventAction = createAction<React.TouchEvent<HTMLDivElement>>('touchMove');

export const touchEventMiddleware = createListenerMiddleware();

touchEventMiddleware.startListening({
  actionCreator: touchEventAction,
  effect: (
    action: PayloadAction<React.TouchEvent<HTMLDivElement>>,
    listenerApi: ListenerEffectAPI<RechartsRootState, AppDispatch>,
  ) => {
    const touchEvent = action.payload;
    const activeProps = selectActivePropsFromChartPointer(
      listenerApi.getState(),
      getChartPointer({
        clientX: touchEvent.touches[0].clientX,
        clientY: touchEvent.touches[0].clientY,
        currentTarget: touchEvent.currentTarget,
      }),
    );
    if (activeProps?.activeIndex != null) {
      listenerApi.dispatch(
        setMouseOverAxisIndex({
          activeIndex: activeProps.activeIndex,
          activeDataKey: undefined,
          activeCoordinate: activeProps.activeCoordinate,
        }),
      );
      listenerApi.dispatch(
        setActiveMouseOverItemIndex({
          activeIndex: activeProps.activeIndex,
          activeDataKey: undefined,
          activeCoordinate: activeProps.activeCoordinate,
        }),
      );
    }
  },
});
