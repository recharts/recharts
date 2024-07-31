import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useAppSelector } from '../../../src/state/hooks';
import { selectAllXAxes, selectAllYAxes } from '../../../src/state/selectors/selectAllAxes';
import { createRechartsStore } from '../../../src/state/store';

describe('selectAllXAxes', () => {
  it('should return undefined when called outside of Redux context', () => {
    expect.assertions(1);
    const Comp = (): null => {
      const allAxes = useAppSelector(selectAllXAxes);
      expect(allAxes).toEqual(undefined);
      return null;
    };
    render(<Comp />);
  });

  it('should return default object for initial state, and should be stable', () => {
    const store = createRechartsStore();
    const allAxes1 = selectAllXAxes(store.getState());
    expect(allAxes1).toEqual([]);

    const allAxes2 = selectAllXAxes(store.getState());
    expect(allAxes1).toBe(allAxes2);
  });
});

describe('selectAllYAxes', () => {
  it('should return undefined when called outside of Redux context', () => {
    expect.assertions(1);
    const Comp = (): null => {
      const allAxes = useAppSelector(selectAllYAxes);
      expect(allAxes).toEqual(undefined);
      return null;
    };
    render(<Comp />);
  });

  it('should return default object for initial state, and should be stable', () => {
    const store = createRechartsStore();
    const allAxes1 = selectAllYAxes(store.getState());
    expect(allAxes1).toEqual([]);

    const allAxes2 = selectAllYAxes(store.getState());
    expect(allAxes1).toBe(allAxes2);
  });
});
