import React from 'react';
import { Brush, Line, LineChart, RechartsThemeProvider, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'A', value: 120 },
  { name: 'B', value: 280 },
  { name: 'C', value: 180 },
  { name: 'D', value: 360 },
  { name: 'E', value: 240 },
];

function BrushThemeChart() {
  return (
    <LineChart width={420} height={260} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Line dataKey="value" stroke="#8884d8" isAnimationActive={false} />
      <Brush dataKey="value" x={50} y={190} width={320} height={40} alwaysShowText />
    </LineChart>
  );
}

export function BrushThemeComparison() {
  return (
    <>
      <h1>Unthemed Brush</h1>
      <BrushThemeChart />
      <h1>Themed Brush</h1>
      <RechartsThemeProvider
        value={{
          graphicalItems: [],
          brush: {
            fill: '#bfdbfe',
            stroke: '#1d4ed8',
          },
        }}
      >
        <BrushThemeChart />
      </RechartsThemeProvider>
    </>
  );
}
