import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';

import ReferenceAreaExample from '../../../www/src/docs/apiExamples/ReferenceArea/ReferenceAreaExample';

test('ReferenceAreaExample', async ({ mount }) => {
  const component = await mount(<ReferenceAreaExample isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
