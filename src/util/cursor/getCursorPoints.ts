import { polarToCartesian } from '../PolarUtils';
import {
  Coordinate,
  ChartOffsetInternal,
  PolarCoordinate,
  isPolarCoordinate,
  CartesianLayout,
  PolarLayout,
} from '../types';
import { RadialCursorPoints, getRadialCursorPoints } from './getRadialCursorPoints';

export function getCursorPoints(
  layout: CartesianLayout | PolarLayout,
  activeCoordinate: Coordinate | PolarCoordinate,
  offset: ChartOffsetInternal,
): [Coordinate, Coordinate] | RadialCursorPoints | undefined {
  if (layout === 'horizontal') {
    return [
      { x: activeCoordinate.x, y: offset.top },
      { x: activeCoordinate.x, y: offset.top + offset.height },
    ];
  }

  if (layout === 'vertical') {
    return [
      { x: offset.left, y: activeCoordinate.y },
      { x: offset.left + offset.width, y: activeCoordinate.y },
    ];
  }

  if (isPolarCoordinate(activeCoordinate)) {
    if (layout === 'centric') {
      const { cx, cy, innerRadius, outerRadius, angle } = activeCoordinate;
      const innerPoint = polarToCartesian(cx, cy, innerRadius, angle);
      const outerPoint = polarToCartesian(cx, cy, outerRadius, angle);
      return [
        { x: innerPoint.x, y: innerPoint.y },
        { x: outerPoint.x, y: outerPoint.y },
      ];
    }
    return getRadialCursorPoints(activeCoordinate);
  }

  return undefined;
}
