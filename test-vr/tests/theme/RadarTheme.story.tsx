import React from 'react';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, RechartsThemeProvider } from 'recharts';

const data = [
  { subject: 'Math', A: 120 },
  { subject: 'Chinese', A: 98 },
  { subject: 'English', A: 86 },
  { subject: 'Geography', A: 99 },
  { subject: 'Physics', A: 85 },
  { subject: 'History', A: 65 },
];

function RadarThemeChart() {
  return (
    <RadarChart width={400} height={320} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar dataKey="A" isAnimationActive={false} dot />
    </RadarChart>
  );
}

export function RadarThemeComparison() {
  return (
    <>
      <h1>Unthemed Radar</h1>
      <RadarThemeChart />
      <h1>Themed Radar</h1>
      <RechartsThemeProvider
        value={{
          graphicalItems: [
            {
              fill: '#facc15',
              fillOpacity: 0.5,
              stroke: '#7c3aed',
              strokeDasharray: '10 5',
              strokeOpacity: 0.9,
              strokeWidth: 5,
              active: {
                fill: '#7c3aed',
                stroke: '#facc15',
                strokeWidth: 3,
              },
            },
          ],
        }}
      >
        <RadarThemeChart />
      </RechartsThemeProvider>
    </>
  );
}
