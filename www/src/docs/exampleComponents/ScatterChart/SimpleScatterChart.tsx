import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, TooltipIndex } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

// #endregion
const SimpleScatterChart = ({ defaultIndex }: { defaultIndex?: TooltipIndex }) => {
  return (
    <ScatterChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      margin={{
        top: 20,
        right: 0,
        bottom: 0,
        left: 0,
      }}
    >
      <CartesianGrid stroke="var(--color-border-3)" />
      <XAxis type="number" dataKey="x" name="stature" unit="cm" stroke="var(--color-text-3)" />
      <YAxis type="number" dataKey="y" name="weight" unit="kg" width="auto" stroke="var(--color-text-3)" />
      <Tooltip
        cursor={{ strokeDasharray: '3 3', stroke: 'var(--color-border-2)' }}
        defaultIndex={defaultIndex}
        contentStyle={{
          backgroundColor: 'var(--color-surface-raised)',
          borderColor: 'var(--color-border-2)',
        }}
        itemStyle={{
          color: 'var(--color-text-1)',
        }}
      />
      <Scatter activeShape={{ fill: 'red' }} name="A school" data={data} fill="var(--color-chart-1)" />
      <RechartsDevtools />
    </ScatterChart>
  );
};

export default SimpleScatterChart;
