import * as React from 'react';
import { expect, test } from '@playwright/experimental-ct-react';

import { Root } from '../../../www/src/containers/Root.tsx';

test.use({
  colorScheme: 'dark',
});

test('dark mode snapshot', async ({ mount }) => {
  const component = await mount(<Root />);

  await expect(component.getByRole('button', { name: 'system' })).toBeInViewport();
  await expect(component).toHaveScreenshot();
});
