import React from 'react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { StoryObj } from '@storybook/react';
import { Surface, Line, ResponsiveContainer, ComposedChart, Legend, Tooltip, XAxis, YAxis } from '../../../../src';
import { coordinateData, pageData } from '../../data';
import { EventHandlers } from '../props/EventHandlers';
import { AnimationProps } from '../props/AnimationProps';
import { legendType } from '../props/Legend';
import { LineStyle } from '../props/Styles';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { General as GeneralProps, Internal } from '../props/CartesianComponentShared';
import { ResponsiveProps } from '../props/Tooltip';

export default {
  argTypes: {
    ...EventHandlers,
    ...AnimationProps,
    legendType,
    ...GeneralProps,
    ...Internal,
    ...ResponsiveProps,
    ...LineStyle,
    // Deprecated
    dangerouslySetInnerHTML: { table: { category: 'Deprecated' }, hide: true, disable: true },
    // Other
    baseLine: { table: { category: 'Other' } },
    left: { table: { category: 'Other' } },
    top: { table: { category: 'Other' } },
    xAxis: { table: { category: 'Other' } },
    yAxis: { table: { category: 'Other' } },
  },
  component: Line,
};

export const AllProps = {
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
          <Line isAnimationActive={false} dataKey="uv" {...args} />
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
          <Line isAnimationActive={false} dataKey="uv" {...args} />
          {/* All further components are added to show the interaction with the Line properties */}
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
        story: 'The dataKey defines the y-Values of a Line. Without an xAxis, the index is used for x.',
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
          'The line is generated from the data by connecting the dots. ' +
          'The type and connectNulls define how the dots are used.',
      },
    },
  },
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
  ...General,
  args: {
    dot: renderDot,
  },
  parameters: {
    controls: { include: ['dot'] },
    docs: {
      description: {
        story: 'The dot of the line can be customized. Find further possible behaviour on the Dot stories.',
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

export const CustomizedLabel: StoryObj = {
  ...General,
  args: {
    isAnimationActive: false,
    label: renderLabel,
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const { getAllByText } = within(canvasElement);
    // to make getAllByText works
    await new Promise(r => setTimeout(r, 0));
    expect(getAllByText(/Customized Label/)).toHaveLength(pageData.length);
  },
  parameters: {
    controls: { include: ['label'] },
    docs: {
      description: {
        story: 'The dot of the line can be customized. Find further possible behaviour on the Dot stories.',
      },
    },
  },
};

export const Points: StoryObj = {
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
          'You can directly set the x and y coordinates of a Line via points. This overrides dataKey and data. ' +
          'The coordinate system of the points lies in the top right of the bounding box. ' +
          'Using points, a Line can even be used within only a Surface, without a Chart.',
      },
    },
  },
};
