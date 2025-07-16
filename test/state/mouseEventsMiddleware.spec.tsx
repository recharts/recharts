import { vi } from 'vitest';
import { applyMiddleware, createStore, Store } from '@reduxjs/toolkit';
import { tooltipReducer, TooltipState } from '../../src/state/tooltipSlice';
import { mouseClickAction, mouseClickMiddleware } from '../../src/state/mouseEventsMiddleware';
import * as chartPointerSelectors from '../../src/state/selectors/selectActivePropsFromChartPointer';
import { getChartPointer } from '../../src/util/getChartPointer';

vi.mock('../../src/util/getChartPointer');

// As tooltipInitialState is not exported, we create a mock for our tests.
const tooltipInitialState: TooltipState = {
  itemInteraction: {
    click: { active: false },
    hover: { active: false },
  },
  axisInteraction: {
    click: { active: false },
    hover: { active: false },
  },
} as TooltipState;

/**
 * Helper function to create a test store with the middleware.
 * We pass an initial state to simulate different scenarios.
 * @param {object} initialState - The initial state of the store.
 * @returns {object} The store.
 */
const setupTestStore = (initialState: { tooltip: TooltipState }) => {
  // Mock the part of the Redux store that this middleware depends on.
  // @ts-expect-error Type instantiation is excessively deep and possibly infinite - known Redux Toolkit limitation in tests
  // See: https://github.com/reduxjs/reselect/issues/534
  const store: Store<{ tooltip: TooltipState }> = createStore(
    // We only need the tooltip reducer for this test.
    (state, action) => ({
      tooltip: tooltipReducer(state.tooltip, action),
    }),
    initialState,
    applyMiddleware(mouseClickMiddleware.middleware),
  );
  return { store };
};

describe('mouseClickMiddleware', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(chartPointerSelectors, 'selectActivePropsFromChartPointer').mockReturnValue(null);
    vi.mocked(getChartPointer).mockReturnValue({ chartX: 10, chartY: 10 });
  });

  it('should clear the active click tooltip when a click happens on an empty chart area', () => {
    const preloadedState = {
      tooltip: {
        ...tooltipInitialState,
        axisInteraction: {
          ...tooltipInitialState.axisInteraction,
          click: {
            ...tooltipInitialState.axisInteraction.click,
            active: true,
          },
        },
      },
    };

    const { store } = setupTestStore(preloadedState);

    expect(store.getState().tooltip.axisInteraction.click.active).toBe(true);

    store.dispatch(mouseClickAction({ clientX: 10, clientY: 10 } as any));

    const finalState = store.getState();
    expect(finalState.tooltip.axisInteraction.click.active).toBe(false);
  });

  it('should NOT change tooltip state when clicking on an empty area if no click tooltip is active', () => {
    const preloadedState = {
      tooltip: tooltipInitialState,
    };

    const { store } = setupTestStore(preloadedState);
    const initialState = store.getState();

    store.dispatch(mouseClickAction({ clientX: 10, clientY: 10 } as any));

    const finalState = store.getState();
    expect(finalState.tooltip).toEqual(initialState.tooltip);
  });
});
