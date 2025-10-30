import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import Step1 from '../../../www/src/components/GuideView/GettingStarted/Step1';
import Step2 from '../../../www/src/components/GuideView/GettingStarted/Step2';
import Step3 from '../../../www/src/components/GuideView/GettingStarted/Step3';
import Step4 from '../../../www/src/components/GuideView/GettingStarted/Step4';
import Step5 from '../../../www/src/components/GuideView/GettingStarted/Step5';

test('GettingStarted Step1', async ({ mount }) => {
  const component = await mount(<Step1 />);
  await expect(component).toHaveScreenshot();
});

test('GettingStarted Step2', async ({ mount }) => {
  const component = await mount(<Step2 />);
  await expect(component).toHaveScreenshot();
});

test('GettingStarted Step3', async ({ mount }) => {
  const component = await mount(<Step3 />);
  await expect(component).toHaveScreenshot();
});

test('GettingStarted Step4', async ({ mount }) => {
  const component = await mount(<Step4 />);
  await expect(component).toHaveScreenshot();
});

test('GettingStarted Step5', async ({ mount }) => {
  const component = await mount(<Step5 />);
  await expect(component).toHaveScreenshot();
});
