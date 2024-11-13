import React from 'react';
import { Args } from '@storybook/react';
import { Pie, PieChart, ResponsiveContainer } from '../../../../src';

const data = [
  { value: 'Luck', percent: 10, radius: '45%' },
  { value: 'Skill', percent: 20, radius: '50%' },
  { value: 'Concentrated power of will', percent: 15, radius: '60%' },
  { value: 'Pleasure', percent: 50, radius: '80%' },
  { value: 'Pain', percent: 50, radius: '80%' },
  { value: 'Reason to remember the name', percent: 100, radius: '100%' },
];

export default {
  component: Pie,
};

export const PieWithStep = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <PieChart width={400} height={400}>
          <Pie dataKey="percent" {...args} />
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
    radiusKey: 'radius',
  },
};
