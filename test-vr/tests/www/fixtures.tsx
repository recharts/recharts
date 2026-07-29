import { test as originalTest } from '@playwright/experimental-ct-react';
import * as React from 'react';

import { TestColorModeProvider, WithLightTheme, WithDarkTheme } from './TestColorModeProvider';

export const test = originalTest.extend({
  mount: async ({ mount }, use) => {
    // @ts-expect-error somehow TypeScript shows this as an error even though it all works fine
    const customMount: typeof mount = async (component, options) => {
      // @ts-expect-error somehow TypeScript shows this as an error even though it all works fine
      return mount(<TestColorModeProvider>{component}</TestColorModeProvider>, options);
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks -- we are in a test fixture not a React hook
    await use(customMount);
  },
});

export { expect } from '@playwright/experimental-ct-react';

export const testWithLightTheme = originalTest.extend({
  mount: async ({ mount }, use) => {
    // @ts-expect-error somehow TypeScript shows this as an error even though it all works fine
    const customMount: typeof mount = async (component, options) => {
      // @ts-expect-error somehow TypeScript shows this as an error even though it all works fine
      return mount(<WithLightTheme>{component}</WithLightTheme>, options);
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks -- we are in a test fixture not a React hook
    await use(customMount);
  },
});

export const testWithDarkTheme = originalTest.extend({
  mount: async ({ mount }, use) => {
    // @ts-expect-error somehow TypeScript shows this as an error even though it all works fine
    const customMount: typeof mount = async (component, options) => {
      // @ts-expect-error somehow TypeScript shows this as an error even though it all works fine
      return mount(<WithDarkTheme>{component}</WithDarkTheme>, options);
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks -- we are in a test fixture not a React hook
    await use(customMount);
  },
});
