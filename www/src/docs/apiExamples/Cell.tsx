import { PieChart, Pie, Cell, BarChart, Bar } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 500 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];
const colors = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c', 'url(#pattern-checkers)'];

const example = () => (
  <>
    <svg>
      <defs>
        <pattern id="pattern-checkers" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
          <rect className="checker" x="0" width="5" height="5" y="0" />
          <rect className="checker" x="10" width="5" height="5" y="10" />
        </pattern>
      </defs>
    </svg>
    <PieChart width={730} height={250}>
      <Pie data={data} cx="50%" cy="50%" outerRadius={80} label>
        {data.map((_entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index]} />
        ))}
      </Pie>
    </PieChart>
  </>
);

const barExample = () => (
  <BarChart width={730} height={250} data={data}>
    <Bar dataKey="value">
      {data.map((_entry, index) => (
        <Cell key={`cell-${index}`} fill="none" stroke={colors[index]} strokeWidth={index === 2 ? 4 : 1} />
      ))}
    </Bar>
  </BarChart>
);

const exampleCode = `
<PieChart width={730} height={250}>
  <Pie data={data} cx="50%" cy="50%" outerRadius={80} label>
    {
      data.map((entry, index) => (
        <Cell key={\`cell-\${index}\`} fill={colors[index]}/>
      ))
    }
  </Pie>
</PieChart>
`;

const barExampleCode = `
<BarChart width={730} height={250} data={data}>
  <Bar dataKey="value">
    {
      data.map((entry, index) => (
        <Cell key={\`cell-$\{index}\`} stroke={colors[index]}  strokeWidth={index === 2 ? 4 : 1}/>
      ))
    }
  </Bar>
</BarChart>
`;

export default [
  {
    demo: example,
    code: exampleCode,
    dataCode: `const data = ${JSON.stringify(data, null, 2)}`,
  },
  {
    demo: barExample,
    code: barExampleCode,
    dataCode: `const data = ${JSON.stringify(data, null, 2)}`,
  },
];
