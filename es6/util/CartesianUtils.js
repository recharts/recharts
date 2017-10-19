var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { getPercentValue, isNumber, isNumOrStr } from './DataUtils';
import { getValueByDataKey, getTicksOfScale, parseScale, checkDomainOfScale } from './ChartUtils';

/**
 * Calculate the scale function, position, width, height of axes
 * @param  {Object} props     Latest props
 * @param  {Object} axisMap   The configuration of axes
 * @param  {Object} offset    The offset of main part in the svg element
 * @param  {String} axisType  The type of axes, x-axis or y-axis
 * @param  {String} chartName The name of chart
 * @return {Object} Configuration
 */
export var formatAxisMap = function formatAxisMap(props, axisMap, offset, axisType, chartName) {
  var width = props.width,
      height = props.height,
      layout = props.layout;

  var ids = Object.keys(axisMap);
  var steps = {
    left: offset.left,
    leftMirror: offset.left,
    right: width - offset.right,
    rightMirror: width - offset.right,
    top: offset.top,
    topMirror: offset.top,
    bottom: height - offset.bottom,
    bottomMirror: height - offset.bottom
  };

  return ids.reduce(function (result, id) {
    var axis = axisMap[id];
    var orientation = axis.orientation,
        domain = axis.domain,
        _axis$padding = axis.padding,
        padding = _axis$padding === undefined ? {} : _axis$padding,
        mirror = axis.mirror,
        reversed = axis.reversed;

    var offsetKey = '' + orientation + (mirror ? 'Mirror' : '');

    var range = void 0,
        x = void 0,
        y = void 0,
        needSpace = void 0;

    if (axisType === 'xAxis') {
      range = [offset.left + (padding.left || 0), offset.left + offset.width - (padding.right || 0)];
    } else if (axisType === 'yAxis') {
      range = layout === 'horizontal' ? [offset.top + offset.height - (padding.bottom || 0), offset.top + (padding.top || 0)] : [offset.top + (padding.top || 0), offset.top + offset.height - (padding.bottom || 0)];
    } else {
      range = axis.range;
    }

    if (reversed) {
      range = [range[1], range[0]];
    }

    var _parseScale = parseScale(axis, chartName),
        scale = _parseScale.scale,
        realScaleType = _parseScale.realScaleType;

    scale.domain(domain).range(range);
    checkDomainOfScale(scale);
    var ticks = getTicksOfScale(scale, _extends({}, axis, { realScaleType: realScaleType }));

    if (axisType === 'xAxis') {
      needSpace = orientation === 'top' && !mirror || orientation === 'bottom' && mirror;
      x = offset.left;
      y = steps[offsetKey] - needSpace * axis.height;
    } else if (axisType === 'yAxis') {
      needSpace = orientation === 'left' && !mirror || orientation === 'right' && mirror;
      x = steps[offsetKey] - needSpace * axis.width;
      y = offset.top;
    }

    var finalAxis = _extends({}, axis, ticks, {
      realScaleType: realScaleType, x: x, y: y, scale: scale,
      width: axisType === 'xAxis' ? offset.width : axis.width,
      height: axisType === 'yAxis' ? offset.height : axis.height
    });
    if (!axis.hide && axisType === 'xAxis') {
      steps[offsetKey] += (needSpace ? -1 : 1) * finalAxis.height;
    } else if (!axis.hide) {
      steps[offsetKey] += (needSpace ? -1 : 1) * finalAxis.width;
    }

    return _extends({}, result, _defineProperty({}, id, finalAxis));
  }, {});
};