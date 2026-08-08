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
  AutoScaleAxis,
  MouseWheelZoom,
  PanOnDrag,
} from '../../../../src';

export default {
  component: AutoScaleAxis,
  argTypes: {
    axis: {
      control: { type: 'inline-radio' },
      options: ['x', 'y'],
      description: 'The axis to fit. Defaults to the layout value axis (y horizontal, x vertical).',
    },
    padding: {
      control: { type: 'range', min: 0, max: 0.5, step: 0.01 },
      description: 'Headroom kept around the fitted data, as a fraction of the fitted span.',
    },
  },
};

/**
 * Zoom into a slice of x and pan around: the y axis keeps re-fitting to the visible data.
 */
export const API = {
  render: (args: Args) => (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={pageData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line dataKey="uv" stroke="#8884d8" dot={false} isAnimationActive={false} />
        <MouseWheelZoom axis="x" />
        <PanOnDrag axis="x" />
        <AutoScaleAxis {...args} />
      </LineChart>
    </ResponsiveContainer>
  ),
  args: { padding: 0.05 },
};
