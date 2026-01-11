import * as React from 'react';
import { expect, test } from '@playwright/experimental-ct-react';

import { Root } from '../../../www/src/containers/Root.tsx';

test.use({
  colorScheme: 'dark',
});

test('dark mode snapshot', async ({ mount }) => {
  const component = await mount(<Root />);

  /**
   * Until dark mode is fully rolled out, light mode is the default.
   * So we need to switch to dark mode for this test.
   */
  // const lightModePicker = component.getByRole('button', { name: 'light' });
  // await expect(lightModePicker).toBeEnabled();
  // await lightModePicker.click();

  // const darkModePicker = component.getByRole('button', { name: 'dark' });
  // await expect(darkModePicker).toBeInViewport();
  // await darkModePicker.click();

  const systemModePicker = component.getByRole('button', { name: 'system' });
  await expect(systemModePicker).toBeInViewport();
  await expect(component).toHaveScreenshot();
});
