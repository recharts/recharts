import * as React from 'react';
import { SVGProps } from 'react';
import invariant from 'tiny-invariant';
import { ActiveShape } from './types';
import { Props as RectangleProps } from '../shape/Rectangle';
import { BarProps } from '../cartesian/Bar';
import { Shape } from './ActiveShapeUtils';
import { isNullish, isNumber } from './DataUtils';

// Rectangle props is expecting x, y, height, width as numbers, name as a string, and radius as a custom type
// When props are being spread in from a user defined component in Bar,
// the prop types of an SVGElement have these typed as something else.
// This function will return the passed in props
// along with x, y, height as numbers, name as a string, and radius as number | [number, number, number, number]
function typeguardBarRectangleProps(
  { x: xProp, y: yProp, ...option }: SVGProps<SVGPathElement>,
  props: BarRectangleProps,
): RectangleProps {
  const xValue = `${xProp}`;
  const x = parseInt(xValue, 10);
  const yValue = `${yProp}`;
  const y = parseInt(yValue, 10);
  const heightValue = `${props.height || option.height}`;
  const height = parseInt(heightValue, 10);
  const widthValue = `${props.width || option.width}`;
  const width = parseInt(widthValue, 10);
  return {
    ...props,
    ...option,
    ...(x ? { x } : {}),
    ...(y ? { y } : {}),
    height,
    width,
    name: props.name as string,
    radius: props.radius,
  };
}

export type BarRectangleProps = {
  option: ActiveShape<BarProps, SVGPathElement>;
  isActive: boolean;
  onMouseEnter?: (e: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
  onMouseLeave?: (e: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
  onClick?: (e: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
  width?: number;
  height?: number;
} & Omit<BarProps, 'onAnimationStart' | 'onAnimationEnd'>;

export function BarRectangle(props: BarRectangleProps) {
  return (
    <Shape
      shapeType="rectangle"
      propTransformer={typeguardBarRectangleProps}
      activeClassName="recharts-active-bar"
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
