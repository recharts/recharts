import React from 'react';
import { Args } from '@storybook/react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from '../../../../src';
import { subjectData } from '../../data';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { AnimationProps } from '../props/AnimationProps';
import { legendType } from '../props/Legend';

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
    legendType,
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
          <Radar {...args} />
        </RadarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(GeneralProps),
    dataKey: 'A',
    name: 'Mike',
    stroke: '#8884d8',
    fill: '#8884d8',
    fillOpacity: 0.6,
  },
  parameters: {
    controls: { include: Object.keys(GeneralProps) },
  },
};
