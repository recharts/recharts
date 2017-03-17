'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AreaChart = undefined;

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _isArray2 = require('lodash/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

var _isNil2 = require('lodash/isNil');

var _isNil3 = _interopRequireDefault(_isNil2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp; /**
                                   * @fileOverview Area Chart
                                   */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSmooth = require('react-smooth');

var _reactSmooth2 = _interopRequireDefault(_reactSmooth);

var _Layer = require('../container/Layer');

var _Layer2 = _interopRequireDefault(_Layer);

var _Tooltip = require('../component/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _Dot = require('../shape/Dot');

var _Dot2 = _interopRequireDefault(_Dot);

var _Curve = require('../shape/Curve');

var _Curve2 = _interopRequireDefault(_Curve);

var _ReactUtils = require('../util/ReactUtils');

var _CartesianUtils = require('../util/CartesianUtils');

var _DataUtils = require('../util/DataUtils');

var _generateCategoricalChart = require('./generateCategoricalChart');

var _generateCategoricalChart2 = _interopRequireDefault(_generateCategoricalChart);

var _Area = require('../cartesian/Area');

var _Area2 = _interopRequireDefault(_Area);

var _AnimationDecorator = require('../util/AnimationDecorator');

var _AnimationDecorator2 = _interopRequireDefault(_AnimationDecorator);

var _ComposedDataDecorator = require('../util/ComposedDataDecorator');

var _ComposedDataDecorator2 = _interopRequireDefault(_ComposedDataDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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

var getBaseValue = function getBaseValue(props, xAxis, yAxis) {
  var layout = props.layout,
      baseValue = props.baseValue;


  if ((0, _DataUtils.isNumber)(baseValue)) {
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
      value = (0, _DataUtils.getValueByDataKey)(entry, dataKey);

      if (!(0, _isArray3.default)(value)) {
        value = [baseValue, value];
      } else {
        isRange = true;
      }
    }

    if (layout === 'horizontal') {
      return {
        x: getCategoryAxisCoordinate({ axis: xAxis, ticks: xTicks, bandSize: bandSize, entry: entry, index: index }),
        y: (0, _isNil3.default)(value[1]) ? null : yAxis.scale(value[1]),
        value: value,
        payload: entry
      };
    }

    return {
      x: (0, _isNil3.default)(value[1]) ? null : xAxis.scale(value[1]),
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

var AreaChart = exports.AreaChart = (_dec = (0, _ComposedDataDecorator2.default)({ getComposedData: getComposedData }), (0, _AnimationDecorator2.default)(_class = _dec(_class = (_temp = _class2 = function (_Component) {
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
        dot = _react2.default.createElement(_Dot2.default, props);
      }

      return _react2.default.createElement(
        _reactSmooth2.default,
        {
          from: 'scale(0)',
          to: 'scale(1)',
          duration: 400,
          key: 'dot-' + childIndex + '-' + props.pointType,
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

      var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);
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
            fill: (0, _CartesianUtils.getMainColorOfGraphicItem)(child),
            strokeWidth: 2, stroke: '#fff',
            payload: activePoint.payload,
            value: activePoint.value,
            pointType: 'activePoint'
          }, (0, _ReactUtils.getPresentationAttributes)(activeDot));

          dotItems.push(_this2.renderActiveDot(activeDot, dotProps, i));

          if (basePoint) {
            dotItems.push(_this2.renderActiveDot(activeDot, _extends({}, dotProps, {
              cx: basePoint.x,
              cy: basePoint.y,
              pointType: 'basePoint'
            }), i));
          }
        }

        var area = _react2.default.cloneElement(child, _extends({
          key: 'area-' + i
        }, currentComposedData, offset, {
          animationId: animationId,
          layout: layout,
          xAxis: xAxisMap[child.props.xAxisId],
          yAxis: yAxisMap[child.props.yAxisId]
        }));

        return [].concat(_toConsumableArray(result), [area]);
      }, []);

      return _react2.default.createElement(
        _Layer2.default,
        { className: 'recharts-area-chart-group' },
        _react2.default.createElement(
          _Layer2.default,
          { className: 'recharts-area-chart-shapes' },
          areaItems
        ),
        _react2.default.createElement(
          _Layer2.default,
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


      return _react2.default.createElement(
        _Layer2.default,
        { className: 'recharts-area-graphical' },
        !isComposed && this.renderCursor({ xAxisMap: xAxisMap, yAxisMap: yAxisMap, offset: offset }),
        this.renderItems(graphicalItems, xAxisMap, yAxisMap, offset, allComposedData)
      );
    }
  }]);

  return AreaChart;
}(_react.Component), _class2.displayName = 'AreaChart', _class2.propTypes = {
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
  stackGroups: _react.PropTypes.object,
  baseValue: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.oneOf(['dataMin', 'dataMax', 'auto'])]),
  // used internally
  isComposed: _react.PropTypes.bool,
  animationId: _react.PropTypes.number
}, _class2.defaultProps = {
  baseValue: 'auto'
}, _temp)) || _class) || _class);
exports.default = (0, _generateCategoricalChart2.default)(AreaChart, _Area2.default);