import * as React from 'react';
import { expect, test } from '@playwright/experimental-ct-react';
import { TextThemeExamples } from './TextThemeComponents';

test('Text theme', async ({ mount }) => {
  const component = await mount(<TextThemeExamples />);
  await expect(component).toHaveScreenshot();
});
