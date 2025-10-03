import { PieChart, Pie } from 'recharts';
import { ApiExample, ApiExampleDemo } from '../api/types.ts';

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];

const data02 = [
  { name: 'Group A', value: 2400 },
  { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 },
  { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 },
  { name: 'Group F', value: 4800 },
];

export const PieChartExample: ApiExampleDemo = ({ isAnimationActive }) => (
  <PieChart
    style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }}
    responsive
    margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
  >
    <Pie
      data={data01}
      dataKey="value"
      nameKey="name"
      cx="50%"
      cy="50%"
      outerRadius="50%"
      fill="#8884d8"
      isAnimationActive={isAnimationActive}
    />
    <Pie
      data={data02}
      dataKey="value"
      nameKey="name"
      cx="50%"
      cy="50%"
      innerRadius="60%"
      outerRadius="80%"
      fill="#82ca9d"
      label
      isAnimationActive={isAnimationActive}
    />
  </PieChart>
);

const exampleCode = `
<PieChart
  style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }}
  responsive
  margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
>
  <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius="50%" fill="#8884d8" />
  <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius="60%" outerRadius="80%" fill="#82ca9d" label />
</PieChart>
`;

export const pieChartApiExamples: ReadonlyArray<ApiExample> = [
  {
    demo: PieChartExample,
    code: exampleCode,
    dataCode: `
    const data01 = ${JSON.stringify(data01, null, 2)};
const data02 = ${JSON.stringify(data02, null, 2)};
    `,
  },
];
