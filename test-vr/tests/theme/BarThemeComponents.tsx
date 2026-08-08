import React from 'react';
import { Bar, BarChart, RechartsThemeProvider, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'A', value: 400 },
  { name: 'B', value: 300 },
  { name: 'C', value: 300 },
  { name: 'D', value: 200 },
];

function BarThemeChart() {
  return (
    <BarChart style={{ width: '400px', height: '260px' }} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="value" isAnimationActive={false} />
    </BarChart>
  );
}

export function BarThemeComparison() {
  return (
    <>
      <h1>Unthemed Bar</h1>
      <BarThemeChart />
      <h1>Themed Bar</h1>
      <RechartsThemeProvider
        value={{
          graphicalItems: [
            {
              fill: '#f59e0b',
              fillOpacity: 0.8,
              stroke: '#7c3aed',
              strokeWidth: 3,
              strokeOpacity: 0.7,
            },
          ],
        }}
      >
        <BarThemeChart />
      </RechartsThemeProvider>
    </>
  );
}
