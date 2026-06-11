import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis, useZoom, useZoomState } from 'recharts';
import { generateMockData } from '@recharts/devtools';

const data = generateMockData(60, 11);

function ZoomButtons() {
  // The full helper API: zoomIn/zoomOut/pan/reset over the shared viewport.
  const { zoomIn, zoomOut, reset, isZoomed } = useZoom();
  // Or the useState-shaped tuple, for custom controls or your own gesture library.
  const [zoom, setZoom] = useZoomState();

  return (
    <div style={{ display: 'flex', gap: 6, marginBottom: 8, alignItems: 'center' }}>
      <button type="button" onClick={() => zoomIn()}>
        Zoom in
      </button>
      <button type="button" onClick={() => zoomOut()}>
        Zoom out
      </button>
      <button type="button" onClick={() => setZoom({ x: { start: 0.75, end: 1 } })}>
        Last quarter
      </button>
      <button type="button" onClick={reset} disabled={!isZoomed}>
        Reset
      </button>
      <span style={{ fontFamily: 'monospace', fontSize: 12 }}>
        x: [{zoom.x.start.toFixed(2)}, {zoom.x.end.toFixed(2)}]
      </span>
    </div>
  );
}

export default function CustomControlsExample() {
  return (
    <LineChart width={700} height={300} data={data} responsive>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="label" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="x" stroke="#8884d8" dot={false} isAnimationActive={false} />
      {/* No interaction components mounted: the buttons are the only way to zoom. */}
      <ZoomButtons />
    </LineChart>
  );
}
