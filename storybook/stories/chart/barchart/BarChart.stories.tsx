import React from 'react';
import { Bar, BarChart, ResponsiveContainer } from '../../../../src';
import { pageData } from '../../data';

export default {
  title: 'Recharts/Chart/Bar Chart',
  component: BarChart,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart {...args}>
          <Bar dataKey="uv" />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
  },
};
