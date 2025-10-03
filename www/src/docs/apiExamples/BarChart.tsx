import { BarChart, Legend, XAxis, YAxis, CartesianGrid, Tooltip, Bar } from 'recharts';
import { ApiExample, ApiExampleDemo } from '../api/types.ts';

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
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
  },
];

export const BarChartExample: ApiExampleDemo = ({ isAnimationActive }) => (
  <BarChart style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }} responsive data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis width="auto" />
    <Tooltip />
    <Legend />
    <Bar dataKey="pv" fill="#8884d8" isAnimationActive={isAnimationActive} />
    <Bar dataKey="uv" fill="#82ca9d" isAnimationActive={isAnimationActive} />
  </BarChart>
);

const exampleCode = `
<BarChart
    style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
    responsive data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
    <YAxis width="auto" />
  <Tooltip />
  <Legend />
  <Bar dataKey="pv" fill="#8884d8" />
  <Bar dataKey="uv" fill="#82ca9d" />
</BarChart>
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

export const BarChartRangeExample: ApiExampleDemo = ({ isAnimationActive }) => (
  <BarChart
    style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
    responsive
    data={rangeData}
    margin={{
      top: 20,
      right: 20,
      bottom: 20,
      left: 20,
    }}
  >
    <XAxis dataKey="day" />
    <YAxis width="auto" />
    <Tooltip />
    <Bar dataKey="temperature" fill="#8884d8" isAnimationActive={isAnimationActive} />
  </BarChart>
);

const rangeExampleCode = `
<BarChart
  style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
  responsive
  data={rangeData}
  margin={{top: 20, right: 20, bottom: 20, left: 20}}
>
  <XAxis dataKey="day" />
  <YAxis width="auto" />
  <Tooltip />
  <Bar dataKey="temperature" fill="#8884d8" />
</BarChart>
`;

export const barChartApiExamples: ReadonlyArray<ApiExample> = [
  {
    demo: BarChartExample,
    code: exampleCode,
    dataCode: `const data = ${JSON.stringify(data, null, 2)}`,
  },
  {
    demo: BarChartRangeExample,
    code: rangeExampleCode,
    dataCode: `const data = ${JSON.stringify(rangeData, null, 2)}`,
  },
];
