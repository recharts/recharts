import _some from "lodash/some";
import _isFunction from "lodash/isFunction";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * @fileOverview Reference Line
 */
import React from 'react';
import classNames from 'classnames';
import { Layer } from '../container/Layer';
import { Label } from '../component/Label';
import { ifOverflowMatches } from '../util/IfOverflowMatches';
import { isNumOrStr } from '../util/DataUtils';
import { createLabeledScales, rectWithCoords } from '../util/CartesianUtils';
import { warn } from '../util/LogUtils';
import { filterProps } from '../util/types';

var renderLine = function renderLine(option, props) {
  var line;

  if ( /*#__PURE__*/React.isValidElement(option)) {
    line = /*#__PURE__*/React.cloneElement(option, props);
  } else if (_isFunction(option)) {
    line = option(props);
  } else {
    line = /*#__PURE__*/React.createElement("line", _extends({}, props, {
      className: "recharts-reference-line-line"
    }));
  }

  return line;
}; // TODO: ScaleHelper


var getEndPoints = function getEndPoints(scales, isFixedX, isFixedY, isSegment, props) {
  var _props$viewBox = props.viewBox,
      x = _props$viewBox.x,
      y = _props$viewBox.y,
      width = _props$viewBox.width,
      height = _props$viewBox.height,
      position = props.position;

  if (isFixedY) {
    var yCoord = props.y,
        orientation = props.yAxis.orientation;
    var coord = scales.y.apply(yCoord, {
      position: position
    });

    if (ifOverflowMatches(props, 'discard') && !scales.y.isInRange(coord)) {
      return null;
    }

    var points = [{
      x: x + width,
      y: coord
    }, {
      x: x,
      y: coord
    }];
    return orientation === 'left' ? points.reverse() : points;
  }

  if (isFixedX) {
    var xCoord = props.x,
        _orientation = props.xAxis.orientation;

    var _coord = scales.x.apply(xCoord, {
      position: position
    });

    if (ifOverflowMatches(props, 'discard') && !scales.x.isInRange(_coord)) {
      return null;
    }

    var _points = [{
      x: _coord,
      y: y + height
    }, {
      x: _coord,
      y: y
    }];
    return _orientation === 'top' ? _points.reverse() : _points;
  }

  if (isSegment) {
    var segment = props.segment;

    var _points2 = segment.map(function (p) {
      return scales.apply(p, {
        position: position
      });
    });

    if (ifOverflowMatches(props, 'discard') && _some(_points2, function (p) {
      return !scales.isInRange(p);
    })) {
      return null;
    }

    return _points2;
  }

  return null;
};

export function ReferenceLine(props) {
  var fixedX = props.x,
      fixedY = props.y,
      segment = props.segment,
      xAxis = props.xAxis,
      yAxis = props.yAxis,
      shape = props.shape,
      className = props.className,
      alwaysShow = props.alwaysShow,
      clipPathId = props.clipPathId;
  warn(alwaysShow === undefined, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var scales = createLabeledScales({
    x: xAxis.scale,
    y: yAxis.scale
  });
  var isX = isNumOrStr(fixedX);
  var isY = isNumOrStr(fixedY);
  var isSegment = segment && segment.length === 2;
  var endPoints = getEndPoints(scales, isX, isY, isSegment, props);

  if (!endPoints) {
    return null;
  }

  var _endPoints = _slicedToArray(endPoints, 2),
      _endPoints$ = _endPoints[0],
      x1 = _endPoints$.x,
      y1 = _endPoints$.y,
      _endPoints$2 = _endPoints[1],
      x2 = _endPoints$2.x,
      y2 = _endPoints$2.y;

  var clipPath = ifOverflowMatches(props, 'hidden') ? "url(#".concat(clipPathId, ")") : undefined;

  var lineProps = _objectSpread(_objectSpread({
    clipPath: clipPath
  }, filterProps(props, true)), {}, {
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2
  });

  return /*#__PURE__*/React.createElement(Layer, {
    className: classNames('recharts-reference-line', className)
  }, renderLine(shape, lineProps), Label.renderCallByParent(props, rectWithCoords({
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2
  })));
}
ReferenceLine.displayName = 'ReferenceLine';
ReferenceLine.defaultProps = {
  isFront: false,
  ifOverflow: 'discard',
  xAxisId: 0,
  yAxisId: 0,
  fill: 'none',
  stroke: '#ccc',
  fillOpacity: 1,
  strokeWidth: 1,
  position: 'middle'
};