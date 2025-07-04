import React from 'react';
import { Args } from '@storybook/react';
import { RechartsHookInspector, RechartsStoryContext } from '../../../storybook-addon-recharts';
import { Cell, Pie, PieChart, ResponsiveContainer } from '../../../../src';

export default {
  component: Pie,
};

export const PieWithPatterns = {
  render: (args: Args, context: RechartsStoryContext) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <PieChart>
          <defs>
            <pattern id="pattern-A" width="10" height="10" patternUnits="userSpaceOnUse">
              <polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2" fill="#f00" />
            </pattern>
            <pattern id="pattern-B" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="2" height="4" fill="#0f0" />
            </pattern>
            <pattern id="pattern-C" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(135)">
              <rect width="2" height="4" fill="#00f" />
            </pattern>
          </defs>
          <Pie dataKey="value" {...args}>
            {/* @ts-expect-error our storybooks need types */}
            {args.data.map(entry => (
              <Cell key={`cell-${entry.name}`} fill={`url(#pattern-${entry.name})`} />
            ))}
          </Pie>
          <RechartsHookInspector
            position={context.rechartsInspectorPosition}
            setPosition={context.rechartsSetInspectorPosition}
          />
        </PieChart>
      </ResponsiveContainer>
    );
  },
  args: {
    cx: 150,
    cy: 200,
    data: [
      { name: 'A', value: 80, color: '#ff0000' },
      { name: 'B', value: 45, color: '#00ff00' },
      { name: 'C', value: 25, color: '#0000ff' },
    ],
    dataKey: 'value',
    fill: '#8884d8',
    innerRadius: 50,
    outerRadius: 100,
    stroke: 'none',
  },
};
