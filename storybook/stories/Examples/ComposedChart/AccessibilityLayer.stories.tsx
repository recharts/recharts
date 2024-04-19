import React, { useState } from 'react';
import { StoryObj } from '@storybook/react';
import {
  ComposedChart,
  Area,
  ResponsiveContainer,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  AreaChart,
  CartesianGrid,
} from '../../../../src';
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
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
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

export const AccessibleWithButton = {
  render: () => {
    const [toggle, setToggle] = useState(true);

    return (
      <div>
        <button type="button" onClick={() => setToggle(!toggle)}>
          Toggle Tooltip
        </button>

        <AreaChart
          width={500}
          height={400}
          data={pageData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          accessibilityLayer
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
          {toggle && <Tooltip />}
        </AreaChart>
      </div>
    );
  },
  args: {},
};
