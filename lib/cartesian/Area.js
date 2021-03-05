"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Area = void 0;

var _isEqual2 = _interopRequireDefault(require("lodash/isEqual"));

var _isNaN2 = _interopRequireDefault(require("lodash/isNaN"));

var _max2 = _interopRequireDefault(require("lodash/max"));

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _isNil2 = _interopRequireDefault(require("lodash/isNil"));

var _isArray2 = _interopRequireDefault(require("lodash/isArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactSmooth = _interopRequireDefault(require("react-smooth"));

var _Curve = require("../shape/Curve");

var _Dot = require("../shape/Dot");

var _Layer = require("../container/Layer");

var _LabelList = require("../component/LabelList");

var _Global = require("../util/Global");

var _DataUtils = require("../util/DataUtils");

var _ChartUtils = require("../util/ChartUtils");

var _types = require("../util/types");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

var Area = /*#__PURE__*/function (_PureComponent) {
  _inherits(Area, _PureComponent);

  var _super = _createSuper(Area);

  function Area() {
    var _this;

    _classCallCheck(this, Area);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      isAnimationFinished: true
    };
    _this.id = (0, _DataUtils.uniqueId)('recharts-area-');

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

    return _this;
  }

  _createClass(Area, [{
    key: "renderDots",
    value: function renderDots(needClip, clipPathId) {
      var isAnimationActive = this.props.isAnimationActive;
      var isAnimationFinished = this.state.isAnimationFinished;

      if (isAnimationActive && !isAnimationFinished) {
        return null;
      }

      var _this$props = this.props,
          dot = _this$props.dot,
          points = _this$props.points,
          dataKey = _this$props.dataKey;
      var areaProps = (0, _types.filterProps)(this.props);
      var customDotProps = (0, _types.filterProps)(dot, true);
      var dots = points.map(function (entry, i) {
        var dotProps = _objectSpread(_objectSpread(_objectSpread({
          key: "dot-".concat(i),
          r: 3
        }, areaProps), customDotProps), {}, {
          dataKey: dataKey,
          cx: entry.x,
          cy: entry.y,
          index: i,
          value: entry.value,
          payload: entry.payload
        });

        return Area.renderDotItem(dot, dotProps);
      });
      var dotsProps = {
        clipPath: needClip ? "url(#clipPath-dots-".concat(clipPathId, ")") : null
      };
      return /*#__PURE__*/_react["default"].createElement(_Layer.Layer, _extends({
        className: "recharts-area-dots"
      }, dotsProps), dots);
    }
  }, {
    key: "renderHorizontalRect",
    value: function renderHorizontalRect(alpha) {
      var _this$props2 = this.props,
          baseLine = _this$props2.baseLine,
          points = _this$props2.points,
          strokeWidth = _this$props2.strokeWidth;
      var startX = points[0].x;
      var endX = points[points.length - 1].x;
      var width = alpha * Math.abs(startX - endX);
      var maxY = (0, _max2["default"])(points.map(function (entry) {
        return entry.y || 0;
      }));

      if ((0, _DataUtils.isNumber)(baseLine) && typeof baseLine === 'number') {
        maxY = Math.max(baseLine, maxY);
      } else if (baseLine && (0, _isArray2["default"])(baseLine) && baseLine.length) {
        maxY = Math.max((0, _max2["default"])(baseLine.map(function (entry) {
          return entry.y || 0;
        })), maxY);
      }

      if ((0, _DataUtils.isNumber)(maxY)) {
        return /*#__PURE__*/_react["default"].createElement("rect", {
          x: startX < endX ? startX : startX - width,
          y: 0,
          width: width,
          height: Math.floor(maxY + (strokeWidth ? parseInt("".concat(strokeWidth), 10) : 1))
        });
      }

      return null;
    }
  }, {
    key: "renderVerticalRect",
    value: function renderVerticalRect(alpha) {
      var _this$props3 = this.props,
          baseLine = _this$props3.baseLine,
          points = _this$props3.points,
          strokeWidth = _this$props3.strokeWidth;
      var startY = points[0].y;
      var endY = points[points.length - 1].y;
      var height = alpha * Math.abs(startY - endY);
      var maxX = (0, _max2["default"])(points.map(function (entry) {
        return entry.x || 0;
      }));

      if ((0, _DataUtils.isNumber)(baseLine) && typeof baseLine === 'number') {
        maxX = Math.max(baseLine, maxX);
      } else if (baseLine && (0, _isArray2["default"])(baseLine) && baseLine.length) {
        maxX = Math.max((0, _max2["default"])(baseLine.map(function (entry) {
          return entry.x || 0;
        })), maxX);
      }

      if ((0, _DataUtils.isNumber)(maxX)) {
        return /*#__PURE__*/_react["default"].createElement("rect", {
          x: 0,
          y: startY < endY ? startY : startY - height,
          width: maxX + (strokeWidth ? parseInt("".concat(strokeWidth), 10) : 1),
          height: Math.floor(height)
        });
      }

      return null;
    }
  }, {
    key: "renderClipRect",
    value: function renderClipRect(alpha) {
      var layout = this.props.layout;

      if (layout === 'vertical') {
        return this.renderVerticalRect(alpha);
      }

      return this.renderHorizontalRect(alpha);
    }
  }, {
    key: "renderAreaStatically",
    value: function renderAreaStatically(points, baseLine, needClip, clipPathId) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      var _this$props4 = this.props,
          layout = _this$props4.layout,
          type = _this$props4.type,
          stroke = _this$props4.stroke,
          connectNulls = _this$props4.connectNulls,
          isRange = _this$props4.isRange,
          ref = _this$props4.ref,
          others = _objectWithoutProperties(_this$props4, ["layout", "type", "stroke", "connectNulls", "isRange", "ref"]);

      return /*#__PURE__*/_react["default"].createElement(_Layer.Layer, {
        clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : null
      }, /*#__PURE__*/_react["default"].createElement(_Curve.Curve, _extends({}, (0, _types.filterProps)(others, true), {
        points: points,
        connectNulls: connectNulls,
        type: type,
        baseLine: baseLine,
        layout: layout,
        stroke: "none",
        className: "recharts-area-area"
      })), stroke !== 'none' && /*#__PURE__*/_react["default"].createElement(_Curve.Curve, _extends({}, (0, _types.filterProps)(this.props), {
        className: "recharts-area-curve",
        layout: layout,
        type: type,
        connectNulls: connectNulls,
        fill: "none",
        points: points
      })), stroke !== 'none' && isRange && /*#__PURE__*/_react["default"].createElement(_Curve.Curve, _extends({}, (0, _types.filterProps)(this.props), {
        className: "recharts-area-curve",
        layout: layout,
        type: type,
        connectNulls: connectNulls,
        fill: "none",
        points: baseLine
      })));
    }
  }, {
    key: "renderAreaWithAnimation",
    value: function renderAreaWithAnimation(needClip, clipPathId) {
      var _this2 = this;

      var _this$props5 = this.props,
          points = _this$props5.points,
          baseLine = _this$props5.baseLine,
          isAnimationActive = _this$props5.isAnimationActive,
          animationBegin = _this$props5.animationBegin,
          animationDuration = _this$props5.animationDuration,
          animationEasing = _this$props5.animationEasing,
          animationId = _this$props5.animationId;
      var _this$state = this.state,
          prevPoints = _this$state.prevPoints,
          prevBaseLine = _this$state.prevBaseLine; // const clipPathId = _.isNil(id) ? this.id : id;

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
        key: "area-".concat(animationId),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function (_ref) {
        var t = _ref.t;

        if (prevPoints) {
          var prevPointsDiffFactor = prevPoints.length / points.length; // update animtaion

          var stepPoints = points.map(function (entry, index) {
            var prevPointIndex = Math.floor(index * prevPointsDiffFactor);

            if (prevPoints[prevPointIndex]) {
              var prev = prevPoints[prevPointIndex];
              var interpolatorX = (0, _DataUtils.interpolateNumber)(prev.x, entry.x);
              var interpolatorY = (0, _DataUtils.interpolateNumber)(prev.y, entry.y);
              return _objectSpread(_objectSpread({}, entry), {}, {
                x: interpolatorX(t),
                y: interpolatorY(t)
              });
            }

            return entry;
          });
          var stepBaseLine;

          if ((0, _DataUtils.isNumber)(baseLine) && typeof baseLine === 'number') {
            var interpolator = (0, _DataUtils.interpolateNumber)(prevBaseLine, baseLine);
            stepBaseLine = interpolator(t);
          } else if ((0, _isNil2["default"])(baseLine) || (0, _isNaN2["default"])(baseLine)) {
            var _interpolator = (0, _DataUtils.interpolateNumber)(prevBaseLine, 0);

            stepBaseLine = _interpolator(t);
          } else {
            stepBaseLine = baseLine.map(function (entry, index) {
              var prevPointIndex = Math.floor(index * prevPointsDiffFactor);

              if (prevBaseLine[prevPointIndex]) {
                var prev = prevBaseLine[prevPointIndex];
                var interpolatorX = (0, _DataUtils.interpolateNumber)(prev.x, entry.x);
                var interpolatorY = (0, _DataUtils.interpolateNumber)(prev.y, entry.y);
                return _objectSpread(_objectSpread({}, entry), {}, {
                  x: interpolatorX(t),
                  y: interpolatorY(t)
                });
              }

              return entry;
            });
          }

          return _this2.renderAreaStatically(stepPoints, stepBaseLine, needClip, clipPathId);
        }

        return /*#__PURE__*/_react["default"].createElement(_Layer.Layer, null, /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("clipPath", {
          id: "animationClipPath-".concat(clipPathId)
        }, _this2.renderClipRect(t))), /*#__PURE__*/_react["default"].createElement(_Layer.Layer, {
          clipPath: "url(#animationClipPath-".concat(clipPathId, ")")
        }, _this2.renderAreaStatically(points, baseLine, needClip, clipPathId)));
      });
    }
  }, {
    key: "renderArea",
    value: function renderArea(needClip, clipPathId) {
      var _this$props6 = this.props,
          points = _this$props6.points,
          baseLine = _this$props6.baseLine,
          isAnimationActive = _this$props6.isAnimationActive;
      var _this$state2 = this.state,
          prevPoints = _this$state2.prevPoints,
          prevBaseLine = _this$state2.prevBaseLine,
          totalLength = _this$state2.totalLength;

      if (isAnimationActive && points && points.length && (!prevPoints && totalLength > 0 || !(0, _isEqual2["default"])(prevPoints, points) || !(0, _isEqual2["default"])(prevBaseLine, baseLine))) {
        return this.renderAreaWithAnimation(needClip, clipPathId);
      }

      return this.renderAreaStatically(points, baseLine, needClip, clipPathId);
    }
  }, {
    key: "render",
    value: function render() {
      var _filterProps;

      var _this$props7 = this.props,
          hide = _this$props7.hide,
          dot = _this$props7.dot,
          points = _this$props7.points,
          className = _this$props7.className,
          top = _this$props7.top,
          left = _this$props7.left,
          xAxis = _this$props7.xAxis,
          yAxis = _this$props7.yAxis,
          width = _this$props7.width,
          height = _this$props7.height,
          isAnimationActive = _this$props7.isAnimationActive,
          id = _this$props7.id;

      if (hide || !points || !points.length) {
        return null;
      }

      var isAnimationFinished = this.state.isAnimationFinished;
      var hasSinglePoint = points.length === 1;
      var layerClass = (0, _classnames["default"])('recharts-area', className);
      var needClipX = xAxis && xAxis.allowDataOverflow;
      var needClipY = yAxis && yAxis.allowDataOverflow;
      var needClip = needClipX || needClipY;
      var clipPathId = (0, _isNil2["default"])(id) ? this.id : id;
      var dotRadius = ((_filterProps = (0, _types.filterProps)(dot, true)) === null || _filterProps === void 0 ? void 0 : _filterProps.r) || 3;
      return /*#__PURE__*/_react["default"].createElement(_Layer.Layer, {
        className: layerClass
      }, needClipX || needClipY ? /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("clipPath", {
        id: "clipPath-".concat(clipPathId)
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        x: needClipX ? left : left - width / 2,
        y: needClipY ? top : top - height / 2,
        width: needClipX ? width : width * 2,
        height: needClipY ? height : height * 2
      })), /*#__PURE__*/_react["default"].createElement("clipPath", {
        id: "clipPath-dots-".concat(clipPathId)
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        x: left - dotRadius,
        y: top - dotRadius,
        width: width + dotRadius * 2,
        height: height + dotRadius * 2
      }))) : null, !hasSinglePoint ? this.renderArea(needClip, clipPathId) : null, (dot || hasSinglePoint) && this.renderDots(needClip, clipPathId), (!isAnimationActive || isAnimationFinished) && _LabelList.LabelList.renderCallByParent(this.props, points));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.animationId !== prevState.prevAnimationId) {
        return {
          prevAnimationId: nextProps.animationId,
          curPoints: nextProps.points,
          curBaseLine: nextProps.baseLine,
          prevPoints: prevState.curPoints,
          prevBaseLine: prevState.curBaseLine
        };
      }

      if (nextProps.points !== prevState.curPoints || nextProps.baseLine !== prevState.curBaseLine) {
        return {
          curPoints: nextProps.points,
          curBaseLine: nextProps.baseLine
        };
      }

      return null;
    }
  }]);

  return Area;
}(_react.PureComponent);

exports.Area = Area;
Area.displayName = 'Area';
Area.defaultProps = {
  stroke: '#3182bd',
  fill: '#3182bd',
  fillOpacity: 0.6,
  xAxisId: 0,
  yAxisId: 0,
  legendType: 'line',
  connectNulls: false,
  // points of area
  points: [],
  dot: false,
  activeDot: true,
  hide: false,
  isAnimationActive: !_Global.Global.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: 'ease'
};

Area.getBaseValue = function (props, xAxis, yAxis) {
  var layout = props.layout,
      baseValue = props.baseValue;

  if ((0, _DataUtils.isNumber)(baseValue) && typeof baseValue === 'number') {
    return baseValue;
  }

  var numericAxis = layout === 'horizontal' ? yAxis : xAxis;
  var domain = numericAxis.scale.domain();

  if (numericAxis.type === 'number') {
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

Area.getComposedData = function (_ref2) {
  var props = _ref2.props,
      xAxis = _ref2.xAxis,
      yAxis = _ref2.yAxis,
      xAxisTicks = _ref2.xAxisTicks,
      yAxisTicks = _ref2.yAxisTicks,
      bandSize = _ref2.bandSize,
      dataKey = _ref2.dataKey,
      stackedData = _ref2.stackedData,
      dataStartIndex = _ref2.dataStartIndex,
      displayedData = _ref2.displayedData,
      offset = _ref2.offset;
  var layout = props.layout;
  var hasStack = stackedData && stackedData.length;
  var baseValue = Area.getBaseValue(props, xAxis, yAxis);
  var isRange = false;
  var points = displayedData.map(function (entry, index) {
    var originalValue = (0, _ChartUtils.getValueByDataKey)(entry, dataKey);
    var value;

    if (hasStack) {
      value = stackedData[dataStartIndex + index];
    } else {
      value = originalValue;

      if (!(0, _isArray2["default"])(value)) {
        value = [baseValue, value];
      } else {
        isRange = true;
      }
    }

    var isBreakPoint = (0, _isNil2["default"])(value[1]) || hasStack && (0, _isNil2["default"])(originalValue);

    if (layout === 'horizontal') {
      return {
        x: (0, _ChartUtils.getCateCoordinateOfLine)({
          axis: xAxis,
          ticks: xAxisTicks,
          bandSize: bandSize,
          entry: entry,
          index: index
        }),
        y: isBreakPoint ? null : yAxis.scale(value[1]),
        value: value,
        payload: entry
      };
    }

    return {
      x: isBreakPoint ? null : xAxis.scale(value[1]),
      y: (0, _ChartUtils.getCateCoordinateOfLine)({
        axis: yAxis,
        ticks: yAxisTicks,
        bandSize: bandSize,
        entry: entry,
        index: index
      }),
      value: value,
      payload: entry
    };
  });
  var baseLine;

  if (hasStack || isRange) {
    baseLine = points.map(function (entry) {
      if (layout === 'horizontal') {
        return {
          x: entry.x,
          y: !(0, _isNil2["default"])((0, _get2["default"])(entry, 'value[0]')) && !(0, _isNil2["default"])((0, _get2["default"])(entry, 'y')) ? yAxis.scale((0, _get2["default"])(entry, 'value[0]')) : null
        };
      }

      return {
        x: !(0, _isNil2["default"])((0, _get2["default"])(entry, 'value[0]')) ? xAxis.scale((0, _get2["default"])(entry, 'value[0]')) : null,
        y: entry.y
      };
    });
  } else if (layout === 'horizontal') {
    baseLine = yAxis.scale(baseValue);
  } else {
    baseLine = xAxis.scale(baseValue);
  }

  return _objectSpread({
    points: points,
    baseLine: baseLine,
    layout: layout,
    isRange: isRange
  }, offset);
};

Area.renderDotItem = function (option, props) {
  var dotItem;

  if ( /*#__PURE__*/_react["default"].isValidElement(option)) {
    dotItem = /*#__PURE__*/_react["default"].cloneElement(option, props);
  } else if ((0, _isFunction2["default"])(option)) {
    dotItem = option(props);
  } else {
    dotItem = /*#__PURE__*/_react["default"].createElement(_Dot.Dot, _extends({}, props, {
      className: "recharts-area-dot"
    }));
  }

  return dotItem;
};