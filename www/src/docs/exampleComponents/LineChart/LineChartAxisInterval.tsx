import { LineChart, Line, XAxis, YAxis, CartesianGrid, AxisInterval } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

// #endregion
const MyChart = (props: { interval: AxisInterval }) => (
  <LineChart
    style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
    responsive
    data={data}
    margin={{ left: 0, right: 0, top: 10 }}
  >
    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-3)" />
    <XAxis dataKey="name" interval={props.interval} stroke="var(--color-text-3)" />
    <YAxis interval={props.interval} width="auto" stroke="var(--color-text-3)" />
    <Line
      type="monotone"
      dataKey="pv"
      stroke="var(--color-chart-1)"
      dot={{
        fill: 'var(--color-surface-base)',
      }}
      activeDot={{ r: 8, stroke: 'var(--color-surface-base)' }}
    />
    <Line
      type="monotone"
      dataKey="uv"
      stroke="var(--color-chart-2)"
      dot={{
        fill: 'var(--color-surface-base)',
      }}
      activeDot={{ stroke: 'var(--color-surface-base)' }}
    />
    <RechartsDevtools />
  </LineChart>
);
const LineChartAxisInterval = () => {
  return (
    <>
      <MyChart interval="preserveStart" />
      <MyChart interval="preserveEnd" />
      <MyChart interval="preserveStartEnd" />
      <MyChart interval="equidistantPreserveStart" />
      <MyChart interval={1} />
    </>
  );
};

export default LineChartAxisInterval;
