import { useState } from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis, ZoomAndPan } from 'recharts';
import { generateMockData } from '@recharts/devtools';

const data = generateMockData(60, 17);
const fullViewport = { x: { start: 0, end: 1 }, y: { start: 0, end: 1 } };

/*
 * The viewport lives in React state and both charts receive it as a controlled prop: zoom or pan
 * either chart and the other follows. The same pattern persists zoom across remounts, drives the
 * chart from a router/URL, or feeds a server query with the visible window.
 */
export default function ControlledSyncExample() {
  const [viewport, setViewport] = useState(fullViewport);
  const zoom = { axis: 'x' as const, viewport, onZoomChange: setViewport, scrollbars: false };

  return (
    <div>
      <LineChart width={700} height={200} data={data} responsive>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="x" stroke="#8884d8" dot={false} isAnimationActive={false} />
        <ZoomAndPan {...zoom} />
      </LineChart>
      <LineChart width={700} height={200} data={data} responsive>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="y" stroke="#82ca9d" dot={false} isAnimationActive={false} />
        <ZoomAndPan {...zoom} />
      </LineChart>
    </div>
  );
}
