import { createAction, createListenerMiddleware, ListenerEffectAPI, PayloadAction } from '@reduxjs/toolkit';
import * as React from 'react';
import { AppDispatch, RechartsRootState } from './store';
import { setActiveMouseOverItemIndex, setMouseOverAxisIndex } from './tooltipSlice';
import { selectActivePropsFromChartPointer } from './selectors/selectActivePropsFromChartPointer';

import { getChartPointer } from '../util/getChartPointer';
import { selectTooltipEventType } from './selectors/selectTooltipEventType';
import { DATA_ITEM_DATAKEY_ATTRIBUTE_NAME, DATA_ITEM_INDEX_ATTRIBUTE_NAME } from '../util/Constants';
import { selectTooltipCoordinate } from './selectors/touchSelectors';

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
    if (tooltipEventType === 'axis') {
      const activeProps = selectActivePropsFromChartPointer(
        state,
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
      }
    } else if (tooltipEventType === 'item') {
      const touch = touchEvent.touches[0];
      const target = document.elementFromPoint(touch.clientX, touch.clientY);
      if (!target || !target.getAttribute) {
        return;
      }
      const itemIndex = target.getAttribute(DATA_ITEM_INDEX_ATTRIBUTE_NAME);
      const dataKey = target.getAttribute(DATA_ITEM_DATAKEY_ATTRIBUTE_NAME) ?? undefined;
      const coordinate = selectTooltipCoordinate(listenerApi.getState(), itemIndex, dataKey);

      listenerApi.dispatch(
        setActiveMouseOverItemIndex({
          activeDataKey: dataKey,
          activeIndex: itemIndex,
          activeCoordinate: coordinate,
        }),
      );
    }
  },
});
