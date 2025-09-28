import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts';
import { ApiExample, ApiExampleDemo } from '../api/types.ts';

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

const example: ApiExampleDemo = ({ isAnimationActive }) => (
  <AreaChart
    style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
    responsive
    data={data}
    margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
  >
    <defs>
      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
      </linearGradient>
      <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
      </linearGradient>
    </defs>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis width="auto" />
    <Tooltip />
    <Area
      type="monotone"
      dataKey="uv"
      stroke="#8884d8"
      fillOpacity={1}
      fill="url(#colorUv)"
      isAnimationActive={isAnimationActive}
    />
    <Area
      type="monotone"
      dataKey="pv"
      stroke="#82ca9d"
      fillOpacity={1}
      fill="url(#colorPv)"
      isAnimationActive={isAnimationActive}
    />
  </AreaChart>
);

const exampleCode = `
<AreaChart
  style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
  responsive
  data={data}
  margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis width='auto' />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
`;

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

const rangeExample: ApiExampleDemo = ({ isAnimationActive }) => (
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

const rangeExampleCode = `
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
  <YAxis width='auto' />
  <Area dataKey="temperature" stroke="#8884d8" fill="#8884d8" />
  <Tooltip />
</AreaChart>
`;

export const areaChartApiExamples: ReadonlyArray<ApiExample> = [
  {
    demo: example,
    code: exampleCode,
    dataCode: `const data = ${JSON.stringify(data, null, 2)}`,
  },
  {
    demo: rangeExample,
    dataCode: `const rangeData = ${JSON.stringify(rangeData, null, 2)}`,
    code: rangeExampleCode,
  },
];
