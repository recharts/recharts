import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Label, LabelList } from 'recharts';

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

const chartExample = () => (
  <BarChart
    width={730}
    height={250}
    data={data}
    margin={{
      top: 15,
      right: 30,
      left: 20,
      bottom: 5,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name">
      <Label value="Pages of my website" offset={0} position="insideBottom" />
    </XAxis>
    <YAxis
      label={{
        value: 'pv of page',
        angle: -90,
        position: 'insideLeft',
        textAnchor: 'middle',
      }}
    />
    <Bar dataKey="pv" fill="#8884d8">
      <LabelList dataKey="name" position="insideTop" angle={45} />
    </Bar>
    <Bar dataKey="uv" fill="#82ca9d">
      <LabelList dataKey="uv" position="top" />
    </Bar>
  </BarChart>
);

export default [
  {
    demo: chartExample,
    code: `
<BarChart
  width={730}
  height={250}
  data={data}
  margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name">
    <Label value="Pages of my website" offset={0} position="insideBottom" />
  </XAxis>
  <YAxis label={{ value: 'pv of page', angle: -90, position: 'insideLeft', textAnchor: 'middle' }} />
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
