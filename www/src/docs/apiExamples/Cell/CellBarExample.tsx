import { Cell, BarChart, Bar } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 500 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];
const colors = [
  'var(--color-chart-1)',
  'var(--color-chart-7)',
  'var(--color-chart-4)',
  'var(--color-chart-2)',
  'var(--color-chart-5)',
  'url(#pattern-checkers)',
];

// #endregion
const CellBarExample = ({ isAnimationActive = true }: { isAnimationActive?: boolean }) => (
  <BarChart style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }} responsive data={data}>
    <Bar dataKey="value" isAnimationActive={isAnimationActive}>
      {data.map((_entry, index) => (
        <Cell key={`cell-${index}`} fill="none" stroke={colors[index]} strokeWidth={index === 2 ? 4 : 1} />
      ))}
    </Bar>
    <RechartsDevtools />
  </BarChart>
);

export default CellBarExample;
