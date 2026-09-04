import React from 'react';
import { Area, AreaChart, RechartsThemeProvider, Tooltip } from 'recharts';

const data = [
  { name: 'A', uv: 400, pv: 2400 },
  { name: 'B', uv: 300, pv: 4567 },
  { name: 'C', uv: 300, pv: 1398 },
];

function TooltipChart() {
  return (
    <AreaChart style={{ width: '400px', height: '260px' }} data={data}>
      <Area dataKey="uv" isAnimationActive={false} />
      <Tooltip defaultIndex={1} />
    </AreaChart>
  );
}

function UnthemedTooltip() {
  return (
    <div style={{ padding: 20 }}>
      <h3>Unthemed Tooltip</h3>
      <TooltipChart />
    </div>
  );
}

function ThemedTooltip() {
  return (
    <RechartsThemeProvider
      value={{
        graphicalItems: [
          {
            fill: '#8b5cf6',
            stroke: '#8b5cf6',
            fillOpacity: 0.8,
          },
        ],
        tooltip: {
          contentStyle: {
            backgroundColor: '#fef3c7',
            borderColor: '#d97706',
            borderWidth: 2,
            borderRadius: 12,
            padding: 16,
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          },
          itemStyle: {
            color: '#92400e',
            fontSize: 14,
            fontWeight: 600,
          },
          labelStyle: {
            color: '#78350f',
            fontSize: 16,
            fontWeight: 700,
          },
        },
      }}
    >
      <div style={{ padding: 20 }}>
        <h3>Themed Tooltip</h3>
        <TooltipChart />
      </div>
    </RechartsThemeProvider>
  );
}

export function TooltipThemeComparison() {
  return (
    <>
      <UnthemedTooltip />
      <ThemedTooltip />
    </>
  );
}
