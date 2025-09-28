import { test, expect } from '@playwright/experimental-ct-react';
// eslint-disable-next-line import/no-relative-packages
import { allApiExamples } from '../../../www/src/docs/apiExamples';

Object.entries(allApiExamples).forEach(([componentName, examples]) => {
  examples.forEach((example, index) => {
    test(`${componentName} example ${index + 1}`, async ({ mount }) => {
      const component = await mount(example.demo({ locale: 'en-US', isAnimationActive: false }));
      await expect(component).toHaveScreenshot();
    });
  });
});
