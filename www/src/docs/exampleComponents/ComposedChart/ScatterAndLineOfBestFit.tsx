import { ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Scatter } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  { index: 10000, alphaDot: 1643, betaDot: 790 },
  { index: 1666, alphaDot: 182, betaDot: 42 },
  { index: 625, alphaDot: 56, betaDot: 11 },
  // Calculation of line of best fit is not included in this demo
  { index: 300, alphaLine: 0 },
  { index: 10000, alphaLine: 1522 },
  { index: 600, betaLine: 0 },
  { index: 10000, betaLine: 678 },
] satisfies Array<{
  index: number;
  alphaDot?: number;
  betaDot?: number;
  alphaLine?: number;
  betaLine?: number;
}>;

// #endregion
const ScatterAndLineOfBestFit = () => {
  return (
    <ComposedChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 0,
        bottom: 0,
        left: 0,
      }}
    >
      <CartesianGrid stroke="var(--color-border-3)" />
      <XAxis
        dataKey="index"
        type="number"
        label={{ value: 'Index', position: 'insideBottomRight', offset: 0 }}
        stroke="var(--color-text-3)"
      />
      <YAxis
        unit="ms"
        type="number"
        label={{ value: 'Time', angle: -90, position: 'insideLeft' }}
        width="auto"
        stroke="var(--color-text-3)"
      />
      <Tooltip
        cursor={{ stroke: 'var(--color-border-2)' }}
        contentStyle={{
          backgroundColor: 'var(--color-surface-raised)',
          borderColor: 'var(--color-border-2)',
        }}
        itemStyle={{
          color: 'var(--color-text-3)',
        }}
      />
      <Legend />

      <Scatter name="alpha" dataKey="alphaDot" fill="var(--color-chart-1)" />
      <Scatter name="beta" dataKey="betaDot" fill="var(--color-chart-2)" />
      <Line dataKey="alphaLine" stroke="var(--color-chart-1)" dot={false} activeDot={false} legendType="none" />
      <Line dataKey="betaLine" stroke="var(--color-chart-2)" dot={false} activeDot={false} legendType="none" />
      <RechartsDevtools />
    </ComposedChart>
  );
};

export default ScatterAndLineOfBestFit;
