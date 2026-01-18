import { BarChart, Bar, Rectangle, BarShapeProps } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 500 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];
// #endregion

const colors = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c', 'url(#pattern-checkers)'];

const MyCustomRectangle = (props: BarShapeProps) => {
  return <Rectangle {...props} fill="none" stroke={colors[props.index]} strokeWidth={props.index === 2 ? 4 : 1} />;
};

const CellBarExample = ({ isAnimationActive = true }: { isAnimationActive?: boolean }) => (
  <BarChart style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }} responsive data={data}>
    <Bar dataKey="value" isAnimationActive={isAnimationActive} shape={MyCustomRectangle} />
    <RechartsDevtools />
  </BarChart>
);

export default CellBarExample;
