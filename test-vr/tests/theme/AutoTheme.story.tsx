import React from 'react';
import {
  autoTheme,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  RechartsThemeProvider,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  { name: 'A', uv: 400, pv: 240, amt: 300 },
  { name: 'B', uv: 300, pv: 456, amt: 200 },
  { name: 'C', uv: 200, pv: 139, amt: 350 },
  { name: 'D', uv: 278, pv: 390, amt: 100 },
];

function AutoThemeChart() {
  return (
    <ComposedChart style={{ width: 400, height: 260 }} data={data}>
      <CartesianGrid />
      <XAxis dataKey="name" />
      <YAxis />
      <Legend />
      <Tooltip defaultIndex={1} />
      <ReferenceLine y={250} label="target" />
      <Bar dataKey="uv" isAnimationActive={false} background />
      <Bar dataKey="pv" isAnimationActive={false} />
      <Line dataKey="amt" isAnimationActive={false} />
    </ComposedChart>
  );
}

/**
 * The first chart inherits the theme of the VR project (lightTheme or darkTheme),
 * the second uses autoTheme, which should resolve to the same colors.
 */
export function AutoThemeComparison() {
  return (
    <div style={{ display: 'flex', gap: 20 }}>
      <div data-testid="page-theme">
        <AutoThemeChart />
      </div>
      <div data-testid="auto-theme">
        <RechartsThemeProvider value={autoTheme}>
          <AutoThemeChart />
        </RechartsThemeProvider>
      </div>
    </div>
  );
}

/**
 * autoTheme follows the color-scheme of the nearest ancestor, so one page can show both variants.
 */
export function AutoThemeScoped() {
  return (
    <RechartsThemeProvider value={autoTheme}>
      <div style={{ display: 'flex' }}>
        <div style={{ colorScheme: 'light', backgroundColor: '#fff', padding: 20 }}>
          <AutoThemeChart />
        </div>
        <div style={{ colorScheme: 'dark', backgroundColor: '#18181b', padding: 20 }}>
          <AutoThemeChart />
        </div>
      </div>
    </RechartsThemeProvider>
  );
}
