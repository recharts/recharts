import { polarToCartesian } from '../PolarUtils';
import { Coordinate, PolarCoordinate } from '../types';

export type RadialCursorPoints = {
  points: [startPoint: Coordinate, endPoint: Coordinate];
  cx?: number;
  cy?: number;
  radius?: number;
  startAngle?: number;
  endAngle?: number;
};

/**
 * Only applicable for radial layouts
 * @param activeCoordinate the polar coordinate of the active tooltip item
 * @returns start and end points of the radial cursor line, together with the polar coordinates they were computed from
 */
export function getRadialCursorPoints(activeCoordinate: PolarCoordinate): RadialCursorPoints {
  const { cx, cy, radius, startAngle, endAngle } = activeCoordinate;
  const startPoint = polarToCartesian(cx, cy, radius, startAngle);
  const endPoint = polarToCartesian(cx, cy, radius, endAngle);

  return {
    points: [startPoint, endPoint],
    cx,
    cy,
    radius,
    startAngle,
    endAngle,
  };
}
