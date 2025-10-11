import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { restoreHTMLElementProperties } from './helper/mockHTMLElementProperty';

process.env.TZ = 'UTC';

/*
 * We have to fake all timers ahead of time
 * because Redux in versions prior to 2.4.0 reads and caches the window.requestAnimationFrame
 * function at the time of import. If we don't do this, the real rAF will be cached
 * and our tests that rely on timers will fail.
 * And because we use autobatching - all tests rely on timers.
 * See:
 * https://github.com/reduxjs/redux-toolkit/pull/4701
 * https://github.com/reduxjs/redux-toolkit/issues/4693
 */
vi.useFakeTimers();

/*
 * Looks like the testing-library only ever considers jest
 * and doesn't allow configuring the timer functions for other libraries,
 * even though the API looks like it should. See:
 * https://github.com/testing-library/user-event/issues/1115
 * https://github.com/testing-library/react-testing-library/issues/1197
 *
 * So we have to fake it with the `jest` global.
 */
// @ts-expect-error indeed `jest` is not a known global.
globalThis.jest = {
  advanceTimersByTime: vi.advanceTimersByTime,
};

afterEach(() => {
  // All other mocks are restored using the `restoreMocks` config in `./vitest.config.ts`,
  // all except this one. This one cannot be set using vi.spyOn() and therefore vitest will not reset it automatically!
  // So it must be restored manually.
  restoreHTMLElementProperties();
});
