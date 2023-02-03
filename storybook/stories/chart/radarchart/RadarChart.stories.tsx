import React from 'react';
import { Radar, RadarChart, ResponsiveContainer } from '../../../../src';
import { pageData } from '../../data';

export default {
  title: 'Recharts/Chart/Radar Chart',
  component: RadarChart,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart data={args.data} width={600} height={500} outerRadius={150}>
          <Radar dataKey="uv" />
        </RadarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
  },
};
