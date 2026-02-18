import React from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  ScatterChart,
  Scatter,
  ErrorBar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default {
  title: 'Examples/cartesian/ErrorBar/DataPointFormatter',
  component: ErrorBar,
};

const scatterData = [
  { x: 45, y: 100, errorY: [30, 20], errorX: 5 },
  { x: 100, y: 200, errorY: [20, 30], errorX: 3 },
  { x: 120, y: 100, errorY: 20, errorX: [5, 3] },
  { x: 170, y: 300, errorY: [15, 18], errorX: 4 },
  { x: 140, y: 250, errorY: 23, errorX: [6, 7] },
  { x: 150, y: 400, errorY: [21, 10], errorX: 4 },
];

const barAndLineData = [
  { name: 'Jan', uv: 4000, uvError: [200, 100] },
  { name: 'Feb', uv: 3000, uvError: [300, 150] },
  { name: 'Mar', uv: 2000, uvError: [100, 200] },
  { name: 'Apr', uv: 2780, uvError: [150, 100] },
  { name: 'May', uv: 1890, uvError: [200, 250] },
  { name: 'Jun', uv: 2390, uvError: [100, 150] },
];

/**
 * Each chart type (Scatter, Bar, Line) uses its own internal `dataPointFormatter`
 * to extract the position and error values from its data points. This story shows
 * ErrorBar working across all three chart types to illustrate these differences.
 *
 * - **ScatterChart**: uses `cx`/`cy` for position and reads error from `node.x`/`node.y`
 * - **BarChart**: uses bar rectangle coordinates and reads error from the bar value
 * - **LineChart**: uses line point coordinates and reads error from the point value
 */
export const InScatterChart = {
  render: () => (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" dataKey="x" name="x" />
        <YAxis type="number" dataKey="y" name="y" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="Scatter" data={scatterData} fill="#8884d8">
          <ErrorBar dataKey="errorY" width={4} strokeWidth={2} stroke="#8884d8" direction="y" />
          <ErrorBar dataKey="errorX" width={4} strokeWidth={2} stroke="#82ca9d" direction="x" />
        </Scatter>
      </ScatterChart>
    </ResponsiveContainer>
  ),
};

export const InBarChart = {
  render: () => (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={barAndLineData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="uv" fill="#8884d8">
          <ErrorBar dataKey="uvError" width={4} strokeWidth={2} stroke="#ff7300" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  ),
};

export const InLineChart = {
  render: () => (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={barAndLineData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="uv" stroke="#8884d8">
          <ErrorBar dataKey="uvError" width={4} strokeWidth={2} stroke="#82ca9d" />
        </Line>
      </LineChart>
    </ResponsiveContainer>
  ),
};
