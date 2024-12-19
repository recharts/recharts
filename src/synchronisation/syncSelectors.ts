import { RechartsRootState } from '../state/store';
import { TooltipSyncState } from '../state/tooltipSlice';

export function selectSynchronisedTooltipState(state: RechartsRootState): TooltipSyncState {
  return state.tooltip.syncInteraction;
}
