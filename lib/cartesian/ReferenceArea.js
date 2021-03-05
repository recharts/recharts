"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReferenceArea = ReferenceArea;

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Layer = require("../container/Layer");

var _Label = require("../component/Label");

var _CartesianUtils = require("../util/CartesianUtils");

var _IfOverflowMatches = require("../util/IfOverflowMatches");

var _DataUtils = require("../util/DataUtils");

var _LogUtils = require("../util/LogUtils");

var _Rectangle = require("../shape/Rectangle");

var _types = require("../util/types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getRect = function getRect(hasX1, hasX2, hasY1, hasY2, props) {
  var xValue1 = props.x1,
      xValue2 = props.x2,
      yValue1 = props.y1,
      yValue2 = props.y2,
      xAxis = props.xAxis,
      yAxis = props.yAxis;
  var scales = (0, _CartesianUtils.createLabeledScales)({
    x: xAxis.scale,
    y: yAxis.scale
  });
  var p1 = {
    x: hasX1 ? scales.x.apply(xValue1, {
      position: 'start'
    }) : scales.x.rangeMin,
    y: hasY1 ? scales.y.apply(yValue1, {
      position: 'start'
    }) : scales.y.rangeMin
  };
  var p2 = {
    x: hasX2 ? scales.x.apply(xValue2, {
      position: 'end'
    }) : scales.x.rangeMax,
    y: hasY2 ? scales.y.apply(yValue2, {
      position: 'end'
    }) : scales.y.rangeMax
  };

  if ((0, _IfOverflowMatches.ifOverflowMatches)(props, 'discard') && (!scales.isInRange(p1) || !scales.isInRange(p2))) {
    return null;
  }

  return (0, _CartesianUtils.rectWithPoints)(p1, p2);
};

function ReferenceArea(props) {
  var x1 = props.x1,
      x2 = props.x2,
      y1 = props.y1,
      y2 = props.y2,
      className = props.className,
      alwaysShow = props.alwaysShow,
      clipPathId = props.clipPathId;
  (0, _LogUtils.warn)(alwaysShow === undefined, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var hasX1 = (0, _DataUtils.isNumOrStr)(x1);
  var hasX2 = (0, _DataUtils.isNumOrStr)(x2);
  var hasY1 = (0, _DataUtils.isNumOrStr)(y1);
  var hasY2 = (0, _DataUtils.isNumOrStr)(y2);
  var shape = props.shape;

  if (!hasX1 && !hasX2 && !hasY1 && !hasY2 && !shape) {
    return null;
  }

  var rect = getRect(hasX1, hasX2, hasY1, hasY2, props);

  if (!rect && !shape) {
    return null;
  }

  var clipPath = (0, _IfOverflowMatches.ifOverflowMatches)(props, 'hidden') ? "url(#".concat(clipPathId, ")") : undefined;
  return /*#__PURE__*/_react["default"].createElement(_Layer.Layer, {
    className: (0, _classnames["default"])('recharts-reference-area', className)
  }, ReferenceArea.renderRect(shape, _objectSpread(_objectSpread({
    clipPath: clipPath
  }, (0, _types.filterProps)(props, true)), rect)), _Label.Label.renderCallByParent(props, rect));
}

ReferenceArea.displayName = 'ReferenceArea';
ReferenceArea.defaultProps = {
  isFront: false,
  ifOverflow: 'discard',
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: '#ccc',
  fillOpacity: 0.5,
  stroke: 'none',
  strokeWidth: 1
};

ReferenceArea.renderRect = function (option, props) {
  var rect;

  if ( /*#__PURE__*/_react["default"].isValidElement(option)) {
    rect = /*#__PURE__*/_react["default"].cloneElement(option, props);
  } else if ((0, _isFunction2["default"])(option)) {
    rect = option(props);
  } else {
    rect = /*#__PURE__*/_react["default"].createElement(_Rectangle.Rectangle, _extends({}, props, {
      className: "recharts-reference-area-rect"
    }));
  }

  return rect;
};