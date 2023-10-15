import React from 'react';
import { Args } from '@storybook/react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from '../../../../src';
import { pageData, pageDataWithNegativeNumbers } from '../../data';
import { CategoricalChartProps } from '../props/ChartProps';

export default {
  argTypes: {
    ...CategoricalChartProps,
  },
  component: BarChart,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart {...args}>
          <Bar dataKey="uv" />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
  },
};

export const BarInBar = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart {...args}>
          <Bar dataKey="uv" fill="green" xAxisId="one" barSize={50} />
          <XAxis xAxisId="one" />
          {/* The smaller bar must be rendered in front of the larger one to be visible. */}
          <Bar dataKey="pv" fill="red" xAxisId="two" barSize={30} />
          <XAxis xAxisId="two" hide />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
  },
};

export const Stacked = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" stackId="a" fill="green" barSize={50} />
          <Bar dataKey="pv" stackId="a" fill="red" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageDataWithNegativeNumbers,
    stackOffset: 'none',
  },
};
