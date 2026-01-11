// @vitest-environment node

import { expect, test } from 'vitest';
import { defineColorModeStore } from '../src/components/color-mode';

test('colorModeStore works server-side', () => {
  const store = defineColorModeStore();
  expect(store.getSnapshot()).toEqual({
    origin: 'system',
    mode: 'light',
  });
  store.dispose();
});
