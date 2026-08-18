import React from 'react';
import { PolarAngleAxis, PolarRadiusAxis, Radar, RadarChart, RechartsThemeProvider } from 'recharts';

const data = [
  { subject: 'A', value: 10 },
  { subject: 'B', value: 20 },
  { subject: 'C', value: 30 },
  { subject: 'D', value: 15 },
];

function PolarRadiusAxisThemeChart() {
  return (
    <RadarChart width={400} height={320} data={data}>
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar dataKey="value" isAnimationActive={false} />
    </RadarChart>
  );
}

export function PolarRadiusAxisThemeComparison() {
  return (
    <>
      <h1>Unthemed PolarRadiusAxis</h1>
      <PolarRadiusAxisThemeChart />
      <h1>Themed PolarRadiusAxis</h1>
      <RechartsThemeProvider
        value={{
          graphicalItems: [],
          axis: {
            stroke: '#7c3aed',
            strokeDasharray: '10 5',
            strokeOpacity: 0.9,
            strokeWidth: 5,
          },
          typography: {
            color: '#dc2626',
            fontSize: 18,
            fontWeight: 'bold',
          },
        }}
      >
        <PolarRadiusAxisThemeChart />
      </RechartsThemeProvider>
    </>
  );
}
