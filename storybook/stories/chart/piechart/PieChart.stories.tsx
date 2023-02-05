import React from 'react';
import { Pie, PieChart, ResponsiveContainer } from '../../../../src';
import { pageData } from '../../data';

export default {
  title: 'Recharts/Chart/Pie Chart',
  component: PieChart,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie dataKey="uv" />
        </PieChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
  },
};

export const Donut = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <PieChart {...args}>
          <Pie dataKey="uv" innerRadius={50} outerRadius={80} />
        </PieChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
  },
};
