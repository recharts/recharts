import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'A', value: 120 },
  { name: 'B', value: 180, fill: 'red' }, // red fill, keeps the #333 outline
  { name: 'C', value: 150, stroke: 'lime' }, // keeps the #8884d8 fill, lime outline
  { name: 'D', value: 90, strokeDasharray: '4 2' }, // dashed outline, component colors
];

const chartStyle = { width: '100%', maxWidth: '500px', aspectRatio: 1.618 };

export default function DataStylesPrecedenceExample({ isAnimationActive = true }: { isAnimationActive?: boolean }) {
  return (
    <BarChart style={chartStyle} responsive data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="value" fill="#8884d8" stroke="#333" strokeWidth={2} isAnimationActive={isAnimationActive} />
    </BarChart>
  );
}
