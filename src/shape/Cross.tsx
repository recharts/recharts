/**
 * @fileOverview Cross
 */
import * as React from 'react';
import { SVGProps } from 'react';
import { clsx } from 'clsx';
import { isNumber } from '../util/DataUtils';
import { svgPropertiesAndEvents } from '../util/svgPropertiesAndEvents';

interface CrossProps {
  /**
   * The x-coordinate of the vertical line of the cross in pixels.
   */
  x?: number;
  /**
   * The y-coordinate of the horizontal line of the cross in pixels.
   */
  y?: number;
  /**
   * Width of the cross in pixels.
   */
  width?: number;
  /**
   * Height of the cross in pixels.
   */
  height?: number;
  /**
   * The y-coordinate of the top left point in the boundary box of the cross.
   */
  top?: number;
  /**
   * The x-coordinate of the top left point in the boundary box of the cross.
   */
  left?: number;
  className?: number;
}

export type Props = SVGProps<SVGPathElement> & CrossProps;

const getPath = (x: number, y: number, width: number, height: number, top: number, left: number) => {
  return `M${x},${top}v${height}M${left},${y}h${width}`;
};

/**
 * Renders a crosshair as an SVG path with one horizontal and one vertical line.
 * It is used as the default tooltip cursor in {@link ScatterChart}.
 *
 * All coordinates and dimensions are in pixels, rather than chart data values.
 * The vertical line runs from `(x, top)` to `(x, top + height)`, and the horizontal line
 * runs from `(left, y)` to `(left + width, y)`. Set `top`, `left`, `width`, and `height`
 * to define the extent of the lines; `x` and `y` position their intersection.
 *
 * Use SVG presentation attributes such as `stroke`, `strokeWidth`, and `strokeDasharray`
 * to style the lines. Set `stroke` to make the path visible; `fill` does not color the lines.
 */
export const Cross: React.FC<Props> = ({
  x = 0,
  y = 0,
  top = 0,
  left = 0,
  width = 0,
  height = 0,
  className,
  ...rest
}) => {
  const props = { x, y, top, left, width, height, ...rest };

  if (!isNumber(x) || !isNumber(y) || !isNumber(width) || !isNumber(height) || !isNumber(top) || !isNumber(left)) {
    return null;
  }

  return (
    <path
      {...svgPropertiesAndEvents(props)}
      className={clsx('recharts-cross', className)}
      d={getPath(x, y, width, height, top, left)}
    />
  );
};
