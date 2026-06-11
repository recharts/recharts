import React from 'react';
import { Args } from '@storybook/react-vite';
import { pageData } from '../../data';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, PinchZoom } from '../../../../src';

export default {
  component: PinchZoom,
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
    threshold: {
      control: { type: 'range', min: 0, max: 40, step: 1 },
      description: 'Finger-spread (px) before a pinch starts zooming; smaller moves stay pure pan.',
    },
    doubleTapDrag: {
      control: { type: 'inline-radio' },
      options: ['none', 'zoom', 'select'],
      description: 'What double-tap-then-drag does on touch devices.',
    },
  },
};

/**
 * On a touch device (or DevTools touch emulation): pinch to zoom, two-finger drag to pan, double-tap to reset.
 */
export const API = {
  render: (args: Args) => (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={pageData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line dataKey="uv" stroke="#8884d8" dot={false} isAnimationActive={false} />
        <PinchZoom {...args} />
      </LineChart>
    </ResponsiveContainer>
  ),
  args: { axis: 'xy', minZoom: 1, maxZoom: 25, threshold: 12, doubleTapDrag: 'zoom' },
};
