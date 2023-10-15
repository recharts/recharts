import React from 'react';
import { Pie, PieChart, ResponsiveContainer, Tooltip } from '../../../../src';
import { pageData } from '../../data';
import { CategoricalChartProps } from '../props/ChartProps';

export default {
  argTypes: {
    ...CategoricalChartProps,
    activeIndex: {
      description: 'The index of the individual shapes of Pie to be marked as active, and render props.activeShape',
      table: {
        category: 'General',
      },
    },
    activeShape: {
      description: 'The customized shape to be rendered if activeIndex is a match',
      table: {
        category: 'General',
      },
    },
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
