import { Args } from '@storybook/react';
import React from 'react';
import { Line, ComposedChart, ReferenceArea, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from '../../../../src';
import { pageData } from '../../data';
import { isUpdateAnimationActive, radius } from '../props/RectangleProps';
import {
  onClick,
  onMouseDown,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  onMouseOut,
  onMouseOver,
  onMouseUp,
} from '../props/EventHandlers';
import { animationBegin, animationDuration, animationEasing, isAnimationActive } from '../props/AnimationProps';
import { GeneralStyle } from '../props/Styles';
import {
  ReferenceComponentGeneralArgs,
  ReferenceComponentInternalArgs,
  ReferenceComponentStyle,
} from '../props/ReferenceComponentShared';

const StyleProps: Args = {
  ...GeneralStyle,
  ...ReferenceComponentStyle,
  label: {
    description: `If set a string or a number, default label will be drawn, and the option is content. If set a React element, the option is the custom react element of drawing label. If set a function, the function will be called to render customized label.`,
    table: {
      type: {
        summary: 'String | Number | ReactElement | Function',
        detail:
          '<ReferenceArea x1="01" x2="08" label="MAX"/>\n' +
          '<ReferenceArea y1={100} y2={500} label={<CustomizedLabel />}/>',
      },
      category: 'Style',
    },
  },
  shape: {
    description: `Renders a svg returned by the react element or function.`,
    table: {
      type: {
        summary: 'ReactElement | Function',
        detail: '<ReferenceArea shape={<CustomSvgShape/>}/>',
      },
      category: 'Style',
    },
  },
};

const GeneralProps: Args = {
  ...ReferenceComponentGeneralArgs,
  x1: {
    description:
      'A boundary value of the area. If the specified x-axis is a number axis, the type of x must be Number. If the specified x-axis is a category axis, the value of x must be one of the categories. If x1 is not set, the first value on the x-axis is used instead. If one of x1 or x2 is invalid, the area will not be drawn.',
    table: { type: { summary: 'string | number' }, category: 'General' },
  },
  x2: {
    description:
      'A boundary value of the area. If the specified x-axis is a number axis, the type of x must be Number. If the specified x-axis is a category axis, the value of x must be one of the categories. If x2 is not set, the last value on the x-axis is used instead. If one of x1 or x2 is invalid, the area will not be drawn.',
    table: { type: { summary: 'string | number' }, category: 'General' },
  },
  y1: {
    description:
      'A boundary value of the area. If the specified y-axis is a number axis, the type of y must be Number. If the specified y-axis is a category axis, the value of y must be one of the categories. If y1 is not set, the first value on the y-axis is used instead. If one of y1 or y2 is invalid, the area will not be drawn.',
    table: { type: { summary: 'string | number' }, category: 'General' },
  },
  y2: {
    description:
      'A boundary value of the area. If the specified y-axis is a number axis, the type of y must be Number. If the specified y-axis is a category axis, the value of y must be one of the categories. If y2 is not set, the last value on the y-axis is used instead. If one of y1 or y2 is invalid, the area will not be drawn.',
    table: { type: { summary: 'string | number' }, category: 'General' },
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
    ...StyleProps,
    ...GeneralProps,
    ...InternalProps,
    // Rectangle
    radius,
    // Deprecated
    alwaysShow: {
      description: "Use 'ifOverflow' instead.",
      table: { category: 'Deprecated' },
      hide: true,
      disable: true,
    },
    // Event handlers
    onClick,
    onMouseDown,
    onMouseUp,
    onMouseMove,
    onMouseOver,
    onMouseOut,
    onMouseEnter,
    onMouseLeave,
    // Animation
    animationBegin,
    animationDuration,
    animationEasing,
    isAnimationActive,
    isUpdateAnimationActive,
  },
  component: ReferenceArea,
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
          <Line dataKey="uv" />
          <ReferenceArea {...args} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    x1: 'Page B',
    x2: 'Page E',
    y1: 1000,
    y2: 1500,
    stroke: 'red',
    strokeOpacity: 0.3,
  },
};
