import React from 'react';
import { StorybookArgs } from '../../StorybookArgs';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Brush,
  CartesianGrid,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from '../../../src';
import { PageData } from '../../../test/_data';

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

function shift<T>(array: T[], amount: number): T[] {
  return [...array.slice(amount), ...array.slice(0, amount)];
}

const data1 = PageData;

const data2 = shift(data1, 1);

const data3 = shift(data1, 2);

const data4 = shift(data1, 3);

const data5 = shift(data1, 4);

const data6 = shift(data1, 5);

const green = '#82ca9d';

const purple = '#8884d8';

const blue = '#2c5097';

const red = '#d71e1e';

const orange = '#ff7300';

const pink = '#dd4a98';

export const Synchronised = {
  render: (args: StorybookArgs) => {
    return (
      <>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={data1}
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
            <Area type="monotone" dataKey="uv" stroke={green} fill={green} />
            <Brush />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={200}>
          <BarChart
            width={500}
            height={200}
            data={data2}
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
            <Bar dataKey="pv" stroke={purple} fill={purple} />
            <Brush />
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
        <p>Maybe some other content</p>

        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={data3}
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
            <Line type="monotone" dataKey="uv" stroke={blue} fill={blue} />
            <Brush />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={200}>
          <PieChart
            width={500}
            height={200}
            {...args}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <Pie data={data4} dataKey="pv" fill={red} />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={200}>
          <RadarChart
            width={500}
            height={200}
            data={data5}
            {...args}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <PolarGrid strokeDasharray="3 3" />
            <PolarRadiusAxis dataKey="uv" type="number" />
            <PolarAngleAxis dataKey="name" type="category" />
            <Radar dataKey="uv" stroke={orange} fill={orange} />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={200}>
          <RadialBarChart
            width={500}
            height={200}
            data={data6}
            {...args}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <PolarGrid strokeDasharray="3 3" />
            <PolarRadiusAxis dataKey="name" type="category" />
            <PolarAngleAxis dataKey="pv" type="number" />
            <RadialBar dataKey="pv" stroke={pink} fill={pink} />
            <Tooltip />
          </RadialBarChart>
        </ResponsiveContainer>
      </>
    );
  },
  args: {
    syncMethod: 'index',
    syncId: 'my-sync-id',
  },
};

export const SynchronisedWithDataOnItem = {
  render: (args: StorybookArgs) => {
    const series = [
      {
        name: 'Series 1',
        data: [
          { x: 0, y: 0 },
          { x: 1, y: 1 },
          { x: 2, y: 2 },
        ],
      },
    ];

    const series2 = [
      {
        name: 'Series 1',
        data: [
          { x: 1, y: 0 },
          { x: 2, y: 1 },
          { x: 3, y: 2 },
        ],
      },
    ];

    return (
      <>
        <LineChart {...args} width={500} height={300}>
          <XAxis dataKey="x" type="number" domain={[0, 3]} />
          <YAxis dataKey="y" />
          <Tooltip cursor={{ stroke: 'red' }} />
          {series.map(s => (
            <Line dataKey="y" data={s.data} name={s.name} key={s.name} />
          ))}
        </LineChart>
        <LineChart {...args} width={500} height={300}>
          <XAxis dataKey="x" type="number" domain={[0, 3]} />
          <YAxis dataKey="y" />
          <Tooltip cursor={{ stroke: 'red', strokeWidth: '5px' }} />
          {series2.map(s => (
            <Line dataKey="y" data={s.data} name={s.name} key={s.name} />
          ))}
          <Brush />
        </LineChart>
      </>
    );
  },
  args: {
    syncMethod: 'index',
    syncId: 'my-sync-id',
  },
};
