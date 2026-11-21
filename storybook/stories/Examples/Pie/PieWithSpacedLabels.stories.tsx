import React from 'react';
import { Pie, PieChart } from '../../../../src';

const data = [
  { value: 64, fill: '#355683' },
  { value: 24, fill: '#437f86' },
  { value: 6, fill: '#5b669e' },
  { value: 3, fill: '#a87242' },
  { value: 1.5, fill: '#514564' },
  { value: 0.9, fill: '#506f52' },
  { value: 0.4, fill: '#87505c' },
  { value: 0.2, fill: '#795f38' },
];

export default { component: Pie };

export const SpacedOutsideLabels = {
  args: { minLabelSpacing: 18 },
  argTypes: { minLabelSpacing: { control: { type: 'range', min: 0, max: 36, step: 1 } } },
  render: ({ minLabelSpacing }: { minLabelSpacing: number }) => (
    <PieChart width={320} height={230}>
      <Pie data={data} dataKey="value" outerRadius="70%" label={{ fontSize: 14 }} minLabelSpacing={minLabelSpacing} />
    </PieChart>
  ),
};
