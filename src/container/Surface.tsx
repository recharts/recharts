/**
 * @fileOverview Surface
 */
import React, { ReactNode, CSSProperties, SVGProps } from 'react';
import clsx from 'clsx';
import { filterProps } from '../util/types';

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
}

export type Props = Omit<SVGProps<SVGSVGElement>, 'viewBox'> & SurfaceProps;

export function Surface(props: Props) {
  const { children, width, height, viewBox, className, style, ...others } = props;
  const svgView = viewBox || { width, height, x: 0, y: 0 };
  const layerClass = clsx('recharts-surface', className);

  return (
    <svg
      {...filterProps(others, true, true)}
      className={layerClass}
      width={width}
      height={height}
      style={style}
      viewBox={`${svgView.x} ${svgView.y} ${svgView.width} ${svgView.height}`}
      version="1.1"
    >
      {children}
    </svg>
  );
}
