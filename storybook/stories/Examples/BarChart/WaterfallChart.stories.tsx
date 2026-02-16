import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  computeWaterfallData,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from '../../../../src';

export default {
  title: 'Examples/BarChart/Waterfall',
  component: BarChart,
};

const rawData = [
  { name: 'Revenue', value: 420 },
  { name: 'Services', value: 210 },
  { name: 'Fixed costs', value: -170 },
  { name: 'Variable costs', value: -120 },
  { name: 'Taxes', value: -60 },
  { name: 'Profit', value: 280, isTotal: true },
];

const waterfallData = computeWaterfallData({
  data: rawData,
  dataKey: 'value',
  totalKey: 'isTotal',
});

export const Simple = {
  render: () => (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={waterfallData} margin={{ top: 20, right: 30, bottom: 5, left: 20 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip
          formatter={(value: [number, number], _name: string, props: { payload: (typeof waterfallData)[0] }) => [
            props.payload.value,
            'Value',
          ]}
        />
        <Bar dataKey="waterfallRange" fill="#1565C0" isAnimationActive={false} />
      </BarChart>
    </ResponsiveContainer>
  ),
};
