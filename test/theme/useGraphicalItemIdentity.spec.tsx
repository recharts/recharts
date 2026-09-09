import React from 'react';
import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { RechartsTheme, RechartsThemeProvider } from '../../src';
import { RechartsStoreProvider } from '../../src/state/RechartsStoreProvider';
import { LineSettings } from '../../src/state/types/LineSettings';
import { useGraphicalItemIdentity } from '../../src/theme/useGraphicalItemIdentity';

const theme: RechartsTheme = {
  graphicalItems: [{ stroke: 'red' }, { stroke: 'blue' }],
};

function createLineSettings(id: string, dataKey: string): LineSettings {
  return {
    id,
    type: 'line',
    data: undefined,
    dataKey,
    hide: false,
    xAxisId: 0,
    yAxisId: 0,
    zAxisId: 0,
    isPanorama: false,
  };
}

function createWrapper(dataKeys: ReadonlyArray<string>) {
  const preloadedState = {
    graphicalItems: {
      cartesianItems: dataKeys.map((dataKey, index) => createLineSettings(`line-${index}`, dataKey)),
      polarItems: [],
    },
  };

  return function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <RechartsThemeProvider value={theme}>
        <RechartsStoreProvider preloadedState={preloadedState}>{children}</RechartsStoreProvider>
      </RechartsThemeProvider>
    );
  };
}

describe('useGraphicalItemIdentity', () => {
  it('selects the theme entry using all graphical item dataKeys from Redux', () => {
    const { result } = renderHook(() => useGraphicalItemIdentity('revenue'), {
      wrapper: createWrapper(['revenue', 'profit']),
    });

    expect(result.current(theme)).toBe(theme.graphicalItems[1]);
  });

  it('includes the current dataKey when it is not registered in Redux yet', () => {
    const { result } = renderHook(() => useGraphicalItemIdentity('revenue'), {
      wrapper: createWrapper(['profit']),
    });

    expect(result.current(theme)).toBe(theme.graphicalItems[1]);
  });

  it('returns undefined when the graphical item has no dataKey', () => {
    const { result } = renderHook(() => useGraphicalItemIdentity(undefined), {
      wrapper: createWrapper(['profit']),
    });

    expect(result.current(theme)).toBeUndefined();
  });

  it('uses an empty dataKey list outside a theme provider', () => {
    const { result } = renderHook(() => useGraphicalItemIdentity('profit'));

    expect(result.current(theme)).toBe(theme.graphicalItems[0]);
  });

  it('updates the selector when the dataKey changes', () => {
    const { result, rerender } = renderHook(({ dataKey }) => useGraphicalItemIdentity(dataKey), {
      initialProps: { dataKey: 'profit' },
      wrapper: createWrapper(['profit', 'revenue']),
    });

    expect(result.current(theme)).toBe(theme.graphicalItems[0]);

    rerender({ dataKey: 'revenue' });

    expect(result.current(theme)).toBe(theme.graphicalItems[1]);
  });
});
