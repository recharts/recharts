import { RechartsRootState } from '../store';
import { TooltipState } from '../tooltipSlice';

export const selectTooltipState = (state: RechartsRootState): TooltipState => state.tooltip;
