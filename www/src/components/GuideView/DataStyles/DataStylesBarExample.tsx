import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'Mon', sales: 120 },
  { name: 'Tue', sales: 180, fill: '#e11d48' }, // this bar is red
  { name: 'Wed', sales: 90, strokeDasharray: '4 2', stroke: '#e11d48', fill: 'none' },
];

const chartStyle = { width: '100%', maxWidth: '500px', aspectRatio: 1.618 };

export default function DataStylesBarExample({ isAnimationActive = true }: { isAnimationActive?: boolean }) {
  return (
    <BarChart style={chartStyle} responsive data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="sales" fill="#8884d8" isAnimationActive={isAnimationActive} />
    </BarChart>
  );
}
