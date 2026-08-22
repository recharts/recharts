import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, createHorizontalChart } from 'recharts';
import { generateMockData, MockDataType, RechartsDevtools } from '@recharts/devtools';

const data: ReadonlyArray<MockDataType> = generateMockData(6, 823);

const Typed = createHorizontalChart<MockDataType, string, number>()({
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
});

const StackedBarChart = () => {
  return (
    <Typed.BarChart
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
      <Typed.XAxis dataKey="label" niceTicks="snap125" />
      <Typed.YAxis width="auto" niceTicks="snap125" />
      <Typed.Tooltip />
      <Legend />
      <Typed.Bar dataKey="x" stackId="a" background />
      <Typed.Bar dataKey="y" stackId="a" background />
      <RechartsDevtools />
    </Typed.BarChart>
  );
};

export default StackedBarChart;
