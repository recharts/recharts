import { Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, createHorizontalChart } from 'recharts';
import { generateMockData, MockDataType, RechartsDevtools } from '@recharts/devtools';

const data = generateMockData(6, 4390435);

const Typed = createHorizontalChart<MockDataType, string, number>()({ AreaChart, Area, XAxis, YAxis, Tooltip });

const SimpleAreaChart = () => {
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
      onContextMenu={(_, e) => e.preventDefault()}
    >
      <CartesianGrid />
      <Typed.XAxis dataKey="label" niceTicks="snap125" />
      <Typed.YAxis width="auto" niceTicks="snap125" />
      <Tooltip />
      <Typed.Area type="monotone" dataKey="y" />
      <RechartsDevtools />
    </Typed.AreaChart>
  );
};

export default SimpleAreaChart;
