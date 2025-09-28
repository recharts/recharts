import { ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area, Bar, Line } from 'recharts';
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
  <ComposedChart
    style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
    responsive
    data={data}
  >
    <CartesianGrid stroke="#f5f5f5" />
    <XAxis dataKey="name" />
    <YAxis width="auto" />
    <Legend />
    <Tooltip />
    <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" isAnimationActive={isAnimationActive} />
    <Bar dataKey="pv" barSize={20} fill="#413ea0" isAnimationActive={isAnimationActive} />
    <Line type="monotone" dataKey="uv" stroke="#ff7300" isAnimationActive={isAnimationActive} />
  </ComposedChart>
);

const exampleCode = `
<ComposedChart
  style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
  responsive
  data={data}
>
  <XAxis dataKey="name" />
  <YAxis width="auto" />
  <Tooltip />
  <Legend />
  <CartesianGrid stroke="#f5f5f5" />
  <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
  <Bar dataKey="pv" barSize={20} fill="#413ea0" />
  <Line type="monotone" dataKey="uv" stroke="#ff7300" />
</ComposedChart>
`;

export const composedChartApiExamples: ReadonlyArray<ApiExample> = [
  {
    demo: example,
    code: exampleCode,
    dataCode: `const data = ${JSON.stringify(data, null, 2)}`,
  },
];
