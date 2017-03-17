import _isNil from 'lodash/isNil';
import _isArray from 'lodash/isArray';

var _this = this;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { getNiceTickValues, getTickValuesFixedDomain } from 'recharts-scale';
import { stack as shapeStack, stackOrderNone, stackOffsetExpand, stackOffsetNone, stackOffsetSilhouette, stackOffsetWiggle } from 'd3-shape';

import { findAllByType, findChildByType } from './ReactUtils';
import { getPercentValue, isNumber, isNumOrStr, getValueByDataKey, uniqueId } from './DataUtils';
import ReferenceDot from '../cartesian/ReferenceDot';
import ReferenceLine from '../cartesian/ReferenceLine';
import ReferenceArea from '../cartesian/ReferenceArea';
import Legend from '../component/Legend';

/* eslint no-param-reassign: 0 */
var offsetSign = function offsetSign(series) {
  var n = series.length;
  if (n <= 0) {
    return;
  }

  for (var j = 0, m = series[0].length; j < m; ++j) {
    var positive = 0;
    var negative = 0;

    for (var i = 0; i < n; ++i) {
      var value = isNaN(series[i][j][1]) ? series[i][j][0] : series[i][j][1];

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

var STACK_OFFSET_MAP = {
  sign: offsetSign,
  expand: stackOffsetExpand,
  none: stackOffsetNone,
  silhouette: stackOffsetSilhouette,
  wiggle: stackOffsetWiggle
};

export var detectReferenceElementsDomain = function detectReferenceElementsDomain(children, domain, axisId, axisType) {
  var lines = findAllByType(children, ReferenceLine);
  var dots = findAllByType(children, ReferenceDot);
  var elements = lines.concat(dots);
  var areas = findAllByType(children, ReferenceArea);
  var idKey = axisType + 'Id';
  var valueKey = axisType[0];
  var finalDomain = domain;

  if (elements.length) {
    finalDomain = elements.reduce(function (result, el) {
      if (el.props[idKey] === axisId && el.props.alwaysShow && isNumber(el.props[valueKey])) {
        var value = el.props[valueKey];

        return [Math.min(result[0], value), Math.max(result[1], value)];
      }
      return result;
    }, finalDomain);
  }

  if (areas.length) {
    (function () {
      var key1 = valueKey + '1';
      var key2 = valueKey + '2';

      finalDomain = areas.reduce(function (result, el) {
        if (el.props[idKey] === axisId && el.props.alwaysShow && isNumber(el.props[key1]) && isNumber(el.props[key2])) {
          var value1 = el.props[key1];
          var value2 = el.props[key2];

          return [Math.min(result[0], value1, value2), Math.max(result[1], value1, value2)];
        }
        return result;
      }, finalDomain);
    })();
  }

  return finalDomain;
};

export var getStackedData = function getStackedData(data, stackItems, offsetType) {
  var dataKeys = stackItems.map(function (item) {
    return item.props.dataKey;
  });
  var stack = shapeStack().keys(dataKeys).value(function (d, key) {
    return +getValueByDataKey(d, key, 0);
  }).order(stackOrderNone).offset(STACK_OFFSET_MAP[offsetType]);

  return stack(data);
};

export var getStackGroupsByAxisId = function getStackGroupsByAxisId(data, items, numericAxisId, cateAxisId, offsetType) {
  var stackGroups = items.reduce(function (result, item) {
    var stackId = item.props.stackId;

    var axisId = item.props[numericAxisId];
    var parentGroup = result[axisId] || { hasStack: false, stackGroups: {} };

    if (isNumOrStr(stackId)) {
      var childGroup = parentGroup.stackGroups[stackId] || {
        numericAxisId: numericAxisId, cateAxisId: cateAxisId, items: []
      };

      childGroup.items = [item].concat(childGroup.items);

      parentGroup.hasStack = true;

      parentGroup.stackGroups[stackId] = childGroup;
    } else {
      parentGroup.stackGroups[uniqueId('_stackId_')] = {
        numericAxisId: numericAxisId, cateAxisId: cateAxisId, items: [item]
      };
    }

    return _extends({}, result, _defineProperty({}, axisId, parentGroup));
  }, {});

  return Object.keys(stackGroups).reduce(function (result, axisId) {
    var group = stackGroups[axisId];

    if (group.hasStack) {
      group.stackGroups = Object.keys(group.stackGroups).reduce(function (res, stackId) {
        var g = group.stackGroups[stackId];

        return _extends({}, res, _defineProperty({}, stackId, {
          numericAxisId: numericAxisId,
          cateAxisId: cateAxisId,
          items: g.items,
          stackedData: getStackedData(data, g.items, offsetType)
        }));
      }, {});
    }

    return _extends({}, result, _defineProperty({}, axisId, group));
  }, {});
};

export var getStackedDataOfItem = function getStackedDataOfItem(item, stackGroups) {
  var stackId = item.props.stackId;


  if (isNumOrStr(stackId)) {
    var group = stackGroups[stackId];

    if (group && group.items.length) {
      var itemIndex = -1;

      for (var i = 0, len = group.items.length; i < len; i++) {
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
export var calculateDomainOfTicks = function calculateDomainOfTicks(ticks, type) {
  if (type === 'number') {
    return [Math.min.apply(null, ticks), Math.max.apply(null, ticks)];
  }

  return ticks;
};

/**
 * Get domain of data by key
 * @param  {Array}   data      The data displayed in the chart
 * @param  {String}  key       The unique key of a group of data
 * @param  {String}  type      The type of axis
 * @param  {Boolean} filterNil Whether or not filter nil values
 * @return {Array} Domain of data
 */
export var getDomainOfDataByKey = function getDomainOfDataByKey(data, key, type, filterNil) {
  var flattenData = data.reduce(function (result, entry) {
    var value = getValueByDataKey(entry, key);

    if (_isArray(value)) {
      return [].concat(_toConsumableArray(result), _toConsumableArray(value));
    }

    return [].concat(_toConsumableArray(result), [value]);
  }, []);

  if (type === 'number') {
    var domain = flattenData.filter(isNumber);

    return [Math.min.apply(null, domain), Math.max.apply(null, domain)];
  }

  var validateData = filterNil ? flattenData.filter(function (entry) {
    return !_isNil(entry);
  }) : flattenData;

  return validateData.map(function (entry) {
    return isNumOrStr(entry) ? entry : '';
  });
};

var getDomainOfSingle = function getDomainOfSingle(data) {
  return data.reduce(function (result, entry) {
    return [Math.min.apply(null, entry.concat([result[0]]).filter(isNumber)), Math.max.apply(null, entry.concat([result[1]]).filter(isNumber))];
  }, [Infinity, -Infinity]);
};

export var getDomainOfStackGroups = function getDomainOfStackGroups(stackGroups, startIndex, endIndex) {
  return Object.keys(stackGroups).reduce(function (result, stackId) {
    var group = stackGroups[stackId];
    var stackedData = group.stackedData;

    var domain = stackedData.reduce(function (res, entry) {
      var s = getDomainOfSingle(entry.slice(startIndex, endIndex + 1));

      return [Math.min(res[0], s[0]), Math.max(res[1], s[1])];
    }, [Infinity, -Infinity]);

    return [Math.min(domain[0], result[0]), Math.max(domain[1], result[1])];
  }, [Infinity, -Infinity]).map(function (result) {
    return result === Infinity || result === -Infinity ? 0 : result;
  });
};

/**
 * Get domain of data by the configuration of item element
 * @param  {Array}   data      The data displayed in the chart
 * @param  {Array}   items     The instances of item
 * @param  {String}  type      The type of axis, number - Number Axis, category - Category Axis
 * @param  {Boolean} filterNil Whether or not filter nil values
 * @return {Array}        Domain
 */
export var getDomainOfItemsWithSameAxis = function getDomainOfItemsWithSameAxis(data, items, type, filterNil) {
  var domains = items.map(function (item) {
    return getDomainOfDataByKey(data, item.props.dataKey, type, filterNil);
  });

  if (type === 'number') {
    // Calculate the domain of number axis
    return domains.reduce(function (result, entry) {
      return [Math.min(result[0], entry[0]), Math.max(result[1], entry[1])];
    }, [Infinity, -Infinity]);
  }

  var tag = {};
  // Get the union set of category axis
  return domains.reduce(function (result, entry) {
    for (var i = 0, len = entry.length; i < len; i++) {
      if (!tag[entry[i]]) {
        tag[entry[i]] = true;

        result.push(entry[i]);
      }
    }
    return result;
  }, []);
};

export var isCategorialAxis = function isCategorialAxis(layout, axisType) {
  return layout === 'horizontal' && axisType === 'xAxis' || layout === 'vertical' && axisType === 'yAxis';
};
/**
* Calculate the Coordinates of grid
* @param  {Array} ticks The ticks in axis
* @param {Number} min   The minimun value of axis
* @param {Number} max   The maximun value of axis
* @return {Array}       Coordinates
*/
export var getCoordinatesOfGrid = function getCoordinatesOfGrid(ticks, min, max) {
  var hasMin = void 0,
      hasMax = void 0;

  var values = ticks.map(function (entry) {
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
export var getTicksOfAxis = function getTicksOfAxis(axis, isGrid, isAll) {
  if (!axis) return null;
  var scale = axis.scale;
  var duplicateDomain = axis.duplicateDomain,
      type = axis.type;

  var offset = (isGrid || isAll) && type === 'category' ? scale.bandwidth() / 2 : 0;

  // The ticks setted by user should only affect the ticks adjacent to axis line
  if (isGrid && (axis.ticks || axis.niceTicks)) {
    return (axis.ticks || axis.niceTicks).map(function (entry) {
      var scaleContent = duplicateDomain ? duplicateDomain.indexOf(entry) : entry;

      return {
        coordinate: scale(scaleContent) + offset,
        value: entry
      };
    });
  }

  if (axis.isCategorial && axis.categoricalDomain) {
    return axis.categoricalDomain.map(function (entry, index) {
      return {
        coordinate: scale(entry),
        value: entry,
        index: index
      };
    });
  }

  if (scale.ticks && !isAll) {
    return scale.ticks(axis.tickCount).map(function (entry) {
      return { coordinate: scale(entry) + offset, value: entry };
    });
  }

  // When axis has duplicated text, serial numbers are used to generate scale
  return scale.domain().map(function (entry, index) {
    return {
      coordinate: scale(entry) + offset,
      value: duplicateDomain ? duplicateDomain[entry] : entry,
      index: index
    };
  });
};

export var calculateActiveTickIndex = function calculateActiveTickIndex(coordinate, ticks) {
  var index = -1;
  var len = ticks.length;

  if (len > 1) {
    for (var i = 0; i < len; i++) {
      if (i === 0 && coordinate <= (ticks[i].coordinate + ticks[i + 1].coordinate) / 2 || i > 0 && i < len - 1 && coordinate > (ticks[i].coordinate + ticks[i - 1].coordinate) / 2 && coordinate <= (ticks[i].coordinate + ticks[i + 1].coordinate) / 2 || i === len - 1 && coordinate > (ticks[i].coordinate + ticks[i - 1].coordinate) / 2) {
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
export var getMainColorOfGraphicItem = function getMainColorOfGraphicItem(item) {
  var displayName = item.type.displayName;
  var result = void 0;

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

export var getLegendProps = function getLegendProps(children, graphicItems, width) {
  var legendItem = findChildByType(children, Legend);

  if (!legendItem) {
    return null;
  }

  var legendData = legendItem.props && legendItem.props.payload || graphicItems.map(function (child) {
    var _child$props = child.props,
        dataKey = _child$props.dataKey,
        name = _child$props.name,
        legendType = _child$props.legendType;


    return {
      dataKey: dataKey,
      type: legendItem.props.iconType || legendType || 'square',
      color: getMainColorOfGraphicItem(child),
      value: name || dataKey,
      payload: child.props
    };
  }, _this);

  return _extends({}, legendItem.props, Legend.getWithHeight(legendItem, width), {
    payload: legendData
  });
};
/**
 * Configure the scale function of axis
 * @param {Object} scale The scale function
 * @param {Object} opts  The configuration of axis
 * @return {Object}      null
 */
export var getTicksOfScale = function getTicksOfScale(scale, opts) {
  var type = opts.type,
      tickCount = opts.tickCount,
      originalDomain = opts.originalDomain,
      allowDecimals = opts.allowDecimals;


  if (opts.scale !== 'auto' && opts.scale !== 'linear') {
    return null;
  }

  if (tickCount && type === 'number' && originalDomain && (originalDomain[0] === 'auto' || originalDomain[1] === 'auto')) {
    // Calculate the ticks by the number of grid when the axis is a number axis
    var domain = scale.domain();
    var tickValues = getNiceTickValues(domain, tickCount, allowDecimals);

    scale.domain(calculateDomainOfTicks(tickValues, type));

    return { niceTicks: tickValues };
  } else if (tickCount && type === 'number') {
    var _domain = scale.domain();
    var _tickValues = getTickValuesFixedDomain(_domain, tickCount, allowDecimals);

    return { niceTicks: _tickValues };
  }

  return null;
};

/**
 * Calculate the size of all groups for stacked bar graph
 * @param  {Object} stackGroups The items grouped by axisId and stackId
 * @return {Object} The size of all groups
 */
export var getBarSizeList = function getBarSizeList(_ref) {
  var globalSize = _ref.barSize,
      _ref$stackGroups = _ref.stackGroups,
      stackGroups = _ref$stackGroups === undefined ? {} : _ref$stackGroups;

  var result = {};
  var numericAxisIds = Object.keys(stackGroups);

  for (var i = 0, len = numericAxisIds.length; i < len; i++) {
    var sgs = stackGroups[numericAxisIds[i]].stackGroups;
    var stackIds = Object.keys(sgs);

    for (var j = 0, sLen = stackIds.length; j < sLen; j++) {
      var _sgs$stackIds$j = sgs[stackIds[j]],
          items = _sgs$stackIds$j.items,
          cateAxisId = _sgs$stackIds$j.cateAxisId;


      var barItems = items.filter(function (item) {
        return item.type.displayName === 'Bar';
      });

      if (barItems && barItems.length) {
        var selfSize = barItems[0].props.barSize;

        var cateId = barItems[0].props[cateAxisId];

        if (!result[cateId]) {
          result[cateId] = [];
        }

        result[cateId].push({
          item: barItems[0],
          stackList: barItems.slice(1),
          barSize: _isNil(selfSize) ? globalSize : selfSize
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
export var getBarPosition = function getBarPosition(_ref2) {
  var barGap = _ref2.barGap,
      barCategoryGap = _ref2.barCategoryGap,
      bandSize = _ref2.bandSize,
      _ref2$sizeList = _ref2.sizeList,
      sizeList = _ref2$sizeList === undefined ? [] : _ref2$sizeList,
      maxBarSize = _ref2.maxBarSize;

  var len = sizeList.length;
  if (len < 1) return null;

  var realBarGap = getPercentValue(barGap, bandSize, 0, true);
  var result = void 0;

  // whether or not is barSize setted by user
  if (sizeList[0].barSize === +sizeList[0].barSize) {
    (function () {
      var useFull = false;
      var fullBarSize = bandSize / len;
      var sum = sizeList.reduce(function (res, entry) {
        return res + entry.barSize || 0;
      }, 0);
      sum += (len - 1) * realBarGap;

      if (sum >= bandSize) {
        sum -= (len - 1) * realBarGap;
        realBarGap = 0;
      }
      if (sum >= bandSize) {
        useFull = true;
        fullBarSize *= 0.9;
        sum = len * fullBarSize;
      }

      var offset = (bandSize - sum) / 2 >> 0;
      var prev = { offset: offset - realBarGap, size: 0 };

      result = sizeList.reduce(function (res, entry) {
        var newRes = [].concat(_toConsumableArray(res), [{
          item: entry.item,
          position: {
            offset: prev.offset + prev.size + realBarGap,
            size: useFull ? fullBarSize : entry.barSize
          }
        }]);

        prev = newRes[newRes.length - 1].position;

        if (entry.stackList && entry.stackList.length) {
          entry.stackList.forEach(function (item) {
            newRes.push({ item: item, position: prev });
          });
        }
        return newRes;
      }, []);
    })();
  } else {
    (function () {
      var offset = getPercentValue(barCategoryGap, bandSize, 0, true);

      if (bandSize - 2 * offset - (len - 1) * realBarGap <= 0) {
        realBarGap = 0;
      }

      var originalSize = (bandSize - 2 * offset - (len - 1) * realBarGap) / len;
      if (originalSize > 1) {
        originalSize >>= 0;
      }
      var size = maxBarSize === +maxBarSize ? Math.min(originalSize, maxBarSize) : originalSize;

      result = sizeList.reduce(function (res, entry, i) {
        var newRes = [].concat(_toConsumableArray(res), [{
          item: entry.item,
          position: {
            offset: offset + (originalSize + realBarGap) * i + (originalSize - size) / 2,
            size: size
          }
        }]);

        if (entry.stackList && entry.stackList.length) {
          entry.stackList.forEach(function (item) {
            newRes.push({ item: item, position: newRes[newRes.length - 1].position });
          });
        }
        return newRes;
      }, []);
    })();
  }

  return result;
};

export var appendOffsetOfLegend = function appendOffsetOfLegend(offset, items, props, legendBox) {
  var children = props.children,
      width = props.width,
      height = props.height,
      margin = props.margin;

  var legendWidth = width - (margin.left || 0) - (margin.right || 0);
  var legendHeight = height - (margin.top || 0) - (margin.bottom || 0);
  var legendProps = getLegendProps(children, items, legendWidth, legendHeight);
  var newOffset = offset;

  if (legendProps) {
    var box = legendBox || {};
    var align = legendProps.align,
        verticalAlign = legendProps.verticalAlign,
        layout = legendProps.layout;


    if ((layout === 'vertical' || layout === 'horizontal' && verticalAlign === 'center') && isNumber(offset[align])) {
      newOffset = _extends({}, offset, _defineProperty({}, align, newOffset[align] + (box.width || 0)));
    }

    if ((layout === 'horizontal' || layout === 'vertical' && align === 'center') && isNumber(offset[verticalAlign])) {
      newOffset = _extends({}, offset, _defineProperty({}, verticalAlign, newOffset[verticalAlign] + (box.height || 0)));
    }
  }

  return newOffset;
};