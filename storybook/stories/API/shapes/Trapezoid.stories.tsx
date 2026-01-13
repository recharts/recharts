import React from 'react';
import { Args } from '@storybook/react-vite';
import { Trapezoid } from '../../../../src';
import { TrapezoidArgs } from '../arg-types/TrapezoidArgs';

export default {
  component: Trapezoid,
  argTypes: TrapezoidArgs,
};

export const API = {
  render: (args: Args) => {
    return (
      <svg height="100%" width="%100">
        <Trapezoid {...args} />
      </svg>
    );
  },
  args: {
    ...{
      x: 85,
      y: 10,
      upperWidth: 50,
      lowerWidth: 200,
      height: 200,
      fill: '#67ba67',
      isAnimationActive: true,
      isUpdateAnimationActive: true,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: 'ease',
      stroke: 'black',
      strokeWidth: 3,
    },
  },
};
