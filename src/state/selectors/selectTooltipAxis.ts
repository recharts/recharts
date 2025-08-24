import { createSelector } from 'reselect';
import { RechartsRootState } from '../store';
import { AxisWithTicksSettings, selectAxisSettings } from './axisSelectors';
import { selectTooltipAxisType } from './selectTooltipAxisType';
import { selectTooltipAxisId } from './selectTooltipAxisId';
import { DataKey } from '../../util/types';

export const selectTooltipAxis = (state: RechartsRootState): AxisWithTicksSettings => {
  const axisType = selectTooltipAxisType(state);
  const axisId = selectTooltipAxisId(state);
  return selectAxisSettings(state, axisType, axisId);
};

export const selectTooltipAxisDataKey: (state: RechartsRootState) => DataKey<any> | undefined = createSelector(
  [selectTooltipAxis],
  (axis: AxisWithTicksSettings | undefined): DataKey<any> | undefined => axis?.dataKey,
);
