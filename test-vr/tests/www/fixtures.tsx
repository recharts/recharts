import { test as originalTest } from '@playwright/experimental-ct-react';
import * as React from 'react';

import { TestColorModeProvider } from './TestColorModeProvider';

export const test = originalTest.extend({
  mount: async ({ mount }, use) => {
    const customMount: typeof mount = async (component, options) => {
      return mount(<TestColorModeProvider>{component}</TestColorModeProvider>, options);
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks -- we are in a test fixture not a React hook
    await use(customMount);
  },
});

export { expect } from '@playwright/experimental-ct-react';
