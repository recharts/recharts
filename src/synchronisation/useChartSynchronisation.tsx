import { useEffect } from 'react';
import { PayloadAction } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { selectEventEmitter, selectSyncId, selectSyncMethod } from '../state/selectors/rootPropsSelectors';
import { BRUSH_SYNC_EVENT, eventCenter, TOOLTIP_SYNC_EVENT } from '../util/Events';
import { createEventEmitter } from '../state/optionsSlice';
import { setSyncInteraction, TooltipSyncState } from '../state/tooltipSlice';
import { selectTooltipDataKey } from '../state/selectors/selectors';
import { ChartCoordinate, Coordinate, TooltipEventType } from '../util/types';
import { TooltipTrigger } from '../chart/types';
import { selectTooltipAxisTicks } from '../state/selectors/tooltipSelectors';
import { selectSynchronisedTooltipState } from './syncSelectors';
import { useChartLayout, useViewBox } from '../context/chartLayoutContext';
import { BrushStartEndIndex } from '../context/brushUpdateContext';
import { setDataStartEndIndexes } from '../state/chartDataSlice';

const originCoordinate: Coordinate = { x: 0, y: 0 };
const noop = () => {};

function useTooltipSyncEventsListener() {
  const mySyncId = useAppSelector(selectSyncId);
  const myEventEmitter = useAppSelector(selectEventEmitter);
  const dispatch = useAppDispatch();
  const syncMethod = useAppSelector(selectSyncMethod);
  const tooltipTicks = useAppSelector(selectTooltipAxisTicks);
  const layout = useChartLayout();
  const viewBox = useViewBox();

  const className = useAppSelector(state => state.rootProps.className);
  useEffect(() => {
    if (mySyncId == null) {
      // This chart is not synchronised with any other chart so we don't need to listen for any events.
      return noop;
    }

    const listener = (incomingSyncId: number | string, action: PayloadAction<TooltipSyncState>, emitter: symbol) => {
      if (myEventEmitter === emitter) {
        // We don't want to dispatch actions that we sent ourselves.
        return;
      }
      if (mySyncId === incomingSyncId) {
        if (syncMethod === 'index') {
          dispatch(action);
        } else if (syncMethod === 'value') {
          if (tooltipTicks == null) {
            return;
          }
          const tickByValue = tooltipTicks.find(tick => tick.value === action.payload.label);
          if (tickByValue == null) {
            dispatch(
              setSyncInteraction({
                active: false,
                coordinate: undefined,
                dataKey: undefined,
                index: null,
                label: undefined,
              }),
            );
            return;
          }
          const { x, y } = action.payload.coordinate;
          const validateChartX = Math.min(x, viewBox.x + viewBox.width);
          const validateChartY = Math.min(y, viewBox.y + viewBox.height);
          const activeCoordinate = tickByValue
            ? {
                x: layout === 'horizontal' ? tickByValue.coordinate : validateChartX,
                y: layout === 'horizontal' ? validateChartY : tickByValue.coordinate,
              }
            : originCoordinate;

          const syncAction = setSyncInteraction({
            active: action.payload.active,
            coordinate: activeCoordinate,
            dataKey: action.payload.dataKey,
            index: String(tickByValue.index),
            label: action.payload.label,
          });
          dispatch(syncAction);
        }
      }
    };
    eventCenter.on(TOOLTIP_SYNC_EVENT, listener);

    return () => {
      eventCenter.off(TOOLTIP_SYNC_EVENT, listener);
    };
  }, [className, dispatch, myEventEmitter, mySyncId, syncMethod, tooltipTicks, layout, viewBox]);
}

function useBrushSyncEventsListener() {
  const mySyncId = useAppSelector(selectSyncId);
  const myEventEmitter = useAppSelector(selectEventEmitter);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (mySyncId == null) {
      // This chart is not synchronised with any other chart so we don't need to listen for any events.
      return noop;
    }

    const listener = (incomingSyncId: number | string, action: BrushStartEndIndex, emitter: symbol) => {
      if (myEventEmitter === emitter) {
        // We don't want to dispatch actions that we sent ourselves.
        return;
      }
      if (mySyncId === incomingSyncId) {
        dispatch(setDataStartEndIndexes(action));
      }
    };
    eventCenter.on(BRUSH_SYNC_EVENT, listener);

    return () => {
      eventCenter.off(BRUSH_SYNC_EVENT, listener);
    };
  }, [dispatch, myEventEmitter, mySyncId]);
}

/**
 * Will receive synchronisation events from other charts.
 *
 * Reads syncMethod from state and decides how to synchronise the tooltip based on that.
 *
 * @returns void
 */
export function useSynchronisedEventsFromOtherCharts() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(createEventEmitter());
  }, [dispatch]);

  useTooltipSyncEventsListener();
  useBrushSyncEventsListener();
}

/**
 * Will send events to other charts.
 * If syncId is undefined, no events will be sent.
 *
 * This ignores the syncMethod, because that is set and computed on the receiving end.
 *
 * @param tooltipEventType from Tooltip
 * @param trigger from Tooltip
 * @param activeCoordinate from state
 * @param activeLabel from state
 * @param activeIndex from state
 * @param isTooltipActive from state
 * @returns void
 */
export function useTooltipChartSynchronisation(
  tooltipEventType: TooltipEventType,
  trigger: TooltipTrigger,
  activeCoordinate: ChartCoordinate | undefined,
  activeLabel: string | undefined,
  activeIndex: string | undefined,
  isTooltipActive: boolean,
) {
  const activeDataKey = useAppSelector(state => selectTooltipDataKey(state, tooltipEventType, trigger));
  const eventEmitterSymbol = useAppSelector(selectEventEmitter);
  const syncId = useAppSelector(selectSyncId);
  const syncMethod = useAppSelector(selectSyncMethod);
  const { active: isReceivingSynchronisation } = useAppSelector(selectSynchronisedTooltipState);
  useEffect(() => {
    if (isReceivingSynchronisation) {
      /*
       * This chart currently has active tooltip, synchronised from another chart.
       * Let's not send any outgoing synchronisation events while that's happening
       * to avoid infinite loops.
       */
      return;
    }
    if (syncId == null) {
      /*
       * syncId is not set, means that this chart is not synchronised with any other chart,
       * means we don't need to send synchronisation events
       */
      return;
    }
    const syncAction = setSyncInteraction({
      active: isTooltipActive,
      coordinate: activeCoordinate,
      dataKey: activeDataKey,
      index: activeIndex,
      // despite the typescript annotation, the state sometimes returns activeLabel as a number
      label: typeof activeLabel === 'number' ? String(activeLabel) : activeLabel,
    });
    eventCenter.emit(TOOLTIP_SYNC_EVENT, syncId, syncAction, eventEmitterSymbol);
  }, [
    isReceivingSynchronisation,
    activeCoordinate,
    activeDataKey,
    activeIndex,
    activeLabel,
    eventEmitterSymbol,
    syncId,
    syncMethod,
    isTooltipActive,
  ]);
}

export function useBrushChartSynchronisation() {
  const syncId = useAppSelector(selectSyncId);
  const eventEmitterSymbol = useAppSelector(selectEventEmitter);
  const brushStartIndex = useAppSelector(state => state.chartData.dataStartIndex);
  const brushEndIndex = useAppSelector(state => state.chartData.dataEndIndex);

  useEffect(() => {
    if (syncId == null) {
      return;
    }
    const syncAction: BrushStartEndIndex = { startIndex: brushStartIndex, endIndex: brushEndIndex };
    eventCenter.emit(BRUSH_SYNC_EVENT, syncId, syncAction, eventEmitterSymbol);
  }, [brushEndIndex, brushStartIndex, eventEmitterSymbol, syncId]);
}
