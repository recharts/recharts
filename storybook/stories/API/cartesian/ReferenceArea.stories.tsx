import React from 'react';
import { Line, LineChart, ReferenceArea, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from '../../../../src';
import { simpleUvPvData } from '../../data';

export default {
  component: ReferenceArea,
};

export const Simple = {
  render: (args: Record<string, any>) => {
    const { data, ...referenceAreaArgs } = args;

    return (
      <ResponsiveContainer width={500} height={500}>
        <LineChart
          width={500}
          height={300}
          data={args.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          <ReferenceArea
            x1="Page B"
            x2="Page E"
            y1={1890}
            y2={3000}
            stroke="red"
            strokeOpacity={0.3}
            {...referenceAreaArgs}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    data: simpleUvPvData,
  },
};

export const IfOverflow = {
  ...Simple,
  args: {
    data: simpleUvPvData,
    y1: 1890,
    y2: -1000,
  },
  parameters: { controls: { include: ['ifOverflow'] } },
};
