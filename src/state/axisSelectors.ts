import { createSelector } from '@reduxjs/toolkit';
import isNil from 'lodash/isNil';
import { selectChartLayout } from '../context/chartLayoutContext';
import { ParsedScaleReturn, getValueByDataKey, parseScale } from '../util/ChartUtils';
import { AxisType, CategoricalDomain, LayoutType, NumberDomain } from '../util/types';
import { AxisId, AxisSettings } from './axisMapSlice';
import { selectAllGraphicalItemsData, selectChartDataWithIndexes, selectChartName } from './selectors';
import { RechartsRootState } from './store';

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
      const onlyNumbers = allDataSquished
        .filter(v => typeof v === 'number' || typeof v === 'string')
        .map(Number)
        .filter(n => Number.isNaN(n) === false);
      return [Math.min(...onlyNumbers), Math.max(...onlyNumbers)];
    }

    return makeUniq(allDataSquished.filter(nilPredicate(true)), axisSettings.allowDuplicatedCategory).map(
      onlyAllowNumbersAndStringsAndDates,
    );
  },
);

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
