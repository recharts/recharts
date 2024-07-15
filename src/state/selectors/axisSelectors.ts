import { createSelector } from '@reduxjs/toolkit';
import range from 'lodash/range';
import { Series } from 'victory-vendor/d3-shape';
import { selectChartLayout, selectChartOffset } from '../../context/chartLayoutContext';
import {
  getDomainOfStackGroups,
  getStackedData,
  getValueByDataKey,
  isCategoricalAxis,
  ParsedScaleReturn,
  parseScale,
  StackId,
} from '../../util/ChartUtils';
import {
  AxisDomain,
  AxisType,
  CategoricalDomain,
  ChartOffset,
  DataKey,
  LayoutType,
  NumberDomain,
  StackOffsetType,
} from '../../util/types';
import { AxisId, AxisSettings, XAxisSettings, YAxisSettings } from '../axisMapSlice';
import { selectBarCategoryGap, selectChartName, selectStackOffsetType } from './selectors';
import { RechartsRootState } from '../store';
import { selectChartDataWithIndexes } from './dataSelectors';
import {
  isWellFormedNumberDomain,
  numericalDomainSpecifiedWithoutRequiringData,
  parseNumericalUserDomain,
} from '../../util/isDomainSpecifiedByUser';
import { AppliedChartData, ChartData } from '../chartDataSlice';
import { getPercentValue, hasDuplicate } from '../../util/DataUtils';
import { CartesianGraphicalItemSettings, ErrorBarsSettings } from '../graphicalItemsSlice';
import { isWellBehavedNumber } from '../../util/isWellBehavedNumber';
import { getNiceTickValues, getTickValuesFixedDomain } from '../../util/scale';
import { ReferenceAreaSettings, ReferenceDotSettings, ReferenceLineSettings } from '../referenceElementsSlice';

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
const pickAxisId = (_state: RechartsRootState, _axisType: AxisType, axisId: AxisId): AxisId => axisId;

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

const selectUnfilteredCartesianItems = (state: RechartsRootState) => state.graphicalItems.cartesianItems;

const selectCartesianItemsSettings: (
  state: RechartsRootState,
  axisType: AxisType,
  axisId: AxisId,
) => ReadonlyArray<CartesianGraphicalItemSettings> = createSelector(
  selectUnfilteredCartesianItems,
  selectAxisSettings,
  pickAxisType,
  pickAxisId,
  (cartesianItems, axisSettings, axisType: AxisType, axisId: AxisId) =>
    cartesianItems.filter(itemAxisPredicate(axisType, axisId)).filter(item => {
      if (axisSettings?.includeHidden === true) {
        return true;
      }
      return !item.hide;
    }),
);

const selectCartesianItemsSettingsExceptStacked: (
  state: RechartsRootState,
  axisType: AxisType,
  axisId: AxisId,
) => ReadonlyArray<CartesianGraphicalItemSettings> = createSelector(selectCartesianItemsSettings, cartesianItems =>
  cartesianItems.filter(item => item.stackId === undefined),
);

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

export function isErrorBarRelevantForAxisType(axisType: AxisType, errorBar: ErrorBarsSettings): boolean {
  switch (axisType) {
    case 'xAxis':
      return errorBar.direction === 'x';
    case 'yAxis':
      return errorBar.direction === 'y';
    default:
      return false;
  }
}

type AppliedChartDataWithErrorDomain = {
  /**
   * This is the value after the dataKey has been applied. Presumably a number? But no guarantees.
   */
  value: unknown;
  /**
   * This is the error domain, if any, for the current value.
   * This may be either x or y direction, whatever is applicable.
   * Assumption is that we're looking at this data from the point of view of a single axis,
   * and that axis dictates the relevant direction.
   */
  errorDomain: ReadonlyArray<number> | undefined;
};

/**
 * This is type of "error" in chart. It is set by using ErrorBar, and it can represent confidence interval,
 * or gap in the data, or standard deviation, or quartiles in boxplot, or whiskers or whatever.
 *
 * We will internally represent it as a tuple of two numbers, where the first number is the lower bound and the second number is the upper bound.
 *
 * It is also true that the first number should be lower than or equal to the associated "main value",
 * and the second number should be higher than or equal to the associated "main value".
 */
export type ErrorValue = [number, number];

export function fromMainValueToError(value: unknown): ErrorValue | undefined {
  if (typeof value === 'number' && !Number.isNaN(value) && Number.isFinite(value)) {
    return [value, value];
  }

  if (Array.isArray(value)) {
    const minError = Math.min(...value);
    const maxError = Math.max(...value);
    if (!Number.isNaN(minError) && !Number.isNaN(maxError) && Number.isFinite(minError) && Number.isFinite(maxError)) {
      return [minError, maxError];
    }
  }

  return undefined;
}

function onlyAllowNumbers(data: ReadonlyArray<unknown>): ReadonlyArray<number> {
  return data
    .filter(v => typeof v === 'number' || typeof v === 'string' || v instanceof Date)
    .map(Number)
    .filter(n => Number.isNaN(n) === false);
}

/**
 * @param entry One item in the 'data' array. Could be anything really - this is defined externally. This is the raw, before dataKey application
 * @param appliedValue This is the result of applying the 'main' dataKey on the `entry`.
 * @param relevantErrorBars Error bars that are relevant for the current axis and layout and all that.
 * @return either undefined or an array of ErrorValue
 */
export function getErrorDomainByDataKey(
  entry: unknown,
  appliedValue: unknown,
  relevantErrorBars: ReadonlyArray<ErrorBarsSettings>,
): ReadonlyArray<number> {
  if (!relevantErrorBars || typeof appliedValue !== 'number' || Number.isNaN(appliedValue)) {
    return [];
  }

  if (!relevantErrorBars.length) {
    return [];
  }

  return onlyAllowNumbers(
    relevantErrorBars.flatMap(eb => {
      const errorValue = getValueByDataKey(entry, eb.dataKey);
      const minError: unknown = Array.isArray(errorValue) ? Math.min(...errorValue) : errorValue;
      const maxError: unknown = Array.isArray(errorValue) ? Math.max(...errorValue) : errorValue;
      if (!isWellBehavedNumber(minError) || !isWellBehavedNumber(maxError)) {
        return undefined;
      }
      return [appliedValue - minError, appliedValue + maxError];
    }),
  );
}

export type StackGroup = { readonly stackedData: ReadonlyArray<Series<Record<string, unknown>, DataKey<any>>> };

export const selectStackGroups: (
  state: RechartsRootState,
  axisType: AxisType,
  axisId: AxisId,
) => Record<StackId, StackGroup> = createSelector(
  selectDisplayedData,
  selectCartesianItemsSettings,
  selectStackOffsetType,
  (
    displayedData,
    items: ReadonlyArray<CartesianGraphicalItemSettings>,
    stackOffsetType: StackOffsetType,
  ): Record<StackId, StackGroup> => {
    const initialItemsGroups: Record<StackId, Array<DataKey<any>>> = {};
    const itemsGroup: Record<StackId, ReadonlyArray<DataKey<any>>> = items.reduce(
      (acc: Record<StackId, Array<DataKey<any>>>, item: CartesianGraphicalItemSettings) => {
        if (item.stackId == null) {
          return acc;
        }
        if (acc[item.stackId] == null) {
          acc[item.stackId] = [];
        }
        acc[item.stackId].push(item.dataKey);
        return acc;
      },
      initialItemsGroups,
    );

    return Object.fromEntries(
      Object.entries(itemsGroup).map(([stackId, dataKeys]) => {
        // @ts-expect-error getStackedData requires that the input is array of objects, Recharts does not test for that
        return [stackId, { stackedData: getStackedData(displayedData, dataKeys, stackOffsetType) }];
      }),
    );
  },
);

export const selectDomainOfStackGroups = createSelector(
  selectStackGroups,
  selectChartDataWithIndexes,
  (stackGroups, { dataStartIndex, dataEndIndex }): NumberDomain => {
    // @ts-expect-error typescript is unhappy with the two different types of StackGroups
    return getDomainOfStackGroups(stackGroups, dataStartIndex, dataEndIndex);
  },
);

export const selectAllAppliedNumericalValuesIncludingErrorValues = createSelector(
  selectDisplayedData,
  selectAxisSettings,
  selectCartesianItemsSettingsExceptStacked,
  pickAxisType,
  (
    data: ChartData,
    axisSettings: AxisSettings,
    items: ReadonlyArray<CartesianGraphicalItemSettings>,
    axisType: AxisType,
  ): ReadonlyArray<AppliedChartDataWithErrorDomain> => {
    if (items.length > 0) {
      return data
        .flatMap(entry => {
          return items.flatMap((item): AppliedChartDataWithErrorDomain | undefined => {
            const relevantErrorBars = item.errorBars.filter(errorBar =>
              isErrorBarRelevantForAxisType(axisType, errorBar),
            );
            const valueByDataKey: unknown = getValueByDataKey(entry, axisSettings.dataKey ?? item.dataKey);
            return {
              value: valueByDataKey,
              errorDomain: getErrorDomainByDataKey(entry, valueByDataKey, relevantErrorBars),
            };
          });
        })
        .filter(Boolean);
    }
    if (axisSettings?.dataKey != null) {
      return data.map(
        (item): AppliedChartDataWithErrorDomain => ({
          value: getValueByDataKey(item, axisSettings.dataKey),
          errorDomain: [],
        }),
      );
    }
    return data.map((entry): AppliedChartDataWithErrorDomain => ({ value: entry, errorDomain: [] }));
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
  return undefined;
}

const computeNumericalDomain = (
  dataWithErrorDomains: ReadonlyArray<AppliedChartDataWithErrorDomain>,
): NumberDomain | undefined => {
  const allDataSquished = dataWithErrorDomains
    // This flatMap has to be flat because we're creating a new array in the return value
    .flatMap(d => [d.value, d.errorDomain])
    // This flat is needed because a) errorDomain is an array, and b) value may be a number, or it may be a range (for Area, for example)
    .flat(1);
  const onlyNumbers = onlyAllowNumbers(allDataSquished);
  if (onlyNumbers.length === 0) {
    return undefined;
  }
  return [Math.min(...onlyNumbers), Math.max(...onlyNumbers)];
};

const computeCategoricalDomain = (
  allDataSquished: AppliedChartData,
  axisSettings: AxisSettings,
  isCategorical: boolean,
): CategoricalDomain => {
  const categoricalDomain = allDataSquished.map(onlyAllowNumbersAndStringsAndDates).filter(v => v != null);
  if (
    isCategorical &&
    (axisSettings.dataKey == null || (axisSettings.allowDuplicatedCategory && hasDuplicate(categoricalDomain)))
  ) {
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

const defaultNumericDomain: AxisDomain = [0, 'auto'];

const getDomainDefinition = (axisSettings: AxisSettings): AxisDomain => {
  if (axisSettings == null) {
    return defaultNumericDomain;
  }

  if (axisSettings.domain != null) {
    return axisSettings.domain;
  }
  if (axisSettings.ticks != null) {
    if (axisSettings.type === 'number') {
      const allValues = onlyAllowNumbers(axisSettings.ticks);
      return [Math.min(...allValues), Math.max(...allValues)];
    }
    if (axisSettings.type === 'category') {
      return axisSettings.ticks.map(String);
    }
  }
  return axisSettings?.domain ?? defaultNumericDomain;
};

export const mergeDomains = (...domains: ReadonlyArray<NumberDomain | undefined>): NumberDomain | undefined => {
  const allDomains = domains.filter(Boolean);
  if (allDomains.length === 0) {
    return undefined;
  }
  const allValues = allDomains.flat();
  const min = Math.min(...allValues);
  const max = Math.max(...allValues);
  return [min, max];
};

const selectReferenceDots = (state: RechartsRootState): ReadonlyArray<ReferenceDotSettings> =>
  state.referenceElements.dots;

export const selectReferenceDotsByAxis = createSelector(
  selectReferenceDots,
  pickAxisType,
  pickAxisId,
  (dots, axisType, axisId) => {
    return dots
      .filter(dot => dot.ifOverflow === 'extendDomain')
      .filter(dot => {
        if (axisType === 'xAxis') {
          return dot.xAxisId === axisId;
        }
        return dot.yAxisId === axisId;
      });
  },
);

const selectReferenceAreas = (state: RechartsRootState): ReadonlyArray<ReferenceAreaSettings> =>
  state.referenceElements.areas;

export const selectReferenceAreasByAxis = createSelector(
  selectReferenceAreas,
  pickAxisType,
  pickAxisId,
  (areas, axisType, axisId) => {
    return areas
      .filter(area => area.ifOverflow === 'extendDomain')
      .filter(area => {
        if (axisType === 'xAxis') {
          return area.xAxisId === axisId;
        }
        return area.yAxisId === axisId;
      });
  },
);

const selectReferenceLines = (state: RechartsRootState): ReadonlyArray<ReferenceLineSettings> =>
  state.referenceElements.lines;

export const selectReferenceLinesByAxis = createSelector(
  selectReferenceLines,
  pickAxisType,
  pickAxisId,
  (lines, axisType, axisId) => {
    return lines
      .filter(line => line.ifOverflow === 'extendDomain')
      .filter(line => {
        if (axisType === 'xAxis') {
          return line.xAxisId === axisId;
        }
        return line.yAxisId === axisId;
      });
  },
);

const selectReferenceDotsDomain = createSelector(
  selectReferenceDotsByAxis,
  pickAxisType,
  (dots: ReadonlyArray<ReferenceDotSettings>, axisType: AxisType): NumberDomain => {
    const allCoords = onlyAllowNumbers(dots.map(dot => (axisType === 'xAxis' ? dot.x : dot.y)));
    if (allCoords.length === 0) {
      return undefined;
    }
    return [Math.min(...allCoords), Math.max(...allCoords)];
  },
);

const selectReferenceAreasDomain = createSelector(
  selectReferenceAreasByAxis,
  pickAxisType,
  (areas: ReadonlyArray<ReferenceAreaSettings>, axisType: AxisType): NumberDomain => {
    const allCoords = onlyAllowNumbers(
      areas.flatMap(area => [axisType === 'xAxis' ? area.x1 : area.y1, axisType === 'xAxis' ? area.x2 : area.y2]),
    );
    if (allCoords.length === 0) {
      return undefined;
    }
    return [Math.min(...allCoords), Math.max(...allCoords)];
  },
);

const selectReferenceLinesDomain = createSelector(
  selectReferenceLinesByAxis,
  pickAxisType,
  (lines: ReadonlyArray<ReferenceLineSettings>, axisType: AxisType): NumberDomain => {
    const allCoords = onlyAllowNumbers(lines.map(line => (axisType === 'xAxis' ? line.x : line.y)));
    if (allCoords.length === 0) {
      return undefined;
    }
    return [Math.min(...allCoords), Math.max(...allCoords)];
  },
);

const selectReferenceElementsDomain = createSelector(
  selectReferenceDotsDomain,
  selectReferenceLinesDomain,
  selectReferenceAreasDomain,
  (dotsDomain, linesDomain, areasDomain): NumberDomain => {
    return mergeDomains(dotsDomain, areasDomain, linesDomain);
  },
);

const selectNumericalDomain = (
  state: RechartsRootState,
  axisSettings: AxisSettings,
  axisType: AxisType,
  axisId: AxisId,
): NumberDomain => {
  const domainDefinition: AxisDomain = getDomainDefinition(axisSettings);

  const domainFromUserPreference: NumberDomain | undefined = numericalDomainSpecifiedWithoutRequiringData(
    domainDefinition,
    axisSettings.allowDataOverflow,
  );
  if (domainFromUserPreference != null) {
    // We're done! No need to compute anything else.
    return domainFromUserPreference;
  }

  let domainFromData: NumberDomain;
  const domainOfStackGroups = selectDomainOfStackGroups(state, axisType, axisId);
  if (domainOfStackGroups[0] !== 0 || domainOfStackGroups[1] !== 0) {
    domainFromData = domainOfStackGroups;
  } else {
    const allDataWithErrorDomains: ReadonlyArray<AppliedChartDataWithErrorDomain> =
      selectAllAppliedNumericalValuesIncludingErrorValues(state, axisType, axisId);
    domainFromData = computeNumericalDomain(allDataWithErrorDomains);
  }

  const referenceElementsDomain = selectReferenceElementsDomain(state, axisType, axisId);

  return parseNumericalUserDomain(
    domainDefinition,
    mergeDomains(domainFromData, referenceElementsDomain),
    axisSettings.allowDataOverflow,
  );
};

/**
 * Expand by design maps everything between 0 and 1,
 * there is nothing to compute.
 * See https://d3js.org/d3-shape/stack#stack-offsets
 */
const expandDomain: NumberDomain = [0, 1];

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
    return computeCategoricalDomain(allDataSquished, axisSettings, isCategorical);
  }

  if (selectStackOffsetType(state) === 'expand') {
    return expandDomain;
  }

  return selectNumericalDomain(state, axisSettings, axisType, axisId);
};

const unknownScale: ParsedScaleReturn = {
  scale: undefined,
  realScaleType: undefined,
};

/**
 * This returns an axis scale and type (linear, log, etc.) for the given axis.
 * This is before applying the correct domain and range!
 *
 * That's on one hand silly, yes, but on the other hand also required
 * because the final domain depends on nice ticks,
 * and nice ticks depend on the scale type.
 * With this shared dependency we cannot create the scale and set its domain in one step.
 *
 * Usually you would never want to use this selector, ever, outside of this circular dependency problem.
 *
 * Prefer to use `selectAxisScale` instead.
 */
export const selectEmptyAxisScale: (state: RechartsRootState, axisType: AxisType, axisId: AxisId) => ParsedScaleReturn =
  createSelector(
    selectAxisSettings,
    selectChartLayout,
    selectHasBar,
    selectChartName,
    pickAxisType,
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

export const selectNiceTicks = createSelector(
  selectAxisDomain,
  selectAxisSettings,
  selectEmptyAxisScale,
  (axisDomain, axisSettings, { realScaleType }): ReadonlyArray<number> | undefined => {
    const domainDefinition: AxisDomain = getDomainDefinition(axisSettings);

    if (realScaleType !== 'auto' && realScaleType !== 'linear') {
      return undefined;
    }

    if (
      axisSettings != null &&
      Array.isArray(domainDefinition) &&
      (domainDefinition[0] === 'auto' || domainDefinition[1] === 'auto') &&
      isWellFormedNumberDomain(axisDomain)
    ) {
      return getNiceTickValues(axisDomain, axisSettings.tickCount, axisSettings.allowDecimals);
    }

    if (axisSettings != null && axisSettings.tickCount && axisSettings.type === 'number') {
      return getTickValuesFixedDomain(axisDomain, axisSettings.tickCount, axisSettings.allowDecimals);
    }

    return undefined;
  },
);

export const selectAxisDomainIncludingNiceTicks = createSelector(
  selectAxisSettings,
  selectAxisDomain,
  selectNiceTicks,
  (axisSettings, domain, niceTicks) => {
    if (
      axisSettings?.type === 'number' &&
      isWellFormedNumberDomain(domain) &&
      Array.isArray(niceTicks) &&
      niceTicks.length > 0
    ) {
      const minFromDomain = domain[0];
      const minFromTicks = niceTicks[0];
      const maxFromDomain = domain[1];
      const maxFromTicks = niceTicks[niceTicks.length - 1];
      return [Math.min(minFromDomain, minFromTicks), Math.max(maxFromDomain, maxFromTicks)];
    }
    return domain;
  },
);

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
    const sortedValues = Array.from(onlyAllowNumbers(allDataSquished.map(d => d.value))).sort();
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

export const selectAxisRange = (
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

const selectAxisRangeWithReverse = createSelector(
  selectAxisSettings,
  selectAxisRange,
  (axisSettings: AxisSettings, axisRange): ReadonlyArray<number> | undefined => {
    if (axisSettings?.reversed) {
      return axisRange?.slice().reverse();
    }
    return axisRange;
  },
);

export const selectAxisScale: (state: RechartsRootState, axisType: AxisType, axisId: AxisId) => ParsedScaleReturn =
  createSelector(
    selectEmptyAxisScale,
    selectAxisDomainIncludingNiceTicks,
    selectAxisRangeWithReverse,
    (parsedScaleReturn: ParsedScaleReturn, axisDomain, axisRange) => {
      if (parsedScaleReturn == null || parsedScaleReturn === unknownScale || axisDomain == null) {
        return unknownScale;
      }
      /*
       * This setter will also modify the domain internally!
       * so the domain returned from selectAxisDomain, and domain from scale.domain(),
       * may or may not be the same.
       */
      parsedScaleReturn.scale.domain(axisDomain).range(axisRange);
      return parsedScaleReturn;
    },
  );

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
        return isErrorBarRelevantForAxisType(axisType, e);
      });
  },
);
