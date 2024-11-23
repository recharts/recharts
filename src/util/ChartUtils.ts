import flatMap from 'lodash/flatMap';
import get from 'lodash/get';
import isEqual from 'lodash/isEqual';
import max from 'lodash/max';
import min from 'lodash/min';
import sortBy from 'lodash/sortBy';
import * as d3Scales from 'victory-vendor/d3-scale';
import {
  Series,
  stack as shapeStack,
  stackOffsetExpand,
  stackOffsetNone,
  stackOffsetSilhouette,
  stackOffsetWiggle,
  stackOrderNone,
  type SeriesPoint,
} from 'victory-vendor/d3-shape';

import { ReactElement } from 'react';
import {
  findEntryInArray,
  getAnyElementOfObject,
  isNullish,
  isNumber,
  isNumOrStr,
  mathSign,
  uniqueId,
  upperFirst,
} from './DataUtils';
import { filterProps } from './ReactUtils';

import { TooltipEntrySettings, TooltipPayloadEntry } from '../state/tooltipSlice';
import { getNiceTickValues, getTickValuesFixedDomain } from './scale';
import {
  AxisDomainType,
  AxisTick,
  AxisType,
  BaseAxisProps,
  CategoricalDomain,
  ChartCoordinate,
  ChartOffset,
  DataKey,
  LayoutType,
  NumberDomain,
  RangeObj,
  ScaleType,
  StackOffsetType,
  TickItem,
} from './types';
import { ValueType } from '../component/DefaultTooltipContent';
import { AxisMap, AxisObj, AxisPropsWithExtraComputedData } from '../chart/types';
import { inRangeOfSector, polarToCartesian } from './PolarUtils';
import { LegendState } from '../state/legendSlice';
import { BaseAxisWithScale } from '../state/selectors/axisSelectors';

export function getValueByDataKey<T>(obj: T, dataKey: DataKey<T>, defaultValue?: any): unknown {
  if (isNullish(obj) || isNullish(dataKey)) {
    return defaultValue;
  }

  if (isNumOrStr(dataKey)) {
    return get(obj, dataKey, defaultValue);
  }

  if (typeof dataKey === 'function') {
    return dataKey(obj);
  }

  return defaultValue;
}

/**
 * Get domain of data by key.
 * @param  {Array}   data      The data displayed in the chart
 * @param  {String}  key       The unique key of a group of data
 * @param  {String}  type      The type of axis
 * @param  {Boolean} filterNil Whether or not filter nil values
 * @return {Array} Domain of data
 */
export function getDomainOfDataByKey<T>(
  data: Array<T>,
  key: DataKey<T>,
  type: AxisDomainType,
  filterNil?: boolean,
): NumberDomain | CategoricalDomain {
  const flattenData: unknown[] = flatMap(data, (entry: T): unknown => getValueByDataKey(entry, key));

  if (type === 'number') {
    // @ts-expect-error parseFloat type only accepts strings
    const domain: number[] = flattenData.filter(entry => isNumber(entry) || parseFloat(entry));

    return domain.length ? [min(domain), max(domain)] : [Infinity, -Infinity];
  }

  const validateData = filterNil ? flattenData.filter(entry => !isNullish(entry)) : flattenData;

  // Supports x-axis of Date type
  return validateData.map(entry => (isNumOrStr(entry) || entry instanceof Date ? entry : ''));
}

export const calculateActiveTickIndex = (
  /**
   * For different layouts, `coordinate` is different:
   * In horizontal layout, this is expected to be the `x` coordinate
   * vertical -> y
   * centric -> angle
   * radial -> radius
   */
  coordinate: number,
  ticks: ReadonlyArray<TickItem>,
  unsortedTicks?: ReadonlyArray<TickItem>,
  axis?: AxisPropsWithExtraComputedData,
): number => {
  let index = -1;
  const len = ticks?.length ?? 0;

  // if there are 1 or fewer ticks then the active tick is at index 0
  if (len <= 1) {
    return 0;
  }

  if (axis && axis.axisType === 'angleAxis' && Math.abs(Math.abs(axis.range[1] - axis.range[0]) - 360) <= 1e-6) {
    const { range } = axis;
    // ticks are distributed in a circle
    for (let i = 0; i < len; i++) {
      const before = i > 0 ? unsortedTicks[i - 1].coordinate : unsortedTicks[len - 1].coordinate;
      const cur = unsortedTicks[i].coordinate;
      const after = i >= len - 1 ? unsortedTicks[0].coordinate : unsortedTicks[i + 1].coordinate;
      let sameDirectionCoord;

      if (mathSign(cur - before) !== mathSign(after - cur)) {
        const diffInterval = [];
        if (mathSign(after - cur) === mathSign(range[1] - range[0])) {
          sameDirectionCoord = after;

          const curInRange = cur + range[1] - range[0];
          diffInterval[0] = Math.min(curInRange, (curInRange + before) / 2);
          diffInterval[1] = Math.max(curInRange, (curInRange + before) / 2);
        } else {
          sameDirectionCoord = before;

          const afterInRange = after + range[1] - range[0];
          diffInterval[0] = Math.min(cur, (afterInRange + cur) / 2);
          diffInterval[1] = Math.max(cur, (afterInRange + cur) / 2);
        }
        const sameInterval = [
          Math.min(cur, (sameDirectionCoord + cur) / 2),
          Math.max(cur, (sameDirectionCoord + cur) / 2),
        ];

        if (
          (coordinate > sameInterval[0] && coordinate <= sameInterval[1]) ||
          (coordinate >= diffInterval[0] && coordinate <= diffInterval[1])
        ) {
          ({ index } = unsortedTicks[i]);
          break;
        }
      } else {
        const minValue = Math.min(before, after);
        const maxValue = Math.max(before, after);

        if (coordinate > (minValue + cur) / 2 && coordinate <= (maxValue + cur) / 2) {
          ({ index } = unsortedTicks[i]);
          break;
        }
      }
    }
  } else {
    // ticks are distributed in a single direction
    for (let i = 0; i < len; i++) {
      if (
        (i === 0 && coordinate <= (ticks[i].coordinate + ticks[i + 1].coordinate) / 2) ||
        (i > 0 &&
          i < len - 1 &&
          coordinate > (ticks[i].coordinate + ticks[i - 1].coordinate) / 2 &&
          coordinate <= (ticks[i].coordinate + ticks[i + 1].coordinate) / 2) ||
        (i === len - 1 && coordinate > (ticks[i].coordinate + ticks[i - 1].coordinate) / 2)
      ) {
        ({ index } = ticks[i]);
        break;
      }
    }
  }

  return index;
};

/**
 * @deprecated render child components as children instead of reading DOM elements and passing them around
 * Get the main color of each graphic item
 * @param  {ReactElement} item A graphic item
 * @return {String}            Color
 */
export const getMainColorOfGraphicItem = (item: {
  type: { displayName: string };
  props: { stroke: string; fill: string };
}) => {
  const {
    type: { displayName },
  } = item as any; // TODO: check if displayName is valid.
  const { stroke, fill } = item.props;
  let result;

  switch (displayName) {
    case 'Line':
      result = stroke;
      break;
    case 'Area':
    case 'Radar':
      result = stroke && stroke !== 'none' ? stroke : fill;
      break;
    default:
      result = fill;
      break;
  }

  return result;
};

/**
 * @deprecated do not use - depends on passing around DOM elements
 */
export type BarSetup = {
  barSize: number | string;
  stackList: ReadonlyArray<ReactElement>;
  item: ReactElement;
};

export type BarPositionPosition = {
  /**
   * Offset is returned always from zero position.
   * So in a way it's "absolute".
   *
   * NOT inbetween bars, but always from zero.
   */
  offset: number;
  /**
   * Size of the bar.
   * This will be usually a number.
   * But if the input data is not well-formed, undefined or NaN will be on the output too.
   */
  size: number | undefined | typeof NaN;
};

export const appendOffsetOfLegend = (offset: ChartOffset, legendState: LegendState): ChartOffset => {
  if (legendState) {
    const { width: boxWidth, height: boxHeight, align, verticalAlign, layout } = legendState;

    if (
      (layout === 'vertical' || (layout === 'horizontal' && verticalAlign === 'middle')) &&
      align !== 'center' &&
      isNumber(offset[align])
    ) {
      return { ...offset, [align]: offset[align] + (boxWidth || 0) };
    }

    if (
      (layout === 'horizontal' || (layout === 'vertical' && align === 'center')) &&
      verticalAlign !== 'middle' &&
      isNumber(offset[verticalAlign])
    ) {
      return { ...offset, [verticalAlign]: offset[verticalAlign] + (boxHeight || 0) };
    }
  }

  return offset;
};

/**
 * This method actually completely ignores the direction!
 * @deprecated instead use `isErrorBarRelevantForAxisType` through `selectErrorBarsSettings`
 * @param layout of the chart
 * @param axisType of the axis
 * @param direction is ignored!
 * @return if true then is relevant, if false then irrelevant
 */
export const isErrorBarRelevantForAxis = (layout?: LayoutType, axisType?: AxisType, direction?: 'x' | 'y'): boolean => {
  if (isNullish(axisType)) {
    return true;
  }

  if (layout === 'horizontal') {
    return axisType === 'yAxis';
  }
  if (layout === 'vertical') {
    return axisType === 'xAxis';
  }

  if (direction === 'x') {
    return axisType === 'xAxis';
  }
  if (direction === 'y') {
    return axisType === 'yAxis';
  }

  return true;
};

export const isCategoricalAxis = (layout: LayoutType, axisType: AxisType) =>
  (layout === 'horizontal' && axisType === 'xAxis') ||
  (layout === 'vertical' && axisType === 'yAxis') ||
  (layout === 'centric' && axisType === 'angleAxis') ||
  (layout === 'radial' && axisType === 'radiusAxis');

/**
 * Calculate the Coordinates of grid
 * @param  {Array} ticks           The ticks in axis
 * @param {Number} minValue        The minimum value of axis
 * @param {Number} maxValue        The maximum value of axis
 * @param {boolean} syncWithTicks  Synchronize grid lines with ticks or not
 * @return {Array}                 Coordinates
 */
export const getCoordinatesOfGrid = (
  ticks: ReadonlyArray<TickItem>,
  minValue: number,
  maxValue: number,
  syncWithTicks: boolean,
) => {
  if (syncWithTicks) {
    return ticks.map(entry => entry.coordinate);
  }

  let hasMin, hasMax;

  const values = ticks.map(entry => {
    if (entry.coordinate === minValue) {
      hasMin = true;
    }
    if (entry.coordinate === maxValue) {
      hasMax = true;
    }

    return entry.coordinate;
  });

  if (!hasMin) {
    values.push(minValue);
  }
  if (!hasMax) {
    values.push(maxValue);
  }

  return values;
};

/**
 * A subset of d3-scale that Recharts is using
 */
export interface RechartsScale {
  domain(): ReadonlyArray<unknown>;
  domain(newDomain: ReadonlyArray<unknown>): this;
  range(): ReadonlyArray<unknown>;
  range(newRange: ReadonlyArray<unknown>): this;
  bandwidth?: () => number;
  ticks?: (count: number) => any;
  (args: any): number;
}

export type AxisPropsNeededForTicksGenerator = {
  axisType?: AxisType;
  categoricalDomain?: ReadonlyArray<unknown>;
  duplicateDomain?: ReadonlyArray<unknown>;
  isCategorical?: boolean;
  niceTicks?: ReadonlyArray<AxisTick>;
  /**
   * The range appears to be only used in Angle Axis - needs further investigation
   */
  range?: ReadonlyArray<number>;
  realScaleType?: 'scaleBand' | string;
  scale: RechartsScale;
  tickCount?: number;
  ticks?: ReadonlyArray<AxisTick>;
  type?: 'number' | 'category';
};

/**
 * Get the ticks of an axis
 * @param  {Object}  axis The configuration of an axis
 * @param {Boolean} isGrid Whether or not are the ticks in grid
 * @param {Boolean} isAll Return the ticks of all the points or not
 * @return {Array}  Ticks
 */
export const getTicksOfAxis = (
  axis: null | AxisPropsNeededForTicksGenerator,
  isGrid?: boolean,
  isAll?: boolean,
): ReadonlyArray<TickItem> | null => {
  if (!axis) {
    return null;
  }
  const {
    duplicateDomain,
    type,
    range,
    scale,
    realScaleType,
    isCategorical,
    categoricalDomain,
    tickCount,
    ticks,
    niceTicks,
    axisType,
  } = axis;

  if (!scale) {
    return null;
  }

  const offsetForBand = realScaleType === 'scaleBand' ? scale.bandwidth() / 2 : 2;
  let offset = (isGrid || isAll) && type === 'category' && scale.bandwidth ? scale.bandwidth() / offsetForBand : 0;

  offset = axisType === 'angleAxis' && range?.length >= 2 ? mathSign(range[0] - range[1]) * 2 * offset : offset;

  // The ticks set by user should only affect the ticks adjacent to axis line
  if (isGrid && (ticks || niceTicks)) {
    const result = (ticks || niceTicks).map((entry: AxisTick) => {
      const scaleContent = duplicateDomain ? duplicateDomain.indexOf(entry) : entry;

      return {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: scale(scaleContent) + offset,
        value: entry,
        offset,
      };
    });

    return result.filter((row: TickItem) => !Number.isNaN(row.coordinate));
  }

  // When axis is a categorical axis, but the type of axis is number or the scale of axis is not "auto"
  if (isCategorical && categoricalDomain) {
    return categoricalDomain.map(
      (entry: any, index: number): TickItem => ({
        coordinate: scale(entry) + offset,
        value: entry,
        index,
        // @ts-expect-error why does the offset go here? The type does not require it
        offset,
      }),
    );
  }

  if (scale.ticks && !isAll) {
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
      // @ts-expect-error why does the offset go here? The type does not require it
      offset,
    }),
  );
};

export type ParseScaleAxisInput = {
  scale: string | ScaleType | RechartsScale;
  type: BaseAxisProps['type'];
  layout: 'radial' | unknown;
  axisType: 'radiusAxis' | 'angleAxis' | unknown;
};

type ParsedScaleReturn = {
  scale: RechartsScale | undefined;
  realScaleType: string | undefined;
};

/**
 * Parse the scale function of axis
 * @param  {Object}   axis          The option of axis
 * @param  {String}   chartType     The displayName of chart
 * @param  {Boolean}  hasBar        if it has a bar
 * @return {object}               The scale function and resolved name
 */
export const parseScale = (
  axis: ParseScaleAxisInput,
  chartType: string | undefined,
  hasBar: boolean = false,
): ParsedScaleReturn => {
  const { scale, type, layout, axisType } = axis;
  if (scale === 'auto') {
    if (layout === 'radial' && axisType === 'radiusAxis') {
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      return { scale: d3Scales.scaleBand(), realScaleType: 'band' };
    }
    if (layout === 'radial' && axisType === 'angleAxis') {
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      return { scale: d3Scales.scaleLinear(), realScaleType: 'linear' };
    }

    if (
      type === 'category' &&
      chartType &&
      (chartType.indexOf('LineChart') >= 0 ||
        chartType.indexOf('AreaChart') >= 0 ||
        (chartType.indexOf('ComposedChart') >= 0 && !hasBar))
    ) {
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      return { scale: d3Scales.scalePoint(), realScaleType: 'point' };
    }
    if (type === 'category') {
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      return { scale: d3Scales.scaleBand(), realScaleType: 'band' };
    }

    // @ts-expect-error we need to wrap the d3 scales in unified interface
    return { scale: d3Scales.scaleLinear(), realScaleType: 'linear' };
  }
  if (typeof scale === 'string') {
    const name = `scale${upperFirst(scale)}`;

    return {
      scale: ((d3Scales as Record<string, any>)[name] || d3Scales.scalePoint)(),
      realScaleType: (d3Scales as Record<string, any>)[name] ? name : 'point',
    };
  }

  // @ts-expect-error we need to wrap the d3 scales in unified interface
  return typeof scale === 'function'
    ? { scale, realScaleType: undefined }
    : { scale: d3Scales.scalePoint(), realScaleType: 'point' };
};
const EPS = 1e-4;
export const checkDomainOfScale = (scale: any) => {
  const domain = scale.domain();

  if (!domain || domain.length <= 2) {
    return;
  }

  const len = domain.length;
  const range = scale.range();
  const minValue = Math.min(range[0], range[1]) - EPS;
  const maxValue = Math.max(range[0], range[1]) + EPS;
  const first = scale(domain[0]);
  const last = scale(domain[len - 1]);

  if (first < minValue || first > maxValue || last < minValue || last > maxValue) {
    scale.domain([domain[0], domain[len - 1]]);
  }
};

/**
 * Both value and domain are tuples of two numbers
 * - but the type stays as array of numbers until we have better support in rest of the app
 * @param value input that will be truncated
 * @param domain boundaries
 * @returns tuple of two numbers
 */
export const truncateByDomain = (
  value: SeriesPoint<Record<number, number>>,
  domain: ReadonlyArray<number>,
): [number, number] | SeriesPoint<Record<number, number>> => {
  if (!domain || domain.length !== 2 || !isNumber(domain[0]) || !isNumber(domain[1])) {
    return value;
  }

  const minValue = Math.min(domain[0], domain[1]);
  const maxValue = Math.max(domain[0], domain[1]);

  const result: [number, number] = [value[0], value[1]];
  if (!isNumber(value[0]) || value[0] < minValue) {
    result[0] = minValue;
  }

  if (!isNumber(value[1]) || value[1] > maxValue) {
    result[1] = maxValue;
  }

  if (result[0] > maxValue) {
    result[0] = maxValue;
  }

  if (result[1] < minValue) {
    result[1] = minValue;
  }

  return result;
};

/**
 * Stacks all positive numbers above zero and all negative numbers below zero.
 *
 * If all values in the series are positive then this behaves the same as 'none' stacker.
 *
 * @param {Array} series from d3-shape Stack
 * @return {Array} series with applied offset
 */
export const offsetSign: OffsetAccessor = series => {
  const n = series.length;
  if (n <= 0) {
    return;
  }

  for (let j = 0, m = series[0].length; j < m; ++j) {
    let positive = 0;
    let negative = 0;

    for (let i = 0; i < n; ++i) {
      const value = Number.isNaN(series[i][j][1]) ? series[i][j][0] : series[i][j][1];

      /* eslint-disable prefer-destructuring, no-param-reassign */
      if (value >= 0) {
        series[i][j][0] = positive;
        series[i][j][1] = positive + value;
        positive = series[i][j][1];
      } else {
        series[i][j][0] = negative;
        series[i][j][1] = negative + value;
        negative = series[i][j][1];
      }
      /* eslint-enable prefer-destructuring, no-param-reassign */
    }
  }
};

/**
 * Replaces all negative values with zero when stacking data.
 *
 * If all values in the series are positive then this behaves the same as 'none' stacker.
 *
 * @param {Array} series from d3-shape Stack
 * @return {Array} series with applied offset
 */
export const offsetPositive: OffsetAccessor = series => {
  const n = series.length;
  if (n <= 0) {
    return;
  }

  for (let j = 0, m = series[0].length; j < m; ++j) {
    let positive = 0;

    for (let i = 0; i < n; ++i) {
      const value = Number.isNaN(series[i][j][1]) ? series[i][j][0] : series[i][j][1];

      /* eslint-disable prefer-destructuring, no-param-reassign */
      if (value >= 0) {
        series[i][j][0] = positive;
        series[i][j][1] = positive + value;
        positive = series[i][j][1];
      } else {
        series[i][j][0] = 0;
        series[i][j][1] = 0;
      }
      /* eslint-enable prefer-destructuring, no-param-reassign */
    }
  }
};

/**
 * Function type to compute offset for stacked data.
 *
 * d3-shape has something fishy going on with its types.
 * In @definitelytyped/d3-shape, this function (the offset accessor) is typed as Series<> => void.
 * However! When I actually open the storybook I can see that the offset accessor actually receives Array<Series<>>.
 * The same I can see in the source code itself:
 * https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/66042
 * That one unfortunately has no types but we can tell it passes three-dimensional array.
 *
 * Which leads me to believe that definitelytyped is wrong on this one.
 * There's open discussion on this topic without much attention:
 * https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/66042
 */
type OffsetAccessor = (series: Array<Series<Record<string, unknown>, string>>, order: number[]) => void;

const STACK_OFFSET_MAP: Record<string, OffsetAccessor> = {
  sign: offsetSign,
  // @ts-expect-error definitelytyped types are incorrect
  expand: stackOffsetExpand,
  // @ts-expect-error definitelytyped types are incorrect
  none: stackOffsetNone,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: stackOffsetSilhouette,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: stackOffsetWiggle,
  positive: offsetPositive,
};

export const getStackedData = (
  data: ReadonlyArray<Record<string, unknown>>,
  dataKeys: ReadonlyArray<DataKey<any>>,
  offsetType: StackOffsetType,
): ReadonlyArray<Series<Record<string, unknown>, DataKey<any>>> => {
  const offsetAccessor: OffsetAccessor = STACK_OFFSET_MAP[offsetType];
  const stack = shapeStack<Record<string, unknown>, DataKey<any>>()
    .keys(dataKeys)
    .value((d, key) => +getValueByDataKey(d, key, 0))
    .order(stackOrderNone)
    // @ts-expect-error definitelytyped types are incorrect
    .offset(offsetAccessor);

  return stack(data);
};

type AxisId = string;
export type StackId = string | number | symbol;

/**
 * @deprecated do not use - depends on passing around DOM elements
 */
export type ParentStackGroup = {
  hasStack: boolean;
  stackGroups: Record<StackId, ChildStackGroup>;
};

/**
 * @deprecated do not use - depends on passing around DOM elements
 */
export type GenericChildStackGroup<T> = {
  numericAxisId: string;
  cateAxisId: string;
  items: Array<ReactElement>;
  stackedData?: ReadonlyArray<T>;
};

/**
 * @deprecated do not use - depends on passing around DOM elements
 */
export type ChildStackGroup = GenericChildStackGroup<Series<Record<string, unknown>, DataKey<any>>>;

/**
 * @deprecated do not use - depends on passing around DOM elements
 */
export type AxisStackGroups = Record<AxisId, ParentStackGroup>;

// eslint-disable-next-line valid-jsdoc
/**
 * @deprecated do not use - depends on passing around DOM elements
 */
export const getStackGroupsByAxisId = (
  data: ReadonlyArray<Record<string, unknown>> | undefined,
  _items: Array<ReactElement>,
  numericAxisId: string,
  cateAxisId: string,
  offsetType: StackOffsetType,
  reverseStackOrder: boolean,
): AxisStackGroups => {
  if (!data) {
    return null;
  }

  // reversing items to affect render order (for layering)
  const items = reverseStackOrder ? _items.reverse() : _items;

  const parentStackGroupsInitialValue: Record<AxisId, ParentStackGroup> = {};

  const stackGroups: Record<AxisId, ParentStackGroup> = items.reduce((result, item) => {
    const { stackId, hide } = item.props;

    if (hide) {
      return result;
    }

    const axisId: AxisId = item.props[numericAxisId];
    const parentGroup: ParentStackGroup = result[axisId] || { hasStack: false, stackGroups: {} };

    if (isNumOrStr(stackId)) {
      const childGroup: ChildStackGroup = parentGroup.stackGroups[stackId] || {
        numericAxisId,
        cateAxisId,
        items: [],
      };

      childGroup.items.push(item);

      parentGroup.hasStack = true;

      parentGroup.stackGroups[stackId] = childGroup;
    } else {
      parentGroup.stackGroups[uniqueId('_stackId_')] = {
        numericAxisId,
        cateAxisId,
        items: [item],
      };
    }

    return { ...result, [axisId]: parentGroup };
  }, parentStackGroupsInitialValue);

  const axisStackGroupsInitialValue: AxisStackGroups = {};

  return Object.keys(stackGroups).reduce((result, axisId) => {
    const group = stackGroups[axisId];

    if (group.hasStack) {
      const stackGroupsInitialValue: Record<StackId, ChildStackGroup> = {};
      group.stackGroups = Object.keys(group.stackGroups).reduce((res, stackId) => {
        const g = group.stackGroups[stackId];

        return {
          ...res,
          [stackId]: {
            numericAxisId,
            cateAxisId,
            items: g.items,
            stackedData: getStackedData(
              data,
              g.items.map(item => item.props.dataKey),
              offsetType,
            ),
          },
        };
      }, stackGroupsInitialValue);
    }

    return { ...result, [axisId]: group };
  }, axisStackGroupsInitialValue);
};

/**
 * Configure the scale function of axis
 * @param {Object} scale The scale function
 * @param {Object} opts  The configuration of axis
 * @return {Object}      null
 */
export const getTicksOfScale = (scale: any, opts: any) => {
  const { realScaleType, type, tickCount, originalDomain, allowDecimals } = opts;
  const scaleType = realScaleType || opts.scale;

  if (scaleType !== 'auto' && scaleType !== 'linear') {
    return null;
  }

  if (
    tickCount &&
    type === 'number' &&
    originalDomain &&
    (originalDomain[0] === 'auto' || originalDomain[1] === 'auto')
  ) {
    // Calculate the ticks by the number of grid when the axis is a number axis
    const domain = scale.domain();
    if (!domain.length) {
      return null;
    }

    const tickValues = getNiceTickValues(domain, tickCount, allowDecimals);

    scale.domain([min(tickValues), max(tickValues)]);
    return { niceTicks: tickValues };
  }
  if (tickCount && type === 'number') {
    const domain = scale.domain();
    const tickValues = getTickValuesFixedDomain(domain, tickCount, allowDecimals);

    return { niceTicks: tickValues };
  }

  return null;
};

export function getCateCoordinateOfLine<T extends Record<string, unknown>>({
  axis,
  ticks,
  bandSize,
  entry,
  index,
  dataKey,
}: {
  axis: {
    dataKey?: DataKey<T>;
    allowDuplicatedCategory?: boolean;
    type?: BaseAxisProps['type'];
    scale: (v: number) => number;
  };
  ticks: Array<TickItem>;
  bandSize: number;
  entry: T;
  index: number;
  dataKey?: DataKey<T>;
}): number | null {
  if (axis.type === 'category') {
    // find coordinate of category axis by the value of category
    // @ts-expect-error why does this use direct object access instead of getValueByDataKey?
    if (!axis.allowDuplicatedCategory && axis.dataKey && !isNullish(entry[axis.dataKey])) {
      // @ts-expect-error why does this use direct object access instead of getValueByDataKey?
      const matchedTick = findEntryInArray(ticks, 'value', entry[axis.dataKey]);

      if (matchedTick) {
        return matchedTick.coordinate + bandSize / 2;
      }
    }

    return ticks[index] ? ticks[index].coordinate + bandSize / 2 : null;
  }

  const value = getValueByDataKey(entry, !isNullish(dataKey) ? dataKey : axis.dataKey);

  // @ts-expect-error getValueByDataKey does not validate the output type
  return !isNullish(value) ? axis.scale(value) : null;
}

export const getCateCoordinateOfBar = ({
  axis,
  ticks,
  offset,
  bandSize,
  entry,
  index,
}: {
  axis: BaseAxisWithScale;
  ticks: ReadonlyArray<TickItem>;
  offset: number;
  bandSize: number;
  entry: any;
  index: number;
}) => {
  if (axis.type === 'category') {
    return ticks[index] ? ticks[index].coordinate + offset : null;
  }
  const value = getValueByDataKey(entry, axis.dataKey, axis.scale.domain()[index]);

  return !isNullish(value) ? axis.scale(value) - bandSize / 2 + offset : null;
};

export const getBaseValueOfBar = ({ numericAxis }: { numericAxis: BaseAxisWithScale }): number | unknown => {
  const domain = numericAxis.scale.domain();

  if (numericAxis.type === 'number') {
    // @ts-expect-error type number means the domain has numbers in it but this relationship is not known to typescript
    const minValue = Math.min(domain[0], domain[1]);
    // @ts-expect-error type number means the domain has numbers in it but this relationship is not known to typescript
    const maxValue = Math.max(domain[0], domain[1]);

    if (minValue <= 0 && maxValue >= 0) {
      return 0;
    }
    if (maxValue < 0) {
      return maxValue;
    }

    return minValue;
  }

  return domain[0];
};

const getDomainOfSingle = (data: Array<Array<any>>): number[] => {
  const flat = data.flat(2).filter(isNumber);
  return [Math.min(...flat), Math.max(...flat)];
};

const makeDomainFinite = (domain: NumberDomain): NumberDomain => {
  return [domain[0] === Infinity ? 0 : domain[0], domain[1] === -Infinity ? 0 : domain[1]];
};

export const getDomainOfStackGroups = (
  stackGroups: Record<StackId, ChildStackGroup>,
  startIndex: number,
  endIndex: number,
): NumberDomain =>
  makeDomainFinite(
    Object.keys(stackGroups).reduce(
      (result, stackId): NumberDomain => {
        const group = stackGroups[stackId];
        const { stackedData } = group;
        const domain = stackedData.reduce(
          (res: [number, number], entry) => {
            const s = getDomainOfSingle(entry.slice(startIndex, endIndex + 1));

            return [Math.min(res[0], s[0]), Math.max(res[1], s[1])];
          },
          [Infinity, -Infinity],
        );

        return [Math.min(domain[0], result[0]), Math.max(domain[1], result[1])];
      },
      [Infinity, -Infinity],
    ),
  );

export const MIN_VALUE_REG = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/;
export const MAX_VALUE_REG = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/;

/**
 * @deprecated instead use `parseNumericalUserDomain`
 * @param specifiedDomain do not use
 * @param dataDomain do not use
 * @param allowDataOverflow do not use
 * @returns do not use
 */
export const parseSpecifiedDomain = (
  specifiedDomain: /* AxisDomain */ any,
  dataDomain: any,
  allowDataOverflow?: boolean,
) => {
  if (typeof specifiedDomain === 'function') {
    return specifiedDomain(dataDomain, allowDataOverflow);
  }

  if (!Array.isArray(specifiedDomain)) {
    return dataDomain;
  }

  const domain = [];

  /* eslint-disable prefer-destructuring */
  if (isNumber(specifiedDomain[0])) {
    domain[0] = allowDataOverflow ? specifiedDomain[0] : Math.min(specifiedDomain[0], dataDomain[0]);
  } else if (MIN_VALUE_REG.test(specifiedDomain[0])) {
    const value = +MIN_VALUE_REG.exec(specifiedDomain[0])[1];

    domain[0] = dataDomain[0] - value;
  } else if (typeof specifiedDomain[0] === 'function') {
    domain[0] = specifiedDomain[0](dataDomain[0]);
  } else {
    domain[0] = dataDomain[0];
  }

  if (isNumber(specifiedDomain[1])) {
    domain[1] = allowDataOverflow ? specifiedDomain[1] : Math.max(specifiedDomain[1], dataDomain[1]);
  } else if (MAX_VALUE_REG.test(specifiedDomain[1])) {
    const value = +MAX_VALUE_REG.exec(specifiedDomain[1])[1];

    domain[1] = dataDomain[1] + value;
  } else if (typeof specifiedDomain[1] === 'function') {
    domain[1] = specifiedDomain[1](dataDomain[1]);
  } else {
    domain[1] = dataDomain[1];
  }
  /* eslint-enable prefer-destructuring */

  return domain;
};

/**
 * Calculate the size between two category
 * @param  {Object} axis  The options of axis
 * @param  {Array}  ticks The ticks of axis
 * @param  {Boolean} isBar if items in axis are bars
 * @return {Number} Size
 */
export const getBandSizeOfAxis = (
  axis?: BaseAxisWithScale,
  ticks?: ReadonlyArray<TickItem>,
  isBar?: boolean,
): number | undefined => {
  if (axis && axis.scale && axis.scale.bandwidth) {
    const bandWidth = axis.scale.bandwidth();

    if (!isBar || bandWidth > 0) {
      return bandWidth;
    }
  }

  if (axis && ticks && ticks.length >= 2) {
    const orderedTicks = sortBy(ticks, o => o.coordinate);
    let bandSize = Infinity;

    for (let i = 1, len = orderedTicks.length; i < len; i++) {
      const cur = orderedTicks[i];
      const prev = orderedTicks[i - 1];

      bandSize = Math.min((cur.coordinate || 0) - (prev.coordinate || 0), bandSize);
    }

    return bandSize === Infinity ? 0 : bandSize;
  }

  return isBar ? undefined : 0;
};
/**
 * @deprecated this is reading defaultProps - do not use, try to come up with different approach.
 *
 * parse the domain of a category axis when a domain is specified
 * @param   {Array}        specifiedDomain  The domain specified by users
 * @param   {Array}        calculatedDomain The domain calculated by dateKey
 * @param   {ReactElement} axisChild        The axis ReactElement
 * @returns {Array}        domains
 */
export const parseDomainOfCategoryAxis = <T>(
  specifiedDomain: ReadonlyArray<T> | undefined,
  calculatedDomain: ReadonlyArray<T>,
  axisChild: ReactElement,
): ReadonlyArray<T> => {
  if (!specifiedDomain || !specifiedDomain.length) {
    return calculatedDomain;
  }
  if (isEqual(specifiedDomain, get(axisChild, 'type.defaultProps.domain'))) {
    return calculatedDomain;
  }

  return specifiedDomain;
};

/**
 * @deprecated instead use {@link getTooltipEntry}
 * @param graphicalItem do not use
 * @param payload do not use
 * @return do not use
 */
export const getTooltipItem = (
  graphicalItem: {
    type: { displayName: string };
    props: {
      stroke: string;
      fill: string;
      dataKey: DataKey<any>;
      name: string;
      unit: string;
      formatter: any;
      tooltipType: any;
      chartType: any;
      hide: boolean;
    };
  },
  payload: any,
) => {
  const { dataKey, name, unit, formatter, tooltipType, chartType, hide } = graphicalItem.props;

  return {
    ...filterProps(graphicalItem, false),
    dataKey,
    unit,
    formatter,
    name: name || dataKey,
    color: getMainColorOfGraphicItem(graphicalItem),
    value: getValueByDataKey(payload, dataKey),
    type: tooltipType,
    payload,
    chartType,
    hide,
  };
};

export function getTooltipEntry({
  tooltipEntrySettings,
  dataKey,
  payload,
  value,
  name,
}: {
  tooltipEntrySettings: TooltipEntrySettings;
  dataKey: DataKey<any>;
  payload: any;
  value: ValueType;
  name: string | undefined;
}): TooltipPayloadEntry {
  return {
    ...tooltipEntrySettings,
    dataKey,
    payload,
    value,
    name,
  };
}

export function getTooltipNameProp(
  nameFromItem: string | number | undefined,
  dataKey: DataKey<any>,
): string | undefined {
  if (nameFromItem) {
    return String(nameFromItem);
  }
  if (typeof dataKey === 'string') {
    return dataKey;
  }
  return undefined;
}

export interface Reversible {
  reversed: boolean;
}

export const isAxisLTR = (axisMap: { [key: string]: Reversible }) => {
  const axes = Object.values(axisMap ?? {});
  // If there are no <XAxis /> elements in the chart, then the chart is left-to-right (returning true).
  if (axes.length === 0) {
    return true;
  }
  // If there are any cases of reversed=true, then the chart is right-to-left (returning false).
  // Otherwise, the chart is left-to-right (returning true)
  return !axes.some(({ reversed }) => reversed);
};

// eslint-disable-next-line valid-jsdoc
/**
 * @deprecated do not use, depends (indirectly) on DOM access. Instead, use {@link selectCartesianAxisSize}
 * Determine the size of the axis, used for calculation of relative bar sizes
 */
export const getCartesianAxisSize = (axisObj: AxisObj, axisName: 'xAxis' | 'yAxis' | 'angleAxis' | 'radiusAxis') => {
  if (axisName === 'xAxis') {
    return axisObj[axisName].width;
  }
  if (axisName === 'yAxis') {
    return axisObj[axisName].height;
  }
  // This is only supported for Bar charts (i.e. charts with cartesian axes), so we should never get here
  return undefined;
};

export function inRange(
  x: number,
  y: number,
  scale: number,
  layout: LayoutType,
  angleAxisMap: AxisMap | undefined,
  radiusAxisMap: AxisMap | undefined,
  offset: ChartOffset,
): RangeObj {
  const [scaledX, scaledY] = [x / scale, y / scale];

  if (layout === 'horizontal' || layout === 'vertical') {
    const isInRange =
      scaledX >= offset.left &&
      scaledX <= offset.left + offset.width &&
      scaledY >= offset.top &&
      scaledY <= offset.top + offset.height;

    return isInRange ? { x: scaledX, y: scaledY } : null;
  }

  if (angleAxisMap && radiusAxisMap) {
    const angleAxis = getAnyElementOfObject(angleAxisMap);
    return inRangeOfSector({ x: scaledX, y: scaledY }, angleAxis);
  }

  return null;
}

export const getActiveCoordinate = (
  layout: LayoutType,
  tooltipTicks: readonly TickItem[],
  activeIndex: number,
  rangeObj: RangeObj,
): ChartCoordinate => {
  const entry = tooltipTicks.find(tick => tick && tick.index === activeIndex);

  if (entry) {
    if (layout === 'horizontal') {
      return { x: entry.coordinate, y: rangeObj.y };
    }
    if (layout === 'vertical') {
      return { x: rangeObj.x, y: entry.coordinate };
    }
    if (layout === 'centric') {
      const angle = entry.coordinate;
      const { radius } = rangeObj;

      return {
        ...rangeObj,
        ...polarToCartesian(rangeObj.cx, rangeObj.cy, radius, angle),
        angle,
        radius,
      };
    }

    const radius = entry.coordinate;
    const { angle } = rangeObj;

    return {
      ...rangeObj,
      ...polarToCartesian(rangeObj.cx, rangeObj.cy, radius, angle),
      angle,
      radius,
    };
  }

  return { x: 0, y: 0 };
};

export const calculateTooltipPos = (rangeObj: RangeObj, layout: LayoutType): number | undefined => {
  if (layout === 'horizontal') {
    return rangeObj.x;
  }
  if (layout === 'vertical') {
    return rangeObj.y;
  }
  if (layout === 'centric') {
    return rangeObj.angle;
  }

  return rangeObj.radius;
};
