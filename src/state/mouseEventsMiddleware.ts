import { createAction, createListenerMiddleware, ListenerEffectAPI, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RechartsRootState } from './store';
import { selectActivePropsFromMousePointer } from './selectors';
import { MousePointer } from '../chart/generateCategoricalChart';
import { mouseLeaveChart, setMouseClickAxisIndex, setMouseOverAxisIndex } from './tooltipSlice';

export const mouseClickAction = createAction<MousePointer>('mouseClick');

export const mouseClickMiddleware = createListenerMiddleware();

// TODO: there's a bug here when you click the chart the activeIndex resets to zero
mouseClickMiddleware.startListening({
  actionCreator: mouseClickAction,
  effect: (action: PayloadAction<MousePointer>, listenerApi: ListenerEffectAPI<RechartsRootState, AppDispatch>) => {
    const mousePointer = action.payload;
    const activeProps = selectActivePropsFromMousePointer(listenerApi.getState(), mousePointer);
    if (activeProps?.activeIndex != null) {
      listenerApi.dispatch(
        setMouseClickAxisIndex({
          activeIndex: activeProps.activeIndex,
          activeDataKey: undefined,
          activeClickCoordinate: activeProps.activeCoordinate,
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
    const activeProps = selectActivePropsFromMousePointer(listenerApi.getState(), mousePointer);
    if (activeProps?.activeIndex != null) {
      listenerApi.dispatch(
        setMouseOverAxisIndex({
          activeIndex: activeProps.activeIndex,
          activeDataKey: undefined,
          activeMouseOverCoordinate: activeProps.activeCoordinate,
        }),
      );
    } else {
      // this is needed to clear tooltip state when the mouse moves out of the inRange (svg - offset) function, but not yet out of the svg
      listenerApi.dispatch(mouseLeaveChart());
    }
  },
});
