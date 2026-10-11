import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { vi } from 'vitest';
import { restoreHTMLElementProperties } from './helper/mockHTMLElementProperty';
import { setupConsoleWarningToError } from './helper/consoleWarningToError';
import { clearStringCache, configureTextMeasurement } from '../src/util/DOMUtils';

process.env.TZ = 'UTC';

const originalSvgGetTotalLength = Object.getOwnPropertyDescriptor(SVGElement.prototype, 'getTotalLength');

// Setup console warning/error interception
setupConsoleWarningToError();

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
vi.useFakeTimers({
  // RTK autobatching caches requestAnimationFrame at import time, but faking
  // the wider Vitest 4 timer surface interferes with React scheduling.
  toFake: ['requestAnimationFrame', 'cancelAnimationFrame'],
});

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
  cleanup();
  // Restore descriptor-based and prototype mocks explicitly because they can outlive a test file when isolation is disabled.
  restoreHTMLElementProperties();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  vi.clearAllMocks();
  vi.clearAllTimers();
  document.getElementById('recharts_measurement_span')?.remove();
  if (!vi.isFakeTimers()) {
    vi.useFakeTimers({
      toFake: ['requestAnimationFrame', 'cancelAnimationFrame'],
    });
  }
});

afterAll(() => {
  configureTextMeasurement({
    cacheSize: 2000,
    enableCache: true,
  });
  clearStringCache();
  document.getElementById('recharts_measurement_span')?.remove();
  vi.useRealTimers();
  vi.useFakeTimers({
    toFake: ['requestAnimationFrame', 'cancelAnimationFrame'],
  });
  if (originalSvgGetTotalLength) {
    Object.defineProperty(SVGElement.prototype, 'getTotalLength', originalSvgGetTotalLength);
  } else {
    Reflect.deleteProperty(SVGElement.prototype, 'getTotalLength');
  }
});
