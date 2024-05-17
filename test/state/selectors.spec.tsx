import React from 'react';
import { describe, it, test, expect, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import { Store } from '@reduxjs/toolkit';
import {
  combineTooltipPayload,
  selectActiveIndex,
  selectTooltipPayload,
  selectTooltipPayloadConfigurations,
  useTooltipEventType,
} from '../../src/state/selectors';
import { createRechartsStore, RechartsRootState } from '../../src/state/store';
import { RechartsStoreProvider } from '../../src/state/RechartsStoreProvider';
import { BaseAxisProps, TooltipEventType } from '../../src/util/types';
import { useAppSelector } from '../../src/state/hooks';
import {
  addTooltipEntrySettings,
  setActiveClickItemIndex,
  setActiveMouseOverItemIndex,
  setMouseClickAxisIndex,
  setMouseOverAxisIndex,
  TooltipPayload,
  TooltipPayloadConfiguration,
  TooltipPayloadEntry,
} from '../../src/state/tooltipSlice';
import {
  ChartDataState,
  initialChartDataState,
  setChartData,
  setDataStartEndIndexes,
} from '../../src/state/chartDataSlice';
import { TooltipTrigger } from '../../src/chart/types';
import { produceState } from './produceState';

const exampleTooltipPayloadConfiguration1: TooltipPayloadConfiguration = {
  settings: {
    fill: 'fill',
    name: 'name is ignored in Scatter in recharts 2.x',
    color: 'color',
    dataKey: 'dataKey1',
  },
  dataDefinedOnItem: [
    [
      {
        name: 'stature',
        unit: 'cm',
        value: 100,
        payload: {
          x: 100,
          y: 200,
          z: 200,
        },
        dataKey: 'x',
      },
      {
        name: 'weight',
        unit: 'kg',
        value: 200,
        payload: {
          x: 100,
          y: 200,
          z: 200,
        },
        dataKey: 'y',
      },
    ],
  ],
};

const exampleTooltipPayloadConfiguration2: TooltipPayloadConfiguration = {
  settings: {
    fill: 'fill 2',
    name: 'name 2',
    color: 'color 2',
    dataKey: 'dataKey2',
  },
  dataDefinedOnItem: [
    [
      {
        name: 'height',
        unit: 'cm',
        value: 100,
        payload: {
          x: 100,
          y: 200,
          z: 200,
        },
        dataKey: 'x',
      },
      {
        name: 'width',
        unit: 'm',
        value: 4,
        payload: {
          x: 10,
          y: 20,
          z: 20,
        },
        dataKey: 'y',
      },
    ],
  ],
};

type TestCaseTooltipCombination = { tooltipEventType: TooltipEventType; trigger: TooltipTrigger };
const allTooltipCombinations: ReadonlyArray<TestCaseTooltipCombination> = [
  { tooltipEventType: 'axis', trigger: 'hover' },
  { tooltipEventType: 'axis', trigger: 'click' },
  { tooltipEventType: 'item', trigger: 'hover' },
  { tooltipEventType: 'item', trigger: 'click' },
];

describe('useTooltipEventType', () => {
  type TooltipEventTypeTestScenario = {
    testName: string;
    shared: undefined | boolean;
    defaultTooltipEventType: TooltipEventType;
    validateTooltipEventTypes: ReadonlyArray<TooltipEventType>;
    expected: TooltipEventType;
  };

  const testCases: ReadonlyArray<TooltipEventTypeTestScenario> = [
    {
      testName: 'default case',
      shared: undefined,
      defaultTooltipEventType: 'item',
      validateTooltipEventTypes: [],
      expected: 'item',
    },
    {
      testName: 'shared and axis type is allowed',
      shared: true,
      defaultTooltipEventType: 'item',
      validateTooltipEventTypes: ['axis', 'item'],
      expected: 'axis',
    },
    {
      testName: 'shared but axis type is not allowed',
      shared: true,
      defaultTooltipEventType: 'item',
      validateTooltipEventTypes: ['item'],
      expected: 'item',
    },
    {
      testName: 'not shared and item type is allowed',
      shared: false,
      defaultTooltipEventType: 'axis',
      validateTooltipEventTypes: ['axis', 'item'],
      expected: 'item',
    },
    {
      testName: 'not shared but item type is not allowed',
      shared: false,
      defaultTooltipEventType: 'axis',
      validateTooltipEventTypes: ['axis'],
      expected: 'axis',
    },
  ];

  it('should return undefined when outside of Redux context', () => {
    expect.assertions(1);
    const Comp = (): null => {
      const eventType = useTooltipEventType(undefined);
      expect(eventType).toBe(undefined);
      return null;
    };
    render(<Comp />);
  });

  test.each(testCases)(
    '$testName should return $expected',
    ({ shared, defaultTooltipEventType, validateTooltipEventTypes, expected }) => {
      expect.assertions(1);
      const Comp = (): null => {
        const eventType = useTooltipEventType(shared);
        expect(eventType).toBe(expected);
        return null;
      };
      const preloadedState: Partial<RechartsRootState> = {
        options: { defaultTooltipEventType, validateTooltipEventTypes },
      };
      render(
        <RechartsStoreProvider preloadedState={preloadedState}>
          <Comp />
        </RechartsStoreProvider>,
      );
    },
  );
});

describe('selectTooltipPayload', () => {
  it.each(allTooltipCombinations)(
    'should return undefined when outside of Redux context for $tooltipEventType $trigger',
    ({ tooltipEventType, trigger }) => {
      expect.assertions(1);
      const Comp = (): null => {
        const payload = useAppSelector(state => selectTooltipPayload(state, tooltipEventType, trigger));
        expect(payload).toBe(undefined);
        return null;
      };
      render(<Comp />);
    },
  );

  it.each(allTooltipCombinations)(
    'initial state should return undefined for $tooltipEventType $trigger',
    ({ tooltipEventType, trigger }) => {
      const store = createRechartsStore();
      expect(selectTooltipPayload(store.getState(), tooltipEventType, trigger)).toEqual(undefined);
    },
  );

  it('should return settings and data from axis hover, if activeIndex is set for the item', () => {
    const store = createRechartsStore();
    const tooltipSettings1: TooltipPayloadConfiguration = {
      settings: undefined,
      dataDefinedOnItem: undefined,
    };
    const expectedEntry1: TooltipPayloadEntry = {
      payload: undefined,
      dataKey: undefined,
      value: undefined,
    };
    const tooltipSettings2: TooltipPayloadConfiguration = {
      settings: {
        stroke: 'red',
        fill: 'green',
        dataKey: 'x',
        name: 'foo',
        unit: 'bar',
      },
      dataDefinedOnItem: [
        { x: 8, y: 9 },
        { x: 10, y: 11 },
      ],
    };
    const expectedEntry2: TooltipPayloadEntry = {
      name: 'foo',
      dataKey: 'x',
      stroke: 'red',
      fill: 'green',
      payload: { x: 10, y: 11 },
      value: 10,
      unit: 'bar',
    };
    store.dispatch(addTooltipEntrySettings(tooltipSettings1));
    store.dispatch(addTooltipEntrySettings(tooltipSettings2));
    expect(selectTooltipPayload(store.getState(), 'axis', 'hover')).toEqual(undefined);
    store.dispatch(setMouseOverAxisIndex({ activeIndex: 1, activeDataKey: undefined }));
    expect(selectTooltipPayload(store.getState(), 'axis', 'hover')).toEqual([expectedEntry1, expectedEntry2]);
  });

  it('should fill in chartData, if it is not defined on the item for item hover', () => {
    const store = createRechartsStore();
    const tooltipSettings: TooltipPayloadConfiguration = {
      settings: {
        stroke: 'red',
        fill: 'green',
        dataKey: 'y',
        name: 'foo',
        unit: 'bar',
      },
      dataDefinedOnItem: undefined,
    };
    store.dispatch(addTooltipEntrySettings(tooltipSettings));
    store.dispatch(
      setChartData([
        { x: 1, y: 2 },
        { x: 3, y: 4 },
      ]),
    );
    store.dispatch(setActiveMouseOverItemIndex({ activeIndex: 0, activeDataKey: 'y' }));

    const expectedEntry: TooltipPayloadEntry = {
      name: 'foo',
      dataKey: 'y',
      stroke: 'red',
      fill: 'green',
      payload: { x: 1, y: 2 },
      value: 2,
      unit: 'bar',
    };

    expect(selectTooltipPayload(store.getState(), 'item', 'hover')).toEqual([expectedEntry]);
  });

  it('should return sliced data if set by Brush for item hover', () => {
    const store = createRechartsStore();
    const tooltipSettings: TooltipPayloadConfiguration = {
      settings: {
        stroke: 'red',
        fill: 'green',
        dataKey: 'y',
        name: 'foo',
      },
      dataDefinedOnItem: [
        { x: 1, y: 2 },
        { x: 3, y: 4 },
      ],
    };
    store.dispatch(addTooltipEntrySettings(tooltipSettings));
    store.dispatch(
      setChartData([
        { x: 1, y: 2 },
        { x: 3, y: 4 },
      ]),
    );
    expect(selectTooltipPayload(store.getState(), 'item', 'hover')).toEqual(undefined);
    store.dispatch(setActiveMouseOverItemIndex({ activeIndex: 0, activeDataKey: 'y' }));
    store.dispatch(setDataStartEndIndexes({ startIndex: 1, endIndex: 10 }));
    const expectedEntry: TooltipPayloadEntry = {
      name: 'foo',
      dataKey: 'y',
      stroke: 'red',
      fill: 'green',
      payload: { x: 3, y: 4 },
      value: 4,
    };
    expect(selectTooltipPayload(store.getState(), 'item', 'hover')).toEqual([expectedEntry]);
  });

  it('should return array of payloads for Scatter because Scatter naturally does its own special thing', () => {
    const chartDataState: ChartDataState = initialChartDataState;
    const tooltipAxis: BaseAxisProps | undefined = undefined;
    const activeLabel: string | undefined = undefined;
    const actual: TooltipPayload | undefined = combineTooltipPayload(
      [exampleTooltipPayloadConfiguration1],
      0,
      chartDataState,
      tooltipAxis,
      activeLabel,
    );
    const expectedEntry1: TooltipPayloadEntry = {
      name: 'stature',
      unit: 'cm',
      value: 100,
      payload: {
        x: 100,
        y: 200,
        z: 200,
      },
      dataKey: 'x',
    };
    const expectedEntry2: TooltipPayloadEntry = {
      name: 'weight',
      unit: 'kg',
      value: 200,
      payload: {
        x: 100,
        y: 200,
        z: 200,
      },
      dataKey: 'y',
    };
    const expected: ReadonlyArray<TooltipPayloadEntry> = [expectedEntry1, expectedEntry2];
    expect(actual).toEqual(expected);
  });

  it('should use dataKey from tooltipAxis, if item dataKey is undefined', () => {
    const tooltipPayloadConfiguration: TooltipPayloadConfiguration = {
      settings: {},
      dataDefinedOnItem: [],
    };
    const chartDataState: ChartDataState = initialChartDataState;
    const tooltipAxis: BaseAxisProps = {
      dataKey: 'dataKeyOnAxis',
    };
    const activeLabel: string | undefined = undefined;
    const actual: TooltipPayload | undefined = combineTooltipPayload(
      [tooltipPayloadConfiguration],
      0,
      chartDataState,
      tooltipAxis,
      activeLabel,
    );
    const expected: TooltipPayloadEntry = { dataKey: 'dataKeyOnAxis', payload: null, value: undefined };
    expect(actual).toEqual([expected]);
  });

  it.todo('should do something - not quite sure what exactly yet - with tooltipAxis.allowDuplicatedCategory');
});

describe('selectActiveIndex', () => {
  it('should return -1 for initial state', () => {
    const initialState = createRechartsStore().getState();
    expect(selectActiveIndex(initialState, 'axis', 'hover')).toBe(-1);
    expect(selectActiveIndex(initialState, 'axis', 'click')).toBe(-1);
    expect(selectActiveIndex(initialState, 'item', 'hover')).toBe(-1);
    expect(selectActiveIndex(initialState, 'item', 'click')).toBe(-1);
  });

  it('should return item hover index', () => {
    const state = produceState(draft => {
      draft.tooltip.itemInteraction.activeMouseOverIndex = 7;
    });
    expect(selectActiveIndex(state, 'item', 'hover')).toBe(7);
  });
  it('should return item click index', () => {
    const state = produceState(draft => {
      draft.tooltip.itemInteraction.activeClickIndex = 7;
    });
    expect(selectActiveIndex(state, 'item', 'click')).toBe(7);
  });
  it('should return axis hover index', () => {
    const state = produceState(draft => {
      draft.tooltip.axisInteraction.activeMouseOverAxisIndex = 7;
    });
    expect(selectActiveIndex(state, 'axis', 'hover')).toBe(7);
  });
  it('should return axis click index', () => {
    const state = produceState(draft => {
      draft.tooltip.axisInteraction.activeClickAxisIndex = 7;
    });
    expect(selectActiveIndex(state, 'axis', 'click')).toBe(7);
  });
});

describe('selectTooltipPayloadConfigurations', () => {
  let exampleStore: Store<RechartsRootState>;

  beforeEach(() => {
    exampleStore = createRechartsStore();
    exampleStore.dispatch(addTooltipEntrySettings(exampleTooltipPayloadConfiguration1));
    exampleStore.dispatch(addTooltipEntrySettings(exampleTooltipPayloadConfiguration2));
  });

  describe.each(allTooltipCombinations)(
    'tooltipEventType: $tooltipEventType tooltipTrigger: $trigger',
    ({ tooltipEventType, trigger }) => {
      it('should return undefined when outside of Redux context', () => {
        expect.assertions(1);
        const Comp = (): null => {
          const result = useAppSelector(state => selectTooltipPayloadConfigurations(state, tooltipEventType, trigger));
          expect(result).toBe(undefined);
          return null;
        };
        render(<Comp />);
      });

      it('should return empty array from empty state', () => {
        const store = createRechartsStore();
        expect(selectTooltipPayloadConfigurations(store.getState(), tooltipEventType, trigger)).toEqual([]);
      });
    },
  );

  describe.each(['hover', 'click'])('tooltipEventType: "axis" tooltipTrigger: %s', (trigger: TooltipTrigger) => {
    it('should return unfiltered configurations with tooltipEventType: axis', () => {
      const expected: ReadonlyArray<TooltipPayloadConfiguration> = [
        exampleTooltipPayloadConfiguration1,
        exampleTooltipPayloadConfiguration2,
      ];
      expect(selectTooltipPayloadConfigurations(exampleStore.getState(), 'axis', trigger)).toEqual(expected);
    });
  });

  it('should filter by dataKey with tooltipEventType: item and trigger: hover', () => {
    exampleStore.dispatch(setActiveMouseOverItemIndex({ activeIndex: 1, activeDataKey: 'dataKey1' }));
    expect(selectTooltipPayloadConfigurations(exampleStore.getState(), 'item', 'hover')).toEqual([
      exampleTooltipPayloadConfiguration1,
    ]);
    exampleStore.dispatch(setActiveMouseOverItemIndex({ activeIndex: 1, activeDataKey: 'dataKey2' }));
    expect(selectTooltipPayloadConfigurations(exampleStore.getState(), 'item', 'hover')).toEqual([
      exampleTooltipPayloadConfiguration2,
    ]);
  });

  it('should return nothing if the tooltipEventType is hover but the only interactions are clicks', () => {
    exampleStore.dispatch(setActiveClickItemIndex({ activeIndex: 1, activeDataKey: 'dataKey1' }));
    expect(selectTooltipPayloadConfigurations(exampleStore.getState(), 'item', 'hover')).toEqual([]);
    exampleStore.dispatch(setMouseClickAxisIndex({ activeIndex: 1, activeDataKey: 'dataKey2' }));
    expect(selectTooltipPayloadConfigurations(exampleStore.getState(), 'item', 'hover')).toEqual([]);
  });

  it('should return nothing if the tooltipEventType is click but the only interactions are hovers', () => {
    exampleStore.dispatch(setActiveMouseOverItemIndex({ activeIndex: 1, activeDataKey: 'dataKey1' }));
    expect(selectTooltipPayloadConfigurations(exampleStore.getState(), 'item', 'click')).toEqual([]);
    exampleStore.dispatch(setMouseOverAxisIndex({ activeIndex: 1, activeDataKey: 'dataKey2' }));
    expect(selectTooltipPayloadConfigurations(exampleStore.getState(), 'item', 'click')).toEqual([]);
  });
});
