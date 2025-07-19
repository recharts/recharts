import { RechartsRootState } from '../store';
import { AxisWithTicksSettings, selectAxisSettings } from './axisSelectors';
import { selectTooltipAxisType } from './selectTooltipAxisType';
import { selectTooltipAxisId } from './selectTooltipAxisId';

export const selectTooltipAxis = (state: RechartsRootState): AxisWithTicksSettings => {
  const axisType = selectTooltipAxisType(state);
  const axisId = selectTooltipAxisId(state);
  return selectAxisSettings(state, axisType, axisId);
};
