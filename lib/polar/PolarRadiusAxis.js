'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _maxBy2 = require('lodash/maxBy');

var _maxBy3 = _interopRequireDefault(_maxBy2);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp; /**
                             * @fileOverview The axis of polar coordinate system
                             */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PureRender = require('../util/PureRender');

var _PureRender2 = _interopRequireDefault(_PureRender);

var _Text = require('../component/Text');

var _Text2 = _interopRequireDefault(_Text);

var _Layer = require('../container/Layer');

var _Layer2 = _interopRequireDefault(_Layer);

var _ReactUtils = require('../util/ReactUtils');

var _PolarUtils = require('../util/PolarUtils');

var _DataUtils = require('../util/DataUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PolarRadiusAxis = (0, _PureRender2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(PolarRadiusAxis, _Component);

  function PolarRadiusAxis() {
    _classCallCheck(this, PolarRadiusAxis);

    return _possibleConstructorReturn(this, (PolarRadiusAxis.__proto__ || Object.getPrototypeOf(PolarRadiusAxis)).apply(this, arguments));
  }

  _createClass(PolarRadiusAxis, [{
    key: 'getTickValueCoord',


    /**
     * Calculate the coordinate of tick
     * @param  {Object} radius The data of a simple tick
     * @return {Object} (x, y)
     */
    value: function getTickValueCoord(_ref) {
      var radius = _ref.radius;
      var _props = this.props,
          angle = _props.angle,
          cx = _props.cx,
          cy = _props.cy;


      return (0, _PolarUtils.polarToCartesian)(cx, cy, radius, angle);
    }
  }, {
    key: 'getTickTextAnchor',
    value: function getTickTextAnchor() {
      var orientation = this.props.orientation;

      var textAnchor = void 0;

      switch (orientation) {
        case 'left':
          textAnchor = 'end';
          break;
        case 'right':
          textAnchor = 'start';
          break;
        default:
          textAnchor = 'middle';
          break;
      }

      return textAnchor;
    }
  }, {
    key: 'renderAxisLine',
    value: function renderAxisLine() {
      var _props2 = this.props,
          cx = _props2.cx,
          cy = _props2.cy,
          angle = _props2.angle,
          ticks = _props2.ticks,
          axisLine = _props2.axisLine,
          others = _objectWithoutProperties(_props2, ['cx', 'cy', 'angle', 'ticks', 'axisLine']);

      var extent = ticks.reduce(function (result, entry) {
        return [Math.min(result[0], entry.radius), Math.max(result[1], entry.radius)];
      }, [Infinity, -Infinity]);
      var point0 = (0, _PolarUtils.polarToCartesian)(cx, cy, extent[0], angle);
      var point1 = (0, _PolarUtils.polarToCartesian)(cx, cy, extent[1], angle);

      var props = _extends({}, (0, _ReactUtils.getPresentationAttributes)(others), {
        fill: 'none'
      }, (0, _ReactUtils.getPresentationAttributes)(axisLine), {
        x1: point0.x,
        y1: point0.y,
        x2: point1.x,
        y2: point1.y
      });

      return _react2.default.createElement('line', _extends({ className: 'recharts-polar-radius-axis-line' }, props));
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
            className: 'recharts-polar-radius-axis-tick-value'
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
          angle = _props3.angle,
          tickFormatter = _props3.tickFormatter,
          stroke = _props3.stroke,
          others = _objectWithoutProperties(_props3, ['ticks', 'tick', 'angle', 'tickFormatter', 'stroke']);

      var textAnchor = this.getTickTextAnchor();
      var axisProps = (0, _ReactUtils.getPresentationAttributes)(others);
      var customTickProps = (0, _ReactUtils.getPresentationAttributes)(tick);

      var items = ticks.map(function (entry, i) {
        var coord = _this2.getTickValueCoord(entry);
        var tickProps = _extends({
          textAnchor: textAnchor,
          transform: 'rotate(' + (90 - angle) + ', ' + coord.x + ', ' + coord.y + ')'
        }, axisProps, {
          stroke: 'none', fill: stroke
        }, customTickProps, {
          index: i
        }, coord, {
          payload: entry
        });

        return _react2.default.createElement(
          _Layer2.default,
          _extends({
            className: 'recharts-polar-radius-axis-tick',
            key: 'tick-' + i
          }, (0, _ReactUtils.filterEventsOfChild)(_this2.props, entry, i)),
          _this2.renderTickItem(tick, tickProps, tickFormatter ? tickFormatter(entry.value) : entry.value)
        );
      });

      return _react2.default.createElement(
        _Layer2.default,
        { className: 'recharts-polar-radius-axis-ticks' },
        items
      );
    }
  }, {
    key: 'renderLabel',
    value: function renderLabel() {
      var label = this.props.label;

      var _props4 = this.props,
          ticks = _props4.ticks,
          angle = _props4.angle,
          stroke = _props4.stroke,
          others = _objectWithoutProperties(_props4, ['ticks', 'angle', 'stroke']);

      var maxRadiusTick = (0, _maxBy3.default)(ticks, function (entry) {
        return entry.radius || 0;
      });
      var radius = maxRadiusTick.radius || 0;
      var coord = this.getTickValueCoord({ radius: radius + 10 });
      var props = _extends({}, others, {
        stroke: 'none',
        fill: stroke
      }, coord, {
        textAnchor: 'middle',
        transform: 'rotate(' + (90 - angle) + ', ' + coord.x + ', ' + coord.y + ')'
      });

      if (_react2.default.isValidElement(label)) {
        return _react2.default.cloneElement(label, props);
      } else if ((0, _isFunction3.default)(label)) {
        return label(props);
      } else if ((0, _DataUtils.isNumOrStr)(label)) {
        return _react2.default.createElement(
          _Layer2.default,
          { className: 'recharts-polar-radius-axis-label' },
          _react2.default.createElement(
            _Text2.default,
            props,
            label
          )
        );
      }

      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props5 = this.props,
          ticks = _props5.ticks,
          axisLine = _props5.axisLine,
          tick = _props5.tick;


      if (!ticks || !ticks.length) {
        return null;
      }

      return _react2.default.createElement(
        _Layer2.default,
        { className: 'recharts-polar-radius-axis' },
        axisLine && this.renderAxisLine(),
        tick && this.renderTicks(),
        this.renderLabel()
      );
    }
  }]);

  return PolarRadiusAxis;
}(_react.Component), _class2.displayName = 'PolarRadiusAxis', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, _ReactUtils.EVENT_ATTRIBUTES, {
  cx: _react.PropTypes.number,
  cy: _react.PropTypes.number,
  hide: _react.PropTypes.bool,

  angle: _react.PropTypes.number,
  tickCount: _react.PropTypes.number,
  ticks: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    value: _react.PropTypes.any,
    radius: _react.PropTypes.value
  })),
  orientation: _react.PropTypes.oneOf(['left', 'right', 'middle']),
  axisLine: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]),
  label: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string, _react.PropTypes.element, _react.PropTypes.func]),
  tick: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object, _react.PropTypes.element, _react.PropTypes.func]),
  stroke: _react.PropTypes.string,
  tickFormatter: _react.PropTypes.func,
  domain: _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.oneOf(['auto', 'dataMin', 'dataMax'])])),
  scale: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(['auto', 'linear', 'pow', 'sqrt', 'log', 'identity', 'time', 'band', 'point', 'ordinal', 'quantile', 'quantize', 'utcTime', 'sequential', 'threshold']), _react.PropTypes.func]),
  allowDataOverflow: _react.PropTypes.bool
}), _class2.defaultProps = {
  cx: 0,
  cy: 0,
  angle: 0,
  orientation: 'right',
  stroke: '#ccc',
  axisLine: true,
  tick: true,
  tickCount: 5,
  domain: [0, 'auto'],
  allowDataOverflow: false,
  scale: 'auto'
}, _temp)) || _class;

exports.default = PolarRadiusAxis;