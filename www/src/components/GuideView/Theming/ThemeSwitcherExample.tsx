import { CSSProperties, ReactNode } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  emptyTheme,
  Legend,
  RechartsTheme,
  RechartsThemeProvider,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { generateMockData, RechartsDevtools } from '@recharts/devtools';
import type { Lever } from '../../Shared/levers/Levers.tsx';
import { themeLever, ThemeLeverValue } from '../../Shared/levers/gallery/themeLever.tsx';

const data = generateMockData(7, 314);

/*
 * `undefined` is a valid value for the provider and it means the same thing as
 * having no provider at all: every component falls back to its own legacy defaults.
 * We need it here because this documentation website already wraps everything
 * in a theme provider, so the example has to reset it explicitly.
 */
const themeOverrides: Record<Exclude<ThemeLeverValue, 'inherit'>, RechartsTheme | undefined> = {
  empty: emptyTheme,
  none: undefined,
};

/*
 * Neither `emptyTheme` nor the legacy defaults give Bar a color, so those two
 * variants draw black bars. We put them on a light surface on purpose - on a dark
 * page they would be invisible, which is exactly the point of those two options.
 * The `inherit` variant paints nothing and lets the page background show through.
 */
const surfaceStyles: Record<ThemeLeverValue, CSSProperties> = {
  inherit: {},
  empty: { backgroundColor: '#ffffff' },
  none: { backgroundColor: '#ffffff' },
};

type ThemeSwitcherControlsState = {
  themeName: ThemeLeverValue;
};

export const themeSwitcherDefaultState: ThemeSwitcherControlsState = {
  themeName: 'inherit',
};

export const themeSwitcherLevers = [themeLever<ThemeSwitcherControlsState>()] satisfies ReadonlyArray<
  Lever<ThemeSwitcherControlsState>
>;

function WithTheme({ themeName, children }: { themeName: ThemeLeverValue; children: ReactNode }) {
  if (themeName === 'inherit') {
    // No provider of our own: the chart uses whichever theme the page provides.
    return children;
  }

  return <RechartsThemeProvider value={themeOverrides[themeName]}>{children}</RechartsThemeProvider>;
}

export default function ThemeSwitcherExample(props: Partial<ThemeSwitcherControlsState>) {
  const { themeName } = { ...themeSwitcherDefaultState, ...props };

  return (
    <div style={{ padding: 12, borderRadius: 8, ...surfaceStyles[themeName] }}>
      <WithTheme themeName={themeName}>
        <BarChart
          style={{ width: '100%', maxWidth: 600, maxHeight: '70vh', aspectRatio: 1.618 }}
          responsive
          data={data}
          margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
        >
          <CartesianGrid />
          <XAxis dataKey="label" />
          <YAxis />
          <ReferenceLine y={600} label="target" />
          <Tooltip defaultIndex={3} />
          <Legend />
          <Bar dataKey="x" isAnimationActive={false} />
          <Bar dataKey="y" isAnimationActive={false} />
          <RechartsDevtools />
        </BarChart>
      </WithTheme>
    </div>
  );
}
