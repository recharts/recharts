import * as React from 'react';
import { useState } from 'react';
import { Line, LineChart, ReferenceLine, ReferenceArea, YAxis, XAxis, CartesianGrid } from '../../../src';

const data = [
  { x: 0, value: 50 },
  { x: 1, value: 60 },
  { x: 2, value: 45 },
  { x: 3, value: 70 },
  { x: 4, value: 55 },
  { x: 5, value: 80 },
  { x: 6, value: 65 },
  { x: 7, value: 75 },
  { x: 8, value: 60 },
  { x: 9, value: 70 },
];

export function ReferenceLineAnimationTest() {
  const [position, setPosition] = useState(2);

  return (
    <div>
      <button type="button" data-testid="move-left" onClick={() => setPosition(p => Math.max(0, p - 2))}>
        Move Left
      </button>
      <button type="button" data-testid="move-right" onClick={() => setPosition(p => Math.min(9, p + 2))}>
        Move Right
      </button>
      <span data-testid="position">{position}</span>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" type="number" domain={[0, 9]} />
        <YAxis domain={[0, 100]} />
        <Line dataKey="value" stroke="#8884d8" />
        <ReferenceLine
          x={position}
          stroke="red"
          strokeWidth={2}
          isAnimationActive
          animationDuration={300}
          animationEasing="ease-out"
        />
      </LineChart>
    </div>
  );
}

export function ReferenceAreaAnimationTest() {
  const [range, setRange] = useState({ start: 2, end: 5 });

  return (
    <div>
      <button
        type="button"
        data-testid="slide-left"
        onClick={() => setRange(r => ({ start: Math.max(0, r.start - 2), end: Math.max(3, r.end - 2) }))}
      >
        Slide Left
      </button>
      <button
        type="button"
        data-testid="slide-right"
        onClick={() => setRange(r => ({ start: Math.min(6, r.start + 2), end: Math.min(9, r.end + 2) }))}
      >
        Slide Right
      </button>
      <span data-testid="range">
        {range.start}-{range.end}
      </span>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" type="number" domain={[0, 9]} />
        <YAxis domain={[0, 100]} />
        <Line dataKey="value" stroke="#8884d8" />
        <ReferenceArea
          x1={range.start}
          x2={range.end}
          fill="rgba(0, 100, 255, 0.3)"
          isAnimationActive
          animationDuration={300}
          animationEasing="ease-out"
        />
      </LineChart>
    </div>
  );
}

export function CombinedReferenceAnimationTest() {
  const [position, setPosition] = useState(5);

  return (
    <div>
      <button type="button" data-testid="move-left" onClick={() => setPosition(p => Math.max(2, p - 2))}>
        Move Left
      </button>
      <button type="button" data-testid="move-right" onClick={() => setPosition(p => Math.min(8, p + 2))}>
        Move Right
      </button>
      <span data-testid="position">{position}</span>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" type="number" domain={[0, 9]} />
        <YAxis domain={[0, 100]} />
        <Line dataKey="value" stroke="#8884d8" animationMatchBy="x" animationDuration={300} />
        <ReferenceArea
          x1={position - 1}
          x2={position + 1}
          fill="rgba(0, 100, 255, 0.2)"
          isAnimationActive
          animationDuration={300}
          animationEasing="ease-out"
        />
        <ReferenceLine
          x={position}
          stroke="red"
          strokeWidth={2}
          isAnimationActive
          animationDuration={300}
          animationEasing="ease-out"
        />
      </LineChart>
    </div>
  );
}
