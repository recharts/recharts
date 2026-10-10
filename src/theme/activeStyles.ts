/**
 * @fileOverview
 * Graphical items highlight the active data point with an active representation:
 * `activeDot` in Line, Area, and Radar, `activeBar` in Bar,
 * and `activeShape` in Pie, Scatter, RadialBar, and Funnel.
 * This file decides when the `active` styles of a theme apply to it.
 * All graphical items follow the same rules.
 *
 * The rules are the same as in `dataEntryStyles.ts`: theme styles are a coherent set,
 * and they never mix with user-provided colors. Other style properties
 * (opacities, `strokeWidth`, `strokeDasharray`) merge with the theme field by field.
 *
 * On top of that, the theme only styles what Recharts renders by default.
 * A custom shape (a function or a React element) has all the control, and it receives no theme active styles.
 */

import { isValidElement, useMemo } from 'react';
import { GraphicalItemStyle, RechartsTheme, Styles2D } from './RechartsTheme';
import { useRechartsTheme } from './RechartsThemeContext';
import { hasOwnColors } from './dataEntryStyles';

/**
 * Merges the `active` theme styles with user-provided styles.
 *
 * @param activeStyle `active` slice of the graphical item theme
 * @param ownStyles styles provided by the user: props of graphical item, active shape object, data entry, or Cell props
 * @returns theme styles to apply to the active representation, without the ones that `ownStyles` override.
 * Undefined if `ownStyles` have their own colors, or if there is nothing to apply.
 */
export function resolveThemedActiveStyles(activeStyle: Styles2D | undefined, ownStyles: unknown): Styles2D | undefined {
  if (activeStyle == null || hasOwnColors(ownStyles)) {
    return undefined;
  }
  if (ownStyles == null || typeof ownStyles !== 'object') {
    return activeStyle;
  }
  const { fillOpacity, strokeOpacity, strokeWidth, strokeDasharray }: Styles2D = ownStyles;
  if (fillOpacity == null && strokeOpacity == null && strokeWidth == null && strokeDasharray == null) {
    return activeStyle;
  }
  const result: Styles2D = {};
  if (activeStyle.fill != null) {
    result.fill = activeStyle.fill;
  }
  if (activeStyle.stroke != null) {
    result.stroke = activeStyle.stroke;
  }
  if (fillOpacity == null && activeStyle.fillOpacity != null) {
    result.fillOpacity = activeStyle.fillOpacity;
  }
  if (strokeOpacity == null && activeStyle.strokeOpacity != null) {
    result.strokeOpacity = activeStyle.strokeOpacity;
  }
  if (strokeWidth == null && activeStyle.strokeWidth != null) {
    result.strokeWidth = activeStyle.strokeWidth;
  }
  if (strokeDasharray == null && activeStyle.strokeDasharray != null) {
    result.strokeDasharray = activeStyle.strokeDasharray;
  }
  return Object.keys(result).length > 0 ? result : undefined;
}

/**
 * Returns referentially stable {@link resolveThemedActiveStyles} of a graphical item,
 * or undefined if there is no active theme, or the theme does not define `active` styles.
 *
 * @param themeSelector selects the theme slice of this graphical item
 * @param explicitProps props as provided by the user, before merging with theme or defaults
 */
export function useThemedActiveStyles(
  themeSelector: (theme: RechartsTheme) => GraphicalItemStyle | undefined,
  explicitProps: Styles2D,
): Styles2D | undefined {
  const theme = useRechartsTheme();
  const activeStyle = theme == null ? undefined : themeSelector(theme)?.active;
  const { fill, fillOpacity, stroke, strokeOpacity, strokeWidth, strokeDasharray } = explicitProps;
  return useMemo(
    () =>
      resolveThemedActiveStyles(activeStyle, {
        fill,
        fillOpacity,
        stroke,
        strokeOpacity,
        strokeWidth,
        strokeDasharray,
      }),
    [activeStyle, fill, fillOpacity, stroke, strokeOpacity, strokeWidth, strokeDasharray],
  );
}

/**
 * Returns the theme styles for a single active representation, or undefined if the theme does not apply to it.
 *
 * The theme applies if Recharts renders the default shape: the option is `true`, or an object without its own colors.
 * A custom shape (function or React element), an object with its own colors,
 * and data entries with their own colors all ignore the theme.
 *
 * @param activeOption the `activeDot`, `activeShape`, or `activeBar` prop
 * @param themedActiveStyles `active` slice of the graphical item theme, or the result of {@link resolveThemedActiveStyles}
 * @param entries data entry and its Cell props, if this graphical item renders one shape per data entry
 */
export function getActiveStyleOverrides(
  activeOption: unknown,
  themedActiveStyles: Styles2D | undefined,
  ...entries: ReadonlyArray<unknown>
): Styles2D | undefined {
  let result: Styles2D | undefined;
  if (activeOption === true) {
    result = themedActiveStyles;
  } else if (activeOption != null && typeof activeOption === 'object' && !isValidElement(activeOption)) {
    result = resolveThemedActiveStyles(themedActiveStyles, activeOption);
  }
  return entries.reduce<Styles2D | undefined>(resolveThemedActiveStyles, result);
}
