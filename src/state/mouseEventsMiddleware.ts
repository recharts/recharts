import { createAction, createListenerMiddleware, ListenerEffectAPI, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RechartsRootState } from './store';
import { mouseLeaveChart, setMouseClickAxisIndex, setMouseOverAxisIndex } from './tooltipSlice';
import { selectActivePropsFromChartPointer } from './selectors/selectActivePropsFromChartPointer';
import { selectTooltipEventType } from './selectors/selectTooltipEventType';

import { getChartPointer } from '../util/getChartPointer';
import { MousePointer } from '../util/types';

export const mouseClickAction = createAction<MousePointer>('mouseClick');

export const mouseClickMiddleware = createListenerMiddleware();

// TODO: there's a bug here when you click the chart the activeIndex resets to zero
mouseClickMiddleware.startListening({
  actionCreator: mouseClickAction,
  effect: (action: PayloadAction<MousePointer>, listenerApi: ListenerEffectAPI<RechartsRootState, AppDispatch>) => {
    const mousePointer = action.payload;
    const activeProps = selectActivePropsFromChartPointer(listenerApi.getState(), getChartPointer(mousePointer));
    if (activeProps?.activeIndex != null) {
      listenerApi.dispatch(
        setMouseClickAxisIndex({
          activeIndex: activeProps.activeIndex,
          activeDataKey: undefined,
          activeCoordinate: activeProps.activeCoordinate,
        }),
      );
    }
  },
});

export const mouseMoveAction = createAction<MousePointer>('mouseMove');

export const mouseMoveMiddleware = createListenerMiddleware();

mouseMoveMiddleware.startListening({
  actionCreator: mouseMoveAction,
  effect: (action: PayloadAction<MousePointer>, listenerApi: ListenerEffectAPI<RechartsRootState, AppDispatch>) => {
    const mousePointer = action.payload;
    const state = listenerApi.getState();
    const tooltipEventType = selectTooltipEventType(state, state.tooltip.settings.shared);
    const activeProps = selectActivePropsFromChartPointer(state, getChartPointer(mousePointer));

    // this functionality only applies to charts that have axes
    if (tooltipEventType === 'axis') {
      if (activeProps?.activeIndex != null) {
        listenerApi.dispatch(
          setMouseOverAxisIndex({
            activeIndex: activeProps.activeIndex,
            activeDataKey: undefined,
            activeCoordinate: activeProps.activeCoordinate,
          }),
        );
      } else {
        // this is needed to clear tooltip state when the mouse moves out of the inRange (svg - offset) function, but not yet out of the svg
        listenerApi.dispatch(mouseLeaveChart());
      }
    }
  },
});
