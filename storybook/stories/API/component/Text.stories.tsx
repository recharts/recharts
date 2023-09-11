import React from 'react';
import { ResponsiveContainer, Text } from '../../../../src';
import { TextProps } from '../props/TextProps';

export default {
  argTypes: {
    ...TextProps,
  },
  component: Text,
};

export const API = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={80}>
        <Text {...args}>{args.content}</Text>
      </ResponsiveContainer>
    );
  },
  args: {
    breakAll: false,
    lineHeight: '1em',
    maxLines: 3,
    scaleToFit: false,
    textAnchor: 'start',
    verticalAnchor: 'end',
    angle: 0,
    width: 200,
    content: 'This is really long text',
  },
};
