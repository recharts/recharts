import { Line, LineChart } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

export default function StaticDimensionChart() {
  return (
    <LineChart
      width={200}
      height={200}
      data={[
        { x: 1, y: 1 },
        { x: 2, y: 4 },
      ]}
    >
      <Line
        dataKey="y"
        dot={{
          fill: 'var(--color-surface-base)',
        }}
        activeDot={{
          stroke: 'var(--color-surface-base)',
        }}
      />
      <RechartsDevtools />
    </LineChart>
  );
}
