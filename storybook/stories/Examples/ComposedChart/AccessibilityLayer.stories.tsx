import React from 'react';
import { StoryObj } from '@storybook/react';
import { ComposedChart, Area, ResponsiveContainer, Legend, Tooltip, XAxis, YAxis } from '../../../../src';
import { pageData } from '../../data';
import { General } from '../../API/props/CartesianComponentShared';
import { getStoryArgsFromArgsTypesObject } from '../../API/props/utils';

export default {
  component: ComposedChart,
};

export const AreaChartWithAccessibilityLayer: StoryObj = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
          data={pageData}
          accessibilityLayer
        >
          <Area isAnimationActive={false} dataKey="uv" {...args} />
          {/* All further components are added to show the interaction with the Area properties */}
          <Legend />
          <Tooltip />
          <XAxis dataKey="name" />
          <YAxis />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(General),
  },
  parameters: {
    controls: { include: Object.keys(General) },
    docs: {
      description: {
        story: 'You can tab to this chart. From there, you can use the arrow keys to navigate along the chart.',
      },
    },
  },
};
