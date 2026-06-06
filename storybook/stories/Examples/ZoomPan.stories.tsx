import * as React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from '../../../src';

/**
 * Interactive zoom & pan playground.
 *
 * Try it: scroll over the chart to zoom (centred on the pointer), drag to pan, and double-click to
 * reset. Use the Controls panel to constrain the axis, change the zoom limits, and toggle each
 * gesture. The `animate` control re-enables the per-series animation so you can feel why we disable
 * it while zooming.
 */

type ChartType = 'LineChart' | 'BarChart' | 'AreaChart';

type ZoomPlaygroundArgs = {
  chartType: ChartType;
  axis: 'x' | 'y' | 'xy';
  minZoom: number;
  maxZoom: number;
  wheel: boolean;
  pan: boolean;
  doubleClickReset: boolean;
  animate: boolean;
};

const data = Array.from({ length: 80 }, (_, i) => ({
  name: `#${i + 1}`,
  uv: Math.round(3200 + Math.sin(i / 4) * 1400 + Math.cos(i / 11) * 800 + (i % 7) * 90),
  pv: Math.round(2600 + Math.cos(i / 5) * 1200 + Math.sin(i / 9) * 700),
}));

export default {
  title: 'Examples/Zoom and Pan',
  argTypes: {
    chartType: {
      control: { type: 'inline-radio' },
      options: ['LineChart', 'BarChart', 'AreaChart'],
      description: 'Which cartesian chart to render',
    },
    axis: {
      control: { type: 'inline-radio' },
      options: ['x', 'y', 'xy'],
      description: 'Dimensions that can be zoomed and panned',
    },
    minZoom: { control: { type: 'range', min: 0.5, max: 2, step: 0.1 }, description: 'Furthest zoom-out' },
    maxZoom: { control: { type: 'range', min: 2, max: 50, step: 1 }, description: 'Deepest zoom-in' },
    wheel: { control: { type: 'boolean' }, description: 'Wheel / trackpad to zoom' },
    pan: { control: { type: 'boolean' }, description: 'Drag to pan' },
    doubleClickReset: { control: { type: 'boolean' }, description: 'Double-click resets the view' },
    animate: { control: { type: 'boolean' }, description: 'Animate the series (laggy while zooming)' },
  },
  args: {
    chartType: 'LineChart',
    axis: 'x',
    minZoom: 1,
    maxZoom: 25,
    wheel: true,
    pan: true,
    doubleClickReset: true,
    animate: false,
  },
};

function Playground(args: ZoomPlaygroundArgs) {
  const zoom = {
    axis: args.axis,
    minZoom: args.minZoom,
    maxZoom: args.maxZoom,
    wheel: args.wheel,
    pan: args.pan,
    doubleClickReset: args.doubleClickReset,
  };
  const common = { width: 760, height: 420, data, zoom };
  const isAnimationActive = args.animate;

  if (args.chartType === 'BarChart') {
    return (
      <BarChart {...common}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="uv" fill="#8884d8" isAnimationActive={isAnimationActive} />
        <Bar dataKey="pv" fill="#82ca9d" isAnimationActive={isAnimationActive} />
      </BarChart>
    );
  }

  if (args.chartType === 'AreaChart') {
    return (
      <AreaChart {...common}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" isAnimationActive={isAnimationActive} />
        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" isAnimationActive={isAnimationActive} />
      </AreaChart>
    );
  }

  return (
    <LineChart {...common}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" dot={false} isAnimationActive={isAnimationActive} />
      <Line type="monotone" dataKey="pv" stroke="#82ca9d" dot={false} isAnimationActive={isAnimationActive} />
    </LineChart>
  );
}

export const ZoomAndPanPlayground = {
  name: 'Playground',
  render: (args: ZoomPlaygroundArgs) => <Playground {...args} />,
};
