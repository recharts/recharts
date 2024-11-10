import { createSelector } from '@reduxjs/toolkit';
import { RechartsRootState } from '../store';
import { AxisId } from '../cartesianAxisSlice';
import { AngleAxisSettings, RadiusAxisSettings } from '../polarAxisSlice';
import { PolarChartOptions } from '../polarOptionsSlice';
import { selectChartHeight, selectChartWidth } from './containerSelectors';
import { selectChartOffset } from './selectChartOffset';
import { getMaxRadius } from '../../util/PolarUtils';
import { getPercentValue } from '../../util/DataUtils';
import { PolarViewBox } from '../../util/types';
import { defaultPolarAngleAxisProps } from '../../polar/defaultPolarAngleAxisProps';
import { defaultPolarRadiusAxisProps } from '../../polar/defaultPolarRadiusAxisProps';

export const implicitAngleAxis: AngleAxisSettings = {
  allowDataOverflow: false,
  allowDecimals: false,
  allowDuplicatedCategory: false, // defaultPolarAngleAxisProps.allowDuplicatedCategory has it set to true but the actual axis rendering ignores the prop because reasons,
  dataKey: undefined,
  domain: defaultPolarAngleAxisProps.domain,
  id: undefined,
  includeHidden: false,
  name: undefined,
  reversed: defaultPolarAngleAxisProps.reversed,
  scale: defaultPolarAngleAxisProps.scale,
  tick: defaultPolarAngleAxisProps.tick,
  tickCount: defaultPolarAngleAxisProps.tickCount,
  ticks: undefined,
  type: defaultPolarAngleAxisProps.type,
  unit: undefined,
};

export const implicitRadiusAxis: RadiusAxisSettings = {
  allowDataOverflow: defaultPolarRadiusAxisProps.allowDataOverflow,
  allowDecimals: false,
  allowDuplicatedCategory: defaultPolarRadiusAxisProps.allowDuplicatedCategory,
  dataKey: undefined,
  domain: defaultPolarRadiusAxisProps.domain,
  id: undefined,
  includeHidden: false,
  name: undefined,
  reversed: false,
  scale: defaultPolarRadiusAxisProps.scale,
  tick: defaultPolarRadiusAxisProps.tick,
  tickCount: defaultPolarRadiusAxisProps.tickCount,
  ticks: undefined,
  type: defaultPolarRadiusAxisProps.type,
  unit: undefined,
};

const implicitRadialBarAngleAxis: RadiusAxisSettings = {
  allowDataOverflow: false,
  allowDecimals: false,
  allowDuplicatedCategory: defaultPolarAngleAxisProps.allowDuplicatedCategory,
  dataKey: undefined,
  domain: defaultPolarAngleAxisProps.domain,
  id: undefined,
  includeHidden: false,
  name: undefined,
  reversed: false,
  scale: defaultPolarAngleAxisProps.scale,
  tick: defaultPolarAngleAxisProps.tick,
  tickCount: defaultPolarAngleAxisProps.tickCount,
  ticks: undefined,
  type: 'number',
  unit: undefined,
};

export const implicitRadialBarRadiusAxis: RadiusAxisSettings = {
  allowDataOverflow: defaultPolarRadiusAxisProps.allowDataOverflow,
  allowDecimals: false,
  allowDuplicatedCategory: defaultPolarRadiusAxisProps.allowDuplicatedCategory,
  dataKey: undefined,
  domain: defaultPolarRadiusAxisProps.domain,
  id: undefined,
  includeHidden: false,
  name: undefined,
  reversed: false,
  scale: defaultPolarRadiusAxisProps.scale,
  tick: defaultPolarRadiusAxisProps.tick,
  tickCount: defaultPolarRadiusAxisProps.tickCount,
  ticks: undefined,
  type: 'category',
  unit: undefined,
};

export const selectAngleAxis = (state: RechartsRootState, angleAxisId: AxisId): AngleAxisSettings | undefined => {
  if (state.polarAxis.angleAxis[angleAxisId] != null) {
    return state.polarAxis.angleAxis[angleAxisId];
  }
  if (state.layout.layoutType === 'radial') {
    return implicitRadialBarAngleAxis;
  }
  return implicitAngleAxis;
};

export const selectRadiusAxis = (state: RechartsRootState, radiusAxisId: AxisId): RadiusAxisSettings | undefined => {
  if (state.polarAxis.radiusAxis[radiusAxisId] != null) {
    return state.polarAxis.radiusAxis[radiusAxisId];
  }
  if (state.layout.layoutType === 'radial') {
    return implicitRadialBarRadiusAxis;
  }
  return implicitRadiusAxis;
};

export const selectPolarOptions = (state: RechartsRootState): PolarChartOptions | undefined => state.polarOptions;

export const selectMaxRadius: (state: RechartsRootState) => number = createSelector(
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

export const selectOuterRadius: (state: RechartsRootState) => number | undefined = createSelector(
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

export const selectPolarViewBox: (state: RechartsRootState) => PolarViewBox = createSelector(
  [selectPolarOptions, selectInnerRadius, selectOuterRadius, selectChartWidth, selectChartHeight],
  (polarOptions: PolarChartOptions | undefined, innerRadius, outerRadius, width, height): PolarViewBox | undefined => {
    if (polarOptions == null) {
      return undefined;
    }
    const { cx, cy, startAngle, endAngle } = polarOptions;
    return {
      cx: getPercentValue(cx, width, width / 2),
      cy: getPercentValue(cy, height, height / 2),
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      clockWise: false,
    };
  },
);
