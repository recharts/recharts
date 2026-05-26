import { useMemo } from 'react';
import type { RechartsTheme } from './RechartsTheme';
import { mergeThemeProps } from './mergeThemeProps';
import { useRechartsThemeDefaults } from './useRechartsThemeDefaults';
import type { DisallowExtraKeys, RequiresDefaultProps } from '../util/resolveDefaultProps';
import { resolveDefaultProps } from '../util/resolveDefaultProps';

export function useRechartsResolvedProps<TProps extends object, TDefaults extends Partial<TProps>>(
  realProps: TProps,
  defaultProps: TDefaults & DisallowExtraKeys<TProps, TDefaults>,
  getComponentTheme?: (theme: RechartsTheme) => Partial<TProps> | undefined,
  getTokenTheme?: (theme: RechartsTheme, realProps: TProps) => Partial<TProps> | undefined,
): RequiresDefaultProps<TProps, TDefaults> {
  const themeDefaults = useRechartsThemeDefaults(realProps, getComponentTheme, getTokenTheme);

  const defaultPropsWithThemeApplied = useMemo(
    () => mergeThemeProps(defaultProps, themeDefaults) ?? defaultProps,
    [defaultProps, themeDefaults],
  );

  return useMemo(
    () =>
      /*
       * Theme defaults may add more optional keys than the original component
       * defaultProps object declares. `resolveDefaultProps` only needs the
       * original default-prop contract for requiredness, so keep the type escape
       * hatch localized here instead of spreading assertions into each component.
       */
      resolveDefaultProps<TProps, TDefaults>(
        realProps,
        defaultPropsWithThemeApplied as TDefaults & DisallowExtraKeys<TProps, TDefaults>,
      ) as RequiresDefaultProps<TProps, TDefaults>,
    [defaultPropsWithThemeApplied, realProps],
  );
}
