import { Radar, RadarChart, PolarGrid } from 'recharts';

// #region Sample data
const data = [
  { subject: 'Math', A: 120 },
  { subject: 'Chinese', A: 98 },
  { subject: 'English', A: 86 },
  { subject: 'Geography', A: 99 },
  { subject: 'Physics', A: 85 },
  { subject: 'History', A: 65 },
];

// #endregion
const RadarChartNavExample = () => {
  return (
    <RadarChart responsive outerRadius="120%" data={data} style={{ aspectRatio: 1 }}>
      <PolarGrid />
      <Radar name="Mike" dataKey="A" />
    </RadarChart>
  );
};

export default RadarChartNavExample;
