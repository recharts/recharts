import React from 'react';
import {
  Line,
  LineChart,
  ReferenceArea,
  ReferenceDot,
  ReferenceLine,
  RechartsThemeProvider,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  { name: 'A', value: 1 },
  { name: 'B', value: 3 },
  { name: 'C', value: 2 },
  { name: 'D', value: 4 },
];

function ReferenceThemeChart() {
  return (
    <LineChart style={{ width: '400px', height: '260px' }} data={data}>
      <XAxis dataKey="name" />
      <YAxis domain={[0, 5]} />
      <Line dataKey="value" isAnimationActive={false} />
      <ReferenceLine y={2} />
      <ReferenceArea x1="B" x2="C" y1={1} y2={3} />
      <ReferenceDot x="B" y={2} />
    </LineChart>
  );
}

export function ReferenceThemeComparison() {
  return (
    <>
      <h1>Unthemed Reference Elements</h1>
      <ReferenceThemeChart />
      <h1>Themed Reference Elements</h1>
      <RechartsThemeProvider
        value={{
          graphicalItems: [],
          reference: {
            fill: '#facc15',
            fillOpacity: 0.45,
            stroke: '#7c3aed',
            strokeDasharray: '8 4',
            strokeOpacity: 0.8,
            strokeWidth: 3,
          },
        }}
      >
        <ReferenceThemeChart />
      </RechartsThemeProvider>
    </>
  );
}
