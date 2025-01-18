import { RechartsRootState } from '../store';
import { TooltipPayloadSearcher } from '../tooltipSlice';

export const selectTooltipPayloadSearcher = (state: RechartsRootState): TooltipPayloadSearcher | undefined =>
  state.options.tooltipPayloadSearcher;
