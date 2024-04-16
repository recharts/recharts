import React from 'react';
import { describe, it, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { useTooltipEventType } from '../../src/state/selectors';
import { RechartsRootState } from '../../src/state/store';
import { RechartsStoreProvider } from '../../src/state/RechartsStoreProvider';
import { TooltipEventType } from '../../src/util/types';

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

describe('useTooltipEventType', () => {
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
