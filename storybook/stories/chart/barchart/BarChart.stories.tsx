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
        <BarChart width={150} height={40} data={args.data}>
          <Bar dataKey="uv" fill="#ff7300" background />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
  },
};
