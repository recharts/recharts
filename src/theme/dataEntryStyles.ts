/**
 * @fileOverview
 * Graphical items that render one shape per data point (Bar, Pie, Scatter, ...)
 * let users style individual shapes by putting presentation properties
 * directly in the data array, or by using `<Cell>`.
 *
 * The theme styles are designed as a coherent set: fill, stroke, opacity and
 * so on are chosen to look good together. If we mixed a user-provided `fill`
 * with a theme-provided `stroke`, the result would be a shape with two
 * unrelated colors. So as soon as a data entry defines any of the themeable
 * style properties, that entry ignores the theme styles completely and renders
 * with only the explicit props of the graphical item and its own styles.
 */

import { useMemo } from 'react';
import { Styles2D } from './RechartsTheme';
import { useRechartsTheme } from './RechartsThemeContext';

type ThemeableStyleKey = keyof Styles2D;

const themeableStyleKeys: ReadonlyArray<ThemeableStyleKey> = [
  'fill',
  'fillOpacity',
  'stroke',
  'strokeOpacity',
  'strokeWidth',
  'strokeDasharray',
];

/**
 * Explicit style props of a graphical item, with every themeable key present
 * (possibly as `undefined`). Spreading this object over themed props removes all
 * theme-provided styles while keeping the ones the user set on the graphical item.
 */
export type UnthemedStyles = { [K in ThemeableStyleKey]: Styles2D[K] | undefined };

/**
 * Returns true if the data entry (or Cell props) defines at least one themeable style property.
 * @param entry data entry, Cell props, or anything else
 */
export function hasOwnStyles(entry: unknown): boolean {
  if (entry == null || typeof entry !== 'object') {
    return false;
  }
  return themeableStyleKeys.some(key => (entry as Partial<Record<ThemeableStyleKey, unknown>>)[key] != null);
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
 * @param entry data entry, or Cell props
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
 * If the entry has its own styles, returns the unthemed styles which remove the theme from this entry.
 * Otherwise returns undefined, and the entry keeps the theme styles.
 *
 * @param entry data entry, or Cell props
 * @param unthemedStyles result of {@link getUnthemedStyles}, or undefined if there is no active theme
 */
export function getEntryStyleOverrides(
  entry: unknown,
  unthemedStyles: UnthemedStyles | undefined,
): UnthemedStyles | undefined {
  if (unthemedStyles == null || !hasOwnStyles(entry)) {
    return undefined;
  }
  return unthemedStyles;
}
