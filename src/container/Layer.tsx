import * as React from 'react';
import { ReactNode, SVGAttributes } from 'react';
import { clsx } from 'clsx';
import { filterProps } from '../util/ReactUtils';

interface LayerProps {
  className?: string;
  children?: ReactNode;
}

export type Props = SVGAttributes<SVGGElement> & LayerProps;

export const Layer = React.forwardRef<SVGGElement, Props>((props: Props, ref) => {
  const { children, className, ...others } = props;
  const layerClass = clsx('recharts-layer', className);

  return (
    <g className={layerClass} {...filterProps(others, true)} ref={ref}>
      {children}
    </g>
  );
});
