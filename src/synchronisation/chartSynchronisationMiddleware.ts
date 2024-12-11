import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import {
  mouseLeaveChart,
  mouseLeaveItem,
  setActiveClickItemIndex,
  setActiveMouseOverItemIndex,
  setMouseClickAxisIndex,
  setMouseOverAxisIndex,
  setSyncInteraction,
} from '../state/tooltipSlice';
import { eventCenter, TOOLTIP_SYNC_EVENT } from '../util/Events';
import { selectEventEmitter, selectSyncId } from '../state/selectors/rootPropsSelectors';
import { RechartsRootState } from '../state/store';
import { SynchronisedTooltipAction } from './SynchronisedAction';

export const chartSynchronisationMiddleware = createListenerMiddleware<RechartsRootState>();

chartSynchronisationMiddleware.startListening({
  matcher: isAnyOf(setActiveClickItemIndex, setActiveMouseOverItemIndex, setMouseClickAxisIndex, setMouseOverAxisIndex),
  effect: (action: SynchronisedTooltipAction, listenerApi) => {
    const state: RechartsRootState = listenerApi.getState();
    const syncId = selectSyncId(state);
    const eventEmitterSymbol = selectEventEmitter(state);
    if (syncId == null) {
      return;
    }
    const syncAction = setSyncInteraction({
      activeCoordinate: action.payload.activeCoordinate,
      activeDataKey: action.payload.activeDataKey,
      activeIndex: action.payload.activeIndex,
    });

    eventCenter.emit(TOOLTIP_SYNC_EVENT, syncId, syncAction, eventEmitterSymbol);
  },
});

chartSynchronisationMiddleware.startListening({
  matcher: isAnyOf(mouseLeaveItem, mouseLeaveChart),
  effect: (_action: SynchronisedTooltipAction, listenerApi) => {
    const state: RechartsRootState = listenerApi.getState();
    const syncId = selectSyncId(state);
    const eventEmitterSymbol = selectEventEmitter(state);
    if (syncId == null) {
      return;
    }
    const syncAction = setSyncInteraction({
      activeCoordinate: undefined,
      activeDataKey: undefined,
      activeIndex: undefined,
    });

    eventCenter.emit(TOOLTIP_SYNC_EVENT, syncId, syncAction, eventEmitterSymbol);
  },
});
