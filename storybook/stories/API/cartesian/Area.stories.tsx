import React from 'react';
import { StoryObj } from '@storybook/react';
import { ComposedChart, Area, ResponsiveContainer, Surface, Legend, Tooltip, XAxis, YAxis } from '../../../../src';
import { coordinateData, coordinateWithValueData, pageData } from '../../data';
import { LineStyle } from '../props/Styles';
import { AnimationProps } from '../props/AnimationProps';
import { legendType } from '../props/Legend';
import { General as GeneralProps, Internal } from '../props/CartesianComponentShared';
import { ResponsiveProps } from '../props/Responsive';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';

const AreaSpecificProps = {
  // These two props are not documented on the website. Further investigation is required to document them.
  baseValue: { table: { category: 'Other' } },
  isRange: { table: { category: 'Other' } },
  stackId: {
    description: `The id of group which this area should be stacked into. If no id is specified, 
    the area will not be stacked. When two components have the same value axis and same stackId, 
    then they are stacked in order.`,
    table: {
      type: {
        summary: 'string | number',
      },
      category: 'General',
    },
  },
};

export default {
  component: Area,
  argTypes: {
    ...AreaSpecificProps,
    ...LineStyle,
    ...AnimationProps,
    legendType,
    ...GeneralProps,
    ...Internal,
    ...ResponsiveProps,
    // Other
    baseLine: { table: { category: 'Other' } },
    left: { table: { category: 'Other' } },
    top: { table: { category: 'Other' } },
    xAxis: { table: { category: 'Other' } },
    yAxis: { table: { category: 'Other' } },
  },
};

const [surfaceWidth, surfaceHeight] = [600, 300];

export const AllProps = {
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
          <Area dataKey="uv" isAnimationActive={false} {...args} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
};

export const General: StoryObj = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
          data={pageData}
        >
          <Area isAnimationActive={false} dataKey="uv" {...args} />
          {/* All further components are added to show the interaction with the Area properties */}
          <Legend />
          <Tooltip />
          <XAxis dataKey="name" />
          <YAxis />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(GeneralProps),
  },
  parameters: {
    controls: { include: Object.keys(GeneralProps) },
    docs: {
      description: {
        story: 'The dataKey defines the y-Values of a Area. Without an xAxis, the index is used for x.',
      },
    },
  },
};

export const Style: StoryObj = {
  ...General,
  args: {
    ...getStoryArgsFromArgsTypesObject(LineStyle),
    type: 'linear',
    connectNulls: true,
    stroke: 'red',
    fill: 'teal',
    strokeDasharray: '4 1',
    label: { fill: 'red', fontSize: 20 },
    dot: { stroke: 'green', strokeWidth: 2 },
  },
  parameters: {
    controls: { include: Object.keys(LineStyle) },
    docs: {
      description: {
        story:
          'The Area is generated from the data by connecting the dots. ' +
          'The type and connectNulls define how the dots are used.',
      },
    },
  },
};

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
          <Area dataKey="y" isAnimationActive={false} baseLine={200} {...areaArgs} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: coordinateWithValueData,
    dataKey: 'y',
  },
  parameters: { controls: { include: ['data'] } },
};

export const Responsive: StoryObj = {
  ...General,
  args: {
    ...getStoryArgsFromArgsTypesObject(ResponsiveProps),
    activeDot: { stroke: 'green', strokeWidth: 2 },
    tooltipType: 'responsive',
  },
  parameters: {
    controls: {
      include: Object.keys(ResponsiveProps),
      tooltipType: { type: 'select', options: ['responsive', 'none'] },
    },
    docs: {
      description: {
        story: '', // TODO
      },
    },
  },
};

export const Animation: StoryObj = {
  ...General,
  args: {
    ...getStoryArgsFromArgsTypesObject(AnimationProps),
    isAnimationActive: true,
  },
  parameters: {
    controls: { include: Object.keys(AnimationProps) },
    docs: {
      description: { story: 'Reloading the story triggers the animation.' },
    },
  },
};

export const Stacked = {
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
          <Area fill="red" isAnimationActive={false} stackId={args.stackId1} dataKey="uv" />
          <Area fill="green" isAnimationActive={false} stackId={args.stackId2} dataKey="pv" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    stackId1: '1',
    stackId2: '1',
  },
  parameters: {
    controls: { include: ['stackId1', 'stackId2'] },
  },
};

const renderDot = (props: { cx: number; cy: number }) => {
  const { cx, cy } = props;

  return (
    <svg x={cx - 10} y={cy - 10} width={20} height={20} fill="green" viewBox="0 0 1024 1024">
      {/* eslint-disable-next-line max-len */}
      <path d="M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z" />
    </svg>
  );
};

export const CustomizedDot = {
  ...Basic,
  args: {
    data: coordinateWithValueData,
    isAnimationActive: false,
    dot: renderDot,
  },
};

const renderLabel = (props: { index: number; x: number; y: number }) => {
  const { index, x, y } = props;

  return (
    <text key={index} x={x} y={y} className="customized-label">
      {`${x}, ${y}`}
    </text>
  );
};

export const CustomizedLabel = {
  ...Basic,
  args: {
    data: coordinateWithValueData,
    isAnimationActive: false,
    label: renderLabel,
  },
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
          <Area
            type="monotone"
            dataKey={dataKey1}
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
            {...areaArgs}
          />
          <Area
            type="monotone"
            dataKey={dataKey2}
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
            {...areaArgs}
          />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: coordinateWithValueData,
    dataKey1: 'x',
    dataKey2: 'y',
    isAnimationActive: false,
  },
  parameters: {
    controls: {
      include: ['data'],
    },
  },
};

export const FillPattern = {
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
            <pattern id="left" width="12" height="4" patternUnits="userSpaceOnUse">
              <rect width="4" height="4" fill="#8884d8" />
            </pattern>
            <pattern id="right" width="8" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="4" height="4" fill="#82ca9d" />
            </pattern>
          </defs>
          <Area type="monotone" dataKey={dataKey1} stroke="#8884d8" fillOpacity={1} fill="url(#left)" {...areaArgs} />
          <Area type="monotone" dataKey={dataKey2} stroke="#82ca9d" fillOpacity={1} fill="url(#right)" {...areaArgs} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: coordinateWithValueData,
    dataKey1: 'x',
    dataKey2: 'y',
    isAnimationActive: false,
  },
  parameters: {
    controls: {
      include: ['data'],
    },
  },
};

export const Points = {
  render: (args: Record<string, any>) => {
    const { points } = args;

    return (
      <ResponsiveContainer width="100%" height={surfaceHeight}>
        <Surface
          width={surfaceWidth}
          height={surfaceHeight}
          viewBox={{
            x: 0,
            y: 0,
            width: surfaceWidth,
            height: surfaceHeight,
          }}
        >
          <Area dataKey={undefined} isAnimationActive={false} points={points} />
        </Surface>
      </ResponsiveContainer>
    );
  },
  args: {
    points: coordinateData,
  },
  parameters: {
    controls: { include: ['points'] },
    docs: {
      description: {
        story:
          'You can directly set the x and y coordinates of a Area via `points`. This overrides `dataKey` and `data`. ' +
          'The coordinate system of the `points` lies in the top right of the bounding box. ' +
          'Using `points`, an Area can even be used within only a Surface, without a Chart.',
      },
    },
  },
};

export const WithAccessibilityLayer: StoryObj = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
          data={pageData}
          accessibilityLayer
        >
          <Area isAnimationActive={false} dataKey="uv" {...args} />
          {/* All further components are added to show the interaction with the Area properties */}
          <Legend />
          <Tooltip />
          <XAxis dataKey="name" />
          <YAxis />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(GeneralProps),
  },
  parameters: {
    controls: { include: Object.keys(GeneralProps) },
    docs: {
      description: {
        story: 'You can tab to this chart. From there, you can use the arrow keys to navigate along the chart.',
      },
    },
  },
};
