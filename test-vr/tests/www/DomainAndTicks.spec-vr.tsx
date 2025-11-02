import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import MassBarChart from '../../../www/src/components/GuideView/DomainAndTicks/MassBarChart';
import MassBarChartCategoricalY from '../../../www/src/components/GuideView/DomainAndTicks/MassBarChartCategoricalY';
import MassBarChartCustomYDomain from '../../../www/src/components/GuideView/DomainAndTicks/MassBarChartCustomYDomain';
import MassBarChartLogScale from '../../../www/src/components/GuideView/DomainAndTicks/MassBarChartLogScale';
import MassBarChartCustomTicks from '../../../www/src/components/GuideView/DomainAndTicks/MassBarChartCustomTicks';

test('MassBarChart', async ({ mount }) => {
  const component = await mount(<MassBarChart />);
  await expect(component).toHaveScreenshot();
});

test('MassBarChartCategoricalY', async ({ mount }) => {
  const component = await mount(<MassBarChartCategoricalY />);
  await expect(component).toHaveScreenshot();
});

test('MassBarChartCustomYDomain', async ({ mount }) => {
  const component = await mount(<MassBarChartCustomYDomain />);
  await expect(component).toHaveScreenshot();
});

test('MassBarChartLogScale', async ({ mount }) => {
  const component = await mount(<MassBarChartLogScale />);
  await expect(component).toHaveScreenshot();
});

test('MassBarChartCustomTicks', async ({ mount }) => {
  const component = await mount(<MassBarChartCustomTicks />);
  await expect(component).toHaveScreenshot();
});
