import React from 'react';
import { Args } from '@storybook/react-vite';
import { Legend, Pie, PieChart, ResponsiveContainer } from '../../../../src';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import type { RechartsStoryContext } from '../../../storybook-addon-recharts/RechartsStoryContext';

const data = [
  { value: 'Luck', percent: 10 },
  { value: 'Skill', percent: 20 },
  { value: 'Concentrated power of will', percent: 15 },
  { value: 'Pleasure', percent: 50 },
  { value: 'Pain', percent: 50 },
  { value: 'Reason to remember the name', percent: 100 },
];

export default {
  component: Pie,
};

export const PieWithLegend = {
  render: (args: Args, context: RechartsStoryContext) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <PieChart width={400} height={400}>
          <Pie dataKey="percent" {...args} />
          <Legend />
          <RechartsHookInspector
            position={context.rechartsInspectorPosition}
            setPosition={context.rechartsSetInspectorPosition}
          />
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
    innerRadius: 60,
    outerRadius: 80,
    label: true,
  },
};
