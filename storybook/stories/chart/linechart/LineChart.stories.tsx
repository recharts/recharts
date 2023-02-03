import React from 'react';
import { Line, LineChart, ResponsiveContainer } from '../../../../src';
import { pageData } from '../../data';

export default {
  title: 'Recharts/Chart/Line Chart',
  component: LineChart,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart width={600} height={300} data={args.data}>
          <Line dataKey="uv" />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
  },
};
