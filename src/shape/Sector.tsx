import * as React from 'react';
import { SVGProps } from 'react';
import { clsx } from 'clsx';
import { GeometrySector, GeometrySectorWithCornerRadius } from '../util/types';
import { polarToCartesian, RADIAN } from '../util/PolarUtils';
import { getPercentValue, mathSign } from '../util/DataUtils';
import { resolveDefaultProps } from '../util/resolveDefaultProps';
import { svgPropertiesAndEvents } from '../util/svgPropertiesAndEvents';
import { roundTemplateLiteral } from '../util/round';

const getDeltaAngle = (startAngle: number, endAngle: number) => {
  const sign = mathSign(endAngle - startAngle);
  const deltaAngle = Math.min(Math.abs(endAngle - startAngle), 359.999);

  return sign * deltaAngle;
};

interface TangentCircleDef {
  cx: number;
  cy: number;
  radius: number;
  angle: number;
  sign: number;
  isExternal?: boolean;
  cornerRadius: number;
  cornerIsExternal?: boolean;
}

const getTangentCircle = ({
  cx,
  cy,
  radius,
  angle,
  sign,
  isExternal,
  cornerRadius,
  cornerIsExternal,
}: TangentCircleDef) => {
  const centerRadius = cornerRadius * (isExternal ? 1 : -1) + radius;
  const theta = Math.asin(cornerRadius / centerRadius) / RADIAN;
  const centerAngle = cornerIsExternal ? angle : angle + sign * theta;
  const center = polarToCartesian(cx, cy, centerRadius, centerAngle);
  // The coordinate of point which is tangent to the circle
  const circleTangency = polarToCartesian(cx, cy, radius, centerAngle);
  // The coordinate of point which is tangent to the radius line
  const lineTangencyAngle = cornerIsExternal ? angle - sign * theta : angle;
  const lineTangency = polarToCartesian(cx, cy, centerRadius * Math.cos(theta * RADIAN), lineTangencyAngle);
  return { center, circleTangency, lineTangency, theta };
};

const getSectorPath = ({ cx, cy, innerRadius, outerRadius, startAngle, endAngle }: GeometrySector) => {
  const angle = getDeltaAngle(startAngle, endAngle);

  // When the angle of sector equals to 360, star point and end point coincide
  const tempEndAngle = startAngle + angle;
  const outerStartPoint = polarToCartesian(cx, cy, outerRadius, startAngle);
  const outerEndPoint = polarToCartesian(cx, cy, outerRadius, tempEndAngle);

  let path = roundTemplateLiteral`M ${outerStartPoint.x},${outerStartPoint.y}
    A ${outerRadius},${outerRadius},0,
    ${+(Math.abs(angle) > 180)},${+(startAngle > tempEndAngle)},
    ${outerEndPoint.x},${outerEndPoint.y}
  `;

  if (innerRadius > 0) {
    const innerStartPoint = polarToCartesian(cx, cy, innerRadius, startAngle);
    const innerEndPoint = polarToCartesian(cx, cy, innerRadius, tempEndAngle);
    path += roundTemplateLiteral`L ${innerEndPoint.x},${innerEndPoint.y}
            A ${innerRadius},${innerRadius},0,
            ${+(Math.abs(angle) > 180)},${+(startAngle <= tempEndAngle)},
            ${innerStartPoint.x},${innerStartPoint.y} Z`;
  } else {
    path += roundTemplateLiteral`L ${cx},${cy} Z`;
  }

  return path;
};

const getSectorWithCorner = ({
  cx,
  cy,
  innerRadius,
  outerRadius,
  cornerRadius,
  forceCornerRadius,
  cornerIsExternal,
  startAngle,
  endAngle,
}: GeometrySectorWithCornerRadius) => {
  const sign = mathSign(endAngle - startAngle);
  const deltaAngle = Math.abs(startAngle - endAngle);
  /*
   * In a narrow sector, the two corners of the same arc would overlap.
   * Instead of dropping the rounded corners, shrink them to the largest radius that still fits, like d3-shape does.
   * With α being half of the sector angle, a circle that touches both radial edges and the outer arc
   * has radius outerRadius * sin(α) / (1 + sin(α)),
   * and a circle that touches both radial edges and the inner arc has radius innerRadius * sin(α) / (1 - sin(α)).
   */
  const shouldFitCorners = !forceCornerRadius && !cornerIsExternal && deltaAngle < 180;
  const sinHalfAngle = Math.sin((deltaAngle / 2) * RADIAN);
  const outerCornerRadius = shouldFitCorners
    ? Math.min(cornerRadius, (outerRadius * sinHalfAngle) / (1 + sinHalfAngle))
    : cornerRadius;
  const innerCornerRadius = shouldFitCorners
    ? Math.min(cornerRadius, (innerRadius * sinHalfAngle) / (1 - sinHalfAngle))
    : cornerRadius;
  const {
    circleTangency: soct,
    lineTangency: solt,
    theta: sot,
  } = getTangentCircle({
    cx,
    cy,
    radius: outerRadius,
    angle: startAngle,
    sign,
    cornerRadius: outerCornerRadius,
    cornerIsExternal,
  });
  const {
    circleTangency: eoct,
    lineTangency: eolt,
    theta: eot,
  } = getTangentCircle({
    cx,
    cy,
    radius: outerRadius,
    angle: endAngle,
    sign: -sign,
    cornerRadius: outerCornerRadius,
    cornerIsExternal,
  });
  const outerArcAngle = cornerIsExternal
    ? Math.abs(startAngle - endAngle)
    : Math.abs(startAngle - endAngle) - sot - eot;

  /*
   * The corners only overlap here when forceCornerRadius is set, otherwise they have been shrunk to fit.
   * Floating point rounding can make outerArcAngle slightly negative when the corners fit exactly,
   * so a negative outerArcAngle alone must not drop the rounded corners.
   */
  if (outerArcAngle < 0 && forceCornerRadius) {
    return roundTemplateLiteral`M ${solt.x},${solt.y}
      a${cornerRadius},${cornerRadius},0,0,1,${cornerRadius * 2},0
      a${cornerRadius},${cornerRadius},0,0,1,${-cornerRadius * 2},0
    `;
  }

  let path = roundTemplateLiteral`M ${solt.x},${solt.y}
    A${outerCornerRadius},${outerCornerRadius},0,0,${+(sign < 0)},${soct.x},${soct.y}
    A${outerRadius},${outerRadius},0,${+(outerArcAngle > 180)},${+(sign < 0)},${eoct.x},${eoct.y}
    A${outerCornerRadius},${outerCornerRadius},0,0,${+(sign < 0)},${eolt.x},${eolt.y}
  `;

  if (innerRadius > 0) {
    const {
      circleTangency: sict,
      lineTangency: silt,
      theta: sit,
    } = getTangentCircle({
      cx,
      cy,
      radius: innerRadius,
      angle: startAngle,
      sign,
      isExternal: true,
      cornerRadius: innerCornerRadius,
      cornerIsExternal,
    });
    const {
      circleTangency: eict,
      lineTangency: eilt,
      theta: eit,
    } = getTangentCircle({
      cx,
      cy,
      radius: innerRadius,
      angle: endAngle,
      sign: -sign,
      isExternal: true,
      cornerRadius: innerCornerRadius,
      cornerIsExternal,
    });
    const innerArcAngle = cornerIsExternal
      ? Math.abs(startAngle - endAngle)
      : Math.abs(startAngle - endAngle) - sit - eit;

    if (innerArcAngle < 0 && cornerRadius === 0) {
      return `${path}L${cx},${cy}Z`;
    }

    path += roundTemplateLiteral`L${eilt.x},${eilt.y}
      A${innerCornerRadius},${innerCornerRadius},0,0,${+(sign < 0)},${eict.x},${eict.y}
      A${innerRadius},${innerRadius},0,${+(innerArcAngle > 180)},${+(sign > 0)},${sict.x},${sict.y}
      A${innerCornerRadius},${innerCornerRadius},0,0,${+(sign < 0)},${silt.x},${silt.y}Z`;
  } else {
    path += roundTemplateLiteral`L${cx},${cy}Z`;
  }

  return path;
};

interface SectorProps {
  /**
   * The SVG element's class name.
   */
  className?: string;
  /**
   * The x-coordinate of center.
   * @default 0
   */
  cx?: number;
  /**
   * The y-coordinate of center.
   * @default 0
   */
  cy?: number;
  /**
   * The inner radius of the sector.
   * @default 0
   */
  innerRadius?: number;
  /**
   * The outer radius of the sector.
   * @default 0
   */
  outerRadius?: number;
  /**
   * The start angle of the sector.
   * @default 0
   */
  startAngle?: number;
  /**
   * The end angle of the sector.
   * @default 0
   */
  endAngle?: number;
  /**
   * The radius of corners.
   * If the sector is too narrow to fit the corners, they shrink to the largest radius that fits,
   * unless `forceCornerRadius` is set.
   * @default 0
   */
  cornerRadius?: number;
  /**
   * When true, a sector that is too narrow to fit its corners renders as a circle with the full cornerRadius,
   * instead of shrinking the corners to fit.
   * @default false
   */
  forceCornerRadius?: boolean;
  /**
   * When false (default), the rounded corners are inset within the
   * angle defined by `startAngle`/`endAngle`, keeping the sector within
   * its nominal bounds. When true, the corners extend beyond that
   * angle, making the sector appear visually wider at its rounded ends.
   */
  cornerIsExternal?: boolean;
  /**
   * The customized event handler of click on the sector
   */
  onClick?: (e: React.MouseEvent<SVGPathElement>) => void;
  /**
   * The customized event handler of mousedown on the sector
   */
  onMouseDown?: (e: React.MouseEvent<SVGPathElement>) => void;
  /**
   * The customized event handler of mouseup on the sector
   */
  onMouseUp?: (e: React.MouseEvent<SVGPathElement>) => void;
  /**
   * The customized event handler of mousemove on the sector
   */
  onMouseMove?: (e: React.MouseEvent<SVGPathElement>) => void;
  /**
   * The customized event handler of mouseover on the sector
   */
  onMouseOver?: (e: React.MouseEvent<SVGPathElement>) => void;
  /**
   * The customized event handler of mouseout on the sector
   */
  onMouseOut?: (e: React.MouseEvent<SVGPathElement>) => void;
  /**
   * The customized event handler of mouseenter on the sector
   */
  onMouseEnter?: (e: React.MouseEvent<SVGPathElement>) => void;
  /**
   * The customized event handler of mouseleave on the sector
   */
  onMouseLeave?: (e: React.MouseEvent<SVGPathElement>) => void;
}

/**
 * SVG cx, cy are `string | number | undefined`, but internally we use `number` so let's
 * override the types here.
 */
export type Props = Omit<SVGProps<SVGPathElement>, 'cx' | 'cy' | 'dangerouslySetInnerHTML'> & Partial<SectorProps>;

export const defaultSectorProps = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: false,
  cornerIsExternal: false,
} as const satisfies Partial<Props>;

/**
 * Renders a sector (pie-slice or donut-segment shape) from center
 * coordinates, inner/outer radius, and start/end angles. Used by polar
 * components such as Pie, RadialBar, and PolarGrid, and as the radial
 * cursor shape shown by Tooltip on polar charts.
 */
export const Sector: React.FC<Props> = sectorProps => {
  const props = resolveDefaultProps(sectorProps, defaultSectorProps);
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    cornerRadius,
    forceCornerRadius,
    cornerIsExternal,
    startAngle,
    endAngle,
    className,
  } = props;

  if (outerRadius < innerRadius || startAngle === endAngle) {
    return null;
  }

  const layerClass = clsx('recharts-sector', className);
  const deltaRadius = outerRadius - innerRadius;
  const cr = getPercentValue(cornerRadius, deltaRadius, 0, true);
  let path;

  if (cr > 0 && Math.abs(startAngle - endAngle) < 360) {
    path = getSectorWithCorner({
      cx,
      cy,
      innerRadius,
      outerRadius,
      cornerRadius: Math.min(cr, deltaRadius / 2),
      forceCornerRadius,
      cornerIsExternal,
      startAngle,
      endAngle,
    });
  } else {
    path = getSectorPath({ cx, cy, innerRadius, outerRadius, startAngle, endAngle });
  }

  return <path {...svgPropertiesAndEvents(props)} className={layerClass} d={path} />;
};
