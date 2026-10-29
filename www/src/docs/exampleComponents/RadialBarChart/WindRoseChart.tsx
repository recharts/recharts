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

const series = [
  { dataKey: 'low', name: '0-10 km/h', fill: '#82ca9d' },
  { dataKey: 'medium', name: '10-20 km/h', fill: '#ffc658' },
  { dataKey: 'high', name: '20+ km/h', fill: '#ff8042' },
];

function WindRoseLegend() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0 16px', fontSize: 12 }}>
      {series.map(({ name, fill }) => (
        <span key={name} style={{ display: 'inline-flex', alignItems: 'center', gap: 4, color: fill }}>
          <span style={{ width: 10, height: 10, backgroundColor: fill }} />
          {name}
        </span>
      ))}
    </div>
  );
}

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
const formatAngle = (angle: number) => directions[angle / 45] ?? '';
const formatTooltipLabel = (label: unknown) => formatAngle(Number(label));

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
      {series.map(entry => (
        <RadialBar
          key={entry.dataKey}
          dataKey={entry.dataKey}
          stackId="wind"
          name={entry.name}
          fill={entry.fill}
          isAnimationActive={isAnimationActive}
        />
      ))}
      <Legend content={WindRoseLegend} />
      <Tooltip labelFormatter={formatTooltipLabel} />
      <RechartsDevtools />
    </RadialBarChart>
  );
}
