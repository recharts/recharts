import React, { ReactNode } from 'react';
import { lightTheme, RechartsTheme, RechartsThemeProvider, useRechartsTheme } from 'recharts';

/*
 * Shared helpers for the "fill/stroke variants" stories.
 * See https://github.com/recharts/recharts/issues/7968
 *
 * Each story renders the same chart eight times, once for every combination of
 * where `fill` and `stroke` come from: the data entries, the graphical item props, and the theme.
 * Comparing the panels shows the precedence and whether the Legend, Tooltip and labels follow it.
 */

/**
 * Per-entry colors, applied to the data entries by index (cycled).
 * The second entry intentionally has no colors so that we can see the fallback next to the overrides.
 */
const dataColors: ReadonlyArray<{ fill?: string; stroke?: string }> = [
  { fill: '#ef4444', stroke: '#14532d' },
  {},
  { fill: '#22c55e' },
  { stroke: '#db2777' },
];

export const propColors = { fill: '#0ea5e9', stroke: '#1e3a8a' } as const;

const themeColors: RechartsTheme['graphicalItems'] = [
  { fill: '#f59e0b', stroke: '#7c3aed' },
  { fill: '#a78bfa', stroke: '#4c1d95' },
  { fill: '#2dd4bf', stroke: '#134e4a' },
  { fill: '#fb7185', stroke: '#881337' },
];

/**
 * Replaces only the graphical item colors of the surrounding theme, so the Tooltip, Legend and text
 * keep the styling of the light/dark project. The legacy project has no surrounding theme, so it uses lightTheme.
 */
function ThemeColorsProvider({ children }: { children: ReactNode }) {
  const surroundingTheme = useRechartsTheme() ?? lightTheme;
  return (
    <RechartsThemeProvider value={{ ...surroundingTheme, graphicalItems: themeColors }}>
      {children}
    </RechartsThemeProvider>
  );
}

export type FillStrokeVariant = {
  fromData: boolean;
  fromProps: boolean;
  fromTheme: boolean;
};

const variants: ReadonlyArray<FillStrokeVariant> = [false, true].flatMap(fromTheme =>
  [false, true].flatMap(fromProps => [false, true].map(fromData => ({ fromData, fromProps, fromTheme }))),
);

function variantName({ fromData, fromProps, fromTheme }: FillStrokeVariant): string {
  const sources = [fromData && 'data', fromProps && 'props', fromTheme && 'theme'].filter(Boolean);
  return sources.length === 0 ? 'no colors' : sources.join(' + ');
}

export function withDataColors<T extends object>(data: ReadonlyArray<T>, enabled: boolean): T[] {
  if (!enabled) {
    return [...data];
  }
  return data.map((entry, index) => ({ ...entry, ...dataColors[index % dataColors.length] }));
}

export function itemColorProps(enabled: boolean): Partial<typeof propColors> {
  return enabled ? propColors : {};
}

export function FillStrokeVariantsGrid({ renderChart }: { renderChart: (variant: FillStrokeVariant) => ReactNode }) {
  return (
    <div style={{ display: 'inline-grid', gridTemplateColumns: 'repeat(2, 380px)', gap: '8px 16px' }}>
      {variants.map(variant => {
        const chart = renderChart(variant);
        return (
          <div key={variantName(variant)}>
            <h2 style={{ margin: 0, fontSize: 16 }}>{variantName(variant)}</h2>
            {variant.fromTheme ? <ThemeColorsProvider>{chart}</ThemeColorsProvider> : chart}
          </div>
        );
      })}
    </div>
  );
}
