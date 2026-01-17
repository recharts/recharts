import { RechartsDevtools } from '@recharts/devtools';
import { Pie, PieChart, Tooltip } from 'recharts';

export default function PieChartDefaultIndex({ isAnimationActive = true }: { isAnimationActive?: boolean }) {
  return (
    <PieChart width={400} height={400}>
      <Pie
        activeShape={{
          fill: 'red',
        }}
        data={[
          { name: 'Page A', uv: 590 },
          { name: 'Page B', uv: 590 },
          { name: 'Page C', uv: 868 },
        ]}
        dataKey="uv"
        stroke="var(--color-surface-base)"
        isAnimationActive={isAnimationActive}
      />
      <Tooltip
        defaultIndex={2}
        contentStyle={{
          backgroundColor: 'var(--color-surface-raised)',
          borderColor: 'var(--color-border-2)',
        }}
        itemStyle={{
          color: 'var(--color-text-3)',
        }}
      />
      <RechartsDevtools />
    </PieChart>
  );
}
