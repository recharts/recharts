'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LineChart = undefined;

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _isNil2 = require('lodash/isNil');

var _isNil3 = _interopRequireDefault(_isNil2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp; /**
                                   * @fileOverview Line Chart
                                   */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSmooth = require('react-smooth');

var _reactSmooth2 = _interopRequireDefault(_reactSmooth);

var _Layer = require('../container/Layer');

var _Layer2 = _interopRequireDefault(_Layer);

var _Tooltip = require('../component/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _Curve = require('../shape/Curve');

var _Curve2 = _interopRequireDefault(_Curve);

var _Dot = require('../shape/Dot');

var _Dot2 = _interopRequireDefault(_Dot);

var _generateCategoricalChart = require('./generateCategoricalChart');

var _generateCategoricalChart2 = _interopRequireDefault(_generateCategoricalChart);

var _Line = require('../cartesian/Line');

var _Line2 = _interopRequireDefault(_Line);

var _ReactUtils = require('../util/ReactUtils');

var _AnimationDecorator = require('../util/AnimationDecorator');

var _AnimationDecorator2 = _interopRequireDefault(_AnimationDecorator);

var _ComposedDataDecorator = require('../util/ComposedDataDecorator');

var _ComposedDataDecorator2 = _interopRequireDefault(_ComposedDataDecorator);

var _DataUtils = require('../util/DataUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getCategoryAxisCoordinate = function getCategoryAxisCoordinate(_ref) {
  var axis = _ref.axis,
      ticks = _ref.ticks,
      bandSize = _ref.bandSize,
      entry = _ref.entry,
      index = _ref.index;

  if (axis.type === 'category') {
    return ticks[index] ? ticks[index].coordinate + bandSize / 2 : null;
  }

  var value = (0, _DataUtils.getValueByDataKey)(entry, axis.dataKey);

  return !(0, _isNil3.default)(value) ? axis.scale(value) : null;
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
    var value = (0, _DataUtils.getValueByDataKey)(entry, dataKey);

    if (layout === 'horizontal') {
      return {
        x: getCategoryAxisCoordinate({ axis: xAxis, ticks: xTicks, bandSize: bandSize, entry: entry, index: index }),
        y: (0, _isNil3.default)(value) ? null : yAxis.scale(value),
        value: value,
        payload: entry
      };
    }

    return {
      x: (0, _isNil3.default)(value) ? null : xAxis.scale(value),
      y: getCategoryAxisCoordinate({ axis: yAxis, ticks: yTicks, bandSize: bandSize, entry: entry, index: index }),
      value: value,
      payload: entry
    };
  });
};

var LineChart = exports.LineChart = (_dec = (0, _ComposedDataDecorator2.default)({ getComposedData: getComposedData }), (0, _AnimationDecorator2.default)(_class = _dec(_class = (_temp = _class2 = function (_Component) {
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

      var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);

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
      }, (0, _ReactUtils.getPresentationAttributes)(tooltipItem.props.cursor), {
        points: [{ x: x1, y: y1 }, { x: x2, y: y2 }]
      });

      return _react2.default.isValidElement(tooltipItem.props.cursor) ? _react2.default.cloneElement(tooltipItem.props.cursor, cursorProps) : _react2.default.createElement(_Curve2.default, _extends({}, cursorProps, { type: 'linear', className: 'recharts-tooltip-cursor' }));
    }
  }, {
    key: 'renderActiveDot',
    value: function renderActiveDot(option, props, childIndex) {
      var dot = void 0;

      if (_react2.default.isValidElement(option)) {
        dot = _react2.default.cloneElement(option, props);
      } else if ((0, _isFunction3.default)(option)) {
        dot = option(props);
      } else {
        dot = _react2.default.createElement(_Dot2.default, _extends({}, props, { className: 'recharts-line-active-dot' }));
      }

      return _react2.default.createElement(
        _reactSmooth2.default,
        {
          from: 'scale(0)',
          to: 'scale(1)',
          duration: 400,
          key: 'dot-' + childIndex,
          attributeName: 'transform'
        },
        _react2.default.createElement(
          _Layer2.default,
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

      var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);
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
          }, (0, _ReactUtils.getPresentationAttributes)(activeDot));
          dotItems.push(_this2.renderActiveDot(activeDot, dotProps, i));
        }

        return _react2.default.cloneElement(child, _extends({
          key: 'line-' + i
        }, offset, {
          layout: layout,
          points: points,
          animationId: animationId,
          xAxis: xAxisMap[child.props.xAxisId],
          yAxis: yAxisMap[child.props.yAxisId]
        }));
      }, this);

      return _react2.default.createElement(
        _Layer2.default,
        { className: 'recharts-line-chart-wrapper' },
        _react2.default.createElement(
          _Layer2.default,
          { className: 'recharts-line-chart' },
          lineItems
        ),
        _react2.default.createElement(
          _Layer2.default,
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


      return _react2.default.createElement(
        _Layer2.default,
        { className: 'recharts-line-graphical' },
        !isComposed && this.renderCursor({ offset: offset }),
        this.renderItems(graphicalItems, xAxisMap, yAxisMap, offset)
      );
    }
  }]);

  return LineChart;
}(_react.Component), _class2.displayName = 'LineChart', _class2.propTypes = {
  allComposedData: _react.PropTypes.array,
  axisTicks: _react.PropTypes.array,
  layout: _react.PropTypes.oneOf(['horizontal', 'vertical']),
  dataStartIndex: _react.PropTypes.number,
  dataEndIndex: _react.PropTypes.number,
  data: _react.PropTypes.array,
  isTooltipActive: _react.PropTypes.bool,
  activeTooltipIndex: _react.PropTypes.number,
  xAxisMap: _react.PropTypes.object,
  yAxisMap: _react.PropTypes.object,
  offset: _react.PropTypes.object,
  graphicalItems: _react.PropTypes.array,
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
  // used internally
  isComposed: _react.PropTypes.bool,
  animationId: _react.PropTypes.number
}, _temp)) || _class) || _class);
exports.default = (0, _generateCategoricalChart2.default)(LineChart, _Line2.default);