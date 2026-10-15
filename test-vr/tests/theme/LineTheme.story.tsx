import React from 'react';
import { LabelList, Legend, Line, LineChart, RechartsThemeProvider, Tooltip, XAxis, YAxis } from 'recharts';
import { FillStrokeVariantsGrid, itemColorProps, withDataColors } from './FillStrokeVariants';

const data = [
  { name: 'A', revenue: 120 },
  { name: 'B', revenue: 280 },
  { name: 'C', revenue: 180 },
  { name: 'D', revenue: 360 },
];

function LineThemeChart() {
  return (
    <LineChart style={{ width: '400px', height: '260px' }} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip defaultIndex={1} />
      <Line dataKey="revenue" isAnimationActive={false} />
    </LineChart>
  );
}

export function LineThemeComparison() {
  return (
    <>
      <h1>Unthemed Line</h1>
      <LineThemeChart />
      <h1>Themed Line</h1>
      <RechartsThemeProvider
        value={{
          graphicalItems: [
            {
              fill: '#facc15',
              fillOpacity: 0.8,
              stroke: '#7c3aed',
              strokeDasharray: '10 5',
              strokeOpacity: 0.7,
              strokeWidth: 5,
              active: {
                fill: '#facc15',
                stroke: '#7c3aed',
                strokeWidth: 3,
              },
            },
          ],
        }}
      >
        <LineThemeChart />
      </RechartsThemeProvider>
    </>
  );
}

export function LineFillStrokeVariants() {
  return (
    <FillStrokeVariantsGrid
      renderChart={({ fromData, fromProps }) => (
        <LineChart
          style={{ width: '380px', height: '260px' }}
          data={withDataColors(data, fromData)}
          margin={{ top: 20, right: 30 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip defaultIndex={0} />
          <Line dataKey="revenue" isAnimationActive={false} {...itemColorProps(fromProps)}>
            <LabelList position="center" />
            <LabelList position="top" />
          </Line>
        </LineChart>
      )}
    />
  );
}
