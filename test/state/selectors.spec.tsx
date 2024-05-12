import React from 'react';
import { describe, it, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { selectTooltipPayload, useTooltipEventType } from '../../src/state/selectors';
import { createRechartsStore, RechartsRootState } from '../../src/state/store';
import { RechartsStoreProvider } from '../../src/state/RechartsStoreProvider';
import { TooltipEventType } from '../../src/util/types';
import { useAppSelector } from '../../src/state/hooks';
import {
  addTooltipEntrySettings,
  setActiveTooltipIndex,
  TooltipPayloadConfiguration,
  TooltipPayloadEntry,
} from '../../src/state/tooltipSlice';
import { setChartData, setDataStartEndIndexes } from '../../src/state/chartDataSlice';

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
  it('should return undefined when outside of Redux context', () => {
    expect.assertions(1);
    const Comp = (): null => {
      const payload = useAppSelector(selectTooltipPayload);
      expect(payload).toBe(undefined);
      return null;
    };
    render(<Comp />);
  });

  it('initial state should return undefined', () => {
    const store = createRechartsStore();
    expect(selectTooltipPayload(store.getState())).toEqual(undefined);
  });

  it('should return settings and data from a graphical item, if activeIndex is set', () => {
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
    expect(selectTooltipPayload(store.getState())).toEqual(undefined);
    store.dispatch(setActiveTooltipIndex(1));
    expect(selectTooltipPayload(store.getState())).toEqual([expectedEntry1, expectedEntry2]);
  });

  it('should fill in chartData, if it is not defined on the item', () => {
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
    store.dispatch(setActiveTooltipIndex(0));

    const expectedEntry: TooltipPayloadEntry = {
      name: 'foo',
      dataKey: 'y',
      stroke: 'red',
      fill: 'green',
      payload: { x: 1, y: 2 },
      value: 2,
      unit: 'bar',
    };

    expect(selectTooltipPayload(store.getState())).toEqual([expectedEntry]);
  });

  it('should return sliced data if set by Brush', () => {
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
    expect(selectTooltipPayload(store.getState())).toEqual(undefined);
    store.dispatch(setActiveTooltipIndex(0));
    store.dispatch(setDataStartEndIndexes({ startIndex: 1, endIndex: 10 }));
    const expectedEntry: TooltipPayloadEntry = {
      name: 'foo',
      dataKey: 'y',
      stroke: 'red',
      fill: 'green',
      payload: { x: 3, y: 4 },
      value: 4,
    };
    expect(selectTooltipPayload(store.getState())).toEqual([expectedEntry]);
  });

  it.todo('should prefer to use dataKey from tooltipAxis, if it is defined');
  it.todo('should do something - not quite sure what exactly yet - with tooltipAxis.allowDuplicatedCategory');
});
