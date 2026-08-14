import { createContext, useContext } from 'react';
import { RechartsTheme, Styles2D } from './RechartsTheme';
import { legacyTheme } from './legacyTheme';
import { resolveDefaultProps } from '../util/resolveDefaultProps';

const RechartsThemeContext = createContext<RechartsTheme>(legacyTheme);

/**
 * Applies the provided theme to all charts in the children tree.
 *
 * @experimental
 */
export const RechartsThemeProvider = RechartsThemeContext.Provider;

/**
 * Reads the currently active theme in the children tree.
 * Returns the theme as-is, without modifications and without defaults.
 *
 * Can return undefined if used outside of Recharts context, or if no theme is set.
 *
 *  @experimental
 */
export const useRechartsTheme = (): RechartsTheme => useContext(RechartsThemeContext);

/**
 * Backwards compatible hook for theming.
 *
 * - If a theme is set:
 *    - merges the `explicitProps` with the theme context
 *    - the theme acts as defaults
 *    - ignores `legacyDefaults` completely
 * - If a theme is not set:
 *   - then returns `explicitProps` merged with `legacyDefaults`
 *   - this is intended for backwards compatibility with existing charts that rely on the 2.x defaults
 *
 * `themeSelector` selects the subset of theme which this component is interested in.
 * The selector is not called in case the theme is undefined.
 *
 * @experimental
 */
export const useBackwardsCompatibleTheme = (
  themeSelector: (theme: RechartsTheme) => Styles2D | undefined,
  explicitProps: Styles2D,
  legacyDefaults: Styles2D,
): Styles2D => {
  const theme = useRechartsTheme();
  if (theme == null) {
    return resolveDefaultProps(explicitProps, legacyDefaults);
  }
  const slice = themeSelector(theme);
  if (slice == null) {
    return resolveDefaultProps(explicitProps, legacyDefaults);
  }
  return resolveDefaultProps(explicitProps, slice);
};
