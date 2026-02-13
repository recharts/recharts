import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  { name: 'Page A', uv: 4000 },
  { name: 'Page B', uv: 3000 },
  { name: 'Page C', uv: 2000 },
  { name: 'Page D' },
  { name: 'Page E', uv: 1890 },
  { name: 'Page F', uv: 2390 },
  { name: 'Page G', uv: 3490 },
];

// #endregion
export default function Example() {
  return (
    <div style={{ width: '100%' }}>
      <LineChart
        style={{ width: '100%', maxWidth: '700px', maxHeight: '30vh', aspectRatio: 1.618 }}
        responsive
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-3)" />
        <XAxis dataKey="name" stroke="var(--color-text-3)" />
        <YAxis stroke="var(--color-text-3)" />
        <Tooltip
          cursor={{ stroke: 'var(--color-border-2)' }}
          contentStyle={{ backgroundColor: 'var(--color-surface-base)', borderColor: 'var(--color-border-2)' }}
        />
        <Line
          type="monotone"
          dataKey="uv"
          stroke="var(--color-chart-1)"
          fill="var(--color-chart-1)"
          activeDot={{
            stroke: 'var(--color-surface-base)',
          }}
        />
        <RechartsDevtools />
      </LineChart>

      <LineChart
        style={{ width: '100%', maxWidth: '700px', maxHeight: '30vh', aspectRatio: 1.618 }}
        responsive
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-3)" />
        <XAxis dataKey="name" stroke="var(--color-text-3)" />
        <YAxis stroke="var(--color-text-3)" />
        <Tooltip
          cursor={{ stroke: 'var(--color-border-2)' }}
          contentStyle={{ backgroundColor: 'var(--color-surface-base)', borderColor: 'var(--color-border-2)' }}
        />
        <Line
          connectNulls
          type="monotone"
          dataKey="uv"
          stroke="var(--color-chart-1)"
          fill="var(--color-chart-1)"
          activeDot={{
            stroke: 'var(--color-surface-base)',
          }}
        />
        <RechartsDevtools />
      </LineChart>
    </div>
  );
}
