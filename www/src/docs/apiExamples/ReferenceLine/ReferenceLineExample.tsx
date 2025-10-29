import { AreaChart, ReferenceLine, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// #region Sample data
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

// #endregion
const ReferenceLineExample = ({ isAnimationActive = true }: { isAnimationActive?: boolean }) => (
  <AreaChart
    style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
    responsive
    data={data}
    margin={{
      top: 20,
      right: 0,
      left: 0,
      bottom: 0,
    }}
  >
    <XAxis dataKey="name" />
    <YAxis width="auto" />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Area
      type="monotone"
      dataKey="uv"
      stroke="#8884d8"
      fill="#8884d8"
      fillOpacity={0.3}
      isAnimationActive={isAnimationActive}
    />
    <ReferenceLine
      x="Page C"
      stroke="green"
      label={{ value: 'prop `x` creates vertical lines', fill: 'black', position: 'insideTop', offset: 70 }}
    />
    <ReferenceLine
      y={4000}
      label={{ value: 'prop `y` creates horizontal lines', fill: 'black', position: 'insideTopRight' }}
      stroke="red"
      strokeDasharray="3 3"
    />
    <ReferenceLine
      label={{ value: 'prop `segment` connects two arbitrary points', fill: 'black', position: 'middle' }}
      stroke="green"
      strokeDasharray="3 3"
      segment={[
        { x: 'Page D', y: 0 },
        { x: 'Page F', y: 1500 },
      ]}
    />
  </AreaChart>
);

export default ReferenceLineExample;
