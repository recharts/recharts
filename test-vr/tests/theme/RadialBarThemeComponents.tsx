import React from 'react';
import { RadialBar, RadialBarChart, RechartsThemeProvider, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'A', value: 400 },
  { name: 'B', value: 300 },
  { name: 'C', value: 200 },
  { name: 'D', value: 100 },
];

function RadialBarThemeChart() {
  return (
    <RadialBarChart style={{ width: '400px', height: '300px' }} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <RadialBar dataKey="value" isAnimationActive={false} />
    </RadialBarChart>
  );
}

export function RadialBarThemeComparison() {
  return (
    <>
      <h1>Unthemed RadialBar</h1>
      <RadialBarThemeChart />
      <h1>Themed RadialBar</h1>
      <RechartsThemeProvider
        value={{
          graphicalItems: [
            {
              fill: '#f59e0b',
              fillOpacity: 0.8,
              stroke: '#7c3aed',
              strokeWidth: 3,
              strokeOpacity: 0.7,
              strokeDasharray: '7 9',
            },
          ],
        }}
      >
        <RadialBarThemeChart />
      </RechartsThemeProvider>
    </>
  );
}
