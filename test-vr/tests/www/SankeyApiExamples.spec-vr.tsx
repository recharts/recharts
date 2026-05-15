import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import SankeyCustomNodeExample from '../../../www/src/docs/exampleComponents/Sankey/SankeyCustomNodeExample';

test('SankeyCustomNodeExample', async ({ mount }) => {
  const component = await mount(<SankeyCustomNodeExample />);
  await expect(component).toHaveScreenshot();
});
