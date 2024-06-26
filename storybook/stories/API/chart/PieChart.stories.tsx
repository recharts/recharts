import React from 'react';
import { Pie, PieChart, ResponsiveContainer, Tooltip } from '../../../../src';
import { pageData } from '../../data';
import { CategoricalChartProps } from '../props/ChartProps';
import { ActiveShapeProps } from '../props/ActiveShapeProps';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';

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
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    data: pageData,
    activeShape: { fill: 'red' },
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
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
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    data: pageData,
  },
};
