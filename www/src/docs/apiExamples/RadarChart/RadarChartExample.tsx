import { RadarChart, Radar, PolarAngleAxis, PolarRadiusAxis, Legend, PolarGrid } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

// #endregion
export const RadarChartExample = ({ isAnimationActive = true }: { isAnimationActive?: boolean }) => (
  <RadarChart style={{ width: '100%', maxWidth: '500px', maxHeight: '70vh', aspectRatio: 1 }} responsive data={data}>
    <PolarGrid stroke="var(--color-border-3)" />
    <PolarAngleAxis dataKey="subject" stroke="var(--color-text-3)" />
    <PolarRadiusAxis angle={30} domain={[0, 150]} stroke="var(--color-text-3)" />
    <Radar
      name="Mike"
      dataKey="A"
      stroke="var(--color-chart-1)"
      fill="var(--color-chart-1)"
      fillOpacity={0.6}
      isAnimationActive={isAnimationActive}
      activeDot={{
        stroke: 'var(--color-surface-base)',
      }}
    />
    <Radar
      name="Lily"
      dataKey="B"
      stroke="var(--color-chart-2)"
      fill="var(--color-chart-2)"
      fillOpacity={0.6}
      isAnimationActive={isAnimationActive}
      activeDot={{ stroke: 'var(--color-surface-base)' }}
    />
    <Legend />
    <RechartsDevtools />
  </RadarChart>
);
export default RadarChartExample;
