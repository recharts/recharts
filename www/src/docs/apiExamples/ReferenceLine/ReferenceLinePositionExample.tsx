import { ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar } from 'recharts';

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
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <ReferenceLine x="Page B" label={{ value: 'position: start', fill: 'black' }} stroke="black" position="start" />
    <ReferenceLine x="Page B" label={{ value: 'position: middle', fill: 'black' }} stroke="black" position="middle" />
    <ReferenceLine x="Page B" label={{ value: 'position: end', fill: 'black' }} stroke="black" position="end" />
    <Bar dataKey="pv" fill="#8884d8" fillOpacity={0.3} isAnimationActive={isAnimationActive} />
  </BarChart>
);

export default ReferenceLinePositionExample;
