import { FunnelChart, Funnel, Tooltip, LabelList } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  { value: 100, name: 'Impression', fill: 'var(--color-chart-1)' },
  { value: 80, name: 'Click', fill: 'var(--color-chart-7)' },
  { value: 50, name: 'Visit', fill: 'var(--color-chart-4)' },
  { value: 40, name: 'Consult', fill: 'var(--color-chart-2)' },
  { value: 26, name: 'Order', fill: 'var(--color-chart-5)' },
];

// #endregion
export const FunnelChartExample = ({ isAnimationActive = true }: { isAnimationActive?: boolean }) => (
  <FunnelChart
    style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
    responsive
    margin={{
      right: 30,
    }}
  >
    <Tooltip
      contentStyle={{
        backgroundColor: 'var(--color-surface-raised)',
        borderColor: 'var(--color-border-2)',
      }}
      itemStyle={{
        color: 'var(--color-text-3)',
      }}
    />
    <Funnel dataKey="value" data={data} isAnimationActive={isAnimationActive} stroke="var(--color-surface-base)">
      <LabelList position="right" fill="var(--color-text-3)" stroke="none" dataKey="name" />
    </Funnel>
    <RechartsDevtools />
  </FunnelChart>
);

export default FunnelChartExample;
