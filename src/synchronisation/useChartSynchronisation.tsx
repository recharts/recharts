import { useEffect } from 'react';
import { PayloadAction } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { selectEventEmitter, selectSyncId, selectSyncMethod } from '../state/selectors/rootPropsSelectors';
import { eventCenter, TOOLTIP_SYNC_EVENT } from '../util/Events';
import { createEventEmitter } from '../state/optionsSlice';
import { setSyncInteraction, TooltipSyncState } from '../state/tooltipSlice';
import { selectTooltipDataKey } from '../state/selectors/selectors';
import { ChartCoordinate, Coordinate, TooltipEventType } from '../util/types';
import { TooltipTrigger } from '../chart/types';
import { selectTooltipAxisTicks } from '../state/selectors/tooltipSelectors';
import { selectSynchronisedTooltipState } from './syncSelectors';
import { useChartLayout, useViewBox } from '../context/chartLayoutContext';

const originCoordinate: Coordinate = { x: 0, y: 0 };
const noop = () => {};

/**
 * Will receive synchronisation events from other charts.
 *
 * Reads syncMethod from state and decides how to synchronise the tooltip based on that.
 *
 * @returns void
 */
export function useSynchronisedEventsFromOtherCharts() {
  const mySyncId = useAppSelector(selectSyncId);
  const myEventEmitter = useAppSelector(selectEventEmitter);
  const dispatch = useAppDispatch();
  const syncMethod = useAppSelector(selectSyncMethod);
  const tooltipTicks = useAppSelector(selectTooltipAxisTicks);
  const layout = useChartLayout();
  const viewBox = useViewBox();

  const className = useAppSelector(state => state.rootProps.className);

  useEffect(() => {
    dispatch(createEventEmitter());
  }, [dispatch]);

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
  const className = useAppSelector(state => state.rootProps.className);
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
    console.log(`[${className}] sending sync event`, { syncAction, syncMethod });
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
    className,
    isTooltipActive,
  ]);
}
