import React from 'react';
import { FunnelChart, Funnel, Tooltip, LabelList, Cell } from 'recharts';

const data = [
  { value: 100, name: '展现', fill: '#8884d8' },
  { value: 80, name: '点击', fill: '#83a6ed' },
  { value: 50, name: '访问', fill: '#8dd1e1' },
  { value: 40, name: '咨询', fill: '#82ca9d' },
  { value: 26, name: '订单', fill: '#a4de6c' },
];

const example = () => (
  <FunnelChart width={730} height={250}>
    <Tooltip />
    <Funnel dataKey="value" data={data} isAnimationActive>
      <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
    </Funnel>
  </FunnelChart>
);

const exampleCode = `
<FunnelChart width={730} height={250}>
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

export default [
  {
    demo: example,
    code: exampleCode,
    dataCode: `const data = ${JSON.stringify(data, null, 2)}`,
  },
];
