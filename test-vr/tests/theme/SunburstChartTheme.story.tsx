import React from 'react';
import { SunburstChart, SunburstData } from 'recharts';

/*
 * Top-level branches carry their own colors. Children either inherit the parent fill
 * or add a stroke of their own. Plain has no color, so a theme can still paint it.
 */
const data: SunburstData = {
  name: 'Company',
  value: 100,
  children: [
    {
      name: 'Styled',
      value: 50,
      fill: '#ef4444',
      stroke: '#14532d',
      strokeWidth: 6,
      children: [
        { name: 'Inherited', value: 25 },
        { name: 'Stroke', value: 25, stroke: '#db2777', strokeWidth: 5 },
      ],
    },
    {
      name: 'Plain',
      value: 30,
      children: [
        { name: 'A', value: 15 },
        { name: 'Dashed', value: 15, strokeDasharray: '4 3', strokeWidth: 4, opacity: 0.55 },
      ],
    },
    { name: 'Fill', value: 20, fill: '#22c55e' },
  ],
};

export function SunburstChartEntryStyles() {
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <div>
        <h2 style={{ margin: 0, fontSize: 16 }}>Entry styles</h2>
        <SunburstChart width={360} height={300} data={data} />
      </div>
      <div>
        <h2 style={{ margin: 0, fontSize: 16 }}>Chart fill turns the theme off</h2>
        <SunburstChart width={360} height={300} data={data} fill="#123456" />
      </div>
    </div>
  );
}
