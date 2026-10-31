import * as React from 'react';
import { clsx } from 'clsx';
import { RechartsFill } from '../fill/RechartsFill';
import { FillObjectPaint, getShapeBounds } from '../fill/fillDefinitions';
import { PresentationAttributesWithProps, adaptEventHandlers } from '../util/types';

import { svgPropertiesNoEvents } from '../util/svgPropertiesNoEvents';
import { isNumber } from '../util/DataUtils';

interface DotProps {
  /**
   * The fill of the dot. Either a color string, or a {@link RechartsFill} object with an SVG definition,
   * such as a pattern or a gradient. Recharts renders the definition with a unique ID.
   * Set the `color` of the fill object: there is no theme color to fall back to.
   *
   * @since 3.11
   * @example <Dot fill={{ color: 'blue', definition: pattern(patterns.diagonal) }} />
   */
  fill?: string | RechartsFill;
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

export type Props = Omit<PresentationAttributesWithProps<DotProps, SVGCircleElement>, 'fill'> & DotProps;

/**
 * The props of the inner renderer, which gets the `fill` as a color or a `url(#…)` reference.
 */
type StringFillProps = Omit<Props, 'fill'> & { fill?: string };

const DotImpl: React.FC<StringFillProps> = props => {
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
 * Renders a dot in the chart.
 *
 * This component accepts X and Y coordinates in pixels.
 * If you need to position the rectangle based on your chart's data,
 * consider using the {@link ReferenceDot} component instead.
 *
 * @param props
 * @constructor
 */
export const Dot = (props: Props) => {
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
