import { CartesianGrid, createHorizontalChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';
import { generateMockData, MockDataType, RechartsDevtools } from '@recharts/devtools';

const data: Array<MockDataType> = generateMockData(6, 248213);

const Typed = createHorizontalChart<MockDataType, string, number>()({ XAxis, YAxis, Tooltip, Line });

export default function Example() {
  return (
    <Typed.LineChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
    >
      <CartesianGrid />
      <Typed.XAxis dataKey="label" padding={{ left: 30, right: 100 }} />
      <Typed.YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Typed.Line type="monotone" dataKey="x" activeDot={{ r: 8 }} />
      <Typed.Line type="monotone" dataKey="y" />
      <RechartsDevtools />
    </Typed.LineChart>
  );
}
