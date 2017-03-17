'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isNil2 = require('lodash/isNil');

var _isNil3 = _interopRequireDefault(_isNil2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp; /**
                                   * @fileOverview Composed Chart
                                   */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layer = require('../container/Layer');

var _Layer2 = _interopRequireDefault(_Layer);

var _Tooltip = require('../component/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _Line = require('../cartesian/Line');

var _Line2 = _interopRequireDefault(_Line);

var _Bar = require('../cartesian/Bar');

var _Bar2 = _interopRequireDefault(_Bar);

var _Area = require('../cartesian/Area');

var _Area2 = _interopRequireDefault(_Area);

var _Rectangle = require('../shape/Rectangle');

var _Rectangle2 = _interopRequireDefault(_Rectangle);

var _generateCategoricalChart = require('./generateCategoricalChart');

var _generateCategoricalChart2 = _interopRequireDefault(_generateCategoricalChart);

var _DataUtils = require('../util/DataUtils');

var _ReactUtils = require('../util/ReactUtils');

var _PureRender = require('../util/PureRender');

var _PureRender2 = _interopRequireDefault(_PureRender);

var _AreaChart = require('./AreaChart');

var _LineChart = require('./LineChart');

var _BarChart = require('./BarChart');

var _ComposedDataDecorator = require('../util/ComposedDataDecorator');

var _ComposedDataDecorator2 = _interopRequireDefault(_ComposedDataDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GRAPHICAL_TYPES = ['Area', 'Bar', 'Line'];
var GRAPHICAL_MAP = { Area: _AreaChart.AreaChart, Bar: _BarChart.BarChart, Line: _LineChart.LineChart };

var ComposedChart = (_dec = (0, _ComposedDataDecorator2.default)({}), (0, _PureRender2.default)(_class = _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(ComposedChart, _Component);

  function ComposedChart() {
    _classCallCheck(this, ComposedChart);

    return _possibleConstructorReturn(this, (ComposedChart.__proto__ || Object.getPrototypeOf(ComposedChart)).apply(this, arguments));
  }

  _createClass(ComposedChart, [{
    key: 'filterGraphicalItems',
    value: function filterGraphicalItems() {
      var graphicalItems = this.props.graphicalItems;

      var record = {};
      var result = [];

      for (var i = 0, len = graphicalItems.length; i < len; i++) {
        var item = graphicalItems[i];
        var displayName = item.type.displayName;

        if (GRAPHICAL_TYPES.indexOf(displayName) >= 0) {
          if (!(0, _isNil3.default)(record[displayName])) {
            var index = record[displayName];

            result[index].items = [].concat(_toConsumableArray(result[index].items), [item]);
          } else {
            record[displayName] = result.length;
            result.push({ items: [item], type: displayName });
          }
        }
      }

      return result;
    }
  }, {
    key: 'renderCursor',
    value: function renderCursor(_ref) {
      var xAxisMap = _ref.xAxisMap,
          yAxisMap = _ref.yAxisMap,
          offset = _ref.offset;
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

      return _react2.default.isValidElement(tooltipItem.props.cursor) ? _react2.default.cloneElement(tooltipItem.props.cursor, cursorProps) : _react2.default.createElement(_Rectangle2.default, cursorProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          xAxisMap = _props2.xAxisMap,
          yAxisMap = _props2.yAxisMap,
          offset = _props2.offset;

      var filteredItems = this.filterGraphicalItems();

      return _react2.default.createElement(
        _Layer2.default,
        { className: 'recharts-composed' },
        this.renderCursor({ xAxisMap: xAxisMap, yAxisMap: yAxisMap, offset: offset }),
        filteredItems.map(function (_ref2) {
          var items = _ref2.items,
              type = _ref2.type;

          var Chart = GRAPHICAL_MAP[type];

          return _react2.default.createElement(Chart, _extends({ key: type }, _this2.props, { graphicalItems: items, isComposed: true }));
        })
      );
    }
  }]);

  return ComposedChart;
}(_react.Component), _class2.displayName = 'ComposedChart', _class2.propTypes = {
  allComposedData: _react.PropTypes.array,
  axisTicks: _react.PropTypes.array,
  layout: _react.PropTypes.oneOf(['horizontal', 'vertical']),
  dataStartIndex: _react.PropTypes.number,
  dataEndIndex: _react.PropTypes.number,
  isTooltipActive: _react.PropTypes.bool,
  activeTooltipIndex: _react.PropTypes.number,
  xAxisMap: _react.PropTypes.object,
  yAxisMap: _react.PropTypes.object,
  offset: _react.PropTypes.object,
  graphicalItems: _react.PropTypes.array,
  stackGroups: _react.PropTypes.object,
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node])
}, _temp)) || _class) || _class);
exports.default = (0, _generateCategoricalChart2.default)(ComposedChart, [_Line2.default, _Area2.default, _Bar2.default]);