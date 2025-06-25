import { configureStore } from '@reduxjs/toolkit';
import { mouseClickAction, mouseClickMiddleware } from '../../src/state/mouseEventsMiddleware';
import { tooltipReducer, initialState } from '../../src/state/tooltipSlice';

describe('mouseEventsMiddleware gate logic', () => {
  it('should not activate tooltip if isClosing is true', () => {
    // Set up a minimal store with isClosing: true
    // @ts-expect-error Type instantiation is excessively deep and possibly infinite - known Redux Toolkit limitation in tests
    // See: https://github.com/reduxjs/reselect/issues/534
    const store = configureStore({
      reducer: { tooltip: tooltipReducer },
      preloadedState: { tooltip: { ...initialState, isClosing: true } },
      middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(mouseClickMiddleware.middleware),
    });

    // Create a minimal MousePointer mock
    const fakeEvent = {
      clientX: 0,
      clientY: 0,
      currentTarget: {
        getBoundingClientRect: () => ({
          x: 0,
          y: 0,
          left: 0,
          top: 0,
          width: 0,
          height: 0,
          bottom: 0,
          right: 0,
          toJSON: () => ({}),
        }),
        offsetHeight: 0,
        offsetWidth: 0,
      },
      preventDefault: () => {},
      stopPropagation: () => {},
    };

    // Dispatch the action
    store.dispatch(mouseClickAction(fakeEvent));

    // Verify tooltip state remains unchanged (no activation)
    const state = store.getState().tooltip;
    expect(state.itemInteraction.click.active).toBe(false);
    expect(state.axisInteraction.click.active).toBe(false);
  });
});
