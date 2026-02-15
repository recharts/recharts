import React from 'react';
import { Args } from '@storybook/react-vite';
import { Legend, Pie, PieChart, ResponsiveContainer, Sector, Tooltip } from '../../../../src';
import { PieSectorDataItem } from '../../../../src/polar/Pie';
import { RechartsHookInspector } from '../../../storybook-addon-recharts';

const data = [
  { name: 'Group A', value: 400, fill: '#0088FE' },
  { name: 'Group B', value: 300, fill: '#00C49F' },
  { name: 'Group C', value: 300, fill: '#FFBB28' },
  { name: 'Group D', value: 200, fill: '#FF8042' },
];

const renderSectorWithCustomShapeColor = ({ payload, ...props }: PieSectorDataItem) => {
  return <Sector {...props} fill={payload.fill} />;
};

export default {
  component: Pie,
};

export const PieColorSync = {
  render: (args: Args) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <PieChart width={400} height={400}>
          <Pie data={data} dataKey="value" nameKey="name" {...args} shape={renderSectorWithCustomShapeColor} />
          <Legend />
          <Tooltip />
          <RechartsHookInspector />
        </PieChart>
      </ResponsiveContainer>
    );
  },
  args: {
    cx: '50%',
    cy: '50%',
    fill: '#8884d8',
    innerRadius: 60,
    outerRadius: 80,
  },
};
