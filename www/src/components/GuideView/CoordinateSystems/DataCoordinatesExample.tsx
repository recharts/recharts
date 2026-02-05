import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, ReferenceDot, Label } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const data = [
  { name: 'Jan', sales: 4000, target: 3500 },
  { name: 'Feb', sales: 3000, target: 3500 },
  { name: 'Mar', sales: 5000, target: 3500 },
  { name: 'Apr', sales: 4500, target: 3500 },
  { name: 'May', sales: 6000, target: 3500 },
  { name: 'Jun', sales: 5500, target: 3500 },
];

/**
 * This example demonstrates data-based coordinates.
 * The ReferenceLine at y={3500} uses a data value, not pixels.
 * The ReferenceDot at x="Mar" and y={5000} also uses data values.
 * Recharts automatically converts these to the correct pixel positions.
 */
export default function DataCoordinatesExample() {
  return (
    <LineChart width={500} height={300} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis domain={[0, 7000]} />
      <Tooltip />
      <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />

      {/* Data-based horizontal line at y=3500 (the target) */}
      <ReferenceLine y={3500} stroke="red" strokeDasharray="5 5">
        <Label value="Target: 3500" position="insideTopRight" fill="red" />
      </ReferenceLine>

      {/* Data-based dot at the peak */}
      <ReferenceDot x="May" y={6000} r={8} fill="green" stroke="none">
        <Label value="Peak" position="top" fill="green" />
      </ReferenceDot>

      <RechartsDevtools />
    </LineChart>
  );
}
