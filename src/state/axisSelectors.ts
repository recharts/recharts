import { createSelector } from '@reduxjs/toolkit';
import { selectChartLayout, selectChartOffset } from '../context/chartLayoutContext';
import { ParsedScaleReturn, parseScale } from '../util/ChartUtils';
import { AxisDomain, AxisType, CategoricalDomain, ChartOffset, LayoutType, NumberDomain } from '../util/types';
import { AxisId, AxisSettings, XAxisSettings } from './axisMapSlice';
import { selectChartName } from './selectors';
import { RechartsRootState } from './store';
import { selectAllDataSquished } from './dataSelectors';
import {
  numericalDomainSpecifiedWithoutRequiringData,
  parseNumericalUserDomain,
} from '../util/isDomainSpecifiedByUser';
import { ChartData } from './chartDataSlice';

export const selectAxisSettings = (state: RechartsRootState, axisType: AxisType, axisId: AxisId): AxisSettings =>
  state.axisMap[axisType][axisId];

export const selectXAxisSettings = (state: RechartsRootState, axisId: AxisId): XAxisSettings => {
  return state.axisMap.xAxis[axisId];
};

export const selectHasBar = (state: RechartsRootState): boolean => state.graphicalItems.countOfBars > 0;

const unknownScale: ParsedScaleReturn = {
  scale: undefined,
  realScaleType: undefined,
};

export function getDefaultDomainByAxisType(axisType: 'number' | string) {
  return axisType === 'number' ? [0, 'auto'] : undefined;
}

function makeUniq<T>(arr: ReadonlyArray<T>, allowDuplicates: boolean): ReadonlyArray<T> {
  if (allowDuplicates) {
    return arr;
  }
  return Array.from(new Set(arr));
}

function onlyAllowNumbersAndStringsAndDates<T>(item: T): string | number | Date {
  if ((typeof item === 'number' && !Number.isNaN(item)) || typeof item === 'string' || item instanceof Date) {
    return item;
  }
  return '';
}

const computeNumericalDomain = (allDataSquished: ChartData): NumberDomain | undefined => {
  const onlyNumbers = allDataSquished
    .filter(v => typeof v === 'number' || typeof v === 'string')
    .map(Number)
    .filter(n => Number.isNaN(n) === false);
  return [Math.min(...onlyNumbers), Math.max(...onlyNumbers)];
};

const computeCategoricalDomain = (allDataSquished: ChartData, axisSettings: AxisSettings): CategoricalDomain => {
  return makeUniq(allDataSquished.map(onlyAllowNumbersAndStringsAndDates), axisSettings.allowDuplicatedCategory);
};

const selectNumericalDomain = (
  state: RechartsRootState,
  axisSettings: AxisSettings,
  axisType: AxisType,
  axisId: AxisId,
): NumberDomain => {
  const domainDefinition: AxisDomain = axisSettings.domain ?? [0, 'auto'];

  const domainFromUserPreference = numericalDomainSpecifiedWithoutRequiringData(
    domainDefinition,
    axisSettings.allowDataOverflow,
  );
  if (domainFromUserPreference != null) {
    // We're done! No need to compute anything else.
    return domainFromUserPreference;
  }

  const allDataSquished = selectAllDataSquished(state, axisType, axisId, axisSettings.dataKey);
  const domainFromData = computeNumericalDomain(allDataSquished);

  return parseNumericalUserDomain(
    domainDefinition,
    domainFromData,
    axisSettings.allowDataOverflow,
    axisSettings.allowDecimals,
  );
};

export const selectAxisDomain = (
  state: RechartsRootState,
  axisType: AxisType,
  axisId: AxisId,
): NumberDomain | CategoricalDomain => {
  const axisSettings = selectAxisSettings(state, axisType, axisId);
  if (axisSettings == null) {
    return undefined;
  }

  if (axisSettings.type === 'number') {
    return selectNumericalDomain(state, axisSettings, axisType, axisId);
  }

  const allDataSquished = selectAllDataSquished(state, axisType, axisId, axisSettings.dataKey);
  return computeCategoricalDomain(allDataSquished, axisSettings);
};

// const getSmallestDistanceBetweenValues: (state: RechartsRootState, axisType: AxisType, axisId: AxisId)=> number | undefined = createSelector(
//   selectAllDataSquished,
//   selectAxisDomain,
//   selectAxisSettings,
//   (_state: RechartsRootState, axisType: AxisType, axisId: AxisId) => axisType,
//   (allDataSquished: ChartData, axisSettings: AxisSettings, axisType: AxisType): number | undefined => {
//     if (axisSettings.type !== 'number') {
//       return undefined;
//   }
//     let smallestDistanceBetweenValues = Infinity;
//     const sortedValues = allDataSquished
//
// )
//
// const selectCalculatedPadding: (state: RechartsRootState, axisType: AxisType, axisId: string) => number =
//   createSelector(
//     selectAxisSettings,
//     selectChartOffset,
//     selectChartLayout,
//     selectAxisDomain,
//     (
//       axisSettings: AxisSettings,
//       offset: ChartOffset,
//       chartLayout: LayoutType,
//       domain: NumberDomain | CategoricalDomain,
//     ) => {
//       if ((axisSettings.padding !== 'gap' && axisSettings.padding !== 'no-gap') || axisSettings.type !== 'number') {
//         return 0;
//       }
//       const diff = domain[1] - domain[0];
//       let smallestDistanceBetweenValues = Infinity;
//       const sortedValues = axis.categoricalDomain.sort();
//       sortedValues.forEach((value: number, index: number) => {
//         if (index > 0) {
//           smallestDistanceBetweenValues = Math.min(
//             (value || 0) - (sortedValues[index - 1] || 0),
//             smallestDistanceBetweenValues,
//           );
//         }
//       });
//       const smallestDistanceInPercent = smallestDistanceBetweenValues / diff;
//       const rangeWidth = chartLayout === 'vertical' ? offset.height : offset.width;
//       if (axisSettings.padding === 'gap') {
//         return (smallestDistanceInPercent * rangeWidth) / 2;
//       }
//     },
//   );
//
// export const combineXAxisRange = (
//   offset: ChartOffset,
//   layout: LayoutType,
//   calculatedPadding: number | undefined,
//   axisSettings: XAxisSettings,
// ): ReadonlyArray<number> | undefined => {
//   const { padding = {} } = axisSettings;
//   return [
//     offset.left + (padding.left || 0) + (calculatedPadding || 0),
//     offset.left + offset.width - (padding.right || 0) - (calculatedPadding || 0),
//   ];
// };

export const selectAxisScale: (state: RechartsRootState, axisType: AxisType, axisId: AxisId) => ParsedScaleReturn =
  createSelector(
    selectAxisSettings,
    selectChartLayout,
    selectHasBar,
    selectChartName,
    selectAxisDomain,
    (_: RechartsRootState, axisType: AxisType) => axisType,
    (
      axisConfig: AxisSettings,
      chartLayout: LayoutType,
      hasBar: boolean,
      chartName: string,
      axisDomain,
      axisType: AxisType,
    ) => {
      if (axisConfig == null || axisDomain == null) {
        return unknownScale;
      }
      const parsedScaleReturn: ParsedScaleReturn = parseScale(
        {
          scale: axisConfig.scale,
          type: axisConfig.type,
          layout: chartLayout,
          axisType,
        },
        chartName,
        hasBar,
      );
      parsedScaleReturn.scale.domain(axisDomain);
      return parsedScaleReturn;
    },
  );
