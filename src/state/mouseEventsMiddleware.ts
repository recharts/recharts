import { createAction, createListenerMiddleware, ListenerEffectAPI, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RechartsRootState } from './store';
import { selectActiveIndexFromMousePointer } from './selectors';
import { MousePointer } from '../chart/generateCategoricalChart';
import { setMouseClickAxisIndex, setMouseOverAxisIndex, TooltipIndex } from './tooltipSlice';

export const mouseClickAction = createAction<MousePointer>('mouseClick');

export const mouseClickMiddleware = createListenerMiddleware();

mouseClickMiddleware.startListening({
  actionCreator: mouseClickAction,
  effect: (action: PayloadAction<MousePointer>, listenerApi: ListenerEffectAPI<RechartsRootState, AppDispatch>) => {
    const mousePointer = action.payload;
    const activeIndex: TooltipIndex = selectActiveIndexFromMousePointer(listenerApi.getState(), mousePointer);
    if (activeIndex != null) {
      listenerApi.dispatch(setMouseClickAxisIndex({ activeIndex, activeDataKey: undefined }));
    }
  },
});

export const mouseMoveAction = createAction<MousePointer>('mouseMove');

export const mouseMoveMiddleware = createListenerMiddleware();

mouseMoveMiddleware.startListening({
  actionCreator: mouseMoveAction,
  effect: (action: PayloadAction<MousePointer>, listenerApi: ListenerEffectAPI<RechartsRootState, AppDispatch>) => {
    const mousePointer = action.payload;
    const activeIndex: TooltipIndex = selectActiveIndexFromMousePointer(listenerApi.getState(), mousePointer);
    if (activeIndex != null) {
      listenerApi.dispatch(setMouseOverAxisIndex({ activeIndex, activeDataKey: undefined }));
    }
  },
});
