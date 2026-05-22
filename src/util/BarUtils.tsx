import * as React from 'react';
import invariant from 'tiny-invariant';
import { ActiveShape, DataKey, ShapeAnimationProps } from './types';
import { Rectangle, Props as RectangleProps } from '../shape/Rectangle';
import { BarShapeProps } from '../cartesian/Bar';
import { Shape } from './ActiveShapeUtils';
import { isNullish, isNumber } from './DataUtils';

export const defaultBarShape = Rectangle;

export type BarRectangleProps = BarShapeProps & {
  option: ActiveShape<BarShapeProps, SVGPathElement>;
  onMouseEnter?: (e: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
  onMouseLeave?: (e: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
  onClick?: (e: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
  dataKey: DataKey<any> | undefined;
} & ShapeAnimationProps &
  Omit<RectangleProps, 'onAnimationStart' | 'onAnimationEnd'>;

type BarRectangleShapeProps = Omit<BarRectangleProps, 'option'>;

export function BarRectangle({ option, ...shapeProps }: BarRectangleProps) {
  return (
    <Shape<BarRectangleShapeProps, SVGPathElement>
      option={option}
      DefaultShape={defaultBarShape}
      shapeProps={shapeProps}
      activeClassName="recharts-active-bar"
      inActiveClassName="recharts-inactive-bar"
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
