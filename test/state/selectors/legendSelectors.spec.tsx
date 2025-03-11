import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';

import { LegendSettings } from '../../../src/state/legendSlice';
import { BarChart, Customized, Legend, LegendPayload } from '../../../src';
import { mockGetBoundingClientRect } from '../../helper/mockGetBoundingClientRect';
import {
  shouldReturnFromInitialState,
  shouldReturnUndefinedOutOfContext,
  useAppSelectorWithStableTest,
} from '../../helper/selectorTestHelpers';
import {
  selectLegendPayload,
  selectLegendSettings,
  selectLegendSize,
} from '../../../src/state/selectors/legendSelectors';
import { Size } from '../../../src/util/types';

describe('selectLegendSettings', () => {
  shouldReturnUndefinedOutOfContext(selectLegendSettings);
  shouldReturnFromInitialState(selectLegendSettings, {
    layout: 'horizontal',
    align: 'center',
    verticalAlign: 'middle',
  });

  it('should return Legend settings', () => {
    const legendSettingsSpy = vi.fn();
    const Comp = (): null => {
      const legend = useAppSelectorWithStableTest(selectLegendSettings);
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
    const expected: LegendSettings = {
      align: 'left',
      layout: 'vertical',
      verticalAlign: 'top',
    };
    expect(legendSettingsSpy).toHaveBeenLastCalledWith(expected);
    expect(legendSettingsSpy).toHaveBeenCalledTimes(3);
  });
});

describe('selectLegendSize', () => {
  shouldReturnUndefinedOutOfContext(selectLegendSize);
  shouldReturnFromInitialState(selectLegendSize, {
    width: 0,
    height: 0,
  });

  it('should return Legend size', () => {
    const legendSettingsSpy = vi.fn();
    const Comp = (): null => {
      const legend = useAppSelectorWithStableTest(selectLegendSize);
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
    const expected: Size = { width: 17, height: 71 };
    expect(legendSettingsSpy).toHaveBeenLastCalledWith(expected);
    expect(legendSettingsSpy).toHaveBeenCalledTimes(2);
  });
});

describe('selectLegendPayload', () => {
  shouldReturnUndefinedOutOfContext(selectLegendPayload);
  shouldReturnFromInitialState(selectLegendPayload, []);

  it('should return Legend payload', () => {
    const legendSettingsSpy = vi.fn();
    const Comp = (): null => {
      const legend = useAppSelectorWithStableTest(selectLegendPayload);
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
    const expected: ReadonlyArray<LegendPayload> = [];
    expect(legendSettingsSpy).toHaveBeenLastCalledWith(expected);
    expect(legendSettingsSpy).toHaveBeenCalledTimes(1);
  });
});
