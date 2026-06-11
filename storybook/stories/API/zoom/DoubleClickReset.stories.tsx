import React from 'react';
import { Args } from '@storybook/react-vite';
import { pageData } from '../../data';
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  DoubleClickReset,
  MouseWheelZoom,
} from '../../../../src';

export default {
  component: DoubleClickReset,
  argTypes: {
    // This component has no configurable props.
  },
};

/**
 * Wheel to zoom in, then double-click the plot to reset.
 */
export const API = {
  render: (args: Args) => (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={pageData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line dataKey="uv" stroke="#8884d8" dot={false} isAnimationActive={false} />
        <MouseWheelZoom />
        <DoubleClickReset {...args} />
      </LineChart>
    </ResponsiveContainer>
  ),
  args: {},
};
