import { RechartsTheme } from './RechartsTheme';
import { resolvePartialDefaultProps } from '../util/resolveDefaultProps';
import { useRechartsTheme } from './RechartsThemeContext';

/**
 * Backwards compatible hook for theming.
 *
 * - If the selector returns a theme slice, it is merged with `explicitProps` and acts as defaults.
 * - If no matching theme slice is present, the explicit props are returned without applying legacy defaults.
 *   This allows an empty theme to leave unspecified styles unstyled while preserving user props.
 *
 * `themeSelector` selects the subset of theme which this component is interested in.
 * The selector is not called in case the theme is undefined.
 *
 * @deprecated this hook only exists for backwards compatibility and we will remove it in 4.x. Use {@link useRechartsTheme} instead.
 * @experimental
 */
export const useBackwardsCompatibleTheme = <Props extends object>(
  themeSelector: (theme: RechartsTheme) => Partial<Props> | undefined,
  explicitProps: Props,
  legacyDefaults: Partial<Props> | undefined,
): Partial<Props> => {
  const theme = useRechartsTheme();
  if (theme == null) {
    if (legacyDefaults == null) {
      /*
       * Theme is not set at all, and the parent component has no defaults.
       * We have nothing else to do other than returning the props as-is.
       */
      return explicitProps;
    }
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
     * Here we see the new theme so let's not mix it with old defaults, but preserve explicit props.
     */
    return explicitProps;
  }
  /*
   * And finally a mix of the theme and explicit props.
   * Old default styles don't apply here either.
   */
  return resolvePartialDefaultProps(explicitProps, slice);
};
