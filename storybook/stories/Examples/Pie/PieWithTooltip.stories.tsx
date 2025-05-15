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
      <div
        className="my-custom-tooltip"
        style={{
          border: 'solid 1px black',
          fontSize: '13px',
          fontWeight: '600',
          fontFamily: 'sans-serif',
          color: '#111',
          backgroundColor: '#eee',
          padding: '5px',
          borderRadius: '10px',
        }}
      >
        {payload.map(pld => (
          <p key={pld.name}>{`${pld.name} : ${pld.value}`}</p>
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
    const [randomData, setRandomData] = useState(data);
    return (
      <>
        <button
          type="button"
          onClick={() => {
            setRandomData(old => old.map(d => ({ ...d, value: Math.round(Math.random() * 1000) })));
          }}
        >
          Change Data
        </button>
        <PieChart
          width={400}
          height={400}
          data={randomData}
          // @ts-expect-error recharts needs more specific type for the event
          onMouseMove={(_: unknown, event: MouseEvent) => {
            // follow the mouse and adjust for some offset
            setTtPos({ x: event.clientX - 185, y: event.offsetY });
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
            {randomData.map((value: DataPoint, index: number) => (
              <Cell key={`cell-${value.name}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={CustomContent} position={ttPos} active={active} />
          <Legend />
        </PieChart>
      </>
    );
  },
  args: {
    cx: 200,
    cy: 200,
    fill: '#8884d8',
    outerRadius: 80,
    labelLine: false,
  },
};
