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

import { findEntryInArray, isNan, isNullish, isNumber, isNumOrStr, mathSign } from './DataUtils';

import { TooltipEntrySettings, TooltipPayloadEntry } from '../state/tooltipSlice';
import {
  AxisTick,
  AxisType,
  BaseAxisProps,
  ChartCoordinate,
  ChartOffsetRequired,
  DataKey,
  LayoutType,
  NumberDomain,
  OffsetHorizontal,
  OffsetVertical,
  PolarViewBoxRequired,
  RangeObj,
  Size,
  StackOffsetType,
  TickItem,
} from './types';
import { ValueType } from '../component/DefaultTooltipContent';
import { inRangeOfSector, polarToCartesian } from './PolarUtils';
import { LegendSettings } from '../state/legendSlice';
import { AxisRange, BaseAxisWithScale, StackGroup } from '../state/selectors/axisSelectors';

export function getValueByDataKey<T>(obj: T, dataKey: DataKey<T> | undefined, defaultValue?: any): unknown {
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

export const calculateActiveTickIndex = (
  /**
   * For different layouts, `coordinate` is different:
   * In horizontal layout, this is expected to be the `x` coordinate
   * vertical -> y
   * centric -> angle
   * radial -> radius
   */
  coordinate: number | undefined,
  ticks: ReadonlyArray<TickItem> | undefined,
  unsortedTicks: ReadonlyArray<TickItem>,
  axisType: AxisType | undefined,
  range: AxisRange | undefined,
): number => {
  let index = -1;
  const len = ticks?.length ?? 0;

  // if there are 1 or fewer ticks or if there is no coordinate then the active tick is at index 0
  if (len <= 1 || coordinate == null) {
    return 0;
  }

  if (axisType === 'angleAxis' && range != null && Math.abs(Math.abs(range[1] - range[0]) - 360) <= 1e-6) {
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
  } else if (ticks) {
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
  scale: RechartsScale | undefined;
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

  const offsetForBand = realScaleType === 'scaleBand' && scale.bandwidth ? scale.bandwidth() / 2 : 2;
  let offset = (isGrid || isAll) && type === 'category' && scale.bandwidth ? scale.bandwidth() / offsetForBand : 0;

  offset = axisType === 'angleAxis' && range && range.length >= 2 ? mathSign(range[0] - range[1]) * 2 * offset : offset;

  // The ticks set by user should only affect the ticks adjacent to axis line
  if (isGrid && (ticks || niceTicks)) {
    const result = (ticks || niceTicks || []).map((entry: AxisTick, index: number): TickItem => {
      const scaleContent = duplicateDomain ? duplicateDomain.indexOf(entry) : entry;

      return {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: scale(scaleContent) + offset,
        value: entry,
        offset,
        index,
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

  if (scale.ticks && !isAll && tickCount != null) {
    return scale
      .ticks(tickCount)
      .map(
        (entry: any, index: number): TickItem => ({ coordinate: scale(entry) + offset, value: entry, offset, index }),
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
      const value = isNan(series[i][j][1]) ? series[i][j][0] : series[i][j][1];

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
      const value = isNan(series[i][j][1]) ? series[i][j][0] : series[i][j][1];

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

export type StackId = string | number;
/**
 * Stack IDs in the external props allow numbers; but internally we use it as an object key
 * and object keys are always strings. Also it would be kinda confusing if stackId=8 and stackId='8' were different stacks
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
}): number | null => {
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
    const orderedTicks = sortBy(ticks, (o: { coordinate: any }) => o.coordinate);
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

export function inRange(
  x: number,
  y: number,
  layout: LayoutType,
  polarViewBox: PolarViewBoxRequired | undefined,
  offset: ChartOffsetRequired,
): RangeObj | null {
  if (layout === 'horizontal' || layout === 'vertical') {
    const isInRange =
      x >= offset.left && x <= offset.left + offset.width && y >= offset.top && y <= offset.top + offset.height;

    return isInRange ? { x, y } : null;
  }

  if (polarViewBox) {
    return inRangeOfSector({ x, y }, polarViewBox);
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
