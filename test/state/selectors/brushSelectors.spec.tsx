import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { useAppSelector } from '../../../src/state/hooks';
import { BarChart, Brush, Customized } from '../../../src';
import { selectBrushHeight } from '../../../src/state/selectors/selectChartOffset';
import { shouldReturnFromInitialState, shouldReturnUndefinedOutOfContext } from '../../helper/selectorTestHelpers';

describe('selectBrushHeight', () => {
  shouldReturnUndefinedOutOfContext(selectBrushHeight);
  shouldReturnFromInitialState(selectBrushHeight, 0);

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
    expect(heightSpy).toHaveBeenCalledTimes(2);
  });
});
