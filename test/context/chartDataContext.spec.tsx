import React, { ComponentType } from 'react';
import { render } from '@testing-library/react';
import { CategoricalChartState } from '../../src/chart/types';
import { useDisplayedChartData, ChartDataContextProvider } from '../../src/context/chartDataContext';
import { ChartLayoutContextProvider, ChartLayoutContextProviderProps } from '../../src/context/chartLayoutContext';

const minimalState: CategoricalChartState = {
  offset: {},
};
const mockContextProviderProps: ChartLayoutContextProviderProps = {
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
  state: minimalState,
  clipPathId: 'my mock ID',
  width: 100,
  height: 100,
  children: <div />,
  layout: 'horizontal',
};

describe('chartDataContext', () => {
  it('should get all data when there are no indices', () => {
    expect.assertions(1);
    const MockConsumer: ComponentType = () => {
      const data = useDisplayedChartData();
      expect(data).toEqual([{ test: 'hello' }, { test: 'world' }]);
      return null;
    };
    render(
      <ChartDataContextProvider value={[{ test: 'hello' }, { test: 'world' }]}>
        <ChartLayoutContextProvider {...mockContextProviderProps} state={minimalState}>
          <MockConsumer />
        </ChartLayoutContextProvider>
      </ChartDataContextProvider>,
    );
  });

  it('should get all data when there are no indices', () => {
    expect.assertions(1);
    const MockConsumer: ComponentType = () => {
      const data = useDisplayedChartData();
      expect(data).toEqual([{ test: 'world' }]);
      return null;
    };
    render(
      <ChartDataContextProvider value={[{ test: 'hello' }, { test: 'world' }]}>
        <ChartLayoutContextProvider
          {...mockContextProviderProps}
          state={{ ...minimalState, dataStartIndex: 1, dataEndIndex: 2 }}
        >
          <MockConsumer />
        </ChartLayoutContextProvider>
      </ChartDataContextProvider>,
    );
  });
});
