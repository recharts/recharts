import { createSelector } from '@reduxjs/toolkit';
import range from 'lodash/range';
import { selectChartLayout, selectChartOffset } from '../context/chartLayoutContext';
import { getValueByDataKey, ParsedScaleReturn, parseScale } from '../util/ChartUtils';
import { AxisDomain, AxisType, CategoricalDomain, ChartOffset, LayoutType, NumberDomain } from '../util/types';
import { AxisId, AxisSettings, XAxisSettings, YAxisSettings } from './axisMapSlice';
import { selectBarCategoryGap, selectChartName } from './selectors';
import { RechartsRootState } from './store';
import { selectChartDataWithIndexes } from './dataSelectors';
import {
  numericalDomainSpecifiedWithoutRequiringData,
  parseNumericalUserDomain,
} from '../util/isDomainSpecifiedByUser';
import { ChartData } from './chartDataSlice';
import { getPercentValue, hasDuplicate } from '../util/DataUtils';
import { CartesianGraphicalItemSettings } from './graphicalItemsSlice';

export const selectXAxisSettings = (state: RechartsRootState, axisId: AxisId): XAxisSettings => {
  return state.axisMap.xAxis[axisId];
};

export const selectYAxisSettings = (state: RechartsRootState, axisId: AxisId): AxisSettings => {
  return state.axisMap.yAxis[axisId];
};

export const selectAxisSettings = (state: RechartsRootState, axisType: AxisType, axisId: AxisId): AxisSettings => {
  switch (axisType) {
    case 'xAxis':
      return selectXAxisSettings(state, axisId);
    case 'yAxis':
      return selectYAxisSettings(state, axisId);
    default:
      throw new Error('Not implemented yet, TODO add!');
  }
};

export const selectHasBar = (state: RechartsRootState): boolean => state.graphicalItems.countOfBars > 0;

/**
 * This is a "cheap" selector - it returns the data but doesn't iterate them, so it is not sensitive on the array length.
 * @param state RechartsRootState
 * @returns data defined on the chart graphical items, such as Line or Scatter or Pie
 */
export const selectCartesianGraphicalItemsData: (
  state: RechartsRootState,
  axisType: AxisType,
  axisId: AxisId,
) => ReadonlyArray<ChartData> = createSelector(
  (state: RechartsRootState) => state.graphicalItems.cartesianItems,
  (_state, axisType: AxisType) => axisType,
  (_state, _axisType, axisId: AxisId) => axisId,
  (cartesianItems: ReadonlyArray<CartesianGraphicalItemSettings>, axisType: AxisType, axisId: AxisId) =>
    cartesianItems
      .filter(item => {
        if (axisType === 'xAxis') {
          // This is sensitive to the data type, as 0 !== '0'. I wonder if we should be more flexible. How does 2.x branch behave? TODO write test for that
          return item.xAxisId === axisId;
        }
        return false;
      })
      .map(item => item.data)
      .filter(Boolean),
);

/**
 * This selector will return all data there is in the chart: graphical items, chart root, all together
 * and all processed by a single DataKey.
 * Useful for figuring out an axis domain (because that needs to know of everything),
 * not useful for rendering individual graphical elements (because they need to know which data is theirs and which is not).
 *
 * Will read the dataKey from axis settings, which means a matching axis has to be present.
 * Without an axis this will return undefined.
 *
 * This function will discard the original indexes, so it is also not useful for anything that depends on ordering.
 *
 * This is an expensive selector - it will iterate all data and compute their value using the provided dataKey.
 */
export const selectAllDataSquished: (
  state: RechartsRootState,
  axisType: AxisType,
  axisId: AxisId,
) => ChartData | undefined = createSelector(
  selectCartesianGraphicalItemsData,
  selectChartDataWithIndexes,
  selectAxisSettings,
  (graphicalItemsData: ReadonlyArray<ChartData>, { chartData = [] }, axisSettings: AxisSettings) => {
    if (axisSettings == null) {
      return undefined;
    }
    const itemsData = graphicalItemsData.flat(1);

    const finalData = itemsData.length > 0 ? itemsData : chartData;

    return finalData.map(entry => getValueByDataKey(entry, axisSettings.dataKey));
  },
);

export function getDefaultDomainByAxisType(axisType: 'number' | string) {
  return axisType === 'number' ? [0, 'auto'] : undefined;
}

function onlyAllowNumbersAndStringsAndDates<T>(item: T): string | number | Date {
  if ((typeof item === 'number' && !Number.isNaN(item)) || typeof item === 'string' || item instanceof Date) {
    return item;
  }
  return '';
}

function onlyAllowNumbers(data: ChartData): ReadonlyArray<number> {
  return data
    .filter(v => typeof v === 'number' || typeof v === 'string')
    .map(Number)
    .filter(n => Number.isNaN(n) === false);
}

const computeNumericalDomain = (allDataSquished: ChartData): NumberDomain | undefined => {
  const onlyNumbers = onlyAllowNumbers(allDataSquished);
  return [Math.min(...onlyNumbers), Math.max(...onlyNumbers)];
};

const computeCategoricalDomain = (allDataSquished: ChartData, axisSettings: AxisSettings): CategoricalDomain => {
  const categoricalDomain = allDataSquished.map(onlyAllowNumbersAndStringsAndDates);
  if (axisSettings.dataKey == null || (axisSettings.allowDuplicatedCategory && hasDuplicate(categoricalDomain))) {
    /*
     * 1. In an absence of dataKey, Recharts will use array indexes as its categorical domain
     * 2. When category axis has duplicated text, serial numbers are used to generate scale
     */
    return range(0, allDataSquished.length);
  }
  if (axisSettings.allowDuplicatedCategory) {
    return categoricalDomain;
  }
  return Array.from(new Set(categoricalDomain));
};

const selectNumericalDomain = (
  state: RechartsRootState,
  axisSettings: AxisSettings,
  axisType: AxisType,
  axisId: AxisId,
): NumberDomain => {
  const domainDefinition: AxisDomain = axisSettings.domain ?? [0, 'auto'];

  const domainFromUserPreference: NumberDomain | undefined = numericalDomainSpecifiedWithoutRequiringData(
    domainDefinition,
    axisSettings.allowDataOverflow,
  );
  if (domainFromUserPreference != null) {
    // We're done! No need to compute anything else.
    return domainFromUserPreference;
  }

  const allDataSquished = selectAllDataSquished(state, axisType, axisId);
  const domainFromData = computeNumericalDomain(allDataSquished);

  return parseNumericalUserDomain(
    domainDefinition,
    domainFromData,
    axisSettings.allowDataOverflow,
    axisSettings.allowDecimals,
    axisSettings.tickCount,
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

  const allDataSquished = selectAllDataSquished(state, axisType, axisId);
  return computeCategoricalDomain(allDataSquished, axisSettings);
};

/**
 * Returns the smallest gap, between two numbers in the data, as a ratio of the whole range (max - min).
 * Ignores domain provided by user and only considers domain from data.
 *
 * The result is a number between 0 and 1.
 */
export const selectSmallestDistanceBetweenValues: (
  state: RechartsRootState,
  axisType: AxisType,
  axisId: AxisId,
) => number | undefined = createSelector(
  selectAllDataSquished,
  selectAxisSettings,
  (allDataSquished: ChartData, axisSettings: AxisSettings): number | undefined => {
    if (!axisSettings || axisSettings.type !== 'number') {
      return undefined;
    }
    let smallestDistanceBetweenValues = Infinity;
    const sortedValues = onlyAllowNumbers(allDataSquished).toSorted();
    if (sortedValues.length < 2) {
      return Infinity;
    }
    const diff = sortedValues[sortedValues.length - 1] - sortedValues[0];
    if (diff === 0) {
      return Infinity;
    }
    sortedValues.forEach((value: number, index: number) => {
      smallestDistanceBetweenValues = Math.min(
        (value || 0) - (sortedValues[index - 1] || 0),
        smallestDistanceBetweenValues,
      );
    });
    return smallestDistanceBetweenValues / diff;
  },
);

const selectCalculatedPadding: (
  state: RechartsRootState,
  axisType: AxisType,
  axisId: AxisId,
  padding: string,
) => number = createSelector(
  selectSmallestDistanceBetweenValues,
  selectChartLayout,
  selectBarCategoryGap,
  selectChartOffset,
  (_1, _2, _3, padding) => padding,
  (
    smallestDistanceInPercent: number | undefined,
    layout: LayoutType,
    barCategoryGap: number | string,
    offset: ChartOffset,
    padding: string,
  ) => {
    if (!Number.isFinite(smallestDistanceInPercent)) {
      return 0;
    }
    const rangeWidth = layout === 'vertical' ? offset.height : offset.width;

    if (padding === 'gap') {
      return (smallestDistanceInPercent * rangeWidth) / 2;
    }

    if (padding === 'no-gap') {
      const gap = getPercentValue(barCategoryGap, smallestDistanceInPercent * rangeWidth);
      const halfBand = (smallestDistanceInPercent * rangeWidth) / 2;
      return halfBand - gap - ((halfBand - gap) / rangeWidth) * gap;
    }

    return 0;
  },
);

export const selectCalculatedXAxisPadding: (state: RechartsRootState, axisId: AxisId) => number = (state, axisId) => {
  const xAxisSettings = selectXAxisSettings(state, axisId);
  if (xAxisSettings == null || typeof xAxisSettings.padding !== 'string') {
    return 0;
  }
  return selectCalculatedPadding(state, 'xAxis', axisId, xAxisSettings.padding);
};

const selectXAxisPadding: (state: RechartsRootState, axisId: AxisId) => { left: number; right: number } =
  createSelector(
    selectXAxisSettings,
    selectCalculatedXAxisPadding,
    (xAxisSettings: XAxisSettings, calculated: number) => {
      if (xAxisSettings == null) {
        return { left: 0, right: 0 };
      }
      const { padding } = xAxisSettings;
      if (typeof padding === 'string') {
        return { left: calculated, right: calculated };
      }
      return {
        left: (padding.left ?? 0) + calculated,
        right: (padding.right ?? 0) + calculated,
      };
    },
  );

const selectYAxisPadding: (state: RechartsRootState, axisId: AxisId) => { top: number; bottom: number } =
  createSelector(
    selectYAxisSettings,
    selectCalculatedXAxisPadding,
    (yAxisSettings: YAxisSettings, calculated: number) => {
      if (yAxisSettings == null) {
        return { top: 0, bottom: 0 };
      }
      const { padding } = yAxisSettings;
      if (typeof padding === 'string') {
        return { top: calculated, bottom: calculated };
      }
      return {
        top: (padding.top ?? 0) + calculated,
        bottom: (padding.bottom ?? 0) + calculated,
      };
    },
  );

export const combineXAxisRange = createSelector(
  selectChartOffset,
  selectXAxisPadding,
  (offset: ChartOffset, padding): ReadonlyArray<number> | undefined => {
    return [offset.left + padding.left, offset.left + offset.width - padding.right];
  },
);

export const combineYAxisRange = createSelector(
  selectChartOffset,
  selectChartLayout,
  selectYAxisPadding,
  (
    offset: ChartOffset,
    layout: LayoutType,
    padding: { top: number; bottom: number },
  ): ReadonlyArray<number> | undefined => {
    if (layout === 'horizontal') {
      return [offset.top + offset.height - padding.bottom, offset.top + padding.top];
    }
    return [offset.top + padding.top, offset.top + offset.height - padding.bottom];
  },
);

const selectAxisRange = (
  state: RechartsRootState,
  axisType: AxisType,
  axisId: AxisId,
): ReadonlyArray<number> | undefined => {
  switch (axisType) {
    case 'xAxis':
      return combineXAxisRange(state, axisId);
    case 'yAxis':
      return combineYAxisRange(state, axisId);
    default:
      return undefined;
  }
};

const unknownScale: ParsedScaleReturn = {
  scale: undefined,
  realScaleType: undefined,
};

export const selectAxisScale: (state: RechartsRootState, axisType: AxisType, axisId: AxisId) => ParsedScaleReturn =
  createSelector(
    selectAxisSettings,
    selectChartLayout,
    selectHasBar,
    selectChartName,
    selectAxisDomain,
    selectAxisRange,
    (_: RechartsRootState, axisType: AxisType) => axisType,
    (
      axisConfig: AxisSettings,
      chartLayout: LayoutType,
      hasBar: boolean,
      chartName: string,
      axisDomain,
      axisRange,
      axisType: AxisType,
    ) => {
      if (axisConfig == null || axisDomain == null || axisRange == null) {
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
      parsedScaleReturn.scale.domain(axisDomain).range(axisRange);
      return parsedScaleReturn;
    },
  );
