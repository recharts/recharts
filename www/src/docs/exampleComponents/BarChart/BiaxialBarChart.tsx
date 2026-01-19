import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
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
const BiaxialBarChart = () => {
  return (
    <BarChart
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
      <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-3)" />
      <XAxis dataKey="name" stroke="var(--color-text-3)" />
      <YAxis yAxisId="left" orientation="left" stroke="var(--color-chart-1)" width="auto" />
      <YAxis yAxisId="right" orientation="right" stroke="var(--color-chart-2)" width="auto" />
      <Tooltip
        cursor={{ fill: 'var(--color-solid-7a)' }}
        contentStyle={{ backgroundColor: 'var(--color-surface-raised)', borderColor: 'var(--color-border-2)' }}
      />
      <Legend />
      <Bar yAxisId="left" dataKey="pv" fill="var(--color-chart-1)" />
      <Bar yAxisId="right" dataKey="uv" fill="var(--color-chart-2)" />
      <RechartsDevtools />
    </BarChart>
  );
};

export default BiaxialBarChart;
