import * as React from 'react';
import { SVGProps, useLayoutEffect, useRef } from 'react';
import { clsx } from 'clsx';
import { RechartsFill } from '../fill/RechartsFill';
import { FillObjectPaint } from '../fill/fillDefinitions';
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

/**
 * Returns the SVG path of a sector with rounded corners.
 * If the sector is too narrow for the full cornerRadius, the corners shrink to fit, unless forceCornerRadius is set.
 */
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
   * The fill of the sector. Either a color string, or a {@link RechartsFill} object with an SVG definition,
   * such as a pattern or a gradient. Recharts renders the definition with a unique ID.
   * Set the `color` of the fill object: there is no theme color to fall back to.
   *
   * @since 3.11
   * @example <Sector fill={{ color: 'blue', definition: pattern(patterns.diagonal) }} />
   */
  fill?: string | RechartsFill;
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
 * @public
 */
export type Props = Omit<SVGProps<SVGPathElement>, 'cx' | 'cy' | 'dangerouslySetInnerHTML' | 'fill'> &
  Partial<SectorProps>;

/**
 * The props of the inner renderer, which gets the `fill` as a color or a `url(#…)` reference.
 */
type StringFillProps = Omit<Props, 'fill'> & { fill?: string };

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

const transformProperties = ['transform', 'transform-box', 'transform-origin', 'translate', 'rotate', 'scale'];
const animatedTransformProperties = new Set(['transform', 'translate', 'rotate', 'scale', 'all']);

function readTransitionProperty(animation: Animation): string | null {
  if (!('transitionProperty' in animation)) {
    return null;
  }
  const { transitionProperty } = animation;
  return typeof transitionProperty === 'string' ? transitionProperty : null;
}

function animationMovesSector(animation: Animation, sector: Element): boolean {
  const property = readTransitionProperty(animation);
  if (property != null) {
    return animatedTransformProperties.has(property);
  }
  const { effect } = animation;
  if (effect == null || typeof KeyframeEffect === 'undefined' || !(effect instanceof KeyframeEffect)) {
    return false;
  }
  if (effect.target !== sector || effect.pseudoElement) {
    return false;
  }
  return effect.getKeyframes().some(frame =>
    ['transform', 'translate', 'rotate', 'scale'].some(key => {
      const value = frame[key];
      return typeof value === 'string' && value !== '';
    }),
  );
}

function isTransformTransitionEvent(event: Event, sector: Element): event is TransitionEvent {
  return (
    event.target === sector && event instanceof TransitionEvent && animatedTransformProperties.has(event.propertyName)
  );
}

function alignFocusIndicator(indicator: SVGGElement | null): void {
  const sector = indicator?.previousElementSibling;
  const parent = indicator?.parentElement;
  const view = indicator?.ownerDocument.defaultView;
  if (!indicator || !sector || !view) {
    return;
  }

  const { style: indicatorStyle } = indicator;
  if (sector instanceof view.SVGGraphicsElement && parent instanceof view.SVGGraphicsElement) {
    const sectorMatrix = sector.getCTM();
    const parentMatrix = parent.getCTM();
    if (sectorMatrix && parentMatrix) {
      const { a, b, c, d, e, f } = parentMatrix.inverse().multiply(sectorMatrix);
      const matrix = [a, b, c, d, e, f];
      if (matrix.every(Number.isFinite)) {
        indicatorStyle.transform = `matrix(${matrix.join(',')})`;
        indicatorStyle.transformBox = 'view-box';
        indicatorStyle.transformOrigin = '0 0';
        indicatorStyle.translate = 'none';
        indicatorStyle.rotate = 'none';
        indicatorStyle.scale = 'none';
        return;
      }
    }
  }

  const style = view.getComputedStyle(sector);
  transformProperties.forEach(property => {
    indicatorStyle.setProperty(property, style.getPropertyValue(property));
  });
}

function trackSectorFocusIndicator(indicator: SVGGElement): () => void {
  const sector = indicator.previousElementSibling;
  if (!(sector instanceof Element)) {
    return () => {};
  }

  let frame: number | null = null;
  let eventSources = 0;
  let animationSources = 0;
  let stopped = false;
  const followed = new Set<Animation>();
  const stops = new Map<Animation, () => void>();
  const active = () => eventSources + animationSources > 0;

  const cancelFrame = () => {
    if (frame != null) {
      cancelAnimationFrame(frame);
      frame = null;
    }
  };

  const tick = () => {
    frame = null;
    if (stopped) {
      return;
    }
    alignFocusIndicator(indicator);
    if (active()) {
      frame = requestAnimationFrame(tick);
    }
  };

  const syncFrame = () => {
    if (stopped) {
      return;
    }
    if (active()) {
      if (frame == null) {
        frame = requestAnimationFrame(tick);
      }
      return;
    }
    cancelFrame();
    alignFocusIndicator(indicator);
  };

  const follow = (animation: Animation): boolean => {
    if (followed.has(animation)) {
      return true;
    }
    if (animation.playState !== 'running' || !animationMovesSector(animation, sector)) {
      return false;
    }
    const stop = () => {
      animation.removeEventListener('finish', stop);
      animation.removeEventListener('cancel', stop);
      stops.delete(animation);
      if (!followed.delete(animation)) {
        return;
      }
      animationSources -= 1;
      syncFrame();
    };
    followed.add(animation);
    stops.set(animation, stop);
    animation.addEventListener('finish', stop);
    animation.addEventListener('cancel', stop);
    animationSources += 1;
    syncFrame();
    return true;
  };

  const followCurrent = () => {
    if (typeof sector.getAnimations !== 'function') {
      return;
    }
    sector.getAnimations().forEach(follow);
  };

  const onTransitionRun = (event: Event) => {
    if (!isTransformTransitionEvent(event, sector) || stopped) {
      return;
    }
    const followedBefore = followed.size;
    followCurrent();
    if (followed.size !== followedBefore) {
      return;
    }
    eventSources += 1;
    syncFrame();
  };

  const onTransitionDone = (event: Event) => {
    if (!isTransformTransitionEvent(event, sector) || stopped) {
      return;
    }
    if (eventSources > 0) {
      eventSources -= 1;
    }
    alignFocusIndicator(indicator);
    if (!active()) {
      cancelFrame();
    }
  };

  const onAnimationStart = (event: Event) => {
    if (event.target === sector && !stopped) {
      followCurrent();
    }
  };

  alignFocusIndicator(indicator);
  followCurrent();
  sector.addEventListener('transitionrun', onTransitionRun);
  sector.addEventListener('transitionend', onTransitionDone);
  sector.addEventListener('transitioncancel', onTransitionDone);
  sector.addEventListener('animationstart', onAnimationStart);

  return () => {
    stopped = true;
    cancelFrame();
    sector.removeEventListener('transitionrun', onTransitionRun);
    sector.removeEventListener('transitionend', onTransitionDone);
    sector.removeEventListener('transitioncancel', onTransitionDone);
    sector.removeEventListener('animationstart', onAnimationStart);
    stops.forEach((stop, animation) => {
      animation.removeEventListener('finish', stop);
      animation.removeEventListener('cancel', stop);
    });
    stops.clear();
    followed.clear();
  };
}

function SectorImpl({ showFocusIndicator, ...sectorProps }: StringFillProps & { showFocusIndicator?: boolean }) {
  const props = resolveDefaultProps(sectorProps, defaultSectorProps);
  const indicatorRef = useRef<SVGGElement | null>(null);
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
    transform: transformAttribute,
  } = props;
  const { transform, transformOrigin, translate, rotate, scale } = props.style ?? {};
  const rendered = !(outerRadius < innerRadius || startAngle === endAngle);

  useLayoutEffect(() => {
    const indicator = indicatorRef.current;
    if (!showFocusIndicator || !rendered || indicator == null) {
      return undefined;
    }
    return trackSectorFocusIndicator(indicator);
  }, [
    showFocusIndicator,
    rendered,
    className,
    transformAttribute,
    transform,
    transformOrigin,
    translate,
    rotate,
    scale,
  ]);

  if (!rendered) {
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

  return (
    <>
      <path
        {...svgPropertiesAndEvents(props)}
        className={layerClass}
        d={path}
        style={showFocusIndicator ? { ...props.style, outline: 'none' } : props.style}
      />
      {showFocusIndicator && (
        <g
          className="recharts-pie-focus-indicator"
          aria-hidden="true"
          fill="none"
          pointerEvents="none"
          strokeLinejoin="round"
          transform={props.transform}
          ref={indicatorRef}
        >
          <path d={path} stroke="Canvas" strokeWidth={5} vectorEffect="non-scaling-stroke" />
          <path d={path} stroke="CanvasText" strokeWidth={2} vectorEffect="non-scaling-stroke" />
        </g>
      )}
    </>
  );
}

export function SectorWithFocusIndicator({ showFocusIndicator, ...props }: Props & { showFocusIndicator?: boolean }) {
  const { fill } = props;
  // spreading all props first keeps `fill` in its place among the attributes
  return fill != null && typeof fill === 'object' ? (
    <FillObjectPaint fill={fill}>
      {paint => <SectorImpl {...props} fill={paint} showFocusIndicator={showFocusIndicator} />}
    </FillObjectPaint>
  ) : (
    <SectorImpl {...props} fill={fill} showFocusIndicator={showFocusIndicator} />
  );
}

/**
 * Renders a sector (pie-slice or donut-segment shape) from center
 * coordinates, inner/outer radius, and start/end angles. Used by polar
 * components such as Pie, RadialBar, and PolarGrid, and as the radial
 * cursor shape shown by Tooltip on polar charts.
 * @public
 */
export const Sector = (props: Props) => <SectorWithFocusIndicator {...props} />;
