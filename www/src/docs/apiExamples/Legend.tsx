import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line } from 'recharts';
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
  <LineChart
    style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
    responsive
    data={data}
    margin={{
      top: 5,
      right: 0,
      left: 0,
      bottom: 5,
    }}
  >
    <XAxis dataKey="name" />
    <YAxis width="auto" />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Legend verticalAlign="top" height={36} />
    <Line name="pv of pages" type="monotone" dataKey="pv" stroke="#8884d8" isAnimationActive={isAnimationActive} />
    <Line name="uv of pages" type="monotone" dataKey="uv" stroke="#82ca9d" isAnimationActive={isAnimationActive} />
  </LineChart>
);

const exampleCode = `
<LineChart
  style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
  responsive data={data}
  margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
>
  <XAxis dataKey="name" />
  <YAxis width="auto" />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Legend verticalAlign="top" height={36}/>
  <Line name="pv of pages" type="monotone" dataKey="pv" stroke="#8884d8" />
  <Line name="uv of pages" type="monotone" dataKey="uv" stroke="#82ca9d" />
</LineChart>
`;

export const legendApiExamples: ReadonlyArray<ApiExample> = [
  {
    demo: example,
    code: exampleCode,
    dataCode: `const data = ${JSON.stringify(data, null, 2)}`,
  },
];
