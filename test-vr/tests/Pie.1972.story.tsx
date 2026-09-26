/**
 * @fileOverview https://github.com/recharts/recharts/issues/1972
 */
import * as React from 'react';
import { Pie, PieChart } from '../../src';

const data = [
  { name: 'Group A', value: 400, fill: '#0088FE' },
  { name: 'Group B', value: 300, fill: '#00C49F' },
  { name: 'Group C', value: 20, fill: '#FFBB28' },
  { name: 'Group D', value: 8, fill: '#FF8042' },
  { name: 'Group E', value: 3, fill: '#8884d8' },
];

/*
 * The three small slices are too narrow for two corners with the full cornerRadius.
 * Their corners must shrink to fit instead of disappearing, so every slice keeps its rounded corners,
 * both in the pie on the left and in the donut on the right.
 */
export const PieWithCornerRadiusAndSmallSlices = () => {
  return (
    <PieChart width={500} height={250}>
      <Pie
        data={data}
        cx="25%"
        cy="50%"
        outerRadius={100}
        cornerRadius={12}
        paddingAngle={2}
        dataKey="value"
        isAnimationActive={false}
      />
      <Pie
        data={data}
        cx="75%"
        cy="50%"
        innerRadius={60}
        outerRadius={100}
        cornerRadius={20}
        paddingAngle={2}
        dataKey="value"
        isAnimationActive={false}
      />
    </PieChart>
  );
};
