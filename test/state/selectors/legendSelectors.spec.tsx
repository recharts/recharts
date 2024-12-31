import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';

import { LegendState } from '../../../src/state/legendSlice';
import { selectLegendState } from '../../../src/state/selectors/legendSelectors';
import { BarChart, Customized, Legend } from '../../../src';
import { mockGetBoundingClientRect } from '../../helper/mockGetBoundingClientRect';
import {
  shouldReturnFromInitialState,
  shouldReturnUndefinedOutOfContext,
  useAppSelectorWithStableTest,
} from '../../helper/selectorTestHelpers';

describe('selectLegendState', () => {
  shouldReturnUndefinedOutOfContext(selectLegendState);
  shouldReturnFromInitialState(selectLegendState, {
    settings: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'middle',
    },
    size: {
      width: 0,
      height: 0,
    },
  });

  it('should return Legend settings', () => {
    const legendSettingsSpy = vi.fn();
    const Comp = (): null => {
      const legend = useAppSelectorWithStableTest(selectLegendState);
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
      size: { width: 17, height: 71 },
      settings: {
        align: 'left',
        layout: 'vertical',
        verticalAlign: 'top',
      },
    };
    expect(legendSettingsSpy).toHaveBeenLastCalledWith(expected);
    expect(legendSettingsSpy).toHaveBeenCalledTimes(4);
  });
});
