import React from 'react';
import { pageData } from '../../data';
import { Line, LineChart } from '../../../../src';

export default {
  component: LineChart,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    return (
      <LineChart {...args} width={500} height={400}>
        <Line dataKey="uv" />
      </LineChart>
    );
  },
  args: {
    data: pageData,
  },
};
