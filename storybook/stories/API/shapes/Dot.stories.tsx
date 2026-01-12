import React from 'react';
import { Args } from '@storybook/react-vite';
import { ComposedChart, Dot, ResponsiveContainer } from '../../../../src';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import { DotArgs } from '../arg-types/DotArgs';

export default {
  component: Dot,
  argTypes: DotArgs,
};

export const API = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <ComposedChart
          width={500}
          height={300}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Dot {...args} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    r: 50,
    stroke: '#000',
    fill: 'red',
    cx: 100,
    cy: 100,
  },
};
