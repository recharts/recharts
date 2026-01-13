import React from 'react';
import { Rectangle } from '../../../../src';
import { RectangleArgs } from '../arg-types/RectangleArgs';

export default {
  component: Rectangle,
  argTypes: RectangleArgs,
};

export const API = {
  render: (args: Record<string, any>) => {
    return (
      <svg height="100%" width="100%">
        <Rectangle {...args} />
      </svg>
    );
  },
  args: {
    radius: 7,
    x: 10,
    y: 10,
    height: 200,
    width: 300,
    stroke: '#000',
    strokeWidth: 5,
    fill: '#67ba67',
    isAnimationActive: true,
    isUpdateAnimationActive: true,
    animationBegin: 0,
    animationDuration: 1500,
  },
};
