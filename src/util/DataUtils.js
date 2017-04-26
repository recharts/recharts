import _ from 'lodash';
import { getNiceTickValues, getTickValuesFixedDomain } from 'recharts-scale';
import * as d3Scales from 'd3-scale';
import {
  stack as shapeStack, stackOrderNone, stackOffsetExpand,
  stackOffsetNone, stackOffsetSilhouette, stackOffsetWiggle,
} from 'd3-shape';

export const mathSign = (value) => {
  if (value === 0) { return 0; }
  if (value > 0) { return 1; }

  return -1;
};

export const isPercent = value => (
  _.isString(value) && value.indexOf('%') === value.length - 1
);

export const isNumber = value => (
  _.isNumber(value) && !_.isNaN(value)
);

export const isNumOrStr = value => (
  isNumber(value) || _.isString(value)
);

let idCounter = 0;
export const uniqueId = (prefix) => {
  const id = ++idCounter;

  return `${prefix || ''}${id}`;
};
/**
 * Get percent value of a total value
 * @param {Number|String} percent A percent
 * @param {Number} totalValue     Total value
 * @param {NUmber} defaultValue   The value returned when percent is undefined or invalid
 * @param {Boolean} validate      If set to be true, the result will be validated
 * @return {Number} value
 */
export const getPercentValue = (percent, totalValue, defaultValue = 0, validate = false) => {
  if (!isNumber(percent) && !_.isString(percent)) {
    return defaultValue;
  }

  let value;

  if (isPercent(percent)) {
    const index = percent.indexOf('%');
    value = totalValue * parseFloat(percent.slice(0, index)) / 100;
  } else {
    value = +percent;
  }

  if (isNaN(value)) {
    value = defaultValue;
  }

  if (validate && value > totalValue) {
    value = totalValue;
  }

  return value;
};

const MIN_VALUE_REG = /^dataMin[\s]*-[\s]*([\d]+)$/;
const MAX_VALUE_REG = /^dataMax[\s]*\+[\s]*([\d]+)$/;

export const parseSpecifiedDomain = (specifiedDomain, dataDomain, allowDataOverflow) => {
  if (!_.isArray(specifiedDomain)) {
    return dataDomain;
  }

  const domain = [];

  if (isNumber(specifiedDomain[0])) {
    domain[0] = allowDataOverflow ?
      specifiedDomain[0] : Math.min(specifiedDomain[0], dataDomain[0]);
  } else if (MIN_VALUE_REG.test(specifiedDomain[0])) {
    const value = +MIN_VALUE_REG.exec(specifiedDomain[0])[1];

    domain[0] = dataDomain[0] - value;
  } else {
    domain[0] = dataDomain[0];
  }

  if (isNumber(specifiedDomain[1])) {
    domain[1] = allowDataOverflow ?
      specifiedDomain[1] : Math.max(specifiedDomain[1], dataDomain[1]);
  } else if (MAX_VALUE_REG.test(specifiedDomain[1])) {
    const value = +MAX_VALUE_REG.exec(specifiedDomain[1])[1];

    domain[1] = dataDomain[1] + value;
  } else {
    domain[1] = dataDomain[1];
  }

  return domain;
};

export const validateCoordinateInRange = (coordinate, scale) => {
  if (!scale) { return false; }

  const range = scale.range();
  const first = range[0];
  const last = range[range.length - 1];
  const isValidate = first <= last ?
    (coordinate >= first && coordinate <= last) :
    (coordinate >= last && coordinate <= first);

  return isValidate;
};

/**
 * Calculate the size between two category
 * @param  {Object} axis  The options of axis
 * @param  {Array}  ticks The ticks of axis
 * @return {Number} Size
 */
export const getBandSizeOfAxis = (axis, ticks) => {
  if (axis && axis.scale && axis.scale.bandwidth) {
    return axis.scale.bandwidth();
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


export const getAnyElementOfObject = (obj) => {
  if (!obj) { return null; }

  const keys = Object.keys(obj);

  if (keys && keys.length) {
    return obj[keys[0]];
  }

  return null;
};

export const hasDuplicate = (ary) => {
  if (!_.isArray(ary)) { return false; }

  const len = ary.length;
  const cache = {};

  for (let i = 0; i < len; i++) {
    if (!cache[ary[i]]) {
      cache[ary[i]] = true;
    } else {
      return true;
    }
  }

  return false;
};
/**
 * combine the handlers
 * @param  {Function} defaultHandler Internal private handler
 * @param  {Function} parentHandler  Handler function specified in parent component
 * @param  {Function} childHandler   Handler function specified in child component
 * @return {Function}                The combined handler
 */
export const combineEventHandlers = (defaultHandler, parentHandler, childHandler) => {
  let customizedHandler;

  if (_.isFunction(childHandler)) {
    customizedHandler = childHandler;
  } else if (_.isFunction(parentHandler)) {
    customizedHandler = parentHandler;
  }

  if (_.isFunction(defaultHandler) || customizedHandler) {
    return (arg1, arg2, arg3, arg4) => {
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
 * @param  {String}   options.scale The specified scale type
 * @param  {String}   options.type  The type of axis
 * @param  {String}   chartType     The displayName of chart
 * @return {Function}               The scale funcion
 */
export const parseScale = ({ scale, type }, chartType) => {
  if (scale === 'auto') {
    if (type === 'category' && chartType && (chartType.indexOf('LineChart') >= 0 ||
      chartType.indexOf('AreaChart') >= 0)) {
      return d3Scales.scalePoint();
    } else if (type === 'category') {
      return d3Scales.scaleBand();
    }

    return d3Scales.scaleLinear();
  } else if (_.isString(scale)) {
    const name = `scale${scale.slice(0, 1).toUpperCase()}${scale.slice(1)}`;

    return (d3Scales[name] || d3Scales.scalePoint)();
  }

  return _.isFunction(scale) ? scale : d3Scales.scalePoint();
};
const EPS = 1e-4;
export const checkDomainOfScale = (scale) => {
  const domain = scale.domain();

  if (!domain || domain.length <= 2) { return; }

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

export const getValueByDataKey = (obj, dataKey, defaultValue) => {
  if (_.isNil(obj) || _.isNil(dataKey)) { return defaultValue; }

  if (isNumOrStr(dataKey)) { return _.get(obj, dataKey, defaultValue); }

  if (_.isFunction(dataKey)) { return dataKey(obj); }

  return defaultValue;
};


export const findPositionOfBar = (barPosition, child) => {
  if (!barPosition) { return null; }

  for (let i = 0, len = barPosition.length; i < len; i++) {
    if (barPosition[i].item === child) {
      return barPosition[i].position;
    }
  }

  return null;
};

export const truncateByDomain = (value, domain) => {
  if (!domain || domain.length !== 2 || !isNumber(domain[0]) ||
    !isNumber(domain[1])) {
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

  if (result[0] > max) { result[0] = max; }

  if (result[1] < min) { result[1] = min; }

  return result;
};

/* eslint no-param-reassign: 0 */
export const offsetSign = (series) => {
  const n = series.length;
  if (n <= 0) { return; }

  for (let j = 0, m = series[0].length; j < m; ++j) {
    let positive = 0;
    let negative = 0;

    for (let i = 0; i < n; ++i) {
      const value = isNaN(series[i][j][1]) ? series[i][j][0] : series[i][j][1];

      if (value >= 0) {
        series[i][j][0] = positive;
        series[i][j][1] = positive + value;
        positive = series[i][j][1];
      } else {
        series[i][j][0] = negative;
        series[i][j][1] = negative + value;
        negative = series[i][j][1];
      }
    }
  }
};

const STACK_OFFSET_MAP = {
  sign: offsetSign,
  expand: stackOffsetExpand,
  none: stackOffsetNone,
  silhouette: stackOffsetSilhouette,
  wiggle: stackOffsetWiggle,
};

export const getStackedData = (data, stackItems, offsetType) => {
  const dataKeys = stackItems.map(item => item.props.dataKey);
  const stack = shapeStack()
                .keys(dataKeys)
                .value((d, key) => +getValueByDataKey(d, key, 0))
                .order(stackOrderNone)
                .offset(STACK_OFFSET_MAP[offsetType]);

  return stack(data);
};

export const getStackGroupsByAxisId = (data, items, numericAxisId, cateAxisId, offsetType) => {
  if (!data) { return null; }

  const stackGroups = items.reduce((result, item) => {
    const { stackId, hide } = item.props;

    if (hide) { return result; }

    const axisId = item.props[numericAxisId];
    const parentGroup = result[axisId] || { hasStack: false, stackGroups: {} };

    if (isNumOrStr(stackId)) {
      const childGroup = parentGroup.stackGroups[stackId] || {
        numericAxisId, cateAxisId, items: [],
      };

      childGroup.items.push(item);

      parentGroup.hasStack = true;

      parentGroup.stackGroups[stackId] = childGroup;
    } else {
      parentGroup.stackGroups[uniqueId('_stackId_')] = {
        numericAxisId, cateAxisId, items: [item],
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
export const calculateDomainOfTicks = (ticks, type) => {
  if (type === 'number') {
    return [Math.min.apply(null, ticks), Math.max.apply(null, ticks)];
  }

  return ticks;
};

/**
 * Configure the scale function of axis
 * @param {Object} scale The scale function
 * @param {Object} opts  The configuration of axis
 * @return {Object}      null
 */
export const getTicksOfScale = (scale, opts) => {
  const { type, tickCount, originalDomain, allowDecimals } = opts;

  if (opts.scale !== 'auto' && opts.scale !== 'linear') {
    return null;
  }

  if (tickCount && type === 'number' && originalDomain && (
    originalDomain[0] === 'auto' || originalDomain[1] === 'auto')) {
    // Calculate the ticks by the number of grid when the axis is a number axis
    const domain = scale.domain();
    const tickValues = getNiceTickValues(domain, tickCount, allowDecimals);

    scale.domain(calculateDomainOfTicks(tickValues, type));

    return { niceTicks: tickValues };
  } else if (tickCount && type === 'number') {
    const domain = scale.domain();
    const tickValues = getTickValuesFixedDomain(domain, tickCount, allowDecimals);

    return { niceTicks: tickValues };
  }

  return null;
};

export const getCateCoordinateOfLine = ({ axis, ticks, bandSize, entry, index }) => {
  if (axis.type === 'category') {
    return ticks[index] ? ticks[index].coordinate + bandSize / 2 : null;
  }

  const value = getValueByDataKey(entry, axis.dataKey);

  return !_.isNil(value) ? axis.scale(value) : null;
};

export const getCateCoordinateOfBar = ({ axis, ticks, offset, bandSize, entry, index }) => {
  if (axis.type === 'category') {
    return ticks[index] ? ticks[index].coordinate + offset : null;
  }
  const value = getValueByDataKey(entry, axis.dataKey, axis.domain[index]);

  return !_.isNil(value) ? axis.scale(value) - bandSize / 2 + offset : null;
};


export const getBaseValueOfBar = ({ numericAxis }) => {
  const domain = numericAxis.scale.domain();

  if (numericAxis.type === 'number') {
    const min = Math.min(domain[0], domain[1]);
    const max = Math.max(domain[0], domain[1]);

    if (min <= 0 && max >= 0) { return 0; }
    if (max < 0) { return max; }

    return min;
  }

  return domain[0];
};
