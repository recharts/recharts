import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis, useZoom, useZoomState } from 'recharts';
import { generateMockData } from '@recharts/devtools';

const data = generateMockData(60, 11);

function ZoomButtons() {
  const { zoomIn, zoomOut, reset, isZoomed } = useZoom();
  const [zoom, setZoom] = useZoomState();

  return (
    <foreignObject x={8} y={308} width={684} height={46}>
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
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
    </foreignObject>
  );
}

export default function CustomControlsExample() {
  return (
    <LineChart width={700} height={360} data={data} margin={{ bottom: 64 }} responsive>
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
