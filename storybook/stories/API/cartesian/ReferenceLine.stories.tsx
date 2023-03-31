import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import React from 'react';
import { Args, StoryObj } from '@storybook/react';
import { Area, AreaChart, ReferenceLine, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from '../../../../src';
import { pageData } from '../../data';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { EventHandlers } from '../props/EventHandlers';
import { AnimationProps } from '../props/AnimationProps';
import { GeneralStyle } from '../props/Styles';

const GeneralProps: Args = {
  xAxisId: {
    description: 'The id of x-axis which is corresponding to the data.',
    table: { type: { summary: 'string | number' }, category: 'General' },
  },
  yAxisId: {
    description: 'The id of y-axis which is corresponding to the data.',
    table: { type: { summary: 'string | number' }, category: 'General' },
  },
  x: {
    description: `If set a string or a number, a vertical line perpendicular to the x-axis specified by xAxisId 
    will be drawn. If the specified x-axis is a number axis, the type of x must be Number. If the specified x-axis 
    is a category axis, the value of x must be one of the categories, otherwise no line will be drawn.`,
    table: { type: { summary: 'number | string' }, category: 'General' },
  },
  y: {
    description: `If set a string or a number, a horizontal line perpendicular to the y-axis specified by yAxisId 
    will be drawn. If the specified y-axis is a number axis, the type of y must be Number. If the specified y-axis 
    is a category axis, the value of y must be one of the catagories, otherwise no line will be drawn.`,
    table: { type: { summary: 'number | string' }, category: 'General' },
  },
  xAxis: {
    description: 'The configuration of the corresponding x-axis, usually calculated internally.',
    table: { type: { summary: 'object' }, category: 'General' },
  },
  yAxis: {
    description: 'The configuration of the corresponding y-axis, usually calculated internally.',
    table: { type: { summary: 'object' }, category: 'General' },
  },
  ifOverflow: {
    description: `Defines how to draw the reference line if it falls partly outside the canvas. If set to 'discard', 
    the reference line will not be drawn at all. If set to 'hidden', the reference line will be clipped to the canvas. 
    If set to 'visible', the reference line will be drawn completely. If set to 'extendDomain', the domain of the 
    overflown axis will be extended such that the reference line fits into the canvas.`,
    table: { type: { summary: "'discard' | 'hidden' | 'visible' | 'extendDomain'" }, category: 'General' },
    default: 'discard',
  },
};

const LabelProps: Args = {
  label: {
    description: `If set a string or a number, default label will be drawn, and the option is content. 
    If set a React element, the option is the custom react element of drawing label. If set a function, 
    the function will be called to render customized label.`,
    table: { type: { summary: 'string | number | ReactElement | Function' }, category: 'Label' },
  },
};

const StyleProps: Args = {
  stroke: {
    ...GeneralStyle.stroke,
    defaultValue: '#ccc',
  },
  strokeWidth: GeneralStyle.strokeWidth,
  strokeDasharray: GeneralStyle.strokeDasharray,
};

export default {
  argTypes: {
    ...EventHandlers,
    ...AnimationProps,
    ...GeneralProps,
    ...LabelProps,
    ...StyleProps,
    // Deprecated
    dangerouslySetInnerHTML: { table: { category: 'Deprecated' }, hide: true, disable: true },
    alwaysShow: {
      description: "Use 'ifOverflow' instead.",
      control: { type: 'boolean' },
      table: { category: 'Deprecated' },
      hide: true,
      disable: true,
      default: false,
    },
    // Other
    segment: {
      description: 'Array of endpoints in { x, y } format. These endpoints would be used to draw the ReferenceLine.',
      table: { type: { summary: 'array' }, category: 'Other' },
    },
    xAxis: { table: { category: 'Other' } },
    yAxis: { table: { category: 'Other' } },
    // Internal
    data: { table: { category: 'Internal' } },
  },
  component: ReferenceLine,
};

export const General = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <AreaChart
          data={pageData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          <ReferenceLine y={1520} stroke="red" strokeDasharray="3 3" {...args} />
        </AreaChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(GeneralProps),
  },
  parameters: {
    controls: { include: Object.keys(GeneralProps) },
  },
};

export const Style: StoryObj = {
  ...General,
  args: {
    ...getStoryArgsFromArgsTypesObject(StyleProps),
    stroke: 'blue',
    strokeWidth: 2,
    strokeDasharray: '4 1',
    label: { fill: 'red', fontSize: 20 },
  },
  parameters: {
    controls: { include: Object.keys(StyleProps) },
  },
};

export const IfOverflow = {
  ...General,
  args: {
    ifOverflow: 'extendDomain',
    y: 1700,
  },
  parameters: { controls: { include: ['ifOverflow', 'y'] } },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const { findByText } = within(canvasElement);
    /**
     * assert that when ifOverflow="extendDomain" 1800 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  },
};

export const Segment = {
  ...General,
  args: {
    segment: [
      { x: 'Page A', y: 0 },
      { x: 'Page E', y: 1500 },
    ],
  },
  parameters: { controls: { include: ['segment'] } },
};
