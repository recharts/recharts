import React from 'react';
import { Args } from '@storybook/react-vite';
import { pageData } from '../../data';
import {
  Brush,
  BrushZoomControls,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  ZoomAndPan,
} from '../../../../src';

// eslint-disable-next-line storybook/prefer-pascal-case
export const renderBrush = (controls: React.ReactNode) => (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart data={pageData}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line dataKey="uv" stroke="#8884d8" dot={false} isAnimationActive={false} />
      <ZoomAndPan axis="x" initialZoom={{ x: { start: 0.2, end: 0.55 } }} scrollbars={false} />
      <Brush mode="zoom" axis="x" height={52} stroke="#1d4ed8" controls={controls}>
        <LineChart data={pageData}>
          <Line dataKey="uv" stroke="#8884d8" dot={false} isAnimationActive={false} />
        </LineChart>
      </Brush>
    </LineChart>
  </ResponsiveContainer>
);

export default {
  component: BrushZoomControls,
};

export const API = {
  render: (_args: Args) => renderBrush(<BrushZoomControls />),
};
