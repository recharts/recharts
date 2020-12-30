/**
 * @fileOverview Layer
 */
import React, { ReactNode, SVGProps } from 'react';
import classNames from 'classnames';
import { filterProps } from '../util/types';

interface LayerProps {
  className?: string;
  children?: ReactNode;
}

export type Props = SVGProps<SVGGElement> & LayerProps;

export function Layer(props: Props) {
  const { children, className, ...others } = props;
  const layerClass = classNames('recharts-layer', className);

  return (
    <g className={layerClass} {...filterProps(others, true)}>
      {children}
    </g>
  );
}
