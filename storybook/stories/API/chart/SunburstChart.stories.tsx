import React from 'react';
import { ResponsiveContainer, SunburstChart, Tooltip } from '../../../../src';
import { data, margin, ChartSizeProps, dataKey, CategoricalChartProps } from '../props/ChartProps';
import { hierarchy } from '../../data';

const { innerRadius, outerRadius, cx, cy, startAngle, endAngle, onClick, onMouseEnter, onMouseLeave, className } =
  CategoricalChartProps;

export default {
  argTypes: {
    data,
    margin,
    ...ChartSizeProps,
    dataKey,
    innerRadius,
    outerRadius,
    cx,
    cy,
    startAngle,
    endAngle,
    onClick,
    onMouseEnter,
    onMouseLeave,
    className,
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
