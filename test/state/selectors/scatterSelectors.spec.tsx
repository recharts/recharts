import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { useAppSelector } from '../../../src/state/hooks';
import { ResolvedScatterSettings, selectScatterPoints } from '../../../src/state/selectors/scatterSelectors';
import { Customized, Pie, PieChart, Scatter, ScatterChart } from '../../../src';
import { pageData } from '../../../storybook/stories/data';
import {
  shouldReturnFromInitialState,
  shouldReturnUndefinedOutOfContext,
  useAppSelectorWithStableTest,
} from '../../helper/selectorTestHelpers';
import { RechartsRootState } from '../../../src/state/store';

describe('selectScatterPoints', () => {
  const scatterSettings: ResolvedScatterSettings = {
    name: undefined,
    tooltipType: undefined,
    data: pageData,
    dataKey: 'uv',
  };

  const selector = (state: RechartsRootState) => {
    return selectScatterPoints(state, 'xAxis', 'yAxis', 'zAxis', scatterSettings, [], false);
  };

  shouldReturnUndefinedOutOfContext(selector);
  shouldReturnFromInitialState(selector, undefined);

  it('should return undefined in a chart that does not support Scatter', async () => {
    const scatterPointsSpy = vi.fn();
    const Comp = (): null => {
      const scatterPoints = useAppSelectorWithStableTest(state =>
        selectScatterPoints(state, 0, 0, 0, scatterSettings, [], false),
      );
      scatterPointsSpy(scatterPoints);
      return null;
    };
    render(
      <PieChart width={100} height={200}>
        <Pie data={pageData} dataKey="uv" isAnimationActive={false} cx="50%" cy="50%" outerRadius={80} />
        <Customized component={<Comp />} />
      </PieChart>,
    );
    expect(scatterPointsSpy).toHaveBeenCalledWith(undefined);
    expect(scatterPointsSpy).toHaveBeenCalledTimes(1);
  });

  it('should return computed scatter points when data is defined on Scatter child', () => {
    const scatterPointsSpy = vi.fn();
    // this really should be ReadonlyArray<ScatterPointItem> but because Scatter expands all properties of everything, the type does not really match the object.
    const expectedPoints: ReadonlyArray<any> = [
      {
        name: 'Page A',
        uv: 590,
        pv: 800,
        amt: 1400,
        cx: 11.428571428571429,
        cy: 124.9375,
        x: 6.915054760189379,
        y: 120.42398333161795,
        width: 9.0270333367641,
        height: 9.0270333367641,
        size: 64,
        node: {
          x: 590,
          y: 590,
          z: '-',
        },
        tooltipPayload: [
          {
            unit: '',
            value: 590,
            payload: {
              name: 'Page A',
              uv: 590,
              pv: 800,
              amt: 1400,
            },
            dataKey: 'uv',
          },
          {
            unit: '',
            value: 590,
            payload: {
              name: 'Page A',
              uv: 590,
              pv: 800,
              amt: 1400,
            },
            dataKey: 'uv',
          },
        ],
        tooltipPosition: {
          x: 11.428571428571429,
          y: 124.9375,
        },
        payload: {
          name: 'Page A',
          uv: 590,
          pv: 800,
          amt: 1400,
        },
      },
      {
        name: 'Page B',
        uv: 590,
        pv: 800,
        amt: 1400,
        cx: 24.285714285714285,
        cy: 124.9375,
        x: 19.772197617332235,
        y: 120.42398333161795,
        width: 9.0270333367641,
        height: 9.0270333367641,
        size: 64,
        node: {
          x: 590,
          y: 590,
          z: '-',
        },
        tooltipPayload: [
          {
            unit: '',
            value: 590,
            payload: {
              name: 'Page B',
              uv: 590,
              pv: 800,
              amt: 1400,
            },
            dataKey: 'uv',
          },
          {
            unit: '',
            value: 590,
            payload: {
              name: 'Page B',
              uv: 590,
              pv: 800,
              amt: 1400,
            },
            dataKey: 'uv',
          },
        ],
        tooltipPosition: {
          x: 24.285714285714285,
          y: 124.9375,
        },
        payload: {
          name: 'Page B',
          uv: 590,
          pv: 800,
          amt: 1400,
        },
      },
      {
        name: 'Page C',
        uv: 868,
        pv: 967,
        amt: 1506,
        cx: 37.142857142857146,
        cy: 91.92500000000001,
        x: 32.62934047447509,
        y: 87.41148333161796,
        width: 9.0270333367641,
        height: 9.0270333367641,
        size: 64,
        node: {
          x: 868,
          y: 868,
          z: '-',
        },
        tooltipPayload: [
          {
            unit: '',
            value: 868,
            payload: {
              name: 'Page C',
              uv: 868,
              pv: 967,
              amt: 1506,
            },
            dataKey: 'uv',
          },
          {
            unit: '',
            value: 868,
            payload: {
              name: 'Page C',
              uv: 868,
              pv: 967,
              amt: 1506,
            },
            dataKey: 'uv',
          },
        ],
        tooltipPosition: {
          x: 37.142857142857146,
          y: 91.92500000000001,
        },
        payload: {
          name: 'Page C',
          uv: 868,
          pv: 967,
          amt: 1506,
        },
      },
      {
        name: 'Page D',
        uv: 1397,
        pv: 1098,
        amt: 989,
        cx: 50,
        cy: 29.106249999999992,
        x: 45.48648333161795,
        y: 24.592733331617943,
        width: 9.0270333367641,
        height: 9.0270333367641,
        size: 64,
        node: {
          x: 1397,
          y: 1397,
          z: '-',
        },
        tooltipPayload: [
          {
            unit: '',
            value: 1397,
            payload: {
              name: 'Page D',
              uv: 1397,
              pv: 1098,
              amt: 989,
            },
            dataKey: 'uv',
          },
          {
            unit: '',
            value: 1397,
            payload: {
              name: 'Page D',
              uv: 1397,
              pv: 1098,
              amt: 989,
            },
            dataKey: 'uv',
          },
        ],
        tooltipPosition: {
          x: 50,
          y: 29.106249999999992,
        },
        payload: {
          name: 'Page D',
          uv: 1397,
          pv: 1098,
          amt: 989,
        },
      },
      {
        name: 'Page E',
        uv: 1480,
        pv: 1200,
        amt: 1228,
        cx: 62.85714285714286,
        cy: 19.249999999999993,
        x: 58.34362618876081,
        y: 14.736483331617944,
        width: 9.0270333367641,
        height: 9.0270333367641,
        size: 64,
        node: {
          x: 1480,
          y: 1480,
          z: '-',
        },
        tooltipPayload: [
          {
            unit: '',
            value: 1480,
            payload: {
              name: 'Page E',
              uv: 1480,
              pv: 1200,
              amt: 1228,
            },
            dataKey: 'uv',
          },
          {
            unit: '',
            value: 1480,
            payload: {
              name: 'Page E',
              uv: 1480,
              pv: 1200,
              amt: 1228,
            },
            dataKey: 'uv',
          },
        ],
        tooltipPosition: {
          x: 62.85714285714286,
          y: 19.249999999999993,
        },
        payload: {
          name: 'Page E',
          uv: 1480,
          pv: 1200,
          amt: 1228,
        },
      },
      {
        name: 'Page F',
        uv: 1520,
        pv: 1108,
        amt: 1100,
        cx: 75.71428571428572,
        cy: 14.500000000000009,
        x: 71.20076904590367,
        y: 9.986483331617958,
        width: 9.0270333367641,
        height: 9.0270333367641,
        size: 64,
        node: {
          x: 1520,
          y: 1520,
          z: '-',
        },
        tooltipPayload: [
          {
            unit: '',
            value: 1520,
            payload: {
              name: 'Page F',
              uv: 1520,
              pv: 1108,
              amt: 1100,
            },
            dataKey: 'uv',
          },
          {
            unit: '',
            value: 1520,
            payload: {
              name: 'Page F',
              uv: 1520,
              pv: 1108,
              amt: 1100,
            },
            dataKey: 'uv',
          },
        ],
        tooltipPosition: {
          x: 75.71428571428572,
          y: 14.500000000000009,
        },
        payload: {
          name: 'Page F',
          uv: 1520,
          pv: 1108,
          amt: 1100,
        },
      },
      {
        name: 'Page G',
        uv: 1400,
        pv: 680,
        amt: 1700,
        cx: 88.57142857142857,
        cy: 28.75,
        x: 84.05791190304652,
        y: 24.23648333161795,
        width: 9.0270333367641,
        height: 9.0270333367641,
        size: 64,
        node: {
          x: 1400,
          y: 1400,
          z: '-',
        },
        tooltipPayload: [
          {
            unit: '',
            value: 1400,
            payload: {
              name: 'Page G',
              uv: 1400,
              pv: 680,
              amt: 1700,
            },
            dataKey: 'uv',
          },
          {
            unit: '',
            value: 1400,
            payload: {
              name: 'Page G',
              uv: 1400,
              pv: 680,
              amt: 1700,
            },
            dataKey: 'uv',
          },
        ],
        tooltipPosition: {
          x: 88.57142857142857,
          y: 28.75,
        },
        payload: {
          name: 'Page G',
          uv: 1400,
          pv: 680,
          amt: 1700,
        },
      },
    ];
    const Comp = (): null => {
      const scatterPoints = useAppSelectorWithStableTest(state =>
        selectScatterPoints(state, 0, 0, 0, scatterSettings, undefined, false),
      );
      scatterPointsSpy(scatterPoints);
      return null;
    };
    render(
      <ScatterChart width={100} height={200}>
        <Scatter data={scatterSettings.data} dataKey={scatterSettings.dataKey}>
          <Comp />
        </Scatter>
      </ScatterChart>,
    );
    expect(scatterPointsSpy).toHaveBeenCalledTimes(3);
    expect(scatterPointsSpy).toHaveBeenCalledWith(expectedPoints);
  });

  it('should be stable', () => {
    expect.assertions(3);
    const Comp = (): null => {
      const result1 = useAppSelector(state => selectScatterPoints(state, 0, 0, 0, scatterSettings, undefined, false));
      const result2 = useAppSelector(state => selectScatterPoints(state, 0, 0, 0, scatterSettings, undefined, false));
      expect(result1).toBe(result2);
      return null;
    };
    render(
      <ScatterChart width={100} height={200}>
        <Scatter data={scatterSettings.data} dataKey={scatterSettings.dataKey}>
          <Comp />
        </Scatter>
      </ScatterChart>,
    );
  });
});
