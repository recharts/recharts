import React from 'react';
import { Bar, BarChart } from '../../../../src';
import { pageData } from '../../data';

export default {
  component: BarChart,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    return (
      <BarChart {...args} width={500} height={400}>
        <Bar dataKey="uv" />
      </BarChart>
    );
  },
  args: {
    data: pageData,
  },
};
