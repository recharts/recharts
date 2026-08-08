import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis, ZoomAndPan } from 'recharts';
import { generateMockData } from '@recharts/devtools';

const data = generateMockData(60, 7);

export default function QuickStartExample() {
  return (
    <LineChart width={700} height={300} data={data} responsive>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="label" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="x" stroke="#8884d8" dot={false} isAnimationActive={false} />
      <Line type="monotone" dataKey="y" stroke="#82ca9d" dot={false} isAnimationActive={false} />
      {/* Wheel to zoom, drag to pan, Shift + drag to select, double-click to reset. */}
      <ZoomAndPan />
    </LineChart>
  );
}
