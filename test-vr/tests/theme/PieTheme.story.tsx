import React from 'react';
import { Legend, Pie, PieChart, RechartsThemeProvider } from 'recharts';

const data = [
  { name: 'A', value: 100 },
  { name: 'B', value: 200 },
  { name: 'C', value: 300 },
  { name: 'D', value: 150 },
];

function PieThemeChart() {
  return (
    <PieChart style={{ width: '420px', height: '320px' }} data={data}>
      <Pie dataKey="value" isAnimationActive={false} />
      <Legend />
    </PieChart>
  );
}

export function PieThemeComparison() {
  return (
    <>
      <h1>Unthemed Pie</h1>
      <PieThemeChart />
      <h1>Themed Pie</h1>
      <RechartsThemeProvider
        value={{
          graphicalItems: [
            {
              fill: '#ef4444',
              fillOpacity: 0.7,
              stroke: '#111827',
              strokeOpacity: 0.9,
              strokeWidth: 3,
              strokeDasharray: '8 4',
            },
            {
              fill: '#22c55e',
              fillOpacity: 0.7,
              stroke: '#111827',
              strokeOpacity: 0.9,
              strokeWidth: 3,
              strokeDasharray: '8 4',
            },
            {
              fill: '#3b82f6',
              fillOpacity: 0.7,
              stroke: '#111827',
              strokeOpacity: 0.9,
              strokeWidth: 3,
              strokeDasharray: '8 4',
            },
          ],
        }}
      >
        <PieThemeChart />
      </RechartsThemeProvider>
    </>
  );
}
