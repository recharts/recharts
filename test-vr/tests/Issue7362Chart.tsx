import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import * as React from 'react';

export type Datum = {
  name: string;
  value: number | null;
};

const explicitDomain = [0, 100] as const;

export function Issue7362Chart({
  data,
  title,
  ticks,
  tickCount,
}: {
  data: ReadonlyArray<Datum>;
  title: string;
  ticks?: ReadonlyArray<number>;
  tickCount?: number;
}) {
  return (
    <div style={{ width: 340, padding: 16, backgroundColor: '#fff' }}>
      <div style={{ marginBottom: 8, fontFamily: 'sans-serif', fontSize: 14 }}>{title}</div>
      <LineChart width={308} height={220} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis
          type="number"
          domain={explicitDomain}
          allowDataOverflow
          {...(ticks != null ? { ticks } : {})}
          {...(tickCount != null ? { tickCount } : {})}
        />
        <Line type="monotone" dataKey="value" stroke="#8884d8" isAnimationActive={false} connectNulls dot={false} />
      </LineChart>
    </div>
  );
}
