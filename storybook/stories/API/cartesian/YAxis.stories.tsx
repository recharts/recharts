import React from 'react';
import { Args } from '@storybook/react';
import { YAxis, XAxis, Line, ResponsiveContainer, LineChart, CartesianGrid, Tooltip, Legend } from '../../../../src';
import { coordinateWithValueData } from '../../data';

const GeneralProps: Args = {
  yAxisId: {
    description: 'The id of y-axis which is corresponding to the data.',
    table: { type: { summary: 'string | number' }, category: 'General' },
  },
  unit: {
    description: 'The unit of data displayed in the axis.',
    table: { type: { summary: 'string | number' }, category: 'General' },
  },
  scale: {
    table: { type: { summary: 'ScaleType | Function' }, category: 'General' },
  },
  domain: {
    description: 'The domain of scale in this axis.',
    table: { type: { summary: 'AxisDomain' }, category: 'General' },
  },
};
export default {
  component: YAxis,
  argTypes: {
    ...GeneralProps,
  },
};

export const API = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <LineChart width={600} height={300} data={coordinateWithValueData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis />
          <YAxis {...args} />
          <Tooltip />
          <Legend />
          <Line dataKey="y" />
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    dataKey: 'pv',
    domain: [0, 300],
    type: 'number',
    allowDataOverflow: true,
    tickMargin: 20,
    angle: 45,
    label: { value: 'The Axis Label', position: 'insideBottomRight', offset: 0 },
  },
};
