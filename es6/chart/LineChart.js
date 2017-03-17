import _isFunction from 'lodash/isFunction';
import _isNil from 'lodash/isNil';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview Line Chart
 */
import React, { PropTypes, Component } from 'react';
import Smooth from 'react-smooth';

import Layer from '../container/Layer';
import Tooltip from '../component/Tooltip';
import Curve from '../shape/Curve';
import Dot from '../shape/Dot';
import generateCategoricalChart from './generateCategoricalChart';
import Line from '../cartesian/Line';
import { getPresentationAttributes, findChildByType } from '../util/ReactUtils';
import AnimationDecorator from '../util/AnimationDecorator';
import composedDataDecorator from '../util/ComposedDataDecorator';
import { getValueByDataKey } from '../util/DataUtils';

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
/**
 * Compose the data of each group
 * @param {Object} props The props from the component
 * @param  {Object} xAxis   The configuration of x-axis
 * @param  {Object} yAxis   The configuration of y-axis
 * @param  {String} dataKey The unique key of a group
 * @return {Array}  Composed data
 */
var getComposedData = function getComposedData(_ref2) {
  var props = _ref2.props,
      xAxis = _ref2.xAxis,
      yAxis = _ref2.yAxis,
      xTicks = _ref2.xTicks,
      yTicks = _ref2.yTicks,
      dataKey = _ref2.dataKey,
      bandSize = _ref2.bandSize;
  var layout = props.layout,
      dataStartIndex = props.dataStartIndex,
      dataEndIndex = props.dataEndIndex;

  var data = props.data.slice(dataStartIndex, dataEndIndex + 1);

  return data.map(function (entry, index) {
    var value = getValueByDataKey(entry, dataKey);

    if (layout === 'horizontal') {
      return {
        x: getCategoryAxisCoordinate({ axis: xAxis, ticks: xTicks, bandSize: bandSize, entry: entry, index: index }),
        y: _isNil(value) ? null : yAxis.scale(value),
        value: value,
        payload: entry
      };
    }

    return {
      x: _isNil(value) ? null : xAxis.scale(value),
      y: getCategoryAxisCoordinate({ axis: yAxis, ticks: yTicks, bandSize: bandSize, entry: entry, index: index }),
      value: value,
      payload: entry
    };
  });
};

export var LineChart = (_dec = composedDataDecorator({ getComposedData: getComposedData }), AnimationDecorator(_class = _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(LineChart, _Component);

  function LineChart() {
    _classCallCheck(this, LineChart);

    return _possibleConstructorReturn(this, (LineChart.__proto__ || Object.getPrototypeOf(LineChart)).apply(this, arguments));
  }

  _createClass(LineChart, [{
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
        dot = React.createElement(Dot, _extends({}, props, { className: 'recharts-line-active-dot' }));
      }

      return React.createElement(
        Smooth,
        {
          from: 'scale(0)',
          to: 'scale(1)',
          duration: 400,
          key: 'dot-' + childIndex,
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
     * Draw the main part of line chart
     * @param  {Array} items     All the instance of Line
     * @param  {Object} xAxisMap The configuration of all x-axes
     * @param  {Object} yAxisMap The configuration of all y-axes
     * @param  {Object} offset   The offset of main part in the svg element
     * @return {ReactComponent}  All the instances of Line
     */

  }, {
    key: 'renderItems',
    value: function renderItems(items, xAxisMap, yAxisMap, offset) {
      var _this2 = this;

      var _props2 = this.props,
          children = _props2.children,
          layout = _props2.layout,
          isTooltipActive = _props2.isTooltipActive,
          activeTooltipIndex = _props2.activeTooltipIndex,
          animationId = _props2.animationId,
          allComposedData = _props2.allComposedData;

      var tooltipItem = findChildByType(children, Tooltip);
      var hasDot = tooltipItem && isTooltipActive;
      var dotItems = [];

      var lineItems = items.map(function (child, i) {
        var _child$props = child.props,
            dataKey = _child$props.dataKey,
            stroke = _child$props.stroke,
            activeDot = _child$props.activeDot;

        var points = allComposedData[i];
        var activePoint = points[activeTooltipIndex];

        if (hasDot && activeDot && activePoint) {
          var dotProps = _extends({
            index: activeTooltipIndex,
            dataKey: dataKey,
            cx: activePoint.x, cy: activePoint.y, r: 4,
            fill: stroke, strokeWidth: 2, stroke: '#fff',
            payload: activePoint.payload,
            value: activePoint.value
          }, getPresentationAttributes(activeDot));
          dotItems.push(_this2.renderActiveDot(activeDot, dotProps, i));
        }

        return React.cloneElement(child, _extends({
          key: 'line-' + i
        }, offset, {
          layout: layout,
          points: points,
          animationId: animationId,
          xAxis: xAxisMap[child.props.xAxisId],
          yAxis: yAxisMap[child.props.yAxisId]
        }));
      }, this);

      return React.createElement(
        Layer,
        { className: 'recharts-line-chart-wrapper' },
        React.createElement(
          Layer,
          { className: 'recharts-line-chart' },
          lineItems
        ),
        React.createElement(
          Layer,
          { className: 'recharts-line-chart-dot' },
          dotItems
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          isComposed = _props3.isComposed,
          xAxisMap = _props3.xAxisMap,
          yAxisMap = _props3.yAxisMap,
          offset = _props3.offset,
          graphicalItems = _props3.graphicalItems;


      return React.createElement(
        Layer,
        { className: 'recharts-line-graphical' },
        !isComposed && this.renderCursor({ offset: offset }),
        this.renderItems(graphicalItems, xAxisMap, yAxisMap, offset)
      );
    }
  }]);

  return LineChart;
}(Component), _class2.displayName = 'LineChart', _class2.propTypes = {
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
  // used internally
  isComposed: PropTypes.bool,
  animationId: PropTypes.number
}, _temp)) || _class) || _class);

export default generateCategoricalChart(LineChart, Line);