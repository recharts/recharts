import * as React from 'react';
import { RechartsFill, RechartsLinearGradient, RechartsPattern } from './RechartsFill';
import { warn } from '../util/LogUtils';
import { useRechartsTheme } from '../theme/RechartsThemeContext';
import { getEffectivePageBackground } from '../theme/pageBackground';

const DEFAULT_PATTERN_OPACITY = 0.5;

/**
 * The texture color of patterns that set no `color` of their own:
 * the page background, so that the texture looks like it is cut out of the shape.
 */
function useDefaultInk(): string {
  return getEffectivePageBackground(useRechartsTheme()) ?? '#fff';
}

type FillDefinitionProps = {
  /**
   * DOM id of the `<pattern>` or `<linearGradient>`. Shapes reference it with `fill="url(#id)"`.
   */
  id: string;
  fill: RechartsFill;
  /**
   * The resolved base color: `fill.color`, or the theme color.
   */
  color: string | undefined;
  /**
   * Scales the pattern tile. Legend icons use it, so that a few tiles fit into the small icon.
   * @defaultValue 1
   */
  tileScale?: number;
};

/**
 * Returns the `fill` attribute that references a {@link FillDefinition}.
 * @param id the same id as given to FillDefinition
 */
export function getFillUrl(id: string): string {
  return `url(#${id})`;
}

function PatternDefinition({
  id,
  pattern,
  color,
  ink,
  tileScale,
}: {
  id: string;
  pattern: RechartsPattern;
  color: string | undefined;
  ink: string;
  tileScale: number;
}) {
  const { width, height, rotation } = pattern;
  const textureColor = pattern.color ?? ink;
  const transforms: Array<string> = [];
  if (rotation != null && rotation !== 0) {
    transforms.push(`rotate(${rotation})`);
  }
  if (tileScale !== 1) {
    transforms.push(`scale(${tileScale})`);
  }
  let texture: React.ReactNode;
  if (pattern.render != null) {
    texture = pattern.render({ color, ink: textureColor, width, height });
  } else {
    const paths = typeof pattern.path === 'string' ? [pattern.path] : pattern.path;
    const isStroked = pattern.strokeWidth != null;
    texture = paths.map(d => (
      <path
        key={d}
        d={d}
        fill={isStroked ? 'none' : textureColor}
        stroke={isStroked ? textureColor : 'none'}
        strokeWidth={pattern.strokeWidth}
      />
    ));
  }
  return (
    <pattern
      id={id}
      width={width}
      height={height}
      patternUnits="userSpaceOnUse"
      patternTransform={transforms.length > 0 ? transforms.join(' ') : undefined}
    >
      {/* Without a base color, the tile paints like a shape without a fill: in the SVG default color */}
      <rect width={width} height={height} fill={color} />
      <g opacity={pattern.opacity ?? DEFAULT_PATTERN_OPACITY}>{texture}</g>
    </pattern>
  );
}

function LinearGradientDefinition({
  id,
  gradient,
  color,
}: {
  id: string;
  gradient: RechartsLinearGradient;
  color: string | undefined;
}) {
  const { x1 = 0, y1 = 0, x2 = 0, y2 = 1, stops } = gradient;
  return (
    <linearGradient id={id} x1={x1} y1={y1} x2={x2} y2={y2}>
      {stops.map((stop, index) => (
        <stop
          // stops have no identity of their own, and their order is their meaning
          key={index}
          offset={stop.offset}
          stopColor={stop.color ?? color}
          stopOpacity={stop.opacity}
        />
      ))}
    </linearGradient>
  );
}

/**
 * Renders the SVG definition of a {@link RechartsFill} that has a pattern or a gradient.
 * Render it inside `<defs>`. Renders nothing for a fill that has neither.
 */
export function FillDefinition({ id, fill, color, tileScale = 1 }: FillDefinitionProps) {
  const ink = useDefaultInk();
  warn(
    fill.definition == null || (fill.pattern == null && fill.gradient == null),
    'A fill with a `definition` ignores its `pattern` and `gradient`.',
  );
  if (fill.definition != null) {
    return React.cloneElement<{ id?: string }>(fill.definition, { id });
  }
  warn(
    fill.pattern == null || fill.gradient == null,
    'A fill with both `pattern` and `gradient` is not supported yet. Recharts draws the pattern only.',
  );
  if (fill.pattern != null) {
    return <PatternDefinition id={id} pattern={fill.pattern} color={color} ink={ink} tileScale={tileScale} />;
  }
  if (fill.gradient != null) {
    return <LinearGradientDefinition id={id} gradient={fill.gradient} color={color} />;
  }
  return null;
}

/**
 * Returns true if the fill needs an SVG definition, which means shapes paint it with `url(#id)`.
 * @param fill the fill object
 */
export function needsFillDefinition(fill: RechartsFill | undefined): fill is RechartsFill {
  return fill != null && (fill.definition != null || fill.pattern != null || fill.gradient != null);
}

/**
 * Returns true if Legend icons can draw the fill. They draw built-in patterns and gradients,
 * but not custom definitions: those are made for the size of the chart shapes.
 * @param fill the fill object
 */
export function canDrawFillInLegend(fill: RechartsFill | undefined): fill is RechartsFill {
  return needsFillDefinition(fill) && fill.definition == null;
}
