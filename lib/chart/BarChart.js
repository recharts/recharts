'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BarChart = undefined;

var _isArray2 = require('lodash/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

var _isNil2 = require('lodash/isNil');

var _isNil3 = _interopRequireDefault(_isNil2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * @fileOverview Bar Chart
                                                                                                                                                                                                                                                                   */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layer = require('../container/Layer');

var _Layer2 = _interopRequireDefault(_Layer);

var _Tooltip = require('../component/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _Rectangle = require('../shape/Rectangle');

var _Rectangle2 = _interopRequireDefault(_Rectangle);

var _DataUtils = require('../util/DataUtils');

var _ReactUtils = require('../util/ReactUtils');

var _generateCategoricalChart = require('./generateCategoricalChart');

var _generateCategoricalChart2 = _interopRequireDefault(_generateCategoricalChart);

var _Cell = require('../component/Cell');

var _Cell2 = _interopRequireDefault(_Cell);

var _Bar = require('../cartesian/Bar');

var _Bar2 = _interopRequireDefault(_Bar);

var _AnimationDecorator = require('../util/AnimationDecorator');

var _AnimationDecorator2 = _interopRequireDefault(_AnimationDecorator);

var _ComposedDataDecorator = require('../util/ComposedDataDecorator');

var _ComposedDataDecorator2 = _interopRequireDefault(_ComposedDataDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getCategoryAxisCoordinate = function getCategoryAxisCoordinate(_ref) {
  var axis = _ref.axis,
      ticks = _ref.ticks,
      offset = _ref.offset,
      bandSize = _ref.bandSize,
      entry = _ref.entry,
      index = _ref.index;

  if (axis.type === 'category') {
    return ticks[index] ? ticks[index].coordinate + offset : null;
  }

  var value = (0, _DataUtils.getValueByDataKey)(entry, axis.dataKey);

  return !(0, _isNil3.default)(value) ? axis.scale(value) - bandSize / 2 + offset : null;
};

var getBaseValue = function getBaseValue(_ref2) {
  var props = _ref2.props,
      xAxis = _ref2.xAxis,
      yAxis = _ref2.yAxis;
  var layout = props.layout;

  var numberAxis = layout === 'horizontal' ? yAxis : xAxis;
  var domain = numberAxis.scale.domain();

  if (numberAxis.type === 'number') {
    var min = Math.min(domain[0], domain[1]);
    var max = Math.max(domain[0], domain[1]);

    if (min <= 0 && max >= 0) {
      return 0;
    }
    if (max < 0) {
      return max;
    }

    return min;
  }

  return domain[0];
};

/**
 * Compose the data of each group
 * @param {Object} props Props for the component
 * @param {Object} item        An instance of Bar
 * @param {Array} barPosition The offset and size of each bar
 * @param {Object} xAxis       The configuration of x-axis
 * @param {Object} yAxis       The configuration of y-axis
 * @param {Array} stackedData  The stacked data of a bar item
 * @return{Array} Composed data
 */
var getComposedData = function getComposedData(_ref3) {
  var props = _ref3.props,
      item = _ref3.item,
      barPosition = _ref3.barPosition,
      bandSize = _ref3.bandSize,
      xAxis = _ref3.xAxis,
      yAxis = _ref3.yAxis,
      xTicks = _ref3.xTicks,
      yTicks = _ref3.yTicks,
      stackedData = _ref3.stackedData;
  var layout = props.layout,
      dataStartIndex = props.dataStartIndex,
      dataEndIndex = props.dataEndIndex;
  var _item$props = item.props,
      dataKey = _item$props.dataKey,
      children = _item$props.children,
      minPointSize = _item$props.minPointSize;

  var pos = (0, _DataUtils.findPositionOfBar)(barPosition, item);
  var stackedDomain = stackedData && layout === 'horizontal' ? yAxis.scale.domain() : xAxis.scale.domain();

  if (!pos) {
    return [];
  }

  var data = props.data.slice(dataStartIndex, dataEndIndex + 1);
  var baseValue = getBaseValue({ props: props, xAxis: xAxis, yAxis: yAxis });
  var cells = (0, _ReactUtils.findAllByType)(children, _Cell2.default);

  return data.map(function (entry, index) {
    var value = void 0,
        x = void 0,
        y = void 0,
        width = void 0,
        height = void 0;

    if (stackedData) {
      value = (0, _DataUtils.truncateByDomain)(stackedData[dataStartIndex + index], stackedDomain);
    } else {
      value = (0, _DataUtils.getValueByDataKey)(entry, dataKey);

      if (!(0, _isArray3.default)(value)) {
        value = [baseValue, value];
      }
    }

    if (layout === 'horizontal') {

      x = getCategoryAxisCoordinate({
        axis: xAxis,
        ticks: xTicks,
        bandSize: bandSize,
        offset: pos.offset,
        entry: entry,
        index: index
      });
      y = yAxis.scale(xAxis.orientation === 'top' ? value[0] : value[1]);
      width = pos.size;
      height = xAxis.orientation === 'top' ? yAxis.scale(value[1]) - yAxis.scale(value[0]) : yAxis.scale(value[0]) - yAxis.scale(value[1]);

      if (Math.abs(minPointSize) > 0 && Math.abs(height) < Math.abs(minPointSize)) {
        var delta = Math.sign(height || minPointSize) * (Math.abs(minPointSize) - Math.abs(height));

        y -= delta;
        height += delta;
      }
    } else {
      x = xAxis.scale(yAxis.orientation === 'left' ? value[0] : value[1]);
      y = getCategoryAxisCoordinate({
        axis: yAxis,
        ticks: yTicks,
        bandSize: bandSize,
        offset: pos.offset,
        entry: entry,
        index: index
      });
      width = yAxis.orientation === 'left' ? xAxis.scale(value[1]) - xAxis.scale(value[0]) : xAxis.scale(value[0]) - xAxis.scale(value[1]);
      height = pos.size;

      if (Math.abs(minPointSize) > 0 && Math.abs(width) < Math.abs(minPointSize)) {
        var _delta = Math.sign(width || minPointSize) * (Math.abs(minPointSize) - Math.abs(width));
        width += _delta;
      }
    }

    return _extends({}, entry, {
      x: x, y: y, width: width, height: height, value: stackedData ? value : value[1],
      payload: entry
    }, cells && cells[index] && cells[index].props);
  });
};

var BarChart = (_dec = (0, _ComposedDataDecorator2.default)({ getComposedData: getComposedData }), (0, _AnimationDecorator2.default)(_class = _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(BarChart, _Component);

  function BarChart() {
    _classCallCheck(this, BarChart);

    return _possibleConstructorReturn(this, (BarChart.__proto__ || Object.getPrototypeOf(BarChart)).apply(this, arguments));
  }

  _createClass(BarChart, [{
    key: 'renderCursor',
    value: function renderCursor(_ref4) {
      var xAxisMap = _ref4.xAxisMap,
          yAxisMap = _ref4.yAxisMap,
          offset = _ref4.offset;
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

      var axisMap = layout === 'horizontal' ? xAxisMap : yAxisMap;
      var axis = (0, _DataUtils.getAnyElementOfObject)(axisMap);
      var ticks = axisTicks;

      if (!ticks || !ticks[activeTooltipIndex]) {
        return null;
      }

      var bandSize = (0, _DataUtils.getBandSizeOfAxis)(axis);
      var start = ticks[activeTooltipIndex].coordinate;
      var cursorProps = _extends({
        fill: '#f1f1f1'
      }, (0, _ReactUtils.getPresentationAttributes)(tooltipItem.props.cursor), {
        x: layout === 'horizontal' ? start : offset.left + 0.5,
        y: layout === 'horizontal' ? offset.top + 0.5 : start,
        width: layout === 'horizontal' ? bandSize : offset.width - 1,
        height: layout === 'horizontal' ? offset.height - 1 : bandSize
      });

      return _react2.default.isValidElement(tooltipItem.props.cursor) ? _react2.default.cloneElement(tooltipItem.props.cursor, cursorProps) : _react2.default.createElement(_Rectangle2.default, _extends({}, cursorProps, { className: 'recharts-bar-cursor' }));
    }

    /**
     * Draw the main part of bar chart
     * @param  {Array} items     All the instance of Bar
     * @param  {Object} offset   The offset of main part in the svg element
     * @return {ReactComponent}  All the instances of Bar
     */

  }, {
    key: 'renderItems',
    value: function renderItems(items, offset) {
      if (!items || !items.length) {
        return null;
      }

      var _props2 = this.props,
          layout = _props2.layout,
          xAxisMap = _props2.xAxisMap,
          yAxisMap = _props2.yAxisMap;
      var _props3 = this.props,
          animationId = _props3.animationId,
          allComposedData = _props3.allComposedData;


      return items.map(function (child, i) {
        return _react2.default.cloneElement(child, _extends({
          key: 'bar-' + i,
          layout: layout,
          animationId: animationId
        }, offset, {
          data: allComposedData[i],
          xAxis: xAxisMap[child.props.xAxisId],
          yAxis: yAxisMap[child.props.yAxisId]
        }));
      }, this);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          isComposed = _props4.isComposed,
          graphicalItems = _props4.graphicalItems,
          xAxisMap = _props4.xAxisMap,
          yAxisMap = _props4.yAxisMap,
          offset = _props4.offset;


      return _react2.default.createElement(
        _Layer2.default,
        { className: 'recharts-bar-graphical' },
        !isComposed && this.renderCursor({ xAxisMap: xAxisMap, yAxisMap: yAxisMap, offset: offset }),
        this.renderItems(graphicalItems, offset)
      );
    }
  }]);

  return BarChart;
}(_react.Component), _class2.displayName = 'BarChart', _class2.propTypes = {
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
  barCategoryGap: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  barGap: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  barSize: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  // used internally
  isComposed: _react.PropTypes.bool,
  animationId: _react.PropTypes.number
}, _class2.defaultProps = {
  barCategoryGap: '10%',
  barGap: 4
}, _temp)) || _class) || _class);
exports.default = (0, _generateCategoricalChart2.default)(BarChart, _Bar2.default);
exports.BarChart = BarChart;