import clsx from 'clsx';
import { CSSProperties } from 'react';
import { translateStyle } from 'react-smooth';
import { isNumber } from '../DataUtils';
import { Coordinate, CartesianViewBox, AllowInDimension } from '../types';

export type Dimension2D = 'x' | 'y';

const CSS_CLASS_PREFIX = 'recharts-tooltip-wrapper';

const TOOLTIP_HIDDEN: CSSProperties = { visibility: 'hidden' };

export function getTooltipCSSClassName({
  coordinate,
  translateX,
  translateY,
}: {
  translateX: number | undefined;
  translateY: number | undefined;
  coordinate: Partial<Coordinate> | undefined;
}): string {
  return clsx(CSS_CLASS_PREFIX, {
    [`${CSS_CLASS_PREFIX}-right`]:
      isNumber(translateX) && coordinate && isNumber(coordinate.x) && translateX >= coordinate.x,
    [`${CSS_CLASS_PREFIX}-left`]:
      isNumber(translateX) && coordinate && isNumber(coordinate.x) && translateX < coordinate.x,
    [`${CSS_CLASS_PREFIX}-bottom`]:
      isNumber(translateY) && coordinate && isNumber(coordinate.y) && translateY >= coordinate.y,
    [`${CSS_CLASS_PREFIX}-top`]:
      isNumber(translateY) && coordinate && isNumber(coordinate.y) && translateY < coordinate.y,
  });
}

export function getTooltipTranslateXY({
  allowEscapeViewBox,
  coordinate,
  key,
  offsetTopLeft,
  position,
  reverseDirection,
  tooltipDimension,
  viewBox,
  viewBoxDimension,
}: {
  allowEscapeViewBox: AllowInDimension;
  coordinate: Partial<Coordinate>;
  key: Dimension2D;
  offsetTopLeft: number;
  position: Partial<Coordinate>;
  reverseDirection: AllowInDimension;
  tooltipDimension: number;
  viewBox: CartesianViewBox;
  viewBoxDimension: number;
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

export function getTransformStyle({
  translateX,
  translateY,
  useTranslate3d,
}: {
  useTranslate3d: boolean;
  translateX: number;
  translateY: number;
}): CSSProperties {
  return translateStyle({
    transform: useTranslate3d
      ? `translate3d(${translateX}px, ${translateY}px, 0)`
      : `translate(${translateX}px, ${translateY}px)`,
  });
}

export function getTooltipTranslate({
  allowEscapeViewBox,
  coordinate,
  offsetTopLeft,
  position,
  reverseDirection,
  tooltipBox,
  useTranslate3d,
  viewBox,
}: {
  allowEscapeViewBox: AllowInDimension;
  coordinate: Partial<Coordinate> | undefined;
  offsetTopLeft: number;
  position: Partial<Coordinate>;
  reverseDirection: AllowInDimension;
  tooltipBox: { width: number; height: number };
  useTranslate3d: boolean;
  viewBox: CartesianViewBox;
}): { cssProperties: CSSProperties; cssClasses: string } {
  let cssProperties: CSSProperties, translateX: number | undefined, translateY: number | undefined;
  if (tooltipBox.height > 0 && tooltipBox.width > 0 && coordinate) {
    translateX = getTooltipTranslateXY({
      allowEscapeViewBox,
      coordinate,
      key: 'x',
      offsetTopLeft,
      position,
      reverseDirection,
      tooltipDimension: tooltipBox.width,
      viewBox,
      viewBoxDimension: viewBox.width,
    });

    translateY = getTooltipTranslateXY({
      allowEscapeViewBox,
      coordinate,
      key: 'y',
      offsetTopLeft,
      position,
      reverseDirection,
      tooltipDimension: tooltipBox.height,
      viewBox,
      viewBoxDimension: viewBox.height,
    });
    cssProperties = getTransformStyle({
      translateX,
      translateY,
      useTranslate3d,
    });
  } else {
    cssProperties = TOOLTIP_HIDDEN;
  }
  return {
    cssProperties,
    cssClasses: getTooltipCSSClassName({
      translateX,
      translateY,
      coordinate,
    }),
  };
}
