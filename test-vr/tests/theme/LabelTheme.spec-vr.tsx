import * as React from 'react';
import { expect, test } from '@playwright/experimental-ct-react';
import { LabelThemeExamples } from './LabelThemeComponents';

test('Label theme', async ({ mount }) => {
  const component = await mount(<LabelThemeExamples />);
  await expect(component).toHaveScreenshot();
});
