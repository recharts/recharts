/**
 * @fileOverview Layer
 */
import React, { ReactNode, SVGProps } from 'react';
import classNames from 'classnames';
import { filterProps } from '../util/ReactUtils';

interface LayerProps {
  className?: string;
  children?: ReactNode;
}

export type Props = SVGProps<SVGGElement> & LayerProps;

export const Layer = React.forwardRef((props: Props, ref: any) => {
  const { children, className, ...others } = props;
  const layerClass = classNames('recharts-layer', className);

  return (
    <g className={layerClass} {...filterProps(others, true)} ref={ref}>
      {children}
    </g>
  );
});
