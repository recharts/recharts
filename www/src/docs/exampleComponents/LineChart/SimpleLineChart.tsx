import { Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, createHorizontalChart } from 'recharts';
import { generateMockData, MockDataType, RechartsDevtools } from '@recharts/devtools';

const data: Array<MockDataType> = generateMockData(6, 26213);

const Typed = createHorizontalChart<MockDataType, string, number>()({ XAxis, YAxis, Tooltip, Line });

export default function Example() {
  return (
    <Typed.LineChart
      style={{ width: '100%', maxWidth: '700px', height: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 5,
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
      <Typed.Line dataKey="x" />
      <Typed.Line dataKey="y" />
      <RechartsDevtools />
    </Typed.LineChart>
  );
}
