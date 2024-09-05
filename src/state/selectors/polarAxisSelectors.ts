import { RechartsRootState } from '../store';
import { AxisId } from '../cartesianAxisSlice';
import { AngleAxisSettings, RadiusAxisSettings } from '../polarAxisSlice';

export const selectAngleAxis = (state: RechartsRootState, angleAxisId: AxisId): AngleAxisSettings | undefined =>
  state.polarAxis.angleAxis[angleAxisId];

export const selectRadiusAxis = (state: RechartsRootState, radiusAxisId: AxisId): RadiusAxisSettings | undefined =>
  state.polarAxis.radiusAxis[radiusAxisId];
