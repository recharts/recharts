import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { RechartsRootState } from '../../../src/state/store';
import {
  selectAngleAxisForBandSize,
  selectAngleAxisWithScaleAndViewport,
  selectRadarPoints,
  selectRadiusAxisForBandSize,
} from '../../../src/state/selectors/radarSelectors';
import {
  shouldReturnFromInitialState,
  shouldReturnUndefinedOutOfContext,
  useAppSelectorWithStableTest,
} from '../../helper/selectorTestHelpers';
import { Customized, PolarAngleAxis, Radar, RadarChart } from '../../../src';
import { exampleRadarData } from '../../_data';

describe('selectRadarPoints', () => {
  const selector = (state: RechartsRootState) => selectRadarPoints(state, 0, 0, false, 'value');

  shouldReturnUndefinedOutOfContext(selector);
  shouldReturnFromInitialState(selector, undefined);

  it('should return radar points in a chart', () => {
    const radarPointsSpy = vi.fn();
    const Comp = (): null => {
      radarPointsSpy(useAppSelectorWithStableTest(selector));
      return null;
    };
    render(
      <RadarChart width={500} height={500} data={exampleRadarData}>
        <Radar dataKey="value" />
        <PolarAngleAxis dataKey="value" />
        <Customized component={<Comp />} />
      </RadarChart>,
    );

    expect(radarPointsSpy).toHaveBeenLastCalledWith({
      baseLinePoints: [],
      isRange: false,
      points: [
        {
          angle: 90,
          cx: 250,
          cy: 250,
          name: 420,
          payload: {
            half: 210,
            name: 'iPhone 3GS',
            value: 420,
          },
          radius: 82.32,
          value: 420,
          x: 250,
          y: 167.68,
        },
        {
          angle: 45,
          cx: 250,
          cy: 250,
          name: 460,
          payload: {
            half: 230,
            name: 'iPhone 4',
            value: 460,
          },
          radius: 90.16000000000001,
          value: 460,
          x: 313.75274739177917,
          y: 186.2472526082209,
        },
        {
          angle: 0,
          cx: 250,
          cy: 250,
          name: 999,
          payload: {
            half: 500,
            name: 'iPhone 4s',
            value: 999,
          },
          radius: 195.804,
          value: 999,
          x: 445.804,
          y: 250,
        },
        {
          angle: -45,
          cx: 250,
          cy: 250,
          name: 500,
          payload: {
            half: 250,
            name: 'iPhone 5',
            value: 500,
          },
          radius: 98,
          value: 500,
          x: 319.29646455628165,
          y: 319.29646455628165,
        },
        {
          angle: -90,
          cx: 250,
          cy: 250,
          name: 864,
          payload: {
            half: 432,
            name: 'iPhone 5s',
            value: 864,
          },
          radius: 169.344,
          value: 864,
          x: 250,
          y: 419.344,
        },
        {
          angle: -135,
          cx: 250,
          cy: 250,
          name: 650,
          payload: {
            half: 325,
            name: 'iPhone 6',
            value: 650,
          },
          radius: 127.4,
          value: 650,
          x: 159.91459607683385,
          y: 340.08540392316615,
        },
        {
          angle: -180,
          cx: 250,
          cy: 250,
          name: 765,
          payload: {
            half: 383,
            name: 'iPhone 6s',
            value: 765,
          },
          radius: 149.94,
          value: 765,
          x: 100.06,
          y: 250.00000000000003,
        },
        {
          angle: -225,
          cx: 250,
          cy: 250,
          name: 365,
          payload: {
            half: 183,
            name: 'iPhone 5se',
            value: 365,
          },
          radius: 71.53999999999999,
          value: 365,
          x: 199.41358087391438,
          y: 199.41358087391438,
        },
      ],
    });
    expect(radarPointsSpy).toHaveBeenCalledTimes(3);
  });
});

describe('selectRadiusAxisForBandSize', () => {
  const selector = (state: RechartsRootState) => selectRadiusAxisForBandSize(state, 0);

  shouldReturnUndefinedOutOfContext(selector);
  shouldReturnFromInitialState(selector, undefined);

  it('should return axis object in radar chart', () => {
    const radialAxisSpy = vi.fn();
    const Comp = (): null => {
      radialAxisSpy(useAppSelectorWithStableTest(selector));
      return null;
    };
    render(
      <RadarChart width={500} height={500} data={exampleRadarData}>
        <Radar dataKey="value" />
        <PolarAngleAxis dataKey="value" />
        <Customized component={<Comp />} />
      </RadarChart>,
    );

    expect(radialAxisSpy).toHaveBeenLastCalledWith({
      allowDataOverflow: false,
      allowDecimals: false,
      allowDuplicatedCategory: true,
      dataKey: undefined,
      domain: undefined,
      id: undefined,
      includeHidden: false,
      name: undefined,
      reversed: false,
      scale: expect.any(Function),
      tick: true,
      tickCount: 5,
      ticks: undefined,
      type: 'number',
      unit: undefined,
    });
  });
});

describe('selectAngleAxisForBandSize', () => {
  const selector = (state: RechartsRootState) => selectAngleAxisForBandSize(state, 0, 0);

  shouldReturnUndefinedOutOfContext(selector);
  shouldReturnFromInitialState(selector, undefined);

  it('should return axis object in radar chart', () => {
    const angleAxisSpy = vi.fn();
    const Comp = (): null => {
      angleAxisSpy(useAppSelectorWithStableTest(selector));
      return null;
    };
    render(
      <RadarChart width={500} height={500} data={exampleRadarData}>
        <Radar dataKey="value" />
        <PolarAngleAxis dataKey="value" />
        <Customized component={<Comp />} />
      </RadarChart>,
    );

    expect(angleAxisSpy).toHaveBeenLastCalledWith({
      allowDataOverflow: false,
      allowDecimals: undefined,
      allowDuplicatedCategory: false,
      dataKey: 'value',
      domain: undefined,
      id: 0,
      includeHidden: false,
      name: undefined,
      reversed: false,
      scale: expect.any(Function),
      tick: true,
      tickCount: undefined,
      ticks: undefined,
      type: 'category',
      unit: undefined,
    });
  });
});

describe('selectAngleAxisForRadar', () => {
  const selector = (state: RechartsRootState) => selectAngleAxisWithScaleAndViewport(state, 0, 0);

  shouldReturnUndefinedOutOfContext(selector);
  shouldReturnFromInitialState(selector, undefined);

  it('should return angle axis object', () => {
    const angleAxisSpy = vi.fn();
    const Comp = (): null => {
      angleAxisSpy(useAppSelectorWithStableTest(selector));
      return null;
    };
    render(
      <RadarChart width={500} height={500} data={exampleRadarData}>
        <Radar dataKey="value" />
        <PolarAngleAxis dataKey="value" />
        <Customized component={<Comp />} />
      </RadarChart>,
    );

    expect(angleAxisSpy).toHaveBeenLastCalledWith({
      cx: 250,
      cy: 250,
      dataKey: 'value',
      scale: expect.any(Function),
      type: 'category',
    });
  });
});
