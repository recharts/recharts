import { Area, AreaChart, Tooltip, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const rangeData = [
  { day: '05-01', temperature: [-1, 10] },
  { day: '05-02', temperature: [2, 15] },
  { day: '05-03', temperature: [3, 12] },
  { day: '05-04', temperature: [4, 12] },
  { day: '05-05', temperature: [12, 16] },
  { day: '05-06', temperature: [5, 16] },
  { day: '05-07', temperature: [3, 12] },
  { day: '05-08', temperature: [0, 8] },
  { day: '05-09', temperature: [-3, 5] },
];

// #endregion
const AreaChartRangeExample = ({ isAnimationActive = true }) => (
  <AreaChart
    style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
    responsive
    data={rangeData}
    margin={{
      top: 20,
      right: 0,
      bottom: 20,
      left: 0,
    }}
  >
    <XAxis dataKey="day" stroke="var(--color-text-3)" />
    <YAxis width="auto" stroke="var(--color-text-3)" />
    <Area
      dataKey="temperature"
      stroke="var(--color-chart-1)"
      fill="var(--color-chart-1)"
      activeDot={{
        stroke: 'var(--color-surface-base)',
      }}
      isAnimationActive={isAnimationActive}
    />
    <Tooltip
      cursor={{
        stroke: 'var(--color-border-2)',
      }}
      contentStyle={{
        backgroundColor: 'var(--color-surface-raised)',
        borderColor: 'var(--color-border-2)',
      }}
    />
    <RechartsDevtools />
  </AreaChart>
);

export default AreaChartRangeExample;
