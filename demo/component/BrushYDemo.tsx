import React, { Component, useState } from 'react';
import { LineChart, Line, Brush, BrushY, XAxis, YAxis } from 'recharts';

const data = [
  { day: '1', value: 10 },
  { day: '2', value: 20 },
  { day: '3', value: 10 },
  { day: '4', value: 30 },
  { day: '5', value: 50 },
  { day: '6', value: 10 },
  { day: '7', value: 30 },
  { day: '8', value: 20 },
  { day: '9', value: 10 },
  { day: '10', value: 70 },
  { day: '11', value: 40 },
  { day: '12', value: 20 },
  { day: '13', value: 10 },
  { day: '14', value: 10 },
];

function BrushYDemo() {
  const displayName = 'BrushYDemo';

  const bSteps = 100;
  const range = { min: 0, max: 100 };
  data.forEach(d => {
    if (d.value < range.min) range.min = d.value;
    if (d.value > range.max) range.max = d.value;
  });
  const scl = (range.max - range.min) / bSteps;
  const [dom, setDom] = useState({ min: 0, max: 100 });

  function handleBrushChange(e: any) {
    setDom({
      min: range.min + (bSteps - e.endIndex) * scl,
      max: range.max - (e.startIndex - 0) * scl,
    });
  }

  return (
    <LineChart width={400} height={300} data={data}>
      <XAxis type="number" dataKey="day" />
      <YAxis type="number" dataKey="value" domain={[dom.min, dom.max]} allowDataOverflow />
      <Brush dataKey="day" x={20} y={0} width={380} height={20} />
      <BrushY x={0} y={20} width={20} height={280} onChange={handleBrushChange} />
      <Line type="monotone" dataKey="value" />
    </LineChart>
  );
}

export default BrushYDemo;
