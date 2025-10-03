import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
// eslint-disable-next-line import/no-relative-packages
import { CellPieExample, CellBarExample } from '../../../www/src/docs/apiExamples/Cell';

test('CellPieExample', async ({ mount }) => {
  const component = await mount(<CellPieExample locale="en-US" isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});

test('CellBarExample', async ({ mount }) => {
  const component = await mount(<CellBarExample locale="en-US" isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
