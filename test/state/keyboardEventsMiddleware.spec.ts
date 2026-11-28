import { beforeEach, describe, expect, it } from 'vitest';
import { createRechartsStore } from '../../src/state/store';
import {
  keyDownAction,
  selectKeyboardIndexCount,
  selectTickPositionOfEntry,
} from '../../src/state/keyboardEventsMiddleware';
import { addCartesianGraphicalItem, replaceCartesianGraphicalItem } from '../../src/state/graphicalItemsSlice';
import {
  addTooltipEntrySettings,
  setKeyboardInteraction,
  TooltipPayloadConfiguration,
} from '../../src/state/tooltipSlice';
import { setChartData } from '../../src/state/chartDataSlice';
import { ChartOptions } from '../../src/state/optionsSlice';
import { BarSettings } from '../../src/state/types/BarSettings';
import { TickItem } from '../../src/util/types';

const dataOnEachItem = [
  [
    { name: 'A', uv: 1 },
    { name: 'B', uv: 2 },
  ],
  [
    { name: 'A', pv: 3 },
    { name: 'B', pv: 4 },
  ],
];

function barSettings(id: string, dataKey: string, data: ReadonlyArray<unknown> | undefined): BarSettings {
  return {
    id,
    isPanorama: false,
    type: 'bar',
    hide: false,
    stackId: undefined,
    dataKey,
    data,
    xAxisId: 0,
    yAxisId: 0,
    zAxisId: 0,
    maxBarSize: undefined,
    minPointSize: 0,
    barSize: undefined,
    hasCustomShape: false,
    strokeWidth: undefined,
  };
}

function tooltipEntry(id: string, dataKey: string): TooltipPayloadConfiguration {
  return {
    dataDefinedOnItem: undefined,
    getPosition: () => undefined,
    settings: {
      graphicalItemId: id,
      dataKey,
      nameKey: undefined,
    },
  };
}

function itemTooltipOptions(): ChartOptions {
  return {
    chartName: 'Chart',
    tooltipPayloadSearcher: () => undefined,
    eventEmitter: undefined,
    defaultTooltipEventType: 'item',
    validateTooltipEventTypes: ['axis', 'item'],
  };
}

function createStoreWithTwoBars(dataOnItems: boolean) {
  const store = createRechartsStore({ options: itemTooltipOptions() });
  dataOnEachItem.forEach((data, i) => {
    const id = `bar-${i}`;
    const dataKey = i === 0 ? 'uv' : 'pv';
    store.dispatch(addCartesianGraphicalItem(barSettings(id, dataKey, dataOnItems ? data : undefined)));
    store.dispatch(addTooltipEntrySettings(tooltipEntry(id, dataKey)));
  });
  if (!dataOnItems) {
    store.dispatch(
      setChartData([
        { name: 'A', uv: 1, pv: 3 },
        { name: 'B', uv: 2, pv: 4 },
        { name: 'C', uv: 5, pv: 6 },
      ]),
    );
  }
  return store;
}

describe('keyboardEventsMiddleware', () => {
  describe('with an item tooltip and the data on the graphical items', () => {
    let store: ReturnType<typeof createRechartsStore>;

    beforeEach(() => {
      store = createStoreWithTwoBars(true);
    });

    it('steps through the entries of the first item only', () => {
      store.dispatch(setKeyboardInteraction({ active: true, activeIndex: '1', activeCoordinate: undefined }));

      store.dispatch(keyDownAction('ArrowRight'));
      expect(store.getState().tooltip.keyboardInteraction.index).toBe('1');

      store.dispatch(keyDownAction('ArrowLeft'));
      expect(store.getState().tooltip.keyboardInteraction.index).toBe('0');

      store.dispatch(keyDownAction('ArrowLeft'));
      expect(store.getState().tooltip.keyboardInteraction.index).toBe('0');
    });

    it('counts the entries of the first item, not the rows of all items', () => {
      const state = store.getState();
      expect(selectKeyboardIndexCount(state, 'item', undefined, new Array(4).fill({}))).toBe(2);
    });

    it('leaves an index beyond the entries of the first item with either arrow', () => {
      const shrinking = createRechartsStore({ options: itemTooltipOptions() });
      const first = barSettings('bar-0', 'uv', [{ name: 'A' }, { name: 'B' }, { name: 'C' }]);
      shrinking.dispatch(addCartesianGraphicalItem(first));
      shrinking.dispatch(addTooltipEntrySettings(tooltipEntry('bar-0', 'uv')));
      shrinking.dispatch(
        addCartesianGraphicalItem(
          barSettings('bar-1', 'pv', [{ name: 'A' }, { name: 'B' }, { name: 'C' }, { name: 'D' }, { name: 'E' }]),
        ),
      );
      shrinking.dispatch(addTooltipEntrySettings(tooltipEntry('bar-1', 'pv')));
      shrinking.dispatch(setKeyboardInteraction({ active: true, activeIndex: '2', activeCoordinate: undefined }));

      // The first item keeps one entry; the displayed data still has the rows of both items, so the index 2 is kept.
      shrinking.dispatch(
        replaceCartesianGraphicalItem({ prev: first, next: barSettings('bar-0', 'uv', [{ name: 'A' }]) }),
      );

      shrinking.dispatch(keyDownAction('ArrowRight'));
      expect(shrinking.getState().tooltip.keyboardInteraction.index).toBe('0');

      shrinking.dispatch(setKeyboardInteraction({ active: true, activeIndex: '2', activeCoordinate: undefined }));
      shrinking.dispatch(keyDownAction('ArrowLeft'));
      expect(shrinking.getState().tooltip.keyboardInteraction.index).toBe('0');
    });
  });

  describe('with an item tooltip and the data on the chart', () => {
    let store: ReturnType<typeof createRechartsStore>;

    beforeEach(() => {
      store = createStoreWithTwoBars(false);
    });

    it('steps through the rows of the chart data', () => {
      store.dispatch(setKeyboardInteraction({ active: true, activeIndex: '1', activeCoordinate: undefined }));

      store.dispatch(keyDownAction('ArrowRight'));
      expect(store.getState().tooltip.keyboardInteraction.index).toBe('2');

      store.dispatch(keyDownAction('ArrowRight'));
      expect(store.getState().tooltip.keyboardInteraction.index).toBe('2');
    });
  });

  describe('selectKeyboardIndexCount', () => {
    const ticks: ReadonlyArray<TickItem> = [
      { value: 'A', coordinate: 10, index: 0 },
      { value: 'B', coordinate: 20, index: 1 },
    ];
    const displayedData = new Array(4).fill({});

    it('counts the ticks for an axis interaction', () => {
      const store = createStoreWithTwoBars(true);
      expect(selectKeyboardIndexCount(store.getState(), 'axis', ticks, displayedData)).toBe(2);
    });

    it('counts the rows of the displayed data for an axis interaction without ticks', () => {
      const store = createStoreWithTwoBars(true);
      expect(selectKeyboardIndexCount(store.getState(), 'axis', undefined, displayedData)).toBe(4);
      expect(selectKeyboardIndexCount(store.getState(), 'axis', [], displayedData)).toBe(4);
    });

    it('counts the rows of the displayed data for an item interaction without a tooltip item of its own', () => {
      const store = createRechartsStore({ options: itemTooltipOptions() });
      expect(selectKeyboardIndexCount(store.getState(), 'item', ticks, displayedData)).toBe(4);
    });
  });

  describe('selectTickPositionOfEntry', () => {
    const rows = [
      { name: 'A', uv: 1 },
      { name: 'A', uv: 2 },
      { name: 'B', uv: 3 },
    ];
    const ticksOf = (values: ReadonlyArray<unknown>): ReadonlyArray<TickItem> =>
      values.map((value, index) => ({ value, coordinate: index * 10, index }));

    it('is the position of the entry while every entry has its own tick', () => {
      const ticks = ticksOf(['A', 'A', 'B']);
      expect(selectTickPositionOfEntry(0, rows, ticks, 'name')).toBe(0);
      expect(selectTickPositionOfEntry(1, rows, ticks, 'name')).toBe(1);
      expect(selectTickPositionOfEntry(2, rows, ticks, 'name')).toBe(2);
    });

    it('is the tick of the category where the ticks leave out the repeats of a category', () => {
      const ticks = ticksOf(['A', 'B']);
      expect(selectTickPositionOfEntry(0, rows, ticks, 'name')).toBe(0);
      expect(selectTickPositionOfEntry(1, rows, ticks, 'name')).toBe(0);
      expect(selectTickPositionOfEntry(2, rows, ticks, 'name')).toBe(1);
    });

    it('is the position of the entry where the ticks are the nice numbers of a numeric axis', () => {
      const ticks = ticksOf([0, 2, 4, 6]);
      const points = [
        { x: 1, y: 1 },
        { x: 3, y: 2 },
        { x: 5, y: 3 },
      ];
      expect(selectTickPositionOfEntry(0, points, ticks, 'x')).toBe(0);
      expect(selectTickPositionOfEntry(2, points, ticks, 'x')).toBe(2);
    });

    it('is the position of the entry where there are no ticks', () => {
      expect(selectTickPositionOfEntry(1, rows, undefined, 'name')).toBe(1);
      expect(selectTickPositionOfEntry(1, rows, [], 'name')).toBe(1);
    });

    it('is none where the ticks neither place the entry nor carry its category', () => {
      expect(selectTickPositionOfEntry(2, rows, ticksOf(['A']), 'name')).toBe(-1);
      expect(selectTickPositionOfEntry(2, rows, ticksOf(['A', 'B']), undefined)).toBe(-1);
    });
  });
});
