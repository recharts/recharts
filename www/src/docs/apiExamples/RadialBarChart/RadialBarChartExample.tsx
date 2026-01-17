import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  {
    name: '18-24',
    uv: 31.47,
    pv: 2400,
    fill: '#8884d8',
  },
  {
    name: '25-29',
    uv: 26.69,
    pv: 4567,
    fill: '#83a6ed',
  },
  {
    name: '30-34',
    uv: -15.69,
    pv: 1398,
    fill: '#8dd1e1',
  },
  {
    name: '35-39',
    uv: 8.22,
    pv: 9800,
    fill: '#82ca9d',
  },
  {
    name: '40-49',
    uv: -8.63,
    pv: 3908,
    fill: '#a4de6c',
  },
  {
    name: '50+',
    uv: -2.63,
    pv: 4800,
    fill: '#d0ed57',
  },
  {
    name: 'unknown',
    uv: 6.67,
    pv: 4800,
    fill: '#ffc658',
  },
];

// #endregion
export const RadialBarChartExample = ({ isAnimationActive = true }: { isAnimationActive?: boolean }) => (
  <RadialBarChart
    style={{ width: '100%', maxWidth: '500px', aspectRatio: 2 }}
    responsive
    innerRadius="10%"
    outerRadius="100%"
    cx="30%"
    cy="75%"
    data={data}
    startAngle={180}
    endAngle={0}
  >
    <RadialBar
      label={{ fill: 'var(--color-text-1)', position: 'insideStart' }}
      background={{
        fill: 'var(--color-solid-6a)',
      }}
      dataKey="uv"
      isAnimationActive={isAnimationActive}
    />
    <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" align="right" />
    <Tooltip
      contentStyle={{ backgroundColor: 'var(--color-surface-raised)', borderColor: 'var(--color-border-2)' }}
      itemStyle={{ color: 'var(--color-text-1)' }}
      cursor={{ stroke: 'var(--color-border-2)' }}
    />
    <RechartsDevtools />
  </RadialBarChart>
);

export default RadialBarChartExample;
