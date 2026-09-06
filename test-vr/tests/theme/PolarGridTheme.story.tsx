import React from 'react';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, RechartsThemeProvider } from 'recharts';

const data = [
  { subject: 'Math', value: 120 },
  { subject: 'Chinese', value: 98 },
  { subject: 'English', value: 86 },
  { subject: 'Geography', value: 99 },
  { subject: 'Physics', value: 85 },
  { subject: 'History', value: 65 },
];

function PolarGridThemeChart() {
  return (
    <RadarChart width={400} height={320} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar dataKey="value" isAnimationActive={false} />
    </RadarChart>
  );
}

export function PolarGridThemeComparison() {
  return (
    <>
      <h1>Unthemed PolarGrid</h1>
      <PolarGridThemeChart />
      <h1>Themed PolarGrid</h1>
      <RechartsThemeProvider
        value={{
          graphicalItems: [],
          grid: {
            fill: '#facc15',
            fillOpacity: 0.5,
            stroke: '#7c3aed',
            strokeDasharray: '10 5',
            strokeOpacity: 0.9,
            strokeWidth: 5,
          },
        }}
      >
        <PolarGridThemeChart />
      </RechartsThemeProvider>
    </>
  );
}
