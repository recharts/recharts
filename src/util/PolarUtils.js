import { getPercentValue, parseScale, checkDomainOfScale, getTicksOfScale } from './DataUtils';

export const RADIAN = Math.PI / 180;

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
  const { width, height, startAngle, endAngle, layout } = props;
  const cx = getPercentValue(props.cx, width, width / 2);
  const cy = getPercentValue(props.cy, height, height / 2);
  const maxRadius = getMaxRadius(width, height, offset);
  const innerRadius = getPercentValue(props.innerRadius, maxRadius, 0);
  const outerRadius = getPercentValue(props.outerRadius, maxRadius, maxRadius * 0.8);
  const ids = Object.keys(axisMap);

  return ids.reduce((result, id) => {
    const axis = axisMap[id];
    const { orientation, domain, padding = {}, mirror, reversed } = axis;
    const offsetKey = `${orientation}${mirror ? 'Mirror' : ''}`;

    let range, x, y, needSpace;

    if (axisType === 'angleAxis') {
      range = [ startAngle, endAngle ];
    } else if (axisType === 'radiusAxis') {
      range = [ innerRadius, outerRadius ];
    }

    if (reversed) {
      range = [range[1], range[0]];
    }

    const scale = parseScale(axis, chartName);
    scale.domain(domain).range(range);
    checkDomainOfScale(scale);
    const ticks = getTicksOfScale(scale, axis);

    const finalAxis = {
      ...axis,
      ...ticks,
      radius: outerRadius,
      scale, cx, cy, innerRadius, outerRadius, startAngle, endAngle,
    };

    return { ...result, [id]: finalAxis };
  }, {});
};
