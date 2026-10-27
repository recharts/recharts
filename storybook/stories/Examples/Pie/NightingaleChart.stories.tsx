import React from 'react';
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from '../../../../src';

type NightingaleDatum = {
  name: string;
  value: number;
  weight: number;
  fill: string;
};

const data: Array<NightingaleDatum> = [
  { name: 'N', value: 42, weight: 1, fill: '#0088FE' },
  { name: 'NE', value: 28, weight: 1, fill: '#00C49F' },
  { name: 'E', value: 61, weight: 1, fill: '#FFBB28' },
  { name: 'SE', value: 35, weight: 1, fill: '#FF8042' },
  { name: 'S', value: 74, weight: 1, fill: '#A05EB5' },
  { name: 'SW', value: 52, weight: 1, fill: '#E36C8A' },
  { name: 'W', value: 46, weight: 1, fill: '#4C9F70' },
  { name: 'NW', value: 33, weight: 1, fill: '#D97706' },
];

const maxValue = Math.max(...data.map(entry => entry.value));

const getOuterRadius = (entry: NightingaleDatum) => `${25 + (entry.value / maxValue) * 65}%`;

export default {
  component: Pie,
};

export const NightingaleChart = {
  render: () => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            dataKey="weight"
            nameKey="name"
            innerRadius="10%"
            outerRadius={getOuterRadius}
            startAngle={90}
            endAngle={-270}
            stroke="none"
          />
          <Legend />
          <Tooltip formatter={(_value, _name, item) => item.payload.value} />
        </PieChart>
      </ResponsiveContainer>
    );
  },
};
