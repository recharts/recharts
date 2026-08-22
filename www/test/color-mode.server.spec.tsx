// @vitest-environment node

import { expect, test } from 'vitest';
import { getColorModeState } from '../src/components/color-mode';

test('color mode state works server-side', () => {
  expect(getColorModeState()).toEqual({
    origin: 'system',
    mode: 'light',
  });
});
