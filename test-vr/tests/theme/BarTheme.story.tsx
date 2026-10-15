import React from 'react';
import { Bar, BarChart, LabelList, Legend, RechartsThemeProvider, Tooltip, XAxis, YAxis } from 'recharts';
import { FillStrokeVariantsGrid, itemColorProps, withDataColors } from './FillStrokeVariants';

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
      <Bar dataKey="value" background isAnimationActive={false} />
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
          barBackground: {
            fill: '#bfdbfe',
            fillOpacity: 0.7,
            stroke: '#1d4ed8',
            strokeWidth: 2,
            strokeOpacity: 0.9,
            strokeDasharray: '4 3',
          },
        }}
      >
        <BarThemeChart />
      </RechartsThemeProvider>
    </>
  );
}

export function BarFillStrokeVariants() {
  return (
    <FillStrokeVariantsGrid
      renderChart={({ fromData, fromProps }) => (
        <BarChart style={{ width: '380px', height: '260px' }} data={withDataColors(data, fromData)}>
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip defaultIndex={0} />
          <Bar dataKey="value" isAnimationActive={false} {...itemColorProps(fromProps)}>
            <LabelList position="inside" />
            <LabelList position="top" />
          </Bar>
        </BarChart>
      )}
    />
  );
}
