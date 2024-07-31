import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { selectChartOffset } from '../../../src/state/selectors/selectChartOffset';
import { useAppSelector } from '../../../src/state/hooks';
import { createRechartsStore } from '../../../src/state/store';
import { LineChart, Customized } from '../../../src';

describe('selectChartOffset', () => {
  it('should return undefined when called outside of Redux context', () => {
    expect.assertions(1);
    const Comp = (): null => {
      const offset = useAppSelector(selectChartOffset);
      expect(offset).toBe(undefined);
      return null;
    };

    render(<Comp />);
  });

  it('should return default object for initial state, and should be stable', () => {
    const store = createRechartsStore();
    const offset1 = selectChartOffset(store.getState());
    expect(offset1).toEqual({
      bottom: 5,
      brushBottom: 5,
      height: 0,
      left: 5,
      right: 5,
      top: 5,
      width: 0,
    });

    const offset2 = selectChartOffset(store.getState());
    expect(offset1).toBe(offset2);
  });

  it('should be stable', () => {
    expect.assertions(4);
    const Comp = (): null => {
      const offset1 = useAppSelector(selectChartOffset);
      const offset2 = useAppSelector(selectChartOffset);
      expect(offset1).not.toBe(undefined);
      expect(offset1).toBe(offset2);
      return null;
    };

    render(
      <LineChart width={100} height={200}>
        <Customized component={<Comp />} />
      </LineChart>,
    );
  });
});
