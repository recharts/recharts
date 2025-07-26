/**
 * @fileOverview Dot
 */
import * as React from 'react';
import { clsx } from 'clsx';
import { PresentationAttributesWithProps, adaptEventHandlers } from '../util/types';

import { svgOnlyNoEvents } from '../util/svgOnlyNoEvents';

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
  const layerClass = clsx('recharts-dot', className);

  if (cx === +cx && cy === +cy && r === +r) {
    return (
      <circle {...svgOnlyNoEvents(props)} {...adaptEventHandlers(props)} className={layerClass} cx={cx} cy={cy} r={r} />
    );
  }

  return null;
};
