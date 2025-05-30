import { ReactElement, SVGProps, isValidElement } from 'react';
import { Coordinate, ChartOffset, RangeObj, PolarViewBoxRequired } from './types';

export const RADIAN = Math.PI / 180;

export const degreeToRadian = (angle: number) => (angle * Math.PI) / 180;

export const radianToDegree = (angleInRadian: number) => (angleInRadian * 180) / Math.PI;

export const polarToCartesian = (cx: number, cy: number, radius: number, angle: number): Coordinate => ({
  x: cx + Math.cos(-RADIAN * angle) * radius,
  y: cy + Math.sin(-RADIAN * angle) * radius,
});

export const getMaxRadius = (
  width: number,
  height: number,
  offset: ChartOffset = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
) =>
  Math.min(
    Math.abs(width - (offset.left || 0) - (offset.right || 0)),
    Math.abs(height - (offset.top || 0) - (offset.bottom || 0)),
  ) / 2;

export const distanceBetweenPoints = (point: Coordinate, anotherPoint: Coordinate) => {
  const { x: x1, y: y1 } = point;
  const { x: x2, y: y2 } = anotherPoint;

  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
};

export const getAngleOfPoint = ({ x, y }: Coordinate, { cx, cy }: PolarViewBoxRequired) => {
  const radius = distanceBetweenPoints({ x, y }, { x: cx, y: cy });

  if (radius <= 0) {
    return { radius, angle: 0 };
  }

  const cos = (x - cx) / radius;
  let angleInRadian = Math.acos(cos);

  if (y > cy) {
    angleInRadian = 2 * Math.PI - angleInRadian;
  }

  return { radius, angle: radianToDegree(angleInRadian), angleInRadian };
};

export const formatAngleOfSector = ({ startAngle, endAngle }: PolarViewBoxRequired) => {
  const startCnt = Math.floor(startAngle / 360);
  const endCnt = Math.floor(endAngle / 360);
  const min = Math.min(startCnt, endCnt);

  return {
    startAngle: startAngle - min * 360,
    endAngle: endAngle - min * 360,
  };
};

const reverseFormatAngleOfSector = (angle: number, { startAngle, endAngle }: PolarViewBoxRequired) => {
  const startCnt = Math.floor(startAngle / 360);
  const endCnt = Math.floor(endAngle / 360);
  const min = Math.min(startCnt, endCnt);

  return angle + min * 360;
};

export const inRangeOfSector = ({ x, y }: Coordinate, viewBox: PolarViewBoxRequired): RangeObj | null => {
  const { radius, angle } = getAngleOfPoint({ x, y }, viewBox);
  const { innerRadius, outerRadius } = viewBox;

  if (radius < innerRadius || radius > outerRadius) {
    return null;
  }

  if (radius === 0) {
    return null;
  }

  const { startAngle, endAngle } = formatAngleOfSector(viewBox);
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
    return { ...viewBox, radius, angle: reverseFormatAngleOfSector(formatAngle, viewBox) };
  }

  return null;
};

export const getTickClassName = (
  tick?: SVGProps<SVGTextElement> | ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>) | boolean,
) =>
  !isValidElement(tick) && typeof tick !== 'function' && typeof tick !== 'boolean' && tick != null
    ? tick.className
    : '';
