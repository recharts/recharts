import React from 'react';
import { RechartsThemeProvider, Treemap } from 'recharts';

const data = [
  {
    name: 'Hardware',
    children: [
      { name: 'Laptop', value: 120 },
      { name: 'Monitor', value: 80 },
    ],
  },
  {
    name: 'Software',
    children: [
      { name: 'Editor', value: 100 },
      { name: 'Browser', value: 60 },
    ],
  },
];

function TreemapThemeChart() {
  return <Treemap width={500} height={300} data={data} isAnimationActive={false} nameKey="name" dataKey="value" />;
}

export function TreemapThemeComparison() {
  return (
    <>
      <h1>Unthemed Treemap</h1>
      <TreemapThemeChart />
      <h1>Themed Treemap</h1>
      <RechartsThemeProvider
        value={{
          graphicalItems: [
            { fill: '#facc15', stroke: '#7c3aed' },
            { fill: '#38bdf8', stroke: '#0f766e' },
            { fill: '#fb7185', stroke: '#9f1239' },
          ],
          typography: { fontSize: 20, fontWeight: 'bold', fontFamily: 'monospace', color: '#0f172a' },
        }}
      >
        <TreemapThemeChart />
      </RechartsThemeProvider>
    </>
  );
}
