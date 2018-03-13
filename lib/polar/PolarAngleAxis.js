'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp; /**
                             * @fileOverview Axis of radial direction
                             */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PureRender = require('../util/PureRender');

var _PureRender2 = _interopRequireDefault(_PureRender);

var _Layer = require('../container/Layer');

var _Layer2 = _interopRequireDefault(_Layer);

var _ReactUtils = require('../util/ReactUtils');

var _Dot = require('../shape/Dot');

var _Dot2 = _interopRequireDefault(_Dot);

var _Polygon = require('../shape/Polygon');

var _Polygon2 = _interopRequireDefault(_Polygon);

var _Text = require('../component/Text');

var _Text2 = _interopRequireDefault(_Text);

var _PolarUtils = require('../util/PolarUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RADIAN = Math.PI / 180;
var eps = 1e-5;

var PolarAngleAxis = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(PolarAngleAxis, _Component);

  function PolarAngleAxis() {
    _classCallCheck(this, PolarAngleAxis);

    return _possibleConstructorReturn(this, (PolarAngleAxis.__proto__ || Object.getPrototypeOf(PolarAngleAxis)).apply(this, arguments));
  }

  _createClass(PolarAngleAxis, [{
    key: 'getTickLineCoord',


    /**
     * Calculate the coordinate of line endpoint
     * @param  {Object} data The Data if ticks
     * @return {Object} (x0, y0): The start point of text,
     *                  (x1, y1): The end point close to text,
     *                  (x2, y2): The end point close to axis
     */
    value: function getTickLineCoord(data) {
      var _props = this.props,
          cx = _props.cx,
          cy = _props.cy,
          radius = _props.radius,
          orientation = _props.orientation,
          tickLine = _props.tickLine;

      var tickLineSize = tickLine && tickLine.size || 8;
      var p1 = (0, _PolarUtils.polarToCartesian)(cx, cy, radius, data.coordinate);
      var p2 = (0, _PolarUtils.polarToCartesian)(cx, cy, radius + (orientation === 'inner' ? -1 : 1) * tickLineSize, data.coordinate);

      return { x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y };
    }
    /**
     * Get the text-anchor of each tick
     * @param  {Object} data Data of ticks
     * @return {String} text-anchor
     */

  }, {
    key: 'getTickTextAnchor',
    value: function getTickTextAnchor(data) {
      var orientation = this.props.orientation;

      var cos = Math.cos(-data.coordinate * RADIAN);
      var textAnchor = void 0;

      if (cos > eps) {
        textAnchor = orientation === 'outer' ? 'start' : 'end';
      } else if (cos < -eps) {
        textAnchor = orientation === 'outer' ? 'end' : 'start';
      } else {
        textAnchor = 'middle';
      }

      return textAnchor;
    }
  }, {
    key: 'renderAxisLine',
    value: function renderAxisLine() {
      var _props2 = this.props,
          cx = _props2.cx,
          cy = _props2.cy,
          radius = _props2.radius,
          axisLine = _props2.axisLine,
          axisLineType = _props2.axisLineType;

      var props = _extends({}, (0, _ReactUtils.getPresentationAttributes)(this.props), {
        fill: 'none'
      }, (0, _ReactUtils.getPresentationAttributes)(axisLine));

      if (axisLineType === 'circle') {
        return _react2.default.createElement(_Dot2.default, _extends({
          className: 'recharts-polar-angle-axis-line'
        }, props, {
          cx: cx,
          cy: cy,
          r: radius
        }));
      }
      var ticks = this.props.ticks;

      var points = ticks.map(function (entry) {
        return (0, _PolarUtils.polarToCartesian)(cx, cy, radius, entry.coordinate);
      });

      return _react2.default.createElement(_Polygon2.default, _extends({ className: 'recharts-polar-angle-axis-line' }, props, { points: points }));
    }
  }, {
    key: 'renderTickItem',
    value: function renderTickItem(option, props, value) {
      var tickItem = void 0;

      if (_react2.default.isValidElement(option)) {
        tickItem = _react2.default.cloneElement(option, props);
      } else if ((0, _isFunction3.default)(option)) {
        tickItem = option(props);
      } else {
        tickItem = _react2.default.createElement(
          _Text2.default,
          _extends({}, props, {
            className: 'recharts-polar-angle-axis-tick-value'
          }),
          value
        );
      }

      return tickItem;
    }
  }, {
    key: 'renderTicks',
    value: function renderTicks() {
      var _this2 = this;

      var _props3 = this.props,
          ticks = _props3.ticks,
          tick = _props3.tick,
          tickLine = _props3.tickLine,
          tickFormatter = _props3.tickFormatter,
          stroke = _props3.stroke;

      var axisProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
      var customTickProps = (0, _ReactUtils.getPresentationAttributes)(tick);
      var tickLineProps = _extends({}, axisProps, { fill: 'none' }, (0, _ReactUtils.getPresentationAttributes)(tickLine));

      var items = ticks.map(function (entry, i) {
        var lineCoord = _this2.getTickLineCoord(entry);
        var textAnchor = _this2.getTickTextAnchor(entry);
        var tickProps = _extends({
          textAnchor: textAnchor
        }, axisProps, {
          stroke: 'none', fill: stroke
        }, customTickProps, {
          index: i, payload: entry,
          x: lineCoord.x2, y: lineCoord.y2
        });

        return _react2.default.createElement(
          _Layer2.default,
          _extends({
            className: 'recharts-polar-angle-axis-tick',
            key: 'tick-' + i
          }, (0, _ReactUtils.filterEventsOfChild)(_this2.props, entry, i)),
          tickLine && _react2.default.createElement('line', _extends({
            className: 'recharts-polar-angle-axis-tick-line'
          }, tickLineProps, lineCoord)),
          tick && _this2.renderTickItem(tick, tickProps, tickFormatter ? tickFormatter(entry.value) : entry.value)
        );
      });

      return _react2.default.createElement(
        _Layer2.default,
        { className: 'recharts-polar-angle-axis-ticks' },
        items
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          ticks = _props4.ticks,
          radius = _props4.radius,
          axisLine = _props4.axisLine;


      if (radius <= 0 || !ticks || !ticks.length) {
        return null;
      }

      return _react2.default.createElement(
        _Layer2.default,
        { className: 'recharts-polar-angle-axis' },
        axisLine && this.renderAxisLine(),
        this.renderTicks()
      );
    }
  }]);

  return PolarAngleAxis;
}(_react.Component), _class2.displayName = 'PolarAngleAxis', _class2.axisType = 'angleAxis', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, _ReactUtils.EVENT_ATTRIBUTES, {
  type: _propTypes2.default.oneOf(['number', 'category']),
  angleAxisId: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  dataKey: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.func]),
  cx: _propTypes2.default.number,
  cy: _propTypes2.default.number,
  radius: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  hide: _propTypes2.default.bool,
  scale: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(_ReactUtils.SCALE_TYPES), _propTypes2.default.func]),

  axisLine: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.object]),
  axisLineType: _propTypes2.default.oneOf(['polygon', 'circle']),
  tickLine: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.object]),
  tick: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func, _propTypes2.default.object, _propTypes2.default.element]),

  ticks: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    value: _propTypes2.default.any,
    coordinate: _propTypes2.default.number
  })),
  stroke: _propTypes2.default.string,
  orientation: _propTypes2.default.oneOf(['inner', 'outer']),
  tickFormatter: _propTypes2.default.func,
  allowDuplicatedCategory: _propTypes2.default.bool
}), _class2.defaultProps = {
  type: 'category',
  angleAxisId: 0,
  scale: 'auto',
  cx: 0,
  cy: 0,
  domain: [0, 'auto'],
  orientation: 'outer',
  axisLine: true,
  tickLine: true,
  tick: true,
  hide: false,
  allowDuplicatedCategory: true
}, _temp)) || _class;

exports.default = PolarAngleAxis;