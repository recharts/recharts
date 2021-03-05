"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bar = void 0;

var _isNil2 = _interopRequireDefault(require("lodash/isNil"));

var _isEqual2 = _interopRequireDefault(require("lodash/isEqual"));

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

var _isArray2 = _interopRequireDefault(require("lodash/isArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactSmooth = _interopRequireDefault(require("react-smooth"));

var _Rectangle = require("../shape/Rectangle");

var _Layer = require("../container/Layer");

var _ErrorBar = require("./ErrorBar");

var _Cell = require("../component/Cell");

var _LabelList = require("../component/LabelList");

var _DataUtils = require("../util/DataUtils");

var _ReactUtils = require("../util/ReactUtils");

var _Global = require("../util/Global");

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

var Bar = /*#__PURE__*/function (_PureComponent) {
  _inherits(Bar, _PureComponent);

  var _super = _createSuper(Bar);

  function Bar() {
    var _this;

    _classCallCheck(this, Bar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      isAnimationFinished: false
    };
    _this.id = (0, _DataUtils.uniqueId)('recharts-bar-');

    _this.handleAnimationEnd = function () {
      var onAnimationEnd = _this.props.onAnimationEnd;

      _this.setState({
        isAnimationFinished: true
      });

      if (onAnimationEnd) {
        onAnimationEnd();
      }
    };

    _this.handleAnimationStart = function () {
      var onAnimationStart = _this.props.onAnimationStart;

      _this.setState({
        isAnimationFinished: false
      });

      if (onAnimationStart) {
        onAnimationStart();
      }
    };

    return _this;
  }

  _createClass(Bar, [{
    key: "renderRectanglesStatically",
    value: function renderRectanglesStatically(data) {
      var _this2 = this;

      var shape = this.props.shape;
      var baseProps = (0, _types.filterProps)(this.props);
      return data && data.map(function (entry, i) {
        var props = _objectSpread(_objectSpread(_objectSpread({}, baseProps), entry), {}, {
          index: i
        });

        return /*#__PURE__*/_react["default"].createElement(_Layer.Layer, _extends({
          className: "recharts-bar-rectangle"
        }, (0, _types.adaptEventsOfChild)(_this2.props, entry, i), {
          key: "rectangle-".concat(i) // eslint-disable-line react/no-array-index-key

        }), Bar.renderRectangle(shape, props));
      });
    }
  }, {
    key: "renderRectanglesWithAnimation",
    value: function renderRectanglesWithAnimation() {
      var _this3 = this;

      var _this$props = this.props,
          data = _this$props.data,
          layout = _this$props.layout,
          isAnimationActive = _this$props.isAnimationActive,
          animationBegin = _this$props.animationBegin,
          animationDuration = _this$props.animationDuration,
          animationEasing = _this$props.animationEasing,
          animationId = _this$props.animationId;
      var prevData = this.state.prevData;
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
        key: "bar-".concat(animationId),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function (_ref) {
        var t = _ref.t;
        var stepData = data.map(function (entry, index) {
          var prev = prevData && prevData[index];

          if (prev) {
            var interpolatorX = (0, _DataUtils.interpolateNumber)(prev.x, entry.x);
            var interpolatorY = (0, _DataUtils.interpolateNumber)(prev.y, entry.y);
            var interpolatorWidth = (0, _DataUtils.interpolateNumber)(prev.width, entry.width);
            var interpolatorHeight = (0, _DataUtils.interpolateNumber)(prev.height, entry.height);
            return _objectSpread(_objectSpread({}, entry), {}, {
              x: interpolatorX(t),
              y: interpolatorY(t),
              width: interpolatorWidth(t),
              height: interpolatorHeight(t)
            });
          }

          if (layout === 'horizontal') {
            var _interpolatorHeight = (0, _DataUtils.interpolateNumber)(0, entry.height);

            var h = _interpolatorHeight(t);

            return _objectSpread(_objectSpread({}, entry), {}, {
              y: entry.y + entry.height - h,
              height: h
            });
          }

          var interpolator = (0, _DataUtils.interpolateNumber)(0, entry.width);
          var w = interpolator(t);
          return _objectSpread(_objectSpread({}, entry), {}, {
            width: w
          });
        });
        return /*#__PURE__*/_react["default"].createElement(_Layer.Layer, null, _this3.renderRectanglesStatically(stepData));
      });
    }
  }, {
    key: "renderRectangles",
    value: function renderRectangles() {
      var _this$props2 = this.props,
          data = _this$props2.data,
          isAnimationActive = _this$props2.isAnimationActive;
      var prevData = this.state.prevData;

      if (isAnimationActive && data && data.length && (!prevData || !(0, _isEqual2["default"])(prevData, data))) {
        return this.renderRectanglesWithAnimation();
      }

      return this.renderRectanglesStatically(data);
    }
  }, {
    key: "renderBackground",
    value: function renderBackground() {
      var _this4 = this;

      var data = this.props.data;
      var backgroundProps = (0, _types.filterProps)(this.props.background);
      return data.map(function (entry, i) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var value = entry.value,
            background = entry.background,
            rest = _objectWithoutProperties(entry, ["value", "background"]);

        if (!background) {
          return null;
        }

        var props = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, rest), {}, {
          fill: '#eee'
        }, background), backgroundProps), (0, _types.adaptEventsOfChild)(_this4.props, entry, i)), {}, {
          index: i,
          key: "background-bar-".concat(i),
          className: 'recharts-bar-background-rectangle'
        });

        return Bar.renderRectangle(_this4.props.background, props);
      });
    }
  }, {
    key: "renderErrorBar",
    value: function renderErrorBar() {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished) {
        return null;
      }

      var _this$props3 = this.props,
          data = _this$props3.data,
          xAxis = _this$props3.xAxis,
          yAxis = _this$props3.yAxis,
          layout = _this$props3.layout,
          children = _this$props3.children;
      var errorBarItems = (0, _ReactUtils.findAllByType)(children, _ErrorBar.ErrorBar.displayName);

      if (!errorBarItems) {
        return null;
      }

      var offset = layout === 'vertical' ? data[0].height / 2 : data[0].width / 2;

      function dataPointFormatter(dataPoint, dataKey) {
        return {
          x: dataPoint.x,
          y: dataPoint.y,
          value: dataPoint.value,
          errorVal: (0, _ChartUtils.getValueByDataKey)(dataPoint, dataKey)
        };
      }

      return errorBarItems.map(function (item, i) {
        return /*#__PURE__*/_react["default"].cloneElement(item, {
          key: "error-bar-".concat(i),
          // eslint-disable-line react/no-array-index-key
          data: data,
          xAxis: xAxis,
          yAxis: yAxis,
          layout: layout,
          offset: offset,
          dataPointFormatter: dataPointFormatter
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          hide = _this$props4.hide,
          data = _this$props4.data,
          className = _this$props4.className,
          xAxis = _this$props4.xAxis,
          yAxis = _this$props4.yAxis,
          left = _this$props4.left,
          top = _this$props4.top,
          width = _this$props4.width,
          height = _this$props4.height,
          isAnimationActive = _this$props4.isAnimationActive,
          background = _this$props4.background,
          id = _this$props4.id;

      if (hide || !data || !data.length) {
        return null;
      }

      var isAnimationFinished = this.state.isAnimationFinished;
      var layerClass = (0, _classnames["default"])('recharts-bar', className);
      var needClipX = xAxis && xAxis.allowDataOverflow;
      var needClipY = yAxis && yAxis.allowDataOverflow;
      var needClip = needClipX || needClipY;
      var clipPathId = (0, _isNil2["default"])(id) ? this.id : id;
      return /*#__PURE__*/_react["default"].createElement(_Layer.Layer, {
        className: layerClass
      }, needClipX || needClipY ? /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("clipPath", {
        id: "clipPath-".concat(clipPathId)
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        x: needClipX ? left : left - width / 2,
        y: needClipY ? top : top - height / 2,
        width: needClipX ? width : width * 2,
        height: needClipY ? height : height * 2
      }))) : null, /*#__PURE__*/_react["default"].createElement(_Layer.Layer, {
        className: "recharts-bar-rectangles",
        clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : null
      }, background ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(), (!isAnimationActive || isAnimationFinished) && _LabelList.LabelList.renderCallByParent(this.props, data));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.animationId !== prevState.prevAnimationId) {
        return {
          prevAnimationId: nextProps.animationId,
          curData: nextProps.data,
          prevData: prevState.curData
        };
      }

      if (nextProps.data !== prevState.curData) {
        return {
          curData: nextProps.data
        };
      }

      return null;
    }
  }, {
    key: "renderRectangle",
    value: function renderRectangle(option, props) {
      var rectangle;

      if ( /*#__PURE__*/_react["default"].isValidElement(option)) {
        rectangle = /*#__PURE__*/_react["default"].cloneElement(option, props);
      } else if ((0, _isFunction2["default"])(option)) {
        rectangle = option(props);
      } else {
        rectangle = /*#__PURE__*/_react["default"].createElement(_Rectangle.Rectangle, props);
      }

      return rectangle;
    }
  }]);

  return Bar;
}(_react.PureComponent);

exports.Bar = Bar;
Bar.displayName = 'Bar';
Bar.defaultProps = {
  xAxisId: 0,
  yAxisId: 0,
  legendType: 'rect',
  minPointSize: 0,
  hide: false,
  // data of bar
  data: [],
  layout: 'vertical',
  isAnimationActive: !_Global.Global.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: 'ease'
};

Bar.getComposedData = function (_ref2) {
  var props = _ref2.props,
      item = _ref2.item,
      barPosition = _ref2.barPosition,
      bandSize = _ref2.bandSize,
      xAxis = _ref2.xAxis,
      yAxis = _ref2.yAxis,
      xAxisTicks = _ref2.xAxisTicks,
      yAxisTicks = _ref2.yAxisTicks,
      stackedData = _ref2.stackedData,
      dataStartIndex = _ref2.dataStartIndex,
      displayedData = _ref2.displayedData,
      offset = _ref2.offset;
  var pos = (0, _ChartUtils.findPositionOfBar)(barPosition, item);

  if (!pos) {
    return null;
  }

  var layout = props.layout;
  var _item$props = item.props,
      dataKey = _item$props.dataKey,
      children = _item$props.children,
      minPointSize = _item$props.minPointSize;
  var numericAxis = layout === 'horizontal' ? yAxis : xAxis;
  var stackedDomain = stackedData ? numericAxis.scale.domain() : null;
  var baseValue = (0, _ChartUtils.getBaseValueOfBar)({
    numericAxis: numericAxis
  });
  var cells = (0, _ReactUtils.findAllByType)(children, _Cell.Cell.displayName);
  var rects = displayedData.map(function (entry, index) {
    var value, x, y, width, height, background;

    if (stackedData) {
      value = (0, _ChartUtils.truncateByDomain)(stackedData[dataStartIndex + index], stackedDomain);
    } else {
      value = (0, _ChartUtils.getValueByDataKey)(entry, dataKey);

      if (!(0, _isArray2["default"])(value)) {
        value = [baseValue, value];
      }
    }

    if (layout === 'horizontal') {
      x = (0, _ChartUtils.getCateCoordinateOfBar)({
        axis: xAxis,
        ticks: xAxisTicks,
        bandSize: bandSize,
        offset: pos.offset,
        entry: entry,
        index: index
      });
      y = yAxis.scale(value[1]);
      width = pos.size;
      height = yAxis.scale(value[0]) - yAxis.scale(value[1]);
      background = {
        x: x,
        y: yAxis.y,
        width: width,
        height: yAxis.height
      };

      if (Math.abs(minPointSize) > 0 && Math.abs(height) < Math.abs(minPointSize)) {
        var delta = (0, _DataUtils.mathSign)(height || minPointSize) * (Math.abs(minPointSize) - Math.abs(height));
        y -= delta;
        height += delta;
      }
    } else {
      x = xAxis.scale(value[0]);
      y = (0, _ChartUtils.getCateCoordinateOfBar)({
        axis: yAxis,
        ticks: yAxisTicks,
        bandSize: bandSize,
        offset: pos.offset,
        entry: entry,
        index: index
      });
      width = xAxis.scale(value[1]) - xAxis.scale(value[0]);
      height = pos.size;
      background = {
        x: xAxis.x,
        y: y,
        width: xAxis.width,
        height: height
      };

      if (Math.abs(minPointSize) > 0 && Math.abs(width) < Math.abs(minPointSize)) {
        var _delta = (0, _DataUtils.mathSign)(width || minPointSize) * (Math.abs(minPointSize) - Math.abs(width));

        width += _delta;
      }
    }

    return _objectSpread(_objectSpread(_objectSpread({}, entry), {}, {
      x: x,
      y: y,
      width: width,
      height: height,
      value: stackedData ? value : value[1],
      payload: entry,
      background: background
    }, cells && cells[index] && cells[index].props), {}, {
      tooltipPayload: [(0, _ChartUtils.getTooltipItem)(item, entry)],
      tooltipPosition: {
        x: x + width / 2,
        y: y + height / 2
      }
    });
  });
  return _objectSpread({
    data: rects,
    layout: layout
  }, offset);
};