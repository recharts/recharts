import React from 'react';
import { Pie, PieChart, ResponsiveContainer, Tooltip } from '../../../../src';
import { pageData } from '../../data';
import { CategoricalChartProps } from '../props/ChartProps';
import { ActiveShapeProps } from '../props/ActiveShapeProps';

export default {
  argTypes: {
    ...CategoricalChartProps,
    activeIndex: ActiveShapeProps.activeIndex,
    activeShape: ActiveShapeProps.activeShape,
  },
  component: PieChart,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    const { data, activeShape } = args;
    return (
      <ResponsiveContainer width="100%" height={400}>
        <PieChart {...args}>
          <Pie data={data} dataKey="uv" activeShape={activeShape} />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
    activeShape: { fill: 'red' },
  },
};

export const Donut = {
  render: (args: Record<string, any>) => {
    const { data } = args;
    return (
      <ResponsiveContainer width="100%" height={400}>
        <PieChart {...args}>
          <Pie data={data} dataKey="uv" nameKey="name" innerRadius={50} outerRadius={80} />
        </PieChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
  },
};
