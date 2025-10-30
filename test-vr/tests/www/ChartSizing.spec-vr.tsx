import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import ChartWithoutSize from '../../../www/src/components/GuideView/ChartSizing/ChartWithoutSize';
import StaticDimensionChart from '../../../www/src/components/GuideView/ChartSizing/StaticDimensionChart';
import SizeInPercentChart from '../../../www/src/components/GuideView/ChartSizing/SizeInPercentChart';
import SizeInStyleChart from '../../../www/src/components/GuideView/ChartSizing/SizeInStyleChart';
import ResponsiveChart from '../../../www/src/components/GuideView/ChartSizing/ResponsiveChart';
import ResponsiveContainerResponsiveChart from '../../../www/src/components/GuideView/ChartSizing/ResponsiveContainerResponsiveChart';

test('ChartWithoutSize', async ({ mount }) => {
  const component = await mount(<ChartWithoutSize />);
  // chart without size does not render anything so we can't take a screenshot of it!
  await expect(component).toBeEmpty();
});

test('StaticDimensionChart', async ({ mount }) => {
  const component = await mount(<StaticDimensionChart />);
  await expect(component).toHaveScreenshot();
});

test('SizeInPercentChart', async ({ mount }) => {
  const component = await mount(<SizeInPercentChart />);
  await expect(component).toHaveScreenshot();
});

test('SizeInStyleChart', async ({ mount }) => {
  const component = await mount(<SizeInStyleChart />);
  await expect(component).toHaveScreenshot();
});

test('ResponsiveChart', async ({ mount }) => {
  const component = await mount(<ResponsiveChart />);
  await expect(component).toHaveScreenshot();
});

test('ResponsiveContainerResponsiveChart', async ({ mount }) => {
  const component = await mount(<ResponsiveContainerResponsiveChart />);
  await expect(component).toHaveScreenshot();
});
