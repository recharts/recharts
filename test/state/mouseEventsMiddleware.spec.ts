import { configureStore } from '@reduxjs/toolkit';
import { vi } from 'vitest';
import {
  mouseClickAction,
  mouseClickMiddleware,
  mouseMoveAction,
  mouseMoveMiddleware,
} from '../../src/state/mouseEventsMiddleware';
import { tooltipReducer, initialState } from '../../src/state/tooltipSlice';

// Mock the selectors and utilities
vi.mock('../../src/state/selectors/selectActivePropsFromChartPointer');
vi.mock('../../src/state/selectors/selectTooltipEventType');
vi.mock('../../src/util/getChartPointer');

describe('mouseEventsMiddleware', () => {
  let store: any;

  beforeEach(() => {
    // Reset all mocks
    vi.clearAllMocks();
  });

  const createMinimalStore = (preloadedState = {}) => {
    // @ts-expect-error Type instantiation is excessively deep and possibly infinite - known Redux Toolkit limitation in tests
    // See: https://github.com/reduxjs/reselect/issues/534
    return configureStore({
      reducer: { tooltip: tooltipReducer },
      preloadedState: { tooltip: { ...initialState, ...preloadedState } },
      middleware: getDefaultMiddleware =>
        getDefaultMiddleware().prepend(mouseClickMiddleware.middleware).prepend(mouseMoveMiddleware.middleware),
    });
  };

  const createFakeMouseEvent = () => ({
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
  });

  describe('mouseClickMiddleware gate logic', () => {
    it('should not activate tooltip if isClosing is true', () => {
      store = createMinimalStore({ isClosing: true });

      store.dispatch(mouseClickAction(createFakeMouseEvent()));

      const state = store.getState().tooltip;
      expect(state.itemInteraction.click.active).toBe(false);
      expect(state.axisInteraction.click.active).toBe(false);
    });

    it('should activate axis tooltip when clicking on valid axis area', async () => {
      store = createMinimalStore();

      // Mock the selector to return valid active props
      const mockSelectActivePropsFromChartPointer = vi.mocked(
        await import('../../src/state/selectors/selectActivePropsFromChartPointer'),
      ).selectActivePropsFromChartPointer;
      mockSelectActivePropsFromChartPointer.mockReturnValue({
        activeIndex: '1',
        activeCoordinate: { x: 100, y: 200 },
      });

      store.dispatch(mouseClickAction(createFakeMouseEvent()));

      const state = store.getState().tooltip;
      expect(state.axisInteraction.click.active).toBe(true);
      expect(state.axisInteraction.click.index).toBe('1');
      expect(state.axisInteraction.click.coordinate).toEqual({ x: 100, y: 200 });
    });

    it('should clear axis click tooltip when clicking on empty chart area with axis tooltip active', async () => {
      store = createMinimalStore({
        axisInteraction: {
          click: { active: true, index: '1', dataKey: undefined, coordinate: { x: 100, y: 200 } },
          hover: { active: false, index: null, dataKey: undefined, coordinate: undefined },
        },
      });

      const mockSelectActivePropsFromChartPointer = vi.mocked(
        await import('../../src/state/selectors/selectActivePropsFromChartPointer'),
      ).selectActivePropsFromChartPointer;
      mockSelectActivePropsFromChartPointer.mockReturnValue(null);

      store.dispatch(mouseClickAction(createFakeMouseEvent()));

      const state = store.getState().tooltip;
      expect(state.axisInteraction.click.active).toBe(false);
    });

    it('should not clear item click tooltip when clicking on empty chart area with item tooltip active', async () => {
      store = createMinimalStore({
        itemInteraction: {
          click: { active: true, index: '1', dataKey: 'value', coordinate: { x: 100, y: 200 } },
          hover: { active: false, index: null, dataKey: undefined, coordinate: undefined },
        },
      });

      const mockSelectActivePropsFromChartPointer = vi.mocked(
        await import('../../src/state/selectors/selectActivePropsFromChartPointer'),
      ).selectActivePropsFromChartPointer;
      mockSelectActivePropsFromChartPointer.mockReturnValue(null);

      store.dispatch(mouseClickAction(createFakeMouseEvent()));

      const state = store.getState().tooltip;
      expect(state.itemInteraction.click.active).toBe(true);
    });

    it('should not clear tooltips when no click tooltip is active', async () => {
      store = createMinimalStore();

      const mockSelectActivePropsFromChartPointer = vi.mocked(
        await import('../../src/state/selectors/selectActivePropsFromChartPointer'),
      ).selectActivePropsFromChartPointer;
      mockSelectActivePropsFromChartPointer.mockReturnValue(null);

      store.dispatch(mouseClickAction(createFakeMouseEvent()));

      const state = store.getState().tooltip;
      expect(state.itemInteraction.click.active).toBe(false);
      expect(state.axisInteraction.click.active).toBe(false);
    });
  });

  describe('mouseMoveMiddleware', () => {
    it('should activate axis tooltip on mouse move when tooltipEventType is axis and activeProps exists', async () => {
      store = createMinimalStore();

      const mockSelectTooltipEventType = vi.mocked(
        await import('../../src/state/selectors/selectTooltipEventType'),
      ).selectTooltipEventType;
      const mockSelectActivePropsFromChartPointer = vi.mocked(
        await import('../../src/state/selectors/selectActivePropsFromChartPointer'),
      ).selectActivePropsFromChartPointer;

      mockSelectTooltipEventType.mockReturnValue('axis');
      mockSelectActivePropsFromChartPointer.mockReturnValue({
        activeIndex: '2',
        activeCoordinate: { x: 150, y: 250 },
      });

      store.dispatch(mouseMoveAction(createFakeMouseEvent()));

      const state = store.getState().tooltip;
      expect(state.axisInteraction.hover.active).toBe(true);
      expect(state.axisInteraction.hover.index).toBe('2');
      expect(state.axisInteraction.hover.coordinate).toEqual({ x: 150, y: 250 });
    });

    it('should clear tooltip on mouse move when tooltipEventType is axis but no activeProps', async () => {
      store = createMinimalStore({
        axisInteraction: {
          hover: { active: true, index: '1', dataKey: undefined, coordinate: { x: 100, y: 200 } },
          click: { active: false, index: null, dataKey: undefined, coordinate: undefined },
        },
      });

      const mockSelectTooltipEventType = vi.mocked(
        await import('../../src/state/selectors/selectTooltipEventType'),
      ).selectTooltipEventType;
      const mockSelectActivePropsFromChartPointer = vi.mocked(
        await import('../../src/state/selectors/selectActivePropsFromChartPointer'),
      ).selectActivePropsFromChartPointer;

      mockSelectTooltipEventType.mockReturnValue('axis');
      mockSelectActivePropsFromChartPointer.mockReturnValue(null);

      store.dispatch(mouseMoveAction(createFakeMouseEvent()));

      const state = store.getState().tooltip;
      expect(state.axisInteraction.hover.active).toBe(false);
    });

    it('should not process mouse move when tooltipEventType is not axis', async () => {
      store = createMinimalStore({
        axisInteraction: {
          hover: { active: true, index: '1', dataKey: undefined, coordinate: { x: 100, y: 200 } },
          click: { active: false, index: null, dataKey: undefined, coordinate: undefined },
        },
      });

      const mockSelectTooltipEventType = vi.mocked(
        await import('../../src/state/selectors/selectTooltipEventType'),
      ).selectTooltipEventType;
      mockSelectTooltipEventType.mockReturnValue('item');

      store.dispatch(mouseMoveAction(createFakeMouseEvent()));

      const state = store.getState().tooltip;
      expect(state.axisInteraction.hover.active).toBe(true); // Should remain unchanged
    });
  });
});
