/**
 * @fileOverview
 * Graphical items highlight the active data point with an active representation:
 * `activeDot` in Line, Area, and Radar, `activeBar` in Bar,
 * and `activeShape` in Pie, Scatter, RadialBar, and Funnel.
 * This file decides when the `active` styles of a theme apply to it.
 * All graphical items follow the same rules.
 *
 * The theme designs the `active` colors to go with its own series colors: for example a background fill
 * with a series-color stroke. They do not fit a shape that has colors of its own.
 * So the theme active `fill` and `stroke` only apply to shapes that take their colors from the theme.
 * If the graphical item props, or the data entry, set their own `fill` or `stroke`,
 * the active shape drops the theme active `fill` and `stroke` together, and keeps its own colors.
 * The same goes for an active representation object (such as an `activeDot` object) with its own colors.
 *
 * Other active style properties (opacities, `strokeWidth`, `strokeDasharray`) do not bring a color,
 * so they always apply in the active state. Only the active representation object overrides them, field by field.
 *
 * On top of that, the theme only styles what Recharts renders by default.
 * A custom shape (a function or a React element) has all the control, and it receives no theme active styles.
 */

import { isValidElement } from 'react';
import { RechartsTheme } from './RechartsTheme';
import { ColorGraphicalItemStyle, ColorStyles2D } from './themeFill';
import { useRechartsTheme } from './RechartsThemeContext';
import { hasOwnColors, withoutColors } from './dataEntryStyles';

/**
 * Merges the `active` theme styles with the styles of the active representation.
 *
 * @param activeStyle `active` slice of the graphical item theme
 * @param ownStyles styles of the active representation, such as an `activeDot` object
 * @returns theme styles to apply to the active representation, without the ones that `ownStyles` override.
 * Undefined if there is nothing to apply.
 */
export function resolveThemedActiveStyles(
  activeStyle: ColorStyles2D | undefined,
  ownStyles: unknown,
): ColorStyles2D | undefined {
  if (activeStyle == null || ownStyles == null || typeof ownStyles !== 'object') {
    return activeStyle;
  }
  const { fillOpacity, strokeOpacity, strokeWidth, strokeDasharray }: ColorStyles2D = ownStyles;
  const themeStyles = hasOwnColors(ownStyles) ? withoutColors(activeStyle) : activeStyle;
  if (fillOpacity == null && strokeOpacity == null && strokeWidth == null && strokeDasharray == null) {
    return Object.keys(themeStyles).length > 0 ? themeStyles : undefined;
  }
  const result: ColorStyles2D = { ...themeStyles };
  if (fillOpacity != null) {
    delete result.fillOpacity;
  }
  if (strokeOpacity != null) {
    delete result.strokeOpacity;
  }
  if (strokeWidth != null) {
    delete result.strokeWidth;
  }
  if (strokeDasharray != null) {
    delete result.strokeDasharray;
  }
  return Object.keys(result).length > 0 ? result : undefined;
}

/**
 * Returns the `active` theme styles of a graphical item,
 * or undefined if there is no active theme, or the theme does not define `active` styles.
 * If the graphical item sets its own `fill` or `stroke`, the result has no theme colors.
 *
 * @param themeSelector selects the theme slice of this graphical item
 * @param explicitProps props as provided by the user, before merging with theme or defaults
 */
export function useThemedActiveStyles(
  themeSelector: (theme: RechartsTheme) => ColorGraphicalItemStyle | undefined,
  explicitProps: ColorStyles2D,
): ColorStyles2D | undefined {
  const theme = useRechartsTheme();
  const activeStyle = theme == null ? undefined : themeSelector(theme)?.active;
  return hasOwnColors(explicitProps) ? withoutColors(activeStyle) : activeStyle;
}

/**
 * Returns the theme styles for a single active representation, or undefined if the theme does not apply to it.
 *
 * The theme applies if Recharts renders the default shape: the option is `true`, a predefined symbol name
 * (such as `activeDot="diamond"` or `activeShape="star"`), or an object.
 * A data entry or an object that sets its own `fill` or `stroke` drops the theme colors,
 * and keeps the other theme styles.
 * A custom shape (function or React element) ignores the theme.
 *
 * @param activeOption the `activeDot`, `activeShape`, or `activeBar` prop
 * @param themedActiveStyles result of {@link useThemedActiveStyles}, or the `active` slice of the graphical item theme
 * @param entry data entry, if this graphical item renders one shape per data entry
 */
export function getActiveStyleOverrides(
  activeOption: unknown,
  themedActiveStyles: ColorStyles2D | undefined,
  entry?: unknown,
): ColorStyles2D | undefined {
  const themeStyles = hasOwnColors(entry) ? withoutColors(themedActiveStyles) : themedActiveStyles;
  if (activeOption === true || typeof activeOption === 'string') {
    return themeStyles;
  }
  if (activeOption != null && typeof activeOption === 'object' && !isValidElement(activeOption)) {
    return resolveThemedActiveStyles(themeStyles, activeOption);
  }
  return undefined;
}
