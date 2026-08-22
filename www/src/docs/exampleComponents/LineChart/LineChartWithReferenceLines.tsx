import { CartesianGrid, createHorizontalChart, Legend, Line, ReferenceLine, Tooltip, XAxis, YAxis } from 'recharts';
import { generateMockData, MockDataType, RechartsDevtools } from '@recharts/devtools';

const data: Array<MockDataType> = generateMockData(6, 984);

const Typed = createHorizontalChart<MockDataType, string, number>()({ XAxis, YAxis, Tooltip, Line, ReferenceLine });

export default function Example() {
  return (
    <Typed.LineChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid />
      <Typed.XAxis dataKey="label" />
      <Typed.YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Typed.ReferenceLine
        x="Iter: 2"
        stroke="red"
        label={{ value: 'Example label', fill: 'red', position: 'insideBottomRight', angle: 90, dx: 20 }}
      />
      <Typed.ReferenceLine y={500} stroke="red" label={{ value: '500', fill: 'red', position: 'insideTopLeft' }} />
      <Typed.Line type="monotone" dataKey="x" />
      <Typed.Line type="monotone" dataKey="y" />
      <RechartsDevtools />
    </Typed.LineChart>
  );
}
