import * as React from 'react';
import invariant from 'tiny-invariant';
import { ActiveShape, DataKey } from './types';
import { Props as RectangleProps } from '../shape/Rectangle';
import { BarShapeProps } from '../cartesian/Bar';
import { Shape } from './ActiveShapeUtils';
import { isNullish, isNumber } from './DataUtils';

export type BarRectangleProps = {
  option: ActiveShape<BarShapeProps, SVGPathElement> | undefined;
  isActive: boolean;
  onMouseEnter?: (e: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
  onMouseLeave?: (e: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
  onClick?: (e: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
  width?: number;
  height?: number;
  index: number;
  dataKey: DataKey<any> | undefined;
} & Omit<RectangleProps, 'onAnimationStart' | 'onAnimationEnd'>;

export function BarRectangle(props: BarRectangleProps) {
  return (
    <Shape
      shapeType="rectangle"
      activeClassName="recharts-active-bar"
      inActiveClassName="recharts-inactive-bar"
      {...props}
    />
  );
}

export type MinPointSize = number | ((value: number | undefined | null, index: number) => number);

/**
 * Safely gets minPointSize from the minPointSize prop if it is a function
 * @param minPointSize minPointSize as passed to the Bar component
 * @param defaultValue default minPointSize
 * @returns minPointSize
 */
export const minPointSizeCallback =
  (minPointSize: MinPointSize, defaultValue = 0) =>
  (value: unknown, index: number): number => {
    if (isNumber(minPointSize)) return minPointSize;
    const isValueNumberOrNil = isNumber(value) || isNullish(value);
    if (isValueNumberOrNil) {
      return minPointSize(value, index);
    }

    invariant(
      isValueNumberOrNil,
      `minPointSize callback function received a value with type of ${typeof value}. Currently only numbers or null/undefined are supported.`,
    );
    return defaultValue;
  };
