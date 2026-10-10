import React from 'react';
import { Pie, PieChart, Tooltip } from '../../../../src';

type Datum = { name: string; value?: number; fill: string };

const data: Array<Datum> = [
  { name: 'A', value: 1, fill: '#8884d8' },
  { name: 'Missing', fill: '#ff7300' },
  { name: 'B', value: 1, fill: '#82ca9d' },
];

const getValue = (entry: Datum): number | undefined => entry.value;

export default {
  component: PieChart,
};

export const MissingValuesWithFunctionDataKey = {
  render: () => (
    <PieChart width={400} height={400}>
      <Pie data={data} dataKey={getValue} minAngle={10} isAnimationActive={false} />
      <Tooltip />
    </PieChart>
  ),
};
