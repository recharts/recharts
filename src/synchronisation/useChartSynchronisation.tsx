import { useEffect } from 'react';
import { PayloadAction } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { selectEventEmitter, selectSyncId, selectSyncMethod } from '../state/selectors/rootPropsSelectors';
import { eventCenter, TOOLTIP_SYNC_EVENT } from '../util/Events';
import { createEventEmitter } from '../state/optionsSlice';
import { setSyncInteraction, TooltipSyncState } from '../state/tooltipSlice';
import { selectTooltipDataKey } from '../state/selectors/selectors';
import { ChartCoordinate, TooltipEventType } from '../util/types';
import { TooltipTrigger } from '../chart/types';
import { selectTooltipAxisTicks } from '../state/selectors/tooltipSelectors';
import { selectSynchronisedTooltipState } from './syncSelectors';

/**
 * Registers a listener for the SYNC_EVENT event, which is used to synchronise actions across multiple charts.
 * This is the receiving end of the synchronisation.
 *
 * @returns void
 */
export function useSynchronisedEventsFromOtherCharts() {
  const mySyncId = useAppSelector(selectSyncId);
  const myEventEmitter = useAppSelector(selectEventEmitter);
  const dispatch = useAppDispatch();
  const syncMethod = useAppSelector(selectSyncMethod);
  const tooltipTicks = useAppSelector(selectTooltipAxisTicks);

  const className = useAppSelector(state => state.rootProps.className);

  useEffect(() => {
    dispatch(createEventEmitter());
  }, [dispatch]);

  useEffect(() => {
    eventCenter.on(
      TOOLTIP_SYNC_EVENT,
      (incomingSyncId: number | string, action: PayloadAction<TooltipSyncState>, emitter: symbol) => {
        console.log({ myEventEmitter, emitter });
        if (myEventEmitter == null || myEventEmitter === emitter) {
          // We don't want to dispatch actions that we sent ourselves.
          // Also do not receive events if the event emitter is not set yet.
          return;
        }
        console.log(`[${className}] received sync event`, { syncMethod, incomingSyncId, mySyncId, action });
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
            const syncAction = setSyncInteraction({
              active: action.payload.active,
              dataKey: action.payload.dataKey,
              index: String(tickByValue.index),
              label: action.payload.label,
            });
            console.log(`[${className}] dispatching`, { syncAction, syncMethod });
            dispatch(syncAction);
          }
        }
      },
    );

    return () => {
      eventCenter.off(TOOLTIP_SYNC_EVENT);
    };
  }, [dispatch, mySyncId]);
}

/*
 * Will send events to other charts
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
      console.log(`[${className}] Chart is receiving synchronisation events, so it will not send any.`);
      return;
    }
    const syncAction: PayloadAction<TooltipSyncState> = setSyncInteraction({
      active: isTooltipActive,
      dataKey: activeDataKey,
      index: activeIndex,
      label: activeLabel,
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
