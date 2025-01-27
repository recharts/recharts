import React from 'react';
import { Args } from '@storybook/react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from '../../../../src';

const data = [
  { value: 'Luck', percent: 10, color: 'orange' },
  { value: 'Skill', percent: 20, color: 'green' },
  { value: 'Concentrated power of will', percent: 15, color: 'blue' },
  { value: 'Pleasure', percent: 50, color: 'red' },
  { value: 'Pain', percent: 50, color: 'indigo' },
  { value: 'Reason to remember the name', percent: 100, color: 'violet' },
];

export default {
  component: Pie,
};

export const PieWithCells = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <PieChart width={400} height={400}>
          <Pie dataKey="percent" {...args}>
            {data.map(d => (
              <Cell key={`d-${d.value}`} fill={d.color} stroke="none" />
            ))}
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  },
  args: {
    cx: '50%',
    cy: '50%',
    data,
    dataKey: 'percent',
    nameKey: 'value',
    fill: '#8884d8',
    label: true,
  },
};
