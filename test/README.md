## Recharts unit tests

This folder contains unit tests for Recharts. The tests are written using [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

Recharts has some specialties that you need to be aware of when writing tests:

### getBoundingClientRect dependency

Recharts internally uses `getBoundingClientRect` to determine the size of various things. This means that you need to mock `getBoundingClientRect` in your tests,
otherwise nothing renders and nothing happens. Tooltip, Legend, and the chart itself all depend on this.

We provide a helper function to do this in `test/helper/MockGetBoundingClientRect.ts`.

### All timers are mocked and everything uses timers

We're using Redux autoBatchEnhancer to batch state updates, which improves performance significantly.
The cost of that is dependency on timers, specifically `requestAnimationFrame`.

Unfortunately Redux reads the global `requestAnimationFrame` at the import time,
and keeps a reference to that, so by the time the test runs it is too late to mock anything.

Because of that, we're forced to use `vi.useFakeTimers()` in all tests. (This is done in `vitest.setup.ts`.)

This is fixed in Redux 2.4:
https://github.com/reduxjs/redux-toolkit/pull/4701
https://github.com/reduxjs/redux-toolkit/issues/4693

But because of React 16 support we're better off with Redux-toolkit 1.9 for now.

Usually this would not be a problem except because we use autobatcher which means that everything is behind a timer,
and all timers are mocked, so nothing happens until you advance the timers.

If you use the `createSelectorTest` helper from `test/util/CreateSelectorTest.ts`,
it will automatically advance timers for you after each render.

If not, then you need to do this yourself by calling `vi.runOnlyPendingTimers()`.
Note that if you call `vi.runAllTimers()` instead, you may end up in an infinite loop,
because some of those scheduled timers are going to schedule more timers.

### user event

Because of the timer mock as described above,
and because testing-library also uses timers internally,
you need to use `userEvent.setup({ advanceTimers: vi.runOnlyPendingTimers })`
when creating the userEvent instance.

You can also use the helper function `userEventSetup` from `test/helper/userEventSetup.ts` that does this for you.

https://github.com/testing-library/user-event/issues/1034
https://github.com/testing-library/react-testing-library/issues/1197
