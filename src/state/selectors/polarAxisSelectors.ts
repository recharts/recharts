import { RechartsRootState } from '../store';
import { AxisId } from '../cartesianAxisSlice';
import { AngleAxisSettings, RadiusAxisSettings } from '../polarAxisSlice';

export const implicitAngleAxis: AngleAxisSettings = {
  allowDataOverflow: false,
  allowDuplicatedCategory: true,
  dataKey: undefined,
  id: undefined,
  includeHidden: false,
  name: undefined,
  reversed: false,
  scale: undefined,
  type: 'category',
  unit: undefined,
};
export const implicitRadiusAxis: RadiusAxisSettings = {
  allowDataOverflow: false,
  allowDuplicatedCategory: true,
  dataKey: undefined,
  id: undefined,
  includeHidden: false,
  name: undefined,
  reversed: false,
  scale: undefined,
  type: 'number',
  unit: undefined,
};

export const selectAngleAxis = (state: RechartsRootState, angleAxisId: AxisId): AngleAxisSettings | undefined =>
  state.polarAxis.angleAxis[angleAxisId] ?? implicitAngleAxis;

export const selectRadiusAxis = (state: RechartsRootState, radiusAxisId: AxisId): RadiusAxisSettings | undefined =>
  state.polarAxis.radiusAxis[radiusAxisId] ?? implicitRadiusAxis;
