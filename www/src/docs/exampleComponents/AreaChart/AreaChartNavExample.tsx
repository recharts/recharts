import { Area, AreaChart } from 'recharts';

const AreaChartNavExample = () => {
  return (
    <AreaChart style={{ aspectRatio: 2 * 1.618 }} responsive data={[{ val: 1 }, { val: 3 }, { val: 2 }, { val: 4 }]}>
      <Area
        type="monotone"
        dataKey="val"
        stroke="var(--color-chart-1)"
        fill="var(--color-chart-1)"
        strokeWidth={2}
        dot={false}
        activeDot={{
          stroke: 'var(--color-surface-base)',
        }}
      />
    </AreaChart>
  );
};

export default AreaChartNavExample;
