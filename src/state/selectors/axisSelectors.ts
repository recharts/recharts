import { createSelector } from '@reduxjs/toolkit';
import range from 'lodash/range';
import { Series } from 'victory-vendor/d3-shape';
import isNan from 'lodash/isNaN';
import * as d3Scales from 'victory-vendor/d3-scale';
import upperFirst from 'lodash/upperFirst';
import { selectChartLayout } from '../../context/chartLayoutContext';
import {
  getDomainOfStackGroups,
  getStackedData,
  getValueByDataKey,
  isCategoricalAxis,
  RechartsScale,
  StackId,
} from '../../util/ChartUtils';
import {
  AxisDomain,
  AxisTick,
  CartesianTickItem,
  CategoricalDomain,
  ChartOffset,
  Coordinate,
  DataKey,
  LayoutType,
  NumberDomain,
  Size,
  StackOffsetType,
} from '../../util/types';
import {
  AxisId,
  AxisSettings,
  BaseAxis,
  XAxisOrientation,
  XAxisSettings,
  YAxisOrientation,
  YAxisSettings,
  ZAxisSettings,
} from '../axisMapSlice';
import { selectBarCategoryGap, selectChartName, selectStackOffsetType } from './selectors';
import { RechartsRootState } from '../store';
import { selectChartDataWithIndexes } from './dataSelectors';
import {
  isWellFormedNumberDomain,
  numericalDomainSpecifiedWithoutRequiringData,
  parseNumericalUserDomain,
} from '../../util/isDomainSpecifiedByUser';
import { AppliedChartData, ChartData } from '../chartDataSlice';
import { getPercentValue, hasDuplicate, mathSign } from '../../util/DataUtils';
import { CartesianGraphicalItemSettings, ErrorBarsSettings } from '../graphicalItemsSlice';
import { isWellBehavedNumber } from '../../util/isWellBehavedNumber';
import { getNiceTickValues, getTickValuesFixedDomain } from '../../util/scale';
import { ReferenceAreaSettings, ReferenceDotSettings, ReferenceLineSettings } from '../referenceElementsSlice';
import { selectChartHeight, selectChartWidth } from './containerSelectors';
import { selectAllXAxes, selectAllYAxes } from './selectAllAxes';
import { selectChartOffset } from './selectChartOffset';
import { AxisPropsForCartesianGridTicksGeneration } from '../../cartesian/CartesianGrid';

const defaultNumericDomain: AxisDomain = [0, 'auto'];

/**
 * X, Y, and Z axes all have domain and range and scale and associated settings
 */
type XorYorZType = 'xAxis' | 'yAxis' | 'zAxis';

/**
 * X and Y axes have ticks. Z axis is never displayed and so it lacks ticks
 * and tick settings.
 */
type XorYType = 'xAxis' | 'yAxis';

/**
 * If an axis is not explicitly defined as an element,
 * we still need to render something in the chart and we need
 * some object to hold the domain and default settings.
 */
export const implicitXAxis: XAxisSettings = {
  allowDataOverflow: false,
  allowDecimals: true,
  allowDuplicatedCategory: true,
  angle: 0,
  dataKey: undefined,
  domain: undefined,
  height: 30,
  hide: true,
  id: undefined,
  includeHidden: false,
  interval: 'preserveEnd',
  minTickGap: 5,
  mirror: false,
  name: undefined,
  orientation: 'bottom',
  padding: { left: 0, right: 0 },
  reversed: false,
  scale: 'auto',
  tick: true,
  tickCount: 5,
  tickFormatter: undefined,
  ticks: undefined,
  type: 'category',
  unit: undefined,
};

export const selectXAxisSettings = (state: RechartsRootState, axisId: AxisId): XAxisSettings => {
  const axis = state.axisMap.xAxis[axisId];
  if (axis == null) {
    return implicitXAxis;
  }
  return axis;
};

/**
 * If an axis is not explicitly defined as an element,
 * we still need to render something in the chart and we need
 * some object to hold the domain and default settings.
 */
export const implicitYAxis: YAxisSettings = {
  allowDataOverflow: false,
  allowDecimals: true,
  allowDuplicatedCategory: true,
  angle: 0,
  dataKey: undefined,
  domain: defaultNumericDomain,
  hide: true,
  id: undefined,
  includeHidden: false,
  interval: 'preserveEnd',
  minTickGap: 5,
  mirror: false,
  name: undefined,
  orientation: 'left',
  padding: { top: 0, bottom: 0 },
  reversed: false,
  scale: 'auto',
  tick: true,
  tickCount: 5,
  tickFormatter: undefined,
  ticks: undefined,
  type: 'number',
  unit: undefined,
  width: 60,
};

export const selectYAxisSettings = (state: RechartsRootState, axisId: AxisId): YAxisSettings => {
  const axis = state.axisMap.yAxis[axisId];
  if (axis == null) {
    return implicitYAxis;
  }
  return axis;
};

export const implicitZAxis: ZAxisSettings = {
  includeHidden: false,
  reversed: false,
  allowDataOverflow: false,
  allowDuplicatedCategory: false,
  dataKey: undefined,
  id: undefined,
  name: '',
  range: [64, 64],
  scale: 'auto',
  type: 'number',
  unit: '',
};

export const selectZAxisSettings = (state: RechartsRootState, axisId: AxisId): ZAxisSettings => {
  const axis = state.axisMap.zAxis[axisId];
  if (axis == null) {
    return implicitZAxis;
  }
  return axis;
};

export const selectBaseAxis = (state: RechartsRootState, axisType: XorYorZType, axisId: AxisId): BaseAxis => {
  switch (axisType) {
    case 'xAxis': {
      return selectXAxisSettings(state, axisId);
    }
    case 'yAxis': {
      return selectYAxisSettings(state, axisId);
    }
    case 'zAxis': {
      return selectZAxisSettings(state, axisId);
    }
    default:
      throw new Error(`Unexpected axis type: ${axisType}`);
  }
};

/**
 * Selects either an X or Y axis. Doesn't work with Z axis - for that, instead use selectBaseAxis.
 * @param state Root state
 * @param axisType xAxis | yAxis
 * @param axisId xAxisId | yAxisId
 * @returns axis settings object
 */
export const selectAxisSettings = (
  state: RechartsRootState,
  axisType: XorYType,
  axisId: AxisId,
): XAxisSettings | YAxisSettings => {
  switch (axisType) {
    case 'xAxis': {
      return selectXAxisSettings(state, axisId);
    }
    case 'yAxis': {
      return selectYAxisSettings(state, axisId);
    }
    default:
      throw new Error(`Unexpected axis type: ${axisType}`);
  }
};

export const selectHasBar = (state: RechartsRootState): boolean => state.graphicalItems.countOfBars > 0;

const pickAxisType = <T>(_state: RechartsRootState, axisType: T): T => axisType;
const pickAxisId = (_state: RechartsRootState, _axisType: unknown, axisId: AxisId): AxisId => axisId;

/**
 * Filters CartesianGraphicalItemSettings by the relevant axis ID
 * @param axisType 'xAxis' | 'yAxis' | 'zAxis' | 'radiusAxis' | 'angleAxis'
 * @param axisId from props, defaults to 0
 *
 * @returns Predicate function that return true for CartesianGraphicalItemSettings that are relevant to the specified axis
 */
function itemAxisPredicate(axisType: XorYorZType, axisId: AxisId) {
  return (item: CartesianGraphicalItemSettings) => {
    switch (axisType) {
      case 'xAxis':
        // This is sensitive to the data type, as 0 !== '0'. I wonder if we should be more flexible. How does 2.x branch behave? TODO write test for that
        return item.xAxisId === axisId;
      case 'yAxis':
        return item.yAxisId === axisId;
      case 'zAxis':
        return item.zAxisId === axisId;
      default:
        return false;
    }
  };
}

export const selectUnfilteredCartesianItems = (state: RechartsRootState) => state.graphicalItems.cartesianItems;

const selectCartesianItemsSettings: (
  state: RechartsRootState,
  axisType: XorYorZType,
  axisId: AxisId,
) => ReadonlyArray<CartesianGraphicalItemSettings> = createSelector(
  [selectUnfilteredCartesianItems, selectBaseAxis, pickAxisType, pickAxisId],
  (cartesianItems, axisSettings: BaseAxis, axisType: XorYorZType, axisId: AxisId) =>
    cartesianItems.filter(itemAxisPredicate(axisType, axisId)).filter(item => {
      if (axisSettings?.includeHidden === true) {
        return true;
      }
      return !item.hide;
    }),
);

const selectCartesianItemsSettingsExceptStacked: (
  state: RechartsRootState,
  axisType: XorYorZType,
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
  axisType: XorYorZType,
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
  axisType: XorYorZType,
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
  selectBaseAxis,
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

export function isErrorBarRelevantForAxisType(axisType: XorYorZType, errorBar: ErrorBarsSettings): boolean {
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
  axisType: XorYorZType,
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
  selectBaseAxis,
  selectCartesianItemsSettingsExceptStacked,
  pickAxisType,
  (
    data: ChartData,
    axisSettings: BaseAxis,
    items: ReadonlyArray<CartesianGraphicalItemSettings>,
    axisType: XorYorZType,
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
  axisSettings: BaseAxis,
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

const getDomainDefinition = (axisSettings: AxisSettings | BaseAxis): AxisDomain => {
  if (axisSettings == null || !('domain' in axisSettings)) {
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
  (dots: ReadonlyArray<ReferenceDotSettings>, axisType: XorYType): NumberDomain => {
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
  (areas: ReadonlyArray<ReferenceAreaSettings>, axisType: XorYType): NumberDomain => {
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
  (lines: ReadonlyArray<ReferenceLineSettings>, axisType: XorYType): NumberDomain => {
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

const selectDomainDefinition: (
  state: RechartsRootState,
  axisType: XorYorZType,
  axisId: AxisId,
) => AxisDomain | undefined = createSelector([selectBaseAxis], getDomainDefinition);

const selectNumericalDomain: (state: RechartsRootState, axisType: XorYorZType, axisId: AxisId) => NumberDomain =
  createSelector(
    [
      selectBaseAxis,
      selectDomainDefinition,
      selectDomainOfStackGroups,
      selectAllAppliedNumericalValuesIncludingErrorValues,
      selectReferenceElementsDomain,
    ],
    (
      axisSettings,
      domainDefinition,
      domainOfStackGroups,
      allDataWithErrorDomains,
      referenceElementsDomain,
    ): NumberDomain => {
      const domainFromUserPreference: NumberDomain | undefined = numericalDomainSpecifiedWithoutRequiringData(
        domainDefinition,
        axisSettings.allowDataOverflow,
      );
      if (domainFromUserPreference != null) {
        // We're done! No need to compute anything else.
        return domainFromUserPreference;
      }

      let domainFromData: NumberDomain;
      if (domainOfStackGroups[0] !== 0 || domainOfStackGroups[1] !== 0) {
        domainFromData = domainOfStackGroups;
      } else {
        domainFromData = computeNumericalDomain(allDataWithErrorDomains);
      }

      return parseNumericalUserDomain(
        domainDefinition,
        mergeDomains(domainFromData, referenceElementsDomain),
        axisSettings.allowDataOverflow,
      );
    },
  );

/**
 * Expand by design maps everything between 0 and 1,
 * there is nothing to compute.
 * See https://d3js.org/d3-shape/stack#stack-offsets
 */
const expandDomain: NumberDomain = [0, 1];

export const selectAxisDomain: (
  state: RechartsRootState,
  axisType: XorYorZType,
  axisId: AxisId,
) => NumberDomain | CategoricalDomain = createSelector(
  [
    selectBaseAxis,
    selectChartLayout,
    selectDisplayedData,
    selectAllAppliedValues,
    selectStackOffsetType,
    pickAxisType,
    selectNumericalDomain,
  ],
  (
    axisSettings,
    layout,
    displayedData,
    allAppliedValues,
    stackOffsetType,
    axisType,
    numericalDomain,
  ): NumberDomain | CategoricalDomain => {
    if (axisSettings == null) {
      return undefined;
    }

    const { dataKey, type } = axisSettings;
    const isCategorical = isCategoricalAxis(layout, axisType);

    if (isCategorical && dataKey == null) {
      return range(0, displayedData.length);
    }

    if (type === 'category') {
      return computeCategoricalDomain(allAppliedValues, axisSettings, isCategorical);
    }

    if (stackOffsetType === 'expand') {
      return expandDomain;
    }

    return numericalDomain;
  },
);

export const selectRealScaleType = createSelector(
  [selectBaseAxis, selectChartLayout, selectHasBar, selectChartName, pickAxisType],
  (
    axisConfig: BaseAxis | undefined,
    layout: LayoutType,
    hasBar: boolean,
    chartType: string,
    // axisType: XorYorZType,
  ): string | undefined => {
    if (axisConfig == null) {
      return undefined;
    }
    const { scale, type } = axisConfig;
    if (scale === 'auto') {
      // TODO add support for polar charts
      // if (layout === 'radial' && axisType === 'radiusAxis') {
      //   return 'band';
      // }
      // if (layout === 'radial' && axisType === 'angleAxis') {
      //   return 'linear';
      // }

      if (
        type === 'category' &&
        chartType &&
        (chartType.indexOf('LineChart') >= 0 ||
          chartType.indexOf('AreaChart') >= 0 ||
          (chartType.indexOf('ComposedChart') >= 0 && !hasBar))
      ) {
        return 'point';
      }
      if (type === 'category') {
        return 'band';
      }

      return 'linear';
    }
    if (typeof scale === 'string') {
      const name = `scale${upperFirst(scale)}`;

      return name in d3Scales ? name : 'point';
    }
    return undefined;
  },
);

function getD3ScaleFromType(realScaleType: string | undefined) {
  if (realScaleType == null) {
    return undefined;
  }
  if (realScaleType in d3Scales) {
    // @ts-expect-error we should do better type verification here
    return d3Scales[realScaleType]();
  }
  const name = `scale${upperFirst(realScaleType)}`;
  if (name in d3Scales) {
    // @ts-expect-error we should do better type verification here
    return d3Scales[name]();
  }
  return undefined;
}

function combineScaleFunction(
  realScaleType: string | undefined,
  axisDomain: NumberDomain | CategoricalDomain,
  axisRange: [number, number],
): RechartsScale | undefined {
  const d3ScaleFunction = getD3ScaleFromType(realScaleType);
  if (d3ScaleFunction == null || axisDomain == null) {
    return undefined;
  }
  return d3ScaleFunction.domain(axisDomain).range(axisRange);
}

export const selectNiceTicks = createSelector(
  selectAxisDomain,
  selectAxisSettings,
  selectRealScaleType,
  (axisDomain, axisSettings, realScaleType): ReadonlyArray<number> | undefined => {
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

    if (axisSettings != null && axisSettings.tickCount && axisSettings.type === 'number' && axisDomain != null) {
      return getTickValuesFixedDomain(axisDomain, axisSettings.tickCount, axisSettings.allowDecimals);
    }

    return undefined;
  },
);

export const selectAxisDomainIncludingNiceTicks = createSelector(
  selectBaseAxis,
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
  axisType: XorYType,
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
  axisType: XorYType,
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
  axisType: XorYorZType,
  axisId: AxisId,
): ReadonlyArray<number> | undefined => {
  switch (axisType) {
    case 'xAxis':
      return combineXAxisRange(state, axisId);
    case 'yAxis':
      return combineYAxisRange(state, axisId);
    case 'zAxis':
      return selectZAxisSettings(state, axisId)?.range;
    default:
      return undefined;
  }
};

export const selectAxisRangeWithReverse = createSelector(
  selectBaseAxis,
  selectAxisRange,
  (axisSettings: BaseAxis | undefined, axisRange): ReadonlyArray<number> | undefined => {
    if (axisSettings?.reversed) {
      return axisRange?.slice().reverse();
    }
    return axisRange;
  },
);

export const selectAxisScale: (
  state: RechartsRootState,
  axisType: XorYorZType,
  axisId: AxisId,
) => RechartsScale | undefined = createSelector(
  [selectRealScaleType, selectAxisDomainIncludingNiceTicks, selectAxisRangeWithReverse],
  combineScaleFunction,
);

export const selectErrorBarsSettings = createSelector(
  selectCartesianItemsSettings,
  pickAxisType,
  (
    items: ReadonlyArray<CartesianGraphicalItemSettings>,
    axisType: XorYType,
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

function compareIds(a: AxisSettings, b: AxisSettings) {
  if (a.id < b.id) {
    return -1;
  }
  if (a.id > b.id) {
    return 1;
  }
  return 0;
}

const pickAxisOrientation = <T>(_state: RechartsRootState, orientation: T): T => orientation;

const pickMirror = (_state: RechartsRootState, _orientation: unknown, mirror: boolean): boolean => mirror;

const selectAllXAxesWithOffsetType: (
  state: RechartsRootState,
  orientation: XAxisOrientation,
  mirror: boolean,
) => ReadonlyArray<XAxisSettings> = createSelector(
  selectAllXAxes,
  pickAxisOrientation,
  pickMirror,
  (allAxes: ReadonlyArray<XAxisSettings>, orientation: XAxisOrientation, mirror: boolean) =>
    allAxes
      .filter(axis => axis.orientation === orientation)
      .filter(axis => axis.mirror === mirror)
      .sort(compareIds),
);

const selectAllYAxesWithOffsetType: (
  state: RechartsRootState,
  orientation: YAxisOrientation,
  mirror: boolean,
) => ReadonlyArray<YAxisSettings> = createSelector(
  selectAllYAxes,
  pickAxisOrientation,
  pickMirror,
  (allAxes: ReadonlyArray<YAxisSettings>, orientation: YAxisOrientation, mirror: boolean) =>
    allAxes
      .filter(axis => axis.orientation === orientation)
      .filter(axis => axis.mirror === mirror)
      .sort(compareIds),
);

const getXAxisSize = (offset: ChartOffset, axisSettings: XAxisSettings | undefined): Size => {
  if (axisSettings == null) {
    return undefined;
  }
  return {
    width: offset.width,
    height: axisSettings.height,
  };
};

const getYAxisSize = (offset: ChartOffset, axisSettings: YAxisSettings | undefined): Size => {
  if (axisSettings == null) {
    return undefined;
  }
  return {
    width: axisSettings.width,
    height: offset.height,
  };
};

export const selectXAxisSize = createSelector(selectChartOffset, selectXAxisSettings, getXAxisSize);

type AxisOffsetSteps = Record<AxisId, number>;

const combineXAxisPositionStartingPoint = (offset: ChartOffset, orientation: XAxisOrientation, chartHeight: number) => {
  switch (orientation) {
    case 'top':
      return offset.top;
    case 'bottom':
      return chartHeight - offset.bottom;
    default:
      return 0;
  }
};

const combineYAxisPositionStartingPoint = (offset: ChartOffset, orientation: YAxisOrientation, chartWidth: number) => {
  switch (orientation) {
    case 'left':
      return offset.left;
    case 'right':
      return chartWidth - offset.right;
    default:
      return 0;
  }
};

export const selectAllXAxesOffsetSteps: (
  state: RechartsRootState,
  orientation: XAxisOrientation,
  mirror: boolean,
) => AxisOffsetSteps = createSelector(
  selectChartHeight,
  selectChartOffset,
  selectAllXAxesWithOffsetType,
  pickAxisOrientation,
  pickMirror,
  (chartHeight, offset, allAxesWithSameOffsetType, orientation, mirror) => {
    const steps: AxisOffsetSteps = {};
    let position: number;
    allAxesWithSameOffsetType.forEach(axis => {
      const axisSize = getXAxisSize(offset, axis);
      if (position == null) {
        position = combineXAxisPositionStartingPoint(offset, orientation, chartHeight);
      }
      const needSpace = (orientation === 'top' && !mirror) || (orientation === 'bottom' && mirror);
      steps[axis.id] = position - Number(needSpace) * axisSize.height;
      position += (needSpace ? -1 : 1) * axisSize.height;
    });
    return steps;
  },
);

export const selectAllYAxesOffsetSteps: (
  state: RechartsRootState,
  orientation: YAxisOrientation,
  mirror: boolean,
) => AxisOffsetSteps = createSelector(
  selectChartWidth,
  selectChartOffset,
  selectAllYAxesWithOffsetType,
  pickAxisOrientation,
  pickMirror,
  (chartWidth, offset, allAxesWithSameOffsetType, orientation: YAxisOrientation, mirror) => {
    const steps: AxisOffsetSteps = {};
    let position: number;
    allAxesWithSameOffsetType.forEach(axis => {
      const axisSize = getYAxisSize(offset, axis);
      if (position == null) {
        position = combineYAxisPositionStartingPoint(offset, orientation, chartWidth);
      }
      const needSpace = (orientation === 'left' && !mirror) || (orientation === 'right' && mirror);
      steps[axis.id] = position - Number(needSpace) * axisSize.width;
      position += (needSpace ? -1 : 1) * axisSize.width;
    });
    return steps;
  },
);

export const selectXAxisPosition = (state: RechartsRootState, axisId: AxisId): Coordinate | undefined => {
  const offset = selectChartOffset(state);
  const axisSettings = selectXAxisSettings(state, axisId);
  if (axisSettings == null) {
    return undefined;
  }
  const allSteps = selectAllXAxesOffsetSteps(state, axisSettings.orientation, axisSettings.mirror);
  const stepOfThisAxis = allSteps[axisId];
  if (stepOfThisAxis == null) {
    return { x: offset.left, y: 0 };
  }
  return { x: offset.left, y: stepOfThisAxis };
};

export const selectYAxisPosition = (state: RechartsRootState, axisId: AxisId): Coordinate | undefined => {
  const offset = selectChartOffset(state);
  const axisSettings: YAxisSettings = selectYAxisSettings(state, axisId);
  if (axisSettings == null) {
    return undefined;
  }
  const allSteps = selectAllYAxesOffsetSteps(state, axisSettings.orientation, axisSettings.mirror);
  const stepOfThisAxis = allSteps[axisId];
  if (stepOfThisAxis == null) {
    return { x: 0, y: offset.top };
  }
  return { x: stepOfThisAxis, y: offset.top };
};

export const selectYAxisSize = createSelector(
  selectChartOffset,
  selectYAxisSettings,
  (offset: ChartOffset, axisSettings: YAxisSettings): Size | undefined => {
    if (axisSettings == null) {
      return undefined;
    }
    return {
      width: axisSettings.width,
      height: offset.height,
    };
  },
);

export const selectDuplicateDomain = createSelector(
  selectChartLayout,
  selectAllAppliedValues,
  selectAxisSettings,
  pickAxisType,
  (chartLayout, appliedValues, axis, axisType) => {
    if (axis == null) {
      return undefined;
    }
    const { allowDuplicatedCategory, type, dataKey } = axis;
    const isCategorical = isCategoricalAxis(chartLayout, axisType);
    const allData = appliedValues.map(av => av.value);
    if (dataKey && isCategorical && type === 'category' && allowDuplicatedCategory && hasDuplicate(allData)) {
      return allData;
    }
    return undefined;
  },
);

export const selectCategoricalDomain = createSelector(
  selectChartLayout,
  selectAllAppliedValues,
  selectAxisSettings,
  pickAxisType,
  (layout, displayedData, axis, axisType) => {
    if (axis == null) {
      return undefined;
    }
    const { type, scale } = axis;
    const isCategorical = isCategoricalAxis(layout, axisType);
    if (isCategorical && (type === 'number' || scale !== 'auto')) {
      return displayedData.map(d => d.value);
    }
    return undefined;
  },
);

export const selectAxisPropsNeededForCartesianGridTicksGenerator = createSelector(
  selectChartLayout,
  selectAxisSettings,
  selectRealScaleType,
  selectAxisScale,
  selectDuplicateDomain,
  selectCategoricalDomain,
  selectAxisRange,
  selectNiceTicks,
  pickAxisType,
  (
    layout,
    axis,
    realScaleType,
    scale,
    duplicateDomain,
    categoricalDomain,
    axisRange,
    niceTicks,
    axisType,
  ): AxisPropsForCartesianGridTicksGeneration => {
    if (axis == null) {
      return null;
    }
    const isCategorical = isCategoricalAxis(layout, axisType);
    return {
      angle: axis.angle,
      interval: axis.interval,
      minTickGap: axis.minTickGap,
      orientation: axis.orientation,
      tick: axis.tick,
      tickCount: axis.tickCount,
      tickFormatter: axis.tickFormatter,
      ticks: axis.ticks,
      type: axis.type,
      unit: axis.unit,
      axisType,
      categoricalDomain,
      duplicateDomain,
      isCategorical,
      niceTicks,
      range: axisRange,
      realScaleType,
      scale,
    };
  },
);

export const selectTicksOfAxis = createSelector(
  selectChartLayout,
  selectAxisSettings,
  selectRealScaleType,
  selectAxisScale,
  selectNiceTicks,
  selectAxisRange,
  selectDuplicateDomain,
  selectCategoricalDomain,
  pickAxisType,
  (
    layout,
    axis,
    realScaleType,
    scale,
    niceTicks,
    axisRange,
    duplicateDomain,
    categoricalDomain,
    axisType,
  ): ReadonlyArray<CartesianTickItem> | null => {
    if (axis == null || scale == null) {
      return null;
    }

    const isCategorical = isCategoricalAxis(layout, axisType);

    const { type, ticks, tickCount } = axis;

    const offsetForBand = realScaleType === 'scaleBand' ? scale.bandwidth() / 2 : 2;
    let offset = type === 'category' && scale.bandwidth ? scale.bandwidth() / offsetForBand : 0;

    offset =
      axisType === 'angleAxis' && axisRange?.length >= 2 ? mathSign(axisRange[0] - axisRange[1]) * 2 * offset : offset;

    // The ticks set by user should only affect the ticks adjacent to axis line
    if (ticks || niceTicks) {
      const result = (ticks || niceTicks).map((entry: AxisTick): CartesianTickItem => {
        const scaleContent = duplicateDomain ? duplicateDomain.indexOf(entry) : entry;

        return {
          // If the scaleContent is not a number, the coordinate will be NaN.
          // That could be the case for example with a PointScale and a string as domain.
          coordinate: scale(scaleContent) + offset,
          value: entry,
          // @ts-expect-error why does the offset go here? The type does not require it
          offset,
        };
      });

      return result.filter((row: CartesianTickItem) => !isNan(row.coordinate));
    }

    // When axis is a categorical axis, but the type of axis is number or the scale of axis is not "auto"
    if (isCategorical && categoricalDomain) {
      return categoricalDomain.map(
        (entry: any, index: number): CartesianTickItem => ({
          coordinate: scale(entry) + offset,
          value: entry,
          index,
          // @ts-expect-error why does the offset go here? The type does not require it
          offset,
        }),
      );
    }

    if (scale.ticks) {
      return (
        scale
          .ticks(tickCount)
          // @ts-expect-error why does the offset go here? The type does not require it
          .map((entry: any): CartesianTickItem => ({ coordinate: scale(entry) + offset, value: entry, offset }))
      );
    }

    // When axis has duplicated text, serial numbers are used to generate scale
    return scale.domain().map(
      (entry: any, index: number): CartesianTickItem => ({
        coordinate: scale(entry) + offset,
        value: duplicateDomain ? duplicateDomain[entry] : entry,
        index,
        // @ts-expect-error why does the offset go here? The type does not require it
        offset,
      }),
    );
  },
);

export type BaseAxisWithScale = BaseAxis & { scale: RechartsScale };

export const selectAxisWithScale = createSelector(
  selectBaseAxis,
  selectAxisScale,
  (axis, scale): BaseAxisWithScale | undefined => {
    if (axis == null || scale == null) {
      return undefined;
    }
    return {
      ...axis,
      scale,
    };
  },
);

const selectZAxisScale: (state: RechartsRootState, axisType: 'zAxis', axisId: AxisId) => RechartsScale | undefined =
  createSelector([selectRealScaleType, selectAxisDomain, selectAxisRangeWithReverse], combineScaleFunction);

export const selectZAxisWithScale = createSelector(selectBaseAxis, selectZAxisScale, (axis, scale) => {
  if (axis == null || scale == null) {
    return undefined;
  }
  return {
    ...axis,
    scale,
  };
});
