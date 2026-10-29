import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart, Tooltip } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
type WindRoseDatum = {
  direction: string;
  angle: number;
  low: number;
  medium: number;
  high: number;
};

const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

const data: Array<WindRoseDatum> = [
  { direction: 'N', angle: 0, low: 12, medium: 8, high: 3 },
  { direction: 'NE', angle: 45, low: 9, medium: 11, high: 4 },
  { direction: 'E', angle: 90, low: 15, medium: 9, high: 2 },
  { direction: 'SE', angle: 135, low: 7, medium: 6, high: 1 },
  { direction: 'S', angle: 180, low: 18, medium: 12, high: 5 },
  { direction: 'SW', angle: 225, low: 11, medium: 7, high: 2 },
  { direction: 'W', angle: 270, low: 14, medium: 10, high: 3 },
  { direction: 'NW', angle: 315, low: 8, medium: 5, high: 1 },
];

// #endregion
const maxTotal = Math.max(...data.map(entry => entry.low + entry.medium + entry.high));
const radiusDomain = [0, maxTotal];
const angleDomain = [0, 360];
const formatAngle = (angle: number) => directions[angle / 45];

const chartStyle = {
  width: '100%',
  maxWidth: '500px',
  maxHeight: '80vh',
  aspectRatio: 1,
};

export default function WindRoseChart({ isAnimationActive = true }: { isAnimationActive?: boolean }) {
  return (
    <RadialBarChart
      data={data}
      style={chartStyle}
      responsive
      layout="centric"
      cx="50%"
      cy="50%"
      innerRadius="10%"
      outerRadius="80%"
      startAngle={90}
      endAngle={-270}
    >
      <PolarGrid gridType="circle" />
      <PolarAngleAxis
        type="number"
        dataKey="angle"
        domain={angleDomain}
        tickCount={8}
        niceTicks="none"
        tickFormatter={formatAngle}
        axisLine={false}
        tickLine={false}
      />
      <PolarRadiusAxis domain={radiusDomain} tick={false} axisLine={false} />
      <RadialBar dataKey="low" stackId="wind" name="0-10 km/h" fill="#82ca9d" isAnimationActive={isAnimationActive} />
      <RadialBar
        dataKey="medium"
        stackId="wind"
        name="10-20 km/h"
        fill="#ffc658"
        isAnimationActive={isAnimationActive}
      />
      <RadialBar dataKey="high" stackId="wind" name="20+ km/h" fill="#ff8042" isAnimationActive={isAnimationActive} />
      <Legend iconSize={10} />
      <Tooltip />
      <RechartsDevtools />
    </RadialBarChart>
  );
}
