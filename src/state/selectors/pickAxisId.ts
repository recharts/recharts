import { RechartsRootState } from '../store';
import { AxisId } from '../cartesianAxisSlice';

export const pickAxisId = (_state: RechartsRootState, _axisType: unknown, axisId: AxisId): AxisId => axisId;
