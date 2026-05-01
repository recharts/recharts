import { CartesianGrid, Cell, HeatMap, HeatMapChart, Tooltip, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  { day: 'Mon', hour: '09:00', value: 14, fill: 'var(--color-chart-1)' },
  { day: 'Mon', hour: '12:00', value: 22, fill: 'var(--color-chart-2)' },
  { day: 'Mon', hour: '15:00', value: 18, fill: 'var(--color-chart-3)' },
  { day: 'Mon', hour: '18:00', value: 10, fill: 'var(--color-chart-4)' },
  { day: 'Tue', hour: '09:00', value: 8, fill: 'var(--color-chart-4)' },
  { day: 'Tue', hour: '12:00', value: 17, fill: 'var(--color-chart-3)' },
  { day: 'Tue', hour: '15:00', value: 24, fill: 'var(--color-chart-2)' },
  { day: 'Tue', hour: '18:00', value: 12, fill: 'var(--color-chart-5)' },
  { day: 'Wed', hour: '09:00', value: 11, fill: 'var(--color-chart-5)' },
  { day: 'Wed', hour: '12:00', value: 19, fill: 'var(--color-chart-1)' },
  { day: 'Wed', hour: '15:00', value: 27, fill: 'var(--color-chart-2)' },
  { day: 'Wed', hour: '18:00', value: 16, fill: 'var(--color-chart-3)' },
];
// #endregion

export default function SimpleHeatMapChart() {
  return (
    <HeatMapChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 0,
        bottom: 5,
        left: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-3)" />
      <XAxis type="category" dataKey="hour" stroke="var(--color-text-3)" />
      <YAxis type="category" dataKey="day" width={72} stroke="var(--color-text-3)" />
      <Tooltip
        cursor={false}
        contentStyle={{
          backgroundColor: 'var(--color-surface-raised)',
          borderColor: 'var(--color-border-2)',
        }}
      />
      <HeatMap dataKey="value" name="Requests" cellGap={6} radius={8} isAnimationActive={false}>
        {data.map(entry => (
          <Cell key={`${entry.day}-${entry.hour}`} fill={entry.fill} />
        ))}
      </HeatMap>
      <RechartsDevtools />
    </HeatMapChart>
  );
}
