import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import DataSnapExample from '../../../www/src/docs/apiExamples/useAxisInverseDataSnapScale/DataSnapExample';
import AxisTickSnapExample from '../../../www/src/docs/apiExamples/useAxisInverseTickSnapScale/AxisTicksSnapExample';

test('DataSnapExample', async ({ mount }) => {
  const component = await mount(<DataSnapExample initialPointers={[{ relativeX: 200, relativeY: 100 }]} />);
  await expect(component).toHaveScreenshot();
});

test('AxisTickSnapExample', async ({ mount }) => {
  const component = await mount(<AxisTickSnapExample initialPointers={[{ relativeX: 200, relativeY: 100 }]} />);
  await expect(component).toHaveScreenshot();
});
