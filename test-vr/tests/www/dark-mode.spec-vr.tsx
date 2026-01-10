import { expect, test } from '@playwright/experimental-ct-react';

import { Root } from '../../../www/src/containers/Root.tsx';

test.use({
  colorScheme: 'dark', // or 'light'
});

test('dark mode snapshot', async ({ mount }) => {
  const component = await mount(<Root />);

  await expect(component).toHaveScreenshot();
});
