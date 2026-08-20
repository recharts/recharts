import React from 'react';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, RechartsThemeProvider } from 'recharts';

const data = [
  { subject: 'Math', A: 120 },
  { subject: 'Chinese', A: 98 },
  { subject: 'English', A: 86 },
  { subject: 'Geography', A: 99 },
  { subject: 'Physics', A: 85 },
  { subject: 'History', A: 65 },
];

function PolarAngleAxisThemeChart() {
  return (
    <RadarChart width={500} height={400} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <Radar dataKey="A" isAnimationActive={false} />
    </RadarChart>
  );
}

export function PolarAngleAxisThemeComparison() {
  return (
    <>
      <h1>Unthemed PolarAngleAxis</h1>
      <PolarAngleAxisThemeChart />
      <h1>Themed PolarAngleAxis</h1>
      <RechartsThemeProvider
        value={{
          graphicalItems: [],
          axis: {
            stroke: '#7c3aed',
            strokeWidth: 3,
            strokeOpacity: 0.8,
            strokeDasharray: '5 7',
          },
          typography: {
            fontSize: 20,
            fontWeight: 'bold',
            fontFamily: 'cursive',
            letterSpacing: '0.5px',
          },
        }}
      >
        <PolarAngleAxisThemeChart />
      </RechartsThemeProvider>
    </>
  );
}
