import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from '../../../../src';
import { coordinateWithValueData, dateWithValueData, pageData, timeData } from '../../data';

export default {
  tags: ['autodocs'],
  component: XAxis,
  argTypes: {
    stroke: {
      control: { type: 'color' },
    },
  },
};

export const Simple = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <LineChart width={600} height={300} data={args.data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {args.secondLine}
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
  },
};

export const DoubleLine = {
  ...Simple,
  args: {
    data: pageData,
    secondLine: <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />,
  },
};

const SingleLineChart = {
  render: (args: Record<string, any>) => {
    const { data, lineDataKey = 'uv', ...xAxisArgs } = args;

    return (
      <ResponsiveContainer width="100%" height={500}>
        <LineChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" {...xAxisArgs} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={lineDataKey} stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
  },
};

export const StringTypeData = {
  ...SingleLineChart,
  args: {
    data: pageData,
  },
};

export const NumberTypeData = {
  ...SingleLineChart,
  args: {
    data: coordinateWithValueData,
    dataKey: 'x',
    type: 'number',
    lineDataKey: 'y',
  },
};

export const TimestampTypeData = {
  ...SingleLineChart,
  args: {
    data: dateWithValueData,
    dataKey: 'time',
    domain: ['auto', 'auto'],
    type: 'number',
    lineDataKey: 'value',
  },
};

export const DateTypeData = {
  ...SingleLineChart,
  args: {
    data: timeData,
    dataKey: 'x',
    lineDataKey: 'y',
  },
};

export const TickFormatterWithTimestamp = {
  ...SingleLineChart,
  args: {
    data: dateWithValueData,
    dataKey: 'time',
    domain: ['auto', 'auto'],
    scale: 'time',
    type: 'number',
    lineDataKey: 'value',
    tickFormatter: (value: number) =>
      new Date(value).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      }),
  },
};

export const TickFormatterWithRotation = {
  ...SingleLineChart,
  args: {
    data: pageData,
    tickMargin: 20,
    angle: 45,
  },
  parameters: {
    controls: {
      include: ['data', 'angle', 'tickMargin'],
    },
  },
};

export const TimestampTypeDataScaleTime = {
  ...SingleLineChart,
  args: {
    data: dateWithValueData,
    dataKey: 'time',
    domain: ['auto', 'auto'],
    scale: 'time',
    type: 'number',
    lineDataKey: 'value',
  },
};

export const NumberTypeDataWithCustomDomain = {
  ...SingleLineChart,
  args: {
    data: coordinateWithValueData,
    dataKey: 'x',
    domain: [100, 500],
    type: 'number',
    lineDataKey: 'y',
    allowDataOverflow: true,
  },
  parameters: {
    controls: {
      include: ['data', 'domain'],
    },
  },
};

export const NumberTypeDataAllowDataOverflow = {
  ...SingleLineChart,
  args: {
    data: coordinateWithValueData,
    dataKey: 'x',
    domain: [100, 500],
    type: 'number',
    lineDataKey: 'y',
    allowDataOverflow: true,
  },
  parameters: {
    controls: {
      include: ['data', 'allowDataOverflow'],
    },
  },
};

const customizedAxisTick = (props: { x: number; y: number; payload: { value: string } }) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
        {payload.value}
      </text>
    </g>
  );
};

export const CustomizedTicks = {
  ...SingleLineChart,
  args: {
    data: pageData,
    tick: customizedAxisTick,
  },
  parameters: {
    controls: {
      include: ['data'],
    },
  },
};

export const CustomizedTickLabel = {
  ...SingleLineChart,
  args: {
    data: pageData,
    label: { value: 'Pages', position: 'insideBottomRight', offset: 0 },
  },
};
