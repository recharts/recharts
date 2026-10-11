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
