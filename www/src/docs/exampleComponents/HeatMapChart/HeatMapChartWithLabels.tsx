import { CartesianGrid, Cell, HeatMap, HeatMapChart, Tooltip, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  { team: 'Platform', sprint: 'Sprint 21', score: 6, fill: 'var(--color-chart-5)' },
  { team: 'Platform', sprint: 'Sprint 22', score: 9, fill: 'var(--color-chart-4)' },
  { team: 'Platform', sprint: 'Sprint 23', score: 13, fill: 'var(--color-chart-2)' },
  { team: 'Design', sprint: 'Sprint 21', score: 8, fill: 'var(--color-chart-4)' },
  { team: 'Design', sprint: 'Sprint 22', score: 12, fill: 'var(--color-chart-3)' },
  { team: 'Design', sprint: 'Sprint 23', score: 15, fill: 'var(--color-chart-1)' },
  { team: 'Data', sprint: 'Sprint 21', score: 5, fill: 'var(--color-chart-5)' },
  { team: 'Data', sprint: 'Sprint 22', score: 11, fill: 'var(--color-chart-3)' },
  { team: 'Data', sprint: 'Sprint 23', score: 14, fill: 'var(--color-chart-2)' },
];
// #endregion

const HeatMapChartWithLabels = () => {
  return (
    <HeatMapChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.4 }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 0,
        bottom: 5,
        left: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-3)" />
      <XAxis type="category" dataKey="sprint" stroke="var(--color-text-3)" />
      <YAxis type="category" dataKey="team" width={90} stroke="var(--color-text-3)" />
      <Tooltip cursor={false} />
      <HeatMap
        dataKey="score"
        name="Velocity"
        cellGap={{ x: 8, y: 10 }}
        cellSize={{ width: 72, height: 44 }}
        radius={10}
        label={{ position: 'center', fill: 'var(--color-surface-base)', fontSize: 12 }}
        unit=" pts"
        isAnimationActive={false}
      >
        {data.map(entry => (
          <Cell key={`${entry.team}-${entry.sprint}`} fill={entry.fill} />
        ))}
      </HeatMap>
      <RechartsDevtools />
    </HeatMapChart>
  );
};

export default HeatMapChartWithLabels;
