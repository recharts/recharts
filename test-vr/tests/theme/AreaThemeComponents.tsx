import React from 'react';
import { Area, AreaChart, RechartsThemeProvider, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'B', uv: 300, pv: 4567, amt: 2400 },
  { name: 'C', uv: 300, pv: 1398, amt: 2400 },
  { name: 'D', uv: 200, pv: 9800, amt: 2400 },
];

function AreaThemeChart() {
  return (
    <AreaChart style={{ width: '400px', height: '260px' }} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip defaultIndex={1} />
      <Area type="monotone" dataKey="uv" isAnimationActive={false} />
    </AreaChart>
  );
}

export function AreaThemeComparison() {
  return (
    <>
      <h1>Unthemed Area</h1>
      <AreaThemeChart />
      <h1>Themed Area</h1>
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
        <AreaThemeChart />
      </RechartsThemeProvider>
    </>
  );
}
