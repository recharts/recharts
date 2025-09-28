import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Label, LabelList } from 'recharts';
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
];

const chartExample: ApiExampleDemo = ({ isAnimationActive }) => (
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
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name">
      <Label value="Pages of my website" offset={0} position="insideBottom" />
    </XAxis>
    <YAxis
      width="auto"
      label={{
        value: 'pv of page',
        angle: -90,
        position: 'insideLeft',
        textAnchor: 'middle',
      }}
    />
    <Bar dataKey="pv" fill="#8884d8" isAnimationActive={isAnimationActive}>
      <LabelList dataKey="name" position="insideTop" angle={45} />
    </Bar>
    <Bar dataKey="uv" fill="#82ca9d" isAnimationActive={isAnimationActive}>
      <LabelList dataKey="uv" position="top" />
    </Bar>
  </BarChart>
);

export const labelListApiExamples: ReadonlyArray<ApiExample> = [
  {
    demo: chartExample,
    code: `
<BarChart
  style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
  responsive
  data={data}
  margin={{ top: 15, right: 0, left: 0, bottom: 5 }}
>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name">
    <Label value="Pages of my website" offset={0} position="insideBottom" />
  </XAxis>
  <YAxis
    width="auto"
    label={{ value: 'pv of page', angle: -90, position: 'insideLeft', textAnchor: 'middle' }}
  />
  <Bar dataKey="pv" fill="#8884d8">
    <LabelList dataKey="name" position="insideTop" angle="45"  />
  </Bar>
  <Bar dataKey="uv" fill="#82ca9d">
    <LabelList dataKey="uv" position="top" />
  </Bar>
</BarChart>
`,
    dataCode: `const data = ${JSON.stringify(data, null, 2)}`,
  },
];
