import { CartesianGrid, Line, LineChart, useRechartsTheme, XAxis, YAxis } from 'recharts';
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
  const theme = useRechartsTheme();
  return (
    <div style={{ width: 340, padding: 16 }}>
      <div style={{ marginBottom: 8, ...theme?.typography }}>{title}</div>
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
        <Line dataKey="value" isAnimationActive={false} connectNulls dot={false} />
      </LineChart>
    </div>
  );
}
