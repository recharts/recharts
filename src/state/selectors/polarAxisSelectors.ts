import { RechartsRootState } from '../store';
import { AxisId } from '../cartesianAxisSlice';
import { AngleAxisSettings } from '../polarAxisSlice';

export const selectAngleAxis = (state: RechartsRootState, angleAxisId: AxisId): AngleAxisSettings | undefined =>
  state.polarAxis.angleAxis[angleAxisId];
