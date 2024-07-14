import React from 'react';
import { pageData, timeData } from '../../data';
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
} from '../../../../src';
import { CategoricalChartProps } from '../props/ChartProps';

export default {
  argTypes: {
    ...CategoricalChartProps,
  },
  component: Composed,
};

// This render template can be shared across multiple stories.
// All stories use the same data, but pass different children.
const HorizontalChartTemplate = {
  render: (args: any) => {
    return (
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
        <Tooltip />
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
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <Scatter dataKey="pv" fill="red" />
        <Brush />
        <Tooltip />
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
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="pv" stroke="#ff7300" />
        <Tooltip />
      </>
    ),
  },
};

export const LineBarAreaScatterTimeScale = {
  render: (args: Record<string, any>) => {
    const tickFormatter = (tick: Date) => {
      return tick.toLocaleString('en-GB', {
        /*
         * Forced timezone so that our visual diff renders the same for all contributors.
         * In real app you will probably leave timeZone undefined
         */
        timeZone: 'UTC',
        dateStyle: 'medium',
      });
    };
    return (
      <ResponsiveContainer width="100%" height={500}>
        <div style={{ width: '600px', margin: 'auto' }}>
          <p>A ComposedChart of time scale</p>
          <div className="composed-chart-wrapper">
            <Composed
              width={600}
              height={400}
              data={args.timeData}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis
                dataKey="x"
                domain={[args.from.getTime(), args.to.getTime()]}
                scale="time"
                type="number"
                tick={{ fontSize: 10, fill: 'red' }}
                tickFormatter={tickFormatter}
              />
              <YAxis />
              <Legend />
              <Area type="monotone" dataKey="y" fill="#8884d8" stroke="#8884d8" />
              <Bar dataKey="y" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="y" stroke="#ff7300" />
              <Tooltip />
            </Composed>
          </div>
        </div>
      </ResponsiveContainer>
    );
  },
  args: {
    from: new Date('2019-07-04T00:00:00.000Z'),
    to: new Date('2019-07-10T00:00:00.000Z'),
    timeData,
    data: pageData,
  },
};

// TODO: Add a template for vertical stories.
