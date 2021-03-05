"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Radar = void 0;

var _isEqual2 = _interopRequireDefault(require("lodash/isEqual"));

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

var _first2 = _interopRequireDefault(require("lodash/first"));

var _isNil2 = _interopRequireDefault(require("lodash/isNil"));

var _last2 = _interopRequireDefault(require("lodash/last"));

var _isArray2 = _interopRequireDefault(require("lodash/isArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactSmooth = _interopRequireDefault(require("react-smooth"));

var _classnames = _interopRequireDefault(require("classnames"));

var _DataUtils = require("../util/DataUtils");

var _Global = require("../util/Global");

var _PolarUtils = require("../util/PolarUtils");

var _ChartUtils = require("../util/ChartUtils");

var _Polygon = require("../shape/Polygon");

var _Dot = require("../shape/Dot");

var _Layer = require("../container/Layer");

var _LabelList = require("../component/LabelList");

var _types = require("../util/types");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Radar = /*#__PURE__*/function (_PureComponent) {
  _inherits(Radar, _PureComponent);

  var _super = _createSuper(Radar);

  function Radar() {
    var _this;

    _classCallCheck(this, Radar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      isAnimationFinished: false
    };

    _this.handleAnimationEnd = function () {
      var onAnimationEnd = _this.props.onAnimationEnd;

      _this.setState({
        isAnimationFinished: true
      });

      if ((0, _isFunction2["default"])(onAnimationEnd)) {
        onAnimationEnd();
      }
    };

    _this.handleAnimationStart = function () {
      var onAnimationStart = _this.props.onAnimationStart;

      _this.setState({
        isAnimationFinished: false
      });

      if ((0, _isFunction2["default"])(onAnimationStart)) {
        onAnimationStart();
      }
    };

    _this.handleMouseEnter = function (e) {
      var onMouseEnter = _this.props.onMouseEnter;

      if (onMouseEnter) {
        onMouseEnter(_this.props, e);
      }
    };

    _this.handleMouseLeave = function (e) {
      var onMouseLeave = _this.props.onMouseLeave;

      if (onMouseLeave) {
        onMouseLeave(_this.props, e);
      }
    };

    return _this;
  }

  _createClass(Radar, [{
    key: "renderDots",
    value: function renderDots(points) {
      var _this$props = this.props,
          dot = _this$props.dot,
          dataKey = _this$props.dataKey;
      var baseProps = (0, _types.filterProps)(this.props);
      var customDotProps = (0, _types.filterProps)(dot);
      var dots = points.map(function (entry, i) {
        var dotProps = _objectSpread(_objectSpread(_objectSpread({
          key: "dot-".concat(i),
          r: 3
        }, baseProps), customDotProps), {}, {
          dataKey: dataKey,
          cx: entry.x,
          cy: entry.y,
          index: i,
          payload: entry
        });

        return Radar.renderDotItem(dot, dotProps);
      });
      return /*#__PURE__*/_react["default"].createElement(_Layer.Layer, {
        className: "recharts-radar-dots"
      }, dots);
    }
  }, {
    key: "renderPolygonStatically",
    value: function renderPolygonStatically(points) {
      var _this$props2 = this.props,
          shape = _this$props2.shape,
          dot = _this$props2.dot,
          isRange = _this$props2.isRange,
          baseLinePoints = _this$props2.baseLinePoints,
          connectNulls = _this$props2.connectNulls;
      var radar;

      if ( /*#__PURE__*/_react["default"].isValidElement(shape)) {
        radar = /*#__PURE__*/_react["default"].cloneElement(shape, _objectSpread(_objectSpread({}, this.props), {}, {
          points: points
        }));
      } else if ((0, _isFunction2["default"])(shape)) {
        radar = shape(_objectSpread(_objectSpread({}, this.props), {}, {
          points: points
        }));
      } else {
        radar = /*#__PURE__*/_react["default"].createElement(_Polygon.Polygon, _extends({}, (0, _types.filterProps)(this.props, true), {
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
          points: points,
          baseLinePoints: isRange ? baseLinePoints : null,
          connectNulls: connectNulls
        }));
      }

      return /*#__PURE__*/_react["default"].createElement(_Layer.Layer, {
        className: "recharts-radar-polygon"
      }, radar, dot ? this.renderDots(points) : null);
    }
  }, {
    key: "renderPolygonWithAnimation",
    value: function renderPolygonWithAnimation() {
      var _this2 = this;

      var _this$props3 = this.props,
          points = _this$props3.points,
          isAnimationActive = _this$props3.isAnimationActive,
          animationBegin = _this$props3.animationBegin,
          animationDuration = _this$props3.animationDuration,
          animationEasing = _this$props3.animationEasing,
          animationId = _this$props3.animationId;
      var prevPoints = this.state.prevPoints;
      return /*#__PURE__*/_react["default"].createElement(_reactSmooth["default"], {
        begin: animationBegin,
        duration: animationDuration,
        isActive: isAnimationActive,
        easing: animationEasing,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "radar-".concat(animationId),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function (_ref) {
        var t = _ref.t;
        var prevPointsDiffFactor = prevPoints && prevPoints.length / points.length;
        var stepData = points.map(function (entry, index) {
          var prev = prevPoints && prevPoints[Math.floor(index * prevPointsDiffFactor)];

          if (prev) {
            var _interpolatorX = (0, _DataUtils.interpolateNumber)(prev.x, entry.x);

            var _interpolatorY = (0, _DataUtils.interpolateNumber)(prev.y, entry.y);

            return _objectSpread(_objectSpread({}, entry), {}, {
              x: _interpolatorX(t),
              y: _interpolatorY(t)
            });
          }

          var interpolatorX = (0, _DataUtils.interpolateNumber)(entry.cx, entry.x);
          var interpolatorY = (0, _DataUtils.interpolateNumber)(entry.cy, entry.y);
          return _objectSpread(_objectSpread({}, entry), {}, {
            x: interpolatorX(t),
            y: interpolatorY(t)
          });
        });
        return _this2.renderPolygonStatically(stepData);
      });
    }
  }, {
    key: "renderPolygon",
    value: function renderPolygon() {
      var _this$props4 = this.props,
          points = _this$props4.points,
          isAnimationActive = _this$props4.isAnimationActive,
          isRange = _this$props4.isRange;
      var prevPoints = this.state.prevPoints;

      if (isAnimationActive && points && points.length && !isRange && (!prevPoints || !(0, _isEqual2["default"])(prevPoints, points))) {
        return this.renderPolygonWithAnimation();
      }

      return this.renderPolygonStatically(points);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          hide = _this$props5.hide,
          className = _this$props5.className,
          points = _this$props5.points,
          isAnimationActive = _this$props5.isAnimationActive;

      if (hide || !points || !points.length) {
        return null;
      }

      var isAnimationFinished = this.state.isAnimationFinished;
      var layerClass = (0, _classnames["default"])('recharts-radar', className);
      return /*#__PURE__*/_react["default"].createElement(_Layer.Layer, {
        className: layerClass
      }, this.renderPolygon(), (!isAnimationActive || isAnimationFinished) && _LabelList.LabelList.renderCallByParent(this.props, points));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.animationId !== prevState.prevAnimationId) {
        return {
          prevAnimationId: nextProps.animationId,
          curPoints: nextProps.points,
          prevPoints: prevState.curPoints
        };
      }

      if (nextProps.points !== prevState.curPoints) {
        return {
          curPoints: nextProps.points
        };
      }

      return null;
    }
  }, {
    key: "renderDotItem",
    value: function renderDotItem(option, props) {
      var dotItem;

      if ( /*#__PURE__*/_react["default"].isValidElement(option)) {
        dotItem = /*#__PURE__*/_react["default"].cloneElement(option, props);
      } else if ((0, _isFunction2["default"])(option)) {
        dotItem = option(props);
      } else {
        dotItem = /*#__PURE__*/_react["default"].createElement(_Dot.Dot, _extends({}, props, {
          className: "recharts-radar-dot"
        }));
      }

      return dotItem;
    }
  }]);

  return Radar;
}(_react.PureComponent);

exports.Radar = Radar;
Radar.displayName = 'Radar';
Radar.defaultProps = {
  angleAxisId: 0,
  radiusAxisId: 0,
  hide: false,
  activeDot: true,
  dot: false,
  legendType: 'rect',
  isAnimationActive: !_Global.Global.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: 'ease'
};

Radar.getComposedData = function (_ref2) {
  var radiusAxis = _ref2.radiusAxis,
      angleAxis = _ref2.angleAxis,
      displayedData = _ref2.displayedData,
      dataKey = _ref2.dataKey,
      bandSize = _ref2.bandSize;
  var cx = angleAxis.cx,
      cy = angleAxis.cy;
  var isRange = false;
  var points = [];
  displayedData.forEach(function (entry, i) {
    var name = (0, _ChartUtils.getValueByDataKey)(entry, angleAxis.dataKey, i);
    var value = (0, _ChartUtils.getValueByDataKey)(entry, dataKey);
    var angle = angleAxis.scale(name) + (bandSize || 0);
    var pointValue = (0, _isArray2["default"])(value) ? (0, _last2["default"])(value) : value;
    var radius = (0, _isNil2["default"])(pointValue) ? undefined : radiusAxis.scale(pointValue);

    if ((0, _isArray2["default"])(value) && value.length >= 2) {
      isRange = true;
    }

    points.push(_objectSpread(_objectSpread({}, (0, _PolarUtils.polarToCartesian)(cx, cy, radius, angle)), {}, {
      name: name,
      value: value,
      cx: cx,
      cy: cy,
      radius: radius,
      angle: angle,
      payload: entry
    }));
  });
  var baseLinePoints = [];

  if (isRange) {
    points.forEach(function (point) {
      if ((0, _isArray2["default"])(point.value)) {
        var baseValue = (0, _first2["default"])(point.value);
        var radius = (0, _isNil2["default"])(baseValue) ? undefined : radiusAxis.scale(baseValue);
        baseLinePoints.push(_objectSpread(_objectSpread({}, point), {}, {
          radius: radius
        }, (0, _PolarUtils.polarToCartesian)(cx, cy, radius, point.angle)));
      } else {
        baseLinePoints.push(point);
      }
    });
  }

  return {
    points: points,
    isRange: isRange,
    baseLinePoints: baseLinePoints
  };
};