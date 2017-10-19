'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inRangeOfSector = exports.formatAngleOfSector = exports.getAngleOfPoint = exports.distanceBetweenPoints = exports.formatAxisMap = exports.getMaxRadius = exports.polarToCartesian = exports.radianToDegree = exports.degreeToRadian = exports.RADIAN = undefined;

var _isNil2 = require('lodash/isNil');

var _isNil3 = _interopRequireDefault(_isNil2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _DataUtils = require('./DataUtils');

var _ChartUtils = require('./ChartUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RADIAN = exports.RADIAN = Math.PI / 180;

var degreeToRadian = exports.degreeToRadian = function degreeToRadian(angle) {
  return angle * Math.PI / 180;
};

var radianToDegree = exports.radianToDegree = function radianToDegree(angleInRadian) {
  return angleInRadian * 180 / Math.PI;
};

var polarToCartesian = exports.polarToCartesian = function polarToCartesian(cx, cy, radius, angle) {
  return {
    x: cx + Math.cos(-RADIAN * angle) * radius,
    y: cy + Math.sin(-RADIAN * angle) * radius
  };
};

var getMaxRadius = exports.getMaxRadius = function getMaxRadius(width, height) {
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    top: 0, right: 0, bottom: 0, left: 0
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
var formatAxisMap = exports.formatAxisMap = function formatAxisMap(props, axisMap, offset, axisType, chartName) {
  var width = props.width,
      height = props.height,
      startAngle = props.startAngle,
      endAngle = props.endAngle;

  var cx = (0, _DataUtils.getPercentValue)(props.cx, width, width / 2);
  var cy = (0, _DataUtils.getPercentValue)(props.cy, height, height / 2);
  var maxRadius = getMaxRadius(width, height, offset);
  var innerRadius = (0, _DataUtils.getPercentValue)(props.innerRadius, maxRadius, 0);
  var outerRadius = (0, _DataUtils.getPercentValue)(props.outerRadius, maxRadius, maxRadius * 0.8);
  var ids = Object.keys(axisMap);

  return ids.reduce(function (result, id) {
    var axis = axisMap[id];
    var domain = axis.domain,
        reversed = axis.reversed;

    var range = void 0;

    if ((0, _isNil3.default)(range, axis.range)) {
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
    }

    var _parseScale = (0, _ChartUtils.parseScale)(axis, chartName),
        realScaleType = _parseScale.realScaleType,
        scale = _parseScale.scale;

    scale.domain(domain).range(range);
    (0, _ChartUtils.checkDomainOfScale)(scale);
    var ticks = (0, _ChartUtils.getTicksOfScale)(scale, _extends({}, axis, { realScaleType: realScaleType }));

    var finalAxis = _extends({}, axis, ticks, {
      radius: outerRadius,
      realScaleType: realScaleType, scale: scale, cx: cx, cy: cy, innerRadius: innerRadius, outerRadius: outerRadius, startAngle: startAngle, endAngle: endAngle
    });

    return _extends({}, result, _defineProperty({}, id, finalAxis));
  }, {});
};

var distanceBetweenPoints = exports.distanceBetweenPoints = function distanceBetweenPoints(point, anotherPoint) {
  var x1 = point.x,
      y1 = point.y;
  var x2 = anotherPoint.x,
      y2 = anotherPoint.y;


  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
};

var getAngleOfPoint = exports.getAngleOfPoint = function getAngleOfPoint(_ref, _ref2) {
  var x = _ref.x,
      y = _ref.y;
  var cx = _ref2.cx,
      cy = _ref2.cy;

  var radius = distanceBetweenPoints({ x: x, y: y }, { x: cx, y: cy });

  if (radius <= 0) {
    return { radius: radius };
  }

  var cos = (x - cx) / radius;
  var angleInRadian = Math.acos(cos);

  if (y > cy) {
    angleInRadian = 2 * Math.PI - angleInRadian;
  }

  return { radius: radius, angle: radianToDegree(angleInRadian), angleInRadian: angleInRadian };
};

var formatAngleOfSector = exports.formatAngleOfSector = function formatAngleOfSector(_ref3) {
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

var inRangeOfSector = exports.inRangeOfSector = function inRangeOfSector(_ref4, sector) {
  var x = _ref4.x,
      y = _ref4.y;

  var _getAngleOfPoint = getAngleOfPoint({ x: x, y: y }, sector),
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

  while (formatAngle > endAngle) {
    formatAngle -= 360;
  }

  while (formatAngle < startAngle) {
    formatAngle += 360;
  }

  var inRange = formatAngle >= startAngle && formatAngle <= endAngle;

  if (inRange) {
    return _extends({}, sector, { radius: radius, angle: formatAngle });
  }

  return null;
};