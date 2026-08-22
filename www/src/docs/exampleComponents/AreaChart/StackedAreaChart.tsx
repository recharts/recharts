import { Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, createHorizontalChart } from 'recharts';
import { generateMockData, MockDataType, RechartsDevtools } from '@recharts/devtools';

const data = generateMockData(6, 351905);

const Typed = createHorizontalChart<MockDataType, string, number>()({ Area, AreaChart, XAxis, YAxis, Tooltip });

const StackedAreaChart = () => {
  return (
    <Typed.AreaChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid />
      <Typed.XAxis dataKey="label" niceTicks="snap125" />
      <Typed.YAxis width="auto" niceTicks="snap125" />
      <Tooltip />
      <Typed.Area type="monotone" dataKey="x" stackId="1" />
      <Typed.Area type="monotone" dataKey="y" stackId="1" />
      <Typed.Area type="monotone" dataKey="z" stackId="1" />
      <RechartsDevtools />
    </Typed.AreaChart>
  );
};

export default StackedAreaChart;
