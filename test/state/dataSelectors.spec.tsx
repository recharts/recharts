import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { useAppSelector } from '../../src/state/hooks';
import {
  selectAllDataSquished,
  selectAllGraphicalItemsData,
  selectChartDataWithIndexes,
} from '../../src/state/dataSelectors';
import { createRechartsStore } from '../../src/state/store';
import { Area, BarChart, Brush, ComposedChart, Customized, Line, LineChart, Pie, PieChart, Scatter } from '../../src';
import { PageData } from '../_data';
import { ChartDataState } from '../../src/state/chartDataSlice';
import { pageData } from '../../storybook/stories/data';
import { generateMockData } from '../helper/generateMockData';

describe('selectChartDataWithIndexes', () => {
  it('should return undefined when called outside of Redux context', () => {
    expect.assertions(1);
    const Comp = (): null => {
      const payload = useAppSelector(selectChartDataWithIndexes);
      expect(payload).toBe(undefined);
      return null;
    };
    render(<Comp />);
  });

  it('should return undefined for initial state', () => {
    const store = createRechartsStore();
    const expected: ChartDataState = { chartData: undefined, dataEndIndex: 0, dataStartIndex: 0 };
    expect(selectChartDataWithIndexes(store.getState())).toEqual(expected);
  });

  it('should return undefined in an empty chart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const tooltipData = useAppSelector(selectChartDataWithIndexes);
      spy(tooltipData);
      return null;
    };
    render(
      <BarChart width={100} height={100}>
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenCalledTimes(2);
    const expected: ChartDataState = { chartData: undefined, dataEndIndex: 0, dataStartIndex: 0 };
    expect(spy).toHaveBeenLastCalledWith(expected);
  });

  it('should return none of the data defined on graphical items', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const tooltipData = useAppSelector(selectChartDataWithIndexes);
      spy(tooltipData);
      return null;
    };
    render(
      <ComposedChart data={PageData} width={100} height={100}>
        <Area dataKey="" data={[1, 2, 3]} />
        <Area dataKey="" data={[10, 20, 30]} />
        <Line data={[4, 5, 6]} />
        <Line data={[40, 50, 60]} />
        <Scatter data={[7, 8, 9]} />
        <Scatter data={[70, 80, 90]} />
        <Customized component={Comp} />
      </ComposedChart>,
    );
    const expected: ChartDataState = { chartData: undefined, dataEndIndex: 0, dataStartIndex: 0 };
    expect(spy).toHaveBeenCalledWith(expected);
  });

  it('should return all data defined on the root chart element, and set default endIndex based on the data length', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const tooltipData = useAppSelector(selectChartDataWithIndexes);
      spy(tooltipData);
      return null;
    };
    render(
      <BarChart data={PageData} width={100} height={100}>
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(pageData.length).toBeGreaterThan(1);
    const expected: ChartDataState = { chartData: PageData, dataEndIndex: PageData.length - 1, dataStartIndex: 0 };
    expect(spy).toHaveBeenLastCalledWith(expected);
  });

  it('should return indexes from Brush element', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const tooltipData = useAppSelector(selectChartDataWithIndexes);
      spy(tooltipData);
      return null;
    };
    render(
      <BarChart data={PageData} width={100} height={100}>
        <Brush startIndex={3} endIndex={4} />
        <Customized component={Comp} />
      </BarChart>,
    );
    const expected: ChartDataState = { chartData: PageData, dataEndIndex: 4, dataStartIndex: 3 };
    expect(spy).toHaveBeenLastCalledWith(expected);
  });
});

describe('selectAllGraphicalItemsData', () => {
  it('should return undefined when called outside of Redux context', () => {
    expect.assertions(1);
    const Comp = (): null => {
      const payload = useAppSelector(selectAllGraphicalItemsData);
      expect(payload).toBe(undefined);
      return null;
    };
    render(<Comp />);
  });

  it('should return empty array for initial state', () => {
    const store = createRechartsStore();
    expect(selectAllGraphicalItemsData(store.getState())).toEqual([]);
  });

  it('should return empty array in an empty chart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const tooltipData = useAppSelector(selectAllGraphicalItemsData);
      spy(tooltipData);
      return null;
    };
    render(
      <BarChart data={PageData} width={100} height={100}>
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenLastCalledWith([]);
  });

  it('should return all tooltip payloads defined on graphical items', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const tooltipData = useAppSelector(selectAllGraphicalItemsData);
      spy(tooltipData);
      return null;
    };
    render(
      <ComposedChart data={PageData} width={100} height={100}>
        <Area dataKey="" data={[1, 2, 3]} />
        <Area dataKey="" data={[10, 20, 30]} />
        <Line data={[4, 5, 6]} />
        <Line data={[40, 50, 60]} />
        <Scatter data={[7, 8, 9]} />
        <Scatter data={[70, 80, 90]} />
        <Customized component={Comp} />
      </ComposedChart>,
    );
    // as opposed to the tooltip data selector - this one stores all original data without transformation.
    expect(spy).toHaveBeenLastCalledWith(
      expect.arrayContaining([
        [1, 2, 3],
        [10, 20, 30],
        [4, 5, 6],
        [40, 50, 60],
        [7, 8, 9],
        [70, 80, 90],
      ]),
    );
    expect(spy).toHaveBeenCalledTimes(3);
  });

  it('should return nothing for graphical items that do not have any explicit data prop on them', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const tooltipData = useAppSelector(selectAllGraphicalItemsData);
      spy(tooltipData);
      return null;
    };
    render(
      <ComposedChart data={PageData} width={100} height={100}>
        <Area dataKey="" />
        <Area dataKey="" data={[10, 20, 30]} />
        <Line />
        <Line data={[40, 50, 60]} />
        <Scatter />
        <Scatter data={[70, 80, 90]} />
        <Customized component={Comp} />
      </ComposedChart>,
    );
    // Scatter - surprises again - and provides empty array instead of proper undefined like the other elements!
    expect(spy).toHaveBeenLastCalledWith([undefined, [10, 20, 30], undefined, [40, 50, 60], [], [70, 80, 90]]);
  });

  it('should return all data defined on Pies', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const tooltipData = useAppSelector(selectAllGraphicalItemsData);
      spy(tooltipData);
      return null;
    };
    render(
      <PieChart width={100} height={100}>
        <Customized component={Comp} />
        <Pie data={[{ x: 1 }, { x: 2 }, { x: 3 }]} dataKey="x" />
        <Pie data={[{ y: 10 }, { y: 20 }, { y: 30 }]} dataKey="y" />
      </PieChart>,
    );
    /*
     * okay Pie surprises again - it adds ton of extra other properties to the original array
     * and then it pretends it was there from the start.
     * Well in this test let's pretend that's not happening and assume it provides the original array instead.
     */
    expect(spy).toHaveBeenLastCalledWith(
      expect.arrayContaining([
        [expect.objectContaining({ x: 1 }), expect.objectContaining({ x: 2 }), expect.objectContaining({ x: 3 })],
        [expect.objectContaining({ y: 10 }), expect.objectContaining({ y: 20 }), expect.objectContaining({ y: 30 })],
      ]),
    );
  });
});

describe('selectAllDataSquished', () => {
  const mockData = generateMockData(10, 982347);
  const data1 = mockData.slice(0, 5);
  const data2 = mockData.slice(5);
  it('should return undefined when called outside of Redux context', () => {
    expect.assertions(1);
    const Comp = (): null => {
      const result = useAppSelector(state => selectAllDataSquished(state, 'x'));
      expect(result).toBe(undefined);
      return null;
    };
    render(<Comp />);
  });

  it('should return empty array for initial state', () => {
    const store = createRechartsStore();
    expect(selectAllDataSquished(store.getState(), 'x')).toEqual([]);
  });

  it('should return empty array in an empty chart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectAllDataSquished(state, 'x'));
      spy(result);
      return null;
    };
    render(
      <BarChart width={100} height={100}>
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenLastCalledWith([]);
  });

  it('should return data defined in all graphical items based on the input dataKey', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectAllDataSquished(state, 'x'));
      spy(result);
      return null;
    };
    render(
      <LineChart width={100} height={100}>
        <Line data={data1} />
        <Line data={data2} />
        <Customized component={Comp} />
      </LineChart>,
    );
    expect(spy).toHaveBeenLastCalledWith([211, 245, 266, 140, 131, 280, 294, 239, 293, 244]);
    expect(spy).toHaveBeenCalledTimes(3);
  });

  it('should return different data with different dataKey', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectAllDataSquished(state, 'y'));
      spy(result);
      return null;
    };
    render(
      <LineChart width={100} height={100}>
        <Line data={data1} />
        <Line data={data2} />
        <Customized component={Comp} />
      </LineChart>,
    );
    expect(spy).toHaveBeenLastCalledWith([481, 672, 721, 446, 598, 774, 687, 762, 439, 569]);
    expect(spy).toHaveBeenCalledTimes(3);
  });

  it('should return data defined in the chart root, with one undefined from the empty Line', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectAllDataSquished(state, 'x'));
      spy(result);
      return null;
    };
    render(
      <LineChart data={data1} width={100} height={100}>
        <Line />
        <Customized component={Comp} />
      </LineChart>,
    );
    expect(spy).toHaveBeenLastCalledWith([undefined, 211, 245, 266, 140, 131]);
    expect(spy).toHaveBeenCalledTimes(3);
  });

  it('should return array full of undefined when the dataKey does not match anything in the data', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const result = useAppSelector(state => selectAllDataSquished(state, 'invalid datakey'));
      spy(result);
      return null;
    };
    render(
      <LineChart data={data1} width={100} height={100}>
        <Line />
        <Customized component={Comp} />
      </LineChart>,
    );
    expect(spy).toHaveBeenLastCalledWith([undefined, undefined, undefined, undefined, undefined, undefined]);
    expect(spy).toHaveBeenCalledTimes(3);
  });
});