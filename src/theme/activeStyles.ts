/**
 * @fileOverview
 * Graphical items highlight the active data point with an active representation:
 * `activeDot` in Line, Area, and Radar, `activeBar` in Bar,
 * and `activeShape` in Pie, Scatter, RadialBar, and Funnel.
 * This file decides when the `active` styles of a theme apply to it.
 * All graphical items follow the same rules.
 *
 * The `active` styles only apply to the active state, and the other styles only apply to the inactive state.
 * So the explicit props of a graphical item and the styles of a data entry do not change the `active` styles.
 * Only the active representation itself (such as an `activeDot` object) can override them.
 * Its own `fill` or `stroke` drops the theme active `fill` and `stroke` together, so that the colors never mix.
 * Its other style properties (opacities, `strokeWidth`, `strokeDasharray`) merge with the theme field by field.
 *
 * On top of that, the theme only styles what Recharts renders by default.
 * A custom shape (a function or a React element) has all the control, and it receives no theme active styles.
 */

import { isValidElement } from 'react';
import { GraphicalItemStyle, RechartsTheme, Styles2D } from './RechartsTheme';
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
export function resolveThemedActiveStyles(activeStyle: Styles2D | undefined, ownStyles: unknown): Styles2D | undefined {
  if (activeStyle == null || ownStyles == null || typeof ownStyles !== 'object') {
    return activeStyle;
  }
  const { fillOpacity, strokeOpacity, strokeWidth, strokeDasharray }: Styles2D = ownStyles;
  const themeStyles = hasOwnColors(ownStyles) ? withoutColors(activeStyle) : activeStyle;
  if (fillOpacity == null && strokeOpacity == null && strokeWidth == null && strokeDasharray == null) {
    return Object.keys(themeStyles).length > 0 ? themeStyles : undefined;
  }
  const result: Styles2D = { ...themeStyles };
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
 *
 * The explicit props of the graphical item do not change them, see the top of this file.
 *
 * @param themeSelector selects the theme slice of this graphical item
 */
export function useThemedActiveStyles(
  themeSelector: (theme: RechartsTheme) => GraphicalItemStyle | undefined,
): Styles2D | undefined {
  const theme = useRechartsTheme();
  return theme == null ? undefined : themeSelector(theme)?.active;
}

/**
 * Returns the theme styles for a single active representation, or undefined if the theme does not apply to it.
 *
 * The theme applies if Recharts renders the default shape: the option is `true`, a predefined symbol name
 * (such as `activeDot="diamond"` or `activeShape="star"`), or an object.
 * An object that sets its own `fill` or `stroke` drops the theme colors, and keeps the other theme styles.
 * A custom shape (function or React element) ignores the theme.
 *
 * @param activeOption the `activeDot`, `activeShape`, or `activeBar` prop
 * @param themedActiveStyles `active` slice of the graphical item theme
 */
export function getActiveStyleOverrides(
  activeOption: unknown,
  themedActiveStyles: Styles2D | undefined,
): Styles2D | undefined {
  if (activeOption === true || typeof activeOption === 'string') {
    return themedActiveStyles;
  }
  if (activeOption != null && typeof activeOption === 'object' && !isValidElement(activeOption)) {
    return resolveThemedActiveStyles(themedActiveStyles, activeOption);
  }
  return undefined;
}
