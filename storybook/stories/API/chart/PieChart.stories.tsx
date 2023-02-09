import React from 'react';
import { Pie, PieChart } from '../../../../src';
import { pageData } from '../../data';

export default {
  component: PieChart,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    return (
      <PieChart {...args} width={500} height={400}>
        <Pie data={pageData} dataKey="uv" />
      </PieChart>
    );
  },
};

export const Donut = {
  render: (args: Record<string, any>) => {
    return (
      <PieChart {...args} width={500} height={400}>
        <Pie data={pageData} dataKey="uv" nameKey="name" innerRadius={50} outerRadius={80} />
      </PieChart>
    );
  },
};
