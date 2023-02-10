import React from 'react';
import { curveCardinal } from 'victory-vendor/d3-shape';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip } from '../../../../src';
import { dateData, pageData, TimeSeriesData } from '../../data';

export default {
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
      <ResponsiveContainer width={500} height={400}>
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

const stepAround = curveCardinal.tension(0.5);

export const CustomType = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width={500} height={400}>
        <AreaChart data={args.data}>
          <Area type={stepAround} dataKey="pv" stroke="#ff7300" fill="#ff7300" fillOpacity={0.9} />
        </AreaChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
  },
};
