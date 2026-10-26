/**
 * @fileOverview
 * Users can style graphical items with explicit props (`<Bar fill="red" />`),
 * and graphical items that render one shape per data point (Bar, Pie, Scatter, ...)
 * also let users style individual shapes by putting presentation properties
 * directly in the data array.
 *
 * The theme styles are designed as a coherent set: fill, stroke, opacity and
 * so on are chosen to look good together. If we mixed a user-provided `fill`
 * with a theme-provided `stroke`, the result would be a shape with two
 * unrelated colors. So as soon as a graphical item or a data entry defines its own
 * `fill` or `stroke`, it ignores the theme styles completely and renders
 * with only the explicit props of the graphical item and its own styles.
 *
 * Other style properties (opacities, `strokeWidth`, `strokeDasharray`) do not
 * bring a color of their own, so they merge with the theme field by field.
 */

import { useMemo } from 'react';
import { Styles2D } from './RechartsTheme';
import { useRechartsTheme } from './RechartsThemeContext';
import { isDataAttribute, isSvgElementPropKey, svgPropertiesNoEventsFromUnknown } from '../util/svgPropertiesNoEvents';

type ThemeableStyleKey = keyof Styles2D;

/**
 * Explicit style props of a graphical item, with every themeable key present
 * (possibly as `undefined`). Spreading this object over themed props removes all
 * theme-provided styles while keeping the ones the user set on the graphical item.
 */
export type UnthemedStyles = { [K in ThemeableStyleKey]: Styles2D[K] | undefined };

/**
 * Returns true if the graphical item props or the data entry define their own `fill` or `stroke`.
 * Such items and entries ignore the theme completely.
 * @param entry props of graphical item, data entry, or anything else
 */
export function hasOwnColors(entry: unknown): boolean {
  if (entry == null || typeof entry !== 'object') {
    return false;
  }
  const { fill, stroke } = entry as Partial<Record<ThemeableStyleKey, unknown>>;
  return fill != null || stroke != null;
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
 * Picks all themeable style keys from explicit props, including the undefined ones.
 * @param explicitProps props as provided by the user, before merging with theme or defaults
 */
export function getUnthemedStyles(explicitProps: Styles2D): UnthemedStyles {
  return {
    fill: explicitProps.fill,
    fillOpacity: explicitProps.fillOpacity,
    stroke: explicitProps.stroke,
    strokeOpacity: explicitProps.strokeOpacity,
    strokeWidth: explicitProps.strokeWidth,
    strokeDasharray: explicitProps.strokeDasharray,
  };
}

/**
 * Resolves styles of a data entry that ignores the theme:
 * the entry's own styles win, and the explicit props of the graphical item fill in the rest.
 * @param entry data entry
 * @param unthemedStyles result of {@link getUnthemedStyles}
 */
export function getOwnStylesWithFallback(entry: Styles2D, unthemedStyles: UnthemedStyles): UnthemedStyles {
  return {
    fill: entry.fill ?? unthemedStyles.fill,
    fillOpacity: entry.fillOpacity ?? unthemedStyles.fillOpacity,
    stroke: entry.stroke ?? unthemedStyles.stroke,
    strokeOpacity: entry.strokeOpacity ?? unthemedStyles.strokeOpacity,
    strokeWidth: entry.strokeWidth ?? unthemedStyles.strokeWidth,
    strokeDasharray: entry.strokeDasharray ?? unthemedStyles.strokeDasharray,
  };
}

/**
 * Returns referentially stable {@link getUnthemedStyles} if a theme is active, or undefined without a theme.
 * Without a theme, graphical items keep their legacy behaviour and there is nothing to override.
 * @param explicitProps props as provided by the user, before merging with theme or defaults
 */
export function useUnthemedStyles(explicitProps: Styles2D): UnthemedStyles | undefined {
  const hasTheme = useRechartsTheme() != null;
  const { fill, fillOpacity, stroke, strokeOpacity, strokeWidth, strokeDasharray } = explicitProps;
  return useMemo(
    () =>
      hasTheme
        ? getUnthemedStyles({ fill, fillOpacity, stroke, strokeOpacity, strokeWidth, strokeDasharray })
        : undefined,
    [hasTheme, fill, fillOpacity, stroke, strokeOpacity, strokeWidth, strokeDasharray],
  );
}

/**
 * Returns the style overrides for a single data entry.
 * If the entry has its own colors, returns the unthemed styles which remove the theme from this entry.
 * Otherwise returns undefined, and the entry keeps the theme styles.
 *
 * @param entry data entry
 * @param unthemedStyles result of {@link getUnthemedStyles}, or undefined if there is no active theme
 */
export function getEntryStyleOverrides(
  entry: unknown,
  unthemedStyles: UnthemedStyles | undefined,
): UnthemedStyles | undefined {
  if (unthemedStyles == null || !hasOwnColors(entry)) {
    return undefined;
  }
  return unthemedStyles;
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
 * The color a graphical item renders a data entry with: its fill, or its stroke when it has no fill.
 * An inline `style.fill` or `style.stroke` of the entry wins over its `fill` or `stroke`, the same as in the browser.
 * Follows the order in which graphical items spread the styles: the entry colors win over the graphical item colors,
 * and with a theme, an entry with its own colors ignores the theme colors.
 * Tooltip and Legend use this so that they show the same color as the shape.
 *
 * @param entry data entry, with the props of its `Cell` if there is one
 * @param fill fill of the graphical item, theme included
 * @param stroke stroke of the graphical item, theme included
 * @param unthemedStyles result of {@link useUnthemedStyles}, or undefined without a theme
 */
export function getEntryColor(
  entry: unknown,
  fill: string | undefined,
  stroke: string | undefined,
  unthemedStyles: UnthemedStyles | undefined,
): string | undefined {
  const itemStyles = getEntryStyleOverrides(entry, unthemedStyles) ?? { fill, stroke };
  const entryFill = getStringProp(entry, 'fill');
  const entryStroke = getStringProp(entry, 'stroke');
  // An inline style wins over the presentation attribute, so the shape paints with `style.fill` and `style.stroke`.
  const entryStyle = entry != null && typeof entry === 'object' && 'style' in entry ? entry.style : undefined;
  const entryStyleFill = getStringProp(entryStyle, 'fill');
  const entryStyleStroke = getStringProp(entryStyle, 'stroke');
  if (entryStyleFill != null) {
    return entryStyleFill;
  }
  if (entryFill != null) {
    return entryFill;
  }
  if (itemStyles.fill != null) {
    return itemStyles.fill;
  }
  if (entryStyleStroke != null) {
    return entryStyleStroke;
  }
  if (entryStroke != null) {
    return entryStroke;
  }
  return itemStyles.stroke;
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
