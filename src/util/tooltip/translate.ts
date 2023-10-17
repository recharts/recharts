import { isNumber } from '../DataUtils';
import { Coordinate, CartesianViewBox, AllowInDimension } from '../types';

export type Dimension2D = 'x' | 'y';

export function getTooltipTranslateXY({
  key,
  tooltipDimension,
  viewBoxDimension,
  allowEscapeViewBox,
  reverseDirection,
  coordinate,
  offsetTopLeft,
  position,
  viewBox,
}: {
  key: Dimension2D;
  coordinate: Partial<Coordinate>;
  position: Partial<Coordinate>;
  viewBox: CartesianViewBox;
  tooltipDimension: number;
  viewBoxDimension: number;
  offsetTopLeft: number;
  allowEscapeViewBox: AllowInDimension;
  reverseDirection: AllowInDimension;
}): number {
  if (position && isNumber(position[key])) {
    return position[key];
  }

  const negative = coordinate[key] - tooltipDimension - offsetTopLeft;
  const positive = coordinate[key] + offsetTopLeft;
  if (allowEscapeViewBox[key]) {
    return reverseDirection[key] ? negative : positive;
  }

  if (reverseDirection[key]) {
    const tooltipBoundary = negative;
    const viewBoxBoundary = viewBox[key];
    if (tooltipBoundary < viewBoxBoundary) {
      return Math.max(positive, viewBox[key]);
    }
    return Math.max(negative, viewBox[key]);
  }
  const tooltipBoundary = positive + tooltipDimension;
  const viewBoxBoundary = viewBox[key] + viewBoxDimension;
  if (tooltipBoundary > viewBoxBoundary) {
    return Math.max(negative, viewBox[key]);
  }
  return Math.max(positive, viewBox[key]);
}
