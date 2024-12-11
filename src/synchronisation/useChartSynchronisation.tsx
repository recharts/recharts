import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { selectEventEmitter, selectSyncId } from '../state/selectors/rootPropsSelectors';
import { eventCenter, TOOLTIP_SYNC_EVENT } from '../util/Events';
import { SynchronisedTooltipAction } from './SynchronisedAction';
import { createEventEmitter } from '../state/optionsSlice';

/**
 * Registers a listener for the SYNC_EVENT event, which is used to synchronise actions across multiple charts.
 *
 * @returns void
 */
export function useChartSynchronisation() {
  const mySyncId = useAppSelector(selectSyncId);
  const myEventEmitter = useAppSelector(selectEventEmitter);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(createEventEmitter());
  }, [dispatch]);

  useEffect(() => {
    eventCenter.on(
      TOOLTIP_SYNC_EVENT,
      (incomingSyncId: number | string, action: SynchronisedTooltipAction, emitter: symbol) => {
        if (myEventEmitter === emitter) {
          // We don't want to dispatch actions that we sent ourselves.
          return;
        }
        if (mySyncId === incomingSyncId) {
          dispatch(action);
        }
      },
    );

    return () => {
      eventCenter.off(TOOLTIP_SYNC_EVENT);
    };
  }, [dispatch, mySyncId]);
}
