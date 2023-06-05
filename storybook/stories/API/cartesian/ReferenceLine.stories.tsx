import React from 'react';
import { Args } from '@storybook/react';
import { ComposedChart, Line, ReferenceLine, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from '../../../../src';
import { pageData } from '../../data';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { GeneralStyle } from '../props/Styles';
import {
  ReferenceComponentGeneralArgs,
  ReferenceComponentInternalArgs,
  ReferenceComponentStyle,
} from '../props/ReferenceComponentShared';

const GeneralProps: Args = {
  ...ReferenceComponentGeneralArgs,
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
  segment: {
    description: 'Array of endpoints in { x, y } format. These endpoints would be used to draw the line.',
    table: { type: { summary: 'array' }, category: 'General' },
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
          '<ReferenceLine x="05" label="Middle" />\n' +
          '<ReferenceLine y={400} yAxisId="left" label={<CustomizedLabel />} />',
      },
      category: 'Label',
    },
  },
};

const StyleProps: Args = {
  ...ReferenceComponentStyle,
  stroke: {
    ...GeneralStyle.stroke,
    defaultValue: '#ccc',
  },
  strokeWidth: GeneralStyle.strokeWidth,
  strokeDasharray: GeneralStyle.strokeDasharray,
  position: {
    description:
      "Defines at which position of an axis point the line will start/end if the axis does not have type 'number'.",
    table: { type: { summary: "'start' | 'middle' | 'end'" }, category: 'Style' },
  },
  shape: {
    description: `If set a ReactElement, the shape of the line can be customized. If set a function,
    the function will be called to render a customized shape.`,
    table: {
      type: {
        summary: 'ReactElement | Function',
      },
      category: 'Style',
    },
  },
};

const InternalProps: Args = {
  ...ReferenceComponentInternalArgs,
  viewBox: {
    description: 'The box of the viewing area, usually calculated internally.',
    table: { type: { summary: '{x: number, y: number, width: number, height: number}' }, category: 'Internal' },
  },
};

export default {
  argTypes: {
    ...GeneralProps,
    ...LabelProps,
    ...StyleProps,
    ...ReferenceComponentInternalArgs,
    ...InternalProps,
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
  component: ReferenceLine,
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
          <ReferenceLine {...args} />
          <Line dataKey="uv" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(GeneralProps),
    ...getStoryArgsFromArgsTypesObject(StyleProps),
    y: 1520,
    stroke: 'blue',
    strokeWidth: 2,
    strokeDasharray: '4 1',
    label: { fill: 'red', fontSize: 20 },
  },
};
