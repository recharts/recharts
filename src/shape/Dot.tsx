/**
 * @fileOverview Dot
 */
import React from 'react';
import classNames from 'classnames';
import { PresentationAttributesWithProps, adaptEventHandlers } from '../util/types';
import { filterProps } from '../util/ReactUtils';

interface DotProps {
  className?: string;
  cx?: number;
  cy?: number;
  r?: number;
  clipDot?: boolean;
}

export type Props = PresentationAttributesWithProps<DotProps, SVGCircleElement> & DotProps;

export const Dot: React.FC<Props> = props => {
  const { cx, cy, r, className } = props;
  const layerClass = classNames('recharts-dot', className);

  if (cx === +cx && cy === +cy && r === +r) {
    return (
      <circle {...filterProps(props)} {...adaptEventHandlers(props)} className={layerClass} cx={cx} cy={cy} r={r} />
    );
  }

  return null;
};
