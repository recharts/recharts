import React from 'react';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts';

const data = [
  { subject: 'Math', value: 120 },
  { subject: 'Chinese', value: 98 },
  { subject: 'English', value: 86 },
  { subject: 'Geography', value: 99 },
  { subject: 'Physics', value: 85 },
  { subject: 'History', value: 65 },
];

const polarRadius = ['20%', '40%', '60%', '80%', '100%'] as const;

/**
 * Two charts of different sizes with the same percentage radii.
 * Both grids should draw five evenly spaced circles, the last one on the outer edge.
 */
export function PolarGridPercentRadius() {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <RadarChart width={360} height={300} data={data}>
        <PolarGrid gridType="circle" radialLines={false} polarRadius={polarRadius} stroke="#888" />
        <PolarAngleAxis dataKey="subject" />
        <Radar dataKey="value" fillOpacity={0.3} isAnimationActive={false} />
      </RadarChart>
      <RadarChart width={200} height={180} data={data}>
        <PolarGrid gridType="circle" radialLines={false} polarRadius={polarRadius} stroke="#888" />
        <PolarAngleAxis dataKey="subject" />
        <Radar dataKey="value" fillOpacity={0.3} isAnimationActive={false} />
      </RadarChart>
    </div>
  );
}
