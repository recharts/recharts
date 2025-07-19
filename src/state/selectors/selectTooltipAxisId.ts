import { RechartsRootState } from '../store';
import { AxisId } from '../cartesianAxisSlice';

export const selectTooltipAxisId = (state: RechartsRootState): AxisId => state.tooltip.settings.axisId;
