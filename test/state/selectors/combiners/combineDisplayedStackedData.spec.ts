import { describe, it, expect } from 'vitest';
import { combineDisplayedStackedData } from '../../../../src/state/selectors/combiners/combineDisplayedStackedData';
import { GraphicalItemSettings } from '../../../../src/state/graphicalItemsSlice';
import { ChartDataState } from '../../../../src/state/chartDataSlice';
import { BaseCartesianAxis } from '../../../../src/state/cartesianAxisSlice';

const emptyAxisSettings: BaseCartesianAxis = {
  type: 'number',
  id: 'emptyAxis',
  domain: [],
  dataKey: null,
  scale: 'sequential',
  unit: '',
  name: '',
  allowDuplicatedCategory: false,
  allowDataOverflow: false,
  reversed: false,
  includeHidden: false,
};

function createMockBaseCartesianAxis(partialBaseAxis: Partial<BaseCartesianAxis>): BaseCartesianAxis {
  return {
    ...emptyAxisSettings,
    ...partialBaseAxis,
  };
}

describe('combineDisplayedStackedData', () => {
  const emptyChartDataState: ChartDataState = {
    chartData: [],
    dataStartIndex: 0,
    dataEndIndex: 0,
    computedData: undefined,
  };

  it('should return empty array when no cartesian items are provided', () => {
    const result = combineDisplayedStackedData([], emptyChartDataState, createMockBaseCartesianAxis({ dataKey: null }));
    expect(result).toEqual([]);
  });

  it('should stack data points by stack identifier', () => {
    const cartesianItems: ReadonlyArray<GraphicalItemSettings> = [
      {
        data: [
          { value: 10, name: 'a' },
          { value: 20, name: 'b' },
        ],
        id: 'id1',
        dataKey: 'value',
        hide: false,
        stackId: 'a',
        barSize: '',
      },
      {
        data: [
          { value: 30, name: 'a' },
          { value: 40, name: 'b' },
        ],
        id: 'id2',
        dataKey: 'value',
        hide: false,
        stackId: 'a',
        barSize: '',
      },
    ];

    const result = combineDisplayedStackedData(
      cartesianItems,
      emptyChartDataState,
      createMockBaseCartesianAxis({ dataKey: 'name' }),
    );

    expect(result).toEqual([
      { id1: 10, id2: 30 },
      { id1: 20, id2: 40 },
    ]);
  });

  it('should ignore stackIds because another selected down the road handles that', () => {
    const cartesianItems: ReadonlyArray<GraphicalItemSettings> = [
      {
        data: [
          { value: 10, name: 'a' },
          { value: 20, name: 'b' },
        ],
        id: 'id1',
        dataKey: 'value',
        hide: false,
        stackId: 'a',
        barSize: '',
      },
      {
        data: [
          { value: 30, name: 'a' },
          { value: 40, name: 'b' },
        ],
        id: 'id2',
        dataKey: 'value',
        hide: false,
        stackId: 'b',
        barSize: '',
      },
    ];

    const result = combineDisplayedStackedData(
      cartesianItems,
      emptyChartDataState,
      createMockBaseCartesianAxis({ dataKey: 'name' }),
    );

    // merged anyway, stackId will be figured out later
    expect(result).toEqual([
      { id1: 10, id2: 30 },
      { id1: 20, id2: 40 },
    ]);
  });
});
