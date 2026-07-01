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
    axis: {
      control: { type: 'inline-radio' },
      options: ['x', 'y', 'xy'],
      description: 'Which dimensions reset.',
    },
    minZoom: {
      control: { type: 'range', min: 0.5, max: 2, step: 0.1 },
      description: 'Furthest zoom-out after reset.',
    },
    maxZoom: {
      control: { type: 'range', min: 2, max: 50, step: 1 },
      description: 'Deepest zoom-in used by shared zoom math.',
    },
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
