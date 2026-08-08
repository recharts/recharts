import React from 'react';
import { Args } from '@storybook/react-vite';
import { pageData } from '../../data';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, ZoomPanKeyboard } from '../../../../src';

export default {
  component: ZoomPanKeyboard,
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
    step: { control: { type: 'range', min: 1.05, max: 2, step: 0.05 }, description: 'Zoom factor per +/- press.' },
    panStep: {
      control: { type: 'range', min: 0.01, max: 0.5, step: 0.01 },
      description: 'Pan distance per arrow press, as a fraction of the visible window.',
    },
    panFastMultiplier: {
      control: { type: 'range', min: 1, max: 10, step: 0.5 },
      description: 'Multiplier applied to panStep while Shift is held.',
    },
  },
};

/**
 * Click the chart, then press + to zoom in and the arrow keys to pan.
 */
export const API = {
  render: (args: Args) => (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={pageData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line dataKey="uv" stroke="#8884d8" dot={false} isAnimationActive={false} />
        <ZoomPanKeyboard {...args} />
      </LineChart>
    </ResponsiveContainer>
  ),
  args: { axis: 'xy', minZoom: 1, maxZoom: 25, step: 1.15, panStep: 0.1, panFastMultiplier: 2.5 },
};
