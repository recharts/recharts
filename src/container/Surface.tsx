/**
 * @fileOverview Surface
 */
import * as React from 'react';
import { ReactNode, CSSProperties, SVGProps, forwardRef } from 'react';
import { clsx } from 'clsx';
import { filterProps } from '../util/ReactUtils';

interface SurfaceProps {
  width: number;
  height: number;
  viewBox?: {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
  };
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  title?: string;
  desc?: string;
}

export type Props = Omit<SVGProps<SVGSVGElement>, 'viewBox'> & SurfaceProps;

export const Surface = forwardRef<SVGSVGElement, Props>((props: Props, ref) => {
  const { children, width, height, viewBox, className, style, title, desc, ...others } = props;
  const svgView = viewBox || { width, height, x: 0, y: 0 };
  const layerClass = clsx('recharts-surface', className);

  return (
    <svg
      {...filterProps(others, true, 'svg')}
      className={layerClass}
      width={width}
      height={height}
      style={style}
      viewBox={`${svgView.x} ${svgView.y} ${svgView.width} ${svgView.height}`}
      ref={ref}
    >
      <title>{title}</title>
      <desc>{desc}</desc>
      {children}
    </svg>
  );
});
