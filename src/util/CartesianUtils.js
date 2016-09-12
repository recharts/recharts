import { findAllByType, findChildByType } from './ReactUtils';
import ReferenceDot from '../cartesian/ReferenceDot';
import ReferenceLine from '../cartesian/ReferenceLine';
import ReferenceArea from '../cartesian/ReferenceArea';
import Legend from '../component/Legend';
import { getNiceTickValues, getTickValues } from 'recharts-scale';
import {
  stack as shapeStack, stackOrderNone, stackOffsetExpand,
  stackOffsetNone, stackOffsetSilhouette, stackOffsetWiggle,
} from 'd3-shape';
import _ from 'lodash';

/* eslint no-param-reassign: 0 */
const offsetSign = (series, order) => {
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

export const detectReferenceElementsDomain = (children, domain, axisId, axisType) => {
  const lines = findAllByType(children, ReferenceLine);
  const dots = findAllByType(children, ReferenceDot);
  const elements = lines.concat(dots);
  const areas = findAllByType(children, ReferenceArea);
  const idKey = `${axisType}Id`;
  const valueKey = axisType[0];
  let finalDomain = domain;

  if (elements.length) {
    finalDomain = elements.reduce((result, el) => {
      if (el.props[idKey] === axisId && el.props.alwaysShow &&
        _.isNumber(el.props[valueKey])) {
        const value = el.props[valueKey];

        return [Math.min(result[0], value), Math.max(result[1], value)];
      }
      return result;
    }, finalDomain);
  }

  if (areas.length) {
    const key1 = `${valueKey}1`;
    const key2 = `${valueKey}2`;

    finalDomain = areas.reduce((result, el) => {
      if (el.props[idKey] === axisId && el.props.alwaysShow &&
        (_.isNumber(el.props[key1]) && _.isNumber(el.props[key2]))) {
        const value1 = el.props[key1];
        const value2 = el.props[key2];

        return [Math.min(result[0], value1, value2), Math.max(result[1], value1, value2)];
      }
      return result;
    }, finalDomain);
  }

  return finalDomain;
};

export const getStackedData = (data, stackItems, offsetType) => {
  const dataKeys = stackItems.map(item => item.props.dataKey);
  const stack = shapeStack()
                .keys(dataKeys)
                .value((d, key) => (+d[key] || 0))
                .order(stackOrderNone)
                .offset(STACK_OFFSET_MAP[offsetType]);

  return stack(data);
};

export const getStackGroupsByAxisId = (data, items, numericAxisId, cateAxisId, offsetType) => {
  const stackGroups = items.reduce((result, item) => {
    const { stackId, dataKey } = item.props;
    const axisId = item.props[numericAxisId];
    const parentGroup = result[axisId] || { hasStack: false, stackGroups: {} };

    if (_.isNumber(stackId) || _.isString(stackId)) {
      const childGroup = parentGroup.stackGroups[stackId] || { items: [] };

      childGroup.items.push(item);

      if (childGroup.items.length >= 2) {
        parentGroup.hasStack = true;
      }

      parentGroup.stackGroups[stackId] = childGroup;
    } else {
      parentGroup.stackGroups[_.uniqueId('_stackId_')] = {
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

export const getStackedDataOfItem = (item, stackGroups) => {
  const { stackId } = item.props;

  if (_.isNumber(stackId) || _.isString(stackId)) {
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
 * Get domain of data by key
 * @param  {Array} data   The data displayed in the chart
 * @param  {String} key  The unique key of a group of data
 * @param  {String} type The type of axis
 * @return {Array} Domain of data
 */
export const getDomainOfDataByKey = (data, key, type) => {
  if (type === 'number') {
    const domain = data
      .map(entry => entry[key])
      .filter(_.isNumber);

    return [Math.min.apply(null, domain), Math.max.apply(null, domain)];
  }

  return data.map(entry => {
    const value = entry[key];

    return (_.isNumber(value) || _.isString(value)) ? value : '';
  });
};

const getDomainOfSingle = (data) => (
  data.reduce((result, entry) => [
    Math.min.apply(null, entry.concat([result[0]]).filter(_.isNumber)),
    Math.max.apply(null, entry.concat([result[1]]).filter(_.isNumber)),
  ], [Infinity, -Infinity])
);

export const getDomainOfStackGroups = (stackGroups, startIndex, endIndex) => (
  Object.keys(stackGroups)
    .reduce((result, stackId) => {
      const group = stackGroups[stackId];
      const { stackedData } = group;
      const domain = stackedData.reduce((res, entry) => {
        const s = getDomainOfSingle(entry.slice(startIndex, endIndex + 1));

        return [Math.min(res[0], s[0]), Math.max(res[1], s[1])];
      }, [Infinity, -Infinity]);

      return [Math.min(domain[0], result[0]), Math.max(domain[1], result[1])];
    }, [Infinity, -Infinity])
    .map(result => (result === Infinity || result === -Infinity ? 0 : result))
);

/**
 * Get domain of data by the configuration of item element
 * @param  {Array} data   The data displayed in the chart
 * @param  {Array} items  The instances of item
 * @param  {String} type  The type of axis, number - Number Axis, category - Category Axis
 * @return {Array}        Domain
 */
export const getDomainOfItemsWithSameAxis = (data, items, type) => {
  const domains = items.map(item => getDomainOfDataByKey(data, item.props.dataKey, type));

  if (type === 'number') {
    // Calculate the domain of number axis
    return domains.reduce((result, entry) => [
      Math.min(result[0], entry[0]),
      Math.max(result[1], entry[1]),
    ], [Infinity, -Infinity]);
  }

  const tag = {};
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

export const isCategorialAxis = (layout, axisType) => (
  (layout === 'horizontal' && axisType === 'xAxis') ||
  (layout === 'vertical' && axisType === 'yAxis')
);
 /**
 * Calculate the Coordinates of grid
 * @param  {Array} ticks The ticks in axis
 * @param {Number} min   The minimun value of axis
 * @param {Number} max   The maximun value of axis
 * @return {Array}       Coordinates
 */
export const getCoordinatesOfGrid = (ticks, min, max) => {
  let hasMin;
  let hasMax;

  const values = ticks.map(entry => {
    if (entry.coordinate === min) { hasMin = true; }
    if (entry.coordinate === max) { hasMax = true; }

    return entry.coordinate;
  });

  if (!hasMin) { values.push(min); }
  if (!hasMax) { values.push(max); }

  return values;
};

/**
 * Get the ticks of an axis
 * @param  {Object}  axis The configuration of an axis
 * @param {Boolean} isGrid Whether or not are the ticks in grid
 * @param {Boolean} isAll Return the ticks of all the points or not
 * @return {Array}  Ticks
 */
export const getTicksOfAxis = (axis, isGrid, isAll) => {
  const scale = axis.scale;
  const { duplicateDomain, type } = axis;
  const offset = (isGrid || isAll) && type === 'category' ? scale.bandwidth() / 2 : 0;

  // The ticks setted by user should only affect the ticks adjacent to axis line
  if (isGrid && (axis.ticks || axis.niceTicks)) {
    return (axis.ticks || axis.niceTicks).map(entry => {
      const scaleContent = duplicateDomain ? duplicateDomain.indexOf(entry) : entry;

      return {
        coordinate: scale(scaleContent) + offset,
        value: entry,
      };
    });
  }

  if (scale.ticks && !isAll) {
    return scale.ticks(axis.tickCount).map(entry => (
      { coordinate: scale(entry) + offset, value: entry }
    ));
  }

  // When axis has duplicated text, serial numbers are used to generate scale
  return scale.domain().map((entry) => (
    {
      coordinate: scale(entry) + offset,
      value: duplicateDomain ? duplicateDomain[entry] : entry,
    }
  ));
};

export const calculateActiveTickIndex = (coordinate, ticks) => {
  let index = -1;
  const len = ticks.length;

  if (len > 1) {
    for (let i = 0; i < len; i++) {
      if ((i === 0 && coordinate <= (ticks[i].coordinate + ticks[i + 1].coordinate) / 2)
        || (i > 0 && i < len - 1 && coordinate > (ticks[i].coordinate + ticks[i - 1].coordinate) / 2
          && coordinate <= (ticks[i].coordinate + ticks[i + 1].coordinate) / 2)
        || (i === len - 1 && coordinate > (ticks[i].coordinate + ticks[i - 1].coordinate) / 2)) {
        index = i;
        break;
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
export const getMainColorOfGraphicItem = (item) => {
  const displayName = item.type.displayName;
  let result;

  switch (displayName) {
    case 'Line':
    case 'Area':
      result = item.props.stroke;
      break;
    default:
      result = item.props.fill;
      break;
  }

  return result;
};

export const getLegendProps = (children, graphicItems, width, height) => {
  const legendItem = findChildByType(children, Legend);

  if (!legendItem) { return null; }

  const legendData = (legendItem.props && legendItem.props.payload) ||
    graphicItems.map((child) => {
      const { dataKey, name, legendType } = child.props;

      return {
        dataKey,
        type: legendType || 'square',
        color: getMainColorOfGraphicItem(child),
        value: name || dataKey,
      };
    }, this);

  return {
    ...legendItem.props,
    ...Legend.getWithHeight(legendItem, width, height),
    payload: legendData,
  };
};
/**
 * Configure the scale function of axis
 * @param {Object} scale The scale function
 * @param {Object} opts  The configuration of axis
 * @return {Object}      null
 */
export const getTicksOfScale = (scale, opts) => {
  const { type, tickCount, ticks, originalDomain, allowDecimals } = opts;

  if (tickCount && type === 'number' && originalDomain && (
    originalDomain[0] === 'auto' || originalDomain[1] === 'auto')) {
    // Calculate the ticks by the number of grid when the axis is a number axis
    const domain = scale.domain();
    const tickValues = getNiceTickValues(domain, tickCount, allowDecimals);

    scale.domain(calculateDomainOfTicks(tickValues, type));

    return { niceTicks: tickValues };
  } else if (tickCount && type === 'number') {
    const domain = scale.domain();
    const tickValues = getTickValues(domain, tickCount, allowDecimals);

    return { niceTicks: tickValues };
  }

  return null;
};

