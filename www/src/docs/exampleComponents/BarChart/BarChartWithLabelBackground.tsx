import { Bar, BarChart, CartesianGrid, LabelList, TextBackgroundProps, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
  },
];

// #endregion
const pillBackground: TextBackgroundProps = {
  rx: 10,
  padding: { x: 8, y: 3 },
  fillOpacity: 0.9,
};

const BarChartWithLabelBackground = ({ isAnimationActive = true }: { isAnimationActive?: boolean }) => (
  <BarChart
    style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
    responsive
    data={data}
    margin={{
      top: 15,
      right: 0,
      left: 0,
      bottom: 5,
    }}
  >
    <CartesianGrid />
    <XAxis dataKey="name" />
    <YAxis width="auto" />
    <Bar dataKey="pv" stackId="a" isAnimationActive={isAnimationActive}>
      {/* `background` with default styles: a rounded rectangle in the chart background color */}
      <LabelList dataKey="pv" position="inside" background />
    </Bar>
    <Bar dataKey="uv" stackId="a" isAnimationActive={isAnimationActive}>
      {/* `background` with custom rectangle props */}
      <LabelList dataKey="uv" position="inside" background={pillBackground} />
    </Bar>
    <RechartsDevtools />
  </BarChart>
);

export default BarChartWithLabelBackground;
