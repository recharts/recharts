import * as React from 'react';
import { clsx } from 'clsx';
import { RechartsFill } from '../fill/RechartsFill';
import { FillObjectPaint, getShapeBounds } from '../fill/fillDefinitions';
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

const DotImpl: React.FC<Props> = props => {
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

/**
 * Props of {@link Dot}: `fill` can be a fill object too.
 *
 * @since 3.11
 */
export type DotFillProps = Omit<Props, 'fill'> & {
  /**
   * The fill of the dot. Either a color string, or a {@link RechartsFill} object with an SVG definition,
   * such as a pattern or a gradient. Recharts renders the definition with a unique ID.
   * Set the `color` of the fill object: there is no theme color to fall back to.
   *
   * @example <Dot fill={{ color: 'blue', definition: pattern(patterns.diagonal) }} />
   */
  fill?: string | RechartsFill;
};

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
export const Dot = (props: DotFillProps) => {
  const { fill } = props;
  // spreading all props first keeps `fill` in its place among the attributes
  return fill != null && typeof fill === 'object' ? (
    <FillObjectPaint fill={fill} bounds={getShapeBounds(2 * Number(props.r), 2 * Number(props.r))}>
      {paint => <DotImpl {...props} fill={paint} />}
    </FillObjectPaint>
  ) : (
    <DotImpl {...props} fill={fill} />
  );
};
