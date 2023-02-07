import React from 'react';
import { pageData } from '../../data';
import { Line, LineChart, ResponsiveContainer } from '../../../../src';

export default {
  component: LineChart,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width={500} height={400}>
        <LineChart {...args}>
          <Line dataKey="uv" />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
  },
};
