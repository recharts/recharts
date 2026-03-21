import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import { Pie, PieChart } from '../../src';

const dataWithZeroValue = [
  { name: 'Group A', value: 400, fill: '#0088FE' },
  { name: 'Group B', value: 300, fill: '#00C49F' },
  { name: 'Group C', value: 0, fill: '#FFBB28' },
  { name: 'Group D', value: 200, fill: '#FF8042' },
];

test('PieChart with paddingAngle and zero value should not double the gap', async ({ mount }) => {
  const component = await mount(
    <PieChart width={500} height={500}>
      <Pie
        data={dataWithZeroValue}
        cx="50%"
        cy="50%"
        innerRadius="60%"
        outerRadius="80%"
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={false}
      />
    </PieChart>,
  );
  await expect(component).toHaveScreenshot();
});
