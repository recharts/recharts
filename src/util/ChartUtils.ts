import _ from 'lodash';
import { getNiceTickValues, getTickValuesFixedDomain } from 'recharts-scale';
import * as d3Scales from 'd3-scale';
import {
  stack as shapeStack,
  stackOrderNone,
  stackOffsetExpand,
  stackOffsetNone,
  stackOffsetSilhouette,
  stackOffsetWiggle,
} from 'd3-shape';
import { ReactElement, ReactNode } from 'react';
import { isNumOrStr, uniqueId, isNumber, getPercentValue, mathSign, findEntryInArray } from './DataUtils';
import { Legend } from '../component/Legend';
import { findAllByType, findChildByType, getDisplayName } from './ReactUtils';
// TODO: Cause of circular dependency. Needs refactor.
// import { RadiusAxisProps, AngleAxisProps } from '../polar/types';
import { LayoutType, PolarLayoutType, AxisType, TickItem, BaseAxisProps, DataKey, filterProps } from './types';

export function getValueByDataKey<T>(obj: T, dataKey: DataKey<any>, defaultValue?: any) {
  if (_.isNil(obj) || _.isNil(dataKey)) {
    return defaultValue;
  }

  if (isNumOrStr(dataKey as string)) {
    return _.get(obj, dataKey as string, defaultValue);
  }

  if (_.isFunction(dataKey)) {
    return dataKey(obj);
  }

  return defaultValue;
}
/**
 * Get domain of data by key
 * @param  {Array}   data      The data displayed in the chart
 * @param  {String}  key       The unique key of a group of data
 * @param  {String}  type      The type of axis
 * @param  {Boolean} filterNil Whether or not filter nil values
 * @return {Array} Domain of data
 */
export function getDomainOfDataByKey<T>(data: Array<T>, key: string, type: string, filterNil?: boolean) {
  const flattenData = _.flatMap(data, entry => getValueByDataKey(entry, key));

  if (type === 'number') {
    const domain = flattenData.filter(entry => isNumber(entry) || parseFloat(entry));

    return domain.length ? [_.min(domain), _.max(domain)] : [Infinity, -Infinity];
  }

  const validateData = filterNil ? flattenData.filter(entry => !_.isNil(entry)) : flattenData;

  // 支持Date类型的x轴
  return validateData.map(entry => (isNumOrStr(entry) || entry instanceof Date ? entry : ''));
}

export const calculateActiveTickIndex = (
  coordinate: number,
  ticks: Array<TickItem> = [],
  unsortedTicks: Array<TickItem>,
  axis: BaseAxisProps,
) => {
  let index = -1;
  const len = ticks?.length ?? 0;

  if (len > 1) {
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
  } else {
    index = 0;
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

// TODO: Formated -> Formatted.
interface FormatedGraphicalItem {
  props: any;
  childIndex: number;
  item: any;
}

export const getLegendProps = ({
  children,
  formatedGraphicalItems,
  legendWidth,
  legendContent,
}: {
  children: any;
  formatedGraphicalItems?: Array<FormatedGraphicalItem>;
  legendWidth: number;
  legendContent?: any;
}) => {
  const legendItem = findChildByType(children, Legend.displayName);
  if (!legendItem) {
    return null;
  }

  let legendData;
  if (legendItem.props && legendItem.props.payload) {
    legendData = legendItem.props && legendItem.props.payload;
  } else if (legendContent === 'children') {
    legendData = (formatedGraphicalItems || []).reduce((result, { item, props }) => {
      const data = props.sectors || props.data || [];

      return result.concat(
        data.map((entry: any) => ({
          type: legendItem.props.iconType || item.props.legendType,
          value: entry.name,
          color: entry.fill,
          payload: entry,
        })),
      );
    }, []);
  } else {
    legendData = (formatedGraphicalItems || []).map(({ item }) => {
      const { dataKey, name, legendType, hide } = item.props;

      return {
        inactive: hide,
        dataKey,
        type: legendItem.props.iconType || legendType || 'square',
        color: getMainColorOfGraphicItem(item),
        value: name || dataKey,
        payload: item.props,
      };
    });
  }

  return {
    ...legendItem.props,
    ...Legend.getWithHeight(legendItem, legendWidth),
    payload: legendData,
    item: legendItem,
  };
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
  stackGroups: any;
}) => {
  if (!stackGroups) {
    return {};
  }

  const result: Record<string, any> = {};
  const numericAxisIds = Object.keys(stackGroups);

  for (let i = 0, len = numericAxisIds.length; i < len; i++) {
    const sgs = stackGroups[numericAxisIds[i]].stackGroups;
    const stackIds = Object.keys(sgs);

    for (let j = 0, sLen = stackIds.length; j < sLen; j++) {
      const { items, cateAxisId } = sgs[stackIds[j]];

      const barItems = items.filter((item: any) => getDisplayName(item.type).indexOf('Bar') >= 0);

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

/**
 * Calculate the size of each bar and the gap between two bars
 * @param  {Number} bandSize  The size of each category
 * @param  {sizeList} sizeList  The size of all groups
 * @param  {maxBarSize} maxBarSize The maximum size of bar
 * @return {Number} The size of each bar and the gap between two bars
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
  sizeList: Array<any>;
  maxBarSize: number;
}) => {
  const len = sizeList.length;
  if (len < 1) return null;

  let realBarGap = getPercentValue(barGap, bandSize, 0, true);
  let result;

  // whether or not is barSize setted by user
  if (sizeList[0].barSize === +sizeList[0].barSize) {
    let useFull = false;
    let fullBarSize = bandSize / len;
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
    let prev = { offset: offset - realBarGap, size: 0 };

    result = sizeList.reduce((res, entry) => {
      const newRes = [
        ...res,
        {
          item: entry.item,
          position: {
            offset: prev.offset + prev.size + realBarGap,
            size: useFull ? fullBarSize : entry.barSize,
          },
        },
      ];

      prev = newRes[newRes.length - 1].position;

      if (entry.stackList && entry.stackList.length) {
        entry.stackList.forEach((item: any) => {
          newRes.push({ item, position: prev });
        });
      }
      return newRes;
    }, []);
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
        entry.stackList.forEach((item: any) => {
          newRes.push({ item, position: newRes[newRes.length - 1].position });
        });
      }
      return newRes;
    }, []);
  }

  return result;
};

export const appendOffsetOfLegend = (offset: any, items: Array<FormatedGraphicalItem>, props: any, legendBox: any) => {
  const { children, width, margin } = props;
  const legendWidth = width - (margin.left || 0) - (margin.right || 0);
  // const legendHeight = height - (margin.top || 0) - (margin.bottom || 0);
  const legendProps = getLegendProps({ children, legendWidth });
  let newOffset = offset;

  if (legendProps) {
    const box = legendBox || {};
    const { align, verticalAlign, layout } = legendProps;

    if ((layout === 'vertical' || (layout === 'horizontal' && verticalAlign === 'center')) && isNumber(offset[align])) {
      newOffset = { ...offset, [align]: newOffset[align] + (box.width || 0) };
    }

    if ((layout === 'horizontal' || (layout === 'vertical' && align === 'center')) && isNumber(offset[verticalAlign])) {
      newOffset = { ...offset, [verticalAlign]: newOffset[verticalAlign] + (box.height || 0) };
    }
  }

  return newOffset;
};

export const getDomainOfErrorBars = (data: any[], item: any, dataKey: any, axisType?: AxisType) => {
  const { children } = item.props;
  const errorBars = findAllByType(children, 'ErrorBar').filter((errorBarChild: any) => {
    const { direction } = errorBarChild.props;

    return _.isNil(direction) || _.isNil(axisType) ? true : axisType.indexOf(direction) >= 0;
  });

  if (errorBars && errorBars.length) {
    const keys = errorBars.map((errorBarChild: any) => errorBarChild.props.dataKey);

    return data.reduce(
      (result, entry) => {
        const entryValue = getValueByDataKey(entry, dataKey, 0);
        const mainValue = _.isArray(entryValue) ? [_.min(entryValue), _.max(entryValue)] : [entryValue, entryValue];
        const errorDomain = keys.reduce(
          (prevErrorArr: [number, number], k: any) => {
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
export const parseErrorBarsOfAxis = (data: any[], items: any[], dataKey: any, axisType: AxisType) => {
  const domains = items
    .map(item => getDomainOfErrorBars(data, item, dataKey, axisType))
    .filter(entry => !_.isNil(entry));

  if (domains && domains.length) {
    return domains.reduce((result, entry) => [Math.min(result[0], entry[0]), Math.max(result[1], entry[1])], [
      Infinity,
      -Infinity,
    ]);
  }

  return null;
};
/**
 * Get domain of data by the configuration of item element
 * @param  {Array}   data      The data displayed in the chart
 * @param  {Array}   items     The instances of item
 * @param  {String}  type      The type of axis, number - Number Axis, category - Category Axis
 * @param  {Boolean} filterNil Whether or not filter nil values
 * @return {Array}        Domain
 */
export const getDomainOfItemsWithSameAxis = (data: any[], items: any[], type: string, filterNil?: boolean) => {
  const domains = items.map(item => {
    const { dataKey } = item.props;

    if (type === 'number' && dataKey) {
      return getDomainOfErrorBars(data, item, dataKey) || getDomainOfDataByKey(data, dataKey, type, filterNil);
    }
    return getDomainOfDataByKey(data, dataKey, type, filterNil);
  });

  if (type === 'number') {
    // Calculate the domain of number axis
    return domains.reduce((result, entry) => [Math.min(result[0], entry[0]), Math.max(result[1], entry[1])], [
      Infinity,
      -Infinity,
    ]);
  }

  const tag: Record<string, any> = {};
  // Get the union set of category axis
  return domains.reduce((result, entry) => {
    for (let i = 0, len = entry.length; i < len; i++) {
      if (!tag[entry[i]]) {
        tag[entry[i]] = true;

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
 * @param  {Array} ticks The ticks in axis
 * @param {Number} min   The minimun value of axis
 * @param {Number} max   The maximun value of axis
 * @return {Array}       Coordinates
 */
export const getCoordinatesOfGrid = (ticks: Array<TickItem>, min: number, max: number) => {
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
export const getTicksOfAxis = (axis: any, isGrid?: boolean, isAll?: boolean): TickItem[] => {
  if (!axis) return null;
  const { scale } = axis;
  const { duplicateDomain, type, range } = axis;
  let offset = (isGrid || isAll) && type === 'category' && scale.bandwidth ? scale.bandwidth() / 2 : 0;
  offset = axis.axisType === 'angleAxis' ? mathSign(range[0] - range[1]) * 2 * offset : offset;

  // The ticks setted by user should only affect the ticks adjacent to axis line
  if (isGrid && (axis.ticks || axis.niceTicks)) {
    return (axis.ticks || axis.niceTicks).map((entry: TickItem) => {
      const scaleContent = duplicateDomain ? duplicateDomain.indexOf(entry) : entry;

      return {
        coordinate: scale(scaleContent) + offset,
        value: entry,
        offset,
      };
    });
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
 * @return {Function}               The scale function
 */
export const parseScale = (axis: any, chartType: string, hasBar?: boolean) => {
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

export const truncateByDomain = (value: any[], domain: any[]) => {
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

/* eslint no-param-reassign: 0 */
export const offsetSign = (series: any) => {
  const n = series.length;
  if (n <= 0) {
    return;
  }

  for (let j = 0, m = series[0].length; j < m; ++j) {
    let positive = 0;
    let negative = 0;

    for (let i = 0; i < n; ++i) {
      const value = _.isNaN(series[i][j][1]) ? series[i][j][0] : series[i][j][1];

      /* eslint-disable prefer-destructuring */
      if (value >= 0) {
        series[i][j][0] = positive;
        series[i][j][1] = positive + value;
        positive = series[i][j][1];
      } else {
        series[i][j][0] = negative;
        series[i][j][1] = negative + value;
        negative = series[i][j][1];
      }
      /* eslint-enable prefer-destructuring */
    }
  }
};

/* eslint no-param-reassign: 0 */
export const offsetPositive = (series: any) => {
  const n = series.length;
  if (n <= 0) {
    return;
  }

  for (let j = 0, m = series[0].length; j < m; ++j) {
    let positive = 0;

    for (let i = 0; i < n; ++i) {
      const value = _.isNaN(series[i][j][1]) ? series[i][j][0] : series[i][j][1];

      /* eslint-disable prefer-destructuring */
      if (value >= 0) {
        series[i][j][0] = positive;
        series[i][j][1] = positive + value;
        positive = series[i][j][1];
      } else {
        series[i][j][0] = 0;
        series[i][j][1] = 0;
      }
      /* eslint-enable prefer-destructuring */
    }
  }
};

const STACK_OFFSET_MAP: Record<string, any> = {
  sign: offsetSign,
  expand: stackOffsetExpand,
  none: stackOffsetNone,
  silhouette: stackOffsetSilhouette,
  wiggle: stackOffsetWiggle,
  positive: offsetPositive,
};

export const getStackedData = (data: any, stackItems: any, offsetType: string) => {
  const dataKeys = stackItems.map((item: any) => item.props.dataKey);
  const stack = shapeStack()
    .keys(dataKeys)
    .value((d, key) => +getValueByDataKey(d, key, 0))
    .order(stackOrderNone)
    .offset(STACK_OFFSET_MAP[offsetType]);

  return stack(data);
};

export const getStackGroupsByAxisId = (
  data: any,
  _items: Array<any>,
  numericAxisId: string,
  cateAxisId: string,
  offsetType: any,
  reverseStackOrder: boolean,
) => {
  if (!data) {
    return null;
  }

  // reversing items to affect render order (for layering)
  const items = reverseStackOrder ? _items.reverse() : _items;

  const stackGroups = items.reduce((result, item) => {
    const { stackId, hide } = item.props;

    if (hide) {
      return result;
    }

    const axisId = item.props[numericAxisId];
    const parentGroup = result[axisId] || { hasStack: false, stackGroups: {} };

    if (isNumOrStr(stackId)) {
      const childGroup = parentGroup.stackGroups[stackId] || {
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
  }, {});

  return Object.keys(stackGroups).reduce((result, axisId) => {
    const group = stackGroups[axisId];

    if (group.hasStack) {
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
      }, {});
    }

    return { ...result, [axisId]: group };
  }, {});
};

/**
 * get domain of ticks
 * @param  {Array} ticks Ticks of axis
 * @param  {String} type  The type of axis
 * @return {Array} domain
 */
export const calculateDomainOfTicks = (ticks: Array<TickItem>, type: string) => {
  if (type === 'number') {
    return [_.min(ticks), _.max(ticks)];
  }

  return ticks;
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

    scale.domain(calculateDomainOfTicks(tickValues, type));

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

export const getStackedDataOfItem = (item: any, stackGroups: any) => {
  const { stackId } = item.props;

  if (isNumOrStr(stackId)) {
    const group = stackGroups[stackId];

    if (group && group.items.length) {
      let itemIndex = -1;

      for (let i = 0, len = group.items.length; i < len; i++) {
        if (group.items[i] === item) {
          itemIndex = i;
          break;
        }
      }
      return itemIndex >= 0 ? group.stackedData[itemIndex] : null;
    }
  }

  return null;
};

const getDomainOfSingle = (data: Array<any>) =>
  data.reduce(
    (result, entry) => [
      _.min(entry.concat([result[0]]).filter(isNumber)),
      _.max(entry.concat([result[1]]).filter(isNumber)),
    ],
    [Infinity, -Infinity],
  );

export const getDomainOfStackGroups = (stackGroups: any, startIndex: number, endIndex: number) =>
  Object.keys(stackGroups)
    .reduce(
      (result, stackId) => {
        const group = stackGroups[stackId];
        const { stackedData } = group;
        const domain = stackedData.reduce(
          (res: [number, number], entry: any) => {
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

export const parseSpecifiedDomain = (specifiedDomain: any, dataDomain: any, allowDataOverflow: boolean) => {
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
export const getBandSizeOfAxis = (axis: any, ticks?: Array<TickItem>, isBar?: boolean) => {
  if (axis && axis.scale && axis.scale.bandwidth) {
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

  return 0;
};
/**
 * parse the domain of a category axis when a domain is specified
 * @param   {Array}        specifiedDomain  The domain specified by users
 * @param   {Array}        calculatedDomain The domain calculated by dateKey
 * @param   {ReactElement} axisChild        The axis element
 * @returns {Array}        domains
 */
export const parseDomainOfCategoryAxis = (
  specifiedDomain: Array<any>,
  calculatedDomain: Array<any>,
  axisChild: ReactElement,
) => {
  if (!specifiedDomain || !specifiedDomain.length) {
    return calculatedDomain;
  }

  if (_.isEqual(specifiedDomain, _.get(axisChild, 'type.defaultProps.domain'))) {
    return calculatedDomain;
  }

  return specifiedDomain;
};

export const getTooltipItem = (graphicalItem: any, payload: any) => {
  const { dataKey, name, unit, formatter, tooltipType } = graphicalItem.props;

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
  };
};
