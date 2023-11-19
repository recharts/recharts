import React from 'react';
import { Args } from '@storybook/react';
import { pageData } from '../../data';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from '../../../../src';
import { CategoricalChartProps } from '../props/ChartProps';

export default {
  argTypes: {
    ...CategoricalChartProps,
  },
  component: LineChart,
};

export const Simple = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart {...args}>
          <Line dataKey="uv" />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
  },
};

export const SynchronizedTooltip = {
  render: (args: Args) => {
    return (
      <div>
        <LineChart {...args}>
          <Line isAnimationActive={false} type="monotone" dataKey="uv" stroke="#ff7300" />
          <Tooltip />
          <XAxis dataKey="name" />
        </LineChart>
        <LineChart {...args}>
          <Line isAnimationActive={false} type="monotone" dataKey="uv" stroke="#ff7300" />
          <Tooltip />
          <XAxis dataKey="name" />
        </LineChart>
      </div>
    );
  },
  args: {
    data: pageData,
    syncId: 'example-syncId',
    width: 400,
    height: 400,
  },
};
