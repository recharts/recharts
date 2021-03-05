"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Curve = void 0;

var _isArray2 = _interopRequireDefault(require("lodash/isArray"));

var _upperFirst2 = _interopRequireDefault(require("lodash/upperFirst"));

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

var _react = _interopRequireWildcard(require("react"));

var _d3Shape = require("d3-shape");

var _classnames = _interopRequireDefault(require("classnames"));

var _types = require("../util/types");

var _DataUtils = require("../util/DataUtils");

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

var CURVE_FACTORIES = {
  curveBasisClosed: _d3Shape.curveBasisClosed,
  curveBasisOpen: _d3Shape.curveBasisOpen,
  curveBasis: _d3Shape.curveBasis,
  curveLinearClosed: _d3Shape.curveLinearClosed,
  curveLinear: _d3Shape.curveLinear,
  curveMonotoneX: _d3Shape.curveMonotoneX,
  curveMonotoneY: _d3Shape.curveMonotoneY,
  curveNatural: _d3Shape.curveNatural,
  curveStep: _d3Shape.curveStep,
  curveStepAfter: _d3Shape.curveStepAfter,
  curveStepBefore: _d3Shape.curveStepBefore
};

var defined = function defined(p) {
  return p.x === +p.x && p.y === +p.y;
};

var getX = function getX(p) {
  return p.x;
};

var getY = function getY(p) {
  return p.y;
};

var getCurveFactory = function getCurveFactory(type, layout) {
  if ((0, _isFunction2["default"])(type)) {
    return type;
  }

  var name = "curve".concat((0, _upperFirst2["default"])(type));

  if (name === 'curveMonotone' && layout) {
    return CURVE_FACTORIES["".concat(name).concat(layout === 'vertical' ? 'Y' : 'X')];
  }

  return CURVE_FACTORIES[name] || _d3Shape.curveLinear;
};

var Curve = /*#__PURE__*/function (_PureComponent) {
  _inherits(Curve, _PureComponent);

  var _super = _createSuper(Curve);

  function Curve() {
    _classCallCheck(this, Curve);

    return _super.apply(this, arguments);
  }

  _createClass(Curve, [{
    key: "getPath",
    value:
    /**
     * Calculate the path of curve
     * @return {String} path
     */
    function getPath() {
      var _this$props = this.props,
          type = _this$props.type,
          points = _this$props.points,
          baseLine = _this$props.baseLine,
          layout = _this$props.layout,
          connectNulls = _this$props.connectNulls;
      var curveFactory = getCurveFactory(type, layout);
      var formatPoints = connectNulls ? points.filter(function (entry) {
        return defined(entry);
      }) : points;
      var lineFunction;

      if ((0, _isArray2["default"])(baseLine)) {
        var formatBaseLine = connectNulls ? baseLine.filter(function (base) {
          return defined(base);
        }) : baseLine;
        var areaPoints = formatPoints.map(function (entry, index) {
          return _objectSpread(_objectSpread({}, entry), {}, {
            base: formatBaseLine[index]
          });
        });

        if (layout === 'vertical') {
          lineFunction = (0, _d3Shape.area)().y(getY).x1(getX).x0(function (d) {
            return d.base.x;
          });
        } else {
          lineFunction = (0, _d3Shape.area)().x(getX).y1(getY).y0(function (d) {
            return d.base.y;
          });
        }

        lineFunction.defined(defined).curve(curveFactory);
        return lineFunction(areaPoints);
      }

      if (layout === 'vertical' && (0, _DataUtils.isNumber)(baseLine)) {
        lineFunction = (0, _d3Shape.area)().y(getY).x1(getX).x0(baseLine);
      } else if ((0, _DataUtils.isNumber)(baseLine)) {
        lineFunction = (0, _d3Shape.area)().x(getX).y1(getY).y0(baseLine);
      } else {
        lineFunction = (0, _d3Shape.line)().x(getX).y(getY);
      }

      lineFunction.defined(defined).curve(curveFactory);
      return lineFunction(formatPoints);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          points = _this$props2.points,
          path = _this$props2.path,
          pathRef = _this$props2.pathRef;

      if ((!points || !points.length) && !path) {
        return null;
      }

      var realPath = points && points.length ? this.getPath() : path;
      return /*#__PURE__*/_react["default"].createElement("path", _extends({}, (0, _types.filterProps)(this.props), (0, _types.adaptEventHandlers)(this.props), {
        className: (0, _classnames["default"])('recharts-curve', className),
        d: realPath,
        ref: pathRef
      }));
    }
  }]);

  return Curve;
}(_react.PureComponent);

exports.Curve = Curve;
Curve.defaultProps = {
  type: 'linear',
  points: [],
  connectNulls: false
};