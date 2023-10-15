import React from 'react';
import { measurePerformance } from 'reassure';
import { Area, AreaChart, Brush, Tooltip, XAxis, YAxis } from '../../src';

type ExampleData = {
  name: string;
  uv: number;
  pv: number;
  amt: number;
};

function createDataArray() {
  const data: ExampleData[] = [];
  for (let i = 0; i < 1000; i++) {
    data.push({
      name: `Page ${i}`,
      uv: i * 100,
      pv: i * 200,
      amt: i * 300,
    });
  }
  return data;
}

describe('AreaChart', () => {
  test('Simple test', async () => {
    const data = createDataArray();
    await measurePerformance(
      <AreaChart width={100} height={50} data={data}>
        <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
        <Tooltip />
        <XAxis />
        <YAxis />
        <Brush />
      </AreaChart>,
    );
  });
});
