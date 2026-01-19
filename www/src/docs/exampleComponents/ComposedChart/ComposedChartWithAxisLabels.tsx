import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  {
    name: 'Page A',
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: 'Page B',
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: 'Page C',
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: 'Page D',
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: 'Page E',
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: 'Page F',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
];

// #endregion
const ComposedChartWithAxisLabels = () => {
  return (
    <ComposedChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 0,
        bottom: 0,
        left: 0,
      }}
    >
      <CartesianGrid stroke="var(--color-border-3)" />
      <XAxis
        dataKey="name"
        label={{ value: 'Pages', position: 'insideBottomRight', offset: 0 }}
        scale="band"
        stroke="var(--color-text-3)"
      />
      <YAxis label={{ value: 'Index', angle: -90, position: 'insideLeft' }} width="auto" stroke="var(--color-text-3)" />
      <Tooltip
        cursor={{ stroke: 'var(--color-border-2)' }}
        contentStyle={{
          backgroundColor: 'var(--color-surface-raised)',
          borderColor: 'var(--color-border-2)',
        }}
      />
      <Legend />
      <Area
        type="monotone"
        dataKey="amt"
        fill="var(--color-chart-1)"
        stroke="var(--color-chart-1)"
        activeDot={{
          stroke: 'var(--color-surface-base)',
        }}
      />
      <Bar dataKey="pv" barSize={20} fill="var(--color-chart-9)" />
      <Line
        type="monotone"
        dataKey="uv"
        stroke="var(--color-chart-8)"
        dot={{
          fill: 'var(--color-surface-base)',
        }}
        activeDot={{
          stroke: 'var(--color-surface-base)',
        }}
      />
      <RechartsDevtools />
    </ComposedChart>
  );
};

export default ComposedChartWithAxisLabels;
