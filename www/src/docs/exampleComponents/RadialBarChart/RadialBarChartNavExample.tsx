import { RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';

// #region Sample data
const data = [
  { name: '18-24', uv: 31.47, pv: 2400, fill: 'var(--color-chart-1)' },
  { name: '30-34', uv: 15.69, pv: 1398, fill: 'var(--color-chart-4)' },
  { name: '35-39', uv: 38.22, pv: 9800, fill: 'var(--color-chart-2)' },
];

// #endregion
const RadialBarChartNavExample = () => {
  return (
    <RadialBarChart responsive innerRadius="20%" outerRadius="130%" data={data} style={{ aspectRatio: 1 }}>
      <RadialBar
        dataKey="uv"
        background={{
          fill: 'var(--color-border-3)',
        }}
      />
      <PolarAngleAxis domain={[0, 44]} type="number" dataKey="uv" />
    </RadialBarChart>
  );
};

export default RadialBarChartNavExample;
