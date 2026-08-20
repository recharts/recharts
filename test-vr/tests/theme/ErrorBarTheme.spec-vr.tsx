import React from 'react';
import { expect, test } from '@playwright/experimental-ct-react';

import { ErrorBarThemeComponents } from './ErrorBarThemeComponents.tsx';

test('ErrorBar theme', async ({ mount }) => {
  const component = await mount(<ErrorBarThemeComponents />);

  await expect(component).toHaveScreenshot();
});
