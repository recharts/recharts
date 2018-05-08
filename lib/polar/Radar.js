'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isEqual2 = require('lodash/isEqual');

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2; /**
                              * @fileOverview Radar
                              */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSmooth = require('react-smooth');

var _reactSmooth2 = _interopRequireDefault(_reactSmooth);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _DataUtils = require('../util/DataUtils');

var _PureRender = require('../util/PureRender');

var _PureRender2 = _interopRequireDefault(_PureRender);

var _ReactUtils = require('../util/ReactUtils');

var _PolarUtils = require('../util/PolarUtils');

var _ChartUtils = require('../util/ChartUtils');

var _Polygon = require('../shape/Polygon');

var _Polygon2 = _interopRequireDefault(_Polygon);

var _Dot = require('../shape/Dot');

var _Dot2 = _interopRequireDefault(_Dot);

var _Layer = require('../container/Layer');

var _Layer2 = _interopRequireDefault(_Layer);

var _LabelList = require('../component/LabelList');

var _LabelList2 = _interopRequireDefault(_LabelList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Radar.__proto__ || Object.getPrototypeOf(Radar)).call.apply(_ref, [this].concat(args))), _this), _this.state = { isAnimationFinished: false }, _this.cachePrevData = function (points) {
      _this.setState({ prevPoints: points });
    }, _this.handleAnimationEnd = function () {
      _this.setState({ isAnimationFinished: true });
    }, _this.handleAnimationStart = function () {
      _this.setState({ isAnimationFinished: false });
    }, _this.handleMouseEnter = function (e) {
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
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _props = this.props,
          animationId = _props.animationId,
          points = _props.points;


      if (nextProps.animationId !== animationId) {
        this.cachePrevData(points);
      }
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
    value: function renderDots(points) {
      var _this2 = this;

      var _props2 = this.props,
          dot = _props2.dot,
          dataKey = _props2.dataKey;

      var baseProps = (0, _ReactUtils.getPresentationAttributes)(this.props);
      var customDotProps = (0, _ReactUtils.getPresentationAttributes)(dot);

      var dots = points.map(function (entry, i) {
        var dotProps = _extends({
          key: 'dot-' + i,
          r: 3
        }, baseProps, customDotProps, {
          dataKey: dataKey,
          cx: entry.x,
          cy: entry.y,
          index: i,
          playload: entry
        });

        return _this2.renderDotItem(dot, dotProps);
      });

      return _react2.default.createElement(
        _Layer2.default,
        { className: 'recharts-radar-dots' },
        dots
      );
    }
  }, {
    key: 'renderPolygonStatically',
    value: function renderPolygonStatically(points) {
      var _props3 = this.props,
          shape = _props3.shape,
          dot = _props3.dot;


      var radar = void 0;
      if (_react2.default.isValidElement(shape)) {
        radar = _react2.default.cloneElement(shape, _extends({}, this.props, { points: points }));
      } else if ((0, _isFunction3.default)(shape)) {
        radar = shape(_extends({}, this.props, { points: points }));
      } else {
        radar = _react2.default.createElement(_Polygon2.default, _extends({}, (0, _ReactUtils.filterEventAttributes)(this.props), {
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave
        }, (0, _ReactUtils.getPresentationAttributes)(this.props), {
          points: points
        }));
      }

      return _react2.default.createElement(
        _Layer2.default,
        { className: 'recharts-radar-polygon' },
        radar,
        dot ? this.renderDots(points) : null
      );
    }
  }, {
    key: 'renderPolygonWithAnimation',
    value: function renderPolygonWithAnimation() {
      var _this3 = this;

      var _props4 = this.props,
          points = _props4.points,
          isAnimationActive = _props4.isAnimationActive,
          animationBegin = _props4.animationBegin,
          animationDuration = _props4.animationDuration,
          animationEasing = _props4.animationEasing,
          animationId = _props4.animationId;
      var prevPoints = this.state.prevPoints;


      return _react2.default.createElement(
        _reactSmooth2.default,
        {
          begin: animationBegin,
          duration: animationDuration,
          isActive: isAnimationActive,
          easing: animationEasing,
          from: { t: 0 },
          to: { t: 1 },
          key: 'radar-' + animationId,
          onAnimationEnd: this.handleAnimationEnd,
          onAnimationStart: this.handleAnimationStart
        },
        function (_ref2) {
          var t = _ref2.t;

          var stepData = points.map(function (entry, index) {
            var prev = prevPoints && prevPoints[index];

            if (prev) {
              var _interpolatorX = (0, _DataUtils.interpolateNumber)(prev.x, entry.x);
              var _interpolatorY = (0, _DataUtils.interpolateNumber)(prev.y, entry.y);

              return _extends({}, entry, {
                x: _interpolatorX(t),
                y: _interpolatorY(t)
              });
            }

            var interpolatorX = (0, _DataUtils.interpolateNumber)(entry.cx, entry.x);
            var interpolatorY = (0, _DataUtils.interpolateNumber)(entry.cy, entry.y);

            return _extends({}, entry, {
              x: interpolatorX(t),
              y: interpolatorY(t)
            });
          });

          return _this3.renderPolygonStatically(stepData);
        }
      );
    }
  }, {
    key: 'renderPolygon',
    value: function renderPolygon() {
      var _props5 = this.props,
          points = _props5.points,
          isAnimationActive = _props5.isAnimationActive;
      var prevPoints = this.state.prevPoints;


      if (isAnimationActive && points && points.length && (!prevPoints || !(0, _isEqual3.default)(prevPoints, points))) {
        return this.renderPolygonWithAnimation();
      }

      return this.renderPolygonStatically(points);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props6 = this.props,
          hide = _props6.hide,
          className = _props6.className,
          points = _props6.points,
          isAnimationActive = _props6.isAnimationActive;


      if (hide || !points || !points.length) {
        return null;
      }

      var isAnimationFinished = this.state.isAnimationFinished;

      var layerClass = (0, _classnames2.default)('recharts-radar', className);

      return _react2.default.createElement(
        _Layer2.default,
        { className: layerClass },
        this.renderPolygon(),
        (!isAnimationActive || isAnimationFinished) && _LabelList2.default.renderCallByParent(this.props, points)
      );
    }
  }]);

  return Radar;
}(_react.Component), _class2.displayName = 'Radar', _class2.propTypes = _extends({}, _ReactUtils.PRESENTATION_ATTRIBUTES, {
  className: _propTypes2.default.string,
  dataKey: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.func]).isRequired,
  angleAxisId: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  radiusAxisId: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),

  points: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    x: _propTypes2.default.number,
    y: _propTypes2.default.number,
    cx: _propTypes2.default.number,
    cy: _propTypes2.default.number,
    angle: _propTypes2.default.number,
    radius: _propTypes2.default.number,
    value: _propTypes2.default.number,
    payload: _propTypes2.default.object
  })),
  shape: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func]),
  activeDot: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.element, _propTypes2.default.func, _propTypes2.default.bool]),
  // whether have dot in poly line
  dot: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.element, _propTypes2.default.func, _propTypes2.default.bool]),
  label: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func, _propTypes2.default.object, _propTypes2.default.bool]),
  legendType: _propTypes2.default.oneOf(_ReactUtils.LEGEND_TYPES),
  hide: _propTypes2.default.bool,

  onMouseEnter: _propTypes2.default.func,
  onMouseLeave: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  isAnimationActive: _propTypes2.default.bool,
  animationId: _propTypes2.default.number,
  animationBegin: _propTypes2.default.number,
  animationDuration: _propTypes2.default.number,
  animationEasing: _propTypes2.default.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear'])
}), _class2.defaultProps = {
  angleAxisId: 0,
  radiusAxisId: 0,
  hide: false,
  activeDot: true,
  dot: false,
  legendType: 'rect',
  isAnimationActive: !(0, _ReactUtils.isSsr)(),
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: 'ease'
}, _class2.getComposedData = function (_ref3) {
  var radiusAxis = _ref3.radiusAxis,
      angleAxis = _ref3.angleAxis,
      displayedData = _ref3.displayedData,
      dataKey = _ref3.dataKey,
      bandSize = _ref3.bandSize;
  var cx = angleAxis.cx,
      cy = angleAxis.cy;

  var points = displayedData.map(function (entry, i) {
    var name = (0, _ChartUtils.getValueByDataKey)(entry, angleAxis.dataKey, i);
    var value = (0, _ChartUtils.getValueByDataKey)(entry, dataKey, 0);
    var angle = angleAxis.scale(name) + (bandSize || 0);
    var radius = radiusAxis.scale(value);
    return _extends({}, (0, _PolarUtils.polarToCartesian)(cx, cy, radius, angle), {
      name: name, value: value, cx: cx, cy: cy, radius: radius, angle: angle,
      payload: entry
    });
  });

  return { points: points };
}, _temp2)) || _class;

exports.default = Radar;