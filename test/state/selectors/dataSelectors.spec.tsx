import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { selectChartDataWithIndexes } from '../../../src/state/selectors/dataSelectors';
import { Area, BarChart, Brush, ComposedChart, Customized, Line, Scatter } from '../../../src';
import { PageData } from '../../_data';
import { ChartDataState } from '../../../src/state/chartDataSlice';
import { pageData } from '../../../storybook/stories/data';
import {
  shouldReturnFromInitialState,
  shouldReturnUndefinedOutOfContext,
  useAppSelectorWithStableTest,
} from '../../helper/selectorTestHelpers';

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
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(spy).toHaveBeenCalledTimes(1);
    const expected: ChartDataState = {
      chartData: undefined,
      dataEndIndex: 0,
      dataStartIndex: 0,
      computedData: undefined,
    };
    expect(spy).toHaveBeenLastCalledWith(expected);
  });

  it('should return none of the data defined on graphical items', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const tooltipData = useAppSelectorWithStableTest(selectChartDataWithIndexes);
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
        <Customized component={Comp} />
      </BarChart>,
    );
    expect(pageData.length).toBeGreaterThan(1);
    const expected: ChartDataState = {
      chartData: PageData,
      dataEndIndex: PageData.length - 1,
      dataStartIndex: 0,
      computedData: undefined,
    };
    expect(spy).toHaveBeenLastCalledWith(expected);
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
        <Customized component={Comp} />
      </BarChart>,
    );
    const expected: ChartDataState = {
      chartData: PageData,
      dataEndIndex: 4,
      dataStartIndex: 3,
      computedData: undefined,
    };
    expect(spy).toHaveBeenLastCalledWith(expected);
  });
});
