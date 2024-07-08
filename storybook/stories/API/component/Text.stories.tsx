import React from 'react';
import { ResponsiveContainer, Surface, Text } from '../../../../src';
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
      <ResponsiveContainer width={500} height={300}>
        <Surface width={500} height={80}>
          <Text {...args}>{args.content}</Text>
        </Surface>
      </ResponsiveContainer>
    );
  },
  args: {
    breakAll: false,
    lineHeight: '1em',
    maxLines: 3,
    scaleToFit: false,
    textAnchor: 'start',
    verticalAnchor: 'start',
    angle: 0,
    width: 200,
    y: 50,
    x: 50,
    content: 'This is really, really, really, really, really, really, really, really, really long text',
  },
};
