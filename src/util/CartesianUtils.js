import _ from 'lodash';
import { findAllByType, findChildByType, getDisplayName } from './ReactUtils';
import { getPercentValue, isNumber, isNumOrStr, getValueByDataKey, getTicksOfScale,
  parseScale, checkDomainOfScale } from './DataUtils';
import ReferenceDot from '../cartesian/ReferenceDot';
import ReferenceLine from '../cartesian/ReferenceLine';
import ReferenceArea from '../cartesian/ReferenceArea';
import Legend from '../component/Legend';

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
        isNumber(el.props[valueKey])) {
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
        (isNumber(el.props[key1]) && isNumber(el.props[key2]))) {
        const value1 = el.props[key1];
        const value2 = el.props[key2];

        return [Math.min(result[0], value1, value2), Math.max(result[1], value1, value2)];
      }
      return result;
    }, finalDomain);
  }

  return finalDomain;
};

export const getStackedDataOfItem = (item, stackGroups) => {
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

/**
 * Get domain of data by key
 * @param  {Array}   data      The data displayed in the chart
 * @param  {String}  key       The unique key of a group of data
 * @param  {String}  type      The type of axis
 * @param  {Boolean} filterNil Whether or not filter nil values
 * @return {Array} Domain of data
 */
export const getDomainOfDataByKey = (data, key, type, filterNil) => {
  const flattenData = data.reduce((result, entry) => {
    const value = getValueByDataKey(entry, key);

    if (_.isArray(value)) {
      return [...result, ...value];
    }

    return [...result, value];
  }, []);

  if (type === 'number') {
    const domain = flattenData.filter(isNumber);

    return [Math.min.apply(null, domain), Math.max.apply(null, domain)];
  }

  const validateData = filterNil ?
    flattenData.filter(entry => !_.isNil(entry)) :
    flattenData;

  return validateData.map(entry => (isNumOrStr(entry) ? entry : ''));
};

const getDomainOfSingle = data => (
  data.reduce((result, entry) => [
    Math.min.apply(null, entry.concat([result[0]]).filter(isNumber)),
    Math.max.apply(null, entry.concat([result[1]]).filter(isNumber)),
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
 * @param  {Array}   data      The data displayed in the chart
 * @param  {Array}   items     The instances of item
 * @param  {String}  type      The type of axis, number - Number Axis, category - Category Axis
 * @param  {Boolean} filterNil Whether or not filter nil values
 * @return {Array}        Domain
 */
export const getDomainOfItemsWithSameAxis = (data, items, type, filterNil) => {
  const domains = items.map(item => getDomainOfDataByKey(
      data, item.props.dataKey, type, filterNil
  ));

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
  (layout === 'vertical' && axisType === 'yAxis') ||
  (layout === 'centric' && axisType === 'angleAxis') ||
  (layout === 'radial' && axisType === 'radiusAxis')
);
 /**
 * Calculate the Coordinates of grid
 * @param  {Array} ticks The ticks in axis
 * @param {Number} min   The minimun value of axis
 * @param {Number} max   The maximun value of axis
 * @return {Array}       Coordinates
 */
export const getCoordinatesOfGrid = (ticks, min, max) => {
  let hasMin, hasMax;

  const values = ticks.map((entry) => {
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
  if (!axis) return null;
  const scale = axis.scale;
  const { duplicateDomain, type, domain } = axis;
  const offset = ((isGrid || isAll) && type === 'category' && scale.bandwidth &&
    axis.axisType !== 'angleAxis') ?
    scale.bandwidth() / 2 : 0;

  // The ticks setted by user should only affect the ticks adjacent to axis line
  if (isGrid && (axis.ticks || axis.niceTicks)) {
    return (axis.ticks || axis.niceTicks).map((entry) => {
      const scaleContent = duplicateDomain ? duplicateDomain.indexOf(entry) : entry;

      return {
        coordinate: scale(scaleContent) + offset,
        value: entry,
        offset,
      };
    });
  }

  if (axis.isCategorial && axis.categoricalDomain) {
    return axis.categoricalDomain.map((entry, index) => (
      {
        coordinate: scale(entry),
        value: entry,
        index,
        offset,
      }
    ));
  }

  if (scale.ticks && !isAll) {
    return scale.ticks(axis.tickCount).map(entry => (
      { coordinate: scale(entry) + offset, value: entry, offset }
    ));
  }

  // When axis has duplicated text, serial numbers are used to generate scale
  return scale.domain().map((entry, index) => (
    {
      coordinate: scale(entry) + offset,
      value: duplicateDomain ? duplicateDomain[entry] : entry,
      index,
      offset,
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
        index = ticks[i].index;
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
    case 'Radar':
      result = item.props.stroke;
      break;
    default:
      result = item.props.fill;
      break;
  }

  return result;
};

export const getLegendProps = (children, graphicItems, width) => {
  const legendItem = findChildByType(children, Legend);

  if (!legendItem) { return null; }

  const legendData = (legendItem.props && legendItem.props.payload) ||
    graphicItems.map((child) => {
      const { dataKey, name, legendType, hide } = child.props;

      return {
        inactive: hide,
        dataKey,
        type: legendItem.props.iconType || legendType || 'square',
        color: getMainColorOfGraphicItem(child),
        value: name || dataKey,
        payload: child.props,
      };
    });

  return {
    ...legendItem.props,
    ...Legend.getWithHeight(legendItem, width),
    payload: legendData,
  };
};
/**
 * Calculate the size of all groups for stacked bar graph
 * @param  {Object} stackGroups The items grouped by axisId and stackId
 * @return {Object} The size of all groups
 */
export const getBarSizeList = ({ barSize: globalSize, stackGroups = {} }) => {
  if (!stackGroups) { return {}; }

  const result = {};
  const numericAxisIds = Object.keys(stackGroups);

  for (let i = 0, len = numericAxisIds.length; i < len; i++) {
    const sgs = stackGroups[numericAxisIds[i]].stackGroups;
    const stackIds = Object.keys(sgs);

    for (let j = 0, sLen = stackIds.length; j < sLen; j++) {
      const { items, cateAxisId } = sgs[stackIds[j]];

      const barItems = items.filter(item => (getDisplayName(item.type).indexOf('Bar') >= 0));

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
export const getBarPosition = ({ barGap, barCategoryGap, bandSize, sizeList = [], maxBarSize }) => {
  const len = sizeList.length;
  if (len < 1) return null;

  let realBarGap = getPercentValue(barGap, bandSize, 0, true);
  let result;

  // whether or not is barSize setted by user
  if (sizeList[0].barSize === +sizeList[0].barSize) {
    let useFull = false;
    let fullBarSize = bandSize / len;
    let sum = sizeList.reduce((res, entry) => (res + entry.barSize || 0), 0);
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
      const newRes = [...res, {
        item: entry.item,
        position: {
          offset: prev.offset + prev.size + realBarGap,
          size: useFull ? fullBarSize : entry.barSize,
        },
      }];

      prev = newRes[newRes.length - 1].position;

      if (entry.stackList && entry.stackList.length) {
        entry.stackList.forEach((item) => {
          newRes.push({ item, position: prev });
        });
      }
      return newRes;
    }, []);
  } else {
    const offset = getPercentValue(barCategoryGap, bandSize, 0, true);

    if (bandSize - 2 * offset - (len - 1) * realBarGap <= 0) { realBarGap = 0; }

    let originalSize = (bandSize - 2 * offset - (len - 1) * realBarGap) / len;
    if (originalSize > 1) {
      originalSize >>= 0;
    }
    const size = (maxBarSize === +maxBarSize) ? Math.min(originalSize, maxBarSize) : originalSize;

    result = sizeList.reduce((res, entry, i) => {
      const newRes = [...res, {
        item: entry.item,
        position: {
          offset: offset + (originalSize + realBarGap) * i + (originalSize - size) / 2,
          size,
        },
      }];

      if (entry.stackList && entry.stackList.length) {
        entry.stackList.forEach((item) => {
          newRes.push({ item, position: newRes[newRes.length - 1].position });
        });
      }
      return newRes;
    }, []);
  }

  return result;
};

export const appendOffsetOfLegend = (offset, items, props, legendBox) => {
  const { children, width, height, margin } = props;
  const legendWidth = width - (margin.left || 0) - (margin.right || 0);
  const legendHeight = height - (margin.top || 0) - (margin.bottom || 0);
  const legendProps = getLegendProps(children, items, legendWidth, legendHeight);
  let newOffset = offset;

  if (legendProps) {
    const box = legendBox || {};
    const { align, verticalAlign, layout } = legendProps;

    if ((layout === 'vertical' || (layout === 'horizontal' && verticalAlign === 'center')) &&
      isNumber(offset[align])) {
      newOffset = { ...offset, [align]: newOffset[align] + (box.width || 0) };
    }

    if ((layout === 'horizontal' || (layout === 'vertical' && align === 'center')) &&
      isNumber(offset[verticalAlign])) {
      newOffset = { ...offset, [verticalAlign]: newOffset[verticalAlign] + (box.height || 0) };
    }
  }

  return newOffset;
};
/**
 * Calculate the scale function, position, width, height of axes
 * @param  {Object} props     Latest props
 * @param  {Object} axisMap   The configuration of axes
 * @param  {Object} offset    The offset of main part in the svg element
 * @param  {String} axisType  The type of axes, x-axis or y-axis
 * @param  {String} chartName The name of chart
 * @return {Object} Configuration
 */
export const formatAxisMap = (props, axisMap, offset, axisType, chartName) => {
  const { width, height, layout } = props;
  const ids = Object.keys(axisMap);
  const steps = {
    left: offset.left,
    leftMirror: offset.left,
    right: width - offset.right,
    rightMirror: width - offset.right,
    top: offset.top,
    topMirror: offset.top,
    bottom: height - offset.bottom,
    bottomMirror: height - offset.bottom,
  };

  return ids.reduce((result, id) => {
    const axis = axisMap[id];
    const { orientation, domain, padding = {}, mirror, reversed } = axis;
    const offsetKey = `${orientation}${mirror ? 'Mirror' : ''}`;

    let range, x, y, needSpace;

    if (axisType === 'xAxis') {
      range = [
        offset.left + (padding.left || 0),
        offset.left + offset.width - (padding.right || 0),
      ];
    } else if (axisType === 'yAxis') {
      range = layout === 'horizontal' ? [
        offset.top + offset.height - (padding.bottom || 0),
        offset.top + (padding.top || 0),
      ] : [
        offset.top + (padding.top || 0),
        offset.top + offset.height - (padding.bottom || 0),
      ];
    } else {
      range = axis.range;
    }

    if (reversed) {
      range = [range[1], range[0]];
    }

    const scale = parseScale(axis, chartName);
    scale.domain(domain).range(range);
    checkDomainOfScale(scale);
    const ticks = getTicksOfScale(scale, axis);

    if (axisType === 'xAxis') {
      needSpace = (orientation === 'top' && !mirror) || (orientation === 'bottom' && mirror);
      x = offset.left;
      y = steps[offsetKey] - needSpace * axis.height;
    } else if (axisType === 'yAxis') {
      needSpace = (orientation === 'left' && !mirror) || (orientation === 'right' && mirror);
      x = steps[offsetKey] - needSpace * axis.width;
      y = offset.top;
    }

    const finalAxis = {
      ...axis,
      ...ticks,
      x, y, scale,
      width: axisType === 'xAxis' ? offset.width : axis.width,
      height: axisType === 'yAxis' ? offset.height : axis.height,
    };
    if (!axis.hide && axisType === 'xAxis') {
      steps[offsetKey] += (needSpace ? -1 : 1) * finalAxis.height;
    } else if (!axis.hide) {
      steps[offsetKey] += (needSpace ? -1 : 1) * finalAxis.width;
    }

    return { ...result, [id]: finalAxis };
  }, {});
};
