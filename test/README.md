# Recharts unit tests

This folder contains unit tests for Recharts. The tests are written using [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

## Best practices

When writing new code, aim for 100% unit test code coverage.

### `createSelectorTestCase`

When writing a new test or modifying an existing one, prefer to use the `createSelectorTestCase` helper function.

Here is an example usage:

```tsx
  const renderTestCase = createSelectorTestCase(({ children }) => <MyChart>{children}</MyChart>);
  const { spy, rerenderSameComponent } = renderTestCase(mySelector);
  expectLastCalledWith(spy, expectedValue);
```

Inspect some of the test files in the `test` folder for more examples.

### `expectLastCalledWith`

The `expectLastCalledWith` helper function is a thin wrapper around `expect(spy).toHaveBeenLastCalledWith(...)`
with better typing.

The usual `toHaveBeenLastCalledWith` matcher has `any` types for the arguments,
so you are not getting any type checking or autocompletion when using it.
Using `expectLastCalledWith` gives you proper types for the arguments, and allows you to catch mistakes at compile time.

### Count re-renders

When writing tests for selectors, it is often useful to verify how many times a selector was called.
This helps to spot unnecessary re-renders and improve performance.

Every time you use `createSelectorTestCase`, you get a `spy` object that you can use to verify the number of calls:

```ts
  const { spy, rerenderSameComponent } = renderTestCase(mySelector);
  expect(spy).toHaveBeenCalledTimes(1); // Initial render
  rerenderSameComponent();
  expect(spy).toHaveBeenCalledTimes(1); // No re-render
  rerenderSameComponent({ someProp: newValue });
  expect(spy).toHaveBeenCalledTimes(2); // Re-rendered due to prop change
```

## Special considerations for Recharts tests

Recharts has some more specialties that you need to be aware of when writing tests:

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

If you use the `createSelectorTestCase` helper from `test/helper/createSelectorTestCase.tsx`,
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

### Testing tooltips

When testing that tooltips appear on hover, you need to take into account
that the mouse move middleware is hidden behind requestAnimationFrame calls.
You can either use vi.runOnlyPendingTimers() after each userEvent.hover call,
or use `showTooltip` helper function exported from `tooltipTestHelpers.ts`.
