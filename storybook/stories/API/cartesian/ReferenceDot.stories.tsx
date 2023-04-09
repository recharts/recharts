import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import React from 'react';
import { Args, StoryObj } from '@storybook/react';
import { Bar, BarChart, ReferenceDot, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from '../../../../src';
import { pageData } from '../../data';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { EventHandlers } from '../props/EventHandlers';
import { r } from '../props/DotProps';
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
    description: `If the x-axis specified by xAxisId is a number axis, the type of x must be Number. 
      If the x-axis specified by xAxisId is a category axis, the value of x must be one of 
      the categories, otherwise no dot will be drawn.`,
    table: { type: { summary: 'number | string' }, category: 'General' },
  },
  y: {
    description: `If the y-axis specified by yAxisId is a number axis, the type of y must be Number. 
      If the y-axis specified by yAxisId is a category axis, the value of y must be one of 
      the categories, otherwise no dot will be drawn.`,
    table: { type: { summary: 'number | string' }, category: 'General' },
  },
};

const LabelProps: Args = {
  label: {
    description: `If set a string or a number, default label will be drawn, and the option is content. 
    If set a React element, the option is the custom react element of drawing label. If set a function, 
    the function will be called to render customized label.`,
    table: {
      type: {
        summary: 'string | number | ReactElement | Function',
        detail:
          '<ReferenceDot x="a" y={400} label="MAX"/>\n' +
          '<ReferenceDot x="a" y={400} label={<CustomizedLabel />}/>\n' +
          '<ReferenceDot x="a" y={400} label={renderLabel} />',
      },
      category: 'Label',
    },
  },
};

const StyleProps: Args = {
  ...GeneralStyle,
  shape: {
    description: `If set a ReactElement, the shape of dot can be customized. If set a function, 
    the function will be called to render customized shape.`,
    table: {
      type: {
        summary: 'ReactElement | Function',
      },
      category: 'Style',
    },
  },
  isFront: {
    description: `If set true, the dot will be rendered in front of bars in BarChart, etc.`,
    table: { category: 'Style' },
  },
  ifOverflow: {
    description: `Defines how to draw the reference dot if it falls partly outside the canvas. If set to 'discard', 
    the reference dot will not be drawn at all. If set to 'hidden', the reference dot will be clipped to the canvas. 
    If set to 'visible', the reference dot will be drawn completely. If set to 'extendDomain', 
    the domain of the overflown axis will be extended such that the reference dot fits into the canvas.`,
    table: { type: { summary: "'discard' | 'hidden' | 'visible' | 'extendDomain'" }, category: 'General' },
    default: 'discard',
  },
};

const InternalProps: Args = {
  xAxis: {
    description: 'The configuration of the corresponding x-axis, usually calculated internally.',
    table: { type: { summary: 'Object' }, category: 'Internal' },
  },
  yAxis: {
    description: 'The configuration of the corresponding y-axis, usually calculated internally.',
    table: { type: { summary: 'Object' }, category: 'Internal' },
  },
  clipPathId: {
    description:
      "Used as the id for the clip path which is used to clip the reference dot if 'ifOverflow' is set to 'hidden'",
    table: { type: { summary: 'number | string' }, category: 'Internal' },
  },
};

export default {
  argTypes: {
    ...StyleProps,
    ...GeneralProps,
    ...LabelProps,
    ...InternalProps,
    ...EventHandlers,
    // Dot
    r,
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
  },
  component: ReferenceDot,
};

export const General = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
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
          <Bar type="monotone" dataKey="uv" stroke="#82ca9d" />
          <ReferenceDot {...args} />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(GeneralProps),
    x: 'Page E',
    y: 1520,
    r: 20,
  },
  parameters: {
    controls: { include: Object.keys(GeneralProps) },
  },
};

export const Style: StoryObj = {
  ...General,
  args: {
    ...getStoryArgsFromArgsTypesObject(StyleProps),
    x: 'Page E',
    y: 1520,
    r: 20,
    stroke: 'red',
    fill: 'teal',
    label: { fill: 'red', fontSize: 20 },
  },
  parameters: {
    controls: { include: Object.keys(StyleProps) },
  },
};

export const IfOverflow = {
  ...General,
  args: {
    ...getStoryArgsFromArgsTypesObject(StyleProps),
    ifOverflow: 'extendDomain',
    x: 'Page E',
    y: 1700,
    r: 100,
  },
  parameters: { controls: { include: ['ifOverflow'] } },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const { findByText } = within(canvasElement);
    /**
     * assert that when ifOverflow="extendDomain" 1900 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  },
};
