import { createSelector } from 'reselect';
import range from 'es-toolkit/compat/range';
import { Series } from 'victory-vendor/d3-shape';
import * as d3Scales from 'victory-vendor/d3-scale';
import { selectChartLayout } from '../../context/chartLayoutContext';
import {
  checkDomainOfScale,
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
  AxisType,
  CartesianTickItem,
  CategoricalDomain,
  ChartOffsetRequired,
  Coordinate,
  DataKey,
  LayoutType,
  NumberDomain,
  Size,
  StackOffsetType,
  TickItem,
} from '../../util/types';
import {
  AxisId,
  BaseCartesianAxis,
  CartesianAxisSettings,
  XAxisOrientation,
  XAxisSettings,
  YAxisOrientation,
  YAxisSettings,
  ZAxisSettings,
} from '../cartesianAxisSlice';
import { RechartsRootState } from '../store';
import { selectChartDataWithIndexes, selectChartDataWithIndexesIfNotInPanorama } from './dataSelectors';
import {
  isWellFormedNumberDomain,
  numericalDomainSpecifiedWithoutRequiringData,
  parseNumericalUserDomain,
} from '../../util/isDomainSpecifiedByUser';
import { AppliedChartData, ChartData, ChartDataState } from '../chartDataSlice';
import { getPercentValue, hasDuplicate, isNan, isNumber, isNumOrStr, mathSign, upperFirst } from '../../util/DataUtils';
import {
  CartesianGraphicalItemSettings,
  ErrorBarsSettings,
  GraphicalItemSettings,
  PolarGraphicalItemSettings,
} from '../graphicalItemsSlice';
import { isWellBehavedNumber } from '../../util/isWellBehavedNumber';
import { getNiceTickValues, getTickValuesFixedDomain } from '../../util/scale';
import {
  ReferenceAreaSettings,
  ReferenceDotSettings,
  ReferenceElementSettings,
  ReferenceLineSettings,
} from '../referenceElementsSlice';
import { selectChartHeight, selectChartWidth } from './containerSelectors';
import { selectAllXAxes, selectAllYAxes } from './selectAllAxes';
import { selectChartOffset } from './selectChartOffset';
import { AxisPropsForCartesianGridTicksGeneration } from '../../cartesian/CartesianGrid';
import { BrushDimensions, selectBrushDimensions, selectBrushSettings } from './brushSelectors';
import { selectBarCategoryGap, selectChartName, selectStackOffsetType } from './rootPropsSelectors';
import { selectAngleAxis, selectAngleAxisRange, selectRadiusAxis, selectRadiusAxisRange } from './polarAxisSelectors';
import { AngleAxisSettings, RadiusAxisSettings } from '../polarAxisSlice';
import { pickAxisType } from './pickAxisType';
import { pickAxisId } from './pickAxisId';
import { MaybeStackedGraphicalItem } from './barSelectors';
import { combineAxisRangeWithReverse } from './combiners/combineAxisRangeWithReverse';
import { DEFAULT_Y_AXIS_WIDTH } from '../../util/Constants';

const defaultNumericDomain: AxisDomain = [0, 'auto'];

/**
 * angle, radius, X, Y, and Z axes all have domain and range and scale and associated settings
 */
type XorYorZType = 'xAxis' | 'yAxis' | 'zAxis' | 'radiusAxis' | 'angleAxis';

/**
 * X and Y axes have ticks. Z axis is never displayed and so it lacks ticks
 * and tick settings.
 */
export type XorYType = 'xAxis' | 'yAxis' | 'angleAxis' | 'radiusAxis';

export type AxisWithTicksSettings = XAxisSettings | YAxisSettings | AngleAxisSettings | RadiusAxisSettings;

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
  id: 0,
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
  const axis = state.cartesianAxis.xAxis[axisId];
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
  id: 0,
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
  width: DEFAULT_Y_AXIS_WIDTH,
};

export const selectYAxisSettings = (state: RechartsRootState, axisId: AxisId): YAxisSettings => {
  const axis = state.cartesianAxis.yAxis[axisId];
  if (axis == null) {
    return implicitYAxis;
  }
  return axis;
};

export const implicitZAxis: ZAxisSettings = {
  domain: [0, 'auto'],
  includeHidden: false,
  reversed: false,
  allowDataOverflow: false,
  allowDuplicatedCategory: false,
  dataKey: undefined,
  id: 0,
  name: '',
  range: [64, 64],
  scale: 'auto',
  type: 'number',
  unit: '',
};

export const selectZAxisSettings = (state: RechartsRootState, axisId: AxisId): ZAxisSettings => {
  const axis = state.cartesianAxis.zAxis[axisId];
  if (axis == null) {
    return implicitZAxis;
  }
  return axis;
};

export const selectBaseAxis = (state: RechartsRootState, axisType: XorYorZType, axisId: AxisId): BaseCartesianAxis => {
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
    case 'angleAxis': {
      return selectAngleAxis(state, axisId);
    }
    case 'radiusAxis': {
      return selectRadiusAxis(state, axisId);
    }
    default:
      throw new Error(`Unexpected axis type: ${axisType}`);
  }
};

const selectCartesianAxisSettings = (
  state: RechartsRootState,
  axisType: 'xAxis' | 'yAxis',
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
): AxisWithTicksSettings => {
  switch (axisType) {
    case 'xAxis': {
      return selectXAxisSettings(state, axisId);
    }
    case 'yAxis': {
      return selectYAxisSettings(state, axisId);
    }
    case 'angleAxis': {
      return selectAngleAxis(state, axisId);
    }
    case 'radiusAxis': {
      return selectRadiusAxis(state, axisId);
    }
    default:
      throw new Error(`Unexpected axis type: ${axisType}`);
  }
};

/**
 * @param state RechartsRootState
 * @return boolean true if there is at least one Bar or RadialBar
 */
export const selectHasBar = (state: RechartsRootState): boolean => state.graphicalItems.countOfBars > 0;

/**
 * Filters CartesianGraphicalItemSettings by the relevant axis ID
 * @param axisType 'xAxis' | 'yAxis' | 'zAxis' | 'radiusAxis' | 'angleAxis'
 * @param axisId from props, defaults to 0
 *
 * @returns Predicate function that return true for CartesianGraphicalItemSettings that are relevant to the specified axis
 */
export function itemAxisPredicate(axisType: XorYorZType, axisId: AxisId) {
  return (item: CartesianGraphicalItemSettings | PolarGraphicalItemSettings) => {
    switch (axisType) {
      case 'xAxis':
        // This is sensitive to the data type, as 0 !== '0'. I wonder if we should be more flexible. How does 2.x branch behave? TODO write test for that
        return 'xAxisId' in item && item.xAxisId === axisId;
      case 'yAxis':
        return 'yAxisId' in item && item.yAxisId === axisId;
      case 'zAxis':
        return 'zAxisId' in item && item.zAxisId === axisId;
      case 'angleAxis':
        return 'angleAxisId' in item && item.angleAxisId === axisId;
      case 'radiusAxis':
        return 'radiusAxisId' in item && item.radiusAxisId === axisId;
      default:
        return false;
    }
  };
}

export const selectUnfilteredCartesianItems = (
  state: RechartsRootState,
): ReadonlyArray<CartesianGraphicalItemSettings> => state.graphicalItems.cartesianItems;

const selectAxisPredicate: (
  _state: RechartsRootState,
  axisType: XorYorZType,
  axisId: AxisId,
) => (item: CartesianGraphicalItemSettings) => boolean = createSelector([pickAxisType, pickAxisId], itemAxisPredicate);

export const combineGraphicalItemsSettings = <T extends GraphicalItemSettings>(
  graphicalItems: ReadonlyArray<T>,
  axisSettings: BaseCartesianAxis,
  axisPredicate: (item: T) => boolean,
) =>
  graphicalItems.filter(axisPredicate).filter(item => {
    if (axisSettings?.includeHidden === true) {
      return true;
    }
    return !item.hide;
  });

export const selectCartesianItemsSettings: (
  state: RechartsRootState,
  axisType: XorYorZType,
  axisId: AxisId,
) => ReadonlyArray<CartesianGraphicalItemSettings> = createSelector(
  [selectUnfilteredCartesianItems, selectBaseAxis, selectAxisPredicate],
  combineGraphicalItemsSettings,
);

export const filterGraphicalNotStackedItems = <T extends MaybeStackedGraphicalItem>(
  cartesianItems: ReadonlyArray<T>,
): ReadonlyArray<T> => cartesianItems.filter(item => item.stackId === undefined);

const selectCartesianItemsSettingsExceptStacked: (
  state: RechartsRootState,
  axisType: XorYorZType,
  axisId: AxisId,
) => ReadonlyArray<CartesianGraphicalItemSettings> = createSelector(
  [selectCartesianItemsSettings],
  filterGraphicalNotStackedItems,
);

export const combineGraphicalItemsData = (cartesianItems: ReadonlyArray<GraphicalItemSettings>) =>
  cartesianItems
    .map(item => item.data)
    .filter(Boolean)
    .flat(1);

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
) => ChartData = createSelector([selectCartesianItemsSettings], combineGraphicalItemsData);

export const combineDisplayedData = (
  graphicalItemsData: ChartData,
  { chartData = [], dataStartIndex, dataEndIndex }: ChartDataState,
): ChartData => {
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
};

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
  isPanorama: boolean,
) => ChartData = createSelector(
  [selectCartesianGraphicalItemsData, selectChartDataWithIndexesIfNotInPanorama],
  combineDisplayedData,
);

export const combineAppliedValues = (
  data: ChartData,
  axisSettings: BaseCartesianAxis,
  items: ReadonlyArray<GraphicalItemSettings>,
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
};

/**
 * This selector will return all values with the appropriate dataKey applied on them.
 * Which dataKey is appropriate depends on where it is defined.
 *
 * This is an expensive selector - it will iterate all data and compute their value using the provided dataKey.
 */
export const selectAllAppliedValues: (
  state: RechartsRootState,
  axisType: XorYorZType,
  axisId: AxisId,
  isPanorama: boolean,
) => AppliedChartData = createSelector(
  [selectDisplayedData, selectBaseAxis, selectCartesianItemsSettings],
  combineAppliedValues,
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

export type AppliedChartDataWithErrorDomain = {
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
  if (isNumber(value) && Number.isFinite(value)) {
    return [value, value];
  }

  if (Array.isArray(value)) {
    const minError = Math.min(...value);
    const maxError = Math.max(...value);
    if (!isNan(minError) && !isNan(maxError) && Number.isFinite(minError) && Number.isFinite(maxError)) {
      return [minError, maxError];
    }
  }

  return undefined;
}

function onlyAllowNumbers(data: ReadonlyArray<unknown>): ReadonlyArray<number> {
  return data
    .filter(v => isNumOrStr(v) || v instanceof Date)
    .map(Number)
    .filter(n => isNan(n) === false);
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
  relevantErrorBars: ReadonlyArray<ErrorBarsSettings> | undefined,
): ReadonlyArray<number> {
  if (!relevantErrorBars || typeof appliedValue !== 'number' || isNan(appliedValue)) {
    return [];
  }

  if (!relevantErrorBars.length) {
    return [];
  }

  return onlyAllowNumbers(
    relevantErrorBars.flatMap(eb => {
      const errorValue = getValueByDataKey(entry, eb.dataKey);
      let lowBound, highBound: unknown;

      if (Array.isArray(errorValue)) {
        [lowBound, highBound] = errorValue;
      } else {
        lowBound = highBound = errorValue;
      }
      if (!isWellBehavedNumber(lowBound) || !isWellBehavedNumber(highBound)) {
        return undefined;
      }
      return [appliedValue - lowBound, appliedValue + highBound];
    }),
  );
}

export type StackDataPoint = [number, number];

export type StackGroup = {
  readonly stackedData: ReadonlyArray<Series<StackDataPoint, DataKey<any>>>;
  readonly graphicalItems: ReadonlyArray<MaybeStackedGraphicalItem>;
};

export const combineStackGroups = (
  displayedData: ChartData,
  items: ReadonlyArray<MaybeStackedGraphicalItem>,
  stackOffsetType: StackOffsetType,
): Record<StackId, StackGroup> => {
  const initialItemsGroups: Record<StackId, Array<MaybeStackedGraphicalItem>> = {};
  const itemsGroup: Record<StackId, ReadonlyArray<MaybeStackedGraphicalItem>> = items.reduce(
    (acc: Record<StackId, Array<MaybeStackedGraphicalItem>>, item: MaybeStackedGraphicalItem) => {
      if (item.stackId == null) {
        return acc;
      }
      if (acc[item.stackId] == null) {
        acc[item.stackId] = [];
      }
      acc[item.stackId].push(item);
      return acc;
    },
    initialItemsGroups,
  );

  return Object.fromEntries(
    Object.entries(itemsGroup).map(([stackId, graphicalItems]): [StackId, StackGroup] => {
      const dataKeys = graphicalItems.map(i => i.dataKey);
      return [
        stackId,
        {
          // @ts-expect-error getStackedData requires that the input is array of objects, Recharts does not test for that
          stackedData: getStackedData(displayedData, dataKeys, stackOffsetType),
          graphicalItems,
        },
      ];
    }),
  );
};
/**
 * Stack groups are groups of graphical items that stack on each other.
 * Stack is a function of axis type (X, Y), axis ID, and stack ID.
 * Graphical items that do not have a stack ID are not going to be present in stack groups.
 */
export const selectStackGroups: (
  state: RechartsRootState,
  axisType: XorYorZType,
  axisId: AxisId,
  isPanorama: boolean,
) => Record<StackId, StackGroup> | undefined = createSelector(
  [selectDisplayedData, selectCartesianItemsSettings, selectStackOffsetType],
  combineStackGroups,
);

export const combineDomainOfStackGroups = (
  stackGroups: Record<StackId, StackGroup> | undefined,
  { dataStartIndex, dataEndIndex }: ChartDataState,
  axisType: XorYorZType,
): NumberDomain | undefined => {
  if (axisType === 'zAxis') {
    // ZAxis ignores stacks
    return undefined;
  }
  const domainOfStackGroups = getDomainOfStackGroups(stackGroups, dataStartIndex, dataEndIndex);
  if (domainOfStackGroups != null && domainOfStackGroups[0] === 0 && domainOfStackGroups[1] === 0) {
    return undefined;
  }
  return domainOfStackGroups;
};

export const selectDomainOfStackGroups = createSelector(
  [selectStackGroups, selectChartDataWithIndexes, pickAxisType],
  combineDomainOfStackGroups,
);

export const combineAppliedNumericalValuesIncludingErrorValues = (
  data: ChartData,
  axisSettings: BaseCartesianAxis,
  items: ReadonlyArray<CartesianGraphicalItemSettings>,
  axisType: XorYorZType,
): ReadonlyArray<AppliedChartDataWithErrorDomain> => {
  if (items.length > 0) {
    return data
      .flatMap(entry => {
        return items.flatMap((item): AppliedChartDataWithErrorDomain | undefined => {
          const relevantErrorBars = item.errorBars?.filter(errorBar =>
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
};

export const selectAllAppliedNumericalValuesIncludingErrorValues: (
  state: RechartsRootState,
  axisType: XorYorZType,
  axisId: AxisId,
  isPanorama: boolean,
) => ReadonlyArray<AppliedChartDataWithErrorDomain> = createSelector(
  selectDisplayedData,
  selectBaseAxis,
  selectCartesianItemsSettingsExceptStacked,
  pickAxisType,
  combineAppliedNumericalValuesIncludingErrorValues,
);

function onlyAllowNumbersAndStringsAndDates(item: { value: unknown }): string | number | Date | undefined {
  const { value } = item;
  if (isNumOrStr(value) || value instanceof Date) {
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

const computeDomainOfTypeCategory = (
  allDataSquished: AppliedChartData,
  axisSettings: BaseCartesianAxis,
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

export const getDomainDefinition = (axisSettings: CartesianAxisSettings): AxisDomain => {
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

export const selectReferenceDots = (state: RechartsRootState): ReadonlyArray<ReferenceDotSettings> =>
  state.referenceElements.dots;

export const filterReferenceElements = <T extends ReferenceElementSettings>(
  elements: ReadonlyArray<T>,
  axisType: XorYorZType,
  axisId: AxisId,
): ReadonlyArray<T> => {
  return elements
    .filter(el => el.ifOverflow === 'extendDomain')
    .filter(el => {
      if (axisType === 'xAxis') {
        return el.xAxisId === axisId;
      }
      return el.yAxisId === axisId;
    });
};

export const selectReferenceDotsByAxis = createSelector(
  [selectReferenceDots, pickAxisType, pickAxisId],
  filterReferenceElements,
);

export const selectReferenceAreas = (state: RechartsRootState): ReadonlyArray<ReferenceAreaSettings> =>
  state.referenceElements.areas;

export const selectReferenceAreasByAxis: (
  state: RechartsRootState,
  axisType: XorYorZType,
  axisId: AxisId,
) => ReadonlyArray<ReferenceAreaSettings> = createSelector(
  [selectReferenceAreas, pickAxisType, pickAxisId],
  filterReferenceElements,
);

export const selectReferenceLines = (state: RechartsRootState): ReadonlyArray<ReferenceLineSettings> =>
  state.referenceElements.lines;

export const selectReferenceLinesByAxis: (
  state: RechartsRootState,
  axisType: XorYorZType,
  axisId: AxisId,
) => ReadonlyArray<ReferenceLineSettings> = createSelector(
  [selectReferenceLines, pickAxisType, pickAxisId],
  filterReferenceElements,
);

export const combineDotsDomain = (
  dots: ReadonlyArray<ReferenceDotSettings>,
  axisType: XorYType,
): NumberDomain | undefined => {
  const allCoords = onlyAllowNumbers(dots.map(dot => (axisType === 'xAxis' ? dot.x : dot.y)));
  if (allCoords.length === 0) {
    return undefined;
  }
  return [Math.min(...allCoords), Math.max(...allCoords)];
};

const selectReferenceDotsDomain = createSelector(selectReferenceDotsByAxis, pickAxisType, combineDotsDomain);

export const combineAreasDomain = (
  areas: ReadonlyArray<ReferenceAreaSettings>,
  axisType: XorYType,
): NumberDomain | undefined => {
  const allCoords = onlyAllowNumbers(
    areas.flatMap(area => [axisType === 'xAxis' ? area.x1 : area.y1, axisType === 'xAxis' ? area.x2 : area.y2]),
  );
  if (allCoords.length === 0) {
    return undefined;
  }
  return [Math.min(...allCoords), Math.max(...allCoords)];
};

const selectReferenceAreasDomain = createSelector([selectReferenceAreasByAxis, pickAxisType], combineAreasDomain);

export const combineLinesDomain = (
  lines: ReadonlyArray<ReferenceLineSettings>,
  axisType: XorYType,
): NumberDomain | undefined => {
  const allCoords = onlyAllowNumbers(lines.map(line => (axisType === 'xAxis' ? line.x : line.y)));
  if (allCoords.length === 0) {
    return undefined;
  }
  return [Math.min(...allCoords), Math.max(...allCoords)];
};

const selectReferenceLinesDomain = createSelector(selectReferenceLinesByAxis, pickAxisType, combineLinesDomain);

const selectReferenceElementsDomain = createSelector(
  selectReferenceDotsDomain,
  selectReferenceLinesDomain,
  selectReferenceAreasDomain,
  (dotsDomain, linesDomain, areasDomain): NumberDomain | undefined => {
    return mergeDomains(dotsDomain, areasDomain, linesDomain);
  },
);

export const selectDomainDefinition: (
  state: RechartsRootState,
  axisType: XorYorZType,
  axisId: AxisId,
) => AxisDomain | undefined = createSelector([selectBaseAxis], getDomainDefinition);

export const combineNumericalDomain = (
  axisSettings: BaseCartesianAxis,
  domainDefinition: AxisDomain | undefined,
  domainOfStackGroups: NumberDomain | undefined,
  allDataWithErrorDomains: ReadonlyArray<AppliedChartDataWithErrorDomain>,
  referenceElementsDomain: NumberDomain | undefined,
): NumberDomain | undefined => {
  const domainFromUserPreference: NumberDomain | undefined = numericalDomainSpecifiedWithoutRequiringData(
    domainDefinition,
    axisSettings.allowDataOverflow,
  );
  if (domainFromUserPreference != null) {
    // We're done! No need to compute anything else.
    return domainFromUserPreference;
  }

  return parseNumericalUserDomain(
    domainDefinition,
    mergeDomains(domainOfStackGroups, referenceElementsDomain, computeNumericalDomain(allDataWithErrorDomains)),
    axisSettings.allowDataOverflow,
  );
};

const selectNumericalDomain: (
  state: RechartsRootState,
  axisType: XorYorZType,
  axisId: AxisId,
  isPanorama: boolean,
) => NumberDomain | undefined = createSelector(
  [
    selectBaseAxis,
    selectDomainDefinition,
    selectDomainOfStackGroups,
    selectAllAppliedNumericalValuesIncludingErrorValues,
    selectReferenceElementsDomain,
  ],
  combineNumericalDomain,
);

/**
 * Expand by design maps everything between 0 and 1,
 * there is nothing to compute.
 * See https://d3js.org/d3-shape/stack#stack-offsets
 */
const expandDomain: NumberDomain = [0, 1];

export const combineAxisDomain = (
  axisSettings: BaseCartesianAxis,
  layout: LayoutType,
  displayedData: ChartData | undefined,
  allAppliedValues: AppliedChartData,
  stackOffsetType: StackOffsetType,
  axisType: XorYorZType,
  numericalDomain: NumberDomain | undefined,
): NumberDomain | CategoricalDomain | undefined => {
  if (axisSettings == null || displayedData == null || displayedData.length === 0) {
    return undefined;
  }

  const { dataKey, type } = axisSettings;
  const isCategorical = isCategoricalAxis(layout, axisType);

  if (isCategorical && dataKey == null) {
    return range(0, displayedData.length);
  }

  if (type === 'category') {
    return computeDomainOfTypeCategory(allAppliedValues, axisSettings, isCategorical);
  }

  if (stackOffsetType === 'expand') {
    return expandDomain;
  }

  return numericalDomain;
};

export const selectAxisDomain: (
  state: RechartsRootState,
  axisType: XorYorZType,
  axisId: AxisId,
  isPanorama: boolean,
) => NumberDomain | CategoricalDomain | undefined = createSelector(
  [
    selectBaseAxis,
    selectChartLayout,
    selectDisplayedData,
    selectAllAppliedValues,
    selectStackOffsetType,
    pickAxisType,
    selectNumericalDomain,
  ],
  combineAxisDomain,
);

export const combineRealScaleType = (
  axisConfig: BaseCartesianAxis | undefined,
  layout: LayoutType,
  hasBar: boolean,
  chartType: string,
  axisType: XorYorZType,
): string | undefined => {
  if (axisConfig == null) {
    return undefined;
  }
  const { scale, type } = axisConfig;
  if (scale === 'auto') {
    if (layout === 'radial' && axisType === 'radiusAxis') {
      return 'band';
    }
    if (layout === 'radial' && axisType === 'angleAxis') {
      return 'linear';
    }

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
};

export const selectRealScaleType: (
  state: RechartsRootState,
  axisType: XorYorZType,
  axisId: AxisId,
) => string | undefined = createSelector(
  [selectBaseAxis, selectChartLayout, selectHasBar, selectChartName, pickAxisType],
  combineRealScaleType,
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

export function combineScaleFunction(
  axis: BaseCartesianAxis,
  realScaleType: string | undefined,
  axisDomain: NumberDomain | CategoricalDomain,
  axisRange: [number, number],
): RechartsScale | undefined {
  if (axisDomain == null || axisRange == null) {
    return undefined;
  }
  if (typeof axis.scale === 'function') {
    // @ts-expect-error we're going to assume here that if axis.scale is a function then it is a d3Scale function
    return axis.scale.copy().domain(axisDomain).range(axisRange);
  }
  const d3ScaleFunction = getD3ScaleFromType(realScaleType);
  if (d3ScaleFunction == null) {
    return undefined;
  }
  const scale = d3ScaleFunction.domain(axisDomain).range(axisRange);
  // I don't like this function because it mutates the scale. We should come up with a way to compute the domain up front.
  checkDomainOfScale(scale);
  return scale;
}

export const combineNiceTicks = (
  axisDomain: NumberDomain | CategoricalDomain | undefined,
  axisSettings: CartesianAxisSettings,
  realScaleType: string,
): ReadonlyArray<number> | undefined => {
  const domainDefinition: AxisDomain = getDomainDefinition(axisSettings);

  if (realScaleType !== 'auto' && realScaleType !== 'linear') {
    return undefined;
  }

  if (
    axisSettings != null &&
    axisSettings.tickCount &&
    Array.isArray(domainDefinition) &&
    (domainDefinition[0] === 'auto' || domainDefinition[1] === 'auto') &&
    isWellFormedNumberDomain(axisDomain)
  ) {
    return getNiceTickValues(axisDomain, axisSettings.tickCount, axisSettings.allowDecimals);
  }

  if (
    axisSettings != null &&
    axisSettings.tickCount &&
    axisSettings.type === 'number' &&
    isWellFormedNumberDomain(axisDomain)
  ) {
    return getTickValuesFixedDomain(axisDomain as NumberDomain, axisSettings.tickCount, axisSettings.allowDecimals);
  }

  return undefined;
};
export const selectNiceTicks: (
  state: RechartsRootState,
  axisType: XorYType,
  axisId: AxisId,
  isPanorama: boolean,
) => ReadonlyArray<number> | undefined = createSelector(
  [selectAxisDomain, selectAxisSettings, selectRealScaleType],
  combineNiceTicks,
);

export const combineAxisDomainWithNiceTicks = (
  axisSettings: BaseCartesianAxis,
  domain: NumberDomain | CategoricalDomain | undefined,
  niceTicks: ReadonlyArray<number> | undefined,
  axisType: XorYType,
): NumberDomain | CategoricalDomain | undefined => {
  if (
    /*
     * Angle axis for some reason uses nice ticks when rendering axis tick labels,
     * but doesn't use nice ticks for extending domain like all the other axes do.
     * Not really sure why? Is there a good reason,
     * or is it just because someone added support for nice ticks to the other axes and forgot this one?
     */
    axisType !== 'angleAxis' &&
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
};

export const selectAxisDomainIncludingNiceTicks: (
  state: RechartsRootState,
  axisType: XorYorZType,
  axisId: AxisId,
  isPanorama: boolean,
) => NumberDomain | CategoricalDomain | undefined = createSelector(
  [selectBaseAxis, selectAxisDomain, selectNiceTicks, pickAxisType],
  combineAxisDomainWithNiceTicks,
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
  isPanorama: boolean,
) => number | undefined = createSelector(
  selectAllAppliedValues,
  selectBaseAxis,
  (allDataSquished: AppliedChartData, axisSettings: BaseCartesianAxis): number | undefined => {
    if (!axisSettings || axisSettings.type !== 'number') {
      return undefined;
    }
    let smallestDistanceBetweenValues = Infinity;
    const sortedValues = Array.from(onlyAllowNumbers(allDataSquished.map(d => d.value))).sort((a, b) => a - b);
    if (sortedValues.length < 2) {
      return Infinity;
    }
    const diff = sortedValues[sortedValues.length - 1] - sortedValues[0];
    if (diff === 0) {
      return Infinity;
    }
    // Only do n - 1 distance calculations because there's only n - 1 distances between n values.
    for (let i = 0; i < sortedValues.length - 1; i++) {
      const distance = sortedValues[i + 1] - sortedValues[i];
      smallestDistanceBetweenValues = Math.min(smallestDistanceBetweenValues, distance);
    }
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
    offset: ChartOffsetRequired,
    padding: string,
  ) => {
    if (!isWellBehavedNumber(smallestDistanceInPercent)) {
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

export const selectCalculatedYAxisPadding: (state: RechartsRootState, axisId: AxisId) => number = (state, axisId) => {
  const yAxisSettings = selectYAxisSettings(state, axisId);
  if (yAxisSettings == null || typeof yAxisSettings.padding !== 'string') {
    return 0;
  }
  return selectCalculatedPadding(state, 'yAxis', axisId, yAxisSettings.padding);
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
    selectCalculatedYAxisPadding,
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

export const combineXAxisRange: (
  state: RechartsRootState,
  axisId: AxisId,
  isPanorama: boolean,
) => AxisRange | undefined = createSelector(
  [
    selectChartOffset,
    selectXAxisPadding,
    selectBrushDimensions,
    selectBrushSettings,
    (_state: RechartsRootState, _axisId: AxisId, isPanorama) => isPanorama,
  ],
  (
    offset: ChartOffsetRequired,
    padding,
    brushDimensions: BrushDimensions,
    { padding: brushPadding },
    isPanorama: boolean,
  ): AxisRange | undefined => {
    if (isPanorama) {
      return [brushPadding.left, brushDimensions.width - brushPadding.right];
    }
    return [offset.left + padding.left, offset.left + offset.width - padding.right];
  },
);

export type AxisRange = readonly [number, number];

export const combineYAxisRange: (
  state: RechartsRootState,
  axisId: AxisId,
  isPanorama: boolean,
) => AxisRange | undefined = createSelector(
  [
    selectChartOffset,
    selectChartLayout,
    selectYAxisPadding,
    selectBrushDimensions,
    selectBrushSettings,
    (_state: RechartsRootState, _axisId: AxisId, isPanorama) => isPanorama,
  ],
  (
    offset: ChartOffsetRequired,
    layout: LayoutType,
    padding: { top: number; bottom: number },
    brushDimensions: BrushDimensions,
    { padding: brushPadding },
    isPanorama: boolean,
  ): AxisRange | undefined => {
    if (isPanorama) {
      return [brushDimensions.height - brushPadding.bottom, brushPadding.top];
    }
    if (layout === 'horizontal') {
      return [offset.top + offset.height - padding.bottom, offset.top + padding.top];
    }
    return [offset.top + padding.top, offset.top + offset.height - padding.bottom];
  },
);

export const selectAxisRange = (
  state: RechartsRootState,
  axisType: XorYorZType,
  axisId: AxisId,
  isPanorama: boolean,
): AxisRange | undefined => {
  switch (axisType) {
    case 'xAxis':
      return combineXAxisRange(state, axisId, isPanorama);
    case 'yAxis':
      return combineYAxisRange(state, axisId, isPanorama);
    case 'zAxis':
      return selectZAxisSettings(state, axisId)?.range;
    case 'angleAxis':
      return selectAngleAxisRange(state);
    case 'radiusAxis':
      return selectRadiusAxisRange(state, axisId);
    default:
      return undefined;
  }
};

export const selectAxisRangeWithReverse: (
  state: RechartsRootState,
  axisType: XorYorZType,
  axisId: AxisId,
  isPanorama: boolean,
) => AxisRange | undefined = createSelector([selectBaseAxis, selectAxisRange], combineAxisRangeWithReverse);

export const selectAxisScale: (
  state: RechartsRootState,
  axisType: XorYorZType,
  axisId: AxisId,
  isPanorama: boolean,
) => RechartsScale | undefined = createSelector(
  [selectBaseAxis, selectRealScaleType, selectAxisDomainIncludingNiceTicks, selectAxisRangeWithReverse],
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

function compareIds(a: CartesianAxisSettings, b: CartesianAxisSettings) {
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

const getXAxisSize = (offset: ChartOffsetRequired, axisSettings: XAxisSettings): Size => {
  return {
    width: offset.width,
    height: axisSettings.height,
  };
};

const getYAxisSize = (offset: ChartOffsetRequired, axisSettings: YAxisSettings): Size => {
  const width = typeof axisSettings.width === 'number' ? axisSettings.width : DEFAULT_Y_AXIS_WIDTH;
  return {
    width,
    height: offset.height,
  };
};

export const selectXAxisSize: (state: RechartsRootState, xAxisId: AxisId) => Size = createSelector(
  selectChartOffset,
  selectXAxisSettings,
  getXAxisSize,
);

type AxisOffsetSteps = Record<AxisId, number>;

const combineXAxisPositionStartingPoint = (
  offset: ChartOffsetRequired,
  orientation: XAxisOrientation,
  chartHeight: number,
) => {
  switch (orientation) {
    case 'top':
      return offset.top;
    case 'bottom':
      return chartHeight - offset.bottom;
    default:
      return 0;
  }
};

const combineYAxisPositionStartingPoint = (
  offset: ChartOffsetRequired,
  orientation: YAxisOrientation,
  chartWidth: number,
) => {
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
  (chartHeight, offset, allAxesWithSameOffsetType, orientation: XAxisOrientation, mirror) => {
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
  (chartWidth, offset: ChartOffsetRequired, allAxesWithSameOffsetType, orientation: YAxisOrientation, mirror) => {
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

export const selectYAxisSize: (state: RechartsRootState, yAxisId: AxisId) => Size = createSelector(
  selectChartOffset,
  selectYAxisSettings,
  (offset: ChartOffsetRequired, axisSettings: YAxisSettings): Size => {
    const width = typeof axisSettings.width === 'number' ? axisSettings.width : DEFAULT_Y_AXIS_WIDTH;

    return {
      width,
      height: offset.height,
    };
  },
);

export const selectCartesianAxisSize = (
  state: RechartsRootState,
  axisType: XorYType,
  axisId: AxisId,
): number | undefined => {
  switch (axisType) {
    case 'xAxis': {
      return selectXAxisSize(state, axisId).width;
    }
    case 'yAxis': {
      return selectYAxisSize(state, axisId).height;
    }
    default: {
      return undefined;
    }
  }
};

export const combineDuplicateDomain = (
  chartLayout: LayoutType,
  appliedValues: AppliedChartData,
  axis: BaseCartesianAxis,
  axisType: XorYorZType,
): ReadonlyArray<unknown> | undefined => {
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
};

export const selectDuplicateDomain: (
  state: RechartsRootState,
  axisType: XorYorZType,
  axisId: AxisId,
  isPanorama: boolean,
) => ReadonlyArray<unknown> | undefined = createSelector(
  [selectChartLayout, selectAllAppliedValues, selectBaseAxis, pickAxisType],
  combineDuplicateDomain,
);

export const combineCategoricalDomain = (
  layout: LayoutType,
  appliedValues: AppliedChartData,
  axis: AxisWithTicksSettings,
  axisType: XorYType,
): ReadonlyArray<unknown> | undefined => {
  if (axis == null || axis.dataKey == null) {
    return undefined;
  }
  const { type, scale } = axis;
  const isCategorical = isCategoricalAxis(layout, axisType);
  if (isCategorical && (type === 'number' || scale !== 'auto')) {
    return appliedValues.map(d => d.value);
  }
  return undefined;
};

export const selectCategoricalDomain: (
  state: RechartsRootState,
  axisType: XorYorZType,
  axisId: AxisId,
  isPanorama: boolean,
) => ReadonlyArray<unknown> | undefined = createSelector(
  [selectChartLayout, selectAllAppliedValues, selectAxisSettings, pickAxisType],
  combineCategoricalDomain,
);

export const selectAxisPropsNeededForCartesianGridTicksGenerator = createSelector(
  [
    selectChartLayout,
    selectCartesianAxisSettings,
    selectRealScaleType,
    selectAxisScale,
    selectDuplicateDomain,
    selectCategoricalDomain,
    selectAxisRange,
    selectNiceTicks,
    pickAxisType,
  ],
  (
    layout: LayoutType,
    axis: XAxisSettings | YAxisSettings,
    realScaleType: string,
    scale: RechartsScale | undefined,
    duplicateDomain,
    categoricalDomain,
    axisRange,
    niceTicks,
    axisType: AxisType,
  ): AxisPropsForCartesianGridTicksGeneration | null => {
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

export const combineAxisTicks = (
  layout: LayoutType,
  axis: AxisWithTicksSettings,
  realScaleType: string,
  scale: RechartsScale | undefined,
  niceTicks: ReadonlyArray<number> | undefined,
  axisRange: AxisRange | undefined,
  duplicateDomain: ReadonlyArray<unknown> | undefined,
  categoricalDomain: ReadonlyArray<unknown> | undefined,
  axisType: XorYType,
): ReadonlyArray<TickItem> | undefined => {
  if (axis == null || scale == null) {
    return undefined;
  }

  const isCategorical = isCategoricalAxis(layout, axisType);

  const { type, ticks, tickCount } = axis;

  // This is testing for `scaleBand` but for band axis the type is reported as `band` so this looks like a dead code with a workaround elsewhere?
  const offsetForBand =
    realScaleType === 'scaleBand' && typeof scale.bandwidth === 'function' ? scale.bandwidth() / 2 : 2;

  let offset = type === 'category' && scale.bandwidth ? scale.bandwidth() / offsetForBand : 0;

  offset =
    axisType === 'angleAxis' && axisRange != null && axisRange.length >= 2
      ? mathSign(axisRange[0] - axisRange[1]) * 2 * offset
      : offset;

  // The ticks set by user should only affect the ticks adjacent to axis line
  const ticksOrNiceTicks = ticks || niceTicks;
  if (ticksOrNiceTicks) {
    const result = ticksOrNiceTicks.map((entry: AxisTick, index: number): TickItem => {
      const scaleContent = duplicateDomain ? duplicateDomain.indexOf(entry) : entry;

      return {
        index,
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: scale(scaleContent) + offset,
        value: entry,
        offset,
      };
    });

    return result.filter((row: TickItem) => !isNan(row.coordinate));
  }

  // When axis is a categorical axis, but the type of axis is number or the scale of axis is not "auto"
  if (isCategorical && categoricalDomain) {
    return categoricalDomain.map(
      (entry: any, index: number): TickItem => ({
        coordinate: scale(entry) + offset,
        value: entry,
        index,
        offset,
      }),
    );
  }

  if (scale.ticks) {
    return (
      scale
        .ticks(tickCount)
        // @ts-expect-error why does the offset go here? The type does not require it
        .map((entry: any): TickItem => ({ coordinate: scale(entry) + offset, value: entry, offset }))
    );
  }

  // When axis has duplicated text, serial numbers are used to generate scale
  return scale.domain().map(
    (entry: any, index: number): TickItem => ({
      coordinate: scale(entry) + offset,
      value: duplicateDomain ? duplicateDomain[entry] : entry,
      index,
      offset,
    }),
  );
};
export const selectTicksOfAxis: (
  state: RechartsRootState,
  axisType: XorYType,
  axisId: AxisId,
  isPanorama: boolean,
) => ReadonlyArray<CartesianTickItem> | undefined = createSelector(
  [
    selectChartLayout,
    selectAxisSettings,
    selectRealScaleType,
    selectAxisScale,
    selectNiceTicks,
    selectAxisRange,
    selectDuplicateDomain,
    selectCategoricalDomain,
    pickAxisType,
  ],
  combineAxisTicks,
);

export const combineGraphicalItemTicks = (
  layout: LayoutType,
  axis: AxisWithTicksSettings,
  scale: RechartsScale | undefined,
  axisRange: AxisRange | undefined,
  duplicateDomain: ReadonlyArray<unknown> | undefined,
  categoricalDomain: ReadonlyArray<unknown> | undefined,
  axisType: XorYType,
): TickItem[] | undefined => {
  if (axis == null || scale == null || axisRange == null || axisRange[0] === axisRange[1]) {
    return undefined;
  }
  const isCategorical = isCategoricalAxis(layout, axisType);

  const { tickCount } = axis;

  let offset = 0;

  offset =
    axisType === 'angleAxis' && axisRange?.length >= 2 ? mathSign(axisRange[0] - axisRange[1]) * 2 * offset : offset;

  // When axis is a categorical axis, but the type of axis is number or the scale of axis is not "auto"
  if (isCategorical && categoricalDomain) {
    return categoricalDomain.map(
      (entry: any, index: number): TickItem => ({
        coordinate: scale(entry) + offset,
        value: entry,
        index,
        offset,
      }),
    );
  }

  if (scale.ticks) {
    return (
      scale
        .ticks(tickCount)
        // @ts-expect-error why does the offset go here? The type does not require it
        .map((entry: any): TickItem => ({ coordinate: scale(entry) + offset, value: entry, offset }))
    );
  }

  // When axis has duplicated text, serial numbers are used to generate scale
  return scale.domain().map(
    (entry: any, index: number): TickItem => ({
      coordinate: scale(entry) + offset,
      value: duplicateDomain ? duplicateDomain[entry] : entry,
      index,
      offset,
    }),
  );
};

export const selectTicksOfGraphicalItem: (
  state: RechartsRootState,
  axisType: XorYType,
  axisId: AxisId,
  isPanorama: boolean,
) => TickItem[] | undefined = createSelector(
  [
    selectChartLayout,
    selectAxisSettings,
    selectAxisScale,
    selectAxisRange,
    selectDuplicateDomain,
    selectCategoricalDomain,
    pickAxisType,
  ],
  combineGraphicalItemTicks,
);

export type BaseAxisWithScale = BaseCartesianAxis & { scale: RechartsScale };

export const selectAxisWithScale: (
  state: RechartsRootState,
  axisType: XorYorZType,
  axisId: AxisId,
  isPanorama: boolean,
) => BaseAxisWithScale | undefined = createSelector(
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

const selectZAxisScale: (
  state: RechartsRootState,
  axisType: 'zAxis',
  axisId: AxisId,
  isPanorama: false,
) => RechartsScale | undefined = createSelector(
  [selectBaseAxis, selectRealScaleType, selectAxisDomain, selectAxisRangeWithReverse],
  combineScaleFunction,
);

export type ZAxisWithScale = ZAxisSettings & { scale: RechartsScale };

export const selectZAxisWithScale = createSelector(
  (state: RechartsRootState, _axisType: 'zAxis', axisId: AxisId) => selectZAxisSettings(state, axisId),
  selectZAxisScale,
  (axis: ZAxisSettings, scale: RechartsScale | undefined): ZAxisWithScale | undefined => {
    if (axis == null || scale == null) {
      return undefined;
    }
    return {
      ...axis,
      scale,
    };
  },
);

/**
 * We are also going to need to implement polar chart directions if we want to support keyboard controls for those.
 */
export type AxisDirection = 'left-to-right' | 'right-to-left' | 'top-to-bottom' | 'bottom-to-top';

export const selectChartDirection: (state: RechartsRootState) => AxisDirection | undefined = createSelector(
  [selectChartLayout, selectAllXAxes, selectAllYAxes],
  (
    layout: LayoutType,
    allXAxes: ReadonlyArray<XAxisSettings>,
    allYAxes: ReadonlyArray<YAxisSettings>,
  ): AxisDirection | undefined => {
    switch (layout) {
      case 'horizontal': {
        return allXAxes.some(axis => axis.reversed) ? 'right-to-left' : 'left-to-right';
      }
      case 'vertical': {
        return allYAxes.some(axis => axis.reversed) ? 'bottom-to-top' : 'top-to-bottom';
      }
      // TODO: make this better. For now, right arrow triggers "forward", left arrow "back"
      // however, the tooltip moves an unintuitive direction because of how the indices are rendered
      case 'centric':
      case 'radial': {
        return 'left-to-right';
      }
      default: {
        return undefined;
      }
    }
  },
);
