import { RechartsRootState } from '../store';
import { TooltipSettingsState } from '../tooltipSlice';

export const selectTooltipSettings = (state: RechartsRootState): TooltipSettingsState => state.tooltip.settings;
