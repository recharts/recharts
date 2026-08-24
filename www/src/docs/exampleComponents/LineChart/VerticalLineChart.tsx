import { Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, createVerticalChart } from 'recharts';
import { generateMockData, MockDataType, RechartsDevtools } from '@recharts/devtools';

const data: Array<MockDataType> = generateMockData(6, 294213);

const Typed = createVerticalChart<MockDataType, string, number>()({ XAxis, YAxis, Tooltip, Line });

export default function Example(props: { isAnimationActive?: boolean }) {
  return (
    <Typed.LineChart
      style={{ width: '100%', maxWidth: '300px', maxHeight: '70vh', aspectRatio: 1 / 1.618 }}
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
      <Typed.XAxis type="number" />
      <Typed.YAxis dataKey="label" type="category" width="auto" />
      <Tooltip />
      <Legend />
      <Typed.Line dataKey="x" isAnimationActive={props.isAnimationActive} />
      <Typed.Line dataKey="y" isAnimationActive={props.isAnimationActive} />
      <RechartsDevtools />
    </Typed.LineChart>
  );
}
