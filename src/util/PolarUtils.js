import _ from 'lodash';
import { getPercentValue } from './DataUtils';
import { parseScale, checkDomainOfScale, getTicksOfScale } from './ChartUtils';

export const RADIAN = Math.PI / 180;

export const degreeToRadian = angle => angle * Math.PI / 180;

export const radianToDegree = angleInRadian => angleInRadian * 180 / Math.PI;

export const polarToCartesian = (cx, cy, radius, angle) => ({
  x: cx + Math.cos(-RADIAN * angle) * radius,
  y: cy + Math.sin(-RADIAN * angle) * radius,
});

export const getMaxRadius = (width, height, offset = {
  top: 0, right: 0, bottom: 0, left: 0,
}) => (
  Math.min(
    Math.abs(width - (offset.left || 0) - (offset.right || 0)),
    Math.abs(height - (offset.top || 0) - (offset.bottom || 0))
  ) / 2);

/**
 * Calculate the scale function, position, width, height of axes
 * @param  {Object} props     Latest props
 * @param  {Object} axisMap   The configuration of axes
 * @param  {Object} offset    The offset of main part in the svg element
 * @param  {Object} axisType  The type of axes, radius-axis or angle-axis
 * @param  {String} chartName The name of chart
 * @return {Object} Configuration
 */
export const formatAxisMap = (props, axisMap, offset, axisType, chartName) => {
  const { width, height } = props;
  let { startAngle, endAngle } = props;
  const cx = getPercentValue(props.cx, width, width / 2);
  const cy = getPercentValue(props.cy, height, height / 2);
  const maxRadius = getMaxRadius(width, height, offset);
  const innerRadius = getPercentValue(props.innerRadius, maxRadius, 0);
  const outerRadius = getPercentValue(props.outerRadius, maxRadius, maxRadius * 0.8);
  const ids = Object.keys(axisMap);

  return ids.reduce((result, id) => {
    const axis = axisMap[id];
    const { domain, reversed } = axis;
    let range;

    if (_.isNil(axis.range)) {
      if (axisType === 'angleAxis') {
        range = [startAngle, endAngle];
      } else if (axisType === 'radiusAxis') {
        range = [innerRadius, outerRadius];
      }

      if (reversed) {
        range = [range[1], range[0]];
      }
    } else {
      ({ range } = axis);
      [startAngle, endAngle] = range;
    }

    const { realScaleType, scale } = parseScale(axis, chartName);
    scale.domain(domain).range(range);
    checkDomainOfScale(scale);
    const ticks = getTicksOfScale(scale, { ...axis, realScaleType });

    const finalAxis = {
      ...axis,
      ...ticks,
      range,
      radius: outerRadius,
      realScaleType, scale, cx, cy, innerRadius, outerRadius, startAngle, endAngle,
    };

    return { ...result, [id]: finalAxis };
  }, {});
};

export const distanceBetweenPoints = (point, anotherPoint) => {
  const { x: x1, y: y1 } = point;
  const { x: x2, y: y2 } = anotherPoint;

  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
};

export const getAngleOfPoint = ({ x, y }, { cx, cy }) => {
  const radius = distanceBetweenPoints({ x, y }, { x: cx, y: cy });

  if (radius <= 0) { return { radius }; }

  const cos = (x - cx) / radius;
  let angleInRadian = Math.acos(cos);

  if (y > cy) {
    angleInRadian = 2 * Math.PI - angleInRadian;
  }

  return { radius, angle: radianToDegree(angleInRadian), angleInRadian };
};

export const formatAngleOfSector = ({ startAngle, endAngle }) => {
  const startCnt = Math.floor(startAngle / 360);
  const endCnt = Math.floor(endAngle / 360);
  const min = Math.min(startCnt, endCnt);

  return {
    startAngle: startAngle - min * 360,
    endAngle: endAngle - min * 360,
  };
};

const reverseFormatAngleOfSetor = (angle, { startAngle, endAngle }) => {
  const startCnt = Math.floor(startAngle / 360);
  const endCnt = Math.floor(endAngle / 360);
  const min = Math.min(startCnt, endCnt);

  return angle + min * 360;
};

export const inRangeOfSector = ({ x, y }, sector) => {
  const { radius, angle } = getAngleOfPoint({ x, y }, sector);
  const { innerRadius, outerRadius } = sector;

  if (radius < innerRadius || radius > outerRadius) {
    return false;
  }

  if (radius === 0) { return true; }

  const { startAngle, endAngle } = formatAngleOfSector(sector);
  let formatAngle = angle;
  let inRange;

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
    return { ...sector, radius, angle: reverseFormatAngleOfSetor(formatAngle, sector) };
  }

  return null;
};
