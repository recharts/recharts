import React from 'react';
import { Args } from '@storybook/react-vite';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  LabelList,
  LabelProps,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from '../../../../src';
import { pageData } from '../../data';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import { BarArgs } from '../arg-types/BarArgs';

const [surfaceWidth, surfaceHeight] = [600, 300];

export default {
  component: Bar,
  argTypes: BarArgs,
};

export const API = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart
          width={surfaceWidth}
          height={surfaceHeight}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
          data={pageData}
        >
          {/* All components are added to show the interaction with the Bar properties */}
          <Bar fill="red" stackId="1" dataKey="pv" />
          <Legend />
          <XAxis dataKey="name" />
          <YAxis />
          {/* The target component */}
          <Bar dataKey="uv" {...args} />
          <Tooltip />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarArgs),
    isAnimationActive: true,
    label: { fill: 'red', fontSize: 20 },
    activeBar: {
      strokeWidth: 4,
      stroke: 'blue',
      fill: 'red',
      radius: 10,
    },
    dataKey: 'uv',
    unit: ' Visitors',
    stackId: '1',
    stroke: 'red',
    fill: 'teal',
    background: true,
    strokeWidth: 2,
    radius: 10,
    minPointSize: 150,
    maxBarSize: 50,
    animationEasing: 'linear',
    animationBegin: 0,
    animationDuration: 1500,
  },
};

const dataWithSmallishValues = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 8,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 18,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
export const WithMinHeight = {
  render: (args: Args) => {
    const renderCustomizedLabel = (props: LabelProps) => {
      const { x, y, width, value } = props;
      if (value == null) {
        return null;
      }
      const radius = 10;

      const xPos = Number(x) + Number(width) / 2;
      const yPos = Number(y) - radius;

      return (
        <g>
          <circle cx={xPos} cy={yPos} r={radius} fill="#8884d8" />
          <text x={xPos} y={yPos} fill="#fff" textAnchor="middle" dominantBaseline="middle">
            {String(value).split(' ')[1]}
          </text>
        </g>
      );
    };

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          data={dataWithSmallishValues}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip />
          <Bar {...args}>
            <LabelList dataKey="name" content={renderCustomizedLabel} />
          </Bar>
          <Bar dataKey="uv" fill="#82ca9d" minPointSize={10} />
          <RechartsHookInspector />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarArgs),
    dataKey: 'pv',
    fill: '#8884d8',
    minPointSize: 5,
  },
};
