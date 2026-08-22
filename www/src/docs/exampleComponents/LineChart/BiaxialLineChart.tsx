import { CartesianGrid, createHorizontalChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';
import { generateMockData, MockDataType, RechartsDevtools } from '@recharts/devtools';

const data: Array<MockDataType> = generateMockData(6, 231);

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
      <Typed.YAxis yAxisId="left" width="auto" />
      <Typed.YAxis yAxisId="right" orientation="right" width="auto" />
      <Tooltip />
      <Legend />
      <Typed.Line yAxisId="left" type="monotone" dataKey="x" activeDot={{ r: 8 }} />
      <Typed.Line yAxisId="right" type="monotone" dataKey="y" />
      <RechartsDevtools />
    </Typed.LineChart>
  );
}
