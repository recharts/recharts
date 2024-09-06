import { createSelector } from '@reduxjs/toolkit';
import { RechartsRootState } from '../store';
import { AxisId } from '../cartesianAxisSlice';
import { AngleAxisSettings, RadiusAxisSettings } from '../polarAxisSlice';
import { PolarChartOptions } from '../polarOptionsSlice';
import { selectChartHeight, selectChartWidth } from './containerSelectors';
import { selectChartOffset } from './selectChartOffset';
import { getMaxRadius } from '../../util/PolarUtils';
import { getPercentValue } from '../../util/DataUtils';

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

const selectPolarOptions = (state: RechartsRootState): PolarChartOptions | undefined => state.polarOptions;

const selectMaxRadius: (state: RechartsRootState) => number = createSelector(
  [selectChartWidth, selectChartHeight, selectChartOffset],
  getMaxRadius,
);

const selectInnerRadius: (state: RechartsRootState) => number | undefined = createSelector(
  [selectPolarOptions, selectMaxRadius],
  (polarChartOptions: PolarChartOptions | undefined, maxRadius: number) => {
    if (polarChartOptions == null) {
      return undefined;
    }
    return getPercentValue(polarChartOptions.innerRadius, maxRadius, 0);
  },
);

const selectOuterRadius: (state: RechartsRootState) => number | undefined = createSelector(
  [selectPolarOptions, selectMaxRadius],
  (polarChartOptions: PolarChartOptions | undefined, maxRadius: number) => {
    if (polarChartOptions == null) {
      return undefined;
    }
    return getPercentValue(polarChartOptions.outerRadius, maxRadius, maxRadius * 0.8);
  },
);

export const selectAngleAxisRangeWithReversed: (state: RechartsRootState, angleAxisId: AxisId) => [number, number] =
  createSelector(
    [selectPolarOptions, selectAngleAxis],
    (polarChartOptions: PolarChartOptions | undefined, angleAxis: AngleAxisSettings) => {
      if (polarChartOptions == null) {
        return undefined;
      }
      if (angleAxis.reversed) {
        return [polarChartOptions.endAngle, polarChartOptions.startAngle];
      }
      return [polarChartOptions.startAngle, polarChartOptions.endAngle];
    },
  );

export const selectRadiusAxisRangeWithReversed: (state: RechartsRootState, radiusAxisId: AxisId) => [number, number] =
  createSelector(
    [selectMaxRadius, selectInnerRadius, selectOuterRadius, selectRadiusAxis],
    (maxRadius, innerRadius, outerRadius, radiusAxis) => {
      if (maxRadius == null || innerRadius == null || outerRadius == null) {
        return undefined;
      }
      if (radiusAxis.reversed) {
        return [outerRadius, innerRadius];
      }
      return [innerRadius, outerRadius];
    },
  );
