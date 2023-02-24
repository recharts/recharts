/* eslint-disable no-shadow */
import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from '../../../../src';

export default {
  component: Pie,
};

const RADIAN = Math.PI / 180;
const data = [
  { name: 'A', value: 80, color: '#ff0000' },
  { name: 'B', value: 45, color: '#00ff00' },
  { name: 'C', value: 25, color: '#0000ff' },
];
const cx = 150;
const cy = 200;
const iR = 50;
const oR = 100;
const value = 50;

const needle = (value: number, data: any[], cx: number, cy: number, iR: number, oR: number, color: string) => {
  let total = 0;
  data.forEach(v => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;

  return [
    <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path d={`M${x0},${y0}L${xbb + 65},${ybb - 65},L${xp}`} strokeWidth={2} stroke={color} fill={color} />,
  ];
};

export const PieWithNeedle = {
  render: (_args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx={cx}
            cy={cy}
            innerRadius={iR}
            outerRadius={oR}
            fill="#8884d8"
            stroke="none"
          >
            {data.map(entry => (
              <Cell key={`cell-${entry.name}`} fill={entry.color} />
            ))}
          </Pie>
          {needle(value, data, cx, cy, iR, oR, '#d0d000')}
        </PieChart>
      </ResponsiveContainer>
    );
  },
  args: {},
};
