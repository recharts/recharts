import { createSelector } from 'reselect';
import range from 'es-toolkit/compat/range';
import { selectChartLayout } from '../../context/chartLayoutContext';
import {
  getDomainOfStackGroups,
  getStackedData,
  getValueByDataKey,
  isCategoricalAxis,
  StackId,
} from '../../util/ChartUtils';
import {
  AxisDomain,
  AxisTick,
  AxisType,
  CartesianTickItem,
  CategoricalDomain,
  CategoricalDomainItem,
  ChartOffsetInternal,
  Coordinate,
  D3ScaleType,
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
import { selectChartDataWithIndexes, selectChartDataWithIndexesIfNotInPanoramaPosition4 } from './dataSelectors';
import {
  isWellFormedNumberDomain,
  numericalDomainSpecifiedWithoutRequiringData,
  parseNumericalUserDomain,
} from '../../util/isDomainSpecifiedByUser';
import { AppliedChartData, ChartData, ChartDataState } from '../chartDataSlice';
import { getPercentValue, hasDuplicate, isNan, isNotNil, isNumOrStr, mathSign } from '../../util/DataUtils';
import {
  BaseCartesianGraphicalItemSettings,
  BasePolarGraphicalItemSettings,
  CartesianGraphicalItemSettings,
  GraphicalItemSettings,
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
import { selectChartOffsetInternal } from './selectChartOffsetInternal';
import { AxisPropsForCartesianGridTicksGeneration } from '../../cartesian/CartesianGrid';
import { BrushDimensions, selectBrushDimensions, selectBrushSettings } from './brushSelectors';
import {
  selectBarCategoryGap,
  selectChartName,
  selectReverseStackOrder,
  selectStackOffsetType,
} from './rootPropsSelectors';
import { selectAngleAxis, selectAngleAxisRange, selectRadiusAxis, selectRadiusAxisRange } from './polarAxisSelectors';
import { AngleAxisSettings, RadiusAxisSettings } from '../polarAxisSlice';
import { pickAxisType } from './pickAxisType';
import { pickAxisId } from './pickAxisId';
import { combineAxisRangeWithReverse } from './combiners/combineAxisRangeWithReverse';
import { DEFAULT_Y_AXIS_WIDTH } from '../../util/Constants';
import { getStackSeriesIdentifier } from '../../util/stacks/getStackSeriesIdentifier';
import { AllStackGroups, StackGroup } from '../../util/stacks/stackTypes';
import { combineDisplayedStackedData, DisplayedStackedData } from './combiners/combineDisplayedStackedData';
import { DefinitelyStackedGraphicalItem, isStacked } from '../types/StackedGraphicalItem';
import { ErrorBarsSettings, ErrorBarsState } from '../errorBarSlice';
import { numberDomainEqualityCheck } from './numberDomainEqualityCheck';
import { emptyArraysAreEqualCheck } from './arrayEqualityCheck';
import { AllAxisTypes, RenderableAxisType, selectTooltipAxisType } from './selectTooltipAxisType';
import { selectTooltipAxisId } from './selectTooltipAxisId';
import { RechartsScale, rechartsScaleFactory } from '../../util/scale/RechartsScale';
import { combineCheckedDomain } from './combiners/combineCheckedDomain';
import { CustomScaleDefinition } from '../../util/scale/CustomScaleDefinition';
import { combineConfiguredScale } from './combiners/combineConfiguredScale';
import { combineRealScaleType } from './combiners/combineRealScaleType';
import { InverseScaleFunction } from '../../hooks';
import { createCategoricalInverse } from '../../util/scale/createCategoricalInverse';
import { combineInverseScaleFunction } from './combiners/combineInverseScaleFunction';

export const defaultNumericDomain: AxisDomain = [0, 'auto'];

export type RenderableAxisSettings = XAxisSettings | YAxisSettings | AngleAxisSettings | RadiusAxisSettings;

export type AllAxisSettings = XAxisSettings | YAxisSettings | ZAxisSettings | AngleAxisSettings | RadiusAxisSettings;

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
  niceTicks: false,
};

export const selectXAxisSettingsNoDefaults = (state: RechartsRootState, axisId: AxisId): XAxisSettings | undefined => {
  return state.cartesianAxis.xAxis[axisId];
};

export const selectXAxisSettings = (state: RechartsRootState, axisId: AxisId): XAxisSettings => {
  const axis = selectXAxisSettingsNoDefaults(state, axisId);
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
  niceTicks: false,
  width: DEFAULT_Y_AXIS_WIDTH,
};

export const selectYAxisSettingsNoDefaults = (state: RechartsRootState, axisId: AxisId): YAxisSettings | undefined => {
  return state.cartesianAxis.yAxis[axisId];
};

export const selectYAxisSettings = (state: RechartsRootState, axisId: AxisId): YAxisSettings => {
  const axis = selectYAxisSettingsNoDefaults(state, axisId);
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

export const selectBaseAxis = (state: RechartsRootState, axisType: AllAxisTypes, axisId: AxisId): AllAxisSettings => {
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
export const selectRenderableAxisSettings = (
  state: RechartsRootState,
  axisType: RenderableAxisType,
  axisId: AxisId,
): RenderableAxisSettings => {
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
export const selectHasBar = (state: RechartsRootState): boolean =>
  state.graphicalItems.cartesianItems.some(item => item.type === 'bar') ||
  state.graphicalItems.polarItems.some(item => item.type === 'radialBar');

/**
 * Filters CartesianGraphicalItemSettings by the relevant axis ID
 * @param axisType 'xAxis' | 'yAxis' | 'zAxis' | 'radiusAxis' | 'angleAxis'
 * @param axisId from props, defaults to 0
 *
 * @returns Predicate function that return true for CartesianGraphicalItemSettings that are relevant to the specified axis
 */
export function itemAxisPredicate(axisType: AllAxisTypes, axisId: AxisId) {
  return (item: BaseCartesianGraphicalItemSettings | BasePolarGraphicalItemSettings) => {
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

// TODO appears there is a bug where this selector is called from polar context, find and fix it.
export const selectUnfilteredCartesianItems = (
  state: RechartsRootState,
): ReadonlyArray<CartesianGraphicalItemSettings> => state.graphicalItems.cartesianItems;

const selectAxisPredicate: (
  _state: RechartsRootState,
  axisType: AllAxisTypes,
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
  axisType: AllAxisTypes,
  axisId: AxisId,
) => ReadonlyArray<CartesianGraphicalItemSettings> = createSelector(
  [selectUnfilteredCartesianItems, selectBaseAxis, selectAxisPredicate],
  combineGraphicalItemsSettings,
  {
    memoizeOptions: {
      resultEqualityCheck: emptyArraysAreEqualCheck,
    },
  },
);

export const selectStackedCartesianItemsSettings: (
  state: RechartsRootState,
  axisType: AllAxisTypes,
  axisId: AxisId,
) => ReadonlyArray<DefinitelyStackedGraphicalItem> = createSelector(
  [selectCartesianItemsSettings],
  (cartesianItems: ReadonlyArray<CartesianGraphicalItemSettings>): ReadonlyArray<DefinitelyStackedGraphicalItem> => {
    return cartesianItems.filter(item => item.type === 'area' || item.type === 'bar').filter(isStacked);
  },
);

export const filterGraphicalNotStackedItems = (
  cartesianItems: ReadonlyArray<GraphicalItemSettings>,
): ReadonlyArray<GraphicalItemSettings> =>
  cartesianItems.filter(item => !('stackId' in item) || item.stackId === undefined);

const selectCartesianItemsSettingsExceptStacked: (
  state: RechartsRootState,
  axisType: AllAxisTypes,
  axisId: AxisId,
) => ReadonlyArray<GraphicalItemSettings> = createSelector(
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
  axisType: AllAxisTypes,
  axisId: AxisId,
) => ChartData = createSelector([selectCartesianItemsSettings], combineGraphicalItemsData, {
  memoizeOptions: {
    resultEqualityCheck: emptyArraysAreEqualCheck,
  },
});

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
  axisType: AllAxisTypes,
  axisId: AxisId,
  isPanorama: boolean,
) => ChartData = createSelector(
  [selectCartesianGraphicalItemsData, selectChartDataWithIndexesIfNotInPanoramaPosition4],
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
  axisType: AllAxisTypes,
  axisId: AxisId,
  isPanorama: boolean,
) => AppliedChartData = createSelector(
  [selectDisplayedData, selectBaseAxis, selectCartesianItemsSettings],
  combineAppliedValues,
);

function makeNumber(val: unknown): number | undefined {
  if (isNumOrStr(val) || val instanceof Date) {
    const n = Number(val);
    if (isWellBehavedNumber(n)) {
      return n;
    }
  }
  return undefined;
}

function makeDomain(val: unknown): NumberDomain | undefined {
  if (Array.isArray(val)) {
    const attempt = [makeNumber(val[0]), makeNumber(val[1])];
    if (isWellFormedNumberDomain(attempt)) {
      return attempt;
    }
    return undefined;
  }
  const n = makeNumber(val);
  if (n == null) {
    return undefined;
  }
  return [n, n];
}

function onlyAllowNumbers(data: ReadonlyArray<unknown>): ReadonlyArray<number> {
  return data.map(makeNumber).filter(isNotNil);
}

function sortBy(a: unknown, b: unknown): number {
  const aNum = makeNumber(a);
  const bNum = makeNumber(b);
  if (aNum == null && bNum == null) {
    return 0;
  }
  if (aNum == null) {
    return -1;
  }
  if (bNum == null) {
    return 1;
  }
  return aNum - bNum;
}

export const selectSortedDataPoints: (
  state: RechartsRootState,
  axisType: AllAxisTypes,
  axisId: AxisId,
  isPanorama: boolean,
) => ReadonlyArray<unknown> | undefined = createSelector([selectAllAppliedValues], appliedData => {
  return appliedData?.map(item => item.value).sort(sortBy);
});

export function isErrorBarRelevantForAxisType(axisType: AllAxisTypes, errorBar: ErrorBarsSettings): boolean {
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

export const selectTooltipAxis = (state: RechartsRootState): RenderableAxisSettings => {
  const axisType = selectTooltipAxisType(state);
  const axisId = selectTooltipAxisId(state);
  return selectRenderableAxisSettings(state, axisType, axisId);
};

export const selectTooltipAxisDataKey: (state: RechartsRootState) => DataKey<any> | undefined = createSelector(
  [selectTooltipAxis],
  (axis: RenderableAxisSettings | undefined): DataKey<any> | undefined => axis?.dataKey,
);

export const selectDisplayedStackedData: (
  state: RechartsRootState,
  axisType: AllAxisTypes,
  axisId: AxisId,
  isPanorama: boolean,
) => DisplayedStackedData = createSelector(
  [selectStackedCartesianItemsSettings, selectChartDataWithIndexesIfNotInPanoramaPosition4, selectTooltipAxis],
  combineDisplayedStackedData,
);

export const combineStackGroups = (
  displayedData: DisplayedStackedData,
  items: ReadonlyArray<DefinitelyStackedGraphicalItem>,
  stackOffsetType: StackOffsetType,
  reverseStackOrder: boolean,
): AllStackGroups => {
  const initialItemsGroups: Record<StackId, Array<DefinitelyStackedGraphicalItem>> = {};
  const itemsGroup: Record<StackId, ReadonlyArray<DefinitelyStackedGraphicalItem>> = items.reduce(
    (acc: Record<StackId, Array<DefinitelyStackedGraphicalItem>>, item: DefinitelyStackedGraphicalItem) => {
      if (item.stackId == null) {
        return acc;
      }
      let stack = acc[item.stackId];
      if (stack == null) {
        stack = [];
      }
      stack.push(item);
      acc[item.stackId] = stack;
      return acc;
    },
    initialItemsGroups,
  );

  return Object.fromEntries(
    Object.entries(itemsGroup).map(([stackId, graphicalItems]): [StackId, StackGroup] => {
      const orderedGraphicalItems = reverseStackOrder ? [...graphicalItems].reverse() : graphicalItems;
      const dataKeys = orderedGraphicalItems.map(getStackSeriesIdentifier);
      return [
        stackId,
        {
          // @ts-expect-error getStackedData requires that the input is array of objects, Recharts does not test for that
          stackedData: getStackedData(displayedData, dataKeys, stackOffsetType),
          graphicalItems: orderedGraphicalItems,
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
  axisType: AllAxisTypes,
  axisId: AxisId,
  isPanorama: boolean,
) => AllStackGroups | undefined = createSelector(
  [selectDisplayedStackedData, selectStackedCartesianItemsSettings, selectStackOffsetType, selectReverseStackOrder],
  combineStackGroups,
);

export const combineDomainOfStackGroups = (
  stackGroups: AllStackGroups | undefined,
  { dataStartIndex, dataEndIndex }: ChartDataState,
  axisType: AllAxisTypes,
  domainFromUserPreference: NumberDomain | undefined,
): NumberDomain | undefined => {
  if (domainFromUserPreference != null) {
    // User has specified a domain, so we respect that and we can skip computing anything else
    return undefined;
  }
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

const selectAllowsDataOverflow: (state: RechartsRootState, axisType: AllAxisTypes, axisId: AxisId) => boolean =
  createSelector([selectBaseAxis], axisSettings => axisSettings.allowDataOverflow);

export const getDomainDefinition = (axisSettings: AllAxisSettings): AxisDomain => {
  if (axisSettings == null || !('domain' in axisSettings)) {
    return defaultNumericDomain;
  }

  if (axisSettings.domain != null) {
    return axisSettings.domain;
  }
  if ('ticks' in axisSettings && axisSettings.ticks != null) {
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

export const selectDomainDefinition: (state: RechartsRootState, axisType: AllAxisTypes, axisId: AxisId) => AxisDomain =
  createSelector([selectBaseAxis], getDomainDefinition);

/**
 * Under certain circumstances, we can determine the domain without looking at the data at all.
 * This is the case when the domain is explicitly specified as numbers, or when it is specified
 * as 'auto' or 'dataMin'/'dataMax' and data overflow is not allowed.
 *
 * In that case, this function will return the domain, otherwise it returns undefined.
 *
 * This is an optimization to avoid unnecessary data processing.
 * @param state
 * @param axisType
 * @param axisId
 * @param isPanorama
 */
export const selectDomainFromUserPreference: (
  state: RechartsRootState,
  axisType: AllAxisTypes,
  axisId: AxisId,
) => NumberDomain | undefined = createSelector(
  [selectDomainDefinition, selectAllowsDataOverflow],
  numericalDomainSpecifiedWithoutRequiringData,
);

export const selectDomainOfStackGroups: (
  state: RechartsRootState,
  axisType: AllAxisTypes,
  axisId: AxisId,
  isPanorama: boolean,
) => NumberDomain | undefined = createSelector(
  [selectStackGroups, selectChartDataWithIndexes, pickAxisType, selectDomainFromUserPreference],
  combineDomainOfStackGroups,
  {
    memoizeOptions: {
      resultEqualityCheck: numberDomainEqualityCheck,
    },
  },
);

export const selectAllErrorBarSettings = (state: RechartsRootState): ErrorBarsState => state.errorBars;

const combineRelevantErrorBarSettings = (
  cartesianItemsSettings: ReadonlyArray<CartesianGraphicalItemSettings>,
  allErrorBarSettings: ErrorBarsState,
  axisType: RenderableAxisType,
): ReadonlyArray<ErrorBarsSettings> => {
  return cartesianItemsSettings
    .flatMap(item => {
      return allErrorBarSettings[item.id];
    })
    .filter(Boolean)
    .filter(e => {
      return isErrorBarRelevantForAxisType(axisType, e);
    });
};

export const mergeDomains = (
  ...domains: ReadonlyArray<ReadonlyArray<number> | undefined>
): NumberDomain | undefined => {
  const allDomains = domains.filter(Boolean);
  if (allDomains.length === 0) {
    return undefined;
  }
  const allValues = allDomains.flat();
  const min = Math.min(...allValues);
  const max = Math.max(...allValues);
  return [min, max];
};

export const combineDomainOfAllAppliedNumericalValuesIncludingErrorValues = (
  data: ChartData,
  axisSettings: BaseCartesianAxis,
  items: ReadonlyArray<GraphicalItemSettings>,
  errorBars: ErrorBarsState,
  axisType: AllAxisTypes,
): NumberDomain | undefined => {
  let lowerEnd: number | undefined, upperEnd: number | undefined;
  if (items.length > 0) {
    data.forEach(entry => {
      items.forEach(item => {
        const relevantErrorBars = errorBars[item.id]?.filter(errorBar =>
          isErrorBarRelevantForAxisType(axisType, errorBar),
        );
        const valueByDataKey = getValueByDataKey(entry, axisSettings.dataKey ?? item.dataKey);
        const errorDomain = getErrorDomainByDataKey(entry, valueByDataKey, relevantErrorBars);
        if (errorDomain.length >= 2) {
          const localLower = Math.min(...errorDomain);
          const localUpper = Math.max(...errorDomain);
          if (lowerEnd == null || localLower < lowerEnd) {
            lowerEnd = localLower;
          }
          if (upperEnd == null || localUpper > upperEnd) {
            upperEnd = localUpper;
          }
        }
        const dataValueDomain: NumberDomain | undefined = makeDomain(valueByDataKey);
        if (dataValueDomain != null) {
          lowerEnd = lowerEnd == null ? dataValueDomain[0] : Math.min(lowerEnd, dataValueDomain[0]);
          upperEnd = upperEnd == null ? dataValueDomain[1] : Math.max(upperEnd, dataValueDomain[1]);
        }
      });
    });
  }
  if (axisSettings?.dataKey != null) {
    data.forEach(item => {
      const dataValueDomain: NumberDomain | undefined = makeDomain(getValueByDataKey(item, axisSettings.dataKey));
      if (dataValueDomain != null) {
        lowerEnd = lowerEnd == null ? dataValueDomain[0] : Math.min(lowerEnd, dataValueDomain[0]);
        upperEnd = upperEnd == null ? dataValueDomain[1] : Math.max(upperEnd, dataValueDomain[1]);
      }
    });
  }

  if (isWellBehavedNumber(lowerEnd) && isWellBehavedNumber(upperEnd)) {
    return [lowerEnd, upperEnd];
  }
  return undefined;
};

const selectDomainOfAllAppliedNumericalValuesIncludingErrorValues: (
  state: RechartsRootState,
  axisType: AllAxisTypes,
  axisId: AxisId,
  isPanorama: boolean,
) => NumberDomain | undefined = createSelector(
  [
    selectDisplayedData,
    selectBaseAxis,
    selectCartesianItemsSettingsExceptStacked,
    selectAllErrorBarSettings,
    pickAxisType,
  ],
  combineDomainOfAllAppliedNumericalValuesIncludingErrorValues,
  {
    memoizeOptions: {
      resultEqualityCheck: numberDomainEqualityCheck,
    },
  },
);

function onlyAllowNumbersAndStringsAndDates(item: { value: unknown }): string | number | Date | undefined {
  const { value } = item;
  if (isNumOrStr(value) || value instanceof Date) {
    return value;
  }
  return undefined;
}

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

export const selectReferenceDots = (state: RechartsRootState): ReadonlyArray<ReferenceDotSettings> =>
  state.referenceElements.dots;

export const filterReferenceElements = <T extends ReferenceElementSettings>(
  elements: ReadonlyArray<T>,
  axisType: AllAxisTypes,
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

export const selectReferenceDotsByAxis: (
  state: RechartsRootState,
  axisType: AllAxisTypes,
  axisId: AxisId,
) => ReadonlyArray<ReferenceDotSettings> = createSelector(
  [selectReferenceDots, pickAxisType, pickAxisId],
  filterReferenceElements,
);

export const selectReferenceAreas = (state: RechartsRootState): ReadonlyArray<ReferenceAreaSettings> =>
  state.referenceElements.areas;

export const selectReferenceAreasByAxis: (
  state: RechartsRootState,
  axisType: AllAxisTypes,
  axisId: AxisId,
) => ReadonlyArray<ReferenceAreaSettings> = createSelector(
  [selectReferenceAreas, pickAxisType, pickAxisId],
  filterReferenceElements,
);

export const selectReferenceLines = (state: RechartsRootState): ReadonlyArray<ReferenceLineSettings> =>
  state.referenceElements.lines;

export const selectReferenceLinesByAxis: (
  state: RechartsRootState,
  axisType: AllAxisTypes,
  axisId: AxisId,
) => ReadonlyArray<ReferenceLineSettings> = createSelector(
  [selectReferenceLines, pickAxisType, pickAxisId],
  filterReferenceElements,
);

export const combineDotsDomain = (
  dots: ReadonlyArray<ReferenceDotSettings> | undefined,
  axisType: RenderableAxisType,
): NumberDomain | undefined => {
  if (dots == null) {
    return undefined;
  }
  const allCoords = onlyAllowNumbers(dots.map(dot => (axisType === 'xAxis' ? dot.x : dot.y)));
  if (allCoords.length === 0) {
    return undefined;
  }
  return [Math.min(...allCoords), Math.max(...allCoords)];
};

const selectReferenceDotsDomain = createSelector(selectReferenceDotsByAxis, pickAxisType, combineDotsDomain);

export const combineAreasDomain = (
  areas: ReadonlyArray<ReferenceAreaSettings> | undefined,
  axisType: RenderableAxisType,
): NumberDomain | undefined => {
  if (areas == null) {
    return undefined;
  }
  const allCoords = onlyAllowNumbers(
    areas.flatMap(area => [axisType === 'xAxis' ? area.x1 : area.y1, axisType === 'xAxis' ? area.x2 : area.y2]),
  );
  if (allCoords.length === 0) {
    return undefined;
  }
  return [Math.min(...allCoords), Math.max(...allCoords)];
};

const selectReferenceAreasDomain = createSelector([selectReferenceAreasByAxis, pickAxisType], combineAreasDomain);

function extractXCoordinates(line: ReferenceLineSettings): ReadonlyArray<number> {
  if (line.x != null) {
    return onlyAllowNumbers([line.x]);
  }
  const segmentCoordinates: ReadonlyArray<string | number | undefined> | undefined = line.segment?.map(s => s.x);
  if (segmentCoordinates == null || segmentCoordinates.length === 0) {
    return [];
  }
  return onlyAllowNumbers(segmentCoordinates);
}

function extractYCoordinates(line: ReferenceLineSettings): ReadonlyArray<number> {
  if (line.y != null) {
    return onlyAllowNumbers([line.y]);
  }
  const segmentCoordinates: ReadonlyArray<string | number | undefined> | undefined = line.segment?.map(s => s.y);
  if (segmentCoordinates == null || segmentCoordinates.length === 0) {
    return [];
  }
  return onlyAllowNumbers(segmentCoordinates);
}

export const combineLinesDomain = (
  lines: ReadonlyArray<ReferenceLineSettings> | undefined,
  axisType: RenderableAxisType,
): NumberDomain | undefined => {
  if (lines == null) {
    return undefined;
  }
  const allCoords: ReadonlyArray<number> = lines.flatMap(line =>
    axisType === 'xAxis' ? extractXCoordinates(line) : extractYCoordinates(line),
  );
  if (allCoords.length === 0) {
    return undefined;
  }
  return [Math.min(...allCoords), Math.max(...allCoords)];
};

const selectReferenceLinesDomain = createSelector([selectReferenceLinesByAxis, pickAxisType], combineLinesDomain);

const selectReferenceElementsDomain = createSelector(
  selectReferenceDotsDomain,
  selectReferenceLinesDomain,
  selectReferenceAreasDomain,
  (dotsDomain, linesDomain, areasDomain): NumberDomain | undefined => {
    return mergeDomains(dotsDomain, areasDomain, linesDomain);
  },
);

export const combineNumericalDomain = (
  axisSettings: BaseCartesianAxis,
  domainDefinition: AxisDomain | undefined,
  domainFromUserPreference: NumberDomain | undefined,
  domainOfStackGroups: NumberDomain | undefined,
  dataAndErrorBarsDomain: NumberDomain | undefined,
  referenceElementsDomain: NumberDomain | undefined,
  layout: LayoutType,
  axisType: AllAxisTypes,
): NumberDomain | undefined => {
  if (domainFromUserPreference != null) {
    // We're done! No need to compute anything else.
    return domainFromUserPreference;
  }

  const shouldIncludeDomainOfStackGroups =
    (layout === 'vertical' && axisType === 'xAxis') || (layout === 'horizontal' && axisType === 'yAxis');

  const mergedDomains = shouldIncludeDomainOfStackGroups
    ? mergeDomains(domainOfStackGroups, referenceElementsDomain, dataAndErrorBarsDomain)
    : mergeDomains(referenceElementsDomain, dataAndErrorBarsDomain);

  return parseNumericalUserDomain(domainDefinition, mergedDomains, axisSettings.allowDataOverflow);
};

export const selectNumericalDomain: (
  state: RechartsRootState,
  axisType: AllAxisTypes,
  axisId: AxisId,
  isPanorama: boolean,
) => NumberDomain | undefined = createSelector(
  [
    selectBaseAxis,
    selectDomainDefinition,
    selectDomainFromUserPreference,
    selectDomainOfStackGroups,
    selectDomainOfAllAppliedNumericalValuesIncludingErrorValues,
    selectReferenceElementsDomain,
    selectChartLayout,
    pickAxisType,
  ],
  combineNumericalDomain,
  {
    memoizeOptions: {
      resultEqualityCheck: numberDomainEqualityCheck,
    },
  },
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
  axisType: AllAxisTypes,
  numericalDomain: NumberDomain | undefined,
): NumberDomain | CategoricalDomain | undefined => {
  if ((axisSettings == null || displayedData == null || displayedData.length === 0) && numericalDomain === undefined) {
    return undefined;
  }
  const { dataKey, type } = axisSettings;
  const isCategorical = isCategoricalAxis(layout, axisType);

  if (isCategorical && dataKey == null) {
    return range(0, displayedData?.length ?? 0);
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
  axisType: AllAxisTypes,
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

export const selectRealScaleType: (
  state: RechartsRootState,
  axisType: AllAxisTypes,
  axisId: AxisId,
) => D3ScaleType | undefined = createSelector([selectBaseAxis, selectHasBar, selectChartName], combineRealScaleType);

export const combineNiceTicks = (
  axisDomain: NumberDomain | CategoricalDomain | undefined,
  axisSettings: RenderableAxisSettings,
  realScaleType: string | undefined,
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
    return getNiceTickValues(axisDomain, axisSettings.tickCount, axisSettings.allowDecimals, axisSettings.niceTicks);
  }

  if (
    axisSettings != null &&
    axisSettings.tickCount &&
    axisSettings.type === 'number' &&
    isWellFormedNumberDomain(axisDomain)
  ) {
    return getTickValuesFixedDomain(
      axisDomain as NumberDomain,
      axisSettings.tickCount,
      axisSettings.allowDecimals,
      axisSettings.niceTicks,
    );
  }

  return undefined;
};

export const selectNiceTicks: (
  state: RechartsRootState,
  axisType: RenderableAxisType,
  axisId: AxisId,
  isPanorama: boolean,
) => ReadonlyArray<number> | undefined = createSelector(
  [selectAxisDomain, selectRenderableAxisSettings, selectRealScaleType],
  combineNiceTicks,
);

export const combineAxisDomainWithNiceTicks = (
  axisSettings: BaseCartesianAxis,
  domain: NumberDomain | CategoricalDomain | undefined,
  niceTicks: ReadonlyArray<number> | undefined,
  axisType: RenderableAxisType,
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
    const minFromTicks = niceTicks[0] ?? 0;
    const maxFromDomain = domain[1];
    const maxFromTicks = niceTicks[niceTicks.length - 1] ?? 0;
    return [Math.min(minFromDomain, minFromTicks), Math.max(maxFromDomain, maxFromTicks)];
  }
  return domain;
};

export const selectAxisDomainIncludingNiceTicks: (
  state: RechartsRootState,
  axisType: RenderableAxisType,
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
  axisType: RenderableAxisType,
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
    const first = sortedValues[0];
    const last = sortedValues[sortedValues.length - 1];
    if (first == null || last == null) {
      return Infinity;
    }
    const diff = last - first;
    if (diff === 0) {
      return Infinity;
    }
    // Only do n - 1 distance calculations because there's only n - 1 distances between n values.
    for (let i = 0; i < sortedValues.length - 1; i++) {
      const curr = sortedValues[i];
      const next = sortedValues[i + 1];
      if (curr == null || next == null) {
        continue;
      }
      const distance = next - curr;
      smallestDistanceBetweenValues = Math.min(smallestDistanceBetweenValues, distance);
    }
    return smallestDistanceBetweenValues / diff;
  },
);

const selectCalculatedPadding: (
  state: RechartsRootState,
  axisType: RenderableAxisType,
  axisId: AxisId,
  isPanorama: boolean,
  padding: string,
) => number = createSelector(
  selectSmallestDistanceBetweenValues,
  selectChartLayout,
  selectBarCategoryGap,
  selectChartOffsetInternal,
  (_1: unknown, _2: unknown, _3: unknown, _4: unknown, padding: string): string => padding,
  (
    smallestDistanceInPercent: number | undefined,
    layout: LayoutType,
    barCategoryGap: number | string,
    offset: ChartOffsetInternal,
    padding: string,
  ): number => {
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

export const selectCalculatedXAxisPadding: (state: RechartsRootState, axisId: AxisId, isPanorama: boolean) => number = (
  state,
  axisId,
  isPanorama,
) => {
  const xAxisSettings = selectXAxisSettings(state, axisId);
  if (xAxisSettings == null || typeof xAxisSettings.padding !== 'string') {
    return 0;
  }
  return selectCalculatedPadding(state, 'xAxis', axisId, isPanorama, xAxisSettings.padding);
};

export const selectCalculatedYAxisPadding: (state: RechartsRootState, axisId: AxisId, isPanorama: boolean) => number = (
  state,
  axisId,
  isPanorama,
) => {
  const yAxisSettings = selectYAxisSettings(state, axisId);
  if (yAxisSettings == null || typeof yAxisSettings.padding !== 'string') {
    return 0;
  }
  return selectCalculatedPadding(state, 'yAxis', axisId, isPanorama, yAxisSettings.padding);
};

const selectXAxisPadding: (
  state: RechartsRootState,
  axisId: AxisId,
  isPanorama: boolean,
) => { left: number; right: number } = createSelector(
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

const selectYAxisPadding: (
  state: RechartsRootState,
  axisId: AxisId,
  isPanorama: boolean,
) => { top: number; bottom: number } = createSelector(
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

export const selectXAxisRange: (
  state: RechartsRootState,
  axisId: AxisId,
  isPanorama: boolean,
) => AxisRange | undefined = createSelector(
  [
    selectChartOffsetInternal,
    selectXAxisPadding,
    selectBrushDimensions,
    selectBrushSettings,
    (_state: RechartsRootState, _axisId: AxisId, isPanorama) => isPanorama,
  ],
  (
    offset: ChartOffsetInternal,
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

export const selectYAxisRange: (
  state: RechartsRootState,
  axisId: AxisId,
  isPanorama: boolean,
) => AxisRange | undefined = createSelector(
  [
    selectChartOffsetInternal,
    selectChartLayout,
    selectYAxisPadding,
    selectBrushDimensions,
    selectBrushSettings,
    (_state: RechartsRootState, _axisId: AxisId, isPanorama) => isPanorama,
  ],
  (
    offset: ChartOffsetInternal,
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
  axisType: AllAxisTypes,
  axisId: AxisId,
  isPanorama: boolean,
): AxisRange | undefined => {
  switch (axisType) {
    case 'xAxis':
      return selectXAxisRange(state, axisId, isPanorama);
    case 'yAxis':
      return selectYAxisRange(state, axisId, isPanorama);
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
  axisType: AllAxisTypes,
  axisId: AxisId,
  isPanorama: boolean,
) => AxisRange | undefined = createSelector([selectBaseAxis, selectAxisRange], combineAxisRangeWithReverse);

export const selectCheckedAxisDomain: (
  state: RechartsRootState,
  axisType: RenderableAxisType,
  axisId: AxisId,
  isPanorama: boolean,
) => NumberDomain | CategoricalDomain | undefined = createSelector(
  [selectRealScaleType, selectAxisDomainIncludingNiceTicks],
  combineCheckedDomain,
);

const selectConfiguredScale: (
  state: RechartsRootState,
  axisType: RenderableAxisType,
  axisId: AxisId,
  isPanorama: boolean,
) => CustomScaleDefinition | undefined = createSelector(
  [selectBaseAxis, selectRealScaleType, selectCheckedAxisDomain, selectAxisRangeWithReverse],
  combineConfiguredScale,
);

export const combineCategoricalDomain = (
  layout: LayoutType,
  appliedValues: AppliedChartData,
  axis: RenderableAxisSettings,
  axisType: RenderableAxisType,
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
  axisType: RenderableAxisType,
  axisId: AxisId,
  isPanorama: boolean,
) => ReadonlyArray<unknown> | undefined = createSelector(
  [selectChartLayout, selectAllAppliedValues, selectRenderableAxisSettings, pickAxisType],
  combineCategoricalDomain,
);

export const selectAxisScale: (
  state: RechartsRootState,
  axisType: RenderableAxisType,
  axisId: AxisId,
  isPanorama: boolean,
) => RechartsScale | undefined = createSelector([selectConfiguredScale], rechartsScaleFactory);

export const selectAxisInverseScale: (
  state: RechartsRootState,
  axisType: RenderableAxisType,
  axisId: AxisId,
  isPanorama: boolean,
) => InverseScaleFunction | undefined = createSelector([selectConfiguredScale], combineInverseScaleFunction);

export const selectAxisInverseDataSnapScale: (
  state: RechartsRootState,
  axisType: RenderableAxisType,
  axisId: AxisId,
  isPanorama: boolean,
) => InverseScaleFunction | undefined = createSelector(
  [selectConfiguredScale, selectSortedDataPoints],
  createCategoricalInverse,
);

export const selectErrorBarsSettings: (
  state: RechartsRootState,
  axisType: AllAxisTypes,
  axisId: AxisId,
) => ReadonlyArray<ErrorBarsSettings> = createSelector(
  [selectCartesianItemsSettings, selectAllErrorBarSettings, pickAxisType],
  combineRelevantErrorBarSettings,
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

const getXAxisSize = (offset: ChartOffsetInternal, axisSettings: XAxisSettings): Size => {
  return {
    width: offset.width,
    height: axisSettings.height,
  };
};

const getYAxisSize = (offset: ChartOffsetInternal, axisSettings: YAxisSettings): Size => {
  const width = typeof axisSettings.width === 'number' ? axisSettings.width : DEFAULT_Y_AXIS_WIDTH;
  return {
    width,
    height: offset.height,
  };
};

export const selectXAxisSize: (state: RechartsRootState, xAxisId: AxisId) => Size = createSelector(
  selectChartOffsetInternal,
  selectXAxisSettings,
  getXAxisSize,
);

type AxisOffsetSteps = Record<AxisId, number>;

const combineXAxisPositionStartingPoint = (
  offset: ChartOffsetInternal,
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
  offset: ChartOffsetInternal,
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
  selectChartOffsetInternal,
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
  selectChartOffsetInternal,
  selectAllYAxesWithOffsetType,
  pickAxisOrientation,
  pickMirror,
  (chartWidth, offset: ChartOffsetInternal, allAxesWithSameOffsetType, orientation: YAxisOrientation, mirror) => {
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

const selectXAxisOffsetSteps = (state: RechartsRootState, axisId: AxisId) => {
  const axisSettings = selectXAxisSettings(state, axisId);
  if (axisSettings == null) {
    return undefined;
  }
  return selectAllXAxesOffsetSteps(state, axisSettings.orientation, axisSettings.mirror);
};

export const selectXAxisPosition: (state: RechartsRootState, axisId: AxisId) => Coordinate | undefined = createSelector(
  [selectChartOffsetInternal, selectXAxisSettings, selectXAxisOffsetSteps, (_: unknown, axisId: AxisId) => axisId],
  (offset, axisSettings, allSteps, axisId) => {
    if (axisSettings == null) {
      return undefined;
    }
    const stepOfThisAxis = allSteps?.[axisId];
    if (stepOfThisAxis == null) {
      return { x: offset.left, y: 0 };
    }
    return { x: offset.left, y: stepOfThisAxis };
  },
);

const selectYAxisOffsetSteps = (state: RechartsRootState, axisId: AxisId) => {
  const axisSettings = selectYAxisSettings(state, axisId);
  if (axisSettings == null) {
    return undefined;
  }
  return selectAllYAxesOffsetSteps(state, axisSettings.orientation, axisSettings.mirror);
};
export const selectYAxisPosition: (state: RechartsRootState, axisId: AxisId) => Coordinate | undefined = createSelector(
  [selectChartOffsetInternal, selectYAxisSettings, selectYAxisOffsetSteps, (_: unknown, axisId: AxisId) => axisId],
  (offset, axisSettings, allSteps, axisId) => {
    if (axisSettings == null) {
      return undefined;
    }
    const stepOfThisAxis = allSteps?.[axisId];
    if (stepOfThisAxis == null) {
      return { x: 0, y: offset.top };
    }
    return { x: stepOfThisAxis, y: offset.top };
  },
);

export const selectYAxisSize: (state: RechartsRootState, yAxisId: AxisId) => Size = createSelector(
  selectChartOffsetInternal,
  selectYAxisSettings,
  (offset: ChartOffsetInternal, axisSettings: YAxisSettings): Size => {
    const width = typeof axisSettings.width === 'number' ? axisSettings.width : DEFAULT_Y_AXIS_WIDTH;

    return {
      width,
      height: offset.height,
    };
  },
);

export const selectCartesianAxisSize = (
  state: RechartsRootState,
  axisType: RenderableAxisType,
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
  axisType: AllAxisTypes,
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
  axisType: AllAxisTypes,
  axisId: AxisId,
  isPanorama: boolean,
) => ReadonlyArray<unknown> | undefined = createSelector(
  [selectChartLayout, selectAllAppliedValues, selectBaseAxis, pickAxisType],
  combineDuplicateDomain,
);

export const selectAxisPropsNeededForCartesianGridTicksGenerator: (
  state: RechartsRootState,
  axisType: 'xAxis' | 'yAxis',
  axisId: AxisId,
  isPanorama: boolean,
) => AxisPropsForCartesianGridTicksGeneration | undefined = createSelector(
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
    realScaleType: string | undefined,
    scale: RechartsScale | undefined,
    duplicateDomain,
    categoricalDomain,
    axisRange,
    niceTicks,
    axisType: AxisType,
  ): AxisPropsForCartesianGridTicksGeneration | undefined => {
    if (axis == null) {
      return undefined;
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

/**
 * Of on four almost identical implementations of tick generation.
 * The four horsemen of tick generation are:
 * - {@link selectTooltipAxisTicks}
 * - {@link combineAxisTicks}
 * - {@link getTicksOfAxis}.
 * - {@link combineGraphicalItemTicks}
 */
export const combineAxisTicks = (
  layout: LayoutType,
  axis: RenderableAxisSettings,
  realScaleType: D3ScaleType | undefined,
  scale: RechartsScale | undefined,
  niceTicks: ReadonlyArray<number> | undefined,
  axisRange: AxisRange | undefined,
  duplicateDomain: ReadonlyArray<unknown> | undefined,
  categoricalDomain: ReadonlyArray<unknown> | undefined,
  axisType: RenderableAxisType,
): ReadonlyArray<TickItem> | undefined => {
  if (axis == null || scale == null) {
    return undefined;
  }

  const isCategorical = isCategoricalAxis(layout, axisType);

  const { type, ticks, tickCount } = axis;

  const offsetForBand =
    // @ts-expect-error This is testing for `scaleBand` but for band axis the type is reported as `band` so this looks like a dead code with a workaround elsewhere?
    realScaleType === 'scaleBand' && typeof scale.bandwidth === 'function' ? scale.bandwidth() / 2 : 2;

  let offset = type === 'category' && scale.bandwidth ? scale.bandwidth() / offsetForBand : 0;

  offset =
    axisType === 'angleAxis' && axisRange != null && axisRange.length >= 2
      ? mathSign(axisRange[0] - axisRange[1]) * 2 * offset
      : offset;

  // The ticks set by user should only affect the ticks adjacent to axis line
  const ticksOrNiceTicks = ticks || niceTicks;
  if (ticksOrNiceTicks) {
    return ticksOrNiceTicks
      .map((entry: AxisTick, index: number): TickItem | null => {
        const scaleContent = duplicateDomain ? duplicateDomain.indexOf(entry) : entry;

        const scaled = scale.map(scaleContent);
        if (!isWellBehavedNumber(scaled)) {
          return null;
        }
        return {
          index,
          coordinate: scaled + offset,
          value: entry,
          offset,
        };
      })
      .filter(isNotNil);
  }

  // When axis is a categorical axis, but the type of axis is number or the scale of axis is not "auto"
  if (isCategorical && categoricalDomain) {
    return categoricalDomain
      .map((entry: unknown, index: number): TickItem | null => {
        const scaled = scale.map(entry);
        if (!isWellBehavedNumber(scaled)) {
          return null;
        }
        return {
          coordinate: scaled + offset,
          value: entry,
          index,
          offset,
        };
      })
      .filter(isNotNil);
  }

  if (scale.ticks) {
    return scale
      .ticks(tickCount)
      .map((entry: number, index: number): TickItem | null => {
        const scaled = scale.map(entry);
        if (!isWellBehavedNumber(scaled)) {
          return null;
        }
        return { coordinate: scaled + offset, value: entry, index, offset };
      })
      .filter(isNotNil);
  }

  // When axis has duplicated text, serial numbers are used to generate scale
  return scale
    .domain()
    .map((entry: CategoricalDomainItem, index: number): TickItem | null => {
      const scaled = scale.map(entry);
      if (!isWellBehavedNumber(scaled)) {
        return null;
      }
      return {
        coordinate: scaled + offset,
        // @ts-expect-error can't use Date as index
        value: duplicateDomain ? duplicateDomain[entry] : entry,
        index,
        offset,
      };
    })
    .filter(isNotNil);
};
export const selectTicksOfAxis: (
  state: RechartsRootState,
  axisType: RenderableAxisType,
  axisId: AxisId,
  isPanorama: boolean,
) => ReadonlyArray<CartesianTickItem> | undefined = createSelector(
  [
    selectChartLayout,
    selectRenderableAxisSettings,
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

/**
 * Of on four almost identical implementations of tick generation.
 * The four horsemen of tick generation are:
 * - {@link selectTooltipAxisTicks}
 * - {@link combineAxisTicks}
 * - {@link getTicksOfAxis}.
 * - {@link combineGraphicalItemTicks}
 */
export const combineGraphicalItemTicks = (
  layout: LayoutType,
  axis: RenderableAxisSettings,
  scale: RechartsScale | undefined,
  axisRange: AxisRange | undefined,
  duplicateDomain: ReadonlyArray<unknown> | undefined,
  categoricalDomain: ReadonlyArray<unknown> | undefined,
  axisType: RenderableAxisType,
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
    return categoricalDomain
      .map((entry: unknown, index: number): TickItem | null => {
        const scaled = scale.map(entry);
        if (!isWellBehavedNumber(scaled)) {
          return null;
        }
        return {
          coordinate: scaled + offset,
          value: entry,
          index,
          offset,
        };
      })
      .filter(isNotNil);
  }

  if (scale.ticks) {
    return scale
      .ticks(tickCount)
      .map((entry: number, index: number): TickItem | null => {
        const scaled = scale.map(entry);
        if (!isWellBehavedNumber(scaled)) {
          return null;
        }
        return { coordinate: scaled + offset, value: entry, index, offset };
      })
      .filter(isNotNil);
  }

  // When axis has duplicated text, serial numbers are used to generate scale
  return scale
    .domain()
    .map((entry: CategoricalDomainItem, index: number): TickItem | null => {
      const scaled = scale.map(entry);
      if (!isWellBehavedNumber(scaled)) {
        return null;
      }
      return {
        coordinate: scaled + offset,
        // @ts-expect-error can't use unknown as index
        value: duplicateDomain ? duplicateDomain[entry] : entry,
        index,
        offset,
      };
    })
    .filter(isNotNil);
};

export const selectTicksOfGraphicalItem: (
  state: RechartsRootState,
  axisType: RenderableAxisType,
  axisId: AxisId,
  isPanorama: boolean,
) => TickItem[] | undefined = createSelector(
  [
    selectChartLayout,
    selectRenderableAxisSettings,
    selectAxisScale,
    selectAxisRange,
    selectDuplicateDomain,
    selectCategoricalDomain,
    pickAxisType,
  ],
  combineGraphicalItemTicks,
);

/**
 * This is the internal representation of an axis along with its scale function.
 * Here we have already computed the scale function for the axis,
 * and replaced the union type of scale (string | function) with just the function type.
 */
export type BaseAxisWithScale = Omit<BaseCartesianAxis, 'scale'> & { scale: RechartsScale };

export const selectAxisWithScale: (
  state: RechartsRootState,
  axisType: RenderableAxisType,
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

const selectZAxisConfiguredScale: (
  state: RechartsRootState,
  axisType: 'zAxis',
  axisId: AxisId,
  isPanorama: false,
) => CustomScaleDefinition | undefined = createSelector(
  [selectBaseAxis, selectRealScaleType, selectAxisDomain, selectAxisRangeWithReverse],
  combineConfiguredScale,
);

const selectZAxisScale: (
  state: RechartsRootState,
  axisType: 'zAxis',
  axisId: AxisId,
  isPanorama: false,
) => RechartsScale | undefined = createSelector([selectZAxisConfiguredScale], rechartsScaleFactory);

export type ZAxisWithScale = Omit<ZAxisSettings, 'scale'> & { scale: RechartsScale };

export const selectZAxisWithScale: (
  state: RechartsRootState,
  _axisType: 'zAxis',
  axisId: AxisId,
  isPanorama: false,
) => ZAxisWithScale | undefined = createSelector(
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

export const selectRenderedTicksOfAxis: (
  state: RechartsRootState,
  axisType: 'xAxis' | 'yAxis',
  axisId: AxisId,
) => ReadonlyArray<TickItem> | undefined = (state, axisType, axisId) => {
  return state.renderedTicks[axisType]?.[axisId];
};

export const selectAxisInverseTickSnapScale: (
  state: RechartsRootState,
  axisType: 'xAxis' | 'yAxis',
  axisId: AxisId,
) => InverseScaleFunction | undefined = createSelector(
  [selectRenderedTicksOfAxis],
  (ticks: ReadonlyArray<TickItem> | undefined) => {
    if (!ticks || ticks.length === 0) {
      return undefined;
    }

    return (pixelValue: number) => {
      // Find the tick with the closest coordinate to pixelValue
      let minDistance = Infinity;
      let closestTick = ticks[0];

      for (const tick of ticks) {
        const distance = Math.abs(tick.coordinate - pixelValue);
        if (distance < minDistance) {
          minDistance = distance;
          closestTick = tick;
        }
      }
      return closestTick?.value;
    };
  },
);
