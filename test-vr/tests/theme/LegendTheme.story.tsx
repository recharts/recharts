import * as React from 'react';
import { Legend, Line, LineChart, RechartsThemeProvider } from 'recharts';

const data = [
  { name: 'January', desktop: 400, mobile: 240 },
  { name: 'February', desktop: 300, mobile: 139 },
  { name: 'March', desktop: 200, mobile: 980 },
];

function LegendThemeChart() {
  return (
    <LineChart width={420} height={240} data={data}>
      <Line dataKey="desktop" isAnimationActive={false} stroke="#2563eb" />
      <Line dataKey="mobile" isAnimationActive={false} stroke="#f97316" />
      <Legend />
    </LineChart>
  );
}

export function LegendThemeExamples() {
  return (
    <div style={{ display: 'flex', gap: 32 }}>
      <section>
        <h1>Default legend</h1>
        <LegendThemeChart />
      </section>
      <RechartsThemeProvider
        value={{
          graphicalItems: [],
          typography: { fontFamily: 'cursive' },
          legend: {
            wrapperStyle: { backgroundColor: '#fef3c7', border: '2px solid #b45309', padding: 12 },
            labelStyle: { color: '#7c2d12', fontSize: 20, fontWeight: 'bold' },
            position: 'insideBottomRight',
            offset: 12,
          },
        }}
      >
        <section>
          <h1>Themed legend</h1>
          <LegendThemeChart />
        </section>
      </RechartsThemeProvider>
    </div>
  );
}
