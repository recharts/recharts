import React from 'react';
import { Args } from '@storybook/react';
import { ResponsiveContainer, Label, Surface } from '../../../../src';

const LabelProps: Args = {
  viewBox: {
    description: 'The box of viewing area, usually calculated internally.',
    table: {
      control: { type: 'String | number' },
      summary: '{ x: number, y: number, width: number, height: number }',
      category: 'General',
    },
  },
  formatter: {
    description: 'The formatter function of label value which has only one parameter - the value of label.',
    table: {
      control: { type: 'Function' },
      category: 'General',
    },
  },
  value: {
    description: 'The value of label, which can be specified by this props or the children of <Label />',
    table: {
      control: { type: 'String | Number' },
      summary: '<Label value="any" />',
      category: 'General',
    },
  },
  position: {
    description: 'The position of label relative to the view box. (Optional)',
    table: {
      control: { type: 'String | Number' },
      summary:
        'top, left, right, bottom, inside, outside, insideLeft, ' +
        'insideRight, insideTop, insideBottom, insideTopLeft, ' +
        'insideBottomLeft, insideTopRight, insideBottomRight, ' +
        'insideStart, insideEnd, end, center, centerTop, centerBottom, middle',
      category: 'General',
    },
  },
  offset: {
    description: 'The offset to the specified "position"',
    table: {
      control: { type: 'Number' },
      defaultValue: 5,
      category: 'General',
    },
  },

  children: {
    description: 'The value of label, which can be specified by this props or the props "value". (Optional)',
    table: {
      control: { type: 'String | Number' },
      summary: '<Label content={<CustomizedLabel external={external} />} />',
      category: 'General',
    },
  },

  content: {
    description:
      'If set a React element, the option is the custom react element of ' +
      'rendering label. If set a function, the function will be called to render label content. (Optional)',
    table: {
      control: { type: 'ReactElement | Function' },
      category: 'General',
    },
  },

  id: {
    description:
      'The unique id of this component, which will be used to generate ' +
      'unique clip path id internally. This props is suggested to be set in SSR. (Optional)',
    table: {
      control: { type: 'String' },
      category: 'General',
    },
  },
};

export default {
  argTypes: {
    ...LabelProps,
  },
  component: Label,
};

export const API = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={200}>
        <Surface viewBox={args.viewBox} width={0} height={0}>
          <Label {...args} />
        </Surface>
      </ResponsiveContainer>
    );
  },
  args: {
    viewBox: {
      x: 50,
      y: 50,
      width: 100,
      height: 100,
    },
    value: 'Label value',
    position: 'center',
    offset: 5,
  },
};
