import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import { pageData } from '../../storybook/stories/data';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from '../../src';

test('StackedBarChart with reverseStackOrder=false', async ({ mount }) => {
  const component = await mount(
    <BarChart width={600} height={300} data={pageData} reverseStackOrder={false}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="uv" stackId="a" fill="#8884d8" />
      <Bar dataKey="pv" stackId="a" fill="#82ca9d" />
    </BarChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('StackedBarChart with reverseStackOrder=true', async ({ mount }) => {
  const component = await mount(
    <BarChart width={600} height={300} data={pageData} reverseStackOrder>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="uv" stackId="a" fill="#8884d8" />
      <Bar dataKey="pv" stackId="a" fill="#82ca9d" />
    </BarChart>,
  );
  await expect(component).toHaveScreenshot();
});
