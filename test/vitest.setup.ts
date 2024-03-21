import '@testing-library/jest-dom';
import { restoreHTMLElementProperties } from './helper/mockHTMLElementProperty';

global.requestAnimationFrame = fn => window.setTimeout(fn, 0);

afterEach(() => {
  // All other mocks are restored using the `restoreMocks` config in `./vitest.config.ts`,
  // all except this one. This one cannot be set using vi.spyOn() and therefore vitest will not reset it automatically!
  // So it must be restored manually.
  restoreHTMLElementProperties();
});
