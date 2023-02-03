import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip } from '../../../../src';
import { dateData, TimeSeriesData } from '../../data';

export default {
  title: 'Recharts/Chart/Area Chart',
  component: AreaChart,
};

const data: TimeSeriesData[] = [];
dateData.forEach((date: string) => {
  data.push({
    date,
    value: 1 + Math.random(),
  });
});

export const Simple = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={args.data}>
          <Area dataKey="value" stroke="#2451B7" fill="url(#color)" />
          <Tooltip />
          <CartesianGrid opacity={0.1} vertical={false} />
        </AreaChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data,
  },
};
