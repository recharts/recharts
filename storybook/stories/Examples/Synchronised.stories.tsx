import React from 'react';
import { StorybookArgs } from '../../StorybookArgs';
import {
  Area,
  AreaChart,
  Brush,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from '../../../src';

const SynchronisationProps = {
  syncId: { control: 'text' },
  syncMethod: {
    control: {
      type: 'radio',
    },
    options: ['index', 'value', 'custom'],
    mapping: {
      custom: function customSyncMethod(tooltipTicks: ReadonlyArray<any>, data: any) {
        return (data.activeTooltipIndex + 1) % tooltipTicks.length;
      },
    },
  },
};

export default {
  argTypes: SynchronisationProps,
  component: LineChart,
  decorators: [],
};

const dataThatHappenToShareValues = [
  { name: 'Page A', uv: 1000, pv: 2000, amt: 3000 },
  { name: 'Page B', uv: 3000, pv: 3000, amt: 4000 },
  { name: 'Page C', uv: 4000, pv: 5000, amt: 6000 },
  { name: 'Page D', uv: 5000, pv: 6000, amt: 1000 },
  { name: 'Page E', uv: 6000, pv: 1000, amt: 2000 },
  { name: 'Page F', uv: 7000, pv: 2000, amt: 3000 },
];

export const Synchronized = {
  render: (args: StorybookArgs) => {
    return (
      <>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={dataThatHappenToShareValues}
            {...args}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
        <p>Maybe some other content</p>

        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={dataThatHappenToShareValues}
            {...args}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
            <Brush />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={dataThatHappenToShareValues}
            {...args}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Area type="monotone" dataKey="amt" stroke="#82ca9d" fill="#82ca9d" />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
      </>
    );
  },
  args: {
    syncMethod: 'index',
    syncId: 'my-sync-id',
  },
};
