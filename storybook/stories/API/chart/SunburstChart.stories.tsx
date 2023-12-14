import React from 'react';
import { ResponsiveContainer, PolarGrid, SunburstChart } from '../../../../src';
import { CategoricalChartProps } from '../props/ChartProps';
import { hierarchy } from '../../data';

export default {
  argTypes: {
    ...CategoricalChartProps,
  },
  component: SunburstChart,
};

export const Sunburst = {
  render: (args: Record<string, any>) => {
    const { data } = args;
    return (
      <ResponsiveContainer width="100%" height={400}>
        <SunburstChart data={data}>
          <PolarGrid />
        </SunburstChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: hierarchy,
  },
};
