import type { FunctionComponent, SVGProps } from 'react';

export interface Props extends SVGProps<SVGElement> {
  /**
   * The fill color.
   */
  fill?: string;
  /**
   * The stroke color.
   */
  stroke?: string;
}

/**
 * Cell component used to define colors and styles of chart elements.
 *
 * This component is now deprecated and will be removed in Recharts 4.0.
 *
 * Please use the `shape` prop or `content` prop on the respective chart components
 * to customize the rendering of chart elements instead of using `Cell`.
 *
 * @see {@link https://recharts.github.io/en-US/guide/cell/ Guide: Migrate from Cell component to shape prop}
 *
 * @deprecated
 * @consumes CellReader
 */
export const Cell: FunctionComponent<Props> = (_props: Props) => null;

Cell.displayName = 'Cell';
