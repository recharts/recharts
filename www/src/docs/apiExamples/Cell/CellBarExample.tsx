import { Cell, BarChart, Bar } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 500 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];
const colors = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c', 'url(#pattern-checkers)'];

const CellBarExample = ({ isAnimationActive = true }: { isAnimationActive?: boolean }) => (
  <BarChart style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }} responsive data={data}>
    <Bar dataKey="value" isAnimationActive={isAnimationActive}>
      {data.map((_entry, index) => (
        <Cell key={`cell-${index}`} fill="none" stroke={colors[index]} strokeWidth={index === 2 ? 4 : 1} />
      ))}
    </Bar>
  </BarChart>
);

export default CellBarExample;
