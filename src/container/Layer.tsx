import * as React from 'react';
import { ReactNode, SVGAttributes } from 'react';
import { clsx } from 'clsx';
import { svgPropertiesAndEvents } from '../util/svgPropertiesAndEvents';

interface LayerProps {
  className?: string;
  children?: ReactNode;
}

export type Props = SVGAttributes<SVGGElement> & LayerProps;

export const Layer = React.forwardRef<SVGGElement, Props>((props: Props, ref) => {
  const { children, className, ...others } = props;
  const layerClass = clsx('recharts-layer', className);

  return (
    <g className={layerClass} {...svgPropertiesAndEvents(others)} ref={ref}>
      {children}
    </g>
  );
});
