import userEvent from '@testing-library/user-event';

/**
 * We have to mock all timers because we're using Redux action batching
 * which depends on requestAnimationFrame to flush all queued actions.
 *
 * React-testing-library's userEvent needs to be aware of the mocked timers
 * because it too internally uses setTimeout for some of its operations.
 *
 * See:
 * https://testing-library.com/docs/user-event/options/#advancetimers
 */
export function userEventSetup() {
  return userEvent.setup({
    advanceTimers: vi.advanceTimersByTime,
  });
}
