import React from 'react';
import { Args } from '@storybook/react-vite';
import { Area, ComposedChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from '../../../../src';
import { pageData } from '../../data';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import { AreaArgs } from '../arg-types/AreaArgs';

export default {
  component: Area,
  argTypes: AreaArgs,
};

const [surfaceWidth, surfaceHeight] = [600, 300];

export const API = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart
          width={surfaceWidth}
          height={surfaceHeight}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
          data={pageData}
        >
          {/* All components are added to show the interaction with the Area properties */}
          <Area fill="red" stackId="1" dataKey="pv" />
          <Legend />
          <XAxis dataKey="name" />
          <YAxis />
          {/* The target component */}
          <Area dataKey="uv" {...args} />
          <Tooltip />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaArgs),
    isAnimationActive: true,
    type: 'linear',
    connectNulls: true,
    stroke: 'red',
    fill: 'teal',
    strokeDasharray: '4 1',
    label: { fill: 'red', fontSize: 20 },
    dot: { stroke: 'green', strokeWidth: 2 },
    activeDot: { stroke: 'green', strokeWidth: 2 },
    tooltipType: 'responsive',
    dataKey: 'uv',
    unit: ' Visitors',
    stackId: 1,
  },
};
