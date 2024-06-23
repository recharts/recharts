import { createSelector } from '@reduxjs/toolkit';
import range from 'lodash/range';
import { selectChartLayout, selectChartOffset } from '../context/chartLayoutContext';
import { getValueByDataKey, isCategoricalAxis, ParsedScaleReturn, parseScale } from '../util/ChartUtils';
import { AxisDomain, AxisType, CategoricalDomain, ChartOffset, LayoutType, NumberDomain } from '../util/types';
import { AxisId, AxisSettings, XAxisSettings, YAxisSettings } from './axisMapSlice';
import { selectBarCategoryGap, selectChartName } from './selectors';
import { RechartsRootState } from './store';
import { selectChartDataWithIndexes } from './dataSelectors';
import {
  numericalDomainSpecifiedWithoutRequiringData,
  parseNumericalUserDomain,
} from '../util/isDomainSpecifiedByUser';
import { AppliedChartData, ChartData } from './chartDataSlice';
import { getPercentValue, hasDuplicate } from '../util/DataUtils';
import { CartesianGraphicalItemSettings, ErrorBarsSettings } from './graphicalItemsSlice';

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

const pickAxisType = (_state: RechartsRootState, axisType: AxisType): AxisType => axisType;

/**
 * Filters CartesianGraphicalItemSettings by the relevant axis ID
 * @param axisType 'xAxis' | 'yAxis' | 'zAxis' | 'radiusAxis' | 'angleAxis'
 * @param axisId from props, defaults to 0
 *
 * @returns Predicate function that return true for CartesianGraphicalItemSettings that are relevant to the specified axis
 */
function itemAxisPredicate(axisType: AxisType, axisId: AxisId) {
  return (item: CartesianGraphicalItemSettings) => {
    switch (axisType) {
      case 'xAxis':
        // This is sensitive to the data type, as 0 !== '0'. I wonder if we should be more flexible. How does 2.x branch behave? TODO write test for that
        return item.xAxisId === axisId;
      case 'yAxis':
        return item.yAxisId === axisId;
      default:
        // TODO Z axis
        return false;
    }
  };
}

const selectCartesianItemsSettings: (
  state: RechartsRootState,
  axisType: AxisType,
  axisId: AxisId,
) => ReadonlyArray<CartesianGraphicalItemSettings> = (state: RechartsRootState, axisType: AxisType, axisId: AxisId) =>
  state.graphicalItems.cartesianItems.filter(itemAxisPredicate(axisType, axisId));

/**
 * This is a "cheap" selector - it returns the data but doesn't iterate them, so it is not sensitive on the array length.
 * Also does not apply dataKey yet.
 * @param state RechartsRootState
 * @returns data defined on the chart graphical items, such as Line or Scatter or Pie, and filtered with appropriate dataKey
 */
export const selectCartesianGraphicalItemsData: (
  state: RechartsRootState,
  axisType: AxisType,
  axisId: AxisId,
) => ChartData = createSelector(
  selectCartesianItemsSettings,
  (cartesianItems: ReadonlyArray<CartesianGraphicalItemSettings>) =>
    cartesianItems
      .map(item => item.data)
      .filter(Boolean)
      .flat(1),
);

/**
 * This selector will return all data there is in the chart: graphical items, chart root, all together.
 * Useful for figuring out an axis domain (because that needs to know of everything),
 * not useful for rendering individual graphical elements (because they need to know which data is theirs and which is not).
 *
 * This function will discard the original indexes, so it is also not useful for anything that depends on ordering.
 */
export const selectDisplayedData: (
  state: RechartsRootState,
  axisType: AxisType,
  axisId: AxisId,
) => ChartData | undefined = createSelector(
  selectCartesianGraphicalItemsData,
  selectChartDataWithIndexes,
  (graphicalItemsData: ChartData, { chartData = [], dataStartIndex, dataEndIndex }): ChartData | undefined => {
    if (graphicalItemsData.length > 0) {
      /*
       * There is no slicing when data is defined on graphical items. Why?
       * Because Brush ignores data defined on graphical items,
       * and does not render.
       * So Brush will never show up in a Scatter chart for example.
       * This is something we will need to fix.
       *
       * Now, when the root chart data is not defined, the dataEndIndex is 0,
       * which means the itemsData will be sliced to an empty array anyway.
       * But that's an implementation detail, and we can fix that too.
       *
       * Also, in absence of Axis dataKey, we use the dataKey from each item, respectively.
       * This is the usual pattern for numerical axis, that is the one where bars go up:
       * users don't specify any dataKey by default and expect the axis to "just match the data".
       */
      return graphicalItemsData;
    }
    return chartData.slice(dataStartIndex, dataEndIndex + 1);
  },
);

/**
 * This selector will return all values with the appropriate dataKey applied on them.
 * Which dataKey is appropriate depends on where it is defined.
 *
 * This is an expensive selector - it will iterate all data and compute their value using the provided dataKey.
 */
export const selectAllAppliedValues = createSelector(
  selectDisplayedData,
  selectAxisSettings,
  selectCartesianItemsSettings,
  (
    data: ChartData,
    axisSettings: AxisSettings,
    items: ReadonlyArray<CartesianGraphicalItemSettings>,
  ): AppliedChartData => {
    if (axisSettings?.dataKey != null) {
      return data.map(item => ({ value: getValueByDataKey(item, axisSettings.dataKey) }));
    }
    if (items.length > 0) {
      return items
        .map(item => item.dataKey)
        .flatMap(dataKey => data.map(entry => ({ value: getValueByDataKey(entry, dataKey) })));
    }
    return data.map(entry => ({ value: entry }));
  },
);

export function getDefaultDomainByAxisType(axisType: 'number' | string) {
  return axisType === 'number' ? [0, 'auto'] : undefined;
}

function onlyAllowNumbersAndStringsAndDates(item: { value: unknown }): string | number | Date {
  const { value } = item;
  if ((typeof value === 'number' && !Number.isNaN(value)) || typeof value === 'string' || value instanceof Date) {
    return value;
  }
  return '';
}

function onlyAllowNumbers(data: AppliedChartData): ReadonlyArray<number> {
  return data
    .map(entry => entry.value)
    .filter(v => typeof v === 'number' || typeof v === 'string')
    .map(Number)
    .filter(n => Number.isNaN(n) === false);
}

const computeNumericalDomain = (allDataSquished: AppliedChartData): NumberDomain | undefined => {
  const onlyNumbers = onlyAllowNumbers(allDataSquished);
  return [Math.min(...onlyNumbers), Math.max(...onlyNumbers)];
};

const computeCategoricalDomain = (allDataSquished: AppliedChartData, axisSettings: AxisSettings): CategoricalDomain => {
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

  const allDataSquished = selectAllAppliedValues(state, axisType, axisId);
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

  const { dataKey, type } = axisSettings;
  const layout = selectChartLayout(state);
  const isCategorical = isCategoricalAxis(layout, axisType);

  if (isCategorical && dataKey == null) {
    const allDataSquished = selectDisplayedData(state, axisType, axisId);
    return range(0, allDataSquished.length);
  }

  if (type === 'category') {
    const allDataSquished = selectAllAppliedValues(state, axisType, axisId);
    return computeCategoricalDomain(allDataSquished, axisSettings);
  }

  // TODO getDomainOfStackGroups here

  return selectNumericalDomain(state, axisSettings, axisType, axisId);
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
  selectAllAppliedValues,
  selectAxisSettings,
  (allDataSquished: AppliedChartData, axisSettings: AxisSettings): number | undefined => {
    if (!axisSettings || axisSettings.type !== 'number') {
      return undefined;
    }
    let smallestDistanceBetweenValues = Infinity;
    const sortedValues = Array.from(onlyAllowNumbers(allDataSquished)).sort();
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
    pickAxisType,
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

function isErrorBarRelevantForAxisType(axisType: AxisType): (errorBar: ErrorBarsSettings) => boolean {
  switch (axisType) {
    case 'xAxis':
      return (errorBar: ErrorBarsSettings) => errorBar.direction === 'x';
    case 'yAxis':
      return (errorBar: ErrorBarsSettings) => errorBar.direction === 'y';
    default:
      return () => false;
  }
}

export const selectErrorBarsSettings = createSelector(
  selectCartesianItemsSettings,
  pickAxisType,
  (
    items: ReadonlyArray<CartesianGraphicalItemSettings>,
    axisType: AxisType,
  ): ReadonlyArray<ErrorBarsSettings> | undefined => {
    return items
      .flatMap(item => {
        return item.errorBars ?? [];
      })
      .filter(e => {
        return isErrorBarRelevantForAxisType(axisType)(e);
      });
  },
);
