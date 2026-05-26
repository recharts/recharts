import { useMemo } from 'react';
import type { RechartsTheme } from './RechartsTheme';
import { mergeThemeProps } from './mergeThemeProps';
import { useRechartsTheme } from './RechartsThemeProvider';

export function useRechartsThemeDefaults<TProps extends object>(
  realProps: TProps,
  getComponentTheme?: (theme: RechartsTheme) => Partial<TProps> | undefined,
  getTokenTheme?: (theme: RechartsTheme, realProps: TProps) => Partial<TProps> | undefined,
): Partial<TProps> | undefined {
  const theme = useRechartsTheme();

  return useMemo(() => {
    const tokenTheme = getTokenTheme?.(theme, realProps);
    const componentTheme = getComponentTheme?.(theme);

    return mergeThemeProps(tokenTheme, componentTheme);
  }, [getComponentTheme, getTokenTheme, realProps, theme]);
}
