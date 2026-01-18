import { CartesianGrid, Line, LineChart, ReferenceLine, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  {
    x: -50,
    y: -50,
  },
  {
    x: 0,
    y: 0,
  },
  {
    x: 50,
    y: 50,
  },
  {
    x: 100,
    y: 100,
  },
  {
    x: 150,
    y: 150,
  },
  {
    x: 200,
    y: 200,
  },
  {
    x: 250,
    y: 250,
  },
  {
    x: 350,
    y: 350,
  },
  {
    x: 400,
    y: 400,
  },
  {
    x: 450,
    y: 450,
  },
  {
    x: 500,
    y: 500,
  },
];

// #endregion
const minX = Math.min(...data.map(d => d.x));
const minY = Math.min(...data.map(d => d.y));

export default function LineChartNegativeValuesWithReferenceLines() {
  return (
    <LineChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-3)" />

      <YAxis
        dataKey="y"
        domain={['auto', 'auto']}
        type="number"
        interval={0}
        label={{
          value: `y`,
          style: { textAnchor: 'middle' },
          angle: -90,
          position: 'left',
          offset: 0,
          fill: 'var(--color-text-3)',
        }}
        allowDataOverflow
        strokeWidth={minX < 0 ? 0 : 1}
        width="auto"
        stroke="var(--color-text-3)"
      />

      <XAxis
        dataKey="x"
        domain={['auto', 'auto']}
        interval={0}
        type="number"
        label={{
          key: 'xAxisLabel',
          value: 'x',
          position: 'bottom',
          fill: 'var(--color-text-3)',
        }}
        allowDataOverflow
        strokeWidth={minY < 0 ? 0 : 1}
        stroke="var(--color-text-3)"
      />

      {minY < 0 && <ReferenceLine y={0} stroke="var(--color-text-3)" strokeWidth={1.5} strokeOpacity={0.65} />}
      {minX < 0 && <ReferenceLine x={0} stroke="var(--color-text-3)" strokeWidth={1.5} strokeOpacity={0.65} />}

      <Line
        strokeWidth={2}
        data={data}
        dot={false}
        activeDot={{
          stroke: 'var(--color-surface-base)',
        }}
        type="monotone"
        dataKey="y"
        stroke="var(--color-solid-1)"
        tooltipType="none"
      />
      <RechartsDevtools />
    </LineChart>
  );
}
