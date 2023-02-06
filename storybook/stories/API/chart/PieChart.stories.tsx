import React from 'react';
import { Pie, PieChart, ResponsiveContainer } from '../../../../src';
import { pageData } from '../../data';

export default {
  component: PieChart,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <PieChart {...args}>
          <Pie data={pageData} dataKey="uv" />
        </PieChart>
      </ResponsiveContainer>
    );
  },
};

export const Donut = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <PieChart {...args}>
          <Pie data={pageData} dataKey="uv" nameKey="name" innerRadius={50} outerRadius={80} />
        </PieChart>
      </ResponsiveContainer>
    );
  },
};
