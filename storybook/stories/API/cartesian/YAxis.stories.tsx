import React from 'react';
import { YAxis, XAxis, Line, ResponsiveContainer, LineChart, CartesianGrid, Tooltip, Legend } from '../../../../src';
import { coordinateWithValueData } from '../../data';
import { YAxisProps } from '../props/YAxisProps';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';

export default {
  component: YAxis,
  argTypes: YAxisProps,
};

export const API = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <LineChart width={600} height={300} data={coordinateWithValueData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis />
          <YAxis {...args} />
          <Legend />
          <Line dataKey="y" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(YAxisProps),
    dataKey: 'pv',
    domain: [0, 300],
    type: 'number',
    allowDataOverflow: true,
    tickMargin: 20,
    angle: 45,
    width: 120,
    label: { value: 'The Axis Label', position: 'center', angle: 90 },
  },
};
