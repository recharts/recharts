import { Radar, RadarChart, PolarGrid } from 'recharts';

// #region Sample data
const data = [
  { subject: 'Math', A: 120, B: 110, fullMark: 150 },
  { subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
  { subject: 'English', A: 86, B: 130, fullMark: 150 },
  { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
  { subject: 'Physics', A: 85, B: 90, fullMark: 150 },
  { subject: 'History', A: 65, B: 85, fullMark: 150 },
];

// #endregion
const RadarChartNavExample = () => {
  return (
    <RadarChart responsive outerRadius="120%" data={data} style={{ aspectRatio: 1 }}>
      <PolarGrid stroke="var(--color-border-3)" />
      <Radar name="Mike" dataKey="A" stroke="var(--color-chart-1)" fill="var(--color-chart-1)" fillOpacity={0.6} />
    </RadarChart>
  );
};

export default RadarChartNavExample;
