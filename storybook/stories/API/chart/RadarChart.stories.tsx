import React from 'react';
import { pageData } from '../../data';
import { Radar, RadarChart, ResponsiveContainer } from '../../../../src';

export default {
  component: RadarChart,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={args.data}>
          <Radar dataKey="uv" />
        </RadarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
  },
};
