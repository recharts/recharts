import React from 'react';
import { pageData } from '../data';
import {
  Area,
  Bar,
  Brush,
  CartesianGrid,
  ComposedChart as Composed,
  Legend,
  Line,
  LineChart,
  ReferenceDot,
  ReferenceLine,
  ResponsiveContainer,
  Scatter,
  Tooltip,
  XAxis,
  YAxis,
} from '../../../src';

export default {
  title: 'Recharts/Chart/Composed Chart',
  component: Composed,
};

// This render template can be shared across multiple stories.
// All stories use the same data, but pass different children.
const HorizontalChartTemplate = {
  render: (args: any) => {
    return (
      <>
        <div className="composed-chart-wrapper">
          <ResponsiveContainer width="100%" height={300}>
            <Composed
              {...args}
              data={pageData}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              {args.children}
            </Composed>
          </ResponsiveContainer>
        </div>
      </>
    );
  },
};

export const SimpleChart = {
  ...HorizontalChartTemplate,
  args: {
    data: pageData,
    children: (
      <>
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="uv" />
        <Line dataKey="pv" />
      </>
    ),
  },
};

export const ComplexChart = {
  ...HorizontalChartTemplate,
  args: {
    data: pageData,
    children: (
      <>
        <XAxis dataKey="name" scale="band" />
        <YAxis />
        <Legend layout="vertical" align="right" verticalAlign="middle" />
        <CartesianGrid stroke="#f5f5f5" />
        <Tooltip />
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="uv" fill="#ff7300" />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <ReferenceLine x="Page C" stroke="red" label="Max PV PAGE" />
        <ReferenceDot x="Page C" y={1300} stroke="red" />
        <Brush>
          <LineChart>
            <Line dataKey="uv" stroke="#ff7300" dot={false} />
          </LineChart>
        </Brush>
      </>
    ),
  },
};

export const LineBarAreaScatter = {
  ...HorizontalChartTemplate,
  args: {
    data: pageData,
    children: (
      <>
        <XAxis dataKey="name" />
        <YAxis />
        <Legend layout="vertical" align="right" verticalAlign="middle" />
        <CartesianGrid stroke="#f5f5f5" />
        <Tooltip />
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <Scatter dataKey="pv" fill="red" />
        <Brush />
      </>
    ),
  },
};

export const LineBarHorizontal = {
  ...HorizontalChartTemplate,
  args: {
    data: pageData,
    children: (
      <>
        <XAxis />
        <YAxis />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Tooltip />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="pv" stroke="#ff7300" />
      </>
    ),
  },
};

// TODO: Add a template for vertical stories.
