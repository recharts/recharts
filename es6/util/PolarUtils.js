import _isNil from "lodash/isNil";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { getPercentValue } from './DataUtils';
import { parseScale, checkDomainOfScale, getTicksOfScale } from './ChartUtils';
export var RADIAN = Math.PI / 180;
export var degreeToRadian = function degreeToRadian(angle) {
  return angle * Math.PI / 180;
};
export var radianToDegree = function radianToDegree(angleInRadian) {
  return angleInRadian * 180 / Math.PI;
};
export var polarToCartesian = function polarToCartesian(cx, cy, radius, angle) {
  return {
    x: cx + Math.cos(-RADIAN * angle) * radius,
    y: cy + Math.sin(-RADIAN * angle) * radius
  };
};
export var getMaxRadius = function getMaxRadius(width, height) {
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(width - (offset.left || 0) - (offset.right || 0)), Math.abs(height - (offset.top || 0) - (offset.bottom || 0))) / 2;
};
/**
 * Calculate the scale function, position, width, height of axes
 * @param  {Object} props     Latest props
 * @param  {Object} axisMap   The configuration of axes
 * @param  {Object} offset    The offset of main part in the svg element
 * @param  {Object} axisType  The type of axes, radius-axis or angle-axis
 * @param  {String} chartName The name of chart
 * @return {Object} Configuration
 */

export var formatAxisMap = function formatAxisMap(props, axisMap, offset, axisType, chartName) {
  var width = props.width,
      height = props.height;
  var startAngle = props.startAngle,
      endAngle = props.endAngle;
  var cx = getPercentValue(props.cx, width, width / 2);
  var cy = getPercentValue(props.cy, height, height / 2);
  var maxRadius = getMaxRadius(width, height, offset);
  var innerRadius = getPercentValue(props.innerRadius, maxRadius, 0);
  var outerRadius = getPercentValue(props.outerRadius, maxRadius, maxRadius * 0.8);
  var ids = Object.keys(axisMap);
  return ids.reduce(function (result, id) {
    var axis = axisMap[id];
    var domain = axis.domain,
        reversed = axis.reversed;
    var range;

    if (_isNil(axis.range)) {
      if (axisType === 'angleAxis') {
        range = [startAngle, endAngle];
      } else if (axisType === 'radiusAxis') {
        range = [innerRadius, outerRadius];
      }

      if (reversed) {
        range = [range[1], range[0]];
      }
    } else {
      range = axis.range;
      var _range = range;

      var _range2 = _slicedToArray(_range, 2);

      startAngle = _range2[0];
      endAngle = _range2[1];
    }

    var _parseScale = parseScale(axis, chartName),
        realScaleType = _parseScale.realScaleType,
        scale = _parseScale.scale;

    scale.domain(domain).range(range);
    checkDomainOfScale(scale);
    var ticks = getTicksOfScale(scale, _objectSpread(_objectSpread({}, axis), {}, {
      realScaleType: realScaleType
    }));

    var finalAxis = _objectSpread(_objectSpread(_objectSpread({}, axis), ticks), {}, {
      range: range,
      radius: outerRadius,
      realScaleType: realScaleType,
      scale: scale,
      cx: cx,
      cy: cy,
      innerRadius: innerRadius,
      outerRadius: outerRadius,
      startAngle: startAngle,
      endAngle: endAngle
    });

    return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, id, finalAxis));
  }, {});
};
export var distanceBetweenPoints = function distanceBetweenPoints(point, anotherPoint) {
  var x1 = point.x,
      y1 = point.y;
  var x2 = anotherPoint.x,
      y2 = anotherPoint.y;
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
};
export var getAngleOfPoint = function getAngleOfPoint(_ref, _ref2) {
  var x = _ref.x,
      y = _ref.y;
  var cx = _ref2.cx,
      cy = _ref2.cy;
  var radius = distanceBetweenPoints({
    x: x,
    y: y
  }, {
    x: cx,
    y: cy
  });

  if (radius <= 0) {
    return {
      radius: radius
    };
  }

  var cos = (x - cx) / radius;
  var angleInRadian = Math.acos(cos);

  if (y > cy) {
    angleInRadian = 2 * Math.PI - angleInRadian;
  }

  return {
    radius: radius,
    angle: radianToDegree(angleInRadian),
    angleInRadian: angleInRadian
  };
};
export var formatAngleOfSector = function formatAngleOfSector(_ref3) {
  var startAngle = _ref3.startAngle,
      endAngle = _ref3.endAngle;
  var startCnt = Math.floor(startAngle / 360);
  var endCnt = Math.floor(endAngle / 360);
  var min = Math.min(startCnt, endCnt);
  return {
    startAngle: startAngle - min * 360,
    endAngle: endAngle - min * 360
  };
};

var reverseFormatAngleOfSetor = function reverseFormatAngleOfSetor(angle, _ref4) {
  var startAngle = _ref4.startAngle,
      endAngle = _ref4.endAngle;
  var startCnt = Math.floor(startAngle / 360);
  var endCnt = Math.floor(endAngle / 360);
  var min = Math.min(startCnt, endCnt);
  return angle + min * 360;
};

export var inRangeOfSector = function inRangeOfSector(_ref5, sector) {
  var x = _ref5.x,
      y = _ref5.y;

  var _getAngleOfPoint = getAngleOfPoint({
    x: x,
    y: y
  }, sector),
      radius = _getAngleOfPoint.radius,
      angle = _getAngleOfPoint.angle;

  var innerRadius = sector.innerRadius,
      outerRadius = sector.outerRadius;

  if (radius < innerRadius || radius > outerRadius) {
    return false;
  }

  if (radius === 0) {
    return true;
  }

  var _formatAngleOfSector = formatAngleOfSector(sector),
      startAngle = _formatAngleOfSector.startAngle,
      endAngle = _formatAngleOfSector.endAngle;

  var formatAngle = angle;
  var inRange;

  if (startAngle <= endAngle) {
    while (formatAngle > endAngle) {
      formatAngle -= 360;
    }

    while (formatAngle < startAngle) {
      formatAngle += 360;
    }

    inRange = formatAngle >= startAngle && formatAngle <= endAngle;
  } else {
    while (formatAngle > startAngle) {
      formatAngle -= 360;
    }

    while (formatAngle < endAngle) {
      formatAngle += 360;
    }

    inRange = formatAngle >= endAngle && formatAngle <= startAngle;
  }

  if (inRange) {
    return _objectSpread(_objectSpread({}, sector), {}, {
      radius: radius,
      angle: reverseFormatAngleOfSetor(formatAngle, sector)
    });
  }

  return null;
};