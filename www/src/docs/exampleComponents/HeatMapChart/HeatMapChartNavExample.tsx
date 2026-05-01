import { Cell, HeatMap, HeatMapChart, XAxis, YAxis } from 'recharts';

// #region Sample data
const data = [
  { row: 'A', column: 'Mon', value: 8, fill: '#7c3aed' },
  { row: 'A', column: 'Tue', value: 12, fill: '#2563eb' },
  { row: 'A', column: 'Wed', value: 16, fill: '#0891b2' },
  { row: 'B', column: 'Mon', value: 10, fill: '#2563eb' },
  { row: 'B', column: 'Tue', value: 18, fill: '#0891b2' },
  { row: 'B', column: 'Wed', value: 22, fill: '#059669' },
  { row: 'C', column: 'Mon', value: 6, fill: '#7c3aed' },
  { row: 'C', column: 'Tue', value: 14, fill: '#2563eb' },
  { row: 'C', column: 'Wed', value: 20, fill: '#059669' },
];
// #endregion

const HeatMapChartNavExample = () => {
  return (
    <HeatMapChart responsive data={data} style={{ aspectRatio: 1.2 }}>
      <XAxis type="category" dataKey="column" hide />
      <YAxis type="category" dataKey="row" hide />
      <HeatMap dataKey="value" cellGap={6} radius={8} isAnimationActive={false}>
        {data.map(entry => (
          <Cell key={`${entry.row}-${entry.column}`} fill={entry.fill} />
        ))}
      </HeatMap>
    </HeatMapChart>
  );
};

export default HeatMapChartNavExample;
