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
  FollowSeries,
  MouseWheelZoom,
  PanOnDrag,
} from '../../../../src';

export default {
  component: FollowSeries,
  argTypes: {
    dataKey: { control: { type: 'text' }, description: 'Data key of the series to keep centred.' },
    autoScale: {
      control: { type: 'boolean' },
      description: 'Fit the visible span to the data spread around the line.',
    },
    span: {
      control: { type: 'range', min: 0.1, max: 1, step: 0.05 },
      description: 'Visible value span as a fraction of the axis, when autoScale is off.',
    },
    padding: {
      control: { type: 'range', min: 0, max: 0.5, step: 0.01 },
      description: 'Extra headroom around the spread when autoScale is on.',
    },
  },
};

/**
 * Zoom into x and pan left/right: the view keeps the line vertically centred.
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
        <FollowSeries dataKey="uv" {...args} />
      </LineChart>
    </ResponsiveContainer>
  ),
  args: { dataKey: 'uv', autoScale: true, span: 0.5, padding: 0.1 },
};
