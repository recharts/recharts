import { PieChart, Pie, Cell, BarChart, Bar } from 'recharts';
import { ApiExample, ApiExampleDemo } from '../api/types.ts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 500 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];
const colors = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c', 'url(#pattern-checkers)'];

export const CellPieExample: ApiExampleDemo = ({ isAnimationActive }) => (
  <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '70vh', aspectRatio: 1 }} responsive>
    <defs>
      <pattern id="pattern-checkers" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="5" height="5" y="0" />
        <rect className="checker" x="10" width="5" height="5" y="10" />
      </pattern>
    </defs>
    <Pie data={data} label isAnimationActive={isAnimationActive}>
      {data.map((_entry, index) => (
        <Cell key={`cell-${index}`} fill={colors[index]} />
      ))}
    </Pie>
  </PieChart>
);

const pieExampleCode = `<PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '70vh', aspectRatio: 1 }} responsive>
    <defs>
      <pattern id="pattern-checkers" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="5" height="5" y="0" />
        <rect className="checker" x="10" width="5" height="5" y="10" />
      </pattern>
    </defs>
    <Pie data={data} label>
      {data.map((_entry, index) => (
        <Cell key={\`cell-\${index}\`} fill={colors[index]} />
      ))}
    </Pie>
  </PieChart>
`;

export const CellBarExample: ApiExampleDemo = ({ isAnimationActive }) => (
  <BarChart style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }} responsive data={data}>
    <Bar dataKey="value" isAnimationActive={isAnimationActive}>
      {data.map((_entry, index) => (
        <Cell key={`cell-${index}`} fill="none" stroke={colors[index]} strokeWidth={index === 2 ? 4 : 1} />
      ))}
    </Bar>
  </BarChart>
);

const barExampleCode = `
<BarChart
  style={{ width: '100%', maxWidth: '700px', aspectRatio: 1.618 }}
  responsive
  data={data}
>
  <Bar dataKey="value">
    {
      data.map((entry, index) => (
        <Cell key={\`cell-$\{index}\`} stroke={colors[index]}  strokeWidth={index === 2 ? 4 : 1}/>
      ))
    }
  </Bar>
</BarChart>
`;

export const cellApiExamples: ReadonlyArray<ApiExample> = [
  {
    demo: CellPieExample,
    code: pieExampleCode,
    dataCode: `const data = ${JSON.stringify(data, null, 2)}`,
  },
  {
    demo: CellBarExample,
    code: barExampleCode,
    dataCode: `const data = ${JSON.stringify(data, null, 2)}`,
  },
];
