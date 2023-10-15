import * as d3Scales from 'victory-vendor/d3-scale';
import {
  Series,
  stack as shapeStack,
  stackOffsetExpand,
  stackOffsetNone,
  stackOffsetSilhouette,
  stackOffsetWiggle,
  stackOrderNone,
} from 'victory-vendor/d3-shape';
import _ from 'lodash';
import { ReactElement, ReactNode } from 'react';
import { getNiceTickValues, getTickValuesFixedDomain } from 'recharts-scale';

import { ErrorBar } from '../cartesian/ErrorBar';
import { findEntryInArray, getPercentValue, isNumber, isNumOrStr, mathSign, uniqueId } from './DataUtils';
import { filterProps, findAllByType, getDisplayName } from './ReactUtils';
// TODO: Cause of circular dependency. Needs refactor.
// import { RadiusAxisProps, AngleAxisProps } from '../polar/types';
import {
  AxisType,
  BaseAxisProps,
  DataKey,
  LayoutType,
  LegendType,
  PolarLayoutType,
  NumberDomain,
  TickItem,
  CategoricalDomain,
  StackOffsetType,
  Margin,
  ChartOffset,
} from './types';
import { getLegendProps } from './getLegendProps';

// Exported for backwards compatibility
export { getLegendProps };

export function getValueByDataKey<T>(obj: T, dataKey: DataKey<T>, defaultValue?: any) {
  if (_.isNil(obj) || _.isNil(dataKey)) {
    return defaultValue;
  }

  if (isNumOrStr(dataKey)) {
    return _.get(obj, dataKey, defaultValue);
  }

  if (_.isFunction(dataKey)) {
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
  type: BaseAxisProps['type'],
  filterNil?: boolean,
): NumberDomain | CategoricalDomain {
  const flattenData: unknown[] = _.flatMap(data, (entry: T): unknown => getValueByDataKey(entry, key));

  if (type === 'number') {
    // @ts-expect-error parseFloat type only accepts strings
    const domain: number[] = flattenData.filter(entry => isNumber(entry) || parseFloat(entry));

    return domain.length ? [_.min(domain), _.max(domain)] : [Infinity, -Infinity];
  }

  const validateData = filterNil ? flattenData.filter(entry => !_.isNil(entry)) : flattenData;

  // Supports x-axis of Date type
  return validateData.map(entry => (isNumOrStr(entry) || entry instanceof Date ? entry : ''));
}

export const calculateActiveTickIndex = (
  coordinate: number,
  ticks: Array<TickItem> = [],
  unsortedTicks?: Array<TickItem>,
  axis?: BaseAxisProps,
) => {
  let index = -1;
  const len = ticks?.length ?? 0;

  // if there are 1 or less ticks ticks then the active tick is at index 0
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
        const min = Math.min(before, after);
        const max = Math.max(before, after);

        if (coordinate > (min + cur) / 2 && coordinate <= (max + cur) / 2) {
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
 * Get the main color of each graphic item
 * @param  {ReactElement} item A graphic item
 * @return {String}            Color
 */
export const getMainColorOfGraphicItem = (item: ReactElement) => {
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

export interface FormattedGraphicalItem {
  props: {
    sectors?: ReadonlyArray<any>;
    data?: ReadonlyArray<any>;
  };
  childIndex: number;
  item: ReactElement<{ legendType?: LegendType; hide: boolean; name?: string; dataKey: unknown }>;
}

export type BarSetup = {
  barSize: number | string;
  stackList: ReadonlyArray<ReactElement>;
  item: ReactElement;
};

/**
 * Calculate the size of all groups for stacked bar graph
 * @param  {Object} stackGroups The items grouped by axisId and stackId
 * @return {Object} The size of all groups
 */
export const getBarSizeList = ({
  barSize: globalSize,
  stackGroups = {},
}: {
  barSize: number | string;
  stackGroups: AxisStackGroups;
}): Record<string, ReadonlyArray<BarSetup>> => {
  if (!stackGroups) {
    return {};
  }

  const result: Record<string, Array<BarSetup>> = {};
  const numericAxisIds = Object.keys(stackGroups);

  for (let i = 0, len = numericAxisIds.length; i < len; i++) {
    const sgs = stackGroups[numericAxisIds[i]].stackGroups;
    const stackIds = Object.keys(sgs);

    for (let j = 0, sLen = stackIds.length; j < sLen; j++) {
      const { items, cateAxisId } = sgs[stackIds[j]];

      const barItems = items.filter(item => getDisplayName(item.type).indexOf('Bar') >= 0);

      if (barItems && barItems.length) {
        const { barSize: selfSize } = barItems[0].props;
        const cateId = barItems[0].props[cateAxisId];

        if (!result[cateId]) {
          result[cateId] = [];
        }

        result[cateId].push({
          item: barItems[0],
          stackList: barItems.slice(1),
          barSize: _.isNil(selfSize) ? globalSize : selfSize,
        });
      }
    }
  }

  return result;
};

export type BarPosition = {
  item: ReactElement;
  position: {
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
     * But if the input data is not well formed, undefined or NaN will be on the output too.
     */
    size: number | undefined | typeof NaN;
  };
};

/**
 * Calculate the size of each bar and offset between start of band and the bar
 *
 * @param  {number} bandSize is the size of area where bars can render
 * @param  {number | string} barGap is the gap size, as a percentage of `bandSize`.
 *                                  Can be defined as number or percent string
 * @param  {number | string} barCategoryGap is the gap size, as a percentage of `bandSize`.
 *                                  Can be defined as number or percent string
 * @param  {Array<object>} sizeList Sizes of all groups
 * @param  {number} maxBarSize The maximum size of each bar
 * @return {Array<object>} The size and offset of each bar
 */
export const getBarPosition = ({
  barGap,
  barCategoryGap,
  bandSize,
  sizeList = [],
  maxBarSize,
}: {
  barGap: string | number;
  barCategoryGap: string | number;
  bandSize: number;
  sizeList: ReadonlyArray<BarSetup>;
  maxBarSize: number;
}): ReadonlyArray<BarPosition> => {
  const len = sizeList.length;
  if (len < 1) return null;

  let realBarGap = getPercentValue(barGap, bandSize, 0, true);
  let result: ReadonlyArray<BarPosition>;
  const initialValue: ReadonlyArray<BarPosition> = [];

  // whether or not is barSize setted by user
  if (sizeList[0].barSize === +sizeList[0].barSize) {
    let useFull = false;
    let fullBarSize = bandSize / len;
    // @ts-expect-error the type check above does not check for type number explicitly
    let sum = sizeList.reduce((res, entry) => res + entry.barSize || 0, 0);
    sum += (len - 1) * realBarGap;

    if (sum >= bandSize) {
      sum -= (len - 1) * realBarGap;
      realBarGap = 0;
    }
    if (sum >= bandSize && fullBarSize > 0) {
      useFull = true;
      fullBarSize *= 0.9;
      sum = len * fullBarSize;
    }

    const offset = ((bandSize - sum) / 2) >> 0;
    let prev: BarPosition['position'] = { offset: offset - realBarGap, size: 0 };

    result = sizeList.reduce((res, entry) => {
      const newPosition: BarPosition = {
        item: entry.item,
        position: {
          offset: prev.offset + prev.size + realBarGap,
          // @ts-expect-error the type check above does not check for type number explicitly
          size: useFull ? fullBarSize : entry.barSize,
        },
      };
      const newRes: Array<BarPosition> = [...res, newPosition];

      prev = newRes[newRes.length - 1].position;

      if (entry.stackList && entry.stackList.length) {
        entry.stackList.forEach(item => {
          newRes.push({ item, position: prev });
        });
      }
      return newRes;
    }, initialValue);
  } else {
    const offset = getPercentValue(barCategoryGap, bandSize, 0, true);

    if (bandSize - 2 * offset - (len - 1) * realBarGap <= 0) {
      realBarGap = 0;
    }

    let originalSize = (bandSize - 2 * offset - (len - 1) * realBarGap) / len;
    if (originalSize > 1) {
      originalSize >>= 0;
    }
    const size = maxBarSize === +maxBarSize ? Math.min(originalSize, maxBarSize) : originalSize;

    result = sizeList.reduce((res, entry, i) => {
      const newRes = [
        ...res,
        {
          item: entry.item,
          position: {
            offset: offset + (originalSize + realBarGap) * i + (originalSize - size) / 2,
            size,
          },
        },
      ];

      if (entry.stackList && entry.stackList.length) {
        entry.stackList.forEach(item => {
          newRes.push({ item, position: newRes[newRes.length - 1].position });
        });
      }
      return newRes;
    }, initialValue);
  }

  return result;
};

export const appendOffsetOfLegend = (
  offset: ChartOffset,
  _unused: unknown,
  props: {
    width?: number;
    margin: Margin;
    children?: ReactNode[];
  },
  legendBox: DOMRect | null,
): ChartOffset => {
  const { children, width, margin } = props;
  const legendWidth = width - (margin.left || 0) - (margin.right || 0);
  const legendProps = getLegendProps({ children, legendWidth });
  if (legendProps) {
    const { width: boxWidth, height: boxHeight } = legendBox || {};
    const { align, verticalAlign, layout } = legendProps;

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

const isErrorBarRelevantForAxis = (layout?: LayoutType, axisType?: AxisType, direction?: 'x' | 'y'): boolean => {
  if (_.isNil(axisType)) {
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

export const getDomainOfErrorBars = (
  data: Array<object>,
  item: ReactElement,
  dataKey: DataKey<any>,
  layout?: LayoutType,
  axisType?: AxisType,
): NumberDomain | null => {
  const { children } = item.props;
  const errorBars = findAllByType(children, ErrorBar).filter(errorBarChild =>
    isErrorBarRelevantForAxis(layout, axisType, errorBarChild.props.direction),
  );

  if (errorBars && errorBars.length) {
    const keys: ReadonlyArray<DataKey<any>> = errorBars.map(errorBarChild => errorBarChild.props.dataKey);

    return data.reduce<NumberDomain>(
      (result: NumberDomain, entry: object): NumberDomain => {
        const entryValue = getValueByDataKey(entry, dataKey, 0);
        const mainValue = _.isArray(entryValue) ? [_.min(entryValue), _.max(entryValue)] : [entryValue, entryValue];
        const errorDomain = keys.reduce(
          (prevErrorArr: [number, number], k: DataKey<any>): NumberDomain => {
            const errorValue = getValueByDataKey(entry, k, 0);
            const lowerValue = mainValue[0] - Math.abs(_.isArray(errorValue) ? errorValue[0] : errorValue);
            const upperValue = mainValue[1] + Math.abs(_.isArray(errorValue) ? errorValue[1] : errorValue);

            return [Math.min(lowerValue, prevErrorArr[0]), Math.max(upperValue, prevErrorArr[1])];
          },
          [Infinity, -Infinity],
        );

        return [Math.min(errorDomain[0], result[0]), Math.max(errorDomain[1], result[1])];
      },
      [Infinity, -Infinity],
    );
  }

  return null;
};

export const parseErrorBarsOfAxis = (
  data: any[],
  items: any[],
  dataKey: any,
  axisType: AxisType,
  layout?: LayoutType,
): NumberDomain | null => {
  const domains = items
    .map(item => getDomainOfErrorBars(data, item, dataKey, layout, axisType))
    .filter(entry => !_.isNil(entry));

  if (domains && domains.length) {
    return domains.reduce(
      (result, entry) => [Math.min(result[0], entry[0]), Math.max(result[1], entry[1])],
      [Infinity, -Infinity],
    );
  }

  return null;
};

/**
 * Get domain of data by the configuration of item element
 * @param  {Array}   data      The data displayed in the chart
 * @param  {Array}   items     The instances of item
 * @param  {String}  type      The type of axis, number - Number Axis, category - Category Axis
 * @param  {LayoutType} layout The type of layout
 * @param  {Boolean} filterNil Whether or not filter nil values
 * @return {Array}        Domain
 */
export const getDomainOfItemsWithSameAxis = (
  data: any[],
  items: ReactElement[],
  type: BaseAxisProps['type'],
  layout?: LayoutType,
  filterNil?: boolean,
) => {
  const domains: (NumberDomain | CategoricalDomain | null)[] = items.map(item => {
    const { dataKey } = item.props;

    if (type === 'number' && dataKey) {
      return getDomainOfErrorBars(data, item, dataKey, layout) || getDomainOfDataByKey(data, dataKey, type, filterNil);
    }
    return getDomainOfDataByKey(data, dataKey, type, filterNil);
  });

  if (type === 'number') {
    // Calculate the domain of number axis
    return domains.reduce(
      // @ts-expect-error if (type === number) means that the domain is numerical type
      // - but this link is missing in the type definition
      (result, entry) => [Math.min(result[0], entry[0]), Math.max(result[1], entry[1])],
      [Infinity, -Infinity],
    );
  }

  const tag: Record<string, any> = {};
  // Get the union set of category axis
  return domains.reduce((result, entry) => {
    for (let i = 0, len = entry.length; i < len; i++) {
      // @ts-expect-error Date cannot index an object
      if (!tag[entry[i]]) {
        // @ts-expect-error Date cannot index an object
        tag[entry[i]] = true;

        // @ts-expect-error Date cannot index an object
        result.push(entry[i]);
      }
    }
    return result;
  }, []);
};

export const isCategoricalAxis = (layout: LayoutType | PolarLayoutType, axisType: AxisType) =>
  (layout === 'horizontal' && axisType === 'xAxis') ||
  (layout === 'vertical' && axisType === 'yAxis') ||
  (layout === 'centric' && axisType === 'angleAxis') ||
  (layout === 'radial' && axisType === 'radiusAxis');

/**
 * Calculate the Coordinates of grid
 * @param  {Array} ticks           The ticks in axis
 * @param {Number} min             The minimun value of axis
 * @param {Number} max             The maximun value of axis
 * @param {boolean} syncWithTicks  Synchronize grid lines with ticks or not
 * @return {Array}                 Coordinates
 */
export const getCoordinatesOfGrid = (ticks: Array<TickItem>, min: number, max: number, syncWithTicks: Boolean) => {
  if (syncWithTicks) {
    return ticks.map(entry => entry.coordinate);
  }

  let hasMin, hasMax;

  const values = ticks.map(entry => {
    if (entry.coordinate === min) {
      hasMin = true;
    }
    if (entry.coordinate === max) {
      hasMax = true;
    }

    return entry.coordinate;
  });

  if (!hasMin) {
    values.push(min);
  }
  if (!hasMax) {
    values.push(max);
  }

  return values;
};

/**
 * Get the ticks of an axis
 * @param  {Object}  axis The configuration of an axis
 * @param {Boolean} isGrid Whether or not are the ticks in grid
 * @param {Boolean} isAll Return the ticks of all the points or not
 * @return {Array}  Ticks
 */
export const getTicksOfAxis = (
  axis: BaseAxisProps & {
    duplicateDomain?: any;
    realScaleType?: 'scaleBand' | 'band' | 'point' | 'linear';
    scale?: any;
    axisType?: AxisType;
    ticks?: any;
    niceTicks?: any;
    isCategorical?: boolean;
    categoricalDomain?: any;
  },
  isGrid?: boolean,
  isAll?: boolean,
): TickItem[] | null => {
  if (!axis) return null;
  const { scale } = axis;
  const { duplicateDomain, type, range } = axis;

  const offsetForBand = axis.realScaleType === 'scaleBand' ? scale.bandwidth() / 2 : 2;
  let offset = (isGrid || isAll) && type === 'category' && scale.bandwidth ? scale.bandwidth() / offsetForBand : 0;

  offset = axis.axisType === 'angleAxis' && range?.length >= 2 ? mathSign(range[0] - range[1]) * 2 * offset : offset;

  // The ticks set by user should only affect the ticks adjacent to axis line
  if (isGrid && (axis.ticks || axis.niceTicks)) {
    const result = (axis.ticks || axis.niceTicks).map((entry: TickItem) => {
      const scaleContent = duplicateDomain ? duplicateDomain.indexOf(entry) : entry;

      return {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: scale(scaleContent) + offset,
        value: entry,
        offset,
      };
    });

    return result.filter((row: TickItem) => !_.isNaN(row.coordinate));
  }

  // When axis is a categorial axis, but the type of axis is number or the scale of axis is not "auto"
  if (axis.isCategorical && axis.categoricalDomain) {
    return axis.categoricalDomain.map((entry: any, index: number) => ({
      coordinate: scale(entry) + offset,
      value: entry,
      index,
      offset,
    }));
  }

  if (scale.ticks && !isAll) {
    return scale
      .ticks(axis.tickCount)
      .map((entry: any) => ({ coordinate: scale(entry) + offset, value: entry, offset }));
  }

  // When axis has duplicated text, serial numbers are used to generate scale
  return scale.domain().map((entry: any, index: number) => ({
    coordinate: scale(entry) + offset,
    value: duplicateDomain ? duplicateDomain[entry] : entry,
    index,
    offset,
  }));
};

/**
 * combine the handlers
 * @param  {Function} defaultHandler Internal private handler
 * @param  {Function} parentHandler  Handler function specified in parent component
 * @param  {Function} childHandler   Handler function specified in child component
 * @return {Function}                The combined handler
 */
export const combineEventHandlers = (defaultHandler: Function, parentHandler: Function, childHandler: Function) => {
  let customizedHandler: Function;

  if (_.isFunction(childHandler)) {
    customizedHandler = childHandler;
  } else if (_.isFunction(parentHandler)) {
    customizedHandler = parentHandler;
  }

  if (_.isFunction(defaultHandler) || customizedHandler) {
    return (arg1: any, arg2: any, arg3: any, arg4: any) => {
      if (_.isFunction(defaultHandler)) {
        defaultHandler(arg1, arg2, arg3, arg4);
      }
      if (_.isFunction(customizedHandler)) {
        customizedHandler(arg1, arg2, arg3, arg4);
      }
    };
  }

  return null;
};

/**
 * Parse the scale function of axis
 * @param  {Object}   axis          The option of axis
 * @param  {String}   chartType     The displayName of chart
 * @param  {Boolean}  hasBar        if it has a bar
 * @return {object}               The scale function and resolved name
 */
export const parseScale = (
  axis: {
    scale: 'auto' | string | Function;
    type?: BaseAxisProps['type'];
    layout?: 'radial' | unknown;
    axisType?: 'radiusAxis' | 'angleAxis' | unknown;
  },
  chartType?: string,
  hasBar?: boolean,
): { scale: any; realScaleType?: string } => {
  const { scale, type, layout, axisType } = axis;
  if (scale === 'auto') {
    if (layout === 'radial' && axisType === 'radiusAxis') {
      return { scale: d3Scales.scaleBand(), realScaleType: 'band' };
    }
    if (layout === 'radial' && axisType === 'angleAxis') {
      return { scale: d3Scales.scaleLinear(), realScaleType: 'linear' };
    }

    if (
      type === 'category' &&
      chartType &&
      (chartType.indexOf('LineChart') >= 0 ||
        chartType.indexOf('AreaChart') >= 0 ||
        (chartType.indexOf('ComposedChart') >= 0 && !hasBar))
    ) {
      return { scale: d3Scales.scalePoint(), realScaleType: 'point' };
    }
    if (type === 'category') {
      return { scale: d3Scales.scaleBand(), realScaleType: 'band' };
    }

    return { scale: d3Scales.scaleLinear(), realScaleType: 'linear' };
  }
  if (_.isString(scale)) {
    const name = `scale${_.upperFirst(scale)}`;

    return {
      scale: ((d3Scales as Record<string, any>)[name] || d3Scales.scalePoint)(),
      realScaleType: (d3Scales as Record<string, any>)[name] ? name : 'point',
    };
  }

  return _.isFunction(scale) ? { scale } : { scale: d3Scales.scalePoint(), realScaleType: 'point' };
};
const EPS = 1e-4;
export const checkDomainOfScale = (scale: any) => {
  const domain = scale.domain();

  if (!domain || domain.length <= 2) {
    return;
  }

  const len = domain.length;
  const range = scale.range();
  const min = Math.min(range[0], range[1]) - EPS;
  const max = Math.max(range[0], range[1]) + EPS;
  const first = scale(domain[0]);
  const last = scale(domain[len - 1]);

  if (first < min || first > max || last < min || last > max) {
    scale.domain([domain[0], domain[len - 1]]);
  }
};

export const findPositionOfBar = (barPosition: any[], child: ReactNode) => {
  if (!barPosition) {
    return null;
  }

  for (let i = 0, len = barPosition.length; i < len; i++) {
    if (barPosition[i].item === child) {
      return barPosition[i].position;
    }
  }

  return null;
};

/**
 * Both value and domain are tuples of two numbers
 * - but the type stays as array of numbers until we have better support in rest of the app
 * @param {Array} value input that will be truncated
 * @param {Array} domain boundaries
 * @returns {Array} tuple of two numbers
 */
export const truncateByDomain = (value: [number, number], domain: number[]) => {
  if (!domain || domain.length !== 2 || !isNumber(domain[0]) || !isNumber(domain[1])) {
    return value;
  }

  const min = Math.min(domain[0], domain[1]);
  const max = Math.max(domain[0], domain[1]);

  const result = [value[0], value[1]];
  if (!isNumber(value[0]) || value[0] < min) {
    result[0] = min;
  }

  if (!isNumber(value[1]) || value[1] > max) {
    result[1] = max;
  }

  if (result[0] > max) {
    result[0] = max;
  }

  if (result[1] < min) {
    result[1] = min;
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
      const value = _.isNaN(series[i][j][1]) ? series[i][j][0] : series[i][j][1];

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
      const value = _.isNaN(series[i][j][1]) ? series[i][j][0] : series[i][j][1];

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
  stackItems: ReadonlyArray<{ props: { dataKey?: DataKey<any> } }>,
  offsetType: StackOffsetType,
): ReadonlyArray<Series<Record<string, unknown>, string>> => {
  const dataKeys = stackItems.map(item => item.props.dataKey);
  const offsetAccessor: OffsetAccessor = STACK_OFFSET_MAP[offsetType];
  const stack = shapeStack<Record<string, unknown>>()
    // @ts-expect-error stack.keys type wants an array of strings, but we provide array of DataKeys
    .keys(dataKeys)
    .value((d, key) => +getValueByDataKey(d, key, 0))
    .order(stackOrderNone)
    // @ts-expect-error definitelytyped types are incorrect
    .offset(offsetAccessor);

  return stack(data);
};

type AxisId = string;
export type StackId = string | number | symbol;

export type ParentStackGroup = {
  hasStack: boolean;
  stackGroups: Record<StackId, ChildStackGroup>;
};

export type GenericChildStackGroup<T> = {
  numericAxisId: string;
  cateAxisId: string;
  items: Array<ReactElement>;
  stackedData?: ReadonlyArray<T>;
};

export type ChildStackGroup = GenericChildStackGroup<Series<Record<string, unknown>, string>>;

export type AxisStackGroups = Record<AxisId, ParentStackGroup>;

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
            stackedData: getStackedData(data, g.items, offsetType),
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

    scale.domain([_.min(tickValues), _.max(tickValues)]);

    return { niceTicks: tickValues };
  }
  if (tickCount && type === 'number') {
    const domain = scale.domain();
    const tickValues = getTickValuesFixedDomain(domain, tickCount, allowDecimals);

    return { niceTicks: tickValues };
  }

  return null;
};

export const getCateCoordinateOfLine = ({
  axis,
  ticks,
  bandSize,
  entry,
  index,
  dataKey,
}: {
  axis: any;
  ticks: Array<TickItem>;
  bandSize: number;
  entry: any;
  index: number;
  dataKey?: string | number | ((obj: any) => any);
}) => {
  if (axis.type === 'category') {
    // find coordinate of category axis by the value of category
    if (!axis.allowDuplicatedCategory && axis.dataKey && !_.isNil(entry[axis.dataKey])) {
      const matchedTick = findEntryInArray(ticks, 'value', entry[axis.dataKey]);

      if (matchedTick) {
        return matchedTick.coordinate + bandSize / 2;
      }
    }

    return ticks[index] ? ticks[index].coordinate + bandSize / 2 : null;
  }

  const value = getValueByDataKey(entry, !_.isNil(dataKey) ? dataKey : axis.dataKey);

  return !_.isNil(value) ? axis.scale(value) : null;
};

export const getCateCoordinateOfBar = ({
  axis,
  ticks,
  offset,
  bandSize,
  entry,
  index,
}: {
  axis: any; // RadiusAxisProps & { dataKey?: any }; // TODO: should dataKey be included in RadiusAxisProps?
  ticks: Array<TickItem>;
  offset: any;
  bandSize: number;
  entry: any;
  index: number;
}) => {
  if (axis.type === 'category') {
    return ticks[index] ? ticks[index].coordinate + offset : null;
  }
  const value = getValueByDataKey(entry, axis.dataKey, axis.domain[index]);

  return !_.isNil(value) ? axis.scale(value) - bandSize / 2 + offset : null;
};

export const getBaseValueOfBar = ({
  numericAxis,
}: {
  numericAxis: any; // AngleAxisProps | RadiusAxisProps
}) => {
  const domain = numericAxis.scale.domain();

  if (numericAxis.type === 'number') {
    const min = Math.min(domain[0], domain[1]);
    const max = Math.max(domain[0], domain[1]);

    if (min <= 0 && max >= 0) {
      return 0;
    }
    if (max < 0) {
      return max;
    }

    return min;
  }

  return domain[0];
};

export const getStackedDataOfItem = <StackedData>(
  item: ReactElement,
  stackGroups: Record<StackId, GenericChildStackGroup<StackedData>>,
): StackedData | null => {
  const { stackId } = item.props;

  if (isNumOrStr(stackId)) {
    const group = stackGroups[stackId];

    if (group) {
      const itemIndex = group.items.indexOf(item);
      return itemIndex >= 0 ? group.stackedData[itemIndex] : null;
    }
  }

  return null;
};

const getDomainOfSingle = (data: Array<Array<any>>): number[] =>
  data.reduce(
    (result: number[], entry: Array<any>): number[] => [
      _.min(entry.concat([result[0]]).filter(isNumber)),
      _.max(entry.concat([result[1]]).filter(isNumber)),
    ],
    [Infinity, -Infinity],
  );

export const getDomainOfStackGroups = (
  stackGroups: Record<StackId, ChildStackGroup>,
  startIndex: number,
  endIndex: number,
) =>
  Object.keys(stackGroups)
    .reduce(
      (result, stackId) => {
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
    )
    .map(result => (result === Infinity || result === -Infinity ? 0 : result));

export const MIN_VALUE_REG = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/;
export const MAX_VALUE_REG = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/;

export const parseSpecifiedDomain = (specifiedDomain: any, dataDomain: any, allowDataOverflow?: boolean) => {
  if (_.isFunction(specifiedDomain)) {
    return specifiedDomain(dataDomain, allowDataOverflow);
  }

  if (!_.isArray(specifiedDomain)) {
    return dataDomain;
  }

  const domain = [];

  /* eslint-disable prefer-destructuring */
  if (isNumber(specifiedDomain[0])) {
    domain[0] = allowDataOverflow ? specifiedDomain[0] : Math.min(specifiedDomain[0], dataDomain[0]);
  } else if (MIN_VALUE_REG.test(specifiedDomain[0])) {
    const value = +MIN_VALUE_REG.exec(specifiedDomain[0])[1];

    domain[0] = dataDomain[0] - value;
  } else if (_.isFunction(specifiedDomain[0])) {
    domain[0] = specifiedDomain[0](dataDomain[0]);
  } else {
    domain[0] = dataDomain[0];
  }

  if (isNumber(specifiedDomain[1])) {
    domain[1] = allowDataOverflow ? specifiedDomain[1] : Math.max(specifiedDomain[1], dataDomain[1]);
  } else if (MAX_VALUE_REG.test(specifiedDomain[1])) {
    const value = +MAX_VALUE_REG.exec(specifiedDomain[1])[1];

    domain[1] = dataDomain[1] + value;
  } else if (_.isFunction(specifiedDomain[1])) {
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
  axis?: BaseAxisProps,
  ticks?: Array<TickItem>,
  isBar?: boolean,
): number | undefined => {
  // @ts-expect-error we need to rethink scale type
  if (axis && axis.scale && axis.scale.bandwidth) {
    // @ts-expect-error we need to rethink scale type
    const bandWidth = axis.scale.bandwidth();

    if (!isBar || bandWidth > 0) {
      return bandWidth;
    }
  }

  if (axis && ticks && ticks.length >= 2) {
    const orderedTicks = _.sortBy(ticks, o => o.coordinate);
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
  if (_.isEqual(specifiedDomain, _.get(axisChild, 'type.defaultProps.domain'))) {
    return calculatedDomain;
  }

  return specifiedDomain;
};

export const getTooltipItem = (graphicalItem: ReactElement, payload: any) => {
  const { dataKey, name, unit, formatter, tooltipType, chartType } = graphicalItem.props;

  return {
    ...filterProps(graphicalItem),
    dataKey,
    unit,
    formatter,
    name: name || dataKey,
    color: getMainColorOfGraphicItem(graphicalItem),
    value: getValueByDataKey(payload, dataKey),
    type: tooltipType,
    payload,
    chartType,
  };
};
