import * as React from 'react';
import { expect, testWithLightTheme } from './fixtures';
import IndexLineChart from '../../../www/src/views/IndexView/IndexLineChart';

testWithLightTheme('Index Line Chart', async ({ mount }) => {
  const component = await mount(<IndexLineChart />);
  await expect(component).toHaveScreenshot();
});
