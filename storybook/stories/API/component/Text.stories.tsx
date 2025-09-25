import React from 'react';
import { Surface, Text } from '../../../../src';
import { TextProps } from '../props/TextProps';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';

export default {
  argTypes: {
    ...TextProps,
  },
  component: Text,
};

export const API = {
  render: (args: Record<string, any>) => {
    return (
      <Surface width={500} height={300}>
        <Text {...args}>{args.content}</Text>
        <RechartsHookInspector />
      </Surface>
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
