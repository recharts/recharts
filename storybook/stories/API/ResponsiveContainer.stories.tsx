import React from 'react';
import type { StoryObj } from '@storybook/react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from '../../../src';
import { pageData } from '../data/Page';

export default {
  component: ResponsiveContainer,
  docs: {
    autodocs: false,
  },
};

export const API: StoryObj<typeof ResponsiveContainer> = {
  args: {
    width: '100%',
    height: 400,
  },
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer {...args}>
        <AreaChart
          width={500}
          height={400}
          data={pageData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    );
  },
};
