import React from 'react';
import { Args, StoryObj } from '@storybook/react';
import { ScatterChart, ErrorBar, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Scatter } from '../../../../src';
import { errorData } from '../../data';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';

const GeneralProps: Args = {
  dataKey: {
    description: `The key of a group of error values in data. The error values can be a single value for 
    symmetric error bars or an array of a lower and upper error value for asymmetric error bars.`,
    table: { type: { summary: 'string | number | Function' }, category: 'General' },
  },
};

const StyleProps: Args = {
  stroke: {
    description: 'The color of the error bars.',
    control: { type: 'color' },
    table: {
      type: {
        summary: 'string',
      },
      category: 'Style',
    },
    defaultValue: '#ccc',
  },
  width: {
    description: 'The width of the error bar ends.',
    table: {
      type: {
        summary: 'string | number',
      },
      category: 'Style',
      defaultValue: {
        summary: 5,
      },
    },
    defaultValue: 5,
  },
  strokeWidth: {
    description: 'The width of the lines used to make the error bars.',
    table: {
      type: {
        summary: 'string | number',
      },
      category: 'Style',
    },
    defaultValue: 1.5,
  },
  direction: {
    description: `Only used for ScatterChart with error bars in two directions. 
    Only accepts a value of "x" or "y" and makes the error bars lie in that direction.`,
    table: {
      type: {
        summary: 'string',
      },
      category: 'Style',
    },
  },
};

export default {
  argTypes: {
    ...GeneralProps,
    ...StyleProps,
  },
  component: ErrorBar,
};

export const General = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <ScatterChart
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          width={730}
          height={250}
        >
          <CartesianGrid />
          <XAxis dataKey="x" type="number" name="stature" unit="cm" />
          <YAxis dataKey="y" type="number" name="weight" unit="kg" />
          <Scatter name="A school" data={errorData} fill="#ff7300">
            <ErrorBar dataKey="errorY" width={4} strokeWidth={2} stroke="green" direction="y" {...args} />
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(GeneralProps),
    dataKey: 'errorY',
  },
  parameters: {
    controls: { include: Object.keys(GeneralProps) },
  },
};

export const Style: StoryObj = {
  ...General,
  args: {
    ...getStoryArgsFromArgsTypesObject(StyleProps),
    stroke: 'red',
    direction: 'x',
  },
  parameters: {
    controls: { include: Object.keys(StyleProps) },
  },
};
