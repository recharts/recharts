import { Pie, PieChart } from 'recharts';

// #region Sample data
const data = [
  { value: 400, fill: 'var(--color-chart-1)' },
  { value: 300, fill: 'var(--color-chart-2)' },
  { value: 400, fill: 'var(--color-chart-3)' },
];

// #endregion
const PieChartNavExample = ({ isAnimationActive = true }: { isAnimationActive?: boolean }) => {
  return (
    <PieChart style={{ aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        outerRadius="120%"
        stroke="var(--color-surface-base)"
        isAnimationActive={isAnimationActive}
      />
    </PieChart>
  );
};

export default PieChartNavExample;
