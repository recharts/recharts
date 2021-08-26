/**
 * @fileOverview Layer
 */
import React, { ReactNode, SVGProps } from 'react';
import clsx from 'clsx';
import { filterProps } from '../util/types';

interface LayerProps {
  className?: string;
  children?: ReactNode;
}

export type Props = SVGProps<SVGGElement> & LayerProps;

export function Layer(props: Props) {
  const { children, className, ...others } = props;
  const layerClass = clsx('recharts-layer', className);

  return (
    <g className={layerClass} {...filterProps(others, true)}>
      {children}
    </g>
  );
}
