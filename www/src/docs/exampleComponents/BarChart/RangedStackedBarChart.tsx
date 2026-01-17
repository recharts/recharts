import { BarChart, XAxis, YAxis, Tooltip, Bar, BarStack, TooltipIndex } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const rangedStackedBarData = [
  { name: 'A', value1: [100, 200], value2: [200, 250], value3: [250, 300] },
  { name: 'B', value1: [120, 180], value2: [130, 230], value3: [170, 270] },
  { name: 'C', value1: [90, 160], value2: [210, 310], value3: [340, 440] },
  { name: 'D', value1: [80, 140], value2: [140, 200], value3: [200, 220] },
];
// #endregion

const RangedStackedBarChart = ({
  isAnimationActive = true,
  defaultIndex,
}: {
  isAnimationActive?: boolean;
  defaultIndex?: TooltipIndex;
}) => (
  <BarChart
    style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
    responsive
    data={rangedStackedBarData}
    id="recharts-ranged-stacked-bar-chart"
    margin={{
      top: 20,
      right: 20,
      bottom: 20,
      left: 20,
    }}
  >
    <XAxis dataKey="name" stroke="var(--color-text-3)" />
    <YAxis width="auto" stroke="var(--color-text-3)" />
    <Tooltip
      defaultIndex={defaultIndex}
      cursor={{ fill: 'var(--color-solid-7a)' }}
      contentStyle={{
        backgroundColor: 'var(--color-surface-raised)',
        borderColor: 'var(--color-border-2)',
      }}
    />
    <BarStack radius={25}>
      <Bar
        dataKey="value1"
        maxBarSize={50}
        fill="var(--color-chart-1)"
        isAnimationActive={isAnimationActive}
        activeBar={{ fill: 'var(--color-chart-9)' }}
      />
      <Bar
        dataKey="value2"
        maxBarSize={50}
        fill="var(--color-chart-2)"
        isAnimationActive={isAnimationActive}
        activeBar={{ fill: 'var(--color-chart-5)' }}
      />
      <Bar
        dataKey="value3"
        maxBarSize={50}
        fill="var(--color-chart-3)"
        isAnimationActive={isAnimationActive}
        activeBar={{ fill: 'var(--color-chart-3)' }}
      />
    </BarStack>
    <RechartsDevtools />
  </BarChart>
);

export default RangedStackedBarChart;
