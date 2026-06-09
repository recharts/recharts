import * as React from 'react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  ZoomAndPan,
} from '../../../src';

/**
 * Interactive zoom & pan playground.
 *
 * Try it: scroll over the chart to zoom (centred on the pointer), drag to pan, and double-click to
 * reset. Use the Controls panel to constrain the axis, change the zoom limits, and toggle each
 * gesture. The `animate` control toggles the per-series mount animation; zooming/panning stays
 * smooth either way because animation is suppressed automatically while the chart is zoomed.
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
  touchDoubleTapDrag: 'zoom' | 'select';
  scrollbars: boolean;
  wheelStep: number;
  wheelPanStep: number;
  panStep: number;
  panFastMultiplier: number;
  pinchThreshold: number;
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
    wheelPanStep: {
      control: { type: 'range', min: 0.0005, max: 0.005, step: 0.0005 },
      description: 'Pan distance per wheel delta unit',
    },
    pan: { control: { type: 'boolean' }, description: 'Drag to pan' },
    panStep: {
      control: { type: 'range', min: 0.01, max: 0.5, step: 0.01 },
      description: 'Pan distance per arrow-key press',
    },
    panFastMultiplier: {
      control: { type: 'range', min: 1, max: 10, step: 0.5 },
      description: 'Shift-arrow pan multiplier',
    },
    axisInteractions: {
      control: { type: 'boolean' },
      description: 'Wheel / drag on an axis zooms / pans just that axis',
    },
    dragToZoom: { control: { type: 'boolean' }, description: 'Desktop Shift + drag to zoom a region' },
    doubleClickReset: { control: { type: 'boolean' }, description: 'Double-click resets the view' },
    keyboard: { control: { type: 'boolean' }, description: 'Focus the chart: +/- zoom, Shift+arrows pan, 0 reset' },
    touch: { control: { type: 'boolean' }, description: 'Pinch, two-finger pan, double-tap (+drag) on touch devices' },
    touchDoubleTapDrag: {
      control: { type: 'inline-radio' },
      options: ['zoom', 'select'],
      description: 'Mobile double-tap + drag behavior',
    },
    pinchThreshold: {
      control: { type: 'range', min: 0, max: 40, step: 1 },
      description: 'Finger-spread before pinch zooming starts',
    },
    scrollbars: { control: { type: 'boolean' }, description: 'On-canvas scrollbars (shown only while zoomed)' },
    animate: { control: { type: 'boolean' }, description: 'Per-series mount animation (auto-off while zoomed)' },
  },
  args: {
    chartType: 'LineChart',
    axis: 'x',
    minZoom: 1,
    maxZoom: 25,
    wheel: true,
    wheelStep: 1.15,
    wheelPanStep: 0.0015,
    pan: true,
    panStep: 0.1,
    panFastMultiplier: 2.5,
    axisInteractions: true,
    dragToZoom: true,
    doubleClickReset: true,
    keyboard: true,
    touch: true,
    touchDoubleTapDrag: 'zoom',
    pinchThreshold: 12,
    scrollbars: true,
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
    wheelPanStep: args.wheelPanStep,
    pan: args.pan,
    panStep: args.panStep,
    panFastMultiplier: args.panFastMultiplier,
    axisInteractions: args.axisInteractions,
    dragToZoom: args.dragToZoom,
    doubleClickReset: args.doubleClickReset,
    keyboard: args.keyboard,
    touch: args.touch,
    touchDoubleTapDrag: args.touchDoubleTapDrag,
    onTouchSelect: args.touchDoubleTapDrag === 'select' ? () => {} : undefined,
    pinchThreshold: args.pinchThreshold,
    scrollbars: args.scrollbars,
  };
  const common = { width: 760, height: 420, data };
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
        <ZoomAndPan {...zoom} />
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
        <ZoomAndPan {...zoom} />
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
      <ZoomAndPan {...zoom} />
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
      <LineChart width={760} height={210} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" dot={false} isAnimationActive={false} />
        <ZoomAndPan {...zoom} />
      </LineChart>
      <LineChart width={760} height={210} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="pv" stroke="#82ca9d" dot={false} isAnimationActive={false} />
        <ZoomAndPan {...zoom} />
      </LineChart>
    </div>
  );
}

export const Controlled = {
  name: 'Controlled (synced charts)',
  render: () => <ControlledExample />,
};
