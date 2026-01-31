import { ChartPointer, MouseHandlerDataParam, getChartPointer, Line, LineChart, XAxis, YAxis, Cross } from 'recharts';
import { generateMockData } from '@recharts/devtools';
import { useState } from 'react';
import { MousePointer, SVGMousePointer } from '../../../../../src/util/types.ts';

const data = generateMockData(30, 123);

export default function CrosshairExample() {
  const [pointer, setPointer] = useState<ChartPointer | null>(null);

  function handleMouseMove(_state: MouseHandlerDataParam, event: React.MouseEvent<SVGElement, MouseEvent>) {
    // console.log('Mouse move event:', _state, event);
    console.log('Mouse move event:', event.currentTarget);
    const e: SVGMousePointer = event;
    const chartPointer = getChartPointer(event);
    setPointer(chartPointer);
  }

  function handleMouseLeave() {
    setPointer(null);
  }

  return (
    <LineChart
      style={{ width: '100%', maxWidth: '500px', maxHeight: '200px', aspectRatio: 1 }}
      responsive
      data={data}
      onMouseMove={handleMouseMove}
    >
      <XAxis dataKey="label" />
      <YAxis width="auto" />
      <Line type="monotone" dataKey="x" stroke="var(--color-chart-1)" />
      {pointer && <Cross x={pointer.chartX} y={pointer.chartY} stroke="red" strokeWidth={1} strokeDasharray="4" />}
    </LineChart>
  );
}
