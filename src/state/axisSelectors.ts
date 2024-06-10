import { createSelector } from '@reduxjs/toolkit';
import { selectChartLayout } from '../context/chartLayoutContext';
import { ParsedScaleReturn, parseScale } from '../util/ChartUtils';
import { AxisDomain, AxisType, CategoricalDomain, LayoutType, NumberDomain } from '../util/types';
import { AxisId, AxisSettings } from './axisMapSlice';
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
