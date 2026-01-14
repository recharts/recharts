import { ComposedChart, Line, Bar } from 'recharts';

const ComposedChartNavExample = () => {
  return (
    <ComposedChart
      style={{ aspectRatio: 2 * 1.618 }}
      responsive
      data={[
        { val: 1, val2: 2 },
        { val: 3, val2: 1 },
        { val: 2, val2: 4 },
        { val: 4, val2: 3 },
      ]}
    >
      <Line
        type="monotone"
        dataKey="val"
        stroke="var(--color-chart-1)"
        strokeWidth={2}
        dot={false}
        activeDot={{ stroke: 'var(--color-surface-base)' }}
      />
      <Bar dataKey="val2" fill="var(--color-chart-2)" />
    </ComposedChart>
  );
};

export default ComposedChartNavExample;
