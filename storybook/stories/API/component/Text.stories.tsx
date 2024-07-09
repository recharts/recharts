import React from 'react';
import { Surface, Text } from '../../../../src';
import { TextProps } from '../props/TextProps';

export default {
  argTypes: {
    ...TextProps,
  },
  component: Text,
};

export const API = {
  render: ({ containerWidth, containerHeight, ...args }: Record<string, any>) => {
    return (
      <Surface width={containerWidth} height={containerHeight}>
        <Text {...args}>{args.content}</Text>
      </Surface>
    );
  },
  args: {
    width: 250,
    content:
      'This is really long text to showcase how line wrapping as well as other properties from the `Text` component work',
    breakAll: false,
    lineHeight: '1em',
    maxLines: 3,
    scaleToFit: false,
    textAnchor: 'start',
    verticalAnchor: 'start',
    angle: 0,
    containerWidth: '100%',
    containerHeight: 100,
    fontSize: '1rem',
    letterSpacing: '0px',
  },
};
