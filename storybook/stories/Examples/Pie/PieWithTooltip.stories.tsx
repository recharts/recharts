import React, { useState } from 'react';
import { Args } from '@storybook/react';
import { PieChart, Pie, Cell, Tooltip, Legend } from '../../../../src';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

interface DataPoint {
  name: string;
  value: number;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const CustomContent = ({ active, payload }: { active: boolean; payload: Array<DataPoint> }) => {
  if (active && payload && payload.length > 0) {
    return (
      <div className="my-custom-tooltip">
        {payload.map(pld => (
          <p
            key={pld.name}
            style={{
              borderStyle: 'solid 1px',
              fontSize: '13px',
              fontWeight: '600',
              fontFamily: 'sans-serif',
              color: '#fff',
            }}
          >
            {`${pld.name} : ${pld.value}`}
          </p>
        ))}
        <div className="tooltip-arrow" />
      </div>
    );
  }
  return null;
};
export default {
  component: Pie,
};

export const PieWithTooltip = {
  render: (args: Args) => {
    const [ttPos, setTtPos] = useState(undefined);
    const [active, setActive] = useState(false);
    return (
      <PieChart
        width={400}
        height={400}
        // @ts-expect-error recharts needs more specific type for the event
        onMouseMove={(_: unknown, event: MouseEvent) => {
          // follow the mouse and adjust for some offset
          setTtPos({ x: event.clientX - 185, y: event.clientY - 50 });
        }}
      >
        <Pie
          {...args}
          dataKey="value"
          onMouseEnter={() => {
            setActive(true);
          }}
          onMouseLeave={() => {
            setActive(false);
          }}
        >
          {data.map((value: DataPoint, index: number) => (
            <Cell key={`cell-${value.name}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={CustomContent} position={ttPos} active={active} />
        <Legend />
      </PieChart>
    );
  },
  args: {
    cx: 200,
    cy: 200,
    data,
    fill: '#8884d8',
    outerRadius: 80,
    labelLine: false,
  },
};
