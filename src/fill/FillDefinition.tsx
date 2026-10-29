import * as React from 'react';
import { RechartsFill, RechartsLinearGradient, RechartsPattern } from './RechartsFill';
import { useRechartsTheme } from '../theme/RechartsThemeContext';
import { getEffectivePageBackground } from '../theme/pageBackground';

const DEFAULT_PATTERN_OPACITY = 0.5;

/**
 * The texture color of patterns that set no `color` of their own:
 * the page background, so that the texture looks like it is cut out of the shape.
 */
function useDefaultTextureColor(): string {
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
  defaultTextureColor,
  tileScale,
}: {
  id: string;
  pattern: RechartsPattern;
  color: string | undefined;
  defaultTextureColor: string;
  tileScale: number;
}) {
  const { width, height, rotation } = pattern;
  const textureColor = pattern.color ?? defaultTextureColor;
  const transforms: Array<string> = [];
  if (rotation != null && rotation !== 0) {
    transforms.push(`rotate(${rotation})`);
  }
  if (tileScale !== 1) {
    transforms.push(`scale(${tileScale})`);
  }
  const paths = typeof pattern.path === 'string' ? [pattern.path] : pattern.path;
  const isStroked = pattern.strokeWidth != null;
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
      <g opacity={pattern.opacity ?? DEFAULT_PATTERN_OPACITY}>
        {paths.map(d => (
          <path
            key={d}
            d={d}
            fill={isStroked ? 'none' : textureColor}
            stroke={isStroked ? textureColor : 'none'}
            strokeWidth={pattern.strokeWidth}
          />
        ))}
      </g>
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
 * Renders the SVG definition of a {@link RechartsFill} that has a pattern, a gradient, or a custom definition.
 * Render it inside `<defs>`. Renders nothing for a fill with only a color.
 */
export function FillDefinition({ id, fill, color, tileScale = 1 }: FillDefinitionProps) {
  const defaultTextureColor = useDefaultTextureColor();
  if (fill.definition != null) {
    const Definition = fill.definition;
    return <Definition id={id} color={color} />;
  }
  if (fill.pattern != null) {
    return (
      <PatternDefinition
        id={id}
        pattern={fill.pattern}
        color={color}
        defaultTextureColor={defaultTextureColor}
        tileScale={tileScale}
      />
    );
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
