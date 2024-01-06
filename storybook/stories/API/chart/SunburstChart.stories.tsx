import React from 'react';
import { ResponsiveContainer, SunburstChart, Tooltip } from '../../../../src';
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
    return (
      <ResponsiveContainer width="100%" height={450}>
        <SunburstChart fill="purple" {...args}>
          <Tooltip />
        </SunburstChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: hierarchy,
    innerRadius: 40,
  },
};

export const WithStartAndEndAngle = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={450}>
        <SunburstChart fill="purple" {...args}>
          <Tooltip />
        </SunburstChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: hierarchy,
    innerRadius: 40,
    startAngle: 90,
    endAngle: 270,
  },
};
