import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import {
  LabelCartesianPositions,
  LabelPiePositions,
  LabelRadialBarPositions,
  LabelBarChartExample,
  // eslint-disable-next-line import/no-relative-packages
} from '../../../www/src/docs/apiExamples/Label';

test('LabelCartesianPositions', async ({ mount }) => {
  const component = await mount(<LabelCartesianPositions locale="en-US" isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});

test('LabelPiePositions', async ({ mount }) => {
  const component = await mount(<LabelPiePositions locale="en-US" isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});

test('LabelRadialBarPositions', async ({ mount }) => {
  const component = await mount(<LabelRadialBarPositions locale="en-US" isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});

test('LabelBarChartExample', async ({ mount }) => {
  const component = await mount(<LabelBarChartExample locale="en-US" isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
