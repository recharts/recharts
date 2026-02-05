import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, useChartHeight, useYAxisScale } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

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
    uv: -1000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 500,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: -2000,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: -250,
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

const Gradient = () => {
  const scale = useYAxisScale();
  const height = useChartHeight();
  const scaledZero = scale?.(0);
  if (scaledZero == null || height == null) {
    return null;
  }
  const ratio = scaledZero / height;
  return (
    <defs>
      <linearGradient id="splitColor" x1="0" x2="0" y1="0" y2={height} gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="green" stopOpacity={1} />
        <stop offset={`${ratio}`} stopColor="green" stopOpacity={0.1} />
        <stop offset={`${ratio}`} stopColor="red" stopOpacity={0.1} />
        <stop offset="1" stopColor="red" stopOpacity={1} />
      </linearGradient>
    </defs>
  );
};

const AreaChartFillByValue = () => {
  return (
    <AreaChart
      style={{
        width: '100%',
        maxWidth: '700px',
        maxHeight: '70vh',
        aspectRatio: 1.618,
      }}
      responsive
      data={data}
      margin={{
        top: 10,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Gradient />
      <Area type="monotone" dataKey="uv" stroke="#000" fill="url(#splitColor)" />
      <RechartsDevtools />
    </AreaChart>
  );
};

export default AreaChartFillByValue;
