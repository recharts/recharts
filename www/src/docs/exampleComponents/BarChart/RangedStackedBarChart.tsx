import { BarChart, XAxis, YAxis, Tooltip, Bar, BarStack } from 'recharts';

// #region Sample data
const rangedStackedBarData = [
  { name: 'A', value1: [100, 200], value2: [200, 250], value3: [250, 300] },
  { name: 'B', value1: [120, 180], value2: [130, 230], value3: [170, 270] },
  { name: 'C', value1: [90, 160], value2: [210, 310], value3: [340, 440] },
  { name: 'D', value1: [80, 140], value2: [140, 200], value3: [200, 220] },
];
// #endregion

const RangedStackedBarChart = ({ isAnimationActive = true }: { isAnimationActive?: boolean }) => (
  <BarChart
    style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
    responsive
    data={rangedStackedBarData}
    id="recharts-ranged-stacked-bar-chart"
    margin={{
      top: 20,
      right: 20,
      bottom: 20,
      left: 20,
    }}
  >
    <XAxis dataKey="name" />
    <YAxis width="auto" />
    <Tooltip />
    <BarStack radius={25}>
      <Bar dataKey="value1" maxBarSize={50} fill="#8884d8" isAnimationActive={isAnimationActive} />
      <Bar dataKey="value2" maxBarSize={50} fill="#82ca9d" isAnimationActive={isAnimationActive} />
      <Bar dataKey="value3" maxBarSize={50} fill="#ffc658" isAnimationActive={isAnimationActive} />
    </BarStack>
  </BarChart>
);

export default RangedStackedBarChart;
