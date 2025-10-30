import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';

import ErrorBarExample from '../../../www/src/docs/apiExamples/ErrorBar/ErrorBarExample';

test('ErrorBarExample', async ({ mount }) => {
  const component = await mount(<ErrorBarExample isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
