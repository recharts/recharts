import React, { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { act, render } from '@testing-library/react';
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
import { assertNotNull } from '../../helper/assertNotNull';

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
        <Comp />
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
    expect(radarPointsSpy).toHaveBeenCalledTimes(2);
  });

  it('should return new data after interaction', () => {
    const spy = vi.fn();
    const Comp = ({ dataKey }: { dataKey: string }): null => {
      spy(useAppSelectorWithStableTest(state => selectRadarPoints(state, 0, 0, false, dataKey)));
      return null;
    };
    const TestCase = () => {
      const [dataKey, setDataKey] = useState('value');
      return (
        <>
          {dataKey === 'value' ? (
            <button type="button" onClick={() => setDataKey('half')}>
              Change DataKey to half
            </button>
          ) : (
            <button type="button" onClick={() => setDataKey('value')}>
              Change DataKey to value
            </button>
          )}
          <RadarChart data={exampleRadarData} width={400} height={400}>
            <Radar dataKey={dataKey} />
            <Comp dataKey={dataKey} />
          </RadarChart>
        </>
      );
    };
    const { container } = render(<TestCase />);
    const expectedResultBefore: ReturnType<typeof selectRadarPoints> = {
      baseLinePoints: [],
      isRange: false,
      points: [
        {
          angle: 90,
          cx: 200,
          cy: 200,
          // @ts-expect-error expected string, got number
          name: 0,
          payload: {
            half: 210,
            name: 'iPhone 3GS',
            value: 420,
          },
          radius: 65.52,
          value: 420,
          x: 200,
          y: 134.48000000000002,
        },
        {
          angle: 45,
          cx: 200,
          cy: 200,
          // @ts-expect-error expected string, got number
          name: 1,
          payload: {
            half: 230,
            name: 'iPhone 4',
            value: 460,
          },
          radius: 71.76,
          value: 460,
          x: 250.74198261794666,
          y: 149.25801738205337,
        },
        {
          angle: 0,
          cx: 200,
          cy: 200,
          // @ts-expect-error expected string, got number
          name: 2,
          payload: {
            half: 500,
            name: 'iPhone 4s',
            value: 999,
          },
          radius: 155.844,
          value: 999,
          x: 355.844,
          y: 200,
        },
        {
          angle: -45,
          cx: 200,
          cy: 200,
          // @ts-expect-error expected string, got number
          name: 3,
          payload: {
            half: 250,
            name: 'iPhone 5',
            value: 500,
          },
          radius: 78,
          value: 500,
          x: 255.1543289325507,
          y: 255.1543289325507,
        },
        {
          angle: -90,
          cx: 200,
          cy: 200,
          // @ts-expect-error expected string, got number
          name: 4,
          payload: {
            half: 432,
            name: 'iPhone 5s',
            value: 864,
          },
          radius: 134.784,
          value: 864,
          x: 200,
          y: 334.784,
        },
        {
          angle: -135,
          cx: 200,
          cy: 200,
          // @ts-expect-error expected string, got number
          name: 5,
          payload: {
            half: 325,
            name: 'iPhone 6',
            value: 650,
          },
          radius: 101.4,
          value: 650,
          x: 128.2993723876841,
          y: 271.70062761231594,
        },
        {
          angle: -180,
          cx: 200,
          cy: 200,
          // @ts-expect-error expected string, got number
          name: 6,
          payload: {
            half: 383,
            name: 'iPhone 6s',
            value: 765,
          },
          radius: 119.34,
          value: 765,
          x: 80.66,
          y: 200.00000000000003,
        },
        {
          angle: -225,
          cx: 200,
          cy: 200,
          // @ts-expect-error expected string, got number
          name: 7,
          payload: {
            half: 183,
            name: 'iPhone 5se',
            value: 365,
          },
          radius: 56.94,
          value: 365,
          x: 159.737339879238,
          y: 159.737339879238,
        },
      ],
    };

    expect(spy).toHaveBeenNthCalledWith(1, undefined); // first render does not yet have the state done and parsed so it will provide undefined
    expect(spy).toHaveBeenNthCalledWith(2, expectedResultBefore); // second render has the right sectors
    expect(spy).toHaveBeenCalledTimes(2);

    const button = container.querySelector('button');
    assertNotNull(button);
    act(() => {
      button.click();
    });

    const expectedResultAfter: ReturnType<typeof selectRadarPoints> = {
      baseLinePoints: [],
      isRange: false,
      points: [
        {
          angle: 90,
          cx: 200,
          cy: 200,
          // @ts-expect-error expected string, got number
          name: 0,
          payload: {
            half: 210,
            name: 'iPhone 3GS',
            value: 420,
          },
          radius: 54.599999999999994,
          value: 210,
          x: 200,
          y: 145.4,
        },
        {
          angle: 45,
          cx: 200,
          cy: 200,
          // @ts-expect-error expected string, got number
          name: 1,
          payload: {
            half: 230,
            name: 'iPhone 4',
            value: 460,
          },
          radius: 59.800000000000004,
          value: 230,
          x: 242.28498551495557,
          y: 157.71501448504446,
        },
        {
          angle: 0,
          cx: 200,
          cy: 200,
          // @ts-expect-error expected string, got number
          name: 2,
          payload: {
            half: 500,
            name: 'iPhone 4s',
            value: 999,
          },
          radius: 130,
          value: 500,
          x: 330,
          y: 200,
        },
        {
          angle: -45,
          cx: 200,
          cy: 200,
          // @ts-expect-error expected string, got number
          name: 3,
          payload: {
            half: 250,
            name: 'iPhone 5',
            value: 500,
          },
          radius: 65,
          value: 250,
          x: 245.9619407771256,
          y: 245.9619407771256,
        },
        {
          angle: -90,
          cx: 200,
          cy: 200,
          // @ts-expect-error expected string, got number
          name: 4,
          payload: {
            half: 432,
            name: 'iPhone 5s',
            value: 864,
          },
          radius: 112.32,
          value: 432,
          x: 200,
          y: 312.32,
        },
        {
          angle: -135,
          cx: 200,
          cy: 200,
          // @ts-expect-error expected string, got number
          name: 5,
          payload: {
            half: 325,
            name: 'iPhone 6',
            value: 650,
          },
          radius: 84.5,
          value: 325,
          x: 140.24947698973673,
          y: 259.7505230102633,
        },
        {
          angle: -180,
          cx: 200,
          cy: 200,
          // @ts-expect-error expected string, got number
          name: 6,
          payload: {
            half: 383,
            name: 'iPhone 6s',
            value: 765,
          },
          radius: 99.58,
          value: 383,
          x: 100.42,
          y: 200,
        },
        {
          angle: -225,
          cx: 200,
          cy: 200,
          // @ts-expect-error expected string, got number
          name: 7,
          payload: {
            half: 183,
            name: 'iPhone 5se',
            value: 365,
          },
          radius: 47.58,
          value: 183,
          x: 166.35585935114406,
          y: 166.3558593511441,
        },
      ],
    };

    // render four is stabilized, the points are now updated
    expect(spy).toHaveBeenNthCalledWith(4, expectedResultAfter);

    expect(spy).toHaveBeenCalledTimes(4);
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
      id: 0,
      includeHidden: false,
      name: undefined,
      reversed: false,
      scale: expect.toBeRechartsScale({
        domain: [0, 1000],
        range: [0, 196],
      }),
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
      scale: expect.toBeRechartsScale({ domain: [420, 460, 999, 500, 864, 650, 765, 365], range: [90, -270] }),
      tick: true,
      tickCount: undefined,
      ticks: undefined,
      type: 'category',
      unit: undefined,
    });
  });
});

describe('selectAngleAxisWithScaleAndViewport', () => {
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
      scale: expect.toBeRechartsScale({ domain: [420, 460, 999, 500, 864, 650, 765, 365], range: [90, -270] }),
      type: 'category',
    });
  });
});
