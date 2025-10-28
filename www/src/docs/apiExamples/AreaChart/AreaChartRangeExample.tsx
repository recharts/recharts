import { Area, AreaChart, Tooltip, XAxis, YAxis } from 'recharts';

const rangeData = [
  { day: '05-01', temperature: [-1, 10] },
  { day: '05-02', temperature: [2, 15] },
  { day: '05-03', temperature: [3, 12] },
  { day: '05-04', temperature: [4, 12] },
  { day: '05-05', temperature: [12, 16] },
  { day: '05-06', temperature: [5, 16] },
  { day: '05-07', temperature: [3, 12] },
  { day: '05-08', temperature: [0, 8] },
  { day: '05-09', temperature: [-3, 5] },
];

const AreaChartRangeExample = ({ isAnimationActive = true }) => (
  <AreaChart
    style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
    responsive
    data={rangeData}
    margin={{
      top: 20,
      right: 0,
      bottom: 20,
      left: 0,
    }}
  >
    <XAxis dataKey="day" />
    <YAxis width="auto" />
    <Area dataKey="temperature" stroke="#8884d8" fill="#8884d8" isAnimationActive={isAnimationActive} />
    <Tooltip />
  </AreaChart>
);

export default AreaChartRangeExample;
