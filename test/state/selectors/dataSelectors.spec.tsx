import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { createSelector } from 'reselect';
import {
  selectChartDataAndAlwaysIgnoreIndexes,
  selectChartDataSliceIgnoringIndexes,
  selectChartDataSliceWithIndexes,
  selectChartDataWithIndexes,
  selectChartDataWithIndexesIfNotInPanoramaPosition3,
  selectChartDataWithIndexesIfNotInPanoramaPosition4,
} from '../../../src/state/selectors/dataSelectors';
import { Area, BarChart, Brush, ComposedChart, Line, Scatter } from '../../../src';
import { PageData } from '../../_data';
import {
  ChartDataState,
  setChartData,
  setComputedData,
  setDataStartEndIndexes,
} from '../../../src/state/chartDataSlice';
import { createRechartsStore } from '../../../src/state/store';
import { pageData } from '../../../storybook/stories/data';
import {
  shouldReturnFromInitialState,
  shouldReturnUndefinedOutOfContext,
  useAppSelectorWithStableTest,
} from '../../helper/selectorTestHelpers';
import { expectLastCalledWith } from '../../helper/expectLastCalledWith';

describe('selectChartDataAndAlwaysIgnoreIndexes', () => {
  it('keeps full-history results stable across brush updates while updating the selected slice', () => {
    const store = createRechartsStore();
    const data = Array.from({ length: 30 }, (_, value) => ({ value }));
    const computedData = { nodes: [] };
    store.dispatch(setChartData(data));
    store.dispatch(setComputedData(computedData));
    const initial = selectChartDataAndAlwaysIgnoreIndexes(store.getState());
    const fullSlice = selectChartDataSliceIgnoringIndexes(store.getState());
    const downstream = createSelector([selectChartDataAndAlwaysIgnoreIndexes], state => state.chartData);
    downstream(store.getState());

    for (let startIndex = 1; startIndex <= 20; startIndex++) {
      store.dispatch(setDataStartEndIndexes({ startIndex, endIndex: 28 }));
      downstream(store.getState());
    }

    const state = store.getState();
    expect(selectChartDataSliceWithIndexes(state)).toEqual(data.slice(20, 29));
    expect(selectChartDataWithIndexesIfNotInPanoramaPosition3(state, undefined, false)).toBe(state.chartData);
    expect(selectChartDataWithIndexesIfNotInPanoramaPosition4(state, undefined, undefined, false)).toBe(
      state.chartData,
    );
    expect(downstream.recomputations()).toBe(1);
    expect(selectChartDataAndAlwaysIgnoreIndexes(state)).toBe(initial);
    expect(selectChartDataSliceIgnoringIndexes(state)).toBe(fullSlice);
    expect(selectChartDataWithIndexesIfNotInPanoramaPosition3(state, undefined, true)).toBe(initial);
    expect(selectChartDataWithIndexesIfNotInPanoramaPosition4(state, undefined, undefined, true)).toBe(initial);
    expect(initial).toEqual({ chartData: data, computedData, dataStartIndex: 0, dataEndIndex: 29 });
  });

  it('updates when chart data is replaced, including a replacement of the same length', () => {
    const store = createRechartsStore();
    const data = [{ value: 1 }, { value: 2 }];
    store.dispatch(setChartData(data));
    const initial = selectChartDataAndAlwaysIgnoreIndexes(store.getState());
    const replacement = [{ value: 3 }, { value: 4 }];
    store.dispatch(setChartData(replacement));
    const next = selectChartDataAndAlwaysIgnoreIndexes(store.getState());
    expect(next).not.toBe(initial);
    expect(next.chartData).toBe(replacement);
    expect(next.dataEndIndex).toBe(1);

    store.dispatch(setChartData([replacement[0]]));
    expect(selectChartDataAndAlwaysIgnoreIndexes(store.getState()).dataEndIndex).toBe(0);
  });

  it('updates when computed data changes without changing chart data', () => {
    const store = createRechartsStore();
    store.dispatch(setChartData([{ value: 1 }]));
    const initial = selectChartDataAndAlwaysIgnoreIndexes(store.getState());
    const computedData = { nodes: [{ value: 2 }] };
    store.dispatch(setComputedData(computedData));
    const next = selectChartDataAndAlwaysIgnoreIndexes(store.getState());
    expect(next).not.toBe(initial);
    expect(next.chartData).toBe(initial.chartData);
    expect(next.computedData).toBe(computedData);

    store.dispatch(setComputedData(undefined));
    expect(selectChartDataAndAlwaysIgnoreIndexes(store.getState()).computedData).toBeUndefined();
  });

  it('preserves the existing full-range bounds for missing and empty data', () => {
    const store = createRechartsStore();
    expect(selectChartDataAndAlwaysIgnoreIndexes(store.getState())).toEqual({
      chartData: undefined,
      computedData: undefined,
      dataStartIndex: 0,
      dataEndIndex: 0,
    });
    store.dispatch(setChartData([]));
    expect(selectChartDataAndAlwaysIgnoreIndexes(store.getState())).toEqual({
      chartData: [],
      computedData: undefined,
      dataStartIndex: 0,
      dataEndIndex: -1,
    });
    store.dispatch(setChartData(undefined));
    expect(selectChartDataAndAlwaysIgnoreIndexes(store.getState()).dataEndIndex).toBe(0);
  });
});

describe('selectChartDataWithIndexes', () => {
  shouldReturnUndefinedOutOfContext(selectChartDataWithIndexes);
  shouldReturnFromInitialState(selectChartDataWithIndexes, {
    chartData: undefined,
    dataEndIndex: 0,
    dataStartIndex: 0,
    computedData: undefined,
  });

  it('should return undefined in an empty chart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const tooltipData = useAppSelectorWithStableTest(selectChartDataWithIndexes);
      spy(tooltipData);
      return null;
    };
    render(
      <BarChart width={100} height={100}>
        <Comp />
      </BarChart>,
    );
    expect(spy).toHaveBeenCalledTimes(1);
    const expected: ChartDataState = {
      chartData: undefined,
      dataEndIndex: 0,
      dataStartIndex: 0,
      computedData: undefined,
    };
    expectLastCalledWith(spy, expected);
  });

  it('should return none of the data defined on graphical items', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const tooltipData = useAppSelectorWithStableTest(selectChartDataWithIndexes);
      spy(tooltipData);
      return null;
    };
    const data1 = [{ x: 1 }, { x: 2 }, { x: 3 }];
    const data2 = [{ x: 10 }, { x: 20 }, { x: 30 }];
    render(
      <ComposedChart data={PageData} width={100} height={100}>
        <Area dataKey="x" data={data1} />
        <Area dataKey="x" data={data2} />
        <Line data={[4, 5, 6]} />
        <Line data={[40, 50, 60]} />
        <Scatter data={[7, 8, 9]} />
        <Scatter data={[70, 80, 90]} />
        <Comp />
      </ComposedChart>,
    );
    const expected: ChartDataState = {
      chartData: PageData,
      dataStartIndex: 0,
      dataEndIndex: 5,
      computedData: undefined,
    };
    expect(spy).toHaveBeenCalledWith(expected);
  });

  it('should return all data defined on the root chart element, and set default endIndex based on the data length', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const tooltipData = useAppSelectorWithStableTest(selectChartDataWithIndexes);
      spy(tooltipData);
      return null;
    };
    render(
      <BarChart data={PageData} width={100} height={100}>
        <Comp />
      </BarChart>,
    );
    expect(pageData.length).toBeGreaterThan(1);
    const expected: ChartDataState = {
      chartData: PageData,
      dataEndIndex: PageData.length - 1,
      dataStartIndex: 0,
      computedData: undefined,
    };
    expectLastCalledWith(spy, expected);
  });

  it('should return indexes from Brush element', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const tooltipData = useAppSelectorWithStableTest(selectChartDataWithIndexes);
      spy(tooltipData);
      return null;
    };
    render(
      <BarChart data={PageData} width={100} height={100}>
        <Brush startIndex={3} endIndex={4} />
        <Comp />
      </BarChart>,
    );
    const expected: ChartDataState = {
      chartData: PageData,
      dataEndIndex: 4,
      dataStartIndex: 3,
      computedData: undefined,
    };
    expectLastCalledWith(spy, expected);
  });
});
