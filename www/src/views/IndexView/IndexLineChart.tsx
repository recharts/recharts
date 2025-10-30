import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

// #region Sample data
const data = [
  {
    name: 'A',
    uv: 400,
    pv: 240,
    amt: 2400,
  },
  {
    name: 'B',
    uv: 300,
    pv: 456,
    amt: 2400,
  },
  {
    name: 'C',
    uv: 300,
    pv: 139,
    amt: 2400,
  },
  {
    name: 'D',
    uv: 200,
    pv: 980,
    amt: 2400,
  },
  {
    name: 'E',
    uv: 278,
    pv: 390,
    amt: 2400,
  },
  {
    name: 'F',
    uv: 189,
    pv: 480,
    amt: 2400,
  },
];

// #endregion

export default function IndexLineChart() {
  return (
    <LineChart style={{ width: '100%', aspectRatio: 1.618, maxWidth: 800, margin: 'auto' }} responsive data={data}>
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
    </LineChart>
  );
}
