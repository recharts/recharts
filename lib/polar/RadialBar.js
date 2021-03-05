"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadialBar = void 0;

var _isEqual2 = _interopRequireDefault(require("lodash/isEqual"));

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

var _isArray2 = _interopRequireDefault(require("lodash/isArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactSmooth = _interopRequireDefault(require("react-smooth"));

var _Sector = require("../shape/Sector");

var _Layer = require("../container/Layer");

var _ReactUtils = require("../util/ReactUtils");

var _Global = require("../util/Global");

var _LabelList = require("../component/LabelList");

var _Cell = require("../component/Cell");

var _DataUtils = require("../util/DataUtils");

var _ChartUtils = require("../util/ChartUtils");

var _types = require("../util/types");

var _PolarUtils = require("../util/PolarUtils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

var RadialBar = /*#__PURE__*/function (_PureComponent) {
  _inherits(RadialBar, _PureComponent);

  var _super = _createSuper(RadialBar);

  function RadialBar() {
    var _this;

    _classCallCheck(this, RadialBar);

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

    return _this;
  }

  _createClass(RadialBar, [{
    key: "getDeltaAngle",
    value: function getDeltaAngle() {
      var _this$props = this.props,
          startAngle = _this$props.startAngle,
          endAngle = _this$props.endAngle;
      var sign = (0, _DataUtils.mathSign)(endAngle - startAngle);
      var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);
      return sign * deltaAngle;
    }
  }, {
    key: "renderSectorsStatically",
    value: function renderSectorsStatically(sectors) {
      var _this2 = this;

      var _this$props2 = this.props,
          shape = _this$props2.shape,
          activeShape = _this$props2.activeShape,
          activeIndex = _this$props2.activeIndex,
          cornerRadius = _this$props2.cornerRadius,
          others = _objectWithoutProperties(_this$props2, ["shape", "activeShape", "activeIndex", "cornerRadius"]);

      var baseProps = (0, _types.filterProps)(others);
      return sectors.map(function (entry, i) {
        var props = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, baseProps), {}, {
          cornerRadius: cornerRadius
        }, entry), (0, _types.adaptEventsOfChild)(_this2.props, entry, i)), {}, {
          key: "sector-".concat(i),
          className: 'recharts-radial-bar-sector',
          forceCornerRadius: others.forceCornerRadius,
          cornerIsExternal: others.cornerIsExternal
        });

        return RadialBar.renderSectorShape(i === activeIndex ? activeShape : shape, props);
      });
    }
  }, {
    key: "renderSectorsWithAnimation",
    value: function renderSectorsWithAnimation() {
      var _this3 = this;

      var _this$props3 = this.props,
          data = _this$props3.data,
          isAnimationActive = _this$props3.isAnimationActive,
          animationBegin = _this$props3.animationBegin,
          animationDuration = _this$props3.animationDuration,
          animationEasing = _this$props3.animationEasing,
          animationId = _this$props3.animationId;
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
        key: "radialBar-".concat(animationId),
        onAnimationStart: this.handleAnimationStart,
        onAnimationEnd: this.handleAnimationEnd
      }, function (_ref) {
        var t = _ref.t;
        var stepData = data.map(function (entry, index) {
          var prev = prevData && prevData[index];

          if (prev) {
            var interpolatorStartAngle = (0, _DataUtils.interpolateNumber)(prev.startAngle, entry.startAngle);
            var interpolatorEndAngle = (0, _DataUtils.interpolateNumber)(prev.endAngle, entry.endAngle);
            return _objectSpread(_objectSpread({}, entry), {}, {
              startAngle: interpolatorStartAngle(t),
              endAngle: interpolatorEndAngle(t)
            });
          }

          var endAngle = entry.endAngle,
              startAngle = entry.startAngle;
          var interpolator = (0, _DataUtils.interpolateNumber)(startAngle, endAngle);
          return _objectSpread(_objectSpread({}, entry), {}, {
            endAngle: interpolator(t)
          });
        });
        return /*#__PURE__*/_react["default"].createElement(_Layer.Layer, null, _this3.renderSectorsStatically(stepData));
      });
    }
  }, {
    key: "renderSectors",
    value: function renderSectors() {
      var _this$props4 = this.props,
          data = _this$props4.data,
          isAnimationActive = _this$props4.isAnimationActive;
      var prevData = this.state.prevData;

      if (isAnimationActive && data && data.length && (!prevData || !(0, _isEqual2["default"])(prevData, data))) {
        return this.renderSectorsWithAnimation();
      }

      return this.renderSectorsStatically(data);
    }
  }, {
    key: "renderBackground",
    value: function renderBackground(sectors) {
      var _this4 = this;

      var cornerRadius = this.props.cornerRadius;
      var backgroundProps = (0, _types.filterProps)(this.props.background);
      return sectors.map(function (entry, i) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var value = entry.value,
            background = entry.background,
            rest = _objectWithoutProperties(entry, ["value", "background"]);

        if (!background) {
          return null;
        }

        var props = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
          cornerRadius: cornerRadius
        }, rest), {}, {
          fill: '#eee'
        }, background), backgroundProps), (0, _types.adaptEventsOfChild)(_this4.props, entry, i)), {}, {
          index: i,
          key: "sector-".concat(i),
          className: 'recharts-radial-bar-background-sector'
        });

        return RadialBar.renderSectorShape(background, props);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          hide = _this$props5.hide,
          data = _this$props5.data,
          className = _this$props5.className,
          background = _this$props5.background,
          isAnimationActive = _this$props5.isAnimationActive;

      if (hide || !data || !data.length) {
        return null;
      }

      var isAnimationFinished = this.state.isAnimationFinished;
      var layerClass = (0, _classnames["default"])('recharts-area', className);
      return /*#__PURE__*/_react["default"].createElement(_Layer.Layer, {
        className: layerClass
      }, background && /*#__PURE__*/_react["default"].createElement(_Layer.Layer, {
        className: "recharts-radial-bar-background"
      }, this.renderBackground(data)), /*#__PURE__*/_react["default"].createElement(_Layer.Layer, {
        className: "recharts-radial-bar-sectors"
      }, this.renderSectors()), (!isAnimationActive || isAnimationFinished) && _LabelList.LabelList.renderCallByParent(_objectSpread(_objectSpread({}, this.props), {}, {
        clockWise: this.getDeltaAngle() < 0
      }), data));
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
    key: "renderSectorShape",
    value: function renderSectorShape(shape, props) {
      var sectorShape;

      if ( /*#__PURE__*/_react["default"].isValidElement(shape)) {
        sectorShape = /*#__PURE__*/_react["default"].cloneElement(shape, props);
      } else if ((0, _isFunction2["default"])(shape)) {
        sectorShape = shape(props);
      } else {
        sectorShape = /*#__PURE__*/_react["default"].createElement(_Sector.Sector, props);
      }

      return sectorShape;
    }
  }]);

  return RadialBar;
}(_react.PureComponent);

exports.RadialBar = RadialBar;
RadialBar.displayName = 'RadialBar';
RadialBar.defaultProps = {
  angleAxisId: 0,
  radiusAxisId: 0,
  minPointSize: 0,
  hide: false,
  legendType: 'rect',
  data: [],
  isAnimationActive: !_Global.Global.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: 'ease',
  forceCornerRadius: false,
  cornerIsExternal: false
};

RadialBar.getComposedData = function (_ref2) {
  var item = _ref2.item,
      props = _ref2.props,
      radiusAxis = _ref2.radiusAxis,
      radiusAxisTicks = _ref2.radiusAxisTicks,
      angleAxis = _ref2.angleAxis,
      angleAxisTicks = _ref2.angleAxisTicks,
      displayedData = _ref2.displayedData,
      dataKey = _ref2.dataKey,
      stackedData = _ref2.stackedData,
      barPosition = _ref2.barPosition,
      bandSize = _ref2.bandSize,
      dataStartIndex = _ref2.dataStartIndex;
  var pos = (0, _ChartUtils.findPositionOfBar)(barPosition, item);

  if (!pos) {
    return null;
  }

  var cx = angleAxis.cx,
      cy = angleAxis.cy;
  var layout = props.layout;
  var _item$props = item.props,
      children = _item$props.children,
      minPointSize = _item$props.minPointSize;
  var numericAxis = layout === 'radial' ? angleAxis : radiusAxis;
  var stackedDomain = stackedData ? numericAxis.scale.domain() : null;
  var baseValue = (0, _ChartUtils.getBaseValueOfBar)({
    numericAxis: numericAxis
  });
  var cells = (0, _ReactUtils.findAllByType)(children, _Cell.Cell.displayName);
  var sectors = displayedData.map(function (entry, index) {
    var value, innerRadius, outerRadius, startAngle, endAngle, backgroundSector;

    if (stackedData) {
      value = (0, _ChartUtils.truncateByDomain)(stackedData[dataStartIndex + index], stackedDomain);
    } else {
      value = (0, _ChartUtils.getValueByDataKey)(entry, dataKey);

      if (!(0, _isArray2["default"])(value)) {
        value = [baseValue, value];
      }
    }

    if (layout === 'radial') {
      innerRadius = (0, _ChartUtils.getCateCoordinateOfBar)({
        axis: radiusAxis,
        ticks: radiusAxisTicks,
        bandSize: bandSize,
        offset: pos.offset,
        entry: entry,
        index: index
      });
      endAngle = angleAxis.scale(value[1]);
      startAngle = angleAxis.scale(value[0]);
      outerRadius = innerRadius + pos.size;
      var deltaAngle = endAngle - startAngle;

      if (Math.abs(minPointSize) > 0 && Math.abs(deltaAngle) < Math.abs(minPointSize)) {
        var delta = (0, _DataUtils.mathSign)(deltaAngle || minPointSize) * (Math.abs(minPointSize) - Math.abs(deltaAngle));
        endAngle += delta;
      }

      backgroundSector = {
        background: {
          cx: cx,
          cy: cy,
          innerRadius: innerRadius,
          outerRadius: outerRadius,
          startAngle: props.startAngle,
          endAngle: props.endAngle
        }
      };
    } else {
      innerRadius = radiusAxis.scale(value[0]);
      outerRadius = radiusAxis.scale(value[1]);
      startAngle = (0, _ChartUtils.getCateCoordinateOfBar)({
        axis: angleAxis,
        ticks: angleAxisTicks,
        bandSize: bandSize,
        offset: pos.offset,
        entry: entry,
        index: index
      });
      endAngle = startAngle + pos.size;
      var deltaRadius = outerRadius - innerRadius;

      if (Math.abs(minPointSize) > 0 && Math.abs(deltaRadius) < Math.abs(minPointSize)) {
        var _delta = (0, _DataUtils.mathSign)(deltaRadius || minPointSize) * (Math.abs(minPointSize) - Math.abs(deltaRadius));

        outerRadius += _delta;
      }
    }

    return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, entry), backgroundSector), {}, {
      payload: entry,
      value: stackedData ? value : value[1],
      cx: cx,
      cy: cy,
      innerRadius: innerRadius,
      outerRadius: outerRadius,
      startAngle: startAngle,
      endAngle: endAngle
    }, cells && cells[index] && cells[index].props), {}, {
      tooltipPayload: [(0, _ChartUtils.getTooltipItem)(item, entry)],
      tooltipPosition: (0, _PolarUtils.polarToCartesian)(cx, cy, (innerRadius + outerRadius) / 2, (startAngle + endAngle) / 2)
    });
  });
  return {
    data: sectors,
    layout: layout
  };
};