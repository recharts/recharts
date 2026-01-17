import { RechartsDevtools } from '@recharts/devtools';

import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from '../../recharts';

// #region Sample data
const data = [
  {
    name: 'Page A',
    uv: 400,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 300,
    pv: 4567,
    amt: 2400,
  },
  {
    name: 'Page C',
    uv: 320,
    pv: 1398,
    amt: 2400,
  },
  {
    name: 'Page D',
    uv: 200,
    pv: 9800,
    amt: 2400,
  },
  {
    name: 'Page E',
    uv: 278,
    pv: 3908,
    amt: 2400,
  },
  {
    name: 'Page F',
    uv: 189,
    pv: 4800,
    amt: 2400,
  },
];

// #endregion
export default function Step3() {
  return (
    <LineChart
      style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600 }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 5,
        left: 0,
      }}
    >
      <CartesianGrid strokeDasharray="5 5" stroke="var(--color-border-3)" />
      <Line
        type="monotone"
        dataKey="uv"
        stroke="var(--color-chart-11)"
        strokeWidth={2}
        name="My data series name"
        dot={{
          fill: 'var(--color-surface-base)',
        }}
        activeDot={{
          stroke: 'var(--color-surface-base)',
        }}
      />
      <XAxis dataKey="name" stroke="var(--color-text-3)" />
      <YAxis width="auto" label={{ value: 'UV', position: 'insideLeft', angle: -90 }} stroke="var(--color-text-3)" />
      <Legend align="right" />
      <RechartsDevtools />
    </LineChart>
  );
}
