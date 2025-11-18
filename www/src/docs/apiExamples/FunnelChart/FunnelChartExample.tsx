import { FunnelChart, Funnel, Tooltip, LabelList } from 'recharts';

// #region Sample data
const data = [
  { value: 100, name: 'Impression', fill: '#8884d8' },
  { value: 80, name: 'Click', fill: '#83a6ed' },
  { value: 50, name: 'Visit', fill: '#8dd1e1' },
  { value: 40, name: 'Consult', fill: '#82ca9d' },
  { value: 26, name: 'Order', fill: '#a4de6c' },
];

// #endregion
export const FunnelChartExample = ({ isAnimationActive = true }: { isAnimationActive?: boolean }) => (
  <FunnelChart
    style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
    responsive
    margin={{
      right: 30,
    }}
  >
    <Tooltip />
    <Funnel dataKey="value" data={data} isAnimationActive={isAnimationActive}>
      <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
    </Funnel>
  </FunnelChart>
);

export default FunnelChartExample;
