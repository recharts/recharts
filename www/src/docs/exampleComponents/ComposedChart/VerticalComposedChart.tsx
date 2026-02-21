import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  {
    name: 'Page A',
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: 'Page B',
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: 'Page C',
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: 'Page D',
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: 'Page E',
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: 'Page F',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
];

// #endregion
const VerticalComposedChart = () => {
  return (
    <ComposedChart
      layout="vertical"
      style={{ width: '100%', maxWidth: '300px', maxHeight: '70vh', aspectRatio: 1 / 1.618 }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 0,
        bottom: 0,
        left: 0,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis type="number" niceTicks />
      <YAxis dataKey="name" type="category" scale="band" width="auto" />
      <Tooltip />
      <Legend />
      <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="pv" barSize={20} fill="#413ea0" />
      <Line dataKey="uv" stroke="#ff7300" />
      <RechartsDevtools />
    </ComposedChart>
  );
};

export default VerticalComposedChart;
