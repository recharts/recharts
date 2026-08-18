import React from 'react';
import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { RechartsTheme, RechartsThemeProvider } from '../../src';
import { useBackwardsCompatibleTheme } from '../../src/theme/useBackwardsCompatibleTheme';

type Props = {
  color?: string;
  size?: number;
};

const theme: RechartsTheme = {
  graphicalItems: [],
  axis: {
    stroke: 'black',
  },
};

describe('useBackwardsCompatibleTheme', () => {
  it('returns explicit props when no theme or legacy defaults are provided', () => {
    const explicitProps: Props = { color: 'red', size: 10 };

    const { result } = renderHook(() => useBackwardsCompatibleTheme(() => undefined, explicitProps, undefined));

    expect(result.current).toBe(explicitProps);
  });

  it('applies legacy defaults when no theme is provided', () => {
    const explicitProps: Props = { color: 'red' };
    const legacyDefaults: Partial<Props> = { color: 'blue', size: 10 };

    const { result } = renderHook(() => useBackwardsCompatibleTheme(() => undefined, explicitProps, legacyDefaults));

    expect(result.current).toEqual({ color: 'red', size: 10 });
    expect(explicitProps).toEqual({ color: 'red' });
  });

  it('applies legacy defaults when the provider explicitly has no theme', () => {
    const explicitProps: Props = { size: 10 };
    const legacyDefaults: Partial<Props> = { color: 'blue', size: 20 };

    const { result } = renderHook(() => useBackwardsCompatibleTheme(() => undefined, explicitProps, legacyDefaults), {
      wrapper: ({ children }) => <RechartsThemeProvider value={undefined}>{children}</RechartsThemeProvider>,
    });

    expect(result.current).toEqual({ color: 'blue', size: 10 });
  });

  it('does not call the selector when no theme is provided', () => {
    const themeSelector = vi.fn(() => ({ color: 'blue' }));

    renderHook(() => useBackwardsCompatibleTheme(themeSelector, {}, undefined));

    expect(themeSelector).not.toHaveBeenCalled();
  });

  it('applies the selected theme slice as defaults', () => {
    const explicitProps: Props = { color: 'red' };
    const themeSlice: Partial<Props> = { color: 'blue', size: 10 };
    const themeSelector = vi.fn(() => themeSlice);

    const { result } = renderHook(() => useBackwardsCompatibleTheme(themeSelector, explicitProps, { size: 20 }), {
      wrapper: ({ children }) => <RechartsThemeProvider value={theme}>{children}</RechartsThemeProvider>,
    });

    expect(themeSelector).toHaveBeenCalledWith(theme);
    expect(result.current).toEqual({ color: 'red', size: 10 });
    expect(explicitProps).toEqual({ color: 'red' });
  });

  it('returns no styles when the theme has no matching slice', () => {
    const explicitProps: Props = { color: 'red', size: 10 };

    const { result } = renderHook(
      () => useBackwardsCompatibleTheme(() => undefined, explicitProps, { color: 'blue', size: 20 }),
      { wrapper: ({ children }) => <RechartsThemeProvider value={theme}>{children}</RechartsThemeProvider> },
    );

    expect(result.current).toEqual({});
    expect(result.current).not.toBe(explicitProps);
  });
});
