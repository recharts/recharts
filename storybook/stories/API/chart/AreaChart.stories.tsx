import React from 'react';
import { curveCardinal } from 'victory-vendor/d3-shape';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip } from '../../../../src';
import { pageData } from '../../data';

export default {
  tags: ['autodocs'],
  component: AreaChart,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    const { data } = args;
    return (
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data}>
          <Area dataKey="pv" stroke="#2451B7" fill="url(#color)" />
          <Tooltip />
          <CartesianGrid opacity={0.1} vertical={false} />
        </AreaChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
  },
};

const stepAround = curveCardinal.tension(0.5);

export const CustomType = {
  render: (args: Record<string, any>) => {
    const { data } = args;
    return (
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data}>
          <Area type={stepAround} dataKey="pv" stroke="#ff7300" fill="#ff7300" fillOpacity={0.9} />
        </AreaChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: pageData,
  },
};
