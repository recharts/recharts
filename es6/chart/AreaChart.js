import _isFunction from 'lodash/isFunction';
import _isArray from 'lodash/isArray';
import _isNil from 'lodash/isNil';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview Area Chart
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Smooth from 'react-smooth';

import Layer from '../container/Layer';
import Tooltip from '../component/Tooltip';
import Dot from '../shape/Dot';
import Curve from '../shape/Curve';
import { getPresentationAttributes, findChildByType } from '../util/ReactUtils';
import { getMainColorOfGraphicItem } from '../util/CartesianUtils';
import { isNumber, getValueByDataKey } from '../util/DataUtils';
import generateCategoricalChart from './generateCategoricalChart';
import Area from '../cartesian/Area';
import AnimationDecorator from '../util/AnimationDecorator';
import composedDataDecorator from '../util/ComposedDataDecorator';

var getCategoryAxisCoordinate = function getCategoryAxisCoordinate(_ref) {
  var axis = _ref.axis,
      ticks = _ref.ticks,
      bandSize = _ref.bandSize,
      entry = _ref.entry,
      index = _ref.index;

  if (axis.type === 'category') {
    return ticks[index] ? ticks[index].coordinate + bandSize / 2 : null;
  }

  var value = getValueByDataKey(entry, axis.dataKey);

  return !_isNil(value) ? axis.scale(value) : null;
};

var getBaseValue = function getBaseValue(props, xAxis, yAxis) {
  var layout = props.layout,
      baseValue = props.baseValue;


  if (isNumber(baseValue)) {
    return baseValue;
  }

  var numberAxis = layout === 'horizontal' ? yAxis : xAxis;
  var domain = numberAxis.scale.domain();

  if (numberAxis.type === 'number') {
    var max = Math.max(domain[0], domain[1]);
    var min = Math.min(domain[0], domain[1]);

    if (baseValue === 'dataMin') {
      return min;
    }
    if (baseValue === 'dataMax') {
      return max;
    }

    return max < 0 ? max : Math.max(Math.min(domain[0], domain[1]), 0);
  }

  if (baseValue === 'dataMin') {
    return domain[0];
  }
  if (baseValue === 'dataMax') {
    return domain[1];
  }

  return domain[0];
};

/**
 * Compose the data of each area
 * @param {Object} props The props that are passed to the component
 * @param {Object} xAxis       The configuration of x-axis
 * @param {Object} yAxis       The configuration of y-axis
 * @param {String} dataKey     The unique key of a group
 * @param {Array} stackedData If the area is stacked,
 * the stackedData is an array of min value and max value
 * @return {Array} Composed data
 */
var getComposedData = function getComposedData(_ref2) {
  var props = _ref2.props,
      xAxis = _ref2.xAxis,
      yAxis = _ref2.yAxis,
      xTicks = _ref2.xTicks,
      yTicks = _ref2.yTicks,
      bandSize = _ref2.bandSize,
      dataKey = _ref2.dataKey,
      stackedData = _ref2.stackedData;
  var layout = props.layout,
      dataStartIndex = props.dataStartIndex,
      dataEndIndex = props.dataEndIndex;

  var data = props.data.slice(dataStartIndex, dataEndIndex + 1);
  var hasStack = stackedData && stackedData.length;
  var baseValue = getBaseValue(props, xAxis, yAxis);
  var isRange = false;

  var points = data.map(function (entry, index) {
    var value = void 0;

    if (hasStack) {
      value = stackedData[dataStartIndex + index];
    } else {
      value = getValueByDataKey(entry, dataKey);

      if (!_isArray(value)) {
        value = [baseValue, value];
      } else {
        isRange = true;
      }
    }

    if (layout === 'horizontal') {
      return {
        x: getCategoryAxisCoordinate({ axis: xAxis, ticks: xTicks, bandSize: bandSize, entry: entry, index: index }),
        y: _isNil(value[1]) ? null : yAxis.scale(value[1]),
        value: value,
        payload: entry
      };
    }

    return {
      x: _isNil(value[1]) ? null : xAxis.scale(value[1]),
      y: getCategoryAxisCoordinate({ axis: yAxis, ticks: yTicks, bandSize: bandSize, entry: entry, index: index }),
      value: value,
      payload: entry
    };
  });

  var baseLine = void 0;
  if (hasStack || isRange) {
    baseLine = points.map(function (entry) {
      return {
        x: layout === 'horizontal' ? entry.x : xAxis.scale(entry && entry.value[0]),
        y: layout === 'horizontal' ? yAxis.scale(entry && entry.value[0]) : entry.y
      };
    });
  } else if (layout === 'horizontal') {
    baseLine = yAxis.scale(baseValue);
  } else {
    baseLine = xAxis.scale(baseValue);
  }

  return { points: points, baseLine: baseLine, layout: layout, isRange: isRange };
};

export var AreaChart = (_dec = composedDataDecorator({ getComposedData: getComposedData }), AnimationDecorator(_class = _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(AreaChart, _Component);

  function AreaChart() {
    _classCallCheck(this, AreaChart);

    return _possibleConstructorReturn(this, (AreaChart.__proto__ || Object.getPrototypeOf(AreaChart)).apply(this, arguments));
  }

  _createClass(AreaChart, [{
    key: 'renderCursor',
    value: function renderCursor(_ref3) {
      var offset = _ref3.offset;
      var _props = this.props,
          children = _props.children,
          isTooltipActive = _props.isTooltipActive,
          layout = _props.layout,
          activeTooltipIndex = _props.activeTooltipIndex,
          axisTicks = _props.axisTicks;

      var tooltipItem = findChildByType(children, Tooltip);

      if (!tooltipItem || !tooltipItem.props.cursor || !isTooltipActive || activeTooltipIndex < 0) {
        return null;
      }

      var ticks = axisTicks;

      if (!ticks || !ticks[activeTooltipIndex]) {
        return null;
      }

      var start = ticks[activeTooltipIndex].coordinate;
      var x1 = layout === 'horizontal' ? start : offset.left;
      var y1 = layout === 'horizontal' ? offset.top : start;
      var x2 = layout === 'horizontal' ? start : offset.left + offset.width;
      var y2 = layout === 'horizontal' ? offset.top + offset.height : start;
      var cursorProps = _extends({
        stroke: '#ccc'
      }, getPresentationAttributes(tooltipItem.props.cursor), {
        points: [{ x: x1, y: y1 }, { x: x2, y: y2 }]
      });

      return React.isValidElement(tooltipItem.props.cursor) ? React.cloneElement(tooltipItem.props.cursor, cursorProps) : React.createElement(Curve, _extends({}, cursorProps, { type: 'linear', className: 'recharts-tooltip-cursor' }));
    }
  }, {
    key: 'renderActiveDot',
    value: function renderActiveDot(option, props, childIndex) {
      var dot = void 0;

      if (React.isValidElement(option)) {
        dot = React.cloneElement(option, props);
      } else if (_isFunction(option)) {
        dot = option(props);
      } else {
        dot = React.createElement(Dot, props);
      }

      return React.createElement(
        Smooth,
        {
          from: 'scale(0)',
          to: 'scale(1)',
          duration: 400,
          key: 'dot-' + childIndex + '-' + props.pointType,
          attributeName: 'transform'
        },
        React.createElement(
          Layer,
          { style: { transformOrigin: 'center center' } },
          dot
        )
      );
    }

    /**
     * Draw the main part of area chart
     * @param  {Array} items     React elements of Area
     * @param  {Object} xAxisMap The configuration of all x-axis
     * @param  {Object} yAxisMap The configuration of all y-axis
     * @param  {Object} offset   The offset of main part in the svg element
     * @param  {Array} allComposedData The array of pre-created composedData
     *                                 {points, basedLine, layout} for each item
     * @return {ReactComponent} The instances of Area
     */

  }, {
    key: 'renderItems',
    value: function renderItems(items, xAxisMap, yAxisMap, offset, allComposedData) {
      var _this2 = this;

      var _props2 = this.props,
          children = _props2.children,
          layout = _props2.layout,
          isTooltipActive = _props2.isTooltipActive,
          activeTooltipIndex = _props2.activeTooltipIndex;

      var tooltipItem = findChildByType(children, Tooltip);
      var hasDot = tooltipItem && isTooltipActive;
      var dotItems = [];
      var animationId = this.props.animationId;


      var areaItems = items.reduce(function (result, child, i) {
        var _child$props = child.props,
            dataKey = _child$props.dataKey,
            activeDot = _child$props.activeDot;

        var currentComposedData = allComposedData[i];
        var isRange = currentComposedData.isRange;

        var activePoint = currentComposedData.points && currentComposedData.points[activeTooltipIndex];
        var basePoint = isRange && currentComposedData.baseLine && currentComposedData.baseLine[activeTooltipIndex];

        if (hasDot && activeDot && activePoint) {
          var dotProps = _extends({
            index: activeTooltipIndex,
            dataKey: dataKey,
            animationId: animationId,
            cx: activePoint.x, cy: activePoint.y, r: 4,
            fill: getMainColorOfGraphicItem(child),
            strokeWidth: 2, stroke: '#fff',
            payload: activePoint.payload,
            value: activePoint.value,
            pointType: 'activePoint'
          }, getPresentationAttributes(activeDot));

          dotItems.push(_this2.renderActiveDot(activeDot, dotProps, i));

          if (basePoint) {
            dotItems.push(_this2.renderActiveDot(activeDot, _extends({}, dotProps, {
              cx: basePoint.x,
              cy: basePoint.y,
              pointType: 'basePoint'
            }), i));
          }
        }

        var area = React.cloneElement(child, _extends({
          key: child.key || 'area-' + i
        }, currentComposedData, offset, {
          animationId: animationId,
          layout: layout,
          xAxis: xAxisMap[child.props.xAxisId],
          yAxis: yAxisMap[child.props.yAxisId]
        }));

        return [].concat(_toConsumableArray(result), [area]);
      }, []);

      return React.createElement(
        Layer,
        { className: 'recharts-area-chart-group' },
        React.createElement(
          Layer,
          { className: 'recharts-area-chart-shapes' },
          areaItems
        ),
        React.createElement(
          Layer,
          { className: 'recharts-area-chart-dots' },
          dotItems
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          isComposed = _props3.isComposed,
          graphicalItems = _props3.graphicalItems,
          xAxisMap = _props3.xAxisMap,
          yAxisMap = _props3.yAxisMap,
          offset = _props3.offset,
          allComposedData = _props3.allComposedData;


      return React.createElement(
        Layer,
        { className: 'recharts-area-graphical' },
        !isComposed && this.renderCursor({ xAxisMap: xAxisMap, yAxisMap: yAxisMap, offset: offset }),
        this.renderItems(graphicalItems, xAxisMap, yAxisMap, offset, allComposedData)
      );
    }
  }]);

  return AreaChart;
}(Component), _class2.displayName = 'AreaChart', _class2.propTypes = {
  allComposedData: PropTypes.array,
  axisTicks: PropTypes.array,
  layout: PropTypes.oneOf(['horizontal', 'vertical']),
  dataStartIndex: PropTypes.number,
  dataEndIndex: PropTypes.number,
  data: PropTypes.array,
  isTooltipActive: PropTypes.bool,
  activeTooltipIndex: PropTypes.number,
  xAxisMap: PropTypes.object,
  yAxisMap: PropTypes.object,
  offset: PropTypes.object,
  graphicalItems: PropTypes.array,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  stackGroups: PropTypes.object,
  baseValue: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['dataMin', 'dataMax', 'auto'])]),
  // used internally
  isComposed: PropTypes.bool,
  animationId: PropTypes.number
}, _class2.defaultProps = {
  baseValue: 'auto'
}, _temp)) || _class) || _class);

export default generateCategoricalChart(AreaChart, Area);