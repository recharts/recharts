import { createSelector } from '@reduxjs/toolkit';
import { selectChartLayout } from '../context/chartLayoutContext';
import { ParsedScaleReturn, parseScale } from '../util/ChartUtils';
import { AxisType, CategoricalDomain, LayoutType, NumberDomain } from '../util/types';
import { AxisId, AxisSettings } from './axisMapSlice';
import { selectChartName } from './selectors';
import { RechartsRootState } from './store';
import { selectAllDataSquished } from './dataSelectors';

export const selectAxisSettings = (state: RechartsRootState, axisType: AxisType, axisId: AxisId): AxisSettings =>
  state.axisMap[axisType][axisId];

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

export const selectDomainOfDataByKey = (
  state: RechartsRootState,
  axisType: AxisType,
  axisId: AxisId,
): NumberDomain | CategoricalDomain => {
  const axisSettings = selectAxisSettings(state, axisType, axisId);
  if (axisSettings == null) {
    return undefined;
  }
  const allDataSquished = selectAllDataSquished(state, axisSettings.dataKey);

  if (axisSettings.type === 'number') {
    const onlyNumbers = allDataSquished
      .filter(v => typeof v === 'number' || typeof v === 'string')
      .map(Number)
      .filter(n => Number.isNaN(n) === false);
    return [Math.min(...onlyNumbers), Math.max(...onlyNumbers)];
  }

  return makeUniq(allDataSquished.map(onlyAllowNumbersAndStringsAndDates), axisSettings.allowDuplicatedCategory);
};

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
