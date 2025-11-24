import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import MultiXAxisExample from '../../../www/src/docs/exampleComponents/XAxis/MultiXAxisExample';

test('MultiXAxisExample', async ({ mount }) => {
  const component = await mount(<MultiXAxisExample />);
  await expect(component).toHaveScreenshot();
});
