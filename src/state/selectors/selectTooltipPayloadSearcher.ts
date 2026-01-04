import { RechartsRootState } from '../store';
import { TooltipPayloadSearcher } from '../tooltipSlice';

export const selectTooltipPayloadSearcher = (state: RechartsRootState): TooltipPayloadSearcher =>
  state.options.tooltipPayloadSearcher;
