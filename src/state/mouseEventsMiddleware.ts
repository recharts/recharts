import { createAction, createListenerMiddleware, ListenerEffectAPI, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RechartsRootState } from './store';
import { mouseLeaveChart, setMouseClickAxisIndex, setMouseOverAxisIndex, clearClickTooltip } from './tooltipSlice';
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
    const state = listenerApi.getState();

    const activeProps = selectActivePropsFromChartPointer(state, getChartPointer(mousePointer));

    if (activeProps?.activeIndex != null) {
      listenerApi.dispatch(
        setMouseClickAxisIndex({
          activeIndex: activeProps.activeIndex,
          activeDataKey: undefined,
          activeCoordinate: activeProps.activeCoordinate,
        }),
      );
    } else {
      // Check if we have a click-triggered tooltip active
      const hasClickTooltipActive =
        state.tooltip.itemInteraction.click.active || state.tooltip.axisInteraction.click.active;

      if (hasClickTooltipActive) {
        // Only clear click tooltips when clicking on empty chart areas
        // If there's an active item click tooltip and no axis interaction,
        // it means the user clicked on an item, so don't clear the tooltip
        const hasActiveItemClickTooltip = state.tooltip.itemInteraction.click.active;
        const hasActiveAxisClickTooltip = state.tooltip.axisInteraction.click.active;

        // Only clear if we have an axis click tooltip active (clicking on empty chart area)
        // Don't clear if we have an item click tooltip active (clicking on an item)
        if (hasActiveAxisClickTooltip && !hasActiveItemClickTooltip) {
          listenerApi.dispatch(clearClickTooltip());
        }
      }
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
