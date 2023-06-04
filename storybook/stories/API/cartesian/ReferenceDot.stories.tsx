import React from 'react';
import { Args } from '@storybook/react';
import { Bar, ComposedChart, ReferenceDot, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from '../../../../src';
import { pageData } from '../../data';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { EventHandlers } from '../props/EventHandlers';
import { r } from '../props/DotProps';
import { GeneralStyle } from '../props/Styles';
import {
  ReferenceComponentGeneralArgs,
  ReferenceComponentInternalArgs,
  ReferenceComponentStyle,
} from '../props/ReferenceComponentShared';

const GeneralProps: Args = {
  ...ReferenceComponentGeneralArgs,
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
  ...ReferenceComponentStyle,
  shape: {
    description: `If set a ReactElement, the shape of the dot can be customized. If set a function,
    the function will be called to render a customized shape.`,
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
    ...StyleProps,
    ...GeneralProps,
    ...LabelProps,
    ...ReferenceComponentInternalArgs,
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

export const API = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <ComposedChart
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
          <Bar type="monotone" dataKey="uv" />
          <ReferenceDot {...args} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(GeneralProps),
    ...getStoryArgsFromArgsTypesObject(StyleProps),
    x: 'Page E',
    y: 1520,
    r: 20,
    stroke: 'red',
    fill: 'teal',
    label: { fill: 'red', fontSize: 20 },
  },
};
