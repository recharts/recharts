import React from 'react';
import { ComposedChart, Area, ResponsiveContainer, Surface } from '../../../../src';
import { coordinateWithValueData } from '../../data';

export default {
  tags: ['autodocs'],
  component: Area,
  argTypes: {
    connectNulls: {
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
    type: {
      // TODO: These options should be generated from the type directly instead of duplicating the type information here. Will iterate.
      options: [
        'basis',
        'basisClosed',
        'basisOpen',
        'linear',
        'linearClosed',
        'natural',
        'monotoneX',
        'monotoneY',
        'monotone',
        'step',
        'stepBefore',
        'stepAfter',
      ],
      control: {
        type: 'select',
      },
    },
    animationEasing: {
      // TODO: These options should be generated from the animationEasing directly instead of duplicating the animationEasing information here. Will iterate.
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
    data: coordinateWithValueData,
    stroke: 'red',
    fill: 'teal',
    type: 'linear',
    baseline: 200,
    connectNulls: false,
    strokeWidth: 2,
    isAnimationActive: true,
  },
  parameters: {
    controls: { include: ['stroke', 'fill', 'type', 'baseline', 'connectNulls', 'strokeWidth', 'isAnimationActive'] },
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
          <Area stackId="pv-uv" dataKey={dataKey1} stroke={areaColor1} fill={areaColor1} {...areaArgs} />
          <Area stackId="pv-uv" dataKey={dataKey2} stroke={areaColor2} fill={areaColor2} {...areaArgs} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: coordinateWithValueData,
    dataKey1: 'x',
    dataKey2: 'y',
    areaColor1: 'lightblue',
    areaColor2: 'lightgreen',
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

export const Animation = {
  ...Basic,
  args: {
    data: coordinateWithValueData,
    isAnimationActive: true,
    animationEasing: 'linear',
    animationBegin: 0,
    animationDuration: 1500,
  },
  parameters: {
    controls: { include: ['animationEasing', 'isAnimationActive', 'animationBegin', 'animationDuration'] },
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
          <Area dataKey="" isAnimationActive={false} points={points} />
        </Surface>
      </ResponsiveContainer>
    );
  },
  args: {
    points: coordinateWithValueData,
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
