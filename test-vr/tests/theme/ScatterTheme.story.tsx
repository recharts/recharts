import React from 'react';
import {
  LabelList,
  Legend,
  Scatter,
  ScatterChart,
  RechartsThemeProvider,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from 'recharts';
import { FillStrokeVariantsGrid, itemColorProps, withDataColors } from './FillStrokeVariants';

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
      <Scatter data={scatterData} isAnimationActive={false} />
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
        <Scatter data={scatterData} isAnimationActive={false} />
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

export function ScatterFillStrokeVariants() {
  return (
    <FillStrokeVariantsGrid
      renderChart={({ fromData, fromProps }) => (
        <ScatterChart style={{ width: '380px', height: '260px' }} margin={{ top: 20 }}>
          <XAxis dataKey="x" type="number" />
          <YAxis dataKey="y" type="number" />
          <ZAxis dataKey="z" type="number" range={[64, 400]} />
          <Legend />
          <Tooltip defaultIndex={0} />
          <Scatter
            name="points"
            data={withDataColors(scatterData, fromData)}
            isAnimationActive={false}
            {...itemColorProps(fromProps)}
          >
            <LabelList dataKey="y" position="center" />
            <LabelList dataKey="y" position="top" />
          </Scatter>
        </ScatterChart>
      )}
    />
  );
}
