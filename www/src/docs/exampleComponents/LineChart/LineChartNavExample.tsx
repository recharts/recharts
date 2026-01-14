import { Line, LineChart } from 'recharts';

const LineChartNavExample = () => {
  return (
    <LineChart style={{ aspectRatio: 2 * 1.618 }} responsive data={[{ val: 1 }, { val: 3 }, { val: 2 }, { val: 4 }]}>
      <Line
        type="monotone"
        dataKey="val"
        stroke="var(--color-chart-1)"
        strokeWidth={2}
        dot={false}
        activeDot={{ stroke: 'var(--color-surface-base)' }}
      />
    </LineChart>
  );
};

export default LineChartNavExample;
