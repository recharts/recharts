import React from 'react';
import { Args } from '@storybook/react-vite';
import { pageData } from '../../data';
import {
  Line,
  LineChart,
  Minimap,
  MinimapControls,
  MinimapDrag,
  MinimapKeyboard,
  MinimapPinch,
  MinimapWheel,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  ZoomAndPan,
} from '../../../../src';

// eslint-disable-next-line storybook/prefer-pascal-case
export const renderMinimap = (controls: React.ReactNode) => (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart data={pageData}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line dataKey="uv" stroke="#8884d8" dot={false} isAnimationActive={false} />
      <ZoomAndPan axis="x" initialZoom={{ x: { start: 0.2, end: 0.55 } }} scrollbars={false} />
      <Minimap axis="x" width={220} height={80} viewportStroke="#1d4ed8" controls={controls}>
        <LineChart data={pageData}>
          <Line dataKey="uv" stroke="#8884d8" dot={false} isAnimationActive={false} />
        </LineChart>
      </Minimap>
    </LineChart>
  </ResponsiveContainer>
);

export default {
  component: MinimapControls,
};

export const API = {
  render: (_args: Args) => renderMinimap(<MinimapControls />),
};

export const ComposedControls = {
  render: (_args: Args) =>
    renderMinimap(
      <>
        <MinimapDrag />
        <MinimapWheel />
        <MinimapPinch />
        <MinimapKeyboard />
      </>,
    ),
};
