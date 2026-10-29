import * as React from 'react';
import { ComponentType, createContext, useContext, useMemo } from 'react';
import { RechartsFill, RechartsFillDefinitionProps, RechartsLinearGradient, RechartsPattern } from './RechartsFill';
import type { GraphicalItemStyle, RechartsTheme } from '../theme/RechartsTheme';
import { useRechartsTheme } from '../theme/RechartsThemeContext';
import { getEffectivePageBackground } from '../theme/pageBackground';

const DEFAULT_PATTERN_OPACITY = 0.5;

/**
 * How many pattern tiles fit across a legend icon.
 */
const LEGEND_ICON_TILES = 3;

/**
 * Width of the legend icon that a fill definition renders in, in the icon's own units.
 * Undefined when the definition renders for the chart shapes.
 * Patterns use it to scale their tiles down, so that a few of them fit into the small icon.
 */
export const LegendIconSizeContext = createContext<number | undefined>(undefined);

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
  function PatternDefinition({ id, color }: RechartsFillDefinitionProps) {
    const theme = useRechartsTheme();
    const legendIconSize = useContext(LegendIconSizeContext);
    const { width, height, rotation } = value;
    const textureColor = value.color ?? getEffectivePageBackground(theme) ?? '#fff';
    const transforms: Array<string> = [];
    if (rotation != null && rotation !== 0) {
      transforms.push(`rotate(${rotation})`);
    }
    if (legendIconSize != null) {
      transforms.push(`scale(${legendIconSize / LEGEND_ICON_TILES / width})`);
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

/**
 * Splits the `fill` prop of a graphical item into the base color, and the fill object if there is one.
 * A fill object without `color` gives no color of its own, so the item keeps the theme colors.
 * @param fill the `fill` prop
 */
export function splitFill(fill: string | RechartsFill | undefined): {
  color: string | undefined;
  fillObject: RechartsFill | undefined;
} {
  if (fill == null || typeof fill === 'string') {
    return { color: fill, fillObject: undefined };
  }
  return { color: fill.color, fillObject: fill };
}

/**
 * Returns the fill object a graphical item paints with: its own, or the `fillDefinition` of its theme entry.
 * The theme selector leaves the definition out when the item sets its own colors.
 * @param fillObject the fill object from props
 * @param themeSelector selects the theme entry of the graphical item
 */
export function useSeriesFillObject(
  fillObject: RechartsFill | undefined,
  themeSelector: (theme: RechartsTheme) => GraphicalItemStyle | undefined,
): RechartsFill | undefined {
  const theme = useRechartsTheme();
  const themeFillDefinition = theme == null ? undefined : themeSelector(theme)?.fillDefinition;
  return useMemo(
    () => fillObject ?? (themeFillDefinition == null ? undefined : { definition: themeFillDefinition }),
    [fillObject, themeFillDefinition],
  );
}

/**
 * DOM id of the fill definition of a graphical item.
 * @param id id of the graphical item
 */
export function getSeriesFillId(id: string): string {
  return `${id}-fill`;
}

/**
 * Renders the definition of a fill object. Render it inside `<defs>`.
 */
export function FillObjectDefinition({
  id,
  fillObject,
  color,
}: {
  id: string;
  fillObject: RechartsFill;
  color: string | undefined;
}) {
  const Definition = fillObject.definition;
  return <Definition id={id} color={color} />;
}
