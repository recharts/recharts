import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';

import CellBarExample from '../../../www/src/docs/apiExamples/Cell/CellBarExample';
import CellPieExample from '../../../www/src/docs/apiExamples/Cell/CellPieExample';

test('CellPieExample', async ({ mount }) => {
  const component = await mount(<CellPieExample isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});

test('CellBarExample', async ({ mount }) => {
  const component = await mount(<CellBarExample isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
