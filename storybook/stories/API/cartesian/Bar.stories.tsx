/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { Args } from '@storybook/react';
import { General as GeneralProps } from '../props/CartesianComponentShared';
import { ComposedChart, Bar, ResponsiveContainer, Cell } from '../../../../src';
import { PageDataType, pageData } from '../../data';
import { GeneralStyle } from '../props/Styles';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';

const [surfaceWidth, surfaceHeight] = [600, 300];

const StyleProps: Args = {
  stroke: GeneralStyle.stroke,
  fill: GeneralStyle.fill,
  strokeWidth: GeneralStyle.strokeWidth,
  background: {
    control: {
      type: 'boolean',
    },
  },
};

export default {
  component: Bar,
  argTypes: {
    ...GeneralProps,
    ...StyleProps,
  },
};

const Base = {
  render: (args: Record<string, any>) => {
    const { data, defs, ...barArgs } = args;

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
          {defs}
          <Bar dataKey="uv" isAnimationActive={false} {...barArgs} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  parameters: { controls: { include: ['data'] } },
};

export const General = {
  ...Base,
  args: {
    ...getStoryArgsFromArgsTypesObject(GeneralProps),
  },
  parameters: {
    controls: { include: Object.keys(GeneralProps) },
  },
  docs: {
    description: {
      story: 'The dataKey defines the y-Values of a Line. Without an xAxis, the index is used for x.',
    },
  },
};

export const Style = {
  ...Base,
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
    const { dataKey1, dataKey2, barColor1, barColor2, ...barArgs } = args;

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
          <Bar stackId="pv-uv" dataKey={dataKey1} stroke={barColor1} fill={barColor1} {...barArgs} />
          <Bar stackId="pv-uv" dataKey={dataKey2} stroke={barColor2} fill={barColor2} {...barArgs} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    dataKey1: 'uv',
    dataKey2: 'pv',
    barColor1: '#8884d8',
    barColor2: '#82ca9d',
    isAnimationActive: false,
  },
  argTypes: {
    barColor1: {
      control: { type: 'color' },
    },
    barColor2: {
      control: { type: 'color' },
    },
  },
  parameters: {
    controls: {
      include: ['data', 'dataKey1', 'dataKey2', 'barColor1', 'barColor2'],
    },
  },
};

export const StackedAndUnstacked = {
  render: (args: Record<string, any>) => {
    const { dataKey1, dataKey2, dataKey3, barColor1, barColor2, barColor3, ...barArgs } = args;

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
          <Bar stackId="pv-uv" dataKey={dataKey1} stroke={barColor1} fill={barColor1} {...barArgs} />
          <Bar stackId="pv-uv" dataKey={dataKey2} stroke={barColor2} fill={barColor2} {...barArgs} />
          <Bar dataKey={dataKey3} stroke={barColor3} fill={barColor3} {...barArgs} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    dataKey1: 'uv',
    dataKey2: 'pv',
    dataKey3: 'amt',
    barColor1: '#8884d8',
    barColor2: '#82ca9d',
    barColor3: '#ffc658',
    isAnimationActive: false,
  },
  argTypes: {
    barColor1: {
      control: { type: 'color' },
    },
    barColor2: {
      control: { type: 'color' },
    },
    barColor3: {
      control: { type: 'color' },
    },
  },
  parameters: {
    controls: {
      include: ['data', 'dataKey1', 'dataKey2', 'dataKey3', 'barColor1', 'barColor2', 'barColor3'],
    },
  },
};

export const CustomizedEvent = {
  render: (args: Record<string, any>) => {
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
          data={pageData}
        >
          <Bar onClick={(_data, index) => setActiveIndex(index)} dataKey="uv" isAnimationActive={false} {...args}>
            {pageData.map((_entry: PageDataType, index: number) => (
              <Cell cursor="pointer" fill={index === activeIndex ? '#82ca9d' : '#8884d8'} key={`cell-${index}`} />
            ))}
          </Bar>
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
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

const TriangleBar = (props: { fill: string; x: number; y: number; width: number; height: number }) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

export const CustomizedShape = {
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
          <Bar
            dataKey="uv"
            fill="#8884d8"
            shape={props => <TriangleBar {...props} />}
            label={{ position: 'top' }}
            isAnimationActive={false}
            {...args}
          >
            {pageData.map((_entry: PageDataType, index: number) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    isAnimationActive: false,
  },
  parameters: { controls: { include: ['data'] } },
};

export const FillGradient = {
  render: (args: Record<string, any>) => {
    const { dataKey1, dataKey2, ...barArgs } = args;

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
          <Bar dataKey={dataKey1} stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" {...barArgs} />
          <Bar dataKey={dataKey2} stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" {...barArgs} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
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
  ...Base,
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
