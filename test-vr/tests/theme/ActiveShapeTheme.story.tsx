import React from 'react';
import {
  Bar,
  BarChart,
  Funnel,
  FunnelChart,
  Pie,
  PieChart,
  RadialBar,
  RadialBarChart,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  { name: 'A', x: 10, y: 30, value: 400 },
  { name: 'B', x: 20, y: 50, value: 300 },
  { name: 'C', x: 30, y: 20, value: 250 },
  { name: 'D', x: 40, y: 40, value: 200 },
];

/*
 * Funnel reads `x` and `y` from the data as coordinates of its trapezoids, so it gets data without them.
 */
const funnelData = data.map(({ name, value }) => ({ name, value }));

const chartStyle = { width: '400px', height: '300px' };

/*
 * The Tooltip is here only to make the second data entry active.
 * It renders nothing, so that it does not cover the active shape.
 */
const renderNothing = () => null;

export function BarActiveShape() {
  return (
    <BarChart style={chartStyle} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="value" activeBar isAnimationActive={false} />
      <Tooltip defaultIndex={1} cursor={false} content={renderNothing} />
    </BarChart>
  );
}

export function ScatterActiveShape() {
  return (
    <ScatterChart style={chartStyle}>
      <XAxis dataKey="x" type="number" />
      <YAxis dataKey="y" type="number" />
      <Scatter data={data} dataKey="y" activeShape isAnimationActive={false} />
      <Tooltip defaultIndex={1} cursor={false} content={renderNothing} />
    </ScatterChart>
  );
}

export function PieActiveShape() {
  return (
    <PieChart style={chartStyle}>
      <Pie data={data} dataKey="value" activeShape isAnimationActive={false} />
      <Tooltip defaultIndex={1} content={renderNothing} />
    </PieChart>
  );
}

export function RadialBarActiveShape() {
  return (
    <RadialBarChart style={chartStyle} data={data}>
      <RadialBar dataKey="value" activeShape isAnimationActive={false} />
      <Tooltip defaultIndex={1} cursor={false} content={renderNothing} />
    </RadialBarChart>
  );
}

export function FunnelActiveShape() {
  return (
    <FunnelChart style={chartStyle}>
      <Funnel data={funnelData} dataKey="value" activeShape isAnimationActive={false} />
      <Tooltip content={renderNothing} />
    </FunnelChart>
  );
}
