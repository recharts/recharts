/**
 * @fileOverview Dot
 */
import * as React from 'react';
import { clsx } from 'clsx';
import { PresentationAttributesWithProps, adaptEventHandlers, RechartsMouseEventHandler } from '../util/types';

import { svgPropertiesNoEvents } from '../util/svgPropertiesNoEvents';
import { isNumber } from '../util/DataUtils';

interface DotProps {
  className?: string;
  /**
   * The x-coordinate of center.
   */
  cx?: number;
  /**
   * The y-coordinate of center.
   */
  cy?: number;
  /**
   * The radius of dot.
   */
  r?: number | string;
  clipDot?: boolean;
  /**
   * The customized event handler of click in this chart.
   */
  onClick?: RechartsMouseEventHandler<Props>;
}

export type Props = PresentationAttributesWithProps<DotProps, SVGCircleElement> & DotProps;

/**
 * Renders a dot in the chart.
 *
 * This component accepts X and Y coordinates in pixels.
 * If you need to position the rectangle based on your chart's data,
 * consider using the `<ReferenceDot>` component instead.
 *
 * @param props
 * @constructor
 */
export const Dot: React.FC<Props> = props => {
  const { cx, cy, r, className } = props;
  const layerClass = clsx('recharts-dot', className);

  if (isNumber(cx) && isNumber(cy) && isNumber(r)) {
    return (
      <circle
        {...svgPropertiesNoEvents(props)}
        {...adaptEventHandlers(props)}
        className={layerClass}
        cx={cx}
        cy={cy}
        r={r}
      />
    );
  }

  return null;
};
