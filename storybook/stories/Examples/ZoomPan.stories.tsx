import * as React from 'react';
import {
  Area,
  AreaChart,
  AutoScaleAxis,
  Bar,
  BarChart,
  CartesianGrid,
  FollowSeries,
  Line,
  LineChart,
  MouseWheelZoom,
  PanOnDrag,
  Scatter,
  ScatterChart,
  Tooltip,
  useScatterLOD,
  XAxis,
  YAxis,
  ZoomAndPan,
  ZoomScrollbar,
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
  layout: 'horizontal' | 'vertical';
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
    layout: {
      control: { type: 'inline-radio' },
      options: ['horizontal', 'vertical'],
      description: 'Chart orientation: swaps the category / value axes (e.g. horizontal bars)',
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
    layout: 'horizontal',
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
  const common = { width: 760, height: 420, data, layout: args.layout };
  const isAnimationActive = args.animate;
  // Swap which axis is the category and which is the value so the chart flips orientation.
  const axes =
    args.layout === 'vertical' ? (
      <>
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
      </>
    ) : (
      <>
        <XAxis dataKey="name" type="category" />
        <YAxis type="number" />
      </>
    );

  if (args.chartType === 'BarChart') {
    return (
      <BarChart {...common}>
        <CartesianGrid strokeDasharray="3 3" />
        {axes}
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
        {axes}
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
      {axes}
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

/**
 * Auto-scale & follow: pan the x axis (drag the plot or the scrollbar) and watch the y axis react.
 * "Auto-scale y" re-fits y to the data inside the visible window; "Follow series" keeps the line
 * vertically centred (auto-scaling the span around it). Switch modes to compare; "Off" leaves y free.
 */
function AutoScaleExample() {
  const [mode, setMode] = React.useState<'autoscale' | 'follow' | 'off'>('autoscale');
  const button = (value: typeof mode, label: string) => (
    <button
      type="button"
      onClick={() => setMode(value)}
      style={{ fontWeight: mode === value ? 'bold' : 'normal', marginRight: 6 }}
    >
      {label}
    </button>
  );
  return (
    <div>
      <div style={{ marginBottom: 8 }}>
        {button('autoscale', 'Auto-scale y')}
        {button('follow', 'Follow series')}
        {button('off', 'Off')}
        <span style={{ marginLeft: 8, color: '#888', fontSize: 12 }}>Drag the plot or the scrollbar to pan x.</span>
      </div>
      <LineChart width={760} height={320} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" dot={false} isAnimationActive={false} />
        <MouseWheelZoom axis="x" />
        <PanOnDrag axis="x" />
        <ZoomScrollbar axis="x" />
        {mode === 'autoscale' && <AutoScaleAxis axis="y" />}
        {mode === 'follow' && <FollowSeries dataKey="uv" autoScale />}
      </LineChart>
    </div>
  );
}

export const AutoScaleAndFollow = {
  name: 'Auto-scale & follow',
  render: () => <AutoScaleExample />,
};

/**
 * Level of detail: 4,000 scatter points decimated to roughly one per grid cell against the current
 * zoom. Zoom in (scroll) to reveal more points in the focused region; far fewer are drawn when
 * zoomed out. The decimation tracks the zoomed scales, so detail returns exactly where you look.
 */
// 15k points in tight clusters: dense enough that, zoomed out, many points share a cell and collapse;
// zoom into a cluster and the same data spreads over more cells, revealing the individual points.
const clusterCenters: ReadonlyArray<[number, number]> = [
  [250, 300],
  [520, 720],
  [800, 220],
  [380, 820],
  [680, 480],
];
type ScatterPoint = { x: number; y: number };

function makeScatterData(count: number): ScatterPoint[] {
  return Array.from({ length: count }, (_, i) => {
    const rand = (seed: number) => {
      const v = Math.sin((i + 1) * seed) * 43758.5453;
      return v - Math.floor(v);
    };
    const [cx, cy] = clusterCenters[i % clusterCenters.length] as [number, number];
    // Sum of randoms approximates a gaussian blob around the cluster centre.
    const dx = (rand(12.9898) + rand(45.164) + rand(78.233) - 1.5) * 70;
    const dy = (rand(33.71) + rand(91.43) + rand(7.31) - 1.5) * 70;
    return { x: Math.round(cx + dx), y: Math.round(cy + dy) };
  });
}

type ScatterLODArgs = {
  points: number;
  cellSize: number;
  cull: boolean;
};

function LODScatter({
  dataset,
  cellSize,
  cull,
  onCount,
}: {
  dataset: ReadonlyArray<ScatterPoint>;
  cellSize: number;
  cull: boolean;
  onCount: (n: number) => void;
}) {
  const points = useScatterLOD(dataset, { x: 'x', y: 'y', cellSize, cull });
  React.useEffect(() => onCount(points.length), [points, onCount]);
  return <Scatter data={points} dataKey="y" fill="#8884d8" isAnimationActive={false} />;
}

function ScatterLODExample({ points, cellSize, cull }: ScatterLODArgs) {
  const dataset = React.useMemo(() => makeScatterData(points), [points]);
  const [rendered, setRendered] = React.useState(points);
  return (
    <div>
      <div style={{ marginBottom: 8, fontFamily: 'monospace', fontSize: 12 }}>
        drawing {rendered} of {dataset.length} points — raise <strong>cellSize</strong> (LOD strength) or lower{' '}
        <strong>points</strong> if it lags; scroll to zoom in and reveal detail.
      </div>
      <ScatterChart width={760} height={420}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" type="number" domain={[0, 1000]} />
        <YAxis dataKey="y" type="number" domain={[0, 1000]} />
        <Tooltip />
        <LODScatter dataset={dataset} cellSize={cellSize} cull={cull} onCount={setRendered} />
        <MouseWheelZoom />
        <PanOnDrag />
        <ZoomScrollbar axis="x" />
        <ZoomScrollbar axis="y" />
      </ScatterChart>
    </div>
  );
}

export const ScatterLevelOfDetail = {
  name: 'Scatter level of detail',
  render: (args: ScatterLODArgs) => <ScatterLODExample {...args} />,
  argTypes: {
    points: {
      control: { type: 'range', min: 1000, max: 50000, step: 1000 },
      description: 'Total number of points generated.',
    },
    cellSize: {
      control: { type: 'range', min: 2, max: 40, step: 1 },
      description: 'LOD strength: px grid cell size. Larger keeps fewer points (one per cell).',
    },
    cull: { control: 'boolean', description: 'Drop points outside the visible plot.' },
  },
  args: { points: 15000, cellSize: 10, cull: true },
};
