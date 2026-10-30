import * as React from 'react';
import { ComponentType } from 'react';
import { RechartsFillDefinitionProps, RechartsLinearGradient, RechartsPattern } from './RechartsFill';
import { useRechartsTheme } from '../theme/RechartsThemeContext';
import { getEffectivePageBackground } from '../theme/pageBackground';

const DEFAULT_PATTERN_OPACITY = 0.5;

/**
 * How many pattern tiles at least fit across a small painted area.
 * Fewer tiles would not read as a pattern.
 */
const MIN_TILES_ACROSS = 3;

/**
 * Returns how much a pattern scales its tiles, so that at least {@link MIN_TILES_ACROSS} of them fit across the
 * painted area. Tiles only get smaller: a large area keeps the tile size of the pattern.
 * @param bounds the size of the painted area, if it is known
 * @param tileSize the larger side of the tile
 */
function getTileScale(bounds: RechartsFillDefinitionProps['bounds'], tileSize: number): number {
  if (bounds == null || tileSize <= 0) {
    return 1;
  }
  return Math.min(1, Math.min(bounds.width, bounds.height) / MIN_TILES_ACROSS / tileSize);
}

/**
 * Returns the `fill` attribute that references a fill definition.
 * @param id the id given to the definition
 */
export function getFillUrl(id: string): string {
  return `url(#${id})`;
}

/**
 * Turns a {@link RechartsPattern} into a fill definition: a repeating texture over the base color.
 * The texture defaults to the `pageBackground` color from the theme, or white when no theme is set.
 *
 * Call it outside of components, so that the definition stays the same between renders.
 *
 * @example
 * const stripes = pattern(patterns.diagonal);
 * <Bar dataKey="uv" fill={{ definition: stripes }} />
 *
 * @param value the pattern to draw
 * @returns a component to use as the `definition` of a {@link RechartsFill}
 * @since 3.11
 */
export function pattern(value: RechartsPattern): ComponentType<RechartsFillDefinitionProps> {
  function PatternDefinition({ id, color, bounds }: RechartsFillDefinitionProps) {
    const theme = useRechartsTheme();
    const { width, height, rotation } = value;
    const tileScale = getTileScale(bounds, Math.max(width, height));
    const textureColor = value.color ?? getEffectivePageBackground(theme) ?? '#fff';
    const transforms: Array<string> = [];
    if (rotation != null && rotation !== 0) {
      transforms.push(`rotate(${rotation})`);
    }
    if (tileScale !== 1) {
      transforms.push(`scale(${tileScale})`);
    }
    const paths = typeof value.path === 'string' ? [value.path] : value.path;
    const isStroked = value.strokeWidth != null;
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
        <g opacity={value.opacity ?? DEFAULT_PATTERN_OPACITY}>
          {paths.map(d => (
            <path
              key={d}
              d={d}
              fill={isStroked ? 'none' : textureColor}
              stroke={isStroked ? textureColor : 'none'}
              strokeWidth={value.strokeWidth}
            />
          ))}
        </g>
      </pattern>
    );
  }
  return PatternDefinition;
}

/**
 * Turns a {@link RechartsLinearGradient} into a fill definition. Stops without a color use the base color.
 *
 * Call it outside of components, so that the definition stays the same between renders.
 *
 * @example
 * const fade = linearGradient(gradients.fadeDown);
 * <Bar dataKey="uv" fill={{ definition: fade }} />
 *
 * @param gradient the gradient to draw
 * @returns a component to use as the `definition` of a {@link RechartsFill}
 * @since 3.11
 */
export function linearGradient(gradient: RechartsLinearGradient): ComponentType<RechartsFillDefinitionProps> {
  function LinearGradientDefinition({ id, color }: RechartsFillDefinitionProps) {
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
  return LinearGradientDefinition;
}
