import React from 'react';
import { LabelList, Legend, Pie, PieChart, RechartsThemeProvider, Tooltip } from 'recharts';
import { FillStrokeVariantsGrid, itemColorProps, withDataColors } from './FillStrokeVariants';

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

export function PieFillStrokeVariants() {
  return (
    <FillStrokeVariantsGrid
      renderChart={({ fromData, fromProps }) => (
        <PieChart style={{ width: '380px', height: '280px' }}>
          <Pie
            data={withDataColors(data, fromData)}
            dataKey="value"
            outerRadius={80}
            isAnimationActive={false}
            {...itemColorProps(fromProps)}
          >
            <LabelList position="inside" />
            <LabelList position="outside" dataKey="name" />
          </Pie>
          <Legend />
          <Tooltip defaultIndex={0} />
        </PieChart>
      )}
    />
  );
}
