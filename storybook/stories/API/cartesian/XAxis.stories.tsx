import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from '../../../../src';
import { coordinateWithValueData } from '../../data';
import { XAxisProps } from '../props/XAxisProps';

export default {
  component: XAxis,
  argTypes: XAxisProps,
};

export const API = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <LineChart width={600} height={300} data={coordinateWithValueData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis {...args} />
          <YAxis />
          <Legend />
          <Line dataKey="y" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    dataKey: 'x',
    domain: [100, 500],
    type: 'number',
    allowDataOverflow: true,
    tickMargin: 20,
    angle: 45,
    label: { value: 'The Axis Label', position: 'insideBottomRight', offset: 0 },
  },
};
