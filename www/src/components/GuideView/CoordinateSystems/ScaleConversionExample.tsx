import { LineChart, Line, XAxis, YAxis, CartesianGrid, ReferenceDot, Label } from 'recharts';

const data = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 5000 },
  { name: 'Apr', sales: 4500 },
  { name: 'May', sales: 6000 },
  { name: 'Jun', sales: 5500 },
];

/**
 * This example demonstrates how to mark specific data points.
 *
 * For programmatic conversion between data and pixel coordinates,
 * use the following hooks (available in recharts 3.8+):
 * - useXAxisScale() - returns a function to convert X data values to pixels
 * - useYAxisScale() - returns a function to convert Y data values to pixels
 * - useXAxisInverseScale() - returns a function to convert pixels to X data values
 * - useYAxisInverseScale() - returns a function to convert pixels to Y data values
 * - useCartesianScale({x, y}) - convenience hook to convert both coordinates
 *
 * For this example, we use ReferenceDot which handles the conversion internally.
 */
export default function ScaleConversionExample() {
  return (
    <LineChart width={500} height={350} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis domain={[0, 7000]} />
      <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />

      {/* ReferenceDot uses data coordinates internally */}
      <ReferenceDot x="Mar" y={5000} r={10} fill="purple">
        <Label value="Mar @ 5000" position="top" fill="purple" />
      </ReferenceDot>

      <ReferenceDot x="May" y={6000} r={10} fill="green">
        <Label value="Peak: May @ 6000" position="top" fill="green" />
      </ReferenceDot>
    </LineChart>
  );
}
