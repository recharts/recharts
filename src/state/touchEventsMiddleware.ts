import { createAction, createListenerMiddleware, ListenerEffectAPI, PayloadAction } from '@reduxjs/toolkit';
import * as React from 'react';
import { AppDispatch, RechartsRootState } from './store';
import { setActiveMouseOverItemIndex, setMouseOverAxisIndex } from './tooltipSlice';
import { selectActivePropsFromChartPointer } from './selectors/selectActivePropsFromChartPointer';

import { getChartPointer } from '../util/getChartPointer';
import { selectTooltipEventType } from './selectors/selectTooltipEventType';
import { DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME, DATA_ITEM_INDEX_ATTRIBUTE_NAME } from '../util/Constants';
import { selectTooltipCoordinate } from './selectors/touchSelectors';
import { selectAllGraphicalItemsSettings } from './selectors/tooltipSelectors';

export const touchEventAction = createAction<React.TouchEvent<HTMLDivElement>>('touchMove');

export const touchEventMiddleware = createListenerMiddleware<RechartsRootState>();

touchEventMiddleware.startListening({
  actionCreator: touchEventAction,
  effect: (
    action: PayloadAction<React.TouchEvent<HTMLDivElement>>,
    listenerApi: ListenerEffectAPI<RechartsRootState, AppDispatch>,
  ) => {
    const touchEvent = action.payload;
    if (touchEvent.touches == null || touchEvent.touches.length === 0) {
      return;
    }
    const state = listenerApi.getState();
    const tooltipEventType = selectTooltipEventType(state, state.tooltip.settings.shared);
    if (tooltipEventType === 'axis') {
      const touch = touchEvent.touches[0];
      if (touch == null) {
        return;
      }
      const activeProps = selectActivePropsFromChartPointer(
        state,
        getChartPointer({
          clientX: touch.clientX,
          clientY: touch.clientY,
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
      if (document.elementFromPoint == null || touch == null) {
        return;
      }
      const target = document.elementFromPoint(touch.clientX, touch.clientY);
      if (!target || !target.getAttribute) {
        return;
      }
      const itemIndex = target.getAttribute(DATA_ITEM_INDEX_ATTRIBUTE_NAME);
      const graphicalItemId = target.getAttribute(DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME) ?? undefined;
      const settings = selectAllGraphicalItemsSettings(state).find(item => item.id === graphicalItemId);
      if (itemIndex == null || settings == null || graphicalItemId == null) {
        return;
      }
      const { dataKey } = settings;
      const coordinate = selectTooltipCoordinate(state, itemIndex, graphicalItemId);

      listenerApi.dispatch(
        setActiveMouseOverItemIndex({
          activeDataKey: dataKey,
          activeIndex: itemIndex,
          activeCoordinate: coordinate,
          activeGraphicalItemId: graphicalItemId,
        }),
      );
    }
  },
});
