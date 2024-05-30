import { createSelector } from '@reduxjs/toolkit';
import { RechartsRootState } from './store';
import { AxisDomain, AxisType, CategoricalDomain, ChartOffset, LayoutType, NumberDomain } from '../util/types';
import {
  ParsedScaleReturn,
  getDomainOfDataByKey,
  getValueByDataKey,
  isCategoricalAxis,
  parseScale,
  parseSpecifiedDomain,
} from '../util/ChartUtils';
import { AxisId, AxisSettings } from './axisMapSlice';
import { selectChartLayout, selectChartOffset } from '../context/chartLayoutContext';
import { selectAllGraphicalItemsData, selectChartDataWithIndexes, selectChartName } from './selectors';
import { isDomainSpecifiedByUser } from '../util/isDomainSpecifiedByUser';
import isNil from 'lodash/isNil';

export const selectAxisSettings = (state: RechartsRootState, axisType: AxisType, axisId: string): AxisSettings =>
  state.axisMap[axisType][axisId];

export const selectHasBar = (state: RechartsRootState): boolean => state.graphicalItems.countOfBars > 0;

const unknownScale: ParsedScaleReturn = {
  scale: undefined,
  realScaleType: undefined,
};

export function getDefaultDomainByAxisType(axisType: 'number' | string) {
  return axisType === 'number' ? [0, 'auto'] : undefined;
}

type AllDomains = {
  domain: AxisDomain;
  categoricalDomain: AxisDomain;
  duplicateDomain: AxisDomain;
  originalDomain: AxisDomain;
};

const noDomains: AllDomains = {
  domain: undefined,
  originalDomain: undefined,
  categoricalDomain: undefined,
  duplicateDomain: undefined,
};

export function combineAxisDomains(
  axisSettings: AxisSettings,
  axisType: AxisType,
  chartLayout: LayoutType,
): AllDomains {
  if (axisSettings == null) {
    return noDomains;
  }

  let domain: AxisDomain, categoricalDomain: AxisDomain;
  const defaultDomain = getDefaultDomainByAxisType(axisType);
  const isCategorical = isCategoricalAxis(chartLayout, axisType);
  /*
   * This is a hack to short-circuit the domain creation here to enhance performance.
   * Usually, the data is used to determine the domain, but when the user specifies
   * a domain upfront (via props), there is no need to calculate the domain start and end,
   * which is very expensive for a larger amount of data.
   * The only thing that would prohibit short-circuiting is when the user doesn't allow data overflow,
   * because the axis is supposed to ignore the specified domain that way.
   */
  if (isDomainSpecifiedByUser(axisSettings.domain, axisSettings.allowDataOverflow, axisSettings.type)) {
    domain = parseSpecifiedDomain(axisSettings.domain, null, axisSettings.allowDataOverflow);
    /* The chart can be categorical and have the domain specified in numbers
     * we still need to calculate the categorical domain
     */
    if (isCategorical && (axisSettings.type === 'number' || axisSettings.scale !== 'auto')) {
      categoricalDomain = getDomainOfDataByKey(displayedData, dataKey, 'category');
    }
    return {
      domain,
      categoricalDomain,
      originalDomain: axisSettings.domain || defaultDomain,
    };
  }
}

function nilPredicate(filterNil: boolean) {
  return function predicate<T>(item: T): boolean {
    if (filterNil) {
      return !isNil(item);
    }
    return true;
  };
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

export const selectDomainOfDataByKey: (
  state: RechartsRootState,
  axisType: AxisType,
  axisId: AxisId,
) => NumberDomain | CategoricalDomain = createSelector(
  selectChartDataWithIndexes,
  selectAllGraphicalItemsData,
  selectAxisSettings,
  (chartData, graphicalItemsData, axisSettings: AxisSettings): NumberDomain | CategoricalDomain => {
    if (axisSettings == null) {
      return undefined;
    }
    // Array.prototype.flat has good support everywhere except IE11: https://caniuse.com/?search=flat
    const allDataSquished = graphicalItemsData
      .flat(1)
      .concat(chartData.chartData)
      .map(entry => getValueByDataKey(entry, axisSettings.dataKey));

    if (axisSettings.type === 'number') {
      const onlyNumbers = allDataSquished.map(Number).filter(n => Number.isNaN(n) === false);
      return [Math.min(...onlyNumbers), Math.max(...onlyNumbers)];
    }

    return makeUniq(allDataSquished.filter(nilPredicate(true)), axisSettings.allowDuplicatedCategory).map(
      onlyAllowNumbersAndStringsAndDates,
    );
  },
);

// const selectAxisDomains: (state: RechartsRootState, axisType: AxisType, axisId: string) => AllDomains = createSelector(, combineAxisDomains);

// const selectCalculatedPadding: (state: RechartsRootState, axisType: AxisType, axisId: string) => number =
//   createSelector(
//     selectAxisSettings,
//     selectChartOffset,
//     selectChartLayout,
//     (axisSettings: AxisSettings, offset: ChartOffset, chartLayout: LayoutType) => {
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

export const selectAxisScale: (state: RechartsRootState, axisType: AxisType, axisId: string) => ParsedScaleReturn =
  createSelector(
    selectAxisSettings,
    selectChartLayout,
    selectHasBar,
    selectChartName,
    (_, axisType) => axisType,
    (axisConfig: AxisSettings, chartLayout: LayoutType, hasBar: boolean, chartName: string, axisType: AxisType) => {
      if (axisConfig == null) {
        return unknownScale;
      }
      return parseScale(
        {
          scale: axisConfig.scale,
          type: axisConfig.type,
          layout: chartLayout,
          axisType,
        },
        chartName,
        hasBar,
      );
    },
  );
