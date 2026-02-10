import { Pie, PieChart, PieProps, PieSectorDataItem, Tooltip } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const chartData = [
  { name: 'A', value: 80, fill: '#ff0000' },
  { name: 'B', value: 45, fill: '#00ff00' },
  { name: 'C', value: 25, fill: '#0000ff' },
];

// #endregion
const NEEDLE_BASE_RADIUS_PX = 5;
const NEEDLE_COLOR = '#d0d000';
const Needle = ({ cx, cy, midAngle, innerRadius, outerRadius }: PieSectorDataItem) => {
  const needleBaseCenterX = cx;
  const needleBaseCenterY = cy;
  const needleLength = innerRadius + (outerRadius - innerRadius) / 2;

  return (
    <g>
      <circle
        cx={needleBaseCenterX}
        cy={needleBaseCenterY}
        r={NEEDLE_BASE_RADIUS_PX}
        fill={NEEDLE_COLOR}
        stroke="none"
      />
      <path
        d={`M${needleBaseCenterX},${needleBaseCenterY}l${needleLength},0`}
        strokeWidth={2}
        stroke={NEEDLE_COLOR}
        fill={NEEDLE_COLOR}
        style={{
          transform: `rotate(-${midAngle}deg)`,
          transformOrigin: `${needleBaseCenterX}px ${needleBaseCenterY}px`,
        }}
      />
    </g>
  );
};

const HalfPie = (props: PieProps) => (
  <Pie
    {...props}
    nameKey="name"
    stroke="none"
    dataKey="value"
    startAngle={180}
    endAngle={0}
    data={chartData}
    cx={100}
    cy={100}
    innerRadius={50}
    outerRadius={100}
  />
);

export default function PieChartWithNeedle({ isAnimationActive = true }: { isAnimationActive?: boolean }) {
  return (
    <PieChart width={210} height={120} style={{ margin: '0 auto' }}>
      <HalfPie isAnimationActive={isAnimationActive} />
      <HalfPie isAnimationActive={isAnimationActive} activeShape={Needle} />
      <Tooltip defaultIndex={0} content={() => null} active />
      <RechartsDevtools />
    </PieChart>
  );
}
