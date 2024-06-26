import React from 'react';
import { Args } from '@storybook/react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from '../../../../src';
import { pageData, pageDataWithNegativeNumbers } from '../../data';
import { CategoricalChartProps } from '../props/ChartProps';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';

export default {
  argTypes: CategoricalChartProps,
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
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    data: pageData,
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
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
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    data: pageData,
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
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
          <Legend />
          <Bar dataKey="uv" stackId="a" fill="green" barSize={50} />
          <Bar dataKey="pv" stackId="a" fill="red" barSize={30} />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    data: pageDataWithNegativeNumbers,
    stackOffset: 'none',
    id: 'BarChart-Stacked',
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
};
