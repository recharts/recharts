import sortBy from 'es-toolkit/compat/sortBy';
import get from 'es-toolkit/compat/get';

import {
  Series,
  type SeriesPoint,
  stack as shapeStack,
  stackOffsetExpand,
  stackOffsetNone,
  stackOffsetSilhouette,
  stackOffsetWiggle,
  stackOrderNone,
} from 'victory-vendor/d3-shape';

import { findEntryInArray, isNan, isNotNil, isNullish, isNumber, isNumOrStr, mathSign } from './DataUtils';

import { TooltipEntrySettings, TooltipPayloadEntry } from '../state/tooltipSlice';
import {
  AxisTick,
  AxisType,
  RenderableAxisProps,
  CartesianLayout,
  CategoricalDomainItem,
  RelativePointer,
  DataKey,
  LayoutType,
  NumberDomain,
  OffsetHorizontal,
  OffsetVertical,
  PolarLayout,
  RangeObj,
  Size,
  StackOffsetType,
  TickItem,
} from './types';
import { ValueType } from '../component/DefaultTooltipContent';
import { LegendSettings } from '../state/legendSlice';
import { AxisRange, BaseAxisWithScale } from '../state/selectors/axisSelectors';
import { StackGroup } from './stacks/stackTypes';
import { getSliced } from './getSliced';
import { isWellBehavedNumber } from './isWellBehavedNumber';
import { RechartsScale } from './scale/RechartsScale';

export function getValueByDataKey<T>(
  obj: T | null | undefined,
  dataKey: DataKey<T> | undefined,
  defaultValue?: any,
): unknown {
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
   * If the input data is undefined, this will be 0.
   * If the input data is NaN then this size too will be NaN.
   */
  size: number;
};

export const appendOffsetOfLegend = (
  offset: OffsetVertical & OffsetHorizontal,
  legendSettings: LegendSettings,
  legendSize: Size,
): OffsetVertical & OffsetHorizontal => {
  if (legendSettings && legendSize) {
    const { width: boxWidth, height: boxHeight } = legendSize;
    const { align, verticalAlign, layout } = legendSettings;

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

export type AxisPropsNeededForTicksGenerator = {
  axisType?: AxisType;
  categoricalDomain?: ReadonlyArray<unknown>;
  duplicateDomain?: ReadonlyArray<unknown>;
  isCategorical?: boolean;
  niceTicks?: ReadonlyArray<AxisTick>;
  /**
   * The range appears to be only used in Angle Axis - needs further investigation
   */
  range?: AxisRange;
  realScaleType?: 'scaleBand' | string;
  scale: RechartsScale | undefined;
  tickCount?: number;
  ticks?: ReadonlyArray<AxisTick>;
  type?: 'number' | 'category';
};

/**
 * Of on four almost identical implementations of tick generation.
 * The four horsemen of tick generation are:
 * - {@link selectTooltipAxisTicks}
 * - {@link combineAxisTicks}
 * - {@link getTicksOfAxis}.
 * - {@link combineGraphicalItemTicks}
 */
export const getTicksOfAxis = (
  axis: undefined | AxisPropsNeededForTicksGenerator,
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

  const offsetForBand = realScaleType === 'scaleBand' && scale.bandwidth ? scale.bandwidth() / 2 : 2;
  let offset = (isGrid || isAll) && type === 'category' && scale.bandwidth ? scale.bandwidth() / offsetForBand : 0;

  offset = axisType === 'angleAxis' && range && range.length >= 2 ? mathSign(range[0] - range[1]) * 2 * offset : offset;

  // The ticks set by user should only affect the ticks adjacent to axis line
  if (isGrid && (ticks || niceTicks)) {
    const result = (ticks || niceTicks || [])
      .map((entry: AxisTick, index: number): TickItem | null => {
        const scaleContent = duplicateDomain ? duplicateDomain.indexOf(entry) : entry;

        const scaled = scale.map(scaleContent);
        if (!isWellBehavedNumber(scaled)) {
          return null;
        }
        return {
          // If the scaleContent is not a number, the coordinate will be NaN.
          // That could be the case for example with a PointScale and a string as domain.
          coordinate: scaled + offset,
          value: entry,
          offset,
          index,
        };
      })
      .filter(isNotNil);

    return result;
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

  if (scale.ticks && !isAll && tickCount != null) {
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
        // @ts-expect-error can't use Date as an index
        value: duplicateDomain ? duplicateDomain[entry] : entry,
        index,
        offset,
      };
    })
    .filter(isNotNil);
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
  const m = series[0]?.length;
  if (m == null || m <= 0) {
    return;
  }

  for (let j = 0; j < m; ++j) {
    let positive = 0;
    let negative = 0;

    for (let i = 0; i < n; ++i) {
      const row = series[i];
      const col = row?.[j];
      if (col == null) {
        continue;
      }
      const series1 = col[1];
      const series0 = col[0];
      const value = isNan(series1) ? series0 : series1;

      if (value >= 0) {
        col[0] = positive;
        positive += value;
        col[1] = positive;
      } else {
        col[0] = negative;
        negative += value;
        col[1] = negative;
      }
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
  const m = series[0]?.length;
  if (m == null || m <= 0) {
    return;
  }

  for (let j = 0; j < m; ++j) {
    let positive = 0;

    for (let i = 0; i < n; ++i) {
      const row = series[i];
      const col = row?.[j];
      if (col == null) {
        continue;
      }
      const value = isNan(col[1]) ? col[0] : col[1];

      if (value >= 0) {
        col[0] = positive;
        positive += value;
        col[1] = positive;
      } else {
        col[0] = 0;
        col[1] = 0;
      }
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

const STACK_OFFSET_MAP: Record<StackOffsetType, OffsetAccessor> = {
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
  const offsetAccessor: OffsetAccessor = STACK_OFFSET_MAP[offsetType] ?? stackOffsetNone;
  const stack = shapeStack<Record<string, unknown>, DataKey<any>>()
    .keys(dataKeys)
    .value((d, key) => Number(getValueByDataKey(d, key, 0)))
    .order(stackOrderNone)
    // @ts-expect-error definitelytyped types are incorrect
    .offset(offsetAccessor);

  const result = stack(data);

  // Post-process ranged data: if value is an array of two numbers, use them directly without stacking
  result.forEach((series, seriesIndex) => {
    series.forEach((point, pointIndex) => {
      const value = getValueByDataKey(data[pointIndex], dataKeys[seriesIndex], 0);
      if (Array.isArray(value) && value.length === 2 && isNumber(value[0]) && isNumber(value[1])) {
        // eslint-disable-next-line prefer-destructuring,no-param-reassign
        point[0] = value[0];
        // eslint-disable-next-line prefer-destructuring,no-param-reassign
        point[1] = value[1];
      }
    });
  });

  return result;
};

/**
 * Externally, we accept both strings and numbers as stack IDs
 * @inline
 */
export type StackId = string | number;
/**
 * Stack IDs in the external props allow numbers; but internally we use it as an object key
 * and object keys are always strings. Also, it would be kinda confusing if stackId=8 and stackId='8' were different stacks
 * so let's just force a string.
 */
export type NormalizedStackId = string;

export function getNormalizedStackId(publicStackId: StackId | undefined): NormalizedStackId | undefined {
  return publicStackId == null ? undefined : String(publicStackId);
}

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
    type?: RenderableAxisProps['type'];
    scale: RechartsScale;
  };
  ticks: ReadonlyArray<TickItem> | undefined;
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

    return ticks?.[index] ? ticks[index].coordinate + bandSize / 2 : null;
  }

  const value = getValueByDataKey(entry, !isNullish(dataKey) ? dataKey : axis.dataKey);

  const scaled = axis.scale.map(value);
  if (!isNumber(scaled)) {
    return null;
  }
  return scaled;
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
}): number | null => {
  if (axis.type === 'category') {
    return ticks[index] ? ticks[index].coordinate + offset : null;
  }
  // @ts-expect-error getValueByDataKey does not validate the output type
  const value: number | undefined = getValueByDataKey(entry, axis.dataKey, axis.scale.domain()[index]);

  if (isNullish(value)) {
    return null;
  }

  const scaled = axis.scale.map(value);
  if (!isNumber(scaled)) {
    return null;
  }
  return scaled - bandSize / 2 + offset;
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

const getDomainOfSingle = (data: ReadonlyArray<ReadonlyArray<unknown>>): number[] => {
  const flat = data.flat(2).filter(isNumber);
  return [Math.min(...flat), Math.max(...flat)];
};

const makeDomainFinite = (domain: NumberDomain): NumberDomain => {
  return [domain[0] === Infinity ? 0 : domain[0], domain[1] === -Infinity ? 0 : domain[1]];
};

export const getDomainOfStackGroups = (
  stackGroups: Record<StackId, StackGroup> | undefined,
  startIndex: number,
  endIndex: number,
): NumberDomain | undefined => {
  if (stackGroups == null) {
    return undefined;
  }
  return makeDomainFinite(
    Object.keys(stackGroups).reduce(
      (result, stackId): NumberDomain => {
        const group = stackGroups[stackId];
        if (!group) {
          return result;
        }
        const { stackedData } = group;
        const domain: NumberDomain = stackedData.reduce(
          (res: NumberDomain, entry): NumberDomain => {
            const sliced = getSliced(entry, startIndex, endIndex);
            const s = getDomainOfSingle(sliced);
            if (!isWellBehavedNumber(s[0]) || !isWellBehavedNumber(s[1])) {
              return res;
            }
            return [Math.min(res[0], s[0]), Math.max(res[1], s[1])];
          },
          [Infinity, -Infinity],
        );

        return [Math.min(domain[0], result[0]), Math.max(domain[1], result[1])];
      },
      [Infinity, -Infinity],
    ),
  );
};

export const MIN_VALUE_REG = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/;
export const MAX_VALUE_REG = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/;

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
    const orderedTicks: ReadonlyArray<TickItem> = sortBy(ticks, (o: TickItem) => o.coordinate);
    let bandSize = Infinity;

    for (let i = 1, len = orderedTicks.length; i < len; i++) {
      const cur = orderedTicks[i];
      const prev = orderedTicks[i - 1];

      bandSize = Math.min((cur?.coordinate || 0) - (prev?.coordinate || 0), bandSize);
    }

    return bandSize === Infinity ? 0 : bandSize;
  }

  return isBar ? undefined : 0;
};

export function getTooltipEntry({
  tooltipEntrySettings,
  dataKey,
  payload,
  value,
  name,
}: {
  tooltipEntrySettings: TooltipEntrySettings;
  dataKey: DataKey<any> | undefined;
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
  nameFromItem: string | number | undefined | unknown,
  dataKey: DataKey<any> | undefined,
): string | undefined {
  if (nameFromItem) {
    return String(nameFromItem);
  }
  if (typeof dataKey === 'string') {
    return dataKey;
  }
  return undefined;
}

export const calculateCartesianTooltipPos = (
  coordinate: RelativePointer,
  layout: CartesianLayout,
): number | undefined => {
  if (layout === 'horizontal') {
    return coordinate.relativeX;
  }
  if (layout === 'vertical') {
    return coordinate.relativeY;
  }

  return undefined;
};

export const calculatePolarTooltipPos = (rangeObj: RangeObj, layout: PolarLayout): number | undefined => {
  if (layout === 'centric') {
    return rangeObj.angle;
  }

  return rangeObj.radius;
};
