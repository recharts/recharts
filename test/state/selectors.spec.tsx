import React from 'react';
import { beforeEach, describe, expect, it, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Store } from '@reduxjs/toolkit';
import {
  combineTooltipPayload,
  selectActiveIndex,
  selectActivePropsFromMousePointer,
  selectContainerScale,
  selectIsTooltipActive,
  selectRootContainerDomRect,
  selectTooltipPayload,
  selectTooltipPayloadConfigurations,
  selectTooltipState,
  useTooltipEventType,
} from '../../src/state/selectors';
import { createRechartsStore, RechartsRootState } from '../../src/state/store';
import { RechartsStoreProvider } from '../../src/state/RechartsStoreProvider';
import { BaseAxisProps, TooltipEventType } from '../../src/util/types';
import { useAppSelector } from '../../src/state/hooks';
import {
  addTooltipEntrySettings,
  mouseLeaveItem,
  setActiveClickItemIndex,
  setActiveMouseOverItemIndex,
  setMouseClickAxisIndex,
  setMouseOverAxisIndex,
  TooltipIndex,
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
import { RechartsHTMLContainer, setContainer } from '../../src/state/layoutSlice';
import { getMockDomRect } from '../helper/mockGetBoundingClientRect';
import { arrayTooltipSearcher } from '../../src/state/optionsSlice';
import { MousePointer } from '../../src/chart/generateCategoricalChart';
import { Area, BarChart, ComposedChart, Customized, Line, Pie, PieChart, Scatter } from '../../src';
import { PageData } from '../_data';

const exampleTooltipPayloadConfiguration1: TooltipPayloadConfiguration = {
  settings: {
    fill: 'fill',
    name: 'name is ignored in Scatter in recharts 2.x',
    color: 'color',
    dataKey: 'dataKey1',
    nameKey: 'nameKey1',
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
    nameKey: 'nameKey2',
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
const allTooltipEventTypes: ReadonlyArray<TooltipEventType> = ['axis', 'item'];

const preloadedState: Partial<RechartsRootState> = {
  options: {
    tooltipPayloadSearcher: arrayTooltipSearcher,
    chartName: '',
    barCategoryGap: '',
    stackOffset: 'none',
  },
};

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
      const myPreloadedState: Partial<RechartsRootState> = {
        options: {
          defaultTooltipEventType,
          validateTooltipEventTypes,
          tooltipPayloadSearcher: arrayTooltipSearcher,
          chartName: '',
          barCategoryGap: '',
          stackOffset: 'none',
        },
      };
      render(
        <RechartsStoreProvider preloadedState={myPreloadedState}>
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
        const payload = useAppSelector(state => selectTooltipPayload(state, tooltipEventType, trigger, undefined));
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
      expect(selectTooltipPayload(store.getState(), tooltipEventType, trigger, undefined)).toEqual(undefined);
    },
  );

  it('should return settings and data from axis hover, if activeIndex is set for the item', () => {
    const store = createRechartsStore(preloadedState);
    const tooltipSettings1: TooltipPayloadConfiguration = {
      settings: undefined,
      dataDefinedOnItem: undefined,
    };
    const expectedEntry1: TooltipPayloadEntry = {
      payload: undefined,
      dataKey: undefined,
      nameKey: undefined,
      value: undefined,
    };
    const tooltipSettings2: TooltipPayloadConfiguration = {
      settings: {
        stroke: 'red',
        fill: 'green',
        dataKey: 'x',
        nameKey: 'y',
        name: 'foo',
        unit: 'bar',
      },
      dataDefinedOnItem: [
        { x: 8, y: 9 },
        { x: 10, y: 11 },
      ],
    };
    const expectedEntry2: TooltipPayloadEntry = {
      name: 11,
      dataKey: 'x',
      nameKey: 'y',
      stroke: 'red',
      fill: 'green',
      payload: { x: 10, y: 11 },
      value: 10,
      unit: 'bar',
    };
    store.dispatch(addTooltipEntrySettings(tooltipSettings1));
    store.dispatch(addTooltipEntrySettings(tooltipSettings2));
    expect(selectTooltipPayload(store.getState(), 'axis', 'hover', undefined)).toEqual(undefined);
    store.dispatch(setMouseOverAxisIndex({ activeIndex: '1', activeDataKey: undefined }));
    expect(selectTooltipPayload(store.getState(), 'axis', 'hover', undefined)).toEqual([
      expectedEntry1,
      expectedEntry2,
    ]);
  });

  it('should fill in chartData, if it is not defined on the item for item hover', () => {
    const store = createRechartsStore(preloadedState);
    const tooltipSettings: TooltipPayloadConfiguration = {
      settings: {
        stroke: 'red',
        fill: 'green',
        dataKey: 'y',
        nameKey: 'x',
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
    store.dispatch(setActiveMouseOverItemIndex({ activeIndex: '0', activeDataKey: 'y' }));

    const expectedEntry: TooltipPayloadEntry = {
      name: 1,
      dataKey: 'y',
      nameKey: 'x',
      stroke: 'red',
      fill: 'green',
      payload: { x: 1, y: 2 },
      value: 2,
      unit: 'bar',
    };

    expect(selectTooltipPayload(store.getState(), 'item', 'hover', undefined)).toEqual([expectedEntry]);
  });

  it('should return sliced data if set by Brush for item hover', () => {
    const store = createRechartsStore(preloadedState);
    const tooltipSettings: TooltipPayloadConfiguration = {
      settings: {
        stroke: 'red',
        fill: 'green',
        dataKey: 'y',
        nameKey: 'x',
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
    expect(selectTooltipPayload(store.getState(), 'item', 'hover', undefined)).toEqual(undefined);
    store.dispatch(setActiveMouseOverItemIndex({ activeIndex: '0', activeDataKey: 'y' }));
    store.dispatch(setDataStartEndIndexes({ startIndex: 1, endIndex: 10 }));
    const expectedEntry: TooltipPayloadEntry = {
      name: 3,
      dataKey: 'y',
      nameKey: 'x',
      stroke: 'red',
      fill: 'green',
      payload: { x: 3, y: 4 },
      value: 4,
    };
    expect(selectTooltipPayload(store.getState(), 'item', 'hover', undefined)).toEqual([expectedEntry]);
  });

  it('should return array of payloads for Scatter because Scatter naturally does its own special thing', () => {
    const chartDataState: ChartDataState = initialChartDataState;
    const tooltipAxis: BaseAxisProps | undefined = undefined;
    const activeLabel: string | undefined = undefined;
    const actual: TooltipPayload | undefined = combineTooltipPayload(
      [exampleTooltipPayloadConfiguration1],
      '0',
      chartDataState,
      tooltipAxis,
      activeLabel,
      arrayTooltipSearcher,
    );
    const expectedEntry1: TooltipPayloadEntry = {
      name: 'stature',
      color: undefined,
      fill: undefined,
      unit: 'cm',
      value: 100,
      payload: {
        x: 100,
        y: 200,
        z: 200,
      },
      dataKey: 'x',
      nameKey: 'nameKey1',
    };
    const expectedEntry2: TooltipPayloadEntry = {
      name: 'weight',
      color: undefined,
      fill: undefined,
      unit: 'kg',
      value: 200,
      payload: {
        x: 100,
        y: 200,
        z: 200,
      },
      dataKey: 'y',
      nameKey: 'nameKey1',
    };
    const expected: ReadonlyArray<TooltipPayloadEntry> = [expectedEntry1, expectedEntry2];
    expect(actual).toEqual(expected);
  });

  it('should use dataKey from tooltipAxis, if item dataKey is undefined', () => {
    const tooltipPayloadConfiguration: TooltipPayloadConfiguration = {
      settings: { nameKey: undefined },
      dataDefinedOnItem: [],
    };
    const chartDataState: ChartDataState = initialChartDataState;
    const tooltipAxis: BaseAxisProps = {
      dataKey: 'dataKeyOnAxis',
    };
    const activeLabel: string | undefined = undefined;
    const actual: TooltipPayload | undefined = combineTooltipPayload(
      [tooltipPayloadConfiguration],
      '0',
      chartDataState,
      tooltipAxis,
      activeLabel,
      arrayTooltipSearcher,
    );
    const expected: TooltipPayloadEntry = { dataKey: 'dataKeyOnAxis', payload: null, value: undefined };
    expect(actual).toEqual([expected]);
  });

  it.todo('should do something - not quite sure what exactly yet - with tooltipAxis.allowDuplicatedCategory');
});

describe('selectActiveIndex', () => {
  it('should return null for initial state', () => {
    const initialState = createRechartsStore().getState();
    const expected: TooltipIndex = null;
    expect(selectActiveIndex(initialState, 'axis', 'hover', undefined)).toBe(expected);
    expect(selectActiveIndex(initialState, 'axis', 'click', undefined)).toBe(expected);
    expect(selectActiveIndex(initialState, 'item', 'hover', undefined)).toBe(expected);
    expect(selectActiveIndex(initialState, 'item', 'click', undefined)).toBe(expected);
  });

  it('should return defaultIndex if it is defined', () => {
    const initialState = createRechartsStore().getState();
    const expected: TooltipIndex = '7';
    expect(selectActiveIndex(initialState, 'axis', 'hover', 7)).toBe(expected);
    expect(selectActiveIndex(initialState, 'axis', 'click', 7)).toBe(expected);
    expect(selectActiveIndex(initialState, 'item', 'hover', 7)).toBe(expected);
    expect(selectActiveIndex(initialState, 'item', 'click', 7)).toBe(expected);
  });

  it('should ignore defaultIndex if item hover index is set', () => {
    const state = produceState(draft => {
      draft.tooltip.itemInteraction.activeMouseOverIndex = '7';
    });
    expect(selectActiveIndex(state, 'axis', 'hover', 8)).toBe('8' satisfies TooltipIndex);
    expect(selectActiveIndex(state, 'axis', 'click', 8)).toBe('8' satisfies TooltipIndex);
    expect(selectActiveIndex(state, 'item', 'hover', 8)).toBe('7' satisfies TooltipIndex);
    expect(selectActiveIndex(state, 'item', 'click', 8)).toBe('8' satisfies TooltipIndex);
  });

  it('should return item hover index', () => {
    const state = produceState(draft => {
      draft.tooltip.itemInteraction.activeMouseOverIndex = '7';
    });
    const expected: TooltipIndex = '7';
    expect(selectActiveIndex(state, 'item', 'hover', 9)).toBe(expected);
  });
  it('should return item click index', () => {
    const state = produceState(draft => {
      draft.tooltip.itemInteraction.activeClickIndex = '7';
    });
    const expected: TooltipIndex = '7';
    expect(selectActiveIndex(state, 'item', 'click', 11)).toBe(expected);
  });
  it('should return axis hover index', () => {
    const state = produceState(draft => {
      draft.tooltip.axisInteraction.activeMouseOverAxisIndex = '7';
    });
    const expected: TooltipIndex = '7';
    expect(selectActiveIndex(state, 'axis', 'hover', 13)).toBe(expected);
  });
  it('should return axis click index', () => {
    const state = produceState(draft => {
      draft.tooltip.axisInteraction.activeClickAxisIndex = '7';
    });
    const expected: TooltipIndex = '7';
    expect(selectActiveIndex(state, 'axis', 'click', 17)).toBe(expected);
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
    exampleStore.dispatch(setActiveMouseOverItemIndex({ activeIndex: '1', activeDataKey: 'dataKey1' }));
    expect(selectTooltipPayloadConfigurations(exampleStore.getState(), 'item', 'hover')).toEqual([
      exampleTooltipPayloadConfiguration1,
    ]);
    exampleStore.dispatch(setActiveMouseOverItemIndex({ activeIndex: '1', activeDataKey: 'dataKey2' }));
    expect(selectTooltipPayloadConfigurations(exampleStore.getState(), 'item', 'hover')).toEqual([
      exampleTooltipPayloadConfiguration2,
    ]);
  });

  it('should return nothing if the tooltipEventType is hover but the only interactions are clicks', () => {
    exampleStore.dispatch(setActiveClickItemIndex({ activeIndex: '1', activeDataKey: 'dataKey1' }));
    expect(selectTooltipPayloadConfigurations(exampleStore.getState(), 'item', 'hover')).toEqual([]);
    exampleStore.dispatch(setMouseClickAxisIndex({ activeIndex: '1', activeDataKey: 'dataKey2' }));
    expect(selectTooltipPayloadConfigurations(exampleStore.getState(), 'item', 'hover')).toEqual([]);
  });

  it('should return nothing if the tooltipEventType is click but the only interactions are hovers', () => {
    exampleStore.dispatch(setActiveMouseOverItemIndex({ activeIndex: '1', activeDataKey: 'dataKey1' }));
    expect(selectTooltipPayloadConfigurations(exampleStore.getState(), 'item', 'click')).toEqual([]);
    exampleStore.dispatch(setMouseOverAxisIndex({ activeIndex: '1', activeDataKey: 'dataKey2' }));
    expect(selectTooltipPayloadConfigurations(exampleStore.getState(), 'item', 'click')).toEqual([]);
  });
});

describe('selectIsTooltipActive', () => {
  describe.each(allTooltipCombinations)(
    'tooltipEventType: $tooltipEventType tooltipTrigger: $trigger',
    ({ tooltipEventType, trigger }) => {
      it('should return undefined when outside of Redux state', () => {
        expect.assertions(1);
        const Comp = (): null => {
          const result = useAppSelector(state => selectIsTooltipActive(state, tooltipEventType, trigger));
          expect(result).toBe(undefined);
          return null;
        };
        render(<Comp />);
      });

      it('should return false from initial state', () => {
        const store = createRechartsStore();
        expect(selectIsTooltipActive(store.getState(), tooltipEventType, trigger)).toBe(false);
      });

      it('should return true if a defaultIndex has been set', () => {
        const store = createRechartsStore();
        expect(selectIsTooltipActive(store.getState(), tooltipEventType, trigger, 1)).toBe(true);
      });
    },
  );

  describe('trigger: hover', () => {
    const trigger = 'hover';

    describe.each(allTooltipEventTypes)('tooltipEventType: %s', tooltipEventType => {
      it('should return false if user is clicking on a graphical item', () => {
        // in browser, this is difficult to reproduce - one usually has to mouse over first before clicking
        const store = createRechartsStore();
        store.dispatch(setActiveClickItemIndex({ activeIndex: '1', activeDataKey: 'dataKey1' }));
        expect(selectIsTooltipActive(store.getState(), tooltipEventType, trigger)).toBe(false);
      });

      it('should return false if user is clicking on an axis', () => {
        // in browser, this is difficult to reproduce - one usually has to mouse over first before clicking
        const store = createRechartsStore();
        store.dispatch(setMouseClickAxisIndex({ activeIndex: '1', activeDataKey: 'dataKey1' }));
        expect(selectIsTooltipActive(store.getState(), tooltipEventType, trigger)).toBe(false);
      });
    });

    describe('tooltipEventType: item', () => {
      const tooltipEventType = 'item';
      it('should return true if user is hovering over a graphical item but not axis', () => {
        const store = createRechartsStore();
        store.dispatch(setMouseOverAxisIndex({ activeIndex: '1', activeDataKey: undefined }));
        expect(selectIsTooltipActive(store.getState(), tooltipEventType, trigger)).toBe(false);
        store.dispatch(setActiveMouseOverItemIndex({ activeIndex: '1', activeDataKey: 'dataKey1' }));
        expect(selectIsTooltipActive(store.getState(), tooltipEventType, trigger)).toBe(true);
        store.dispatch(mouseLeaveItem());
        expect(selectIsTooltipActive(store.getState(), tooltipEventType, trigger)).toBe(false);
      });

      it.todo('should return false after mouse leaves the chart element');
    });

    describe('tooltipEventType: axis', () => {
      const tooltipEventType = 'axis';
      it(`should return true if user is hovering over an axis,
          and then continue returning true when user hovers over and then leaves a graphical item`, () => {
        const store = createRechartsStore();
        store.dispatch(setActiveMouseOverItemIndex({ activeIndex: '1', activeDataKey: 'dataKey1' }));
        expect(selectIsTooltipActive(store.getState(), tooltipEventType, trigger)).toBe(false);
        store.dispatch(setMouseOverAxisIndex({ activeIndex: '1', activeDataKey: undefined }));
        expect(selectIsTooltipActive(store.getState(), tooltipEventType, trigger)).toBe(true);
        store.dispatch(setActiveMouseOverItemIndex({ activeIndex: '1', activeDataKey: 'dataKey1' }));
        expect(selectIsTooltipActive(store.getState(), tooltipEventType, trigger)).toBe(true);
        store.dispatch(mouseLeaveItem());
        expect(selectIsTooltipActive(store.getState(), tooltipEventType, trigger)).toBe(true);
      });

      it.todo('should return false after mouse leaves the chart element');
    });
  });

  describe('trigger: click', () => {
    const trigger = 'click';

    describe.each(allTooltipEventTypes)('tooltipEventType: %s', tooltipEventType => {
      it('should return false if user is hovering over a graphical item', () => {
        const store = createRechartsStore();
        store.dispatch(setActiveMouseOverItemIndex({ activeIndex: '1', activeDataKey: 'dataKey1' }));
        expect(selectIsTooltipActive(store.getState(), tooltipEventType, trigger)).toBe(false);
      });

      it('should return false if user is hovering over an axis', () => {
        const store = createRechartsStore();
        store.dispatch(setMouseOverAxisIndex({ activeIndex: '1', activeDataKey: undefined }));
        expect(selectIsTooltipActive(store.getState(), tooltipEventType, trigger)).toBe(false);
      });
    });

    describe('tooltipEventType: item', () => {
      const tooltipEventType = 'item';
      it(`should return true if user is clicking a graphical item and continue returning true forever,
          because recharts does not allow ever turning off a tooltip that was triggered by a click`, () => {
        const store = createRechartsStore();
        store.dispatch(setActiveClickItemIndex({ activeIndex: '1', activeDataKey: 'dataKey1' }));
        expect(selectIsTooltipActive(store.getState(), tooltipEventType, trigger)).toBe(true);
        store.dispatch(setActiveClickItemIndex({ activeIndex: '2', activeDataKey: undefined }));
        expect(selectIsTooltipActive(store.getState(), tooltipEventType, trigger)).toBe(true);
        store.dispatch(mouseLeaveItem());
        expect(selectIsTooltipActive(store.getState(), tooltipEventType, trigger)).toBe(true);
        store.dispatch(setMouseClickAxisIndex({ activeIndex: '1', activeDataKey: undefined }));
        expect(selectIsTooltipActive(store.getState(), tooltipEventType, trigger)).toBe(true);
      });

      it('should return false if user is clicking on an axis', () => {
        const store = createRechartsStore();
        store.dispatch(setMouseClickAxisIndex({ activeIndex: '1', activeDataKey: 'dataKey1' }));
        expect(selectIsTooltipActive(store.getState(), tooltipEventType, trigger)).toBe(false);
      });
    });

    describe('tooltipEventType: axis', () => {
      const tooltipEventType = 'axis';
      it('should return true if user is clicking on an axis, and continue returning true forever', () => {
        const store = createRechartsStore();
        store.dispatch(setMouseClickAxisIndex({ activeIndex: '1', activeDataKey: 'dataKey1' }));
        expect(selectIsTooltipActive(store.getState(), tooltipEventType, trigger)).toBe(true);
        store.dispatch(setMouseClickAxisIndex({ activeIndex: '2', activeDataKey: undefined }));
        expect(selectIsTooltipActive(store.getState(), tooltipEventType, trigger)).toBe(true);
        store.dispatch(mouseLeaveItem());
        expect(selectIsTooltipActive(store.getState(), tooltipEventType, trigger)).toBe(true);
        store.dispatch(setActiveClickItemIndex({ activeIndex: '1', activeDataKey: 'dataKey1' }));
        expect(selectIsTooltipActive(store.getState(), tooltipEventType, trigger)).toBe(true);
      });
    });
  });
});

describe('selectRootContainerDomRect', () => {
  it('should return undefined when called outside of Redux context', () => {
    expect.assertions(1);
    const Comp = (): null => {
      const rect = useAppSelector(selectRootContainerDomRect);
      expect(rect).toBe(undefined);
      return null;
    };
    render(<Comp />);
  });

  it('should return undefined for initial state', () => {
    const store = createRechartsStore();
    expect(selectRootContainerDomRect(store.getState())).toBe(undefined);
  });

  it('should return DOM rect of root container if set', () => {
    const store = createRechartsStore();
    const mockRect: DOMRect = getMockDomRect({
      x: 1,
      y: 2,
      width: 3,
      height: 4,
    });
    const mockElement: RechartsHTMLContainer = {
      offsetWidth: 5,
      getBoundingClientRect: () => mockRect,
    };
    store.dispatch(setContainer(mockElement));
    expect(selectRootContainerDomRect(store.getState())).toEqual(mockRect);
  });

  it('should return updated DOM rect after browser window resize', () => {
    const store = createRechartsStore();
    const spy = vi.fn();
    const mockRect: DOMRect = getMockDomRect({
      x: 1,
      y: 2,
      width: 3,
      height: 4,
    });
    const mockRectUpdated: DOMRect = getMockDomRect({
      x: 5,
      y: 6,
      width: 7,
      height: 8,
    });
    const mockElement: RechartsHTMLContainer = {
      offsetWidth: 9,
      getBoundingClientRect: spy,
    };
    spy.mockReturnValue(mockRect);
    store.dispatch(setContainer(mockElement));
    expect(selectRootContainerDomRect(store.getState())).toEqual(mockRect);
    spy.mockReturnValue(mockRectUpdated);
    expect(selectRootContainerDomRect(store.getState())).toEqual(mockRectUpdated);
  });
});

describe('selectContainerScale', () => {
  it('should return undefined when called outside of Redux context', () => {
    expect.assertions(1);
    const Comp = (): null => {
      const scale = useAppSelector(selectContainerScale);
      expect(scale).toBe(undefined);
      return null;
    };
    render(<Comp />);
  });

  it('should return 1 for initial state', () => {
    const store = createRechartsStore();
    expect(selectContainerScale(store.getState())).toBe(1);
  });

  it('should return 1 when container is set and has width and DOMRect with matching widths', () => {
    const store = createRechartsStore();
    const mockRect: DOMRect = getMockDomRect({
      x: 1,
      y: 2,
      width: 3,
      height: 4,
    });
    const mockElement: RechartsHTMLContainer = {
      offsetWidth: 3,
      getBoundingClientRect: () => mockRect,
    };
    store.dispatch(setContainer(mockElement));
    expect(selectContainerScale(store.getState())).toBe(1);
  });

  it('should return scale as the ratio of DOMRect / offsetWidth', () => {
    /*
     * This is a little bit of a case of "trust me" because:
     * jsdom returns zeroes everywhere so that doesn't test anything
     * and the browser spec is everything, so I went and tested it in Firefox version 126.0
     * In a browser devtools I select arbitrary element and run:
     *
        console.table({
         'getBoundingClientRect().width': $0.getBoundingClientRect().width,
         offsetWidth: $0.offsetWidth,
         scale: $0.getBoundingClientRect().width / $0.offsetWidth
        })
     *
     * This shows rect: 100, offsetWidth: 100, scale: 1
     * Then I went and changed the `scale` CSS property to 1.5 using devtools and
     * run the console.log again, and this time it shows
     * rect: 150, offsetWidth: 100, scale: 1.5
     * So there we go.
     */
    const store = createRechartsStore();
    const mockRect: DOMRect = getMockDomRect({
      x: 1,
      y: 2,
      width: 3,
      height: 4,
    });
    const mockElement: RechartsHTMLContainer = {
      offsetWidth: 5,
      getBoundingClientRect: () => mockRect,
    };
    store.dispatch(setContainer(mockElement));
    expect(selectContainerScale(store.getState())).toBe(3 / 5);
  });

  it('should return scale: 1 in jsdom because jsdom returns zeroes everywhere', () => {
    /*
     * This is a little bit of optimization for the test environment
     * but without this fix, like half of the tests start throwing an error.
     * Perhaps instead we should enforce mocking proper DOMRect
     * on the container, in all tests,
     * but for now this workaround is easier and doesn't hurt anyone.
     */
    const store = createRechartsStore();
    const mockRect: DOMRect = getMockDomRect({
      width: 0,
    });
    const mockElement: RechartsHTMLContainer = {
      offsetWidth: 0,
      getBoundingClientRect: () => mockRect,
    };
    store.dispatch(setContainer(mockElement));
    expect(selectContainerScale(store.getState())).toBe(1);
  });
});

describe('selectActiveIndexFromMousePointer', () => {
  const exampleMousePointer: MousePointer = {
    pageX: 0,
    pageY: 0,
  };
  it('should return undefined when called outside of Redux context', () => {
    expect.assertions(1);
    const Comp = (): null => {
      const coordinates = useAppSelector(state => selectActivePropsFromMousePointer(state, exampleMousePointer));
      expect(coordinates).toBe(undefined);
      return null;
    };
    render(<Comp />);
  });

  it('should return undefined for initial state', () => {
    const store = createRechartsStore();
    expect(selectActivePropsFromMousePointer(store.getState(), exampleMousePointer)).toBe(undefined);
  });
});

describe('selectTooltipState.tooltipItemPayloads', () => {
  it('should return undefined when called outside of Redux context', () => {
    expect.assertions(1);
    const Comp = (): null => {
      const payload = useAppSelector(selectTooltipState);
      expect(payload).toBe(undefined);
      return null;
    };
    render(<Comp />);
  });

  it('should return empty array for initial state', () => {
    const store = createRechartsStore();
    expect(selectTooltipState(store.getState()).tooltipItemPayloads).toEqual([]);
  });

  it('should return empty array in an empty chart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const tooltipData = useAppSelector(selectTooltipState).tooltipItemPayloads.map(tp => tp.dataDefinedOnItem);
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

  it('should return all tooltip payloads defined on graphical items in ComposedChart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const tooltipData = useAppSelector(selectTooltipState).tooltipItemPayloads.map(tp => tp.dataDefinedOnItem);
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
    expect(spy).toHaveBeenCalledTimes(3);
    // two of these elements will send the data as defined; Scatter decides to pre-chew it
    expect(spy).toHaveBeenLastCalledWith(
      expect.arrayContaining([
        [1, 2, 3],
        [10, 20, 30],
        [4, 5, 6],
        [40, 50, 60],
        [
          [
            {
              dataKey: undefined,
              name: undefined,
              payload: 7,
              type: undefined,
              unit: '',
              value: undefined,
            },
            {
              dataKey: undefined,
              name: undefined,
              payload: 7,
              type: undefined,
              unit: '',
              value: undefined,
            },
          ],
          [
            {
              dataKey: undefined,
              name: undefined,
              payload: 8,
              type: undefined,
              unit: '',
              value: undefined,
            },
            {
              dataKey: undefined,
              name: undefined,
              payload: 8,
              type: undefined,
              unit: '',
              value: undefined,
            },
          ],
          [
            {
              dataKey: undefined,
              name: undefined,
              payload: 9,
              type: undefined,
              unit: '',
              value: undefined,
            },
            {
              dataKey: undefined,
              name: undefined,
              payload: 9,
              type: undefined,
              unit: '',
              value: undefined,
            },
          ],
        ],
        [
          [
            {
              dataKey: undefined,
              name: undefined,
              payload: 70,
              type: undefined,
              unit: '',
              value: undefined,
            },
            {
              dataKey: undefined,
              name: undefined,
              payload: 70,
              type: undefined,
              unit: '',
              value: undefined,
            },
          ],
          [
            {
              dataKey: undefined,
              name: undefined,
              payload: 80,
              type: undefined,
              unit: '',
              value: undefined,
            },
            {
              dataKey: undefined,
              name: undefined,
              payload: 80,
              type: undefined,
              unit: '',
              value: undefined,
            },
          ],
          [
            {
              dataKey: undefined,
              name: undefined,
              payload: 90,
              type: undefined,
              unit: '',
              value: undefined,
            },
            {
              dataKey: undefined,
              name: undefined,
              payload: 90,
              type: undefined,
              unit: '',
              value: undefined,
            },
          ],
        ],
      ]),
    );
  });

  it('should return all payloads in PieChart', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      const tooltipData = useAppSelector(selectTooltipState).tooltipItemPayloads.map(tp => tp.dataDefinedOnItem);
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
    expect(spy).toHaveBeenCalledTimes(3);
    expect(spy).toHaveBeenLastCalledWith([
      [
        [
          {
            dataKey: 'x',
            name: 0,
            payload: {
              cx: '50%',
              cy: '50%',
              fill: '#808080',
              payload: {
                x: 1,
              },
              stroke: '#fff',
              x: 1,
            },
            type: undefined,
            value: 1,
          },
        ],
        [
          {
            dataKey: 'x',
            name: 1,
            payload: {
              cx: '50%',
              cy: '50%',
              fill: '#808080',
              payload: {
                x: 2,
              },
              stroke: '#fff',
              x: 2,
            },
            type: undefined,
            value: 2,
          },
        ],
        [
          {
            dataKey: 'x',
            name: 2,
            payload: {
              cx: '50%',
              cy: '50%',
              fill: '#808080',
              payload: {
                x: 3,
              },
              stroke: '#fff',
              x: 3,
            },
            type: undefined,
            value: 3,
          },
        ],
      ],
      [
        [
          {
            dataKey: 'y',
            name: 0,
            payload: {
              cx: '50%',
              cy: '50%',
              fill: '#808080',
              payload: {
                y: 10,
              },
              stroke: '#fff',
              y: 10,
            },
            type: undefined,
            value: 10,
          },
        ],
        [
          {
            dataKey: 'y',
            name: 1,
            payload: {
              cx: '50%',
              cy: '50%',
              fill: '#808080',
              payload: {
                y: 20,
              },
              stroke: '#fff',
              y: 20,
            },
            type: undefined,
            value: 20,
          },
        ],
        [
          {
            dataKey: 'y',
            name: 2,
            payload: {
              cx: '50%',
              cy: '50%',
              fill: '#808080',
              payload: {
                y: 30,
              },
              stroke: '#fff',
              y: 30,
            },
            type: undefined,
            value: 30,
          },
        ],
      ],
    ]);
  });
});
