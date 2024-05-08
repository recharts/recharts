/* eslint-disable no-shadow */
import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from '../../../../src';

export default {
  component: Pie,
};

const data = [
  { name: 'A', value: 80, color: '#ff0000' },
  { name: 'B', value: 45, color: '#00ff00' },
  { name: 'C', value: 25, color: '#0000ff' },
];
const cx = 150;
const cy = 200;
const iR = 50;
const oR = 100;

const NEEDLE_BASE_RADIUS_PX = 5;
const NEEDLE_COLOR = '#d0d000';
const Needle = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
}: {
  cx: number;
  cy: number;
  innerRadius: number;
  outerRadius: number;
  midAngle: number;
}) => {
  const needleBaseCenterX = cx;
  const needleBaseCenterY = cy;
  const needleLength = innerRadius + (outerRadius - innerRadius) / 2;

  return (
    <g>
      <circle
        cx={needleBaseCenterX}
        cy={needleBaseCenterY}
        r={NEEDLE_BASE_RADIUS_PX}
        fill={NEEDLE_COLOR}
        stroke="none"
      />
      <path
        d={`M${needleBaseCenterX},${needleBaseCenterY}l${needleLength},0`}
        strokeWidth={2}
        stroke={NEEDLE_COLOR}
        fill={NEEDLE_COLOR}
        style={{
          transform: `rotate(-${midAngle}deg)`,
          transformOrigin: `${needleBaseCenterX}px ${needleBaseCenterY}px`,
        }}
      />
    </g>
  );
};

export const PieWithNeedle = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <PieChart>
          <Pie dataKey="value" {...args}>
            {data.map(entry => (
              <Cell key={`cell-${entry.name}`} fill={entry.color} />
            ))}
          </Pie>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx={cx}
            cy={cy}
            innerRadius={iR}
            outerRadius={oR}
            stroke="none"
            fill="none"
            activeShape={Needle}
          />
          <Tooltip defaultIndex={1} />
        </PieChart>
      </ResponsiveContainer>
    );
  },
  args: {
    cx,
    cy,
    data,
    dataKey: 'value',
    endAngle: 0,
    fill: '#8884d8',
    innerRadius: iR,
    outerRadius: oR,
    startAngle: 180,
    stroke: 'none',
  },
};

export const PieWithPatterns = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <PieChart>
          <defs>
            <pattern id="pattern-A" width="10" height="10" patternUnits="userSpaceOnUse">
              <polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2" fill="#f00" />
            </pattern>
            <pattern id="pattern-B" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="2" height="4" fill="#0f0" />
            </pattern>
            <pattern id="pattern-C" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(135)">
              <rect width="2" height="4" fill="#00f" />
            </pattern>
          </defs>
          <Pie dataKey="value" {...args}>
            {data.map(entry => (
              <Cell key={`cell-${entry.name}`} fill={`url(#pattern-${entry.name})`} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  },
  args: {
    cx,
    cy,
    data,
    dataKey: 'value',
    fill: '#8884d8',
    innerRadius: iR,
    outerRadius: oR,
    stroke: 'none',
  },
};
