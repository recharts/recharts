import { Cell, Pie, PieChart, PieLabelRenderProps } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const RADIAN = Math.PI / 180;
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: PieLabelRenderProps) => {
  // @ts-expect-error type unknown https://github.com/recharts/recharts/issues/6380
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  // @ts-expect-error type unknown https://github.com/recharts/recharts/issues/6380
  const x = cx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  // @ts-expect-error type unknown https://github.com/recharts/recharts/issues/6380
  const y = cy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  return (
    // @ts-expect-error type unknown https://github.com/recharts/recharts/issues/6380
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {/* @ts-expect-error type unknown https://github.com/recharts/recharts/issues/6380 */}
      {`${((percent ?? 1) * 100).toFixed(0)}%`}
    </text>
  );
};

export default function PieChartWithCustomizedLabel({ isAnimationActive = true }: { isAnimationActive?: boolean }) {
  return (
    <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        labelLine={false}
        label={renderCustomizedLabel}
        fill="#8884d8"
        dataKey="value"
        isAnimationActive={isAnimationActive}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
