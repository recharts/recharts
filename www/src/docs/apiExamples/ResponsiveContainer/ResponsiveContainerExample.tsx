import { ResponsiveContainer, AreaChart, ReferenceLine, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
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
export const ResponsiveContainerExample = ({ isAnimationActive = true }: { isAnimationActive?: boolean }) => (
  <ResponsiveContainer width="100%" aspect={1.618} maxHeight={500}>
    <AreaChart
      data={data}
      margin={{
        top: 20,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <XAxis dataKey="name" stroke="var(--color-text-3)" />
      <YAxis width="auto" stroke="var(--color-text-3)" />
      <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-3)" />
      <Tooltip
        contentStyle={{ backgroundColor: 'var(--color-surface-raised)', borderColor: 'var(--color-border-2)' }}
        cursor={{ stroke: 'var(--color-border-2)' }}
      />
      <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
      <ReferenceLine y={4000} label="Max" stroke="red" strokeDasharray="3 3" />
      <Area
        type="monotone"
        dataKey="uv"
        stroke="var(--color-chart-1)"
        fill="var(--color-chart-1)"
        isAnimationActive={isAnimationActive}
      />
      <RechartsDevtools />
    </AreaChart>
  </ResponsiveContainer>
);

export default ResponsiveContainerExample;
