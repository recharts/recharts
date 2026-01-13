import React from 'react';
import { Args } from '@storybook/react-vite';
import { ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from '../../../../src';
import { pageData } from '../../data';
import { getStoryArgsFromArgsTypesObject } from '../props/utils';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';
import { LineArgs } from '../arg-types/LineArgs';

export default {
  argTypes: LineArgs,
  component: Line,
};

export const API = {
  render: (args: Args) => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
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
          {/* All components are added to show the interaction with the Line properties */}
          <Legend />
          <XAxis dataKey="name" />
          <YAxis width="auto" />
          {/* The target component */}
          <Line dataKey="uv" {...args} />
          <Tooltip />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    // This API story should have explicit values for all props
    ...getStoryArgsFromArgsTypesObject(LineArgs),
    type: 'linear',
    connectNulls: true,
    stroke: 'red',
    fill: 'teal',
    strokeDasharray: '4 1',
    label: { fill: 'red', fontSize: 20 },
    dot: { stroke: 'green', strokeWidth: 2 },
    isAnimationActive: true,
    activeDot: { stroke: 'green', strokeWidth: 2 },
    tooltipType: 'responsive',
    dataKey: 'uv',
    unit: ' Visitors',
  },
};
