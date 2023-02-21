/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Surface, Line, ResponsiveContainer, ComposedChart } from '../../../../src';
import { ccoordinateWithNullY, coordinateData, coordinateWithValueData } from '../../data';

export default {
  component: Line,
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
  },
};

export const Simple = {
  render: (args: Record<string, any>) => {
    const [height, width] = [300, 300];

    const { data, ...lineArgs } = args;
    return (
      <ResponsiveContainer width="100%" height={height}>
        <ComposedChart
          width={width}
          height={height}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
          data={data}
        >
          {/* Setting a default for the dataKey here, allows us to hide the dataKey
          as a control in other stories, yet reusing the same template. */}
          <Line isAnimationActive={false} dataKey="y" {...lineArgs} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: coordinateWithValueData,
    dataKey: 'y',
  },
  parameters: {
    controls: { include: ['data', 'dataKey'] },
    docs: {
      description: {
        story: 'The dataKey defines the y-Values of a Line. Without an xAxis, the index is used for x',
      },
    },
  },
};

export const LineFromData = {
  ...Simple,
  args: {
    data: ccoordinateWithNullY,
    type: 'linear',
    connectNulls: false,
  },
  parameters: {
    controls: { include: ['type', 'connectNulls'] },
    docs: {
      description: {
        story:
          'The line is generated from the data by connecting the dots. ' +
          'The type and connectNulls define how the dots are used.',
      },
    },
  },
};

export const Style = {
  ...Simple,
  args: {
    data: coordinateWithValueData,
    stroke: 'red',
    fill: 'teal',
    dot: { r: 10 },
    type: 'linear',
  },
  parameters: {
    controls: { include: ['stroke', 'fill', 'type'] },
    docs: {
      description: {
        story: 'The type, fill and stroke define the style of a line.',
      },
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
  ...Simple,
  args: {
    data: coordinateWithValueData,
    isAnimationActive: true,
    dot: renderDot,
  },
  parameters: {
    controls: {},
    docs: {
      description: {
        story: 'The dot of the line can be customised. Find further possible behaviour on the Dot stories.',
      },
    },
  },
};

const renderLabel = (props: { index: number; x: number; y: number }) => {
  const { index, x, y } = props;

  return (
    <text key={index} x={x} y={y} className="customized-label">
      {`Customized Label: ${x}, ${y}`}
    </text>
  );
};

export const CustomizedLabel = {
  ...Simple,
  args: {
    data: coordinateWithValueData,
    isAnimationActive: false,
    label: renderLabel,
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const { getAllByText } = within(canvasElement);

    // to make getAllByText works
    await new Promise(r => setTimeout(r, 0));

    await expect(getAllByText(/Customized Label/)).toHaveLength(5);
  },
};

export const Points = {
  render: (args: Record<string, any>) => {
    const { points } = args;

    const [surfaceWidth, surfaceHeight] = [600, 300];

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
          <Line isAnimationActive={false} points={points} />
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
          'You can directly set the x and y coordinates of a Line via points. This overrides dataKey and data.' +
          'The coordinate system of the points lies in the top right of the bounding box.' +
          'Using points, a Line can even be used within only a Surface, without a Chart.',
      },
    },
  },
};
