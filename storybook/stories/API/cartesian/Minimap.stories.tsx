import React from 'react';
import { Args } from '@storybook/react-vite';
import { pageData } from '../../data';
import {
  Line,
  LineChart,
  Minimap,
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

export default {
  component: Minimap,
  argTypes: {
    axis: {
      control: { type: 'inline-radio' },
      options: ['x', 'y', 'xy'],
    },
    position: {
      control: { type: 'inline-radio' },
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
    },
    width: { control: { type: 'range', min: 80, max: 320, step: 10 } },
    height: { control: { type: 'range', min: 40, max: 160, step: 5 } },
    minimapWheel: { control: { type: 'boolean' } },
    minimapPinch: { control: { type: 'boolean' } },
    fill: { control: { type: 'color' } },
    stroke: { control: { type: 'color' } },
    viewportStroke: { control: { type: 'color' } },
    shadeOpacity: { control: { type: 'range', min: 0, max: 0.8, step: 0.05 } },
    zIndex: { control: { type: 'range', min: 0, max: 5000, step: 100 } },
  },
};

export const API = {
  render: ({ minimapWheel, minimapPinch, ...args }: Args) => {
    const controls = (
      <>
        <MinimapDrag />
        <MinimapWheel enabled={minimapWheel} />
        {minimapPinch && <MinimapPinch />}
        <MinimapKeyboard />
      </>
    );
    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={pageData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line dataKey="uv" stroke="#8884d8" dot={false} isAnimationActive={false} />
          <ZoomAndPan axis={args.axis} initialZoom={{ x: { start: 0.2, end: 0.55 } }} scrollbars={false} />
          <Minimap {...args} controls={controls}>
            <LineChart data={pageData}>
              <Line dataKey="uv" stroke="#8884d8" dot={false} isAnimationActive={false} />
            </LineChart>
          </Minimap>
        </LineChart>
      </ResponsiveContainer>
    );
  },
  args: {
    axis: 'x',
    position: 'bottom-right',
    width: 200,
    height: 80,
    minimapWheel: true,
    minimapPinch: true,
    fill: '#fff',
    stroke: '#cbd5e1',
    viewportStroke: '#1d4ed8',
    shadeOpacity: 0.25,
    zIndex: 2500,
  },
};
