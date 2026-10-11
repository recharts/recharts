import React from 'react';
import { Funnel, FunnelChart, RechartsThemeProvider } from 'recharts';

const data = [
  { value: 100, name: 'first' },
  { value: 80, name: 'second' },
  { value: 50, name: 'third' },
  { value: 40, name: 'fourth' },
  { value: 26, name: 'fifth' },
];

function FunnelThemeChart() {
  return (
    <FunnelChart style={{ width: '400px', height: '400px' }}>
      <Funnel dataKey="value" data={data} isAnimationActive={false} />
    </FunnelChart>
  );
}

export function FunnelThemeComparison() {
  return (
    <>
      <h1>Unthemed Funnel</h1>
      <FunnelThemeChart />
      <h1>Themed Funnel</h1>
      <RechartsThemeProvider
        value={{
          graphicalItems: [
            { fill: '#f59e0b', stroke: '#7c3aed', strokeWidth: 3 },
            { fill: '#3b82f6', stroke: '#1e40af', strokeWidth: 3 },
            { fill: '#10b981', stroke: '#065f46', strokeWidth: 3 },
            { fill: '#ef4444', stroke: '#991b1b', strokeWidth: 3 },
            { fill: '#8b5cf6', stroke: '#5b21b6', strokeWidth: 3 },
          ],
        }}
      >
        <FunnelThemeChart />
      </RechartsThemeProvider>
    </>
  );
}
