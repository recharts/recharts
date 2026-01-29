import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const series = [
  {
    name: 'Series 1',
    data: [
      { category: 'A', value: 0.1 },
      { category: 'B', value: 0.2 },
      { category: 'C', value: 0.3 },
    ],
  },
  {
    name: 'Series 2',
    data: [
      { category: 'B', value: 0.4 },
      { category: 'C', value: 0.5 },
      { category: 'D', value: 0.6 },
    ],
  },
  {
    name: 'Series 3',
    data: [
      { category: 'C', value: 0.7 },
      { category: 'D', value: 0.8 },
      { category: 'E', value: 0.9 },
    ],
  },
];

// #endregion
export default function LineChartHasMultiSeries() {
  return (
    <LineChart style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }} responsive>
      <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-3)" />
      <XAxis dataKey="category" type="category" allowDuplicatedCategory={false} stroke="var(--color-text-3)" />
      <YAxis dataKey="value" width="auto" stroke="var(--color-text-3)" />
      <Tooltip
        cursor={{ stroke: 'var(--color-border-2)' }}
        contentStyle={{ backgroundColor: 'var(--color-surface-base)', borderColor: 'var(--color-border-2)' }}
      />
      <Legend />
      {series.map(s => (
        <Line
          dataKey="value"
          data={s.data}
          name={s.name}
          key={s.name}
          stroke="var(--color-chart-1)"
          dot={{
            fill: 'var(--color-surface-base)',
          }}
          activeDot={{
            stroke: 'var(--color-surface-base)',
          }}
        />
      ))}
      <RechartsDevtools />
    </LineChart>
  );
}
