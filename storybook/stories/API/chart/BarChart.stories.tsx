import React from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip } from '../../../../src';
import { pageData } from '../../data';

export default {
  component: BarChart,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart {...args}>
          <Bar dataKey="uv" />
          <Tooltip reverseDirection={{ x: true }} />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
  },
};
