import { FunnelChart, Funnel, Tooltip, LabelList } from 'recharts';
import { ApiExample, ApiExampleDemo } from '../api/types.ts';

const data = [
  { value: 100, name: 'Impression', fill: '#8884d8' },
  { value: 80, name: 'Click', fill: '#83a6ed' },
  { value: 50, name: 'Visit', fill: '#8dd1e1' },
  { value: 40, name: 'Consult', fill: '#82ca9d' },
  { value: 26, name: 'Order', fill: '#a4de6c' },
];

export const FunnelChartExample: ApiExampleDemo = ({ isAnimationActive }) => (
  <FunnelChart
    style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
    responsive
    margin={{
      right: 30,
    }}
  >
    <Tooltip />
    <Funnel dataKey="value" data={data} isAnimationActive={isAnimationActive}>
      <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
    </Funnel>
  </FunnelChart>
);

const exampleCode = `
<FunnelChart
  style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
  responsive
  margin={{
    right: 30
  }}
>
  <Tooltip />
  <Funnel
    dataKey="value"
    data={data}
    isAnimationActive
  >
    <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
  </Funnel>
</FunnelChart>
`;

export const funnelApiExamples: ReadonlyArray<ApiExample> = [
  {
    demo: FunnelChartExample,
    code: exampleCode,
    dataCode: `const data = ${JSON.stringify(data, null, 2)}`,
  },
];
