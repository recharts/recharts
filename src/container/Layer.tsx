/**
 * @fileOverview Layer
 */
import React, { ReactNode, SVGProps } from 'react';
import classNames from 'classnames';

interface LayerProps {
  className?: string;
  children?: ReactNode;
}

type Props = SVGProps<SVGGElement> & LayerProps;

function Layer(props: Props) {
  const { children, className, ...others } = props;
  const layerClass = classNames('recharts-layer', className);

  return (
    <g className={layerClass} {...others}>
      {children}
    </g>
  );
}

export default Layer;
