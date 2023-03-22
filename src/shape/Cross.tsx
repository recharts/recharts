/**
 * @fileOverview Cross
 */
import React, { SVGProps } from 'react';
import classNames from 'classnames';
import { isNumber } from '../util/DataUtils';
import { filterProps } from '../util/ReactUtils';

interface CrossProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  top?: number;
  left?: number;
  className?: number;
}

export type Props = SVGProps<SVGPathElement> & CrossProps;

const getPath = (x: number, y: number, width: number, height: number, top: number, left: number) => {
  return `M${x},${top}v${height}M${left},${y}h${width}`;
};

export const Cross: React.FC<Props> = props => {
  const { x, y, width, height, top, left, className } = props;

  if (!isNumber(x) || !isNumber(y) || !isNumber(width) || !isNumber(height) || !isNumber(top) || !isNumber(left)) {
    return null;
  }

  return (
    <path
      {...filterProps(props, true)}
      className={classNames('recharts-cross', className)}
      d={getPath(x, y, width, height, top, left)}
    />
  );
};

Cross.defaultProps = {
  x: 0,
  y: 0,
  top: 0,
  left: 0,
  width: 0,
  height: 0,
};
