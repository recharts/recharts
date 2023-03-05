import React, { useState } from 'react';
import { ComposedChart, Bar, ResponsiveContainer, Cell } from '../../../../src';
import { pageData } from '../../data';

export default {
  component: Bar,
  argTypes: {
    background: {
      control: {
        type: 'boolean',
      },
    },
    stroke: {
      control: { type: 'color' },
    },
    fill: {
      control: { type: 'color' },
    },
    animationEasing: {
      options: ['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear'],
      control: {
        type: 'select',
      },
    },
  },
};

const [surfaceWidth, surfaceHeight] = [600, 300];

const Basic = {
  render: (args: Record<string, any>) => {
    const { data, defs, ...areaArgs } = args;

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
          data={data}
        >
          {defs}
          <Bar dataKey="uv" isAnimationActive={false} {...areaArgs} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
    dataKey: 'uv',
  },
  parameters: { controls: { include: ['data'] } },
};

export const Simple = {
  ...Basic,
  parameters: { controls: { include: ['data', 'dataKey'] } },
  docs: {
    description: {
      story: 'The dataKey defines the y-Values of a Line. Without an xAxis, the index is used for x.',
    },
  },
};

export const Style = {
  ...Basic,
  args: {
    data: pageData,
    stroke: 'red',
    fill: 'teal',
    background: false,
    strokeWidth: 2,
    isAnimationActive: true,
  },
  parameters: {
    controls: {
      include: ['stroke', 'fill', 'background', 'strokeWidth', 'isAnimationActive'],
    },
  },
};

export const Stacked = {
  render: (args: Record<string, any>) => {
    const { data, dataKey1, dataKey2, areaColor1, areaColor2, ...areaArgs } = args;

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
          data={data}
        >
          <Bar stackId="pv-uv" dataKey={dataKey1} stroke={areaColor1} fill={areaColor1} {...areaArgs} />
          <Bar stackId="pv-uv" dataKey={dataKey2} stroke={areaColor2} fill={areaColor2} {...areaArgs} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
    dataKey1: 'uv',
    dataKey2: 'pv',
    areaColor1: '#8884d8',
    areaColor2: '#82ca9d',
    isAnimationActive: false,
  },
  argTypes: {
    areaColor1: {
      control: { type: 'color' },
    },
    areaColor2: {
      control: { type: 'color' },
    },
  },
  parameters: {
    controls: {
      include: ['data', 'dataKey1', 'dataKey2', 'areaColor1', 'areaColor2'],
    },
  },
};

export const StackedAndUnstacked = {
  render: (args: Record<string, any>) => {
    const { data, dataKey1, dataKey2, dataKey3, areaColor1, areaColor2, areaColor3, ...areaArgs } = args;

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
          data={data}
        >
          <Bar stackId="pv-uv" dataKey={dataKey1} stroke={areaColor1} fill={areaColor1} {...areaArgs} />
          <Bar stackId="pv-uv" dataKey={dataKey2} stroke={areaColor2} fill={areaColor2} {...areaArgs} />
          <Bar dataKey={dataKey3} stroke={areaColor3} fill={areaColor3} {...areaArgs} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
    dataKey1: 'uv',
    dataKey2: 'pv',
    dataKey3: 'amt',
    areaColor1: '#8884d8',
    areaColor2: '#82ca9d',
    areaColor3: '#ffc658',
    isAnimationActive: false,
  },
  argTypes: {
    areaColor1: {
      control: { type: 'color' },
    },
    areaColor2: {
      control: { type: 'color' },
    },
    areaColor3: {
      control: { type: 'color' },
    },
  },
  parameters: {
    controls: {
      include: ['data', 'dataKey1', 'dataKey2', 'dataKey3', 'areaColor1', 'areaColor2', 'areaColor3'],
    },
  },
};

export const CustomizedEvent = {
  render: (args: Record<string, any>) => {
    const { data, ...areaArgs } = args;

    const [activeIndex, setActiveIndex] = useState(1);

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
          data={data}
        >
          <Bar onClick={(_data, index) => setActiveIndex(index)} dataKey="uv" isAnimationActive={false} {...areaArgs}>
            {data.map((_entry, index: number) => (
              <Cell cursor="pointer" fill={index === activeIndex ? '#82ca9d' : '#8884d8'} key={`cell-${index}`} />
            ))}
          </Bar>
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
    isAnimationActive: false,
  },
  parameters: { controls: { include: ['data'] } },
};

const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = props => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

export const CustomizedShape = {
  render: (args: Record<string, any>) => {
    const { data, ...areaArgs } = args;

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
          data={data}
        >
          <Bar
            dataKey="uv"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: 'top' }}
            isAnimationActive={false}
            {...areaArgs}
          >
            {data.map((entry, index: number) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
    isAnimationActive: false,
  },
  parameters: { controls: { include: ['data'] } },
};

export const FillGradient = {
  render: (args: Record<string, any>) => {
    const { data, dataKey1, dataKey2, ...areaArgs } = args;

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
          data={data}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Bar dataKey={dataKey1} stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" {...areaArgs} />
          <Bar dataKey={dataKey2} stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" {...areaArgs} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
    dataKey1: 'uv',
    dataKey2: 'pv',
    isAnimationActive: false,
  },
  parameters: {
    controls: {
      include: ['data'],
    },
  },
};

export const Animation = {
  ...Basic,
  args: {
    data: pageData,
    isAnimationActive: true,
    animationEasing: 'linear',
    animationBegin: 0,
    animationDuration: 1500,
  },
  parameters: {
    controls: { include: ['animationEasing', 'isAnimationActive', 'animationBegin', 'animationDuration'] },
  },
};
