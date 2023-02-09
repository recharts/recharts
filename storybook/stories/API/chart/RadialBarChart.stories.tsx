import React from 'react';
import { pageData } from '../../data';
import { RadialBar, RadialBarChart } from '../../../../src';

export default {
  component: RadialBarChart,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    return (
      <RadialBarChart data={args.data} width={500} height={400}>
        <RadialBar dataKey="uv" />
      </RadialBarChart>
    );
  },
  args: {
    data: pageData,
  },
};
