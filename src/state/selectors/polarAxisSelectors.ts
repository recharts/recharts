import { createSelector } from 'reselect';
import { RechartsRootState } from '../store';
import { AxisId } from '../cartesianAxisSlice';
import { AngleAxisSettings, RadiusAxisSettings } from '../polarAxisSlice';
import { PolarChartOptions } from '../polarOptionsSlice';
import { selectChartHeight, selectChartWidth } from './containerSelectors';
import { selectChartOffsetInternal } from './selectChartOffsetInternal';
import { getMaxRadius } from '../../util/PolarUtils';
import { getPercentValue } from '../../util/DataUtils';
import { AxisDomainTypeInput, LayoutType, PolarLayout, PolarViewBoxRequired } from '../../util/types';
import { defaultPolarAngleAxisProps } from '../../polar/defaultPolarAngleAxisProps';
import { defaultPolarRadiusAxisProps } from '../../polar/defaultPolarRadiusAxisProps';
import { AxisRange } from './axisSelectors';
import { combineAxisRangeWithReverse } from './combiners/combineAxisRangeWithReverse';
import { selectChartLayout, selectPolarChartLayout } from '../../context/chartLayoutContext';
import { getAxisTypeBasedOnLayout } from '../../util/getAxisTypeBasedOnLayout';

export const implicitAngleAxis: Omit<AngleAxisSettings, 'type'> & { type: AxisDomainTypeInput } = {
  allowDataOverflow: defaultPolarAngleAxisProps.allowDataOverflow,
  allowDecimals: defaultPolarAngleAxisProps.allowDecimals,
  allowDuplicatedCategory: false, // defaultPolarAngleAxisProps.allowDuplicatedCategory has it set to true but the actual axis rendering ignores the prop because reasons,
  dataKey: undefined,
  domain: undefined,
  id: defaultPolarAngleAxisProps.angleAxisId,
  includeHidden: false,
  name: undefined,
  reversed: defaultPolarAngleAxisProps.reversed,
  scale: defaultPolarAngleAxisProps.scale,
  tick: defaultPolarAngleAxisProps.tick,
  tickCount: undefined,
  ticks: undefined,
  type: defaultPolarAngleAxisProps.type,
  unit: undefined,
  niceTicks: false,
};

export const implicitRadiusAxis: Omit<RadiusAxisSettings, 'type'> & { type: AxisDomainTypeInput } = {
  allowDataOverflow: defaultPolarRadiusAxisProps.allowDataOverflow,
  allowDecimals: defaultPolarRadiusAxisProps.allowDecimals,
  allowDuplicatedCategory: defaultPolarRadiusAxisProps.allowDuplicatedCategory,
  dataKey: undefined,
  domain: undefined,
  id: defaultPolarRadiusAxisProps.radiusAxisId,
  includeHidden: defaultPolarRadiusAxisProps.includeHidden,
  name: undefined,
  reversed: defaultPolarRadiusAxisProps.reversed,
  scale: defaultPolarRadiusAxisProps.scale,
  tick: defaultPolarRadiusAxisProps.tick,
  tickCount: defaultPolarRadiusAxisProps.tickCount,
  ticks: undefined,
  type: defaultPolarRadiusAxisProps.type,
  unit: undefined,
  niceTicks: false,
};

const selectAngleAxisNoDefaults = (
  state: RechartsRootState,
  angleAxisId: AxisId | undefined,
): AngleAxisSettings | undefined => {
  if (angleAxisId == null) {
    return undefined;
  }
  return state.polarAxis.angleAxis[angleAxisId];
};

export const selectAngleAxis: (state: RechartsRootState, angleAxisId: AxisId | undefined) => AngleAxisSettings =
  createSelector(
    [selectAngleAxisNoDefaults, selectPolarChartLayout],
    (angleAxisSettings, layout: PolarLayout | undefined): AngleAxisSettings => {
      if (angleAxisSettings != null) {
        return angleAxisSettings;
      }
      const evaluatedType = getAxisTypeBasedOnLayout(layout, 'angleAxis', implicitAngleAxis.type) ?? 'category';
      return {
        ...implicitAngleAxis,
        type: evaluatedType,
      };
    },
  );

const selectRadiusAxisNoDefaults = (state: RechartsRootState, radiusAxisId: AxisId): RadiusAxisSettings | undefined => {
  return state.polarAxis.radiusAxis[radiusAxisId];
};

export const selectRadiusAxis: (state: RechartsRootState, radiusAxisId: AxisId) => RadiusAxisSettings = createSelector(
  [selectRadiusAxisNoDefaults, selectPolarChartLayout],
  (radiusAxisSettings, layout: PolarLayout | undefined): RadiusAxisSettings => {
    if (radiusAxisSettings != null) {
      return radiusAxisSettings;
    }
    const evaluatedType = getAxisTypeBasedOnLayout(layout, 'radiusAxis', implicitRadiusAxis.type) ?? 'category';
    return {
      ...implicitRadiusAxis,
      type: evaluatedType,
    };
  },
);

export const selectPolarOptions = (state: RechartsRootState): PolarChartOptions | null => state.polarOptions;

export const selectMaxRadius: (state: RechartsRootState) => number = createSelector(
  [selectChartWidth, selectChartHeight, selectChartOffsetInternal],
  getMaxRadius,
);

const selectInnerRadius: (state: RechartsRootState) => number | undefined = createSelector(
  [selectPolarOptions, selectMaxRadius],
  (polarChartOptions: PolarChartOptions | null, maxRadius: number) => {
    if (polarChartOptions == null) {
      return undefined;
    }
    return getPercentValue(polarChartOptions.innerRadius, maxRadius, 0);
  },
);

export const selectOuterRadius: (state: RechartsRootState) => number | undefined = createSelector(
  [selectPolarOptions, selectMaxRadius],
  (polarChartOptions: PolarChartOptions | null, maxRadius: number) => {
    if (polarChartOptions == null) {
      return undefined;
    }
    return getPercentValue(polarChartOptions.outerRadius, maxRadius, maxRadius * 0.8);
  },
);

const combineAngleAxisRange = (polarOptions: PolarChartOptions | null): AxisRange => {
  if (polarOptions == null) {
    return [0, 0];
  }
  const { startAngle, endAngle } = polarOptions;
  return [startAngle, endAngle];
};

export const selectAngleAxisRange: (state: RechartsRootState) => AxisRange = createSelector(
  [selectPolarOptions],
  combineAngleAxisRange,
);

export const selectAngleAxisRangeWithReversed: (
  state: RechartsRootState,
  angleAxisId: AxisId,
) => AxisRange | undefined = createSelector([selectAngleAxis, selectAngleAxisRange], combineAxisRangeWithReverse);

export const selectRadiusAxisRange: (state: RechartsRootState, radiusAxisId: AxisId) => AxisRange | undefined =
  createSelector([selectMaxRadius, selectInnerRadius, selectOuterRadius], (maxRadius, innerRadius, outerRadius) => {
    if (maxRadius == null || innerRadius == null || outerRadius == null) {
      return undefined;
    }
    return [innerRadius, outerRadius];
  });

export const selectRadiusAxisRangeWithReversed: (
  state: RechartsRootState,
  radiusAxisId: AxisId,
) => AxisRange | undefined = createSelector([selectRadiusAxis, selectRadiusAxisRange], combineAxisRangeWithReverse);

export const selectPolarViewBox: (state: RechartsRootState) => PolarViewBoxRequired | undefined = createSelector(
  [selectChartLayout, selectPolarOptions, selectInnerRadius, selectOuterRadius, selectChartWidth, selectChartHeight],
  (
    layout: LayoutType,
    polarOptions: PolarChartOptions | null,
    innerRadius,
    outerRadius,
    width,
    height,
  ): PolarViewBoxRequired | undefined => {
    if (
      (layout !== 'centric' && layout !== 'radial') ||
      polarOptions == null ||
      innerRadius == null ||
      outerRadius == null
    ) {
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
      clockWise: false, // this property look useful, why not use it?
    };
  },
);
