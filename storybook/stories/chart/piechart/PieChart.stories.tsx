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
        <PieChart width={800} height={400} startAngle={180} endAngle={0} outerRadius={80}>
          <Pie data={args.data} dataKey="uv" />
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
        <PieChart width={800} height={400} startAngle={180} endAngle={0} outerRadius={80}>
          <Pie data={args.data} dataKey="uv" cx={200} cy={200} innerRadius={50} outerRadius={80} />
        </PieChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
  },
};
