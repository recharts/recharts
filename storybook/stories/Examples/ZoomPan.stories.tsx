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
  axisInteractions: boolean;
  dragToZoom: boolean;
  doubleClickReset: boolean;
  keyboard: boolean;
  touch: boolean;
  wheelStep: number;
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
    wheelStep: {
      control: { type: 'range', min: 1.05, max: 2, step: 0.05 },
      description: 'Zoom factor per wheel notch',
    },
    pan: { control: { type: 'boolean' }, description: 'Drag to pan' },
    axisInteractions: {
      control: { type: 'boolean' },
      description: 'Wheel / drag on an axis zooms / pans just that axis',
    },
    dragToZoom: { control: { type: 'boolean' }, description: 'Shift + drag to zoom a region' },
    doubleClickReset: { control: { type: 'boolean' }, description: 'Double-click resets the view' },
    keyboard: { control: { type: 'boolean' }, description: 'Focus the chart: +/- zoom, Shift+arrows pan, 0 reset' },
    touch: { control: { type: 'boolean' }, description: 'Pinch, two-finger pan, double-tap (+drag) on touch devices' },
    animate: { control: { type: 'boolean' }, description: 'Animate the series (laggy while zooming)' },
  },
  args: {
    chartType: 'LineChart',
    axis: 'x',
    minZoom: 1,
    maxZoom: 25,
    wheel: true,
    wheelStep: 1.15,
    pan: true,
    axisInteractions: true,
    dragToZoom: true,
    doubleClickReset: true,
    keyboard: true,
    touch: true,
    animate: false,
  },
};

function Playground(args: ZoomPlaygroundArgs) {
  const zoom = {
    axis: args.axis,
    minZoom: args.minZoom,
    maxZoom: args.maxZoom,
    wheel: args.wheel,
    wheelStep: args.wheelStep,
    pan: args.pan,
    axisInteractions: args.axisInteractions,
    dragToZoom: args.dragToZoom,
    doubleClickReset: args.doubleClickReset,
    keyboard: args.keyboard,
    touch: args.touch,
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

/**
 * Controlled zoom: the viewport lives in React state, so it can be reset programmatically and
 * shared. Here two charts read and write the same viewport, so zooming/panning one keeps the other
 * perfectly in sync.
 */
const fullViewport = { x: { start: 0, end: 1 }, y: { start: 0, end: 1 } };

function ControlledExample() {
  const [viewport, setViewport] = React.useState(fullViewport);
  const zoom = { axis: 'x' as const, viewport, onZoomChange: setViewport };

  return (
    <div>
      <div style={{ marginBottom: 8, fontFamily: 'monospace', fontSize: 12 }}>
        x: [{viewport.x.start.toFixed(3)}, {viewport.x.end.toFixed(3)}]{'  '}
        <button type="button" onClick={() => setViewport(fullViewport)}>
          Reset
        </button>
      </div>
      <LineChart width={760} height={210} data={data} zoom={zoom}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" dot={false} isAnimationActive={false} />
      </LineChart>
      <LineChart width={760} height={210} data={data} zoom={zoom}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="pv" stroke="#82ca9d" dot={false} isAnimationActive={false} />
      </LineChart>
    </div>
  );
}

export const Controlled = {
  name: 'Controlled (synced charts)',
  render: () => <ControlledExample />,
};
