import { polarToCartesian } from '../PolarUtils';
import { ChartCoordinate, Coordinate, ChartOffset, LayoutType } from '../types';
import { RadialCursorPoints, getRadialCursorPoints } from './getRadialCursorPoints';

export function getCursorPoints(
  layout: LayoutType,
  activeCoordinate: ChartCoordinate,
  offset: ChartOffset,
): [Coordinate, Coordinate] | RadialCursorPoints {
  let x1, y1, x2, y2;

  if (layout === 'horizontal') {
    x1 = activeCoordinate.x;
    x2 = x1;
    y1 = offset.top;
    y2 = offset.top + offset.height;
  } else if (layout === 'vertical') {
    y1 = activeCoordinate.y;
    y2 = y1;
    x1 = offset.left;
    x2 = offset.left + offset.width;
  } else if (activeCoordinate.cx != null && activeCoordinate.cy != null) {
    if (layout === 'centric') {
      const { cx, cy, innerRadius, outerRadius, angle } = activeCoordinate;
      const innerPoint = polarToCartesian(cx, cy, innerRadius, angle);
      const outerPoint = polarToCartesian(cx, cy, outerRadius, angle);
      x1 = innerPoint.x;
      y1 = innerPoint.y;
      x2 = outerPoint.x;
      y2 = outerPoint.y;
    } else {
      return getRadialCursorPoints(activeCoordinate);
    }
  }

  return [
    { x: x1, y: y1 },
    { x: x2, y: y2 },
  ];
}
