import { createAction, createListenerMiddleware, ListenerEffectAPI, PayloadAction } from '@reduxjs/toolkit';
import * as React from 'react';
import { AppDispatch, RechartsRootState } from './store';
import { setActiveMouseOverItemIndex, setMouseOverAxisIndex } from './tooltipSlice';
import { selectActivePropsFromChartPointer } from './selectors/selectActivePropsFromChartPointer';

import { getRelativeCoordinate } from '../util/getRelativeCoordinate';
import { selectTooltipEventType } from './selectors/selectTooltipEventType';
import { DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME, DATA_ITEM_INDEX_ATTRIBUTE_NAME } from '../util/Constants';
import { selectTooltipCoordinate, selectTooltipDataKey } from './selectors/touchSelectors';
import { selectAllGraphicalItemsSettings } from './selectors/tooltipSelectors';
import { RelativePointer } from '../util/types';
import { createEventProxy } from '../util/createEventProxy';

export const touchEventAction = createAction<React.TouchEvent<HTMLDivElement>>('touchMove');

export const touchEventMiddleware = createListenerMiddleware<RechartsRootState>();

let rafId: number | null = null;
let timeoutId: ReturnType<typeof setTimeout> | null = null;
let latestChartPointers: ReadonlyArray<RelativePointer> | null = null;
let latestTouchEvent: React.TouchEvent<HTMLDivElement> | null = null;

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

    latestTouchEvent = createEventProxy(touchEvent);

    const state = listenerApi.getState();
    const { throttleDelay, throttledEvents } = state.eventSettings;
    const isThrottled = throttledEvents === 'all' || throttledEvents.includes('touchmove');

    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    if (timeoutId !== null && (typeof throttleDelay !== 'number' || !isThrottled)) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }

    latestChartPointers = Array.from(touchEvent.touches).map(touch =>
      getRelativeCoordinate({
        clientX: touch.clientX,
        clientY: touch.clientY,
        currentTarget: touchEvent.currentTarget,
      }),
    );

    const callback = () => {
      try {
        if (latestTouchEvent == null) {
          return;
        }

        const currentState = listenerApi.getState();
        const tooltipEventType = selectTooltipEventType(currentState, currentState.tooltip.settings.shared);
        if (tooltipEventType === 'axis') {
          const latestTouchPointer = latestChartPointers?.[0];
          if (latestTouchPointer == null) {
            return;
          }
          const activeProps = selectActivePropsFromChartPointer(currentState, latestTouchPointer);
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
          const touch = latestTouchEvent.touches[0];
          if (document.elementFromPoint == null || touch == null) {
            return;
          }
          const target = document.elementFromPoint(touch.clientX, touch.clientY);
          /*
           * Custom renderers can return fragments or components that drop the cloned props,
           * so the element under the finger may be a bare descendant; the item attributes
           * live on the nearest ancestor (the item's Layer carries them too).
           */
          const itemTarget = target?.closest(
            `[${DATA_ITEM_INDEX_ATTRIBUTE_NAME}][${DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME}]`,
          );
          if (!itemTarget) {
            return;
          }
          const itemIndex = itemTarget.getAttribute(DATA_ITEM_INDEX_ATTRIBUTE_NAME);
          const graphicalItemId = itemTarget.getAttribute(DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME) ?? undefined;
          const settings = selectAllGraphicalItemsSettings(currentState).find(item => item.id === graphicalItemId);
          if (itemIndex == null || graphicalItemId == null) {
            return;
          }
          /*
           * Graphical items that register a tooltip payload but no graphical item settings
           * (for example Sankey) still expose a dataKey through their tooltip entry settings.
           */
          const dataKey = settings?.dataKey ?? selectTooltipDataKey(currentState, graphicalItemId);
          /*
           * Charts like Sankey do not define tooltip positions, so fall back to the finger position
           * to place the Tooltip next to the touch point.
           */
          const coordinateFromTooltip = selectTooltipCoordinate(currentState, itemIndex, graphicalItemId);
          const touchPointer = latestChartPointers?.[0];
          const coordinate =
            coordinateFromTooltip ??
            (touchPointer == null ? undefined : { x: touchPointer.relativeX, y: touchPointer.relativeY });

          listenerApi.dispatch(
            setActiveMouseOverItemIndex({
              activeDataKey: dataKey,
              activeIndex: itemIndex,
              activeCoordinate: coordinate,
              activeGraphicalItemId: graphicalItemId,
            }),
          );
        }
      } finally {
        rafId = null;
        timeoutId = null;
      }
    };

    if (!isThrottled) {
      callback();
      return;
    }

    if (throttleDelay === 'raf') {
      rafId = requestAnimationFrame(callback);
    } else if (typeof throttleDelay === 'number') {
      if (timeoutId === null) {
        callback();
        latestTouchEvent = null;

        timeoutId = setTimeout(() => {
          if (latestTouchEvent) {
            callback();
          } else {
            timeoutId = null;
            rafId = null;
          }
        }, throttleDelay);
      }
    }
  },
});
