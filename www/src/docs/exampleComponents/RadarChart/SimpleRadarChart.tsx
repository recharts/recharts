import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

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
const SimpleRadarChart = () => {
  return (
    <RadarChart
      style={{ width: '100%', height: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }}
      responsive
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar name="Mike" dataKey="A" />
      <RechartsDevtools />
    </RadarChart>
  );
};

export default SimpleRadarChart;
