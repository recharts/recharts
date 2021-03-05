function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import _every from "lodash/every";
import _find from "lodash/find";
import _isFunction from "lodash/isFunction";
import _throttle from "lodash/throttle";
import _sortBy from "lodash/sortBy";
import _get from "lodash/get";
import _range from "lodash/range";
import _isNil from "lodash/isNil";
import _isBoolean from "lodash/isBoolean";
import _isArray from "lodash/isArray";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component, cloneElement, isValidElement, createElement } from 'react';
import classNames from 'classnames';
import { Surface } from '../container/Surface';
import { Layer } from '../container/Layer';
import { Tooltip } from '../component/Tooltip';
import { Legend } from '../component/Legend';
import { Curve } from '../shape/Curve';
import { Cross } from '../shape/Cross';
import { Sector } from '../shape/Sector';
import { Dot } from '../shape/Dot';
import { isInRectangle, Rectangle } from '../shape/Rectangle';
import { findAllByType, findChildByType, getDisplayName, parseChildIndex, validateWidthHeight, isChildrenEqual, renderByOrder, getReactEventByType } from '../util/ReactUtils';
import { CartesianAxis } from '../cartesian/CartesianAxis';
import { Brush } from '../cartesian/Brush';
import { getOffset, calculateChartCoordinate } from '../util/DOMUtils';
import { getAnyElementOfObject, hasDuplicate, uniqueId, isNumber, findEntryInArray } from '../util/DataUtils';
import { calculateActiveTickIndex, getMainColorOfGraphicItem, getBarSizeList, getBarPosition, appendOffsetOfLegend, getLegendProps, combineEventHandlers, getTicksOfAxis, getCoordinatesOfGrid, getStackedDataOfItem, parseErrorBarsOfAxis, getBandSizeOfAxis, getStackGroupsByAxisId, isCategoricalAxis, getDomainOfItemsWithSameAxis, getDomainOfStackGroups, getDomainOfDataByKey, parseSpecifiedDomain, parseDomainOfCategoryAxis, getTooltipItem } from '../util/ChartUtils';
import { detectReferenceElementsDomain } from '../util/DetectReferenceElementsDomain';
import { inRangeOfSector, polarToCartesian } from '../util/PolarUtils';
import { shallowEqual } from '../util/ShallowEqual';
import { eventCenter, SYNC_EVENT } from '../util/Events';
import { filterProps, adaptEventHandlers } from '../util/types';
var ORIENT_MAP = {
  xAxis: ['bottom', 'top'],
  yAxis: ['left', 'right']
};
var originCoordinate = {
  x: 0,
  y: 0
}; // use legacy isFinite only if there is a problem (aka IE)
// eslint-disable-next-line no-restricted-globals

var isFinit = Number.isFinite ? Number.isFinite : isFinite;
var defer = // eslint-disable-next-line no-nested-ternary
typeof requestAnimationFrame === 'function' ? requestAnimationFrame : typeof setImmediate === 'function' ? setImmediate : setTimeout;
var deferClear = // eslint-disable-next-line no-nested-ternary
typeof cancelAnimationFrame === 'function' ? cancelAnimationFrame : typeof clearImmediate === 'function' ? clearImmediate : clearTimeout;

var calculateTooltipPos = function calculateTooltipPos(rangeObj, layout) {
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

var getActiveCoordinate = function getActiveCoordinate(layout, tooltipTicks, activeIndex, rangeObj) {
  var entry = tooltipTicks.find(function (tick) {
    return tick && tick.index === activeIndex;
  });

  if (entry) {
    if (layout === 'horizontal') {
      return {
        x: entry.coordinate,
        y: rangeObj.y
      };
    }

    if (layout === 'vertical') {
      return {
        x: rangeObj.x,
        y: entry.coordinate
      };
    }

    if (layout === 'centric') {
      var _angle = entry.coordinate;
      var _radius = rangeObj.radius;
      return _objectSpread(_objectSpread(_objectSpread({}, rangeObj), polarToCartesian(rangeObj.cx, rangeObj.cy, _radius, _angle)), {}, {
        angle: _angle,
        radius: _radius
      });
    }

    var radius = entry.coordinate;
    var angle = rangeObj.angle;
    return _objectSpread(_objectSpread(_objectSpread({}, rangeObj), polarToCartesian(rangeObj.cx, rangeObj.cy, radius, angle)), {}, {
      angle: angle,
      radius: radius
    });
  }

  return originCoordinate;
};

var getDisplayedData = function getDisplayedData(data, _ref, item) {
  var graphicalItems = _ref.graphicalItems,
      dataStartIndex = _ref.dataStartIndex,
      dataEndIndex = _ref.dataEndIndex;
  var itemsData = (graphicalItems || []).reduce(function (result, child) {
    var itemData = child.props.data;

    if (itemData && itemData.length) {
      return [].concat(_toConsumableArray(result), _toConsumableArray(itemData));
    }

    return result;
  }, []);

  if (itemsData && itemsData.length > 0) {
    return itemsData;
  }

  if (item && item.props && item.props.data && item.props.data.length > 0) {
    return item.props.data;
  }

  if (data && data.length && isNumber(dataStartIndex) && isNumber(dataEndIndex)) {
    return data.slice(dataStartIndex, dataEndIndex + 1);
  }

  return [];
};
/**
 * Get the content to be displayed in the tooltip
 * @param  {Object} state          Current state
 * @param  {Array}  chartData      The data defined in chart
 * @param  {Number} activeIndex    Active index of data
 * @param  {String} activeLabel    Active label of data
 * @return {Array}                 The content of tooltip
 */


var getTooltipContent = function getTooltipContent(state, chartData, activeIndex, activeLabel) {
  var graphicalItems = state.graphicalItems,
      tooltipAxis = state.tooltipAxis;
  var displayedData = getDisplayedData(chartData, state);

  if (activeIndex < 0 || !graphicalItems || !graphicalItems.length || activeIndex >= displayedData.length) {
    return null;
  } // get data by activeIndex when the axis don't allow duplicated category


  return graphicalItems.reduce(function (result, child) {
    var hide = child.props.hide;

    if (hide) {
      return result;
    }

    var data = child.props.data;
    var payload;

    if (tooltipAxis.dataKey && !tooltipAxis.allowDuplicatedCategory) {
      // graphic child has data props
      var entries = data === undefined ? displayedData : data;
      payload = findEntryInArray(entries, tooltipAxis.dataKey, activeLabel);
    } else {
      payload = data && data[activeIndex] || displayedData[activeIndex];
    }

    if (!payload) {
      return result;
    }

    return [].concat(_toConsumableArray(result), [getTooltipItem(child, payload)]);
  }, []);
};
/**
 * Returns tooltip data based on a mouse position (as a parameter or in state)
 * @param  {Object} state     current state
 * @param  {Array}  chartData the data defined in chart
 * @param  {String} layout     The layout type of chart
 * @param  {Object} rangeObj  { x, y } coordinates
 * @return {Object}           Tooltip data data
 */


var getTooltipData = function getTooltipData(state, chartData, layout, rangeObj) {
  var rangeData = rangeObj || {
    x: state.chartX,
    y: state.chartY
  };
  var pos = calculateTooltipPos(rangeData, layout);
  var ticks = state.orderedTooltipTicks,
      axis = state.tooltipAxis,
      tooltipTicks = state.tooltipTicks;
  var activeIndex = calculateActiveTickIndex(pos, ticks, tooltipTicks, axis);

  if (activeIndex >= 0 && tooltipTicks) {
    var activeLabel = tooltipTicks[activeIndex] && tooltipTicks[activeIndex].value;
    var activePayload = getTooltipContent(state, chartData, activeIndex, activeLabel);
    var activeCoordinate = getActiveCoordinate(layout, ticks, activeIndex, rangeData);
    return {
      activeTooltipIndex: activeIndex,
      activeLabel: activeLabel,
      activePayload: activePayload,
      activeCoordinate: activeCoordinate
    };
  }

  return null;
};
/**
 * Get the configuration of axis by the options of axis instance
 * @param  {Object} props         Latest props
 * @param {Array}  axes           The instance of axes
 * @param  {Array} graphicalItems The instances of item
 * @param  {String} axisType      The type of axis, xAxis - x-axis, yAxis - y-axis
 * @param  {String} axisIdKey     The unique id of an axis
 * @param  {Object} stackGroups   The items grouped by axisId and stackId
 * @param {Number} dataStartIndex The start index of the data series when a brush is applied
 * @param {Number} dataEndIndex   The end index of the data series when a brush is applied
 * @return {Object}      Configuration
 */


var getAxisMapByAxes = function getAxisMapByAxes(props, _ref2) {
  var axes = _ref2.axes,
      graphicalItems = _ref2.graphicalItems,
      axisType = _ref2.axisType,
      axisIdKey = _ref2.axisIdKey,
      stackGroups = _ref2.stackGroups,
      dataStartIndex = _ref2.dataStartIndex,
      dataEndIndex = _ref2.dataEndIndex;
  var layout = props.layout,
      children = props.children,
      stackOffset = props.stackOffset;
  var isCategorical = isCategoricalAxis(layout, axisType); // Eliminate duplicated axes

  var axisMap = axes.reduce(function (result, child) {
    var _child$props = child.props,
        type = _child$props.type,
        dataKey = _child$props.dataKey,
        allowDataOverflow = _child$props.allowDataOverflow,
        allowDuplicatedCategory = _child$props.allowDuplicatedCategory,
        scale = _child$props.scale,
        ticks = _child$props.ticks;
    var axisId = child.props[axisIdKey];
    var displayedData = getDisplayedData(props.data, {
      graphicalItems: graphicalItems.filter(function (item) {
        return item.props[axisIdKey] === axisId;
      }),
      dataStartIndex: dataStartIndex,
      dataEndIndex: dataEndIndex
    });
    var len = displayedData.length;

    if (!result[axisId]) {
      var domain, duplicateDomain, categoricalDomain;

      if (dataKey) {
        // has dataKey in <Axis />
        domain = getDomainOfDataByKey(displayedData, dataKey, type);

        if (type === 'category' && isCategorical) {
          // the field type is category data and this axis is catrgorical axis
          var duplicate = hasDuplicate(domain);

          if (allowDuplicatedCategory && duplicate) {
            duplicateDomain = domain; // When category axis has duplicated text, serial numbers are used to generate scale

            domain = _range(0, len);
          } else if (!allowDuplicatedCategory) {
            // remove duplicated category
            domain = parseDomainOfCategoryAxis(child.props.domain, domain, child).reduce(function (finalDomain, entry) {
              return finalDomain.indexOf(entry) >= 0 ? finalDomain : [].concat(_toConsumableArray(finalDomain), [entry]);
            }, []);
          }
        } else if (type === 'category') {
          // the field type is category data and this axis is numerical axis
          if (!allowDuplicatedCategory) {
            domain = parseDomainOfCategoryAxis(child.props.domain, domain, child).reduce(function (finalDomain, entry) {
              return finalDomain.indexOf(entry) >= 0 || entry === '' || _isNil(entry) ? finalDomain : [].concat(_toConsumableArray(finalDomain), [entry]);
            }, []);
          } else {
            // eliminate undefined or null or empty string
            domain = domain.filter(function (entry) {
              return entry !== '' && !_isNil(entry);
            });
          }
        } else if (type === 'number') {
          // the field type is numerical
          var errorBarsDomain = parseErrorBarsOfAxis(displayedData, graphicalItems.filter(function (item) {
            return item.props[axisIdKey] === axisId && !item.props.hide;
          }), dataKey, axisType);

          if (errorBarsDomain) {
            domain = errorBarsDomain;
          }
        }

        if (isCategorical && (type === 'number' || scale !== 'auto')) {
          categoricalDomain = getDomainOfDataByKey(displayedData, dataKey, 'category');
        }
      } else if (isCategorical) {
        // the axis is a categorical axis
        domain = _range(0, len);
      } else if (stackGroups && stackGroups[axisId] && stackGroups[axisId].hasStack && type === 'number') {
        // when stackOffset is 'expand', the domain may be calculated as [0, 1.000000000002]
        domain = stackOffset === 'expand' ? [0, 1] : getDomainOfStackGroups(stackGroups[axisId].stackGroups, dataStartIndex, dataEndIndex);
      } else {
        domain = getDomainOfItemsWithSameAxis(displayedData, graphicalItems.filter(function (item) {
          return item.props[axisIdKey] === axisId && !item.props.hide;
        }), type, true);
      }

      if (type === 'number') {
        // To detect wether there is any reference lines whose props alwaysShow is true
        domain = detectReferenceElementsDomain(children, domain, axisId, axisType, ticks);

        if (child.props.domain) {
          domain = parseSpecifiedDomain(child.props.domain, domain, allowDataOverflow);
        }
      } else if (type === 'category' && child.props.domain) {
        var axisDomain = child.props.domain;
        var isDomainValidate = domain.every(function (entry) {
          return axisDomain.indexOf(entry) >= 0;
        });

        if (isDomainValidate) {
          domain = axisDomain;
        }
      }

      return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, axisId, _objectSpread(_objectSpread({}, child.props), {}, {
        axisType: axisType,
        domain: domain,
        categoricalDomain: categoricalDomain,
        duplicateDomain: duplicateDomain,
        originalDomain: child.props.domain,
        isCategorical: isCategorical,
        layout: layout
      })));
    }

    return result;
  }, {});
  return axisMap;
};
/**
 * Get the configuration of axis by the options of item,
 * this kind of axis does not display in chart
 * @param  {Object} props         Latest props
 * @param  {Array} graphicalItems The instances of item
 * @param  {ReactElement} Axis    Axis Component
 * @param  {String} axisType      The type of axis, xAxis - x-axis, yAxis - y-axis
 * @param  {String} axisIdKey     The unique id of an axis
 * @param  {Object} stackGroups   The items grouped by axisId and stackId
 * @param {Number} dataStartIndex The start index of the data series when a brush is applied
 * @param {Number} dataEndIndex   The end index of the data series when a brush is applied
 * @return {Object}               Configuration
 */


var getAxisMapByItems = function getAxisMapByItems(props, _ref3) {
  var graphicalItems = _ref3.graphicalItems,
      Axis = _ref3.Axis,
      axisType = _ref3.axisType,
      axisIdKey = _ref3.axisIdKey,
      stackGroups = _ref3.stackGroups,
      dataStartIndex = _ref3.dataStartIndex,
      dataEndIndex = _ref3.dataEndIndex;
  var layout = props.layout,
      children = props.children;
  var displayedData = getDisplayedData(props.data, {
    graphicalItems: graphicalItems,
    dataStartIndex: dataStartIndex,
    dataEndIndex: dataEndIndex
  });
  var len = displayedData.length;
  var isCategorical = isCategoricalAxis(layout, axisType);
  var index = -1; // The default type of x-axis is category axis,
  // The default contents of x-axis is the serial numbers of data
  // The default type of y-axis is number axis
  // The default contents of y-axis is the domain of data

  var axisMap = graphicalItems.reduce(function (result, child) {
    var axisId = child.props[axisIdKey];

    if (!result[axisId]) {
      index++;
      var domain;

      if (isCategorical) {
        domain = _range(0, len);
      } else if (stackGroups && stackGroups[axisId] && stackGroups[axisId].hasStack) {
        domain = getDomainOfStackGroups(stackGroups[axisId].stackGroups, dataStartIndex, dataEndIndex);
        domain = detectReferenceElementsDomain(children, domain, axisId, axisType);
      } else {
        domain = parseSpecifiedDomain(Axis.defaultProps.domain, getDomainOfItemsWithSameAxis(displayedData, graphicalItems.filter(function (item) {
          return item.props[axisIdKey] === axisId && !item.props.hide;
        }), 'number'), Axis.defaultProps.allowDataOverflow);
        domain = detectReferenceElementsDomain(children, domain, axisId, axisType);
      }

      return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, axisId, _objectSpread(_objectSpread({
        axisType: axisType
      }, Axis.defaultProps), {}, {
        hide: true,
        orientation: _get(ORIENT_MAP, "".concat(axisType, ".").concat(index % 2), null),
        domain: domain,
        originalDomain: Axis.defaultProps.domain,
        isCategorical: isCategorical,
        layout: layout // specify scale when no Axis
        // scale: isCategorical ? 'band' : 'linear',

      })));
    }

    return result;
  }, {});
  return axisMap;
};
/**
 * Get the configuration of all x-axis or y-axis
 * @param  {Object} props          Latest props
 * @param  {String} axisType       The type of axis
 * @param  {Array}  graphicalItems The instances of item
 * @param  {Object} stackGroups    The items grouped by axisId and stackId
 * @param {Number} dataStartIndex  The start index of the data series when a brush is applied
 * @param {Number} dataEndIndex    The end index of the data series when a brush is applied
 * @return {Object}          Configuration
 */


var getAxisMap = function getAxisMap(props, _ref4) {
  var _ref4$axisType = _ref4.axisType,
      axisType = _ref4$axisType === void 0 ? 'xAxis' : _ref4$axisType,
      AxisComp = _ref4.AxisComp,
      graphicalItems = _ref4.graphicalItems,
      stackGroups = _ref4.stackGroups,
      dataStartIndex = _ref4.dataStartIndex,
      dataEndIndex = _ref4.dataEndIndex;
  var children = props.children;
  var axisIdKey = "".concat(axisType, "Id"); // Get all the instance of Axis

  var axes = findAllByType(children, AxisComp);
  var axisMap = {};

  if (axes && axes.length) {
    axisMap = getAxisMapByAxes(props, {
      axes: axes,
      graphicalItems: graphicalItems,
      axisType: axisType,
      axisIdKey: axisIdKey,
      stackGroups: stackGroups,
      dataStartIndex: dataStartIndex,
      dataEndIndex: dataEndIndex
    });
  } else if (graphicalItems && graphicalItems.length) {
    axisMap = getAxisMapByItems(props, {
      Axis: AxisComp,
      graphicalItems: graphicalItems,
      axisType: axisType,
      axisIdKey: axisIdKey,
      stackGroups: stackGroups,
      dataStartIndex: dataStartIndex,
      dataEndIndex: dataEndIndex
    });
  }

  return axisMap;
};

var tooltipTicksGenerator = function tooltipTicksGenerator(axisMap) {
  var axis = getAnyElementOfObject(axisMap);
  var tooltipTicks = getTicksOfAxis(axis, false, true);
  return {
    tooltipTicks: tooltipTicks,
    orderedTooltipTicks: _sortBy(tooltipTicks, function (o) {
      return o.coordinate;
    }),
    tooltipAxis: axis,
    tooltipAxisBandSize: getBandSizeOfAxis(axis)
  };
};
/**
 * Returns default, reset state for the categorical chart.
 * @param {Object} props Props object to use when creating the default state
 * @return {Object} Whole new state
 */


var createDefaultState = function createDefaultState(props) {
  var children = props.children,
      defaultShowTooltip = props.defaultShowTooltip;
  var brushItem = findChildByType(children, Brush.displayName);
  var startIndex = brushItem && brushItem.props && brushItem.props.startIndex || 0;
  var endIndex = brushItem && brushItem.props && brushItem.props.endIndex || props.data && props.data.length - 1 || 0;
  return {
    chartX: 0,
    chartY: 0,
    dataStartIndex: startIndex,
    dataEndIndex: endIndex,
    activeTooltipIndex: -1,
    isTooltipActive: !_isNil(defaultShowTooltip) ? defaultShowTooltip : false
  };
};

var hasGraphicalBarItem = function hasGraphicalBarItem(graphicalItems) {
  if (!graphicalItems || !graphicalItems.length) {
    return false;
  }

  return graphicalItems.some(function (item) {
    var name = getDisplayName(item && item.type);
    return name && name.indexOf('Bar') >= 0;
  });
};

var getAxisNameByLayout = function getAxisNameByLayout(layout) {
  if (layout === 'horizontal') {
    return {
      numericAxisName: 'yAxis',
      cateAxisName: 'xAxis'
    };
  }

  if (layout === 'vertical') {
    return {
      numericAxisName: 'xAxis',
      cateAxisName: 'yAxis'
    };
  }

  if (layout === 'centric') {
    return {
      numericAxisName: 'radiusAxis',
      cateAxisName: 'angleAxis'
    };
  }

  return {
    numericAxisName: 'angleAxis',
    cateAxisName: 'radiusAxis'
  };
};
/**
 * Calculate the offset of main part in the svg element
 * @param  {Object} props          Latest props
 * graphicalItems The instances of item
 * xAxisMap       The configuration of x-axis
 * yAxisMap       The configuration of y-axis
 * @param  {Object} prevLegendBBox          the boundary box of legend
 * @return {Object} The offset of main part in the svg element
 */


var calculateOffset = function calculateOffset(_ref5, prevLegendBBox) {
  var props = _ref5.props,
      graphicalItems = _ref5.graphicalItems,
      _ref5$xAxisMap = _ref5.xAxisMap,
      xAxisMap = _ref5$xAxisMap === void 0 ? {} : _ref5$xAxisMap,
      _ref5$yAxisMap = _ref5.yAxisMap,
      yAxisMap = _ref5$yAxisMap === void 0 ? {} : _ref5$yAxisMap;
  var width = props.width,
      height = props.height,
      children = props.children;
  var margin = props.margin || {};
  var brushItem = findChildByType(children, Brush.displayName);
  var legendItem = findChildByType(children, Legend.displayName);
  var offsetH = Object.keys(yAxisMap).reduce(function (result, id) {
    var entry = yAxisMap[id];
    var orientation = entry.orientation;

    if (!entry.mirror && !entry.hide) {
      return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, orientation, result[orientation] + entry.width));
    }

    return result;
  }, {
    left: margin.left || 0,
    right: margin.right || 0
  });
  var offsetV = Object.keys(xAxisMap).reduce(function (result, id) {
    var entry = xAxisMap[id];
    var orientation = entry.orientation;

    if (!entry.mirror && !entry.hide) {
      return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, orientation, _get(result, "".concat(orientation)) + entry.height));
    }

    return result;
  }, {
    top: margin.top || 0,
    bottom: margin.bottom || 0
  });

  var offset = _objectSpread(_objectSpread({}, offsetV), offsetH);

  var brushBottom = offset.bottom;

  if (brushItem) {
    offset.bottom += brushItem.props.height || Brush.defaultProps.height;
  }

  if (legendItem && prevLegendBBox) {
    offset = appendOffsetOfLegend(offset, graphicalItems, props, prevLegendBBox);
  }

  return _objectSpread(_objectSpread({
    brushBottom: brushBottom
  }, offset), {}, {
    width: width - offset.left - offset.right,
    height: height - offset.top - offset.bottom
  });
};

export var generateCategoricalChart = function generateCategoricalChart(_ref6) {
  var _class, _temp;

  var chartName = _ref6.chartName,
      GraphicalChild = _ref6.GraphicalChild,
      _ref6$defaultTooltipE = _ref6.defaultTooltipEventType,
      defaultTooltipEventType = _ref6$defaultTooltipE === void 0 ? 'axis' : _ref6$defaultTooltipE,
      _ref6$validateTooltip = _ref6.validateTooltipEventTypes,
      validateTooltipEventTypes = _ref6$validateTooltip === void 0 ? ['axis'] : _ref6$validateTooltip,
      axisComponents = _ref6.axisComponents,
      legendContent = _ref6.legendContent,
      formatAxisMap = _ref6.formatAxisMap,
      defaultProps = _ref6.defaultProps;

  var getFormatItems = function getFormatItems(props, currentState) {
    var graphicalItems = currentState.graphicalItems,
        stackGroups = currentState.stackGroups,
        offset = currentState.offset,
        updateId = currentState.updateId,
        dataStartIndex = currentState.dataStartIndex,
        dataEndIndex = currentState.dataEndIndex;
    var barSize = props.barSize,
        layout = props.layout,
        barGap = props.barGap,
        barCategoryGap = props.barCategoryGap,
        globalMaxBarSize = props.maxBarSize;

    var _getAxisNameByLayout = getAxisNameByLayout(layout),
        numericAxisName = _getAxisNameByLayout.numericAxisName,
        cateAxisName = _getAxisNameByLayout.cateAxisName;

    var hasBar = hasGraphicalBarItem(graphicalItems);
    var sizeList = hasBar && getBarSizeList({
      barSize: barSize,
      stackGroups: stackGroups
    });
    var formatedItems = [];
    graphicalItems.forEach(function (item, index) {
      var displayedData = getDisplayedData(props.data, {
        dataStartIndex: dataStartIndex,
        dataEndIndex: dataEndIndex
      }, item);
      var _item$props = item.props,
          dataKey = _item$props.dataKey,
          childMaxBarSize = _item$props.maxBarSize;
      var numericAxisId = item.props["".concat(numericAxisName, "Id")];
      var cateAxisId = item.props["".concat(cateAxisName, "Id")];
      var axisObj = axisComponents.reduce(function (result, entry) {
        var _objectSpread6;

        var axisMap = currentState["".concat(entry.axisType, "Map")];
        var id = item.props["".concat(entry.axisType, "Id")];
        var axis = axisMap && axisMap[id];
        return _objectSpread(_objectSpread({}, result), {}, (_objectSpread6 = {}, _defineProperty(_objectSpread6, entry.axisType, axis), _defineProperty(_objectSpread6, "".concat(entry.axisType, "Ticks"), getTicksOfAxis(axis)), _objectSpread6));
      }, {});
      var cateAxis = axisObj[cateAxisName];
      var cateTicks = axisObj["".concat(cateAxisName, "Ticks")];
      var stackedData = stackGroups && stackGroups[numericAxisId] && stackGroups[numericAxisId].hasStack && getStackedDataOfItem(item, stackGroups[numericAxisId].stackGroups);
      var itemIsBar = getDisplayName(item.type).indexOf('Bar') >= 0;
      var bandSize = getBandSizeOfAxis(cateAxis, cateTicks);
      var barPosition = [];

      if (itemIsBar) {
        var barBandSize = getBandSizeOfAxis(cateAxis, cateTicks, true); // 如果是bar，计算bar的位置

        var maxBarSize = _isNil(childMaxBarSize) ? globalMaxBarSize : childMaxBarSize;
        barPosition = getBarPosition({
          barGap: barGap,
          barCategoryGap: barCategoryGap,
          bandSize: barBandSize !== bandSize ? barBandSize : bandSize,
          sizeList: sizeList[cateAxisId],
          maxBarSize: maxBarSize
        });

        if (barBandSize !== bandSize) {
          barPosition = barPosition.map(function (pos) {
            return _objectSpread(_objectSpread({}, pos), {}, {
              position: _objectSpread(_objectSpread({}, pos.position), {}, {
                offset: pos.position.offset - barBandSize / 2
              })
            });
          });
        }
      }

      var componsedFn = item && item.type && item.type.getComposedData;

      if (componsedFn) {
        var _objectSpread7;

        formatedItems.push({
          props: _objectSpread(_objectSpread({}, componsedFn(_objectSpread(_objectSpread({}, axisObj), {}, {
            displayedData: displayedData,
            props: props,
            dataKey: dataKey,
            item: item,
            bandSize: bandSize,
            barPosition: barPosition,
            offset: offset,
            stackedData: stackedData,
            layout: layout,
            dataStartIndex: dataStartIndex,
            dataEndIndex: dataEndIndex
          }))), {}, (_objectSpread7 = {
            key: item.key || "item-".concat(index)
          }, _defineProperty(_objectSpread7, numericAxisName, axisObj[numericAxisName]), _defineProperty(_objectSpread7, cateAxisName, axisObj[cateAxisName]), _defineProperty(_objectSpread7, "animationId", updateId), _objectSpread7)),
          childIndex: parseChildIndex(item, props.children),
          item: item
        });
      }
    });
    return formatedItems;
  };
  /**
   * The AxisMaps are expensive to render on large data sets
   * so provide the ability to store them in state and only update them when necessary
   * they are dependent upon the start and end index of
   * the brush so it's important that this method is called _after_
   * the state is updated with any new start/end indices
   *
   * @param {Object} props          The props object to be used for updating the axismaps
   * dataStartIndex: The start index of the data series when a brush is applied
   * dataEndIndex: The end index of the data series when a brush is applied
   * updateId: The update id
   * @param {Object} prevState      Prev state
   * @return {Object} state New state to set
   */


  var updateStateOfAxisMapsOffsetAndStackGroups = function updateStateOfAxisMapsOffsetAndStackGroups(_ref7, prevState) {
    var props = _ref7.props,
        dataStartIndex = _ref7.dataStartIndex,
        dataEndIndex = _ref7.dataEndIndex,
        updateId = _ref7.updateId;

    if (!validateWidthHeight({
      props: props
    })) {
      return null;
    }

    var children = props.children,
        layout = props.layout,
        stackOffset = props.stackOffset,
        data = props.data,
        reverseStackOrder = props.reverseStackOrder;

    var _getAxisNameByLayout2 = getAxisNameByLayout(layout),
        numericAxisName = _getAxisNameByLayout2.numericAxisName,
        cateAxisName = _getAxisNameByLayout2.cateAxisName;

    var graphicalItems = findAllByType(children, GraphicalChild);
    var stackGroups = getStackGroupsByAxisId(data, graphicalItems, "".concat(numericAxisName, "Id"), "".concat(cateAxisName, "Id"), stackOffset, reverseStackOrder);
    var axisObj = axisComponents.reduce(function (result, entry) {
      var name = "".concat(entry.axisType, "Map");
      return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, name, getAxisMap(props, _objectSpread(_objectSpread({}, entry), {}, {
        graphicalItems: graphicalItems,
        stackGroups: entry.axisType === numericAxisName && stackGroups,
        dataStartIndex: dataStartIndex,
        dataEndIndex: dataEndIndex
      }))));
    }, {});
    var offset = calculateOffset(_objectSpread(_objectSpread({}, axisObj), {}, {
      props: props,
      graphicalItems: graphicalItems
    }), prevState === null || prevState === void 0 ? void 0 : prevState.legendBBox);
    Object.keys(axisObj).forEach(function (key) {
      axisObj[key] = formatAxisMap(props, axisObj[key], offset, key.replace('Map', ''), chartName);
    });
    var cateAxisMap = axisObj["".concat(cateAxisName, "Map")];
    var ticksObj = tooltipTicksGenerator(cateAxisMap);
    var formatedGraphicalItems = getFormatItems(props, _objectSpread(_objectSpread({}, axisObj), {}, {
      dataStartIndex: dataStartIndex,
      dataEndIndex: dataEndIndex,
      updateId: updateId,
      graphicalItems: graphicalItems,
      stackGroups: stackGroups,
      offset: offset
    }));
    return _objectSpread(_objectSpread({
      formatedGraphicalItems: formatedGraphicalItems,
      graphicalItems: graphicalItems,
      offset: offset,
      stackGroups: stackGroups
    }, ticksObj), axisObj);
  };

  return _temp = _class = /*#__PURE__*/function (_Component) {
    _inherits(CategoricalChartWrapper, _Component);

    var _super = _createSuper(CategoricalChartWrapper);

    // todo join specific chart propTypes
    function CategoricalChartWrapper(_props) {
      var _this;

      _classCallCheck(this, CategoricalChartWrapper);

      _this = _super.call(this, _props);
      _this.uniqueChartId = void 0;
      _this.clipPathId = void 0;
      _this.legendInstance = void 0;
      _this.deferId = void 0;
      _this.container = void 0;

      _this.clearDeferId = function () {
        if (!_isNil(_this.deferId) && deferClear) {
          deferClear(_this.deferId);
        }

        _this.deferId = null;
      };

      _this.handleLegendBBoxUpdate = function (box) {
        if (box && _this.legendInstance) {
          var _this$state = _this.state,
              dataStartIndex = _this$state.dataStartIndex,
              dataEndIndex = _this$state.dataEndIndex,
              updateId = _this$state.updateId;

          _this.setState(_objectSpread({
            legendBBox: box
          }, updateStateOfAxisMapsOffsetAndStackGroups({
            props: _this.props,
            dataStartIndex: dataStartIndex,
            dataEndIndex: dataEndIndex,
            updateId: updateId
          }, _objectSpread(_objectSpread({}, _this.state), {}, {
            legendBBox: box
          }))));
        }
      };

      _this.handleReceiveSyncEvent = function (cId, chartId, data) {
        var syncId = _this.props.syncId;

        if (syncId === cId && chartId !== _this.uniqueChartId) {
          _this.clearDeferId();

          _this.deferId = defer && defer(_this.applySyncEvent.bind(_assertThisInitialized(_this), data));
        }
      };

      _this.handleBrushChange = function (_ref8) {
        var startIndex = _ref8.startIndex,
            endIndex = _ref8.endIndex;

        // Only trigger changes if the extents of the brush have actually changed
        if (startIndex !== _this.state.dataStartIndex || endIndex !== _this.state.dataEndIndex) {
          var updateId = _this.state.updateId;

          _this.setState(function () {
            return _objectSpread({
              dataStartIndex: startIndex,
              dataEndIndex: endIndex
            }, updateStateOfAxisMapsOffsetAndStackGroups({
              props: _this.props,
              dataStartIndex: startIndex,
              dataEndIndex: endIndex,
              updateId: updateId
            }, _this.state));
          });

          _this.triggerSyncEvent({
            dataStartIndex: startIndex,
            dataEndIndex: endIndex
          });
        }
      };

      _this.handleMouseEnter = function (e) {
        var onMouseEnter = _this.props.onMouseEnter;

        var mouse = _this.getMouseInfo(e);

        if (mouse) {
          var nextState = _objectSpread(_objectSpread({}, mouse), {}, {
            isTooltipActive: true
          });

          _this.setState(nextState);

          _this.triggerSyncEvent(nextState);

          if (_isFunction(onMouseEnter)) {
            onMouseEnter(nextState, e);
          }
        }
      };

      _this.triggeredAfterMouseMove = function (e) {
        var onMouseMove = _this.props.onMouseMove;

        var mouse = _this.getMouseInfo(e);

        var nextState = mouse ? _objectSpread(_objectSpread({}, mouse), {}, {
          isTooltipActive: true
        }) : {
          isTooltipActive: false
        };

        _this.setState(nextState);

        _this.triggerSyncEvent(nextState);

        if (_isFunction(onMouseMove)) {
          onMouseMove(nextState, e);
        }
      };

      _this.handleItemMouseEnter = function (el, index, e) {
        _this.setState(function () {
          return {
            isTooltipActive: true,
            activeItem: el,
            activePayload: el.tooltipPayload,
            activeCoordinate: el.tooltipPosition || {
              x: el.cx,
              y: el.cy
            }
          };
        });
      };

      _this.handleItemMouseLeave = function () {
        _this.setState(function () {
          return {
            isTooltipActive: false
          };
        });
      };

      _this.handleMouseMove = function (e) {
        if (e && _isFunction(e.persist)) {
          e.persist();
        }

        _this.triggeredAfterMouseMove(e);
      };

      _this.handleMouseLeave = function (e) {
        var onMouseLeave = _this.props.onMouseLeave;
        var nextState = {
          isTooltipActive: false
        };

        _this.setState(nextState);

        _this.triggerSyncEvent(nextState);

        if (_isFunction(onMouseLeave)) {
          onMouseLeave(nextState, e);
        }

        _this.cancelThrottledTriggerAfterMouseMove();
      };

      _this.handleOuterEvent = function (e) {
        var eventName = getReactEventByType(e);

        var event = _get(_this.props, "".concat(eventName));

        if (eventName && _isFunction(event)) {
          var mouse;

          if (/.*touch.*/i.test(eventName)) {
            mouse = _this.getMouseInfo(e.changedTouches[0]);
          } else {
            mouse = _this.getMouseInfo(e);
          }

          var handler = event;
          handler(mouse, e);
        }
      };

      _this.handleClick = function (e) {
        var onClick = _this.props.onClick;

        var mouse = _this.getMouseInfo(e);

        if (mouse) {
          var nextState = _objectSpread(_objectSpread({}, mouse), {}, {
            isTooltipActive: true
          });

          _this.setState(nextState);

          _this.triggerSyncEvent(nextState);

          if (_isFunction(onClick)) {
            onClick(nextState, e);
          }
        }
      };

      _this.handleMouseDown = function (e) {
        var onMouseDown = _this.props.onMouseDown;

        if (_isFunction(onMouseDown)) {
          var mouse = _this.getMouseInfo(e);

          onMouseDown(mouse, e);
        }
      };

      _this.handleMouseUp = function (e) {
        var onMouseUp = _this.props.onMouseUp;

        if (_isFunction(onMouseUp)) {
          var mouse = _this.getMouseInfo(e);

          onMouseUp(mouse, e);
        }
      };

      _this.handleTouchMove = function (e) {
        if (e.changedTouches != null && e.changedTouches.length > 0) {
          _this.handleMouseMove(e.changedTouches[0]);
        }
      };

      _this.handleTouchStart = function (e) {
        if (e.changedTouches != null && e.changedTouches.length > 0) {
          _this.handleMouseDown(e.changedTouches[0]);
        }
      };

      _this.handleTouchEnd = function (e) {
        if (e.changedTouches != null && e.changedTouches.length > 0) {
          _this.handleMouseUp(e.changedTouches[0]);
        }
      };

      _this.verticalCoordinatesGenerator = function (_ref9) {
        var xAxis = _ref9.xAxis,
            width = _ref9.width,
            height = _ref9.height,
            offset = _ref9.offset;
        return getCoordinatesOfGrid(CartesianAxis.getTicks(_objectSpread(_objectSpread(_objectSpread({}, CartesianAxis.defaultProps), xAxis), {}, {
          ticks: getTicksOfAxis(xAxis, true),
          viewBox: {
            x: 0,
            y: 0,
            width: width,
            height: height
          }
        })), offset.left, offset.left + offset.width);
      };

      _this.horizontalCoordinatesGenerator = function (_ref10) {
        var yAxis = _ref10.yAxis,
            width = _ref10.width,
            height = _ref10.height,
            offset = _ref10.offset;
        return getCoordinatesOfGrid(CartesianAxis.getTicks(_objectSpread(_objectSpread(_objectSpread({}, CartesianAxis.defaultProps), yAxis), {}, {
          ticks: getTicksOfAxis(yAxis, true),
          viewBox: {
            x: 0,
            y: 0,
            width: width,
            height: height
          }
        })), offset.top, offset.top + offset.height);
      };

      _this.axesTicksGenerator = function (axis) {
        return getTicksOfAxis(axis, true);
      };

      _this.renderCursor = function (element) {
        var _this$state2 = _this.state,
            isTooltipActive = _this$state2.isTooltipActive,
            activeCoordinate = _this$state2.activeCoordinate,
            activePayload = _this$state2.activePayload,
            offset = _this$state2.offset,
            activeTooltipIndex = _this$state2.activeTooltipIndex;

        var tooltipEventType = _this.getTooltipEventType();

        if (!element || !element.props.cursor || !isTooltipActive || !activeCoordinate || tooltipEventType !== 'axis') {
          return null;
        }

        var layout = _this.props.layout;
        var restProps;
        var cursorComp = Curve;

        if (chartName === 'ScatterChart') {
          restProps = activeCoordinate;
          cursorComp = Cross;
        } else if (chartName === 'BarChart') {
          restProps = _this.getCursorRectangle();
          cursorComp = Rectangle;
        } else if (layout === 'radial') {
          var _this$getCursorPoints = _this.getCursorPoints(),
              cx = _this$getCursorPoints.cx,
              cy = _this$getCursorPoints.cy,
              radius = _this$getCursorPoints.radius,
              startAngle = _this$getCursorPoints.startAngle,
              endAngle = _this$getCursorPoints.endAngle;

          restProps = {
            cx: cx,
            cy: cy,
            startAngle: startAngle,
            endAngle: endAngle,
            innerRadius: radius,
            outerRadius: radius
          };
          cursorComp = Sector;
        } else {
          restProps = {
            points: _this.getCursorPoints()
          };
          cursorComp = Curve;
        }

        var key = element.key || '_recharts-cursor';

        var cursorProps = _objectSpread(_objectSpread(_objectSpread(_objectSpread({
          stroke: '#ccc',
          pointerEvents: 'none'
        }, offset), restProps), filterProps(element.props.cursor)), {}, {
          payload: activePayload,
          payloadIndex: activeTooltipIndex,
          key: key,
          className: 'recharts-tooltip-cursor'
        });

        return /*#__PURE__*/isValidElement(element.props.cursor) ? /*#__PURE__*/cloneElement(element.props.cursor, cursorProps) : /*#__PURE__*/createElement(cursorComp, cursorProps);
      };

      _this.renderPolarAxis = function (element, displayName, index) {
        var axisType = _get(element, 'type.axisType');

        var axisMap = _get(_this.state, "".concat(axisType, "Map"));

        var axisOption = axisMap[element.props["".concat(axisType, "Id")]];
        return /*#__PURE__*/cloneElement(element, _objectSpread(_objectSpread({}, axisOption), {}, {
          className: axisType,
          key: element.key || "".concat(displayName, "-").concat(index),
          ticks: getTicksOfAxis(axisOption, true)
        }));
      };

      _this.renderXAxis = function (element, displayName, index) {
        var xAxisMap = _this.state.xAxisMap;
        var axisObj = xAxisMap[element.props.xAxisId];
        return _this.renderAxis(axisObj, element, displayName, index);
      };

      _this.renderYAxis = function (element, displayName, index) {
        var yAxisMap = _this.state.yAxisMap;
        var axisObj = yAxisMap[element.props.yAxisId];
        return _this.renderAxis(axisObj, element, displayName, index);
      };

      _this.renderGrid = function (element) {
        var _this$state3 = _this.state,
            xAxisMap = _this$state3.xAxisMap,
            yAxisMap = _this$state3.yAxisMap,
            offset = _this$state3.offset;
        var _this$props = _this.props,
            width = _this$props.width,
            height = _this$props.height;
        var xAxis = getAnyElementOfObject(xAxisMap);

        var yAxisWithFiniteDomain = _find(yAxisMap, function (axis) {
          return _every(axis.domain, isFinit);
        });

        var yAxis = yAxisWithFiniteDomain || getAnyElementOfObject(yAxisMap);
        var props = element.props || {};
        return /*#__PURE__*/cloneElement(element, {
          key: element.key || 'grid',
          x: isNumber(props.x) ? props.x : offset.left,
          y: isNumber(props.y) ? props.y : offset.top,
          width: isNumber(props.width) ? props.width : offset.width,
          height: isNumber(props.height) ? props.height : offset.height,
          xAxis: xAxis,
          yAxis: yAxis,
          offset: offset,
          chartWidth: width,
          chartHeight: height,
          verticalCoordinatesGenerator: props.verticalCoordinatesGenerator || _this.verticalCoordinatesGenerator,
          horizontalCoordinatesGenerator: props.horizontalCoordinatesGenerator || _this.horizontalCoordinatesGenerator
        });
      };

      _this.renderPolarGrid = function (element) {
        var _element$props = element.props,
            radialLines = _element$props.radialLines,
            polarAngles = _element$props.polarAngles,
            polarRadius = _element$props.polarRadius;
        var _this$state4 = _this.state,
            radiusAxisMap = _this$state4.radiusAxisMap,
            angleAxisMap = _this$state4.angleAxisMap;
        var radiusAxis = getAnyElementOfObject(radiusAxisMap);
        var angleAxis = getAnyElementOfObject(angleAxisMap);
        var cx = angleAxis.cx,
            cy = angleAxis.cy,
            innerRadius = angleAxis.innerRadius,
            outerRadius = angleAxis.outerRadius;
        var props = element.props || {};
        return /*#__PURE__*/cloneElement(element, {
          polarAngles: _isArray(polarAngles) ? polarAngles : getTicksOfAxis(angleAxis, true).map(function (entry) {
            return entry.coordinate;
          }),
          polarRadius: _isArray(polarRadius) ? polarRadius : getTicksOfAxis(radiusAxis, true).map(function (entry) {
            return entry.coordinate;
          }),
          cx: cx,
          cy: cy,
          innerRadius: innerRadius,
          outerRadius: outerRadius,
          key: element.key || 'polar-grid',
          radialLines: radialLines
        });
      };

      _this.renderLegend = function () {
        var formatedGraphicalItems = _this.state.formatedGraphicalItems;
        var _this$props2 = _this.props,
            children = _this$props2.children,
            width = _this$props2.width,
            height = _this$props2.height;
        var margin = _this.props.margin || {};
        var legendWidth = width - (margin.left || 0) - (margin.right || 0);
        var props = getLegendProps({
          children: children,
          formatedGraphicalItems: formatedGraphicalItems,
          legendWidth: legendWidth,
          legendContent: legendContent
        });

        if (!props) {
          return null;
        }

        var item = props.item,
            otherProps = _objectWithoutProperties(props, ["item"]);

        return /*#__PURE__*/cloneElement(item, _objectSpread(_objectSpread({}, otherProps), {}, {
          chartWidth: width,
          chartHeight: height,
          margin: margin,
          ref: function ref(legend) {
            _this.legendInstance = legend;
          },
          onBBoxUpdate: _this.handleLegendBBoxUpdate
        }));
      };

      _this.renderTooltip = function () {
        var children = _this.props.children;
        var tooltipItem = findChildByType(children, Tooltip.displayName);

        if (!tooltipItem) {
          return null;
        }

        var _this$state5 = _this.state,
            isTooltipActive = _this$state5.isTooltipActive,
            activeCoordinate = _this$state5.activeCoordinate,
            activePayload = _this$state5.activePayload,
            activeLabel = _this$state5.activeLabel,
            offset = _this$state5.offset;
        return /*#__PURE__*/cloneElement(tooltipItem, {
          viewBox: _objectSpread(_objectSpread({}, offset), {}, {
            x: offset.left,
            y: offset.top
          }),
          active: isTooltipActive,
          label: activeLabel,
          payload: isTooltipActive ? activePayload : [],
          coordinate: activeCoordinate
        });
      };

      _this.renderBrush = function (element) {
        var _this$props3 = _this.props,
            margin = _this$props3.margin,
            data = _this$props3.data;
        var _this$state6 = _this.state,
            offset = _this$state6.offset,
            dataStartIndex = _this$state6.dataStartIndex,
            dataEndIndex = _this$state6.dataEndIndex,
            updateId = _this$state6.updateId; // TODO: update brush when children update

        return /*#__PURE__*/cloneElement(element, {
          key: element.key || '_recharts-brush',
          onChange: combineEventHandlers(_this.handleBrushChange, null, element.props.onChange),
          data: data,
          x: isNumber(element.props.x) ? element.props.x : offset.left,
          y: isNumber(element.props.y) ? element.props.y : offset.top + offset.height + offset.brushBottom - (margin.bottom || 0),
          width: isNumber(element.props.width) ? element.props.width : offset.width,
          startIndex: dataStartIndex,
          endIndex: dataEndIndex,
          updateId: "brush-".concat(updateId)
        });
      };

      _this.renderReferenceElement = function (element, displayName, index) {
        if (!element) {
          return null;
        }

        var _assertThisInitialize = _assertThisInitialized(_this),
            clipPathId = _assertThisInitialize.clipPathId;

        var _this$state7 = _this.state,
            xAxisMap = _this$state7.xAxisMap,
            yAxisMap = _this$state7.yAxisMap,
            offset = _this$state7.offset;
        var _element$props2 = element.props,
            xAxisId = _element$props2.xAxisId,
            yAxisId = _element$props2.yAxisId;
        return /*#__PURE__*/cloneElement(element, {
          key: element.key || "".concat(displayName, "-").concat(index),
          xAxis: xAxisMap[xAxisId],
          yAxis: yAxisMap[yAxisId],
          viewBox: {
            x: offset.left,
            y: offset.top,
            width: offset.width,
            height: offset.height
          },
          clipPathId: clipPathId
        });
      };

      _this.renderActivePoints = function (_ref11) {
        var item = _ref11.item,
            activePoint = _ref11.activePoint,
            basePoint = _ref11.basePoint,
            childIndex = _ref11.childIndex,
            isRange = _ref11.isRange;
        var result = [];
        var key = item.props.key;
        var _item$item$props = item.item.props,
            activeDot = _item$item$props.activeDot,
            dataKey = _item$item$props.dataKey;

        var dotProps = _objectSpread(_objectSpread({
          index: childIndex,
          dataKey: dataKey,
          cx: activePoint.x,
          cy: activePoint.y,
          r: 4,
          fill: getMainColorOfGraphicItem(item.item),
          strokeWidth: 2,
          stroke: '#fff',
          payload: activePoint.payload,
          value: activePoint.value,
          key: "".concat(key, "-activePoint-").concat(childIndex)
        }, filterProps(activeDot)), adaptEventHandlers(activeDot));

        result.push(CategoricalChartWrapper.renderActiveDot(activeDot, dotProps));

        if (basePoint) {
          result.push(CategoricalChartWrapper.renderActiveDot(activeDot, _objectSpread(_objectSpread({}, dotProps), {}, {
            cx: basePoint.x,
            cy: basePoint.y,
            key: "".concat(key, "-basePoint-").concat(childIndex)
          })));
        } else if (isRange) {
          result.push(null);
        }

        return result;
      };

      _this.renderGraphicChild = function (element, displayName, index) {
        var item = _this.filterFormatItem(element, displayName, index);

        if (!item) {
          return null;
        }

        var tooltipEventType = _this.getTooltipEventType();

        var _this$state8 = _this.state,
            isTooltipActive = _this$state8.isTooltipActive,
            tooltipAxis = _this$state8.tooltipAxis,
            activeTooltipIndex = _this$state8.activeTooltipIndex,
            activeLabel = _this$state8.activeLabel;
        var children = _this.props.children;
        var tooltipItem = findChildByType(children, Tooltip.displayName);
        var _item$props2 = item.props,
            points = _item$props2.points,
            isRange = _item$props2.isRange,
            baseLine = _item$props2.baseLine;
        var _item$item$props2 = item.item.props,
            activeDot = _item$item$props2.activeDot,
            hide = _item$item$props2.hide;
        var hasActive = !hide && isTooltipActive && tooltipItem && activeDot && activeTooltipIndex >= 0;
        var itemEvents = {};

        if (tooltipEventType !== 'axis' && tooltipItem && tooltipItem.props.trigger === 'click') {
          itemEvents = {
            onClick: combineEventHandlers(_this.handleItemMouseEnter, null, element.props.onCLick)
          };
        } else if (tooltipEventType !== 'axis') {
          itemEvents = {
            onMouseLeave: combineEventHandlers(_this.handleItemMouseLeave, null, element.props.onMouseLeave),
            onMouseEnter: combineEventHandlers(_this.handleItemMouseEnter, null, element.props.onMouseEnter)
          };
        }

        var graphicalItem = /*#__PURE__*/cloneElement(element, _objectSpread(_objectSpread({}, item.props), itemEvents));

        function findWithPayload(entry) {
          // TODO needs to verify dataKey is Function
          return typeof tooltipAxis.dataKey === 'function' ? tooltipAxis.dataKey(entry.payload) : null;
        }

        if (hasActive) {
          var activePoint, basePoint;

          if (tooltipAxis.dataKey && !tooltipAxis.allowDuplicatedCategory) {
            // number transform to string
            var specifiedKey = typeof tooltipAxis.dataKey === 'function' ? findWithPayload : 'payload.'.concat(tooltipAxis.dataKey.toString());
            activePoint = findEntryInArray(points, specifiedKey, activeLabel);
            basePoint = isRange && baseLine && findEntryInArray(baseLine, specifiedKey, activeLabel);
          } else {
            activePoint = points[activeTooltipIndex];
            basePoint = isRange && baseLine && baseLine[activeTooltipIndex];
          }

          if (!_isNil(activePoint)) {
            return [graphicalItem].concat(_toConsumableArray(_this.renderActivePoints({
              item: item,
              activePoint: activePoint,
              basePoint: basePoint,
              childIndex: activeTooltipIndex,
              isRange: isRange
            })));
          }
        }

        if (isRange) {
          return [graphicalItem, null, null];
        }

        return [graphicalItem, null];
      };

      _this.renderCustomized = function (element) {
        return /*#__PURE__*/cloneElement(element, _objectSpread(_objectSpread({}, _this.props), _this.state));
      };

      _this.uniqueChartId = _isNil(_props.id) ? uniqueId('recharts') : _props.id;
      _this.clipPathId = "".concat(_this.uniqueChartId, "-clip");

      if (_props.throttleDelay) {
        _this.triggeredAfterMouseMove = _throttle(_this.triggeredAfterMouseMove, _props.throttleDelay);
      }

      _this.state = {};
      return _this;
    }
    /* eslint-disable  react/no-did-mount-set-state */


    _createClass(CategoricalChartWrapper, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (!_isNil(this.props.syncId)) {
          this.addListener();
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        // add syncId
        if (_isNil(prevProps.syncId) && !_isNil(this.props.syncId)) {
          this.addListener();
        } // remove syncId


        if (!_isNil(this.props.syncId) && _isNil(prevProps.syncId)) {
          this.removeListener();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.clearDeferId();

        if (!_isNil(this.props.syncId)) {
          this.removeListener();
        }

        this.cancelThrottledTriggerAfterMouseMove();
      }
    }, {
      key: "cancelThrottledTriggerAfterMouseMove",
      value: function cancelThrottledTriggerAfterMouseMove() {
        if (typeof this.triggeredAfterMouseMove.cancel === 'function') {
          this.triggeredAfterMouseMove.cancel();
        }
      }
    }, {
      key: "getTooltipEventType",
      value: function getTooltipEventType() {
        var tooltipItem = findChildByType(this.props.children, Tooltip.displayName);

        if (tooltipItem && _isBoolean(tooltipItem.props.shared)) {
          var eventType = tooltipItem.props.shared ? 'axis' : 'item';
          return validateTooltipEventTypes.indexOf(eventType) >= 0 ? eventType : defaultTooltipEventType;
        }

        return defaultTooltipEventType;
      }
      /**
       * Get the information of mouse in chart, return null when the mouse is not in the chart
       * @param  {Object} event    The event object
       * @return {Object}          Mouse data
       */

    }, {
      key: "getMouseInfo",
      value: function getMouseInfo(event) {
        if (!this.container) {
          return null;
        }

        var containerOffset = getOffset(this.container);
        var e = calculateChartCoordinate(event, containerOffset);
        var rangeObj = this.inRange(e.chartX, e.chartY);

        if (!rangeObj) {
          return null;
        }

        var _this$state9 = this.state,
            xAxisMap = _this$state9.xAxisMap,
            yAxisMap = _this$state9.yAxisMap;
        var tooltipEventType = this.getTooltipEventType();

        if (tooltipEventType !== 'axis' && xAxisMap && yAxisMap) {
          var xScale = getAnyElementOfObject(xAxisMap).scale;
          var yScale = getAnyElementOfObject(yAxisMap).scale;
          var xValue = xScale && xScale.invert ? xScale.invert(e.chartX) : null;
          var yValue = yScale && yScale.invert ? yScale.invert(e.chartY) : null;
          return _objectSpread(_objectSpread({}, e), {}, {
            xValue: xValue,
            yValue: yValue
          });
        }

        var toolTipData = getTooltipData(this.state, this.props.data, this.props.layout, rangeObj);

        if (toolTipData) {
          return _objectSpread(_objectSpread({}, e), toolTipData);
        }

        return null;
      }
    }, {
      key: "getCursorRectangle",
      value: function getCursorRectangle() {
        var layout = this.props.layout;
        var _this$state10 = this.state,
            activeCoordinate = _this$state10.activeCoordinate,
            offset = _this$state10.offset,
            tooltipAxisBandSize = _this$state10.tooltipAxisBandSize;
        var halfSize = tooltipAxisBandSize / 2;
        return {
          stroke: 'none',
          fill: '#ccc',
          x: layout === 'horizontal' ? activeCoordinate.x - halfSize : offset.left + 0.5,
          y: layout === 'horizontal' ? offset.top + 0.5 : activeCoordinate.y - halfSize,
          width: layout === 'horizontal' ? tooltipAxisBandSize : offset.width - 1,
          height: layout === 'horizontal' ? offset.height - 1 : tooltipAxisBandSize
        };
      }
    }, {
      key: "getCursorPoints",
      value: function getCursorPoints() {
        var layout = this.props.layout;
        var _this$state11 = this.state,
            activeCoordinate = _this$state11.activeCoordinate,
            offset = _this$state11.offset;
        var x1, y1, x2, y2;

        if (layout === 'horizontal') {
          x1 = activeCoordinate.x;
          x2 = x1;
          y1 = offset.top;
          y2 = offset.top + offset.height;
        } else if (layout === 'vertical') {
          y1 = activeCoordinate.y;
          y2 = y1;
          x1 = offset.left;
          x2 = offset.left + offset.width;
        } else if (!_isNil(activeCoordinate.cx) || !_isNil(activeCoordinate.cy)) {
          if (layout === 'centric') {
            var cx = activeCoordinate.cx,
                cy = activeCoordinate.cy,
                innerRadius = activeCoordinate.innerRadius,
                outerRadius = activeCoordinate.outerRadius,
                angle = activeCoordinate.angle;
            var innerPoint = polarToCartesian(cx, cy, innerRadius, angle);
            var outerPoint = polarToCartesian(cx, cy, outerRadius, angle);
            x1 = innerPoint.x;
            y1 = innerPoint.y;
            x2 = outerPoint.x;
            y2 = outerPoint.y;
          } else {
            var _cx = activeCoordinate.cx,
                _cy = activeCoordinate.cy,
                radius = activeCoordinate.radius,
                startAngle = activeCoordinate.startAngle,
                endAngle = activeCoordinate.endAngle;
            var startPoint = polarToCartesian(_cx, _cy, radius, startAngle);
            var endPoint = polarToCartesian(_cx, _cy, radius, endAngle);
            return {
              points: [startPoint, endPoint],
              cx: _cx,
              cy: _cy,
              radius: radius,
              startAngle: startAngle,
              endAngle: endAngle
            };
          }
        }

        return [{
          x: x1,
          y: y1
        }, {
          x: x2,
          y: y2
        }];
      }
    }, {
      key: "inRange",
      value: function inRange(x, y) {
        var layout = this.props.layout;

        if (layout === 'horizontal' || layout === 'vertical') {
          var offset = this.state.offset;
          var isInRange = x >= offset.left && x <= offset.left + offset.width && y >= offset.top && y <= offset.top + offset.height;
          return isInRange ? {
            x: x,
            y: y
          } : null;
        }

        var _this$state12 = this.state,
            angleAxisMap = _this$state12.angleAxisMap,
            radiusAxisMap = _this$state12.radiusAxisMap;

        if (angleAxisMap && radiusAxisMap) {
          var angleAxis = getAnyElementOfObject(angleAxisMap);
          return inRangeOfSector({
            x: x,
            y: y
          }, angleAxis);
        }

        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function parseEventsOfWrapper() {
        var children = this.props.children;
        var tooltipEventType = this.getTooltipEventType();
        var tooltipItem = findChildByType(children, Tooltip.displayName);
        var tooltipEvents = {};

        if (tooltipItem && tooltipEventType === 'axis') {
          if (tooltipItem.props.trigger === 'click') {
            tooltipEvents = {
              onClick: this.handleClick
            };
          } else {
            tooltipEvents = {
              onMouseEnter: this.handleMouseEnter,
              onMouseMove: this.handleMouseMove,
              onMouseLeave: this.handleMouseLeave,
              onTouchMove: this.handleTouchMove,
              onTouchStart: this.handleTouchStart,
              onTouchEnd: this.handleTouchEnd
            };
          }
        }

        var outerEvents = adaptEventHandlers(this.props, this.handleOuterEvent);
        return _objectSpread(_objectSpread({}, outerEvents), tooltipEvents);
      }
      /* eslint-disable  no-underscore-dangle */

    }, {
      key: "addListener",
      value: function addListener() {
        eventCenter.on(SYNC_EVENT, this.handleReceiveSyncEvent);

        if (eventCenter.setMaxListeners && eventCenter._maxListeners) {
          eventCenter.setMaxListeners(eventCenter._maxListeners + 1);
        }
      }
    }, {
      key: "removeListener",
      value: function removeListener() {
        eventCenter.removeListener(SYNC_EVENT, this.handleReceiveSyncEvent);

        if (eventCenter.setMaxListeners && eventCenter._maxListeners) {
          eventCenter.setMaxListeners(eventCenter._maxListeners - 1);
        }
      }
    }, {
      key: "triggerSyncEvent",
      value: function triggerSyncEvent(data) {
        var syncId = this.props.syncId;

        if (!_isNil(syncId)) {
          eventCenter.emit(SYNC_EVENT, syncId, this.uniqueChartId, data);
        }
      }
    }, {
      key: "applySyncEvent",
      value: function applySyncEvent(data) {
        var _this$props4 = this.props,
            layout = _this$props4.layout,
            syncMethod = _this$props4.syncMethod;
        var updateId = this.state.updateId;
        var dataStartIndex = data.dataStartIndex,
            dataEndIndex = data.dataEndIndex;

        if (!_isNil(data.dataStartIndex) || !_isNil(data.dataEndIndex)) {
          this.setState(_objectSpread({
            dataStartIndex: dataStartIndex,
            dataEndIndex: dataEndIndex
          }, updateStateOfAxisMapsOffsetAndStackGroups({
            props: this.props,
            dataStartIndex: dataStartIndex,
            dataEndIndex: dataEndIndex,
            updateId: updateId
          }, this.state)));
        } else if (!_isNil(data.activeTooltipIndex)) {
          var chartX = data.chartX,
              chartY = data.chartY;
          var activeTooltipIndex = data.activeTooltipIndex;
          var _this$state13 = this.state,
              offset = _this$state13.offset,
              tooltipTicks = _this$state13.tooltipTicks;

          if (!offset) {
            return;
          }

          if (typeof syncMethod === 'function') {
            // Call a callback function. If there is an application specific algorithm
            activeTooltipIndex = syncMethod(activeTooltipIndex, data);
          } else if (syncMethod === 'value') {
            // Set activeTooltipIndex to the index with the same value as data.activeLabel
            // For loop instead of findIndex because the latter is very slow in some browsers
            activeTooltipIndex = -1; // in case we cannot find the element

            for (var i = 0; i < tooltipTicks.length; i++) {
              if (tooltipTicks[i].value === data.activeLabel) {
                activeTooltipIndex = i;
                break;
              }
            }
          }

          var viewBox = _objectSpread(_objectSpread({}, offset), {}, {
            x: offset.left,
            y: offset.top
          }); // When a categotical chart is combined with another chart, the value of chartX
          // and chartY may beyond the boundaries.


          var validateChartX = Math.min(chartX, viewBox.x + viewBox.width);
          var validateChartY = Math.min(chartY, viewBox.y + viewBox.height);
          var activeLabel = tooltipTicks[activeTooltipIndex] && tooltipTicks[activeTooltipIndex].value;
          var activePayload = getTooltipContent(this.state, this.props.data, activeTooltipIndex);
          var activeCoordinate = tooltipTicks[activeTooltipIndex] ? {
            x: layout === 'horizontal' ? tooltipTicks[activeTooltipIndex].coordinate : validateChartX,
            y: layout === 'horizontal' ? validateChartY : tooltipTicks[activeTooltipIndex].coordinate
          } : originCoordinate;
          this.setState(_objectSpread(_objectSpread({}, data), {}, {
            activeLabel: activeLabel,
            activeCoordinate: activeCoordinate,
            activePayload: activePayload,
            activeTooltipIndex: activeTooltipIndex
          }));
        } else {
          this.setState(data);
        }
      }
    }, {
      key: "filterFormatItem",
      value: function filterFormatItem(item, displayName, childIndex) {
        var formatedGraphicalItems = this.state.formatedGraphicalItems;

        for (var i = 0, len = formatedGraphicalItems.length; i < len; i++) {
          var entry = formatedGraphicalItems[i];

          if (entry.item === item || entry.props.key === item.key || displayName === getDisplayName(entry.item.type) && childIndex === entry.childIndex) {
            return entry;
          }
        }

        return null;
      }
    }, {
      key: "renderAxis",
      value:
      /**
       * Draw axis
       * @param {Object} axisOptions The options of axis
       * @param {Object} element      The axis element
       * @param {String} displayName  The display name of axis
       * @param {Number} index        The index of element
       * @return {ReactElement}       The instance of x-axes
       */
      function renderAxis(axisOptions, element, displayName, index) {
        var _this$props5 = this.props,
            width = _this$props5.width,
            height = _this$props5.height;
        return /*#__PURE__*/React.createElement(CartesianAxis, _extends({}, axisOptions, {
          className: "recharts-".concat(axisOptions.axisType, " ").concat(axisOptions.axisType),
          key: element.key || "".concat(displayName, "-").concat(index),
          viewBox: {
            x: 0,
            y: 0,
            width: width,
            height: height
          },
          ticksGenerator: this.axesTicksGenerator
        }));
      }
      /**
       * Draw grid
       * @param  {ReactElement} element the grid item
       * @return {ReactElement} The instance of grid
       */

    }, {
      key: "renderClipPath",
      value: function renderClipPath() {
        var clipPathId = this.clipPathId;
        var _this$state$offset = this.state.offset,
            left = _this$state$offset.left,
            top = _this$state$offset.top,
            height = _this$state$offset.height,
            width = _this$state$offset.width;
        return /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
          id: clipPathId
        }, /*#__PURE__*/React.createElement("rect", {
          x: left,
          y: top,
          height: height,
          width: width
        })));
      }
    }, {
      key: "getXScales",
      value: function getXScales() {
        var xAxisMap = this.state.xAxisMap;
        return xAxisMap ? Object.entries(xAxisMap).reduce(function (res, _ref12) {
          var _ref13 = _slicedToArray(_ref12, 2),
              axisId = _ref13[0],
              axisProps = _ref13[1];

          return _objectSpread(_objectSpread({}, res), {}, _defineProperty({}, axisId, axisProps.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function getYScales() {
        var yAxisMap = this.state.yAxisMap;
        return yAxisMap ? Object.entries(yAxisMap).reduce(function (res, _ref14) {
          var _ref15 = _slicedToArray(_ref14, 2),
              axisId = _ref15[0],
              axisProps = _ref15[1];

          return _objectSpread(_objectSpread({}, res), {}, _defineProperty({}, axisId, axisProps.scale));
        }, {}) : null;
      }
    }, {
      key: "getXScaleByAxisId",
      value: function getXScaleByAxisId(axisId) {
        var _this$state$xAxisMap, _this$state$xAxisMap$;

        return (_this$state$xAxisMap = this.state.xAxisMap) === null || _this$state$xAxisMap === void 0 ? void 0 : (_this$state$xAxisMap$ = _this$state$xAxisMap[axisId]) === null || _this$state$xAxisMap$ === void 0 ? void 0 : _this$state$xAxisMap$.scale;
      }
    }, {
      key: "getYScaleByAxisId",
      value: function getYScaleByAxisId(axisId) {
        var _this$state$yAxisMap, _this$state$yAxisMap$;

        return (_this$state$yAxisMap = this.state.yAxisMap) === null || _this$state$yAxisMap === void 0 ? void 0 : (_this$state$yAxisMap$ = _this$state$yAxisMap[axisId]) === null || _this$state$yAxisMap$ === void 0 ? void 0 : _this$state$yAxisMap$.scale;
      }
    }, {
      key: "getItemByXY",
      value: function getItemByXY(chartXY) {
        var formatedGraphicalItems = this.state.formatedGraphicalItems;

        if (formatedGraphicalItems && formatedGraphicalItems.length) {
          for (var i = 0, len = formatedGraphicalItems.length; i < len; i++) {
            var graphicalItem = formatedGraphicalItems[i];
            var props = graphicalItem.props,
                item = graphicalItem.item;
            var itemDisplayName = getDisplayName(item.type);

            if (itemDisplayName === 'Bar') {
              var activeBarItem = (props.data || []).find(function (entry) {
                return isInRectangle(chartXY, entry);
              });

              if (activeBarItem) {
                return {
                  graphicalItem: graphicalItem,
                  payload: activeBarItem
                };
              }
            } else if (itemDisplayName === 'RadialBar') {
              var _activeBarItem = (props.data || []).find(function (entry) {
                return inRangeOfSector(chartXY, entry);
              });

              if (_activeBarItem) {
                return {
                  graphicalItem: graphicalItem,
                  payload: _activeBarItem
                };
              }
            }
          }
        }

        return null;
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        if (!validateWidthHeight(this)) {
          return null;
        }

        var _this$props6 = this.props,
            children = _this$props6.children,
            className = _this$props6.className,
            width = _this$props6.width,
            height = _this$props6.height,
            style = _this$props6.style,
            compact = _this$props6.compact,
            others = _objectWithoutProperties(_this$props6, ["children", "className", "width", "height", "style", "compact"]);

        var attrs = filterProps(others);
        var map = {
          CartesianGrid: {
            handler: this.renderGrid,
            once: true
          },
          ReferenceArea: {
            handler: this.renderReferenceElement
          },
          ReferenceLine: {
            handler: this.renderReferenceElement
          },
          ReferenceDot: {
            handler: this.renderReferenceElement
          },
          XAxis: {
            handler: this.renderXAxis
          },
          YAxis: {
            handler: this.renderYAxis
          },
          Brush: {
            handler: this.renderBrush,
            once: true
          },
          Bar: {
            handler: this.renderGraphicChild
          },
          Line: {
            handler: this.renderGraphicChild
          },
          Area: {
            handler: this.renderGraphicChild
          },
          Radar: {
            handler: this.renderGraphicChild
          },
          RadialBar: {
            handler: this.renderGraphicChild
          },
          Scatter: {
            handler: this.renderGraphicChild
          },
          Pie: {
            handler: this.renderGraphicChild
          },
          Funnel: {
            handler: this.renderGraphicChild
          },
          Tooltip: {
            handler: this.renderCursor,
            once: true
          },
          PolarGrid: {
            handler: this.renderPolarGrid,
            once: true
          },
          PolarAngleAxis: {
            handler: this.renderPolarAxis
          },
          PolarRadiusAxis: {
            handler: this.renderPolarAxis
          },
          Customized: {
            handler: this.renderCustomized
          }
        }; // The "compact" mode is mainly used as the panorama within Brush

        if (compact) {
          return /*#__PURE__*/React.createElement(Surface, _extends({}, attrs, {
            width: width,
            height: height
          }), this.renderClipPath(), renderByOrder(children, map));
        }

        var events = this.parseEventsOfWrapper();
        return /*#__PURE__*/React.createElement("div", _extends({
          className: classNames('recharts-wrapper', className),
          style: _objectSpread({
            position: 'relative',
            cursor: 'default',
            width: width,
            height: height
          }, style)
        }, events, {
          ref: function ref(node) {
            _this2.container = node;
          }
        }), /*#__PURE__*/React.createElement(Surface, _extends({}, attrs, {
          width: width,
          height: height
        }), this.renderClipPath(), renderByOrder(children, map)), this.renderLegend(), this.renderTooltip());
      }
    }]);

    return CategoricalChartWrapper;
  }(Component), _class.displayName = chartName, _class.defaultProps = _objectSpread({
    layout: 'horizontal',
    stackOffset: 'none',
    barCategoryGap: '10%',
    barGap: 4,
    margin: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5
    },
    reverseStackOrder: false,
    syncMethod: 'index'
  }, defaultProps), _class.getDerivedStateFromProps = function (nextProps, prevState) {
    var data = nextProps.data,
        children = nextProps.children,
        width = nextProps.width,
        height = nextProps.height,
        layout = nextProps.layout,
        stackOffset = nextProps.stackOffset,
        margin = nextProps.margin;

    if (_isNil(prevState.updateId)) {
      var defaultState = createDefaultState(nextProps);
      return _objectSpread(_objectSpread(_objectSpread({}, defaultState), {}, {
        updateId: 0
      }, updateStateOfAxisMapsOffsetAndStackGroups(_objectSpread(_objectSpread({
        props: nextProps
      }, defaultState), {}, {
        updateId: 0
      }), prevState)), {}, {
        prevData: data,
        prevWidth: width,
        prevHeight: height,
        prevLayout: layout,
        prevStackOffset: stackOffset,
        prevMargin: margin,
        prevChildren: children
      });
    }

    if (data !== prevState.prevData || width !== prevState.prevWidth || height !== prevState.prevHeight || layout !== prevState.prevLayout || stackOffset !== prevState.prevStackOffset || !shallowEqual(margin, prevState.prevMargin)) {
      var _defaultState = createDefaultState(nextProps); // Fixes https://github.com/recharts/recharts/issues/2143


      var keepFromPrevState = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: prevState.chartX,
        chartY: prevState.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: prevState.isTooltipActive
      };

      var updatesToState = _objectSpread(_objectSpread({}, getTooltipData(prevState, data, layout)), {}, {
        updateId: prevState.updateId + 1
      });

      var newState = _objectSpread(_objectSpread(_objectSpread({}, _defaultState), keepFromPrevState), updatesToState);

      return _objectSpread(_objectSpread(_objectSpread({}, newState), updateStateOfAxisMapsOffsetAndStackGroups(_objectSpread({
        props: nextProps
      }, newState), prevState)), {}, {
        prevData: data,
        prevWidth: width,
        prevHeight: height,
        prevLayout: layout,
        prevStackOffset: stackOffset,
        prevMargin: margin,
        prevChildren: children
      });
    }

    if (!isChildrenEqual(children, prevState.prevChildren)) {
      // update configuration in chilren
      var hasGlobalData = !_isNil(data);
      var newUpdateId = hasGlobalData ? prevState.updateId : prevState.updateId + 1;
      return _objectSpread(_objectSpread({
        updateId: newUpdateId
      }, updateStateOfAxisMapsOffsetAndStackGroups(_objectSpread(_objectSpread({
        props: nextProps
      }, prevState), {}, {
        updateId: newUpdateId
      }), prevState)), {}, {
        prevChildren: children
      });
    }

    return null;
  }, _class.renderActiveDot = function (option, props) {
    var dot;

    if ( /*#__PURE__*/isValidElement(option)) {
      dot = /*#__PURE__*/cloneElement(option, props);
    } else if (_isFunction(option)) {
      dot = option(props);
    } else {
      dot = /*#__PURE__*/React.createElement(Dot, props);
    }

    return /*#__PURE__*/React.createElement(Layer, {
      className: "recharts-active-dot",
      key: props.key
    }, dot);
  }, _temp;
};