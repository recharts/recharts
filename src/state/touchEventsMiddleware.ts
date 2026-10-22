import { createAction, createListenerMiddleware, ListenerEffectAPI, PayloadAction } from '@reduxjs/toolkit';
import * as React from 'react';
import { AppDispatch, RechartsRootState } from './store';
import { setActiveMouseOverItemIndex, setMouseOverAxisIndex } from './tooltipSlice';
import { selectActivePropsFromChartPointer } from './selectors/selectActivePropsFromChartPointer';

import { getRelativeCoordinate } from '../util/getRelativeCoordinate';
import { selectTooltipEventType } from './selectors/selectTooltipEventType';
import { DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME, DATA_ITEM_INDEX_ATTRIBUTE_NAME } from '../util/Constants';
import { selectTooltipItemDetails } from './selectors/touchSelectors';
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
          if (target == null || target.closest == null) {
            return;
          }
          /*
           * `elementFromPoint` returns the innermost element under the finger. Items that render as a
           * group - a custom `shape` that draws a `<g>` around its own paths, or a label painted on top
           * of the sector it belongs to - carry the markers on an ancestor, never on that deepest
           * element. Walking up to the nearest annotated element keeps those items resolvable, the same
           * way the bubbling mouse handlers already do.
           */
          const itemTarget = target.closest(`[${DATA_ITEM_INDEX_ATTRIBUTE_NAME}]`);
          if (itemTarget == null) {
            return;
          }
          const itemIndex = itemTarget.getAttribute(DATA_ITEM_INDEX_ATTRIBUTE_NAME);
          const graphicalItemId = itemTarget.getAttribute(DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME) ?? undefined;
          if (itemIndex == null || graphicalItemId == null) {
            return;
          }
          const itemDetails = selectTooltipItemDetails(currentState, itemIndex, graphicalItemId);
          if (itemDetails == null) {
            return;
          }
          const { dataKey, coordinate } = itemDetails;

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
