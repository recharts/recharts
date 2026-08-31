import React from 'react';
import { Scatter, ScatterChart, RechartsThemeProvider, XAxis, YAxis, ZAxis } from 'recharts';

const scatterData = [
  { x: 10, y: 20, z: 100 },
  { x: 25, y: 35, z: 200 },
  { x: 40, y: 50, z: 150 },
  { x: 55, y: 30, z: 250 },
  { x: 70, y: 60, z: 180 },
];

function UnthemedScatter() {
  return (
    <ScatterChart style={{ width: '400px', height: '300px' }}>
      <XAxis dataKey="x" type="number" />
      <YAxis dataKey="y" type="number" />
      <ZAxis dataKey="z" type="number" range={[64, 400]} />
      <Scatter data={scatterData} dataKey="x" isAnimationActive={false} />
    </ScatterChart>
  );
}

function ThemedScatter() {
  return (
    <RechartsThemeProvider
      value={{
        graphicalItems: [
          {
            fill: '#facc15',
            stroke: '#7c3aed',
            strokeWidth: 3,
            strokeOpacity: 0.8,
            fillOpacity: 0.6,
          },
        ],
      }}
    >
      <ScatterChart style={{ width: '400px', height: '300px' }}>
        <XAxis dataKey="x" type="number" />
        <YAxis dataKey="y" type="number" />
        <ZAxis dataKey="z" type="number" range={[64, 400]} />
        <Scatter data={scatterData} dataKey="x" isAnimationActive={false} />
      </ScatterChart>
    </RechartsThemeProvider>
  );
}

export function ScatterThemeComparison() {
  return (
    <>
      <h1>Unthemed Scatter</h1>
      <UnthemedScatter />
      <h1>Themed Scatter</h1>
      <ThemedScatter />
    </>
  );
}
