import React from 'react';
import { CartesianGrid, ErrorBar, Line, LineChart, RechartsThemeProvider, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'A', value: 10, error: 2 },
  { name: 'B', value: 20, error: 3 },
  { name: 'C', value: 15, error: 4 },
];

function ErrorBarChart() {
  return (
    <LineChart width={400} height={300} data={data}>
      <CartesianGrid />
      <XAxis dataKey="name" />
      <YAxis />
      <Line dataKey="value" isAnimationActive={false}>
        <ErrorBar dataKey="error" isAnimationActive={false} />
      </Line>
    </LineChart>
  );
}

export function ErrorBarThemeComponents() {
  return (
    <>
      <h1>Unthemed ErrorBar</h1>
      <ErrorBarChart />
      <h1>Themed ErrorBar</h1>
      <RechartsThemeProvider
        value={{
          graphicalItems: [],
          errorBar: {
            stroke: '#d946ef',
            strokeWidth: 3,
            strokeOpacity: 0.8,
            strokeDasharray: '4 2',
          },
        }}
      >
        <ErrorBarChart />
      </RechartsThemeProvider>
    </>
  );
}
