import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from '../../../../src';
import { simpleUvPvData } from '../../data';

export default {
  component: XAxis,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    const { data, ...xAxisArgs } = args;

    return (
      <ResponsiveContainer width="100%" height={500}>
        <LineChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" {...xAxisArgs} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: simpleUvPvData,
  },
};
