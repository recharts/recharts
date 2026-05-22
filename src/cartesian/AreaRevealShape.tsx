import * as React from 'react';
import { isNumber } from '../util/DataUtils';
import { Curve, BaseLineType, Props as CurveProps } from '../shape/Curve';
import { CartesianLayout, LayoutType, ShapeAnimationProps } from '../util/types';
import { isWellBehavedNumber } from '../util/isWellBehavedNumber';
import { Layer } from '../container/Layer';
import { svgPropertiesNoEvents } from '../util/svgPropertiesNoEvents';
import { useId } from '../util/useId';

/**
 * Props for the clip-path rect computation.
 * @internal
 */
interface ClipRectProps {
  alpha: number;
  points: ReadonlyArray<{ x?: number | null; y?: number | null }>;
  baseLine: BaseLineType | undefined;
  strokeWidth: string | number | undefined;
}

function HorizontalClipRect({ alpha, baseLine, points, strokeWidth }: ClipRectProps) {
  const startX = points[0]?.x;
  const endX = points[points.length - 1]?.x;
  if (!isWellBehavedNumber(startX) || !isWellBehavedNumber(endX)) {
    return null;
  }
  const width = alpha * Math.abs(startX - endX);
  let maxY = Math.max(...points.map(entry => entry.y || 0));

  if (isNumber(baseLine)) {
    maxY = Math.max(baseLine, maxY);
  } else if (baseLine && Array.isArray(baseLine) && baseLine.length) {
    maxY = Math.max(...baseLine.map(entry => entry.y || 0), maxY);
  }

  if (isNumber(maxY)) {
    return (
      <rect
        x={startX < endX ? startX : startX - width}
        y={0}
        width={width}
        height={Math.floor(maxY + (strokeWidth ? parseInt(`${strokeWidth}`, 10) : 1))}
      />
    );
  }

  return null;
}

function VerticalClipRect({ alpha, baseLine, points, strokeWidth }: ClipRectProps) {
  const startY = points[0]?.y;
  const endY = points[points.length - 1]?.y;
  if (!isWellBehavedNumber(startY) || !isWellBehavedNumber(endY)) {
    return null;
  }
  const height = alpha * Math.abs(startY - endY);
  let maxX = Math.max(...points.map(entry => entry.x || 0));

  if (isNumber(baseLine)) {
    maxX = Math.max(baseLine, maxX);
  } else if (baseLine && Array.isArray(baseLine) && baseLine.length) {
    maxX = Math.max(...baseLine.map(entry => entry.x || 0), maxX);
  }

  if (isNumber(maxX)) {
    return (
      <rect
        x={0}
        y={startY < endY ? startY : startY - height}
        width={maxX + (strokeWidth ? parseInt(`${strokeWidth}`, 10) : 1)}
        height={Math.floor(height)}
      />
    );
  }

  return null;
}

function RevealClipRect({ alpha, layout, points, baseLine, strokeWidth }: ClipRectProps & { layout: CartesianLayout }) {
  if (layout === 'vertical') {
    return <VerticalClipRect alpha={alpha} points={points} baseLine={baseLine} strokeWidth={strokeWidth} />;
  }

  return <HorizontalClipRect alpha={alpha} points={points} baseLine={baseLine} strokeWidth={strokeWidth} />;
}

export type AreaRevealShapeProps = CurveProps & ShapeAnimationProps & { layout?: LayoutType; isRange?: boolean };

/**
 * The default shape for Area that reveals the chart with a left-to-right (or top-to-bottom)
 * clip-path animation on entrance, and renders the plain curve otherwise.
 *
 * This component renders the complete Area visual: the filled area curve, the stroke curve,
 * and (for range areas) the baseline stroke curve. During entrance animation, all curves are
 * wrapped in a clip-path that progressively reveals the area.
 *
 * This is the built-in entrance animation for Area. It is automatically used when no custom
 * `shape` prop is provided. You can import and reuse it as a starting point for custom shapes.
 *
 * @example
 * ```tsx
 * import { Area, AreaRevealShape } from 'recharts';
 *
 * // Use the default shape explicitly (same as providing no shape prop)
 * <Area dataKey="value" shape={AreaRevealShape} />
 * ```
 *
 * @see {@link https://recharts.github.io/en-US/guide/animations Animation guide}
 */
export function AreaRevealShape(props: AreaRevealShapeProps): React.ReactElement | null {
  const {
    t = 1,
    isAnimating = false,
    isEntrance = false,
    layout: layoutProp,
    isRange,
    stroke,
    connectNulls,
    ...restProps
  } = props;
  const layout: CartesianLayout = layoutProp === 'vertical' ? 'vertical' : 'horizontal';
  const finalConnectNulls = connectNulls ?? false;
  const clipId = useId();

  const { id, baseLine, ...propsWithoutIdBaseline } = restProps;
  const strokeSvgProps = svgPropertiesNoEvents(propsWithoutIdBaseline);

  const fillCurve = (
    <Curve
      {...restProps}
      id={id}
      baseLine={baseLine}
      connectNulls={finalConnectNulls}
      stroke="none"
      className="recharts-area-area"
      layout={layout}
    />
  );

  const strokeCurve = stroke !== 'none' && (
    <Curve
      {...strokeSvgProps}
      className="recharts-area-curve"
      layout={layout}
      type={restProps.type}
      connectNulls={finalConnectNulls}
      fill="none"
      stroke={stroke}
      points={restProps.points}
    />
  );

  const baselineCurve = stroke !== 'none' && isRange && Array.isArray(baseLine) && (
    <Curve
      {...strokeSvgProps}
      className="recharts-area-curve"
      layout={layout}
      type={restProps.type}
      connectNulls={finalConnectNulls}
      fill="none"
      stroke={stroke}
      points={baseLine}
    />
  );

  if (isEntrance && (isAnimating || t < 1)) {
    return (
      <Layer>
        <defs>
          <clipPath id={clipId}>
            <RevealClipRect
              alpha={t}
              points={restProps.points ?? []}
              baseLine={baseLine}
              layout={layout}
              strokeWidth={restProps.strokeWidth}
            />
          </clipPath>
        </defs>
        <Layer clipPath={`url(#${clipId})`}>
          {fillCurve}
          {strokeCurve}
          {baselineCurve}
        </Layer>
      </Layer>
    );
  }

  return (
    <>
      {fillCurve}
      {strokeCurve}
      {baselineCurve}
    </>
  );
}
