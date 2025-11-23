import { Args, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import {
  CartesianGrid,
  Legend,
  ReferenceArea,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from '../../../src';
import { CategoricalChartProps } from '../API/props/ChartProps';
import { getStoryArgsFromArgsTypesObject } from '../API/props/utils';
import { StorybookArgs } from '../../StorybookArgs';
import { RechartsHookInspector } from '../../storybook-addon-recharts';
import { babiesAndVideosCorrelation } from '../data/spurriousCorrelations';

export default {
  component: ScatterChart,
  argTypes: CategoricalChartProps,
  docs: {
    autodocs: false,
  },
};

export const SpurriousCorrelation: StoryObj<StorybookArgs> = {
  render: (args: Args) => {
    return (
      <ScatterChart {...args}>
        <CartesianGrid vertical={false} yAxisId="axis-babies" />
        <XAxis type="category" dataKey="year" name="Year" />
        <YAxis
          yAxisId="axis-babies"
          type="number"
          dataKey="babies"
          label={{
            value: 'Babies born',
            position: 'center',
            angle: -90,
            stroke: 'black',
            dx: -20,
          }}
          domain={['dataMin', 'dataMax']}
          stroke="black"
          name="Babies born"
          unit=""
          orientation="left"
          axisLine={false}
          tickLine={false}
          tickCount={5}
        />
        <YAxis
          yAxisId="axis-youtube"
          type="number"
          dataKey="length"
          stroke="red"
          orientation="right"
          name="Video length"
          unit=""
          domain={['dataMin', 'dataMax']}
          label={{
            value: 'Length in seconds',
            position: 'center',
            angle: 90,
            stroke: 'red',
            dx: 30,
          }}
          tickCount={5}
          axisLine={false}
          tickLine={false}
        />
        <Legend />
        <Scatter
          lineType="joint"
          line
          name="Babies of all sexes born in the US named Mara. Source: US Social Security Administration (https://www.ssa.gov/oact/babynames/index.html)"
          yAxisId="axis-babies"
          fill="black"
          shape="diamond"
          strokeWidth={2}
          strokeDasharray="3 1"
        />
        <Scatter
          line
          lineType="joint"
          name="Average length of Stand-up Maths YouTube videos. Source: YouTube"
          yAxisId="axis-youtube"
          fill="red"
          strokeWidth={2}
          shape="circle"
        />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} shared={false} />
        <RechartsHookInspector />
      </ScatterChart>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    width: 800,
    height: 400,
    margin: {
      top: 0,
      right: 20,
      bottom: 0,
      left: 20,
    },
    data: babiesAndVideosCorrelation,
  },
};

export const WithDuplicatedCategory: StoryObj<StorybookArgs> = {
  render: (args: Args) => {
    const data = [
      { x: 100, y: 100, z: 200 },
      { x: 100, y: 200, z: 200 },
      { x: 100, y: 300, z: 200 },
    ];

    return (
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart>
          <CartesianGrid />
          <XAxis
            type="category"
            allowDuplicatedCategory={Boolean(args.allowDuplicatedCategory)}
            dataKey="x"
            name="stature"
            unit="cm"
          />
          <YAxis
            type="category"
            allowDuplicatedCategory={Boolean(args.allowDuplicatedCategory)}
            dataKey="y"
            name="weight"
            unit="kg"
          />
          <Scatter activeShape={{ fill: 'red' }} name="A school" data={data} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <RechartsHookInspector />
        </ScatterChart>
      </ResponsiveContainer>
    );
  },
  args: {
    allowDuplicatedCategory: false,
  },
};

export const ChangingDataKey = {
  render: (args: Args) => {
    const data1 = [
      { x: { value: 1 }, name: 'x1' },
      { x: { value: 2 }, name: 'x2' },
      { x: { value: 3 }, name: 'x3' },
    ];
    const data2 = [
      { y: { value: 3 }, name: 'y1' },
      { y: { value: 2 }, name: 'y2' },
      { y: { value: 1 }, name: 'y3' },
    ];

    const dataKey1 = (d: any) => {
      return d.x.value;
    };
    const dataKey2 = (d: any) => {
      return d.y.value;
    };

    const [useData2, setUseData2] = useState(false);
    const [visible, setVisible] = useState(true);

    return (
      <>
        <button
          type="button"
          onClick={() => {
            setUseData2(false);
            setVisible(true);
          }}
        >
          Use data1
        </button>
        <button
          type="button"
          onClick={() => {
            setUseData2(true);
            setVisible(true);
          }}
        >
          Use data2
        </button>
        <button
          type="button"
          onClick={() => {
            setVisible(false);
          }}
        >
          Hide
        </button>
        <ScatterChart {...args} data={useData2 ? data2 : data1}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis dataKey={useData2 ? dataKey2 : dataKey1} width="auto" />
          <ZAxis range={[200, 200]} />
          <Tooltip />
          <Legend />
          <Scatter
            name="Animated Scatter"
            lineType="joint"
            line
            hide={!visible}
            dataKey={useData2 ? dataKey2 : dataKey1}
            stroke="#8884d8"
            fill="#8884d8"
            strokeWidth={3}
            strokeDasharray="2 2"
            label={{ fill: 'red', dy: -25, dataKey: useData2 ? dataKey2 : dataKey1 }}
          />
          <RechartsHookInspector />
        </ScatterChart>
      </>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    width: 500,
    height: 300,
    margin: {
      top: 30,
      right: 30,
      left: 20,
      bottom: 5,
    },
  },
};

const getHourFromTimestamp = (value: number) => {
  const data = new Date(value as number);
  let hour = data.getHours();
  const minute = data.getMinutes();

  // Format to 12-hour clock with AM/PM
  const ampm = hour >= 12 ? 'PM' : 'AM';
  hour %= 12;
  hour = hour === 0 ? 12 : hour;

  const label = minute > 0 ? `${hour}:${minute.toString().padStart(2, '0')} ${ampm}` : `${hour} ${ampm}`;
  return label;
};

export const EmptyChart = {
  render: () => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <ReferenceArea y1={70} y2={150} />
          <XAxis
            type="number"
            allowDataOverflow
            ticks={[
              new Date('2025-05-06T00:00:00').getTime(),
              new Date('2025-05-06T03:00:00').getTime(),
              new Date('2025-05-06T06:00:00').getTime(),
              new Date('2025-05-06T09:00:00').getTime(),
              new Date('2025-05-06T12:00:00').getTime(),
              new Date('2025-05-06T15:00:00').getTime(),
              new Date('2025-05-06T18:00:00').getTime(),
              new Date('2025-05-06T21:00:00').getTime(),
              new Date('2025-05-07T00:00:00').getTime(),
            ]}
            tickFormatter={(tickValue, _index) => {
              if (typeof tickValue !== 'number') return String(tickValue);
              const label = getHourFromTimestamp(tickValue);
              return label;
            }}
            dataKey="hour"
            domain={[new Date('2025-05-06T00:00:00').getTime(), new Date('2025-05-07T00:00:00').getTime()]}
          />
          <YAxis allowDataOverflow type="number" ticks={[0, 80, 180, 220]} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="A school" data={[]} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    );
  },
};
