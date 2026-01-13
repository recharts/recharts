import React from 'react';
import { Args } from '@storybook/react-vite';
import { Cross, ComposedChart, ResponsiveContainer } from '../../../../src';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import { CrossArgs } from '../arg-types/CrossArgs';

export default {
  component: Cross,
  argTypes: CrossArgs,
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
          <Cross {...args} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    y: 100,
    x: 500,
    top: 0,
    left: 0,
    height: 1000,
    width: 1000,
    stroke: '#000',
    fill: 'none',
    strokeDasharray: '3 3',
    strokeWidth: 10,
    strokeOpacity: 0.5,
  },
};
