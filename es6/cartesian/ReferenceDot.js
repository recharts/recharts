import _isFunction from "lodash/isFunction";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @fileOverview Reference Dot
 */
import React from 'react';
import classNames from 'classnames';
import { Layer } from '../container/Layer';
import { Dot } from '../shape/Dot';
import { Label } from '../component/Label';
import { isNumOrStr } from '../util/DataUtils';
import { ifOverflowMatches } from '../util/IfOverflowMatches';
import { createLabeledScales } from '../util/CartesianUtils';
import { warn } from '../util/LogUtils';
import { filterProps } from '../util/types';

var getCoordinate = function getCoordinate(props) {
  var x = props.x,
      y = props.y,
      xAxis = props.xAxis,
      yAxis = props.yAxis;
  var scales = createLabeledScales({
    x: xAxis.scale,
    y: yAxis.scale
  });
  var result = scales.apply({
    x: x,
    y: y
  }, {
    bandAware: true
  });

  if (ifOverflowMatches(props, 'discard') && !scales.isInRange(result)) {
    return null;
  }

  return result;
};

export function ReferenceDot(props) {
  var x = props.x,
      y = props.y,
      r = props.r,
      alwaysShow = props.alwaysShow,
      clipPathId = props.clipPathId;
  var isX = isNumOrStr(x);
  var isY = isNumOrStr(y);
  warn(alwaysShow === undefined, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');

  if (!isX || !isY) {
    return null;
  }

  var coordinate = getCoordinate(props);

  if (!coordinate) {
    return null;
  }

  var cx = coordinate.x,
      cy = coordinate.y;
  var shape = props.shape,
      className = props.className;
  var clipPath = ifOverflowMatches(props, 'hidden') ? "url(#".concat(clipPathId, ")") : undefined;

  var dotProps = _objectSpread(_objectSpread({
    clipPath: clipPath
  }, filterProps(props, true)), {}, {
    cx: cx,
    cy: cy
  });

  return /*#__PURE__*/React.createElement(Layer, {
    className: classNames('recharts-reference-dot', className)
  }, ReferenceDot.renderDot(shape, dotProps), Label.renderCallByParent(props, {
    x: cx - r,
    y: cy - r,
    width: 2 * r,
    height: 2 * r
  }));
}
ReferenceDot.displayName = 'ReferenceDot';
ReferenceDot.defaultProps = {
  isFront: false,
  ifOverflow: 'discard',
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: '#fff',
  stroke: '#ccc',
  fillOpacity: 1,
  strokeWidth: 1
};

ReferenceDot.renderDot = function (option, props) {
  var dot;

  if ( /*#__PURE__*/React.isValidElement(option)) {
    dot = /*#__PURE__*/React.cloneElement(option, props);
  } else if (_isFunction(option)) {
    dot = option(props);
  } else {
    dot = /*#__PURE__*/React.createElement(Dot, _extends({}, props, {
      cx: props.cx,
      cy: props.cy,
      className: "recharts-reference-dot-dot"
    }));
  }

  return dot;
};