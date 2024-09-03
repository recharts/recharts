import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';

import { LegendState } from '../../../src/state/legendSlice';
import { selectLegendState } from '../../../src/state/selectors/legendSelectors';
import { useAppSelector } from '../../../src/state/hooks';
import { createRechartsStore } from '../../../src/state/store';
import { BarChart, Customized, Legend } from '../../../src';
import { mockGetBoundingClientRect } from '../../helper/mockGetBoundingClientRect';

describe('selectLegendState', () => {
  it('should return undefined when called outside of Redux context', () => {
    expect.assertions(1);
    const Comp = (): null => {
      const legend = useAppSelector(selectLegendState);
      expect(legend).toBe(undefined);
      return null;
    };
    render(<Comp />);
  });

  it('should return initial state', () => {
    const store = createRechartsStore();
    const expected: LegendState = {
      width: 0,
      height: 0,
      align: 'center',
      layout: 'horizontal',
      verticalAlign: 'middle',
    };
    expect(selectLegendState(store.getState())).toEqual(expected);
  });

  it('should return Legend settings', () => {
    const legendSettingsSpy = vi.fn();
    const Comp = (): null => {
      const legend = useAppSelector(selectLegendState);
      legendSettingsSpy(legend);
      return null;
    };
    mockGetBoundingClientRect({ width: 17, height: 71 });
    render(
      <BarChart width={100} height={100}>
        <Legend align="left" layout="vertical" verticalAlign="top" />
        <Customized component={<Comp />} />
      </BarChart>,
    );
    const expected: LegendState = {
      width: 17,
      height: 71,
      align: 'left',
      layout: 'vertical',
      verticalAlign: 'top',
    };
    expect(legendSettingsSpy).toHaveBeenLastCalledWith(expected);
    expect(legendSettingsSpy).toHaveBeenCalledTimes(4);
  });
});
