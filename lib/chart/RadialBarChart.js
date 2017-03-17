'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _range2 = require('lodash/range');

var _range3 = _interopRequireDefault(_range2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2; /**
                              * @fileOverview Radar Bar Chart
                              */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _d3Scale = require('d3-scale');

var _Surface = require('../container/Surface');

var _Surface2 = _interopRequireDefault(_Surface);

var _RadialBar = require('../polar/RadialBar');

var _RadialBar2 = _interopRequireDefault(_RadialBar);

var _DataUtils = require('../util/DataUtils');

var _Cell = require('../component/Cell');

var _Cell2 = _interopRequireDefault(_Cell);

var _Legend = require('../component/Legend');

var _Legend2 = _interopRequireDefault(_Legend);

var _Tooltip = require('../component/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _ReactUtils = require('../util/ReactUtils');

var _PolarUtils = require('../util/PolarUtils');

var _PureRender = require('../util/PureRender');

var _PureRender2 = _interopRequireDefault(_PureRender);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadialBarChart = (0, _PureRender2.default)(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(RadialBarChart, _Component);

  function RadialBarChart() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RadialBarChart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RadialBarChart.__proto__ || Object.getPrototypeOf(RadialBarChart)).call.apply(_ref, [this].concat(args))), _this), _this.state = _this.createDefaultState(), _this.handleMouseEnter = function (el) {
      var children = _this.props.children;
      var cx = el.cx,
          cy = el.cy,
          endAngle = el.endAngle,
          outerRadius = el.outerRadius;

      var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);

      if (tooltipItem) {
        _this.setState({
          isTooltipActive: true,
          activeTooltipCoord: (0, _PolarUtils.polarToCartesian)(cx, cy, outerRadius, endAngle),
          activeTooltipPayload: [el.payload]
        });
      }
    }, _this.handleMouseLeave = function () {
      var children = _this.props.children;

      var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);

      if (tooltipItem) {
        _this.setState({
          isTooltipActive: false
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RadialBarChart, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.data !== this.props.data) {
        this.setState(this.createDefaultState());
      }
    }
    /**
     * Compose the data of each group
     * @param  {Object} item        An instance of RadialBar
     * @param  {Array}  barPosition The offset and size of each bar
     * @param  {Object} radiusScale The scale function of radius of bars
     * @param  {Object} center      The coordinate of center
     * @param  {String} dataKey     The unique key of a group
     * @return {Array}              Composed data
     */

  }, {
    key: 'getComposedData',
    value: function getComposedData(item, barPosition, radiusScale, center, dataKey) {
      var data = this.props.data;

      var pos = (0, _DataUtils.findPositionOfBar)(barPosition, item);
      var cells = (0, _ReactUtils.findAllByType)(item.props.children, _Cell2.default);

      return data.map(function (entry, index) {
        var value = (0, _DataUtils.getValueByDataKey)(entry, dataKey);
        var radius = radiusScale(index);

        return _extends({}, entry, center, {
          value: value,
          innerRadius: radius - pos.offset,
          outerRadius: radius - pos.offset + pos.radius,
          payload: entry
        }, cells && cells[index] && cells[index].props);
      });
    }
    /**
     * Calculate the size of all groups
     * @param  {Array} items All the instance of RadialBar
     * @return {Object} The size of all groups
     */

  }, {
    key: 'getRadiusList',
    value: function getRadiusList(items) {
      var barSize = this.props.barSize;


      return items.map(function (child) {
        return _extends({}, child.props, {
          item: child,
          barSize: child.props.barSize || barSize
        });
      });
    }

    /**
     * Calculate the scale function of radius
     * @param {Number} innerRadius The outer radius
     * @param {Number} outerRadius The inner radius
     * @return {Object}            A scale function
     */

  }, {
    key: 'getRadiusScale',
    value: function getRadiusScale(innerRadius, outerRadius) {
      var data = this.props.data;

      var bandCount = Math.max(data.length, 1);
      var range = [outerRadius, innerRadius];
      var scale = (0, _d3Scale.scaleBand)().domain((0, _range3.default)(0, bandCount)).range(range);

      return scale;
    }

    /**
     * Calculate the size of each bar and the gap between two bars
     * @param  {Number} bandRadius  The radius of each category
     * @param  {Array} radiusList   The radius of all groups
     * @return {Number} The size of each bar and the gap between two bars
     */

  }, {
    key: 'getBarPosition',
    value: function getBarPosition(bandRadius, radiusList) {
      var _props = this.props,
          barGap = _props.barGap,
          barCategoryGap = _props.barCategoryGap;

      var len = radiusList.length;
      var result = void 0;

      // whether or not is barSize setted by user
      if (len && radiusList[0].barSize === +radiusList[0].barSize) {
        (function () {
          var sum = radiusList.reduce(function (res, entry) {
            return res + entry.barSize;
          }, 0);
          sum += (len - 1) * barGap;
          var offset = -sum / 2 >> 0;
          var prev = { offset: offset - barGap, radius: 0 };

          result = radiusList.reduce(function (res, entry) {
            prev = {
              offset: prev.offset + prev.radius + barGap,
              radius: entry.barSize
            };

            return [].concat(_toConsumableArray(res), [{ item: entry.item, position: prev }]);
          }, []);
        })();
      } else {
        (function () {
          var offset = (0, _DataUtils.getPercentValue)(barCategoryGap, bandRadius);
          var radius = (bandRadius - 2 * offset - (len - 1) * barGap) / len >> 0;
          offset = -Math.max((radius * len + (len - 1) * barGap) / 2 >> 0, 0);

          result = radiusList.reduce(function (res, entry, i) {
            return [].concat(_toConsumableArray(res), [{
              item: entry.item,
              position: {
                offset: offset + (radius + barGap) * i,
                radius: radius
              }
            }]);
          }, []);
        })();
      }

      return result;
    }
    /**
     * Returns default, reset state for the radial bar chart.
     * @return {Object} Whole new state
     */

  }, {
    key: 'createDefaultState',
    value: function createDefaultState() {
      return {
        activeTooltipLabel: '',
        activeTooltipPayload: [],
        activeTooltipCoord: { x: 0, y: 0 },
        isTooltipActive: false
      };
    }
  }, {
    key: 'renderLegend',


    /**
     * Draw legend
     * @param  {ReactElement} legendItem The instance of Legend
     * @return {ReactElement}            The instance of Legend
     */
    value: function renderLegend() {
      var children = this.props.children;

      var legendItem = (0, _ReactUtils.findChildByType)(children, _Legend2.default);
      if (!legendItem) {
        return null;
      }

      var _props2 = this.props,
          data = _props2.data,
          width = _props2.width,
          height = _props2.height,
          margin = _props2.margin;


      var legendData = legendItem.props && legendItem.props.payload || data.map(function (entry) {
        return {
          type: legendItem.props.iconType || 'square',
          color: entry.fill || '#000',
          value: entry.name,
          payload: entry
        };
      });

      return _react2.default.cloneElement(legendItem, _extends({}, _Legend2.default.getWithHeight(legendItem, width), {
        payload: legendData,
        chartWidth: width,
        chartHeight: height,
        margin: margin
      }));
    }
  }, {
    key: 'renderTooltip',
    value: function renderTooltip() {
      var children = this.props.children;

      var tooltipItem = (0, _ReactUtils.findChildByType)(children, _Tooltip2.default);

      if (!tooltipItem) {
        return null;
      }

      var _props3 = this.props,
          width = _props3.width,
          height = _props3.height;
      var _state = this.state,
          isTooltipActive = _state.isTooltipActive,
          activeTooltipLabel = _state.activeTooltipLabel,
          activeTooltipCoord = _state.activeTooltipCoord,
          activeTooltipPayload = _state.activeTooltipPayload;

      var viewBox = { x: 0, y: 0, width: width, height: height };

      return _react2.default.cloneElement(tooltipItem, {
        viewBox: viewBox,
        active: isTooltipActive,
        label: activeTooltipLabel,
        payload: activeTooltipPayload,
        coordinate: activeTooltipCoord
      });
    }

    /**
     * Draw the main part of bar chart
     * @param  {Array} items     All the instance of RadialBar
     * @param  {Object} radiusScale The scale function of radius of bars
     * @param  {Object} center      The coordinate of center
     * @return {ReactComponent}  All the instances of RadialBar
     */

  }, {
    key: 'renderItems',
    value: function renderItems(items, radiusScale, center) {
      var _this2 = this;

      if (!items || !items.length) {
        return null;
      }

      var _props4 = this.props,
          onMouseEnter = _props4.onMouseEnter,
          onMouseLeave = _props4.onMouseLeave,
          onClick = _props4.onClick;

      var radiusList = this.getRadiusList(items);
      var bandRadius = radiusScale.bandwidth();
      var barPosition = this.getBarPosition(bandRadius, radiusList);

      return items.map(function (child, i) {
        var _child$props = child.props,
            dataKey = _child$props.dataKey,
            childOnMouseEnter = _child$props.onMouseEnter,
            childOnMouseLeave = _child$props.onMouseLeave,
            childOnClick = _child$props.onClick;


        return _react2.default.cloneElement(child, _extends({}, center, {
          key: 'radial-bar-' + i,
          onMouseEnter: (0, _DataUtils.combineEventHandlers)(_this2.handleMouseEnter, onMouseEnter, childOnMouseEnter),
          onMouseLeave: (0, _DataUtils.combineEventHandlers)(_this2.handleMouseLeave, onMouseLeave, childOnMouseLeave),
          onClick: (0, _DataUtils.combineEventHandlers)(null, onClick, childOnClick),
          data: _this2.getComposedData(child, barPosition, radiusScale, center, dataKey)
        }));
      }, this);
    }
  }, {
    key: 'render',
    value: function render() {
      var data = this.props.data;

      if (!(0, _ReactUtils.validateWidthHeight)(this) || !data || !data.length) {
        return null;
      }

      var _props5 = this.props,
          style = _props5.style,
          children = _props5.children,
          className = _props5.className,
          width = _props5.width,
          height = _props5.height,
          margin = _props5.margin,
          others = _objectWithoutProperties(_props5, ['style', 'children', 'className', 'width', 'height', 'margin']);

      var items = (0, _ReactUtils.findAllByType)(children, _RadialBar2.default);
      var cx = (0, _DataUtils.getPercentValue)(this.props.cx, width, width / 2);
      var cy = (0, _DataUtils.getPercentValue)(this.props.cy, height, height / 2);
      var maxRadius = (0, _PolarUtils.getMaxRadius)(width, height, margin);
      var innerRadius = (0, _DataUtils.getPercentValue)(this.props.innerRadius, maxRadius, 0);
      var outerRadius = (0, _DataUtils.getPercentValue)(this.props.outerRadius, maxRadius, maxRadius * 0.8);
      var radiusScale = this.getRadiusScale(innerRadius, outerRadius);
      var attrs = (0, _ReactUtils.getPresentationAttributes)(others);

      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)('recharts-wrapper', className),
          style: _extends({}, style, { cursor: 'default', position: 'relative', width: width, height: height })
        },
        _react2.default.createElement(
          _Surface2.default,
          _extends({}, attrs, { width: width, height: height }),
          this.renderItems(items, radiusScale, { cx: cx, cy: cy }),
          (0, _ReactUtils.filterSvgElements)(children)
        ),
        this.renderLegend(),
        this.renderTooltip(items)
      );
    }
  }]);

  return RadialBarChart;
}(_react.Component), _class2.displayName = 'RadialBarChart', _class2.propTypes = {
  width: _react.PropTypes.number,
  height: _react.PropTypes.number,
  margin: _react.PropTypes.shape({
    top: _react.PropTypes.number,
    right: _react.PropTypes.number,
    bottom: _react.PropTypes.number,
    left: _react.PropTypes.number
  }),
  cy: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  cx: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),

  data: _react.PropTypes.array,
  innerRadius: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  outerRadius: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  // The offset radius between two categorys
  barCategoryGap: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  // The gap radius of two radial bar in one category
  barGap: _react.PropTypes.number,
  // The radius of each radial bar
  barSize: _react.PropTypes.number,
  title: _react.PropTypes.string,
  style: _react.PropTypes.object,
  onMouseEnter: _react.PropTypes.func,
  onMouseLeave: _react.PropTypes.func,
  onClick: _react.PropTypes.func,
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
  className: _react.PropTypes.string
}, _class2.defaultProps = {
  cx: '50%',
  cy: '50%',
  innerRadius: '30%',
  outerRadius: '90%',
  barGap: 2,
  barCategoryGap: '10%',
  style: {},
  margin: { top: 0, right: 0, bottom: 0, left: 0 }
}, _temp2)) || _class;

exports.default = RadialBarChart;