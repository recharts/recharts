import _ from 'lodash';
import * as d3Scales from 'd3-scale';

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
