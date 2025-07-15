import React from 'react';
import { Args } from '@storybook/react-vite';
import { Pie, PieChart, ResponsiveContainer } from '../../../../src';
import { RechartsHookInspector, RechartsStoryContext } from '../../../storybook-addon-recharts';

const data = [
  { value: 'Luck', percent: 10, customRadius: 140 },
  { value: 'Skill', percent: 20, customRadius: 160 },
  { value: 'Concentrated power of will', percent: 15, customRadius: 150 },
  { value: 'Pleasure', percent: 50, customRadius: 190 },
  { value: 'Pain', percent: 50, customRadius: 190 },
  { value: 'Reason to remember the name', percent: 100, customRadius: 220 },
];

export default {
  component: Pie,
};

export const PieWithStep = {
  render: (args: Args, context: RechartsStoryContext) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <PieChart width={400} height={400}>
          <Pie dataKey="percent" {...args} />
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
    label: true,
    outerRadius: (element: any) => {
      return element.customRadius;
    },
  },
};
