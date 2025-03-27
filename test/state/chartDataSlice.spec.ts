import { describe, it, expect } from 'vitest';

import { chartDataReducer, setChartData } from '../../src/state/chartDataSlice';

describe('chartDataSlice', () => {
  it('should start with undefined chartData', () => {
    const state = chartDataReducer(undefined, { type: 'unknown' });
    expect(state.chartData).toBeUndefined();
    expect(state.dataStartIndex).toBe(0);
    expect(state.dataEndIndex).toBe(0);
  });

  it('should set chartData array with start and end index', () => {
    const chartData = [{ value: 1 }, { value: 2 }, { value: 3 }];
    const action = setChartData(chartData);
    const state = chartDataReducer(undefined, action);
    expect(state.chartData).toBe(chartData);
    expect(state.dataStartIndex).toBe(0);
    expect(state.dataEndIndex).toBe(2);
  });

  it('should set empty array with start and end index', () => {
    const chartData: never[] = [];
    const action = setChartData(chartData);
    const state = chartDataReducer(undefined, action);
    expect(state.chartData).toBe(chartData);
    expect(state.dataStartIndex).toBe(0);
    expect(state.dataEndIndex).toBe(0);
  });

  it('should clear the state when set undefined', () => {
    const chartData = [{ value: 1 }, { value: 2 }, { value: 3 }];
    const action1 = setChartData(chartData);
    const state1 = chartDataReducer(undefined, action1);
    const action2 = setChartData(undefined);
    const state2 = chartDataReducer(state1, action2);
    expect(state2.chartData).toBeUndefined();
    expect(state2.dataStartIndex).toBe(0);
    expect(state2.dataEndIndex).toBe(0);
  });
});
