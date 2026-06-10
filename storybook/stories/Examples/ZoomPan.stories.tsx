import * as React from 'react';
import {
  Area,
  AreaChart,
  AutoScaleAxis,
  Bar,
  BarChart,
  Brush,
  CartesianGrid,
  FollowSeries,
  Funnel,
  FunnelChart,
  Line,
  LineChart,
  Minimap,
  MouseWheelZoom,
  PanOnDrag,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  Sankey,
  Scatter,
  ScatterChart,
  SunburstChart,
  Tooltip,
  Treemap,
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

type ChartType = 'LineChart' | 'BarChart' | 'AreaChart' | 'ScatterChart';
type AutoScaleMode = 'off' | 'autoscale' | 'follow';
type MinimapPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
type BrushMode = 'off' | 'horizontal' | 'vertical' | 'both';

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
  touchDrag: 'tooltip' | 'pan';
  touchDoubleTapDrag: 'zoom' | 'select';
  scrollbars: boolean;
  wheelStep: number;
  wheelPanStep: number;
  panStep: number;
  panFastMultiplier: number;
  pinchThreshold: number;
  animate: boolean;
  controlled: boolean;
  minimap: boolean;
  minimapPosition: MinimapPosition;
  minimapWheel: boolean;
  minimapPinch: boolean;
  brushMode: BrushMode;
  brushAutoScaleYDomain: boolean;
  brushWheel: boolean;
  brushPinch: boolean;
  autoScaleMode: AutoScaleMode;
  scatterLOD: boolean;
  lodCellSize: number;
};

const data = Array.from({ length: 80 }, (_, i) => ({
  name: `#${i + 1}`,
  uv: Math.round(3200 + Math.sin(i / 4) * 1400 + Math.cos(i / 11) * 800 + (i % 7) * 90),
  pv: Math.round(2600 + Math.cos(i / 5) * 1200 + Math.sin(i / 9) * 700),
}));

const playgroundScatterData = data.map((entry, index) => ({
  x: index,
  y: entry.uv,
  z: entry.pv,
}));

const scatterXDomain: [number, number] = [0, playgroundScatterData.length - 1];
const scatterYValues = playgroundScatterData.map(entry => entry.y);
const scatterYDomain: [number, number] = [Math.min(...scatterYValues), Math.max(...scatterYValues)];

const fullViewport = { x: { start: 0, end: 1 }, y: { start: 0, end: 1 } };

export default {
  title: 'Examples/Zoom and Pan',
  argTypes: {
    chartType: {
      control: { type: 'inline-radio' },
      options: ['LineChart', 'BarChart', 'AreaChart', 'ScatterChart'],
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
    touchDrag: {
      control: { type: 'inline-radio' },
      options: ['tooltip', 'pan'],
      description: 'What a one-finger drag on the plot does on touch devices (tap still updates tooltip)',
    },
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
    controlled: { control: { type: 'boolean' }, description: 'Keep the viewport in React state' },
    minimap: { control: { type: 'boolean' }, description: 'Show the editable minimap overview' },
    minimapPosition: {
      control: { type: 'inline-radio' },
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
      description: 'Minimap placement inside the plot',
    },
    minimapWheel: { control: { type: 'boolean' }, description: 'Wheel / trackpad over the minimap' },
    minimapPinch: { control: { type: 'boolean' }, description: 'Pinch over the minimap' },
    brushMode: {
      control: { type: 'inline-radio' },
      options: ['off', 'horizontal', 'vertical', 'both'],
      description: 'Show Brush in zoom mode',
    },
    brushAutoScaleYDomain: { control: { type: 'boolean' }, description: 'Auto-scale Y while the Brush edits X' },
    brushWheel: { control: { type: 'boolean' }, description: 'Wheel / trackpad over the Brush' },
    brushPinch: { control: { type: 'boolean' }, description: 'Pinch over the Brush' },
    autoScaleMode: {
      control: { type: 'inline-radio' },
      options: ['off', 'autoscale', 'follow'],
      description: 'Viewport-reactive Y behavior',
    },
    scatterLOD: { control: { type: 'boolean' }, description: 'Apply scatter level-of-detail decimation' },
    lodCellSize: {
      control: { type: 'range', min: 2, max: 40, step: 1 },
      description: 'Scatter LOD cell size',
    },
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
    touchDrag: 'tooltip',
    touchDoubleTapDrag: 'zoom',
    pinchThreshold: 12,
    scrollbars: true,
    animate: false,
    controlled: false,
    minimap: true,
    minimapPosition: 'bottom-right',
    minimapWheel: true,
    minimapPinch: true,
    brushMode: 'both',
    brushAutoScaleYDomain: false,
    brushWheel: true,
    brushPinch: true,
    autoScaleMode: 'off',
    scatterLOD: false,
    lodCellSize: 10,
  },
};

function PlaygroundScatter({ scatterLOD, lodCellSize }: { scatterLOD: boolean; lodCellSize: number }) {
  const lodData = useScatterLOD(playgroundScatterData, { x: 'x', y: 'y', cellSize: lodCellSize, cull: true });
  return (
    <Scatter data={scatterLOD ? lodData : playgroundScatterData} dataKey="y" fill="#8884d8" isAnimationActive={false} />
  );
}

function renderPreviewChart(args: ZoomPlaygroundArgs) {
  const isAnimationActive = args.animate;

  // The preview is an isolated chart, so a vertical layout needs its own (hidden) axes - a vertical
  // cartesian chart cannot render with the implicit defaults alone.
  const previewAxes =
    args.layout === 'vertical' ? (
      <>
        <XAxis type="number" hide />
        <YAxis dataKey="name" type="category" hide />
      </>
    ) : null;

  if (args.chartType === 'BarChart') {
    return (
      <BarChart data={data} layout={args.layout}>
        {previewAxes}
        <Bar dataKey="uv" fill="#8884d8" isAnimationActive={isAnimationActive} />
        <Bar dataKey="pv" fill="#82ca9d" isAnimationActive={isAnimationActive} />
      </BarChart>
    );
  }

  if (args.chartType === 'AreaChart') {
    return (
      <AreaChart data={data} layout={args.layout}>
        {previewAxes}
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" isAnimationActive={isAnimationActive} />
        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" isAnimationActive={isAnimationActive} />
      </AreaChart>
    );
  }

  if (args.chartType === 'ScatterChart') {
    return (
      <ScatterChart data={playgroundScatterData}>
        <Scatter dataKey="y" fill="#8884d8" isAnimationActive={false} />
      </ScatterChart>
    );
  }

  return (
    <LineChart data={data} layout={args.layout}>
      {previewAxes}
      <Line type="monotone" dataKey="uv" stroke="#8884d8" dot={false} isAnimationActive={isAnimationActive} />
      <Line type="monotone" dataKey="pv" stroke="#82ca9d" dot={false} isAnimationActive={isAnimationActive} />
    </LineChart>
  );
}

type ControlledZoomPlaygroundArgs = ZoomPlaygroundArgs & {
  viewport?: typeof fullViewport;
  onZoomChange?: React.Dispatch<React.SetStateAction<typeof fullViewport>>;
};

function ZoomPlaygroundControls(args: ControlledZoomPlaygroundArgs) {
  const showHorizontalBrush = args.brushMode === 'horizontal' || args.brushMode === 'both';
  const showVerticalBrush = args.brushMode === 'vertical' || args.brushMode === 'both';

  return (
    <>
      <ZoomAndPan
        axis={args.axis}
        minZoom={args.minZoom}
        maxZoom={args.maxZoom}
        wheel={args.wheel}
        wheelStep={args.wheelStep}
        wheelPanStep={args.wheelPanStep}
        pan={args.pan}
        panStep={args.panStep}
        panFastMultiplier={args.panFastMultiplier}
        axisInteractions={args.axisInteractions}
        dragToZoom={args.dragToZoom}
        doubleClickReset={args.doubleClickReset}
        keyboard={args.keyboard}
        touch={args.touch}
        touchDrag={args.touchDrag}
        touchDoubleTapDrag={args.touchDoubleTapDrag}
        onTouchSelect={args.touchDoubleTapDrag === 'select' ? () => {} : undefined}
        pinchThreshold={args.pinchThreshold}
        scrollbars={args.scrollbars}
        viewport={args.controlled ? args.viewport : undefined}
        onZoomChange={args.controlled ? args.onZoomChange : undefined}
      />
      {args.autoScaleMode === 'autoscale' && <AutoScaleAxis />}
      {args.autoScaleMode === 'follow' && (
        <FollowSeries dataKey={args.chartType === 'ScatterChart' ? 'y' : 'uv'} autoScale />
      )}
      {args.minimap && (
        <Minimap
          axis={args.axis}
          position={args.minimapPosition}
          width={220}
          height={76}
          wheel={args.minimapWheel}
          pinch={args.minimapPinch}
          viewportStroke="#1d4ed8"
          fill="#fff"
        >
          {renderPreviewChart(args)}
        </Minimap>
      )}
      {showHorizontalBrush && (
        <Brush
          mode="zoom"
          axis="x"
          autoScaleYDomain={args.brushAutoScaleYDomain}
          wheel={args.brushWheel}
          pinch={args.brushPinch}
          height={56}
          stroke="#1d4ed8"
        >
          {renderPreviewChart(args)}
        </Brush>
      )}
      {showVerticalBrush && (
        <Brush layout="vertical" mode="zoom" axis="y" wheel={args.brushWheel} pinch={args.brushPinch} stroke="#0f766e">
          {renderPreviewChart(args)}
        </Brush>
      )}
    </>
  );
}

function PlaygroundChart(args: ControlledZoomPlaygroundArgs) {
  const zoom = {
    ...args,
    viewport: args.viewport,
    onZoomChange: args.onZoomChange,
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

  if (args.chartType === 'ScatterChart') {
    return (
      <ScatterChart width={760} height={420} data={playgroundScatterData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" type="number" domain={args.scatterLOD ? scatterXDomain : undefined} />
        <YAxis dataKey="y" type="number" domain={args.scatterLOD ? scatterYDomain : undefined} />
        <Tooltip />
        <PlaygroundScatter scatterLOD={args.scatterLOD} lodCellSize={args.lodCellSize} />
        <ZoomPlaygroundControls {...zoom} />
      </ScatterChart>
    );
  }

  if (args.chartType === 'BarChart') {
    return (
      <BarChart {...common}>
        <CartesianGrid strokeDasharray="3 3" />
        {axes}
        <Tooltip />
        <Bar dataKey="uv" fill="#8884d8" isAnimationActive={isAnimationActive} />
        <Bar dataKey="pv" fill="#82ca9d" isAnimationActive={isAnimationActive} />
        <ZoomPlaygroundControls {...zoom} />
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
        <ZoomPlaygroundControls {...zoom} />
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
      <ZoomPlaygroundControls {...zoom} />
    </LineChart>
  );
}

function Playground(args: ZoomPlaygroundArgs) {
  const [viewport, setViewport] = React.useState(fullViewport);
  return (
    <PlaygroundChart
      {...args}
      viewport={args.controlled ? viewport : undefined}
      onZoomChange={args.controlled ? setViewport : undefined}
    />
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

function MinimapExample() {
  return (
    <LineChart width={760} height={360} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" dot={false} isAnimationActive={false} />
      <Line type="monotone" dataKey="pv" stroke="#82ca9d" dot={false} isAnimationActive={false} />
      <ZoomAndPan axis="x" initialZoom={{ x: { start: 0.18, end: 0.48 } }} scrollbars={false} />
      <Minimap axis="x" position="bottom-right" width={220} height={76} viewportStroke="#1d4ed8">
        <LineChart data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" dot={false} isAnimationActive={false} />
          <Line type="monotone" dataKey="pv" stroke="#82ca9d" dot={false} isAnimationActive={false} />
        </LineChart>
      </Minimap>
    </LineChart>
  );
}

export const MinimapOverview = {
  name: 'Minimap overview',
  render: () => <MinimapExample />,
};

function BrushZoomModeExample() {
  return (
    <LineChart width={760} height={360} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" dot={false} isAnimationActive={false} />
      <ZoomAndPan axis="x" initialZoom={{ x: { start: 0.2, end: 0.5 } }} scrollbars={false} />
      <Brush mode="zoom" autoScaleYDomain height={52} stroke="#1d4ed8">
        <LineChart data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" dot={false} isAnimationActive={false} />
        </LineChart>
      </Brush>
    </LineChart>
  );
}

export const BrushZoomMode = {
  name: 'Brush zoom mode',
  render: () => <BrushZoomModeExample />,
};

function VerticalBrushZoomModeExample() {
  return (
    <LineChart width={760} height={360} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" dot={false} isAnimationActive={false} />
      <ZoomAndPan axis="y" initialZoom={{ y: { start: 0.2, end: 0.65 } }} scrollbars={false} />
      <Brush layout="vertical" mode="zoom" axis="y" stroke="#0f766e" wheel pinch>
        <LineChart data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" dot={false} isAnimationActive={false} />
        </LineChart>
      </Brush>
    </LineChart>
  );
}

export const VerticalBrushZoomMode = {
  name: 'Vertical brush zoom mode',
  render: () => <VerticalBrushZoomModeExample />,
};

function MultiBrushZoomModeExample() {
  return (
    <LineChart width={760} height={360} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" dot={false} isAnimationActive={false} />
      <Line type="monotone" dataKey="pv" stroke="#82ca9d" dot={false} isAnimationActive={false} />
      <ZoomAndPan axis="xy" initialZoom={{ x: { start: 0.12, end: 0.55 }, y: { start: 0.2, end: 0.75 } }} />
      <Brush mode="zoom" axis="x" autoScaleYDomain={false} height={52} stroke="#1d4ed8">
        <LineChart data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" dot={false} isAnimationActive={false} />
        </LineChart>
      </Brush>
      <Brush layout="vertical" mode="zoom" axis="y" stroke="#0f766e">
        <LineChart data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" dot={false} isAnimationActive={false} />
        </LineChart>
      </Brush>
    </LineChart>
  );
}

export const MultiBrushZoomMode = {
  name: 'Multi-brush zoom mode',
  render: () => <MultiBrushZoomModeExample />,
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
        {mode === 'autoscale' && <AutoScaleAxis />}
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

const specialChartData = [
  { name: 'A', value: 400, uv: 420, pv: 240, fill: '#8884d8' },
  { name: 'B', value: 300, uv: 300, pv: 139, fill: '#82ca9d' },
  { name: 'C', value: 240, uv: 220, pv: 980, fill: '#ffc658' },
  { name: 'D', value: 180, uv: 278, pv: 390, fill: '#ff8042' },
];

const specialSankeyData = {
  nodes: [{ name: 'Source' }, { name: 'A' }, { name: 'B' }, { name: 'Sink' }],
  links: [
    { source: 0, target: 1, value: 10 },
    { source: 0, target: 2, value: 6 },
    { source: 1, target: 3, value: 10 },
    { source: 2, target: 3, value: 6 },
  ],
};

const specialSunburstData = {
  name: 'root',
  value: 16,
  children: [
    {
      name: 'A',
      value: 10,
      fill: '#8884d8',
      children: [
        { name: 'A1', value: 4 },
        { name: 'A2', value: 6 },
      ],
    },
    { name: 'B', value: 6, fill: '#82ca9d', children: [{ name: 'B1', value: 6 }] },
  ],
};

const specialTreemapData = [
  { name: 'A', value: 10 },
  { name: 'B', value: 8 },
  { name: 'C', value: 6 },
  { name: 'D', value: 4 },
];

const specialZoom = {
  initialZoom: { x: { start: 0.15, end: 0.85 }, y: { start: 0.15, end: 0.85 } },
  scrollbars: true,
};

function SpecialChartsZoomExample() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(320px, 1fr))', gap: 16 }}>
      <PieChart width={360} height={260}>
        <Tooltip />
        <Pie data={specialChartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" />
        <ZoomAndPan {...specialZoom} />
      </PieChart>

      <RadarChart width={360} height={260} data={specialChartData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <Radar dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Tooltip />
        <ZoomAndPan {...specialZoom} />
      </RadarChart>

      <RadialBarChart width={360} height={260} data={specialChartData}>
        <RadialBar dataKey="value" background />
        <Tooltip />
        <ZoomAndPan {...specialZoom} />
      </RadialBarChart>

      <FunnelChart width={360} height={260}>
        <Tooltip />
        <Funnel dataKey="value" data={specialChartData} isAnimationActive={false} />
        <ZoomAndPan {...specialZoom} />
      </FunnelChart>

      <Sankey width={360} height={260} data={specialSankeyData}>
        <ZoomAndPan {...specialZoom} />
      </Sankey>

      <SunburstChart width={360} height={260} data={specialSunburstData}>
        <ZoomAndPan {...specialZoom} />
      </SunburstChart>

      <Treemap
        width={360}
        height={260}
        data={specialTreemapData}
        dataKey="value"
        nameKey="name"
        isAnimationActive={false}
      >
        <ZoomAndPan {...specialZoom} />
      </Treemap>
    </div>
  );
}

export const SpecialCharts = {
  name: 'Special charts',
  render: () => <SpecialChartsZoomExample />,
};
