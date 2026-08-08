import React from 'react';
import { Args } from '@storybook/react-vite';
import { pageData } from '../../data';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, MouseWheelZoom } from '../../../../src';

export default {
  component: MouseWheelZoom,
  argTypes: {
    axis: {
      control: { type: 'inline-radio' },
      options: ['x', 'y', 'xy'],
      description: 'Which dimensions this interaction can zoom and pan.',
    },
    minZoom: {
      control: { type: 'range', min: 0.5, max: 2, step: 0.1 },
      description: 'Furthest zoom-out (1 = cannot zoom out past the full data).',
    },
    maxZoom: {
      control: { type: 'range', min: 2, max: 50, step: 1 },
      description: 'Deepest zoom-in (e.g. 25 shows ~1/25th of the data).',
    },
    step: { control: { type: 'range', min: 1.05, max: 2, step: 0.05 }, description: 'Zoom factor per wheel notch.' },
    panStep: {
      control: { type: 'range', min: 0.0005, max: 0.005, step: 0.0005 },
      description: 'Pan distance per wheel delta unit when a pan modifier is held.',
    },
  },
};

/**
 * Wheel over the plot to zoom; hold Shift to pan instead.
 */
export const API = {
  render: (args: Args) => (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={pageData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line dataKey="uv" stroke="#8884d8" dot={false} isAnimationActive={false} />
        <MouseWheelZoom {...args} />
      </LineChart>
    </ResponsiveContainer>
  ),
  args: { axis: 'xy', minZoom: 1, maxZoom: 25, step: 1.15, panStep: 0.0015 },
};
