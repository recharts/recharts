import * as React from 'react';
import { clsx } from 'clsx';
import type { RechartsTheme } from '../theme/RechartsTheme';
import { useRechartsResolvedProps } from '../theme/useRechartsResolvedProps';
import { PresentationAttributesWithProps, adaptEventHandlers } from '../util/types';

import { svgPropertiesNoEvents } from '../util/svgPropertiesNoEvents';
import { isNumber } from '../util/DataUtils';

interface DotProps {
  className?: string;
  /**
   * The x-coordinate of center in pixels.
   */
  cx?: number;
  /**
   * The y-coordinate of center in pixels.
   */
  cy?: number;
  /**
   * The radius of dot.
   */
  r?: number | string;
  clipDot?: boolean;
}

export type Props = PresentationAttributesWithProps<DotProps, SVGCircleElement> & DotProps;

const dotDefaultProps = {} as const satisfies Partial<Props>;

function getDotComponentTheme(theme: RechartsTheme): Partial<Props> | undefined {
  return theme.components?.Dot;
}

/**
 * Renders a dot in the chart.
 *
 * This component accepts X and Y coordinates in pixels.
 * If you need to position the rectangle based on your chart's data,
 * consider using the {@link ReferenceDot} component instead.
 *
 * @param props
 * @constructor
 */
export const Dot: React.FC<Props> = outsideProps => {
  const props = useRechartsResolvedProps(outsideProps, dotDefaultProps, getDotComponentTheme);
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
