import * as React from 'react';
import { test, expect } from './fixtures';
import IndexLineChart from '../../../www/src/views/IndexView/IndexLineChart';

test('Index Line Chart', async ({ mount }) => {
  const component = await mount(<IndexLineChart />);
  await expect(component).toHaveScreenshot();
});
