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
  MouseWheelZoom,
  ZoomScrollbar,
} from '../../../../src';

export default {
  component: ZoomScrollbar,
  argTypes: {
    axis: {
      control: { type: 'inline-radio' },
      options: ['x', 'y'],
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
    thickness: { control: { type: 'range', min: 4, max: 24, step: 1 }, description: 'Visible bar thickness in px.' },
    thumbClassName: { control: { type: 'text' }, description: 'Class added to the draggable thumb.' },
  },
};

/**
 * Wheel to zoom in: the scrollbar appears on the plot edge. Drag it to pan.
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
        <ZoomScrollbar {...args} />
      </LineChart>
    </ResponsiveContainer>
  ),
  args: { axis: 'x', minZoom: 1, maxZoom: 25, thickness: 10 },
};
