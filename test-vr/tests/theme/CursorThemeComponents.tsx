import React from 'react';
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  RechartsThemeProvider,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const cartesianData = [
  { name: 'A', value: 400 },
  { name: 'B', value: 300 },
  { name: 'C', value: 200 },
  { name: 'D', value: 350 },
];

const scatterData = [
  { x: 10, y: 20 },
  { x: 25, y: 35 },
  { x: 40, y: 50 },
  { x: 55, y: 30 },
];

const chartStyle = { width: '400px', height: '260px' };

function LineCursorChart() {
  return (
    <LineChart style={chartStyle} data={cartesianData}>
      <XAxis dataKey="name" />
      <YAxis />
      <Line dataKey="value" isAnimationActive={false} />
      <Tooltip defaultIndex={1} isAnimationActive={false} />
    </LineChart>
  );
}

function BarCursorChart() {
  return (
    <BarChart style={chartStyle} data={cartesianData}>
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="value" isAnimationActive={false} />
      <Tooltip defaultIndex={1} isAnimationActive={false} />
    </BarChart>
  );
}

function ScatterCursorChart() {
  return (
    <ScatterChart style={chartStyle}>
      <XAxis dataKey="x" type="number" />
      <YAxis dataKey="y" type="number" />
      <Scatter data={scatterData} isAnimationActive={false} />
      <Tooltip defaultIndex={1} isAnimationActive={false} />
    </ScatterChart>
  );
}

function RadialBarCursorChart() {
  return (
    <RadialBarChart style={chartStyle} data={cartesianData}>
      <PolarAngleAxis dataKey="value" type="number" axisLine={false} tick={false} tickLine={false} />
      <RadialBar dataKey="value" isAnimationActive={false} />
      <Tooltip defaultIndex={1} isAnimationActive={false} />
    </RadialBarChart>
  );
}

function CursorVariantGrid() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 400px)', gap: 20 }}>
      <div>
        <h3>Line cursor</h3>
        <LineCursorChart />
      </div>
      <div>
        <h3>Bar cursor</h3>
        <BarCursorChart />
      </div>
      <div>
        <h3>Scatter cursor</h3>
        <ScatterCursorChart />
      </div>
      <div>
        <h3>RadialBar cursor</h3>
        <RadialBarCursorChart />
      </div>
    </div>
  );
}

export function UnthemedCursor() {
  return (
    <div style={{ padding: 20 }}>
      <h3>Unthemed Cursor</h3>
      <CursorVariantGrid />
    </div>
  );
}

export function ThemedCursor() {
  return (
    <RechartsThemeProvider
      value={{
        graphicalItems: [],
        cursor: {
          fill: '#facc15',
          fillOpacity: 0.35,
          stroke: '#be123c',
          strokeDasharray: '8 4',
          strokeOpacity: 0.9,
          strokeWidth: 4,
        },
      }}
    >
      <div style={{ padding: 20 }}>
        <h3>Themed Cursor</h3>
        <CursorVariantGrid />
      </div>
    </RechartsThemeProvider>
  );
}
