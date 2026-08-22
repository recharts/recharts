import { CartesianGrid, createHorizontalChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';
import { generateMockData, MockDataType, RechartsDevtools } from '@recharts/devtools';

const data: Array<MockDataType> = generateMockData(6, 22133);

const Typed = createHorizontalChart<MockDataType, string, number>()({ XAxis, YAxis, Tooltip, Line });

export default function Example() {
  return (
    <Typed.LineChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 15,
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
      <Typed.Line type="monotone" dataKey="x" strokeDasharray="5 5" />
      <Typed.Line type="monotone" dataKey="y" strokeDasharray="3 4 5 2" />
      <RechartsDevtools />
    </Typed.LineChart>
  );
}
