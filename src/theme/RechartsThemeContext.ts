import { createContext, useContext } from 'react';
import { RechartsTheme } from './RechartsTheme';
import { resolvePartialDefaultProps } from '../util/resolveDefaultProps';

const RechartsThemeContext = createContext<RechartsTheme | undefined>(undefined);

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
export const useRechartsTheme = (): RechartsTheme | undefined => useContext(RechartsThemeContext);

const noStyles = {};

/**
 * Backwards compatible hook for theming.
 *
 * - If the selector returns a theme slice, it is merged with `explicitProps` and acts as defaults.
 * - If no matching theme slice is present, no props are returned - this allows us to set an "empty theme" with completely unstyled chart
 *   This preserves the 2.x defaults for existing charts.
 *
 * `themeSelector` selects the subset of theme which this component is interested in.
 * The selector is not called in case the theme is undefined.
 *
 * @experimental
 */
export const useBackwardsCompatibleTheme = <Props extends object>(
  themeSelector: (theme: RechartsTheme) => Partial<Props> | undefined,
  explicitProps: Props,
  legacyDefaults: Partial<Props>,
): Partial<Props> => {
  const theme = useRechartsTheme();
  if (theme == null) {
    /*
     * Theme is not set at all - this means lack of any `RechartsThemeProvider` (or it was given null/undefined).
     * This is the 2.x path - each component sets its own defaults. Let them!
     */
    return resolvePartialDefaultProps(explicitProps, legacyDefaults);
  }
  const slice = themeSelector(theme);
  if (slice == null) {
    /*
     * In this case the theme exists but the particular slice does not.
     * This could be that a chunk of the theme is not defined,
     * or it could be the emptyTheme.
     * Here we see the new theme so let's not mix it with old defaults.
     */
    return noStyles;
  }
  /*
   * And finally a mix of the theme and explicit props.
   * Old default styles don't apply here either.
   */
  return resolvePartialDefaultProps(explicitProps, slice);
};
