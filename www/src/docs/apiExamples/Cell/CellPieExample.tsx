import { PieChart, Pie, Cell } from 'recharts';
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
const CellPieExample = ({ isAnimationActive = true }: { isAnimationActive?: boolean }) => (
  <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '70vh', aspectRatio: 1 }} responsive>
    <defs>
      <pattern id="pattern-checkers" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="5" height="5" y="0" fill="var(--color-solid-1a)" />
        <rect className="checker" x="10" width="5" height="5" y="10" fill="var(--color-solid-1a)" />
      </pattern>
    </defs>
    <Pie data={data} label isAnimationActive={isAnimationActive} stroke="var(--color-surface-base)">
      {data.map((_entry, index) => (
        <Cell key={`cell-${index}`} fill={colors[index]} />
      ))}
    </Pie>
    <RechartsDevtools />
  </PieChart>
);

export default CellPieExample;
