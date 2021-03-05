"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scatter = void 0;

var _isEqual2 = _interopRequireDefault(require("lodash/isEqual"));

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

var _isNil2 = _interopRequireDefault(require("lodash/isNil"));

var _react = _interopRequireWildcard(require("react"));

var _reactSmooth = _interopRequireDefault(require("react-smooth"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Layer = require("../container/Layer");

var _LabelList = require("../component/LabelList");

var _ReactUtils = require("../util/ReactUtils");

var _Global = require("../util/Global");

var _ZAxis = require("./ZAxis");

var _Curve = require("../shape/Curve");

var _Symbols = require("../shape/Symbols");

var _ErrorBar = require("./ErrorBar");

var _Cell = require("../component/Cell");

var _DataUtils = require("../util/DataUtils");

var _ChartUtils = require("../util/ChartUtils");

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

var Scatter = /*#__PURE__*/function (_PureComponent) {
  _inherits(Scatter, _PureComponent);

  var _super = _createSuper(Scatter);

  function Scatter() {
    var _this;

    _classCallCheck(this, Scatter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      isAnimationFinished: false
    };

    _this.handleAnimationEnd = function () {
      _this.setState({
        isAnimationFinished: true
      });
    };

    _this.handleAnimationStart = function () {
      _this.setState({
        isAnimationFinished: false
      });
    };

    _this.id = (0, _DataUtils.uniqueId)('recharts-scatter-');
    return _this;
  }

  _createClass(Scatter, [{
    key: "renderSymbolsStatically",
    value: function renderSymbolsStatically(points) {
      var _this2 = this;

      var _this$props = this.props,
          shape = _this$props.shape,
          activeShape = _this$props.activeShape,
          activeIndex = _this$props.activeIndex;
      var baseProps = (0, _types.filterProps)(this.props);
      return points.map(function (entry, i) {
        var props = _objectSpread(_objectSpread({
          key: "symbol-".concat(i)
        }, baseProps), entry);

        return /*#__PURE__*/_react["default"].createElement(_Layer.Layer, _extends({
          className: "recharts-scatter-symbol"
        }, (0, _types.adaptEventsOfChild)(_this2.props, entry, i), {
          key: "symbol-".concat(i) // eslint-disable-line react/no-array-index-key

        }), Scatter.renderSymbolItem(activeIndex === i ? activeShape : shape, props));
      });
    }
  }, {
    key: "renderSymbolsWithAnimation",
    value: function renderSymbolsWithAnimation() {
      var _this3 = this;

      var _this$props2 = this.props,
          points = _this$props2.points,
          isAnimationActive = _this$props2.isAnimationActive,
          animationBegin = _this$props2.animationBegin,
          animationDuration = _this$props2.animationDuration,
          animationEasing = _this$props2.animationEasing,
          animationId = _this$props2.animationId;
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
        key: "pie-".concat(animationId),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function (_ref) {
        var t = _ref.t;
        var stepData = points.map(function (entry, index) {
          var prev = prevPoints && prevPoints[index];

          if (prev) {
            var interpolatorCx = (0, _DataUtils.interpolateNumber)(prev.cx, entry.cx);
            var interpolatorCy = (0, _DataUtils.interpolateNumber)(prev.cy, entry.cy);
            var interpolatorSize = (0, _DataUtils.interpolateNumber)(prev.size, entry.size);
            return _objectSpread(_objectSpread({}, entry), {}, {
              cx: interpolatorCx(t),
              cy: interpolatorCy(t),
              size: interpolatorSize(t)
            });
          }

          var interpolator = (0, _DataUtils.interpolateNumber)(0, entry.size);
          return _objectSpread(_objectSpread({}, entry), {}, {
            size: interpolator(t)
          });
        });
        return /*#__PURE__*/_react["default"].createElement(_Layer.Layer, null, _this3.renderSymbolsStatically(stepData));
      });
    }
  }, {
    key: "renderSymbols",
    value: function renderSymbols() {
      var _this$props3 = this.props,
          points = _this$props3.points,
          isAnimationActive = _this$props3.isAnimationActive;
      var prevPoints = this.state.prevPoints;

      if (isAnimationActive && points && points.length && (!prevPoints || !(0, _isEqual2["default"])(prevPoints, points))) {
        return this.renderSymbolsWithAnimation();
      }

      return this.renderSymbolsStatically(points);
    }
  }, {
    key: "renderErrorBar",
    value: function renderErrorBar() {
      var isAnimationActive = this.props.isAnimationActive;

      if (isAnimationActive && !this.state.isAnimationFinished) {
        return null;
      }

      var _this$props4 = this.props,
          points = _this$props4.points,
          xAxis = _this$props4.xAxis,
          yAxis = _this$props4.yAxis,
          children = _this$props4.children;
      var errorBarItems = (0, _ReactUtils.findAllByType)(children, _ErrorBar.ErrorBar.displayName);

      if (!errorBarItems) {
        return null;
      }

      function dataPointFormatterY(dataPoint, dataKey) {
        return {
          x: dataPoint.cx,
          y: dataPoint.cy,
          value: +dataPoint.node.y,
          errorVal: (0, _ChartUtils.getValueByDataKey)(dataPoint, dataKey)
        };
      }

      function dataPointFormatterX(dataPoint, dataKey) {
        return {
          x: dataPoint.cx,
          y: dataPoint.cy,
          value: +dataPoint.node.x,
          errorVal: (0, _ChartUtils.getValueByDataKey)(dataPoint, dataKey)
        };
      }

      return errorBarItems.map(function (item, i) {
        var direction = item.props.direction;
        return /*#__PURE__*/_react["default"].cloneElement(item, {
          key: i,
          // eslint-disable-line react/no-array-index-key
          data: points,
          xAxis: xAxis,
          yAxis: yAxis,
          layout: direction === 'x' ? 'vertical' : 'horizontal',
          dataPointFormatter: direction === 'x' ? dataPointFormatterX : dataPointFormatterY
        });
      });
    }
  }, {
    key: "renderLine",
    value: function renderLine() {
      var _this$props5 = this.props,
          points = _this$props5.points,
          line = _this$props5.line,
          lineType = _this$props5.lineType,
          lineJointType = _this$props5.lineJointType;
      var scatterProps = (0, _types.filterProps)(this.props);
      var customLineProps = (0, _types.filterProps)(line);
      var linePoints, lineItem;

      if (lineType === 'joint') {
        linePoints = points.map(function (entry) {
          return {
            x: entry.cx,
            y: entry.cy
          };
        });
      } else if (lineType === 'fitting') {
        var _getLinearRegression = (0, _DataUtils.getLinearRegression)(points),
            xmin = _getLinearRegression.xmin,
            xmax = _getLinearRegression.xmax,
            a = _getLinearRegression.a,
            b = _getLinearRegression.b;

        var linearExp = function linearExp(x) {
          return a * x + b;
        };

        linePoints = [{
          x: xmin,
          y: linearExp(xmin)
        }, {
          x: xmax,
          y: linearExp(xmax)
        }];
      }

      var lineProps = _objectSpread(_objectSpread(_objectSpread({}, scatterProps), {}, {
        fill: 'none',
        stroke: scatterProps && scatterProps.fill
      }, customLineProps), {}, {
        points: linePoints
      });

      if ( /*#__PURE__*/_react["default"].isValidElement(line)) {
        lineItem = /*#__PURE__*/_react["default"].cloneElement(line, lineProps);
      } else if ((0, _isFunction2["default"])(line)) {
        lineItem = line(lineProps);
      } else {
        lineItem = /*#__PURE__*/_react["default"].createElement(_Curve.Curve, _extends({}, lineProps, {
          type: lineJointType
        }));
      }

      return /*#__PURE__*/_react["default"].createElement(_Layer.Layer, {
        className: "recharts-scatter-line",
        key: "recharts-scatter-line"
      }, lineItem);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          hide = _this$props6.hide,
          points = _this$props6.points,
          line = _this$props6.line,
          className = _this$props6.className,
          xAxis = _this$props6.xAxis,
          yAxis = _this$props6.yAxis,
          left = _this$props6.left,
          top = _this$props6.top,
          width = _this$props6.width,
          height = _this$props6.height,
          id = _this$props6.id,
          isAnimationActive = _this$props6.isAnimationActive;

      if (hide || !points || !points.length) {
        return null;
      }

      var isAnimationFinished = this.state.isAnimationFinished;
      var layerClass = (0, _classnames["default"])('recharts-scatter', className);
      var needClipX = xAxis && xAxis.allowDataOverflow;
      var needClipY = yAxis && yAxis.allowDataOverflow;
      var needClip = needClipX || needClipY;
      var clipPathId = (0, _isNil2["default"])(id) ? this.id : id;
      return /*#__PURE__*/_react["default"].createElement(_Layer.Layer, {
        className: layerClass,
        clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : null
      }, needClipX || needClipY ? /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("clipPath", {
        id: "clipPath-".concat(clipPathId)
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        x: needClipX ? left : left - width / 2,
        y: needClipY ? top : top - height / 2,
        width: needClipX ? width : width * 2,
        height: needClipY ? height : height * 2
      }))) : null, line && this.renderLine(), this.renderErrorBar(), /*#__PURE__*/_react["default"].createElement(_Layer.Layer, {
        key: "recharts-scatter-symbols"
      }, this.renderSymbols()), (!isAnimationActive || isAnimationFinished) && _LabelList.LabelList.renderCallByParent(this.props, points));
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
    key: "renderSymbolItem",
    value: function renderSymbolItem(option, props) {
      var symbol;

      if ( /*#__PURE__*/_react["default"].isValidElement(option)) {
        symbol = /*#__PURE__*/_react["default"].cloneElement(option, props);
      } else if ((0, _isFunction2["default"])(option)) {
        symbol = option(props);
      } else if (typeof option === 'string') {
        symbol = /*#__PURE__*/_react["default"].createElement(_Symbols.Symbols, _extends({}, props, {
          type: option
        }));
      }

      return symbol;
    }
  }]);

  return Scatter;
}(_react.PureComponent);

exports.Scatter = Scatter;
Scatter.displayName = 'Scatter';
Scatter.defaultProps = {
  xAxisId: 0,
  yAxisId: 0,
  zAxisId: 0,
  legendType: 'circle',
  lineType: 'joint',
  lineJointType: 'linear',
  data: [],
  shape: 'circle',
  hide: false,
  isAnimationActive: !_Global.Global.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: 'linear'
};

Scatter.getComposedData = function (_ref2) {
  var xAxis = _ref2.xAxis,
      yAxis = _ref2.yAxis,
      zAxis = _ref2.zAxis,
      item = _ref2.item,
      displayedData = _ref2.displayedData,
      xAxisTicks = _ref2.xAxisTicks,
      yAxisTicks = _ref2.yAxisTicks,
      offset = _ref2.offset;
  var tooltipType = item.props.tooltipType;
  var cells = (0, _ReactUtils.findAllByType)(item.props.children, _Cell.Cell.displayName);
  var xAxisDataKey = (0, _isNil2["default"])(xAxis.dataKey) ? item.props.dataKey : xAxis.dataKey;
  var yAxisDataKey = (0, _isNil2["default"])(yAxis.dataKey) ? item.props.dataKey : yAxis.dataKey;
  var zAxisDataKey = zAxis && zAxis.dataKey;
  var defaultRangeZ = zAxis ? zAxis.range : _ZAxis.ZAxis.defaultProps.range;
  var defaultZ = defaultRangeZ && defaultRangeZ[0];
  var xBandSize = xAxis.scale.bandwidth ? xAxis.scale.bandwidth() : 0;
  var yBandSize = yAxis.scale.bandwidth ? yAxis.scale.bandwidth() : 0;
  var points = displayedData.map(function (entry, index) {
    var x = (0, _ChartUtils.getValueByDataKey)(entry, xAxisDataKey);
    var y = (0, _ChartUtils.getValueByDataKey)(entry, yAxisDataKey);
    var z = !(0, _isNil2["default"])(zAxisDataKey) && (0, _ChartUtils.getValueByDataKey)(entry, zAxisDataKey) || '-';
    var tooltipPayload = [{
      name: (0, _isNil2["default"])(xAxis.dataKey) ? item.props.name : xAxis.name || xAxis.dataKey,
      unit: xAxis.unit || '',
      value: x,
      payload: entry,
      dataKey: xAxisDataKey,
      type: tooltipType
    }, {
      name: (0, _isNil2["default"])(yAxis.dataKey) ? item.props.name : yAxis.name || yAxis.dataKey,
      unit: yAxis.unit || '',
      value: y,
      payload: entry,
      dataKey: yAxisDataKey,
      type: tooltipType
    }];

    if (z !== '-') {
      tooltipPayload.push({
        name: zAxis.name || zAxis.dataKey,
        unit: zAxis.unit || '',
        value: z,
        payload: entry,
        dataKey: zAxisDataKey,
        type: tooltipType
      });
    }

    var cx = (0, _ChartUtils.getCateCoordinateOfLine)({
      axis: xAxis,
      ticks: xAxisTicks,
      bandSize: xBandSize,
      entry: entry,
      index: index,
      dataKey: xAxisDataKey
    });
    var cy = (0, _ChartUtils.getCateCoordinateOfLine)({
      axis: yAxis,
      ticks: yAxisTicks,
      bandSize: yBandSize,
      entry: entry,
      index: index,
      dataKey: yAxisDataKey
    });
    var size = z !== '-' ? zAxis.scale(z) : defaultZ;
    var radius = Math.sqrt(Math.max(size, 0) / Math.PI);
    return _objectSpread(_objectSpread({}, entry), {}, {
      cx: cx,
      cy: cy,
      x: cx - radius,
      y: cy - radius,
      xAxis: xAxis,
      yAxis: yAxis,
      zAxis: zAxis,
      width: 2 * radius,
      height: 2 * radius,
      size: size,
      node: {
        x: x,
        y: y,
        z: z
      },
      tooltipPayload: tooltipPayload,
      tooltipPosition: {
        x: cx,
        y: cy
      },
      payload: entry
    }, cells && cells[index] && cells[index].props);
  });
  return _objectSpread({
    points: points
  }, offset);
};