/**
 * @fileOverview
 * Users can style graphical items with explicit props (`<Bar fill="red" />`),
 * and graphical items that render one shape per data point (Bar, Pie, Scatter, ...)
 * also let users style individual shapes by putting presentation properties
 * directly in the data array.
 *
 * The theme colors are designed as a pair: the `fill` and `stroke` are chosen to look good together.
 * If we mixed a user-provided `fill` with a theme-provided `stroke`, the result would be a shape with two
 * unrelated colors. So as soon as a graphical item or a data entry defines its own
 * `fill` or `stroke`, it drops the theme `fill` and `stroke` together,
 * and takes its colors only from its own styles and the explicit props of the graphical item.
 *
 * Other style properties (opacities, `strokeWidth`, `strokeDasharray`) do not
 * bring a color of their own, so they merge with the theme field by field.
 * The `active` and `label` styles of the theme keep applying too.
 */

import { useMemo } from 'react';
import { GraphicalItemStyle, Styles2D } from './RechartsTheme';
import { useRechartsTheme } from './RechartsThemeContext';
import { isDataAttribute, isSvgElementPropKey, svgPropertiesNoEventsFromUnknown } from '../util/svgPropertiesNoEvents';

/**
 * Explicit `fill` and `stroke` props of a graphical item, both keys present (possibly as `undefined`).
 * Spreading this object over themed props removes the theme colors
 * while keeping the colors the user set on the graphical item.
 */
export type UnthemedColors = { fill: string | undefined; stroke: string | undefined };

/**
 * Returns true if the graphical item props or the data entry define their own `fill` or `stroke`.
 * Such items and entries drop the theme `fill` and `stroke`, and keep the rest of the theme.
 * @param entry props of graphical item, data entry, or anything else
 */
export function hasOwnColors(entry: unknown): boolean {
  if (entry == null || typeof entry !== 'object') {
    return false;
  }
  return Reflect.get(entry, 'fill') != null || Reflect.get(entry, 'stroke') != null;
}

type StyleWithoutColors = Omit<GraphicalItemStyle, 'fill' | 'stroke'>;

const withoutColorsCache = new WeakMap<GraphicalItemStyle, StyleWithoutColors>();

/**
 * Returns a copy of the style without its `fill` and `stroke`. Every other key, `active` and `label` included, stays.
 * The result is cached, so the same style always returns the same object. That keeps theme selectors stable.
 * @param style theme style, for example an entry of `graphicalItems`
 */
export function withoutColors(style: GraphicalItemStyle): StyleWithoutColors;
export function withoutColors(style: GraphicalItemStyle | undefined): StyleWithoutColors | undefined;
export function withoutColors(style: GraphicalItemStyle | undefined): StyleWithoutColors | undefined {
  if (style == null) {
    return undefined;
  }
  const cached = withoutColorsCache.get(style);
  if (cached != null) {
    return cached;
  }
  const { fill, stroke, ...rest } = style;
  withoutColorsCache.set(style, rest);
  return rest;
}

/**
 * Picks the themeable style properties that the data entry defines, and leaves out the undefined ones.
 * @param entry data entry
 */
export function getOwnStyles(entry: Styles2D | null | undefined): Styles2D {
  const result: Styles2D = {};
  if (entry == null) {
    return result;
  }
  if (entry.fill != null) {
    result.fill = entry.fill;
  }
  if (entry.fillOpacity != null) {
    result.fillOpacity = entry.fillOpacity;
  }
  if (entry.stroke != null) {
    result.stroke = entry.stroke;
  }
  if (entry.strokeOpacity != null) {
    result.strokeOpacity = entry.strokeOpacity;
  }
  if (entry.strokeWidth != null) {
    result.strokeWidth = entry.strokeWidth;
  }
  if (entry.strokeDasharray != null) {
    result.strokeDasharray = entry.strokeDasharray;
  }
  return result;
}

/**
 * Picks the `fill` and `stroke` from explicit props, including the undefined ones.
 * @param explicitProps props as provided by the user, before merging with theme or defaults
 */
export function getUnthemedColors(explicitProps: Styles2D): UnthemedColors {
  return { fill: explicitProps.fill, stroke: explicitProps.stroke };
}

/**
 * Returns referentially stable {@link getUnthemedColors} if a theme is active, or undefined without a theme.
 * Without a theme, graphical items keep their legacy behaviour and there is nothing to override.
 * @param explicitProps props as provided by the user, before merging with theme or defaults
 */
export function useUnthemedColors(explicitProps: Styles2D): UnthemedColors | undefined {
  const hasTheme = useRechartsTheme() != null;
  const { fill, stroke } = explicitProps;
  return useMemo(() => (hasTheme ? getUnthemedColors({ fill, stroke }) : undefined), [hasTheme, fill, stroke]);
}

/**
 * Returns the color overrides for a single data entry.
 * If the entry has its own colors, returns the unthemed colors which remove the theme colors from this entry.
 * Otherwise returns undefined, and the entry keeps the theme colors.
 * Either way, the entry keeps the other theme styles.
 *
 * @param entry data entry
 * @param unthemedColors result of {@link getUnthemedColors}, or undefined if there is no active theme
 */
export function getEntryStyleOverrides(
  entry: unknown,
  unthemedColors: UnthemedColors | undefined,
): UnthemedColors | undefined {
  if (unthemedColors == null || !hasOwnColors(entry)) {
    return undefined;
  }
  return unthemedColors;
}

/**
 * Picks the valid SVG properties of a data entry, without `id` so that rendered elements do not get duplicate DOM ids,
 * and without the React `ref` and `key`.
 * The raw entry, `id` included, stays available as `payload`.
 * Graphical items spread these after their own props, so the data entry wins.
 *
 * @param entry data entry
 */
export function getEntrySvgProps(entry: unknown): Record<string, unknown> {
  const { id, ref, key, ...props } = svgPropertiesNoEventsFromUnknown(entry) ?? {};
  return props;
}

function getStringProp(obj: unknown, key: 'fill' | 'stroke'): string | undefined {
  if (obj == null || typeof obj !== 'object') {
    return undefined;
  }
  const value: unknown = Reflect.get(obj, key);
  return typeof value === 'string' ? value : undefined;
}

/**
 * The fill and stroke a graphical item renders a data entry with.
 * An inline `style.fill` or `style.stroke` of the entry wins over its `fill` or `stroke`, the same as in the browser.
 * Follows the order in which graphical items spread the styles: the entry colors win over the graphical item colors,
 * and with a theme, an entry with its own colors drops the theme colors.
 *
 * @param entry data entry, with the props of its `Cell` if there is one
 * @param fill fill of the graphical item, theme included
 * @param stroke stroke of the graphical item, theme included
 * @param unthemedColors result of {@link useUnthemedColors}, or undefined without a theme
 */
export function getEntryShapeColors(
  entry: unknown,
  fill: string | undefined,
  stroke: string | undefined,
  unthemedColors: UnthemedColors | undefined,
): { fill: string | undefined; stroke: string | undefined } {
  const itemStyles = getEntryStyleOverrides(entry, unthemedColors) ?? { fill, stroke };
  // An inline style wins over the presentation attribute, so the shape paints with `style.fill` and `style.stroke`.
  const entryStyle = entry != null && typeof entry === 'object' && 'style' in entry ? entry.style : undefined;
  return {
    fill: getStringProp(entryStyle, 'fill') ?? getStringProp(entry, 'fill') ?? itemStyles.fill,
    stroke: getStringProp(entryStyle, 'stroke') ?? getStringProp(entry, 'stroke') ?? itemStyles.stroke,
  };
}

/**
 * The color a graphical item renders a data entry with: its fill, or its stroke when it has no fill.
 * Tooltip and Legend use this so that they show the same color as the shape.
 *
 * @param entry data entry, with the props of its `Cell` if there is one
 * @param fill fill of the graphical item, theme included
 * @param stroke stroke of the graphical item, theme included
 * @param unthemedColors result of {@link useUnthemedColors}, or undefined without a theme
 * @see getEntryShapeColors
 */
export function getEntryColor(
  entry: unknown,
  fill: string | undefined,
  stroke: string | undefined,
  unthemedColors: UnthemedColors | undefined,
): string | undefined {
  const colors = getEntryShapeColors(entry, fill, stroke, unthemedColors);
  return colors.fill ?? colors.stroke;
}

/**
 * Removes the SVG properties of a data entry (`stroke`, `opacity`, `style`, `data-*`, `id`, ...), and keeps `name`.
 * Backgrounds are not the graphical item, so they do not take the styles of the data entry.
 * Custom background shapes still receive the other keys of the entry, and the entry itself as `payload`.
 *
 * @param entry data entry, or the item computed from it
 */
export function omitEntrySvgProps(entry: object): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(entry).filter(([key]) => key === 'name' || (!isSvgElementPropKey(key) && !isDataAttribute(key))),
  );
}
