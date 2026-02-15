import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
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

const POSITIVE_COLOR = '#00897B';
const NEGATIVE_COLOR = '#78909C';
const TOTAL_COLOR = '#1565C0';

function getFill(d: (typeof waterfallData)[0]) {
  if (d.isTotal) return TOTAL_COLOR;
  return d.value >= 0 ? POSITIVE_COLOR : NEGATIVE_COLOR;
}

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
        <Bar dataKey="waterfallRange" isAnimationActive={false}>
          {waterfallData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getFill(entry)} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  ),
};
