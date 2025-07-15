import React from 'react';
import { Args } from '@storybook/react-vite';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from '../../../../src';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import type { RechartsStoryContext } from '../../../storybook-addon-recharts/RechartsStoryContext';

export default {
  component: Pie,
};

const NEEDLE_BASE_RADIUS_PX = 5;
const NEEDLE_COLOR = '#d0d000';
const Needle = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
}: {
  cx: number;
  cy: number;
  innerRadius: number;
  outerRadius: number;
  midAngle: number;
}) => {
  const needleBaseCenterX = cx;
  const needleBaseCenterY = cy;
  const needleLength = innerRadius + (outerRadius - innerRadius) / 2;

  return (
    <g>
      <circle
        cx={needleBaseCenterX}
        cy={needleBaseCenterY}
        r={NEEDLE_BASE_RADIUS_PX}
        fill={NEEDLE_COLOR}
        stroke="none"
      />
      <path
        d={`M${needleBaseCenterX},${needleBaseCenterY}l${needleLength},0`}
        strokeWidth={2}
        stroke={NEEDLE_COLOR}
        fill={NEEDLE_COLOR}
        style={{
          transform: `rotate(-${midAngle}deg)`,
          transformOrigin: `${needleBaseCenterX}px ${needleBaseCenterY}px`,
        }}
      />
    </g>
  );
};

export const PieWithNeedle = {
  render: (args: Args, context: RechartsStoryContext) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <PieChart>
          <Pie dataKey="value" {...args}>
            {[
              { name: 'A', value: 80, color: '#ff0000' },
              { name: 'B', value: 45, color: '#00ff00' },
              { name: 'C', value: 25, color: '#0000ff' },
            ].map(entry => (
              <Cell key={`cell-${entry.name}`} fill={entry.color} />
            ))}
          </Pie>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={args.data}
            cx={150}
            cy={200}
            innerRadius={50}
            outerRadius={100}
            stroke="none"
            fill="none"
            activeShape={Needle}
          />
          <Tooltip defaultIndex={1} />
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
    endAngle: 0,
    fill: '#8884d8',
    innerRadius: 50,
    outerRadius: 100,
    startAngle: 180,
    stroke: 'none',
  },
};
