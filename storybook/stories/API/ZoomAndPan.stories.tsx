import React from 'react';
import { Args } from '@storybook/react-vite';
import { pageData } from '../data';
import {
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  ZoomAndPan,
  useZoom,
} from '../../../src';

export default {
  component: ZoomAndPan,
  argTypes: {
    axis: {
      control: { type: 'inline-radio' },
      options: ['x', 'y', 'xy'],
      description: 'Which dimensions can be zoomed and panned.',
    },
    minZoom: {
      control: { type: 'range', min: 0.5, max: 2, step: 0.1 },
      description: 'Furthest zoom-out (1 = cannot zoom out past the full data).',
    },
    maxZoom: {
      control: { type: 'range', min: 2, max: 50, step: 1 },
      description: 'Deepest zoom-in (e.g. 25 shows ~1/25th of the data).',
    },
    wheel: { control: { type: 'boolean' }, description: 'Wheel / trackpad zooms around the pointer.' },
    wheelStep: {
      control: { type: 'range', min: 1.05, max: 2, step: 0.05 },
      description: 'Zoom factor per wheel notch.',
    },
    wheelPanStep: {
      control: { type: 'range', min: 0.0005, max: 0.005, step: 0.0005 },
      description: 'Pan distance per wheel delta unit (Shift + wheel, scrollbar wheel).',
    },
    pan: { control: { type: 'boolean' }, description: 'Drag the plot to pan.' },
    panStep: {
      control: { type: 'range', min: 0.01, max: 0.5, step: 0.01 },
      description: 'Pan distance per arrow-key press, as a fraction of the visible window.',
    },
    panFastMultiplier: {
      control: { type: 'range', min: 1, max: 10, step: 0.5 },
      description: 'Multiplier applied to panStep while Shift is held.',
    },
    axisInteractions: {
      control: { type: 'boolean' },
      description: 'Wheel / drag directly on an axis band zooms or pans just that axis.',
    },
    dragToZoom: { control: { type: 'boolean' }, description: 'Shift + drag selects a region to zoom into.' },
    doubleClickReset: { control: { type: 'boolean' }, description: 'Double-click / double-tap resets the view.' },
    keyboard: {
      control: { type: 'boolean' },
      description: 'With the chart focused: +/- zoom, arrows pan (Shift = faster), 0/Esc reset.',
    },
    touch: {
      control: { type: 'boolean' },
      description: 'Pinch to zoom, two-finger pan, double-tap (+ drag) on touch devices. Alias: pinch.',
    },
    touchDrag: {
      control: { type: 'inline-radio' },
      options: ['tooltip', 'pan'],
      description: 'What a one-finger drag on the plot does. A plain tap still updates the tooltip in both modes.',
    },
    touchDoubleTapDrag: {
      control: { type: 'inline-radio' },
      options: ['zoom', 'select'],
      description: 'Touch double-tap-then-drag: maps-style zoom, or a selection emitted via onTouchSelect.',
    },
    pinchThreshold: {
      control: { type: 'range', min: 0, max: 40, step: 1 },
      description: 'Finger-spread (px) before a pinch starts zooming; smaller moves stay pure pan.',
    },
    scrollbars: {
      control: { type: 'boolean' },
      description: 'On-canvas scrollbars per zoomed axis: drag to pan, wheel to pan, Shift + wheel to zoom.',
    },
    selectionClassName: { control: { type: 'text' }, description: 'Class added to the drag-selection rectangle.' },
  },
};

/**
 * Every gesture, limit and tuning option in one place. Wheel over the plot to zoom, drag to pan,
 * Shift + drag to select a region, double-click to reset, use the keyboard, or pinch on touch.
 */
export const API = {
  render: (args: Args) => (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={pageData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line dataKey="uv" stroke="#8884d8" dot={false} isAnimationActive={false} />
        <Line dataKey="pv" stroke="#82ca9d" dot={false} isAnimationActive={false} />
        <ZoomAndPan {...args} />
      </LineChart>
    </ResponsiveContainer>
  ),
  args: {
    axis: 'xy',
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
    touchDrag: 'tooltip',
    touchDoubleTapDrag: 'zoom',
    pinchThreshold: 12,
    scrollbars: true,
  },
};

function ControlledChart() {
  const fullViewport = { x: { start: 0, end: 1 }, y: { start: 0, end: 1 } };
  const [viewport, setViewport] = React.useState(fullViewport);

  return (
    <div>
      <div style={{ marginBottom: 8, fontFamily: 'monospace', fontSize: 12 }}>
        x: [{viewport.x.start.toFixed(3)}, {viewport.x.end.toFixed(3)}]{'  '}
        <button type="button" onClick={() => setViewport(fullViewport)}>
          Reset
        </button>
      </div>
      <ResponsiveContainer width="100%" height={360}>
        <LineChart data={pageData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line dataKey="uv" stroke="#8884d8" dot={false} isAnimationActive={false} />
          <ZoomAndPan axis="x" viewport={viewport} onZoomChange={setViewport} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

/**
 * The viewport can live in your own state: pass `viewport` and feed `onZoomChange` back. Useful to
 * persist the zoom, synchronize several charts, or drive the chart from custom UI. For imperative
 * control from elsewhere in the tree, the `useZoom()` hook exposes the same state plus
 * zoomIn/zoomOut/pan/reset helpers.
 */
export const ControlledViewport = {
  render: () => <ControlledChart />,
};

function ZoomButtons() {
  const { zoomIn, zoomOut, reset, isZoomed } = useZoom();
  return (
    <div style={{ marginBottom: 8, display: 'flex', gap: 4 }}>
      <button type="button" onClick={() => zoomIn()}>
        +
      </button>
      <button type="button" onClick={() => zoomOut()}>
        −
      </button>
      <button type="button" onClick={reset} disabled={!isZoomed}>
        Reset
      </button>
    </div>
  );
}

/**
 * Bring your own controls: switch the built-in gestures off and drive the viewport through
 * `useZoom()` (or a controlled `viewport`). Here only the buttons can zoom.
 */
export const CustomControlsOnly = {
  render: () => (
    <ResponsiveContainer width="100%" height={360}>
      <LineChart data={pageData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line dataKey="uv" stroke="#8884d8" dot={false} isAnimationActive={false} />
        <ZoomAndPan wheel={false} pan={false} touch={false} keyboard={false} dragToZoom={false} />
        <ZoomButtons />
      </LineChart>
    </ResponsiveContainer>
  ),
};

/**
 * Charts without cartesian axes (Pie, Radar, RadialBar, Funnel, Sankey, Sunburst, Treemap) zoom as
 * a camera: the content scales and pans under the same gestures, uniformly for centric charts so
 * they keep their aspect. Wheel over the pie to try it.
 */
export const PolarAndStandaloneCharts = {
  render: () => (
    <ResponsiveContainer width="100%" height={360}>
      <PieChart>
        <Pie
          data={pageData}
          dataKey="uv"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
          isAnimationActive={false}
        />
        <Tooltip />
        <ZoomAndPan scrollbars={false} />
      </PieChart>
    </ResponsiveContainer>
  ),
};

/**
 * Shorthand: the chart root also accepts a `zoom` prop (`true`, an axis like `"x"`, or a full
 * options object) that mounts `<ZoomAndPan/>` for you. Handy for charts that don't take children
 * configuration, and for quick setups.
 */
export const ZoomPropShorthand = {
  render: () => (
    <ResponsiveContainer width="100%" height={360}>
      <LineChart data={pageData} zoom="x">
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line dataKey="uv" stroke="#8884d8" dot={false} isAnimationActive={false} />
      </LineChart>
    </ResponsiveContainer>
  ),
};
