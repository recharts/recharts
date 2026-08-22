import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, createHorizontalChart } from 'recharts';
import { generateMockData, MockDataType, RechartsDevtools } from '@recharts/devtools';

const data: ReadonlyArray<MockDataType> = generateMockData(6, 823);

const Typed = createHorizontalChart<MockDataType, string, number>()({
  BarChart,
  Bar,
  YAxis,
  XAxis,
});

const BiaxialBarChart = () => {
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
      <Typed.XAxis dataKey="label" />
      <Typed.YAxis yAxisId="left" orientation="left" width="auto" />
      <Typed.YAxis yAxisId="right" orientation="right" width="auto" />
      <Tooltip />
      <Legend />
      <Typed.Bar yAxisId="left" dataKey="x" />
      <Typed.Bar yAxisId="right" dataKey="y" />
      <RechartsDevtools />
    </Typed.BarChart>
  );
};

export default BiaxialBarChart;
