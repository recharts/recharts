import { ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const smallData = [
  {
    name: 'Page A',
    pv: 2400,
  },
  {
    name: 'Page B',
    pv: 1398,
  },
  {
    name: 'Page C',
    pv: 9800,
  },
];

// #endregion
export const ReferenceLinePositionExample = ({ isAnimationActive = true }: { isAnimationActive?: boolean }) => (
  <BarChart
    style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
    responsive
    data={smallData}
  >
    <XAxis dataKey="name" />
    <YAxis width="auto" />
    <CartesianGrid />
    <Tooltip />
    <ReferenceLine x="Page B" label={{ value: 'position: start' }} position="start" />
    <ReferenceLine x="Page B" label={{ value: 'position: middle' }} position="middle" />
    <ReferenceLine x="Page B" label={{ value: 'position: end' }} position="end" />
    <Bar dataKey="pv" fillOpacity={0.3} isAnimationActive={isAnimationActive} />
    <RechartsDevtools />
  </BarChart>
);

export default ReferenceLinePositionExample;
