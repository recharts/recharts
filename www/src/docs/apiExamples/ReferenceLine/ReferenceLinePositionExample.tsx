import { ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const smallData = [
  {
    name: 'Page A',
    pv: 2400,
  },
  {
    name: 'Page B',
    pv: 1398,
  },
  {
    name: 'Page C',
    pv: 9800,
  },
];

// #endregion
export const ReferenceLinePositionExample = ({ isAnimationActive = true }: { isAnimationActive?: boolean }) => (
  <BarChart
    style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
    responsive
    data={smallData}
  >
    <XAxis dataKey="name" stroke="var(--color-text-3)" />
    <YAxis width="auto" stroke="var(--color-text-3)" />
    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-3)" />
    <Tooltip
      contentStyle={{ backgroundColor: 'var(--color-surface-base)', borderColor: 'var(--color-border-2)' }}
      cursor={{ fill: 'var(--color-solid-7a)' }}
    />
    <ReferenceLine
      x="Page B"
      label={{ value: 'position: start', fill: 'var(--color-text-3)' }}
      stroke="var(--color-text-3)"
      position="start"
    />
    <ReferenceLine
      x="Page B"
      label={{ value: 'position: middle', fill: 'var(--color-text-3)' }}
      stroke="var(--color-text-3)"
      position="middle"
    />
    <ReferenceLine
      x="Page B"
      label={{ value: 'position: end', fill: 'var(--color-text-3)' }}
      stroke="var(--color-text-3)"
      position="end"
    />
    <Bar dataKey="pv" fill="var(--color-chart-1)" fillOpacity={0.3} isAnimationActive={isAnimationActive} />
    <RechartsDevtools />
  </BarChart>
);

export default ReferenceLinePositionExample;
