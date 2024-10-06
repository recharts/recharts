import React from 'react';
import { Selector } from '@reduxjs/toolkit';
import { expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { useAppSelector } from '../../src/state/hooks';
import { createRechartsStore, RechartsRootState } from '../../src/state/store';

export function shouldReturnUndefinedOutOfContext(selector: Selector<RechartsRootState, unknown, never>): void {
  it('should return undefined when called out of Recharts context', () => {
    const spy = vi.fn();
    const Comp = (): null => {
      spy(useAppSelector(selector));
      return null;
    };
    render(<Comp />);
    expect(spy).toHaveBeenCalledWith(undefined);
    expect(spy).toHaveBeenCalledTimes(1);
  });
}

export function shouldReturnFromInitialState<T>(
  selector: Selector<RechartsRootState, T, never>,
  expectedReturn: T,
): void {
  const valueDescription = JSON.stringify(expectedReturn);
  it(`should return ${valueDescription} when called with initial state`, () => {
    const store = createRechartsStore();
    const result = selector(store.getState());
    expect(result).toEqual(expectedReturn);
    const shouldBeStable = selector(store.getState());
    expect(shouldBeStable).toEqual(expectedReturn);
    expect(shouldBeStable).toBe(result);
  });
}

/**
 * Do not use in production code! This is a test utility
 *
 * This function will call the selector twice, and fails the test if the results
 * are referencing a different result.
 *
 * This is generally what we want from all selectors so it's a good idea to run this on all selector functions.
 *
 * Redux out of the box does something similar but it only prints warnings to console, this version throws.
 *
 * @param selector accepts RechartsRootState and returns T
 * @return T that the selector returned
 */
export function useAppSelectorWithStableTest<T>(selector: Selector<RechartsRootState, T, never>): T {
  return useAppSelector((state: RechartsRootState) => {
    const result1 = selector(state);
    const result2 = selector(state);
    expect(result1).toBe(result2);
    return result1;
  });
}
