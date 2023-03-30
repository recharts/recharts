import React from 'react';
import { Args } from '@storybook/react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from '../../../../src';
import { subjectData } from '../../data';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { AnimationProps } from '../props/AnimationProps';

const GeneralProps: Args = {
  dataKey: {
    description: 'The key of a group of data which should be unique in a radar chart.',
    table: { type: { summary: 'string | number | Function' }, category: 'General' },
  },
  points: {
    description: 'The coordinates of all the vertexes of the radar shape, like [{ x, y }].',
    table: { type: { summary: 'Array' }, category: 'General' },
  },
  dot: {
    description: `If false set, dots will not be drawn. If true set, dots will be drawn which have 
    the props calculated internally. If object set, dots will be drawn which have the props merged 
    by the internal calculated props and the option. If ReactElement set, the option can be the custom dot element. 
    If set a function, the function will be called to render customized dot.`,
    table: { type: { summary: 'Bool | Object | Element | Function' }, category: 'General' },
  },
  y: {
    description: `If the y-axis specified by yAxisId is a number axis, the type of y must be Number. 
      If the y-axis specified by yAxisId is a category axis, the value of y must be one of 
      the categories, otherwise no dot will be drawn.`,
    table: { type: { summary: 'number | string' }, category: 'General' },
  },
  xAxis: {
    description: 'The configuration of the corresponding x-axis, usually calculated internally.',
    table: { type: { summary: 'object' }, category: 'General' },
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

const LabelProps: Args = {
  label: {
    description: `If set a string or a number, default label will be drawn, and the option is content. 
    If set a React element, the option is the custom react element of drawing label. If set a function, 
    the function will be called to render customized label.`,
    table: { type: { summary: 'string | number | ReactElement | Function' }, category: 'Label' },
  },
};

const StyleProps: Args = {
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
};

export default {
  argTypes: {
    ...AnimationProps,
    ...GeneralProps,
    ...LabelProps,
    ...StyleProps,
  },
  component: Radar,
};

export const General = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="80%"
          data={subjectData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} {...args} />
        </RadarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(GeneralProps),
    dataKey: 'A',
  },
  parameters: {
    controls: { include: Object.keys(GeneralProps) },
  },
};
