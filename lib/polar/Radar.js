'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2; /**
                              * @fileOverview Radar
                              */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSmooth = require('react-smooth');

var _reactSmooth2 = _interopRequireDefault(_reactSmooth);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _PureRender = require('../util/PureRender');

var _PureRender2 = _interopRequireDefault(_PureRender);

var _ReactUtils = require('../util/ReactUtils');

var _Polygon = require('../shape/Polygon');

var _Polygon2 = _interopRequireDefault(_Polygon);

var _Dot = require('../shape/Dot');

var _Dot2 = _interopRequireDefault(_Dot);

var _Layer = require('../container/Layer');

var _Layer2 = _interopRequireDefault(_Layer);

var _Text = require('../component/Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Radar = (0, _PureRender2.default)(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(Radar, _Component);

  function Radar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Radar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Radar.__proto__ || Object.getPrototypeOf(Radar)).call.apply(_ref, [this].concat(args))), _this), _this.handleMouseEnter = function (e) {
      var onMouseEnter = _this.props.onMouseEnter;


      if (onMouseEnter) {
        onMouseEnter(_this.props, e);
      }
    }, _this.handleMouseLeave = function (e) {
      var onMouseLeave = _this.props.onMouseLeave;


      if (onMouseLeave) {
        onMouseLeave(_this.props, e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Radar, [{
    key: 'renderPolygon',
    value: function renderPolygon() {
      /* eslint-disable no-unused-vars */
      var _props = this.props,
          shape = _props.shape,
          points = _props.points,
          animationDuration = _props.animationDuration,
          animationEasing = _props.animationEasing,
          animationBegin = _props.animationBegin,
          isAnimationActive = _props.isAnimationActive,
          animationId = _props.animationId,
          dataKey = _props.dataKey,
          className = _props.className,
          others = _objectWithoutProperties(_props, ['shape', 'points', 'animationDuration', 'animationEasing', 'animationBegin', 'isAnimationActive', 'animationId', 'dataKey', 'className']);
      /* eslint-enable no-unused-vars */

      if (_react2.default.isValidElement(shape)) {
        return _react2.default.cloneElement(shape, _extends({}, others, { points: points }));
      } else if ((0, _isFunction3.default)(shape)) {
        return shape(this.props);
      }

      var point = points[0];
      var transformPoints = points.map(function (p) {
        return { x: p.x - point.cx, y: p.y - point.cy };
      });

      return _react2.default.createElement(
        _Layer2.default,
        { className: 'recharts-radar-polygon', transform: 'translate(' + point.cx + ', ' + point.cy + ')' },
        _react2.default.createElement(
          _reactSmooth2.default,
          {
            from: 'scale(0)',
            to: 'scale(1)',
            attributeName: 'transform',
            isActive: isAnimationActive,
            begin: animationBegin,
            easing: animationEasing,
            duration: animationDuration,
            key: animationId
          },
          _react2.default.createElement(_Polygon2.default, _extends({
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave
          }, (0, _ReactUtils.getPresentationAttributes)(this.props), {
            points: transformPoints
          }))
        )
      );
    }
  }, {
    key: 'renderLabelItem',
    value: function renderLabelItem(option, props, value) {
      var labelItem = void 0;

      if (_react2.default.isValidElement(option)) {
        labelItem = _react2.default.cloneElement(option, props);
      } else if ((0, _isFunction3.default)(option)) {
        labelItem = option(props);
      } else {
        labelItem = _react2.default.createElement(
          _Text2.default,
          _extends({
            key: props.key
          }, props, {
            className: 'recharts-radar-label'
          }),
          value
        );
      }

      return labelItem;
    }
  }, {
    key: 'renderLabels',
    value: function renderLabels() {
      var _this2 = this;

      var _props2 = this.props,
          points = _props2.points,
          label = _props2.label;

      var baseProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
      var customLabelProps = (0, _ReactUtils.getPresentationAttributes)(label);

      var labels = points.map(function (entry, i) {
        var labelProps = _extends({
          textAnchor: 'middle'
        }, baseProps, {
          stroke: 'none',
          fill: baseProps && baseProps.stroke || '#666'
        }, customLabelProps, entry, {
          index: i,
          key: 'label-' + i,
          payload: entry
        });

        return _this2.renderLabelItem(label, labelProps, entry.value);
      });

      return _react2.default.createElement(
        _Layer2.default,
        { className: 'recharts-radar-labels' },
        labels
      );
    }
  }, {
    key: 'renderDotItem',
    value: function renderDotItem(option, props) {
      var dotItem = void 0;

      if (_react2.default.isValidElement(option)) {
        dotItem = _react2.default.cloneElement(option, props);
      } else if ((0, _isFunction3.default)(option)) {
        dotItem = option(props);
      } else {
        dotItem = _react2.default.createElement(_Dot2.default, _extends({}, props, { className: 'recharts-radar-dot' }));
      }

      return dotItem;
    }
  }, {
    key: 'renderDots',
    value: function renderDots() {
      var _this3 = this;

      var _props3 = this.props,
          dot = _props3.dot,
          points = _props3.points;

      var baseProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
      var customDotProps = (0, _ReactUtils.getPresentationAttributes)(dot);

      var dots = points.map(function (entry, i) {
        var dotProps = _extends({
          key: 'dot-' + i,
          r: 3
        }, baseProps, customDotProps, {
          cx: entry.x,
          cy: entry.y,
          index: i,
          playload: entry
        });

        return _this3.renderDotItem(dot, dotProps);
      });

      return _react2.default.createElement(
        _Layer2.default,
        { className: 'recharts-radar-dots' },
        dots
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          className = _props4.className,
          points = _props4.points,
          label = _props4.label,
          dot = _props4.dot;


      if (!points || !points.length) {
        return null;
      }

      var layerClass = (0, _classnames2.default)('recharts-radar', className);

      return _react2.default.createElement(
        _Layer2.default,
        { className: layerClass },
        this.renderPolygon(),
        label && this.renderLabels(),
        dot && this.renderDots()
      );
    }
  }]);

  return Radar;
}(_react.Component), _class2.displayName = 'Radar', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
  className: _react.PropTypes.string,
  dataKey: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string, _react.PropTypes.func]).isRequired,

  points: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    x: _react.PropTypes.number,
    y: _react.PropTypes.number,
    cx: _react.PropTypes.number,
    cy: _react.PropTypes.number,
    angle: _react.PropTypes.number,
    radius: _react.PropTypes.number,
    value: _react.PropTypes.number,
    payload: _react.PropTypes.object
  })),
  shape: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.func]),
  dot: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.func, _react.PropTypes.object, _react.PropTypes.bool]),
  label: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.func, _react.PropTypes.object, _react.PropTypes.bool]),
  legendType: _react.PropTypes.oneOf(['line', 'square', 'rect', 'circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye']),

  onMouseEnter: _react.PropTypes.func,
  onMouseLeave: _react.PropTypes.func,
  onClick: _react.PropTypes.func,
  isAnimationActive: _react.PropTypes.bool,
  animationId: _react.PropTypes.number,
  animationBegin: _react.PropTypes.number,
  animationDuration: _react.PropTypes.number,
  animationEasing: _react.PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear'])
}), _class2.defaultProps = {
  dot: false,
  label: false,
  legendType: 'rect',
  isAnimationActive: !(0, _ReactUtils.isSsr)(),
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: 'ease'
}, _temp2)) || _class;

exports.default = Radar;