import React from 'react';
import { RadialBar, RadialBarChart, ResponsiveContainer } from '../../../../src';
import { pageData } from '../../data';

export default {
  title: 'Recharts/Chart/Radial Bar Chart',
  component: RadialBarChart,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <RadialBarChart data={args.data} width={800} height={400} startAngle={180} endAngle={0} outerRadius={80}>
          <RadialBar dataKey="uv" />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
  },
};
