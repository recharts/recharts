import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { useAppSelector } from '../../../src/state/hooks';
import { selectBrushHeight } from '../../../src/state/selectors/brushSelectors';
import { BarChart, Brush, Customized } from '../../../src';
import { createRechartsStore } from '../../../src/state/store';

describe('selectBrushHeight', () => {
  it('should return undefined when called outside of Redux context', () => {
    expect.assertions(1);
    const Comp = (): null => {
      const height = useAppSelector(selectBrushHeight);
      expect(height).toBe(undefined);
      return null;
    };
    render(<Comp />);
  });

  it('should return 0 for initial state', () => {
    const store = createRechartsStore();
    expect(selectBrushHeight(store.getState())).toBe(0);
  });

  it('should return brush height if set', () => {
    const heightSpy = vi.fn();
    const Comp = (): null => {
      const height = useAppSelector(selectBrushHeight);
      heightSpy(height);
      return null;
    };
    render(
      <BarChart width={100} height={100}>
        <Brush height={7} />
        <Customized component={<Comp />} />
      </BarChart>,
    );
    expect(heightSpy).toHaveBeenLastCalledWith(7);
    expect(heightSpy).toHaveBeenCalledTimes(3);
  });
});
