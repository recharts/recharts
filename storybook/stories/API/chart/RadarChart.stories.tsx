import React from 'react';
import { pageData } from '../../data';
import { Radar, RadarChart } from '../../../../src';

export default {
  component: RadarChart,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    return (
      <RadarChart data={args.data} width={500} height={400}>
        <Radar dataKey="uv" />
      </RadarChart>
    );
  },
  args: {
    data: pageData,
  },
};
