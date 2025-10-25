import { Pie, PieChart } from 'recharts';

const RADIAN = Math.PI / 180;
// #region Sample data
const chartData = [
  { name: 'A', value: 80, fill: '#ff0000' },
  { name: 'B', value: 45, fill: '#00ff00' },
  { name: 'C', value: 25, fill: '#0000ff' },
];

// #endregion
type Needle = {
  value: number;
  data: { name: string; value: number; fill: string }[];
  cx: number;
  cy: number;
  iR: number;
  oR: number;
  color: string;
};

const needle = ({ value, data, cx, cy, iR, oR, color }: Needle) => {
  const total = data.reduce((sum, entry) => sum + entry.value, 0);
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle key="needle-circle" cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path
      key="needle-path"
      d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
      stroke="#none"
      fill={color}
    />,
  ];
};

export default function PieChartWithNeedle({ isAnimationActive = true }: { isAnimationActive?: boolean }) {
  const cx = 100;
  const cy = 100;
  const iR = 50;
  const oR = 100;
  const value = 50;

  return (
    <PieChart width={210} height={120} style={{ margin: '0 auto' }}>
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={chartData}
        cx={cx}
        cy={cy}
        innerRadius={iR}
        outerRadius={oR}
        fill="#8884d8"
        stroke="none"
        isAnimationActive={isAnimationActive}
      />
      {needle({ value, data: chartData, cx, cy, iR, oR, color: '#d0d000' })}
    </PieChart>
  );
}
