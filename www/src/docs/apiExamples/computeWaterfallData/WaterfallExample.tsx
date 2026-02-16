import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  computeWaterfallData,
  Tooltip,
  XAxis,
  YAxis,
  type WaterfallDatum,
  type WaterfallOptions,
} from 'recharts';

type RawEntry = { name: string; value: number; isTotal?: boolean };

const rawData: ReadonlyArray<RawEntry> = [
  { name: 'Revenue', value: 420 },
  { name: 'Services', value: 210 },
  { name: 'Fixed costs', value: -170 },
  { name: 'Variable costs', value: -120 },
  { name: 'Taxes', value: -60 },
  { name: 'Profit', value: 280, isTotal: true },
];

const options: WaterfallOptions<RawEntry> = {
  data: rawData,
  dataKey: 'value',
  totalKey: 'isTotal',
};

const waterfallData: Array<RawEntry & WaterfallDatum<RawEntry>> = computeWaterfallData(options);

export default function WaterfallExample() {
  return (
    <BarChart width={500} height={300} data={waterfallData} margin={{ top: 20, right: 30, bottom: 5, left: 20 }}>
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip
        formatter={(_value: [number, number], _name: string, props: { payload: (typeof waterfallData)[0] }) => [
          props.payload.value,
          'Value',
        ]}
      />
      <Bar dataKey="waterfallRange" fill="#1565C0" isAnimationActive={false} />
    </BarChart>
  );
}
