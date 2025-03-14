import { describe, it, expect, vi } from 'vitest';
import React, { ReactElement, useMemo, useState } from 'react';
import { act, render } from '@testing-library/react';
import {
  shouldReturnFromInitialState,
  shouldReturnUndefinedOutOfContext,
  useAppSelectorWithStableTest,
} from '../../helper/selectorTestHelpers';
import { ResolvedPieSettings, selectPieSectors } from '../../../src/state/selectors/pieSelectors';
import { pageData } from '../../../storybook/stories/data';
import { Pie, PieChart } from '../../../src';
import { assertNotNull } from '../../helper/assertNotNull';

const pieSettings: ResolvedPieSettings = {
  data: pageData,
  dataKey: 'uv',
  fill: '',
  legendType: undefined,
  name: undefined,
  nameKey: undefined,
};
const cells: ReadonlyArray<ReactElement> = [];

describe('selectPieSectors', () => {
  shouldReturnUndefinedOutOfContext(state => selectPieSectors(state, pieSettings, cells));
  shouldReturnFromInitialState(state => selectPieSectors(state, pieSettings, cells), undefined);

  it('should return new data after interaction', () => {
    const spy = vi.fn();
    const Comp = ({ dataKey }: { dataKey: string }): null => {
      const myPieSettings = useMemo(
        () => ({
          ...pieSettings,
          dataKey,
        }),
        [dataKey],
      );
      spy(useAppSelectorWithStableTest(state => selectPieSectors(state, myPieSettings, cells)));
      return null;
    };

    const TestCase = () => {
      const [dataKey, setDataKey] = useState('uv');
      return (
        <>
          {dataKey === 'uv' ? (
            <button type="button" onClick={() => setDataKey('pv')}>
              Change DataKey to pv
            </button>
          ) : (
            <button type="button" onClick={() => setDataKey('uv')}>
              Change DataKey to uv
            </button>
          )}
          <PieChart width={400} height={400}>
            <Pie data={pageData} dataKey={dataKey} />
            <Comp dataKey={dataKey} />
          </PieChart>
        </>
      );
    };

    const { container } = render(<TestCase />);
    const expectedResultBefore: ReturnType<typeof selectPieSectors> = [
      {
        amt: 1400,
        cornerRadius: undefined,
        cx: 200,
        cy: 200,
        endAngle: NaN,
        innerRadius: 0,
        maxRadius: 275.77164466275354,
        midAngle: NaN,
        middleRadius: 78,
        name: 'Page A',
        outerRadius: 156,
        paddingAngle: -0,
        payload: {
          amt: 1400,
          name: 'Page A',
          pv: 800,
          uv: 590,
        },
        percent: 0.07520713830465264,
        pv: 800,
        startAngle: undefined,
        tooltipPayload: [
          {
            // @ts-expect-error dataKey does not exist in type TooltipPayloadEntry
            dataKey: 'uv',
            name: 0,
            payload: {
              amt: 1400,
              name: 'Page A',
              pv: 800,
              uv: 590,
            },
            type: undefined,
            value: 590,
          },
        ],
        tooltipPosition: {
          x: NaN,
          y: NaN,
        },
        uv: 590,
        value: 590,
      },
      {
        amt: 1400,
        cornerRadius: undefined,
        cx: 200,
        cy: 200,
        endAngle: NaN,
        innerRadius: 0,
        maxRadius: 275.77164466275354,
        midAngle: NaN,
        middleRadius: 78,
        name: 'Page B',
        outerRadius: 156,
        paddingAngle: -0,
        payload: {
          amt: 1400,
          name: 'Page B',
          pv: 800,
          uv: 590,
        },
        percent: 0.07520713830465264,
        pv: 800,
        startAngle: NaN,
        tooltipPayload: [
          {
            // @ts-expect-error dataKey does not exist in type TooltipPayloadEntry
            dataKey: 'uv',
            name: 1,
            payload: {
              amt: 1400,
              name: 'Page B',
              pv: 800,
              uv: 590,
            },
            type: undefined,
            value: 590,
          },
        ],
        tooltipPosition: {
          x: NaN,
          y: NaN,
        },
        uv: 590,
        value: 590,
      },
      {
        amt: 1506,
        cornerRadius: undefined,
        cx: 200,
        cy: 200,
        endAngle: NaN,
        innerRadius: 0,
        maxRadius: 275.77164466275354,
        midAngle: NaN,
        middleRadius: 78,
        name: 'Page C',
        outerRadius: 156,
        paddingAngle: -0,
        payload: {
          amt: 1506,
          name: 'Page C',
          pv: 967,
          uv: 868,
        },
        percent: 0.11064372211599745,
        pv: 967,
        startAngle: NaN,
        tooltipPayload: [
          {
            // @ts-expect-error dataKey does not exist in type TooltipPayloadEntry
            dataKey: 'uv',
            name: 2,
            payload: {
              amt: 1506,
              name: 'Page C',
              pv: 967,
              uv: 868,
            },
            type: undefined,
            value: 868,
          },
        ],
        tooltipPosition: {
          x: NaN,
          y: NaN,
        },
        uv: 868,
        value: 868,
      },
      {
        amt: 989,
        cornerRadius: undefined,
        cx: 200,
        cy: 200,
        endAngle: NaN,
        innerRadius: 0,
        maxRadius: 275.77164466275354,
        midAngle: NaN,
        middleRadius: 78,
        name: 'Page D',
        outerRadius: 156,
        paddingAngle: -0,
        payload: {
          amt: 989,
          name: 'Page D',
          pv: 1098,
          uv: 1397,
        },
        percent: 0.17807520713830466,
        pv: 1098,
        startAngle: NaN,
        tooltipPayload: [
          {
            // @ts-expect-error dataKey does not exist in type TooltipPayloadEntry
            dataKey: 'uv',
            name: 3,
            payload: {
              amt: 989,
              name: 'Page D',
              pv: 1098,
              uv: 1397,
            },
            type: undefined,
            value: 1397,
          },
        ],
        tooltipPosition: {
          x: NaN,
          y: NaN,
        },
        uv: 1397,
        value: 1397,
      },
      {
        amt: 1228,
        cornerRadius: undefined,
        cx: 200,
        cy: 200,
        endAngle: NaN,
        innerRadius: 0,
        maxRadius: 275.77164466275354,
        midAngle: NaN,
        middleRadius: 78,
        name: 'Page E',
        outerRadius: 156,
        paddingAngle: -0,
        payload: {
          amt: 1228,
          name: 'Page E',
          pv: 1200,
          uv: 1480,
        },
        percent: 0.18865519439133205,
        pv: 1200,
        startAngle: NaN,
        tooltipPayload: [
          {
            // @ts-expect-error dataKey does not exist in type TooltipPayloadEntry
            dataKey: 'uv',
            name: 4,
            payload: {
              amt: 1228,
              name: 'Page E',
              pv: 1200,
              uv: 1480,
            },
            type: undefined,
            value: 1480,
          },
        ],
        tooltipPosition: {
          x: NaN,
          y: NaN,
        },
        uv: 1480,
        value: 1480,
      },
      {
        amt: 1100,
        cornerRadius: undefined,
        cx: 200,
        cy: 200,
        endAngle: NaN,
        innerRadius: 0,
        maxRadius: 275.77164466275354,
        midAngle: NaN,
        middleRadius: 78,
        name: 'Page F',
        outerRadius: 156,
        paddingAngle: -0,
        payload: {
          amt: 1100,
          name: 'Page F',
          pv: 1108,
          uv: 1520,
        },
        percent: 0.19375398342893563,
        pv: 1108,
        startAngle: NaN,
        tooltipPayload: [
          {
            // @ts-expect-error dataKey does not exist in type TooltipPayloadEntry
            dataKey: 'uv',
            name: 5,
            payload: {
              amt: 1100,
              name: 'Page F',
              pv: 1108,
              uv: 1520,
            },
            type: undefined,
            value: 1520,
          },
        ],
        tooltipPosition: {
          x: NaN,
          y: NaN,
        },
        uv: 1520,
        value: 1520,
      },
      {
        amt: 1700,
        cornerRadius: undefined,
        cx: 200,
        cy: 200,
        endAngle: NaN,
        innerRadius: 0,
        maxRadius: 275.77164466275354,
        midAngle: NaN,
        middleRadius: 78,
        name: 'Page G',
        outerRadius: 156,
        paddingAngle: -0,
        payload: {
          amt: 1700,
          name: 'Page G',
          pv: 680,
          uv: 1400,
        },
        percent: 0.17845761631612492,
        pv: 680,
        startAngle: NaN,
        tooltipPayload: [
          {
            // @ts-expect-error dataKey does not exist in type TooltipPayloadEntry
            dataKey: 'uv',
            name: 6,
            payload: {
              amt: 1700,
              name: 'Page G',
              pv: 680,
              uv: 1400,
            },
            type: undefined,
            value: 1400,
          },
        ],
        tooltipPosition: {
          x: NaN,
          y: NaN,
        },
        uv: 1400,
        value: 1400,
      },
    ];

    expect(spy).toHaveBeenNthCalledWith(1, undefined); // first render does not yet have the state done and parsed so it will provide undefined
    expect(spy).toHaveBeenNthCalledWith(2, expectedResultBefore); // second render has the right sectors
    // third render is because Pie has dispatched new information after the first sectors it had received.
    expect(spy).toHaveBeenNthCalledWith(3, expectedResultBefore);
    // the sectors however did not change so they should be the same reference
    expect(spy.mock.calls[1][0]).toBe(spy.mock.calls[2][0]);
    expect(spy).toHaveBeenCalledTimes(3);

    const button = container.querySelector('button');
    assertNotNull(button);
    act(() => {
      button.click();
    });

    const expectedResultAfter: ReturnType<typeof selectPieSectors> = [
      {
        amt: 1400,
        cornerRadius: undefined,
        cx: 200,
        cy: 200,
        endAngle: NaN,
        innerRadius: 0,
        maxRadius: 275.77164466275354,
        midAngle: NaN,
        middleRadius: 78,
        name: 'Page A',
        outerRadius: 156,
        paddingAngle: -0,
        payload: {
          amt: 1400,
          name: 'Page A',
          pv: 800,
          uv: 590,
        },
        percent: 0.12024650533593867,
        pv: 800,
        startAngle: undefined,
        tooltipPayload: [
          {
            // @ts-expect-error dataKey does not exist in type TooltipPayloadEntry
            dataKey: 'pv',
            name: 0,
            payload: {
              amt: 1400,
              name: 'Page A',
              pv: 800,
              uv: 590,
            },
            type: undefined,
            value: 800,
          },
        ],
        tooltipPosition: {
          x: NaN,
          y: NaN,
        },
        uv: 590,
        value: 800,
      },
      {
        amt: 1400,
        cornerRadius: undefined,
        cx: 200,
        cy: 200,
        endAngle: NaN,
        innerRadius: 0,
        maxRadius: 275.77164466275354,
        midAngle: NaN,
        middleRadius: 78,
        name: 'Page B',
        outerRadius: 156,
        paddingAngle: -0,
        payload: {
          amt: 1400,
          name: 'Page B',
          pv: 800,
          uv: 590,
        },
        percent: 0.12024650533593867,
        pv: 800,
        startAngle: NaN,
        tooltipPayload: [
          {
            // @ts-expect-error dataKey does not exist in type TooltipPayloadEntry
            dataKey: 'pv',
            name: 1,
            payload: {
              amt: 1400,
              name: 'Page B',
              pv: 800,
              uv: 590,
            },
            type: undefined,
            value: 800,
          },
        ],
        tooltipPosition: {
          x: NaN,
          y: NaN,
        },
        uv: 590,
        value: 800,
      },
      {
        amt: 1506,
        cornerRadius: undefined,
        cx: 200,
        cy: 200,
        endAngle: NaN,
        innerRadius: 0,
        maxRadius: 275.77164466275354,
        midAngle: NaN,
        middleRadius: 78,
        name: 'Page C',
        outerRadius: 156,
        paddingAngle: -0,
        payload: {
          amt: 1506,
          name: 'Page C',
          pv: 967,
          uv: 868,
        },
        percent: 0.14534796332481587,
        pv: 967,
        startAngle: NaN,
        tooltipPayload: [
          {
            // @ts-expect-error dataKey does not exist in type TooltipPayloadEntry
            dataKey: 'pv',
            name: 2,
            payload: {
              amt: 1506,
              name: 'Page C',
              pv: 967,
              uv: 868,
            },
            type: undefined,
            value: 967,
          },
        ],
        tooltipPosition: {
          x: NaN,
          y: NaN,
        },
        uv: 868,
        value: 967,
      },
      {
        amt: 989,
        cornerRadius: undefined,
        cx: 200,
        cy: 200,
        endAngle: NaN,
        innerRadius: 0,
        maxRadius: 275.77164466275354,
        midAngle: NaN,
        middleRadius: 78,
        name: 'Page D',
        outerRadius: 156,
        paddingAngle: -0,
        payload: {
          amt: 989,
          name: 'Page D',
          pv: 1098,
          uv: 1397,
        },
        percent: 0.16503832857357584,
        pv: 1098,
        startAngle: NaN,
        tooltipPayload: [
          {
            // @ts-expect-error dataKey does not exist in type TooltipPayloadEntry
            dataKey: 'pv',
            name: 3,
            payload: {
              amt: 989,
              name: 'Page D',
              pv: 1098,
              uv: 1397,
            },
            type: undefined,
            value: 1098,
          },
        ],
        tooltipPosition: {
          x: NaN,
          y: NaN,
        },
        uv: 1397,
        value: 1098,
      },
      {
        amt: 1228,
        cornerRadius: undefined,
        cx: 200,
        cy: 200,
        endAngle: NaN,
        innerRadius: 0,
        maxRadius: 275.77164466275354,
        midAngle: NaN,
        middleRadius: 78,
        name: 'Page E',
        outerRadius: 156,
        paddingAngle: -0,
        payload: {
          amt: 1228,
          name: 'Page E',
          pv: 1200,
          uv: 1480,
        },
        percent: 0.180369758003908,
        pv: 1200,
        startAngle: NaN,
        tooltipPayload: [
          {
            // @ts-expect-error dataKey does not exist in type TooltipPayloadEntry
            dataKey: 'pv',
            name: 4,
            payload: {
              amt: 1228,
              name: 'Page E',
              pv: 1200,
              uv: 1480,
            },
            type: undefined,
            value: 1200,
          },
        ],
        tooltipPosition: {
          x: NaN,
          y: NaN,
        },
        uv: 1480,
        value: 1200,
      },
      {
        amt: 1100,
        cornerRadius: undefined,
        cx: 200,
        cy: 200,
        endAngle: NaN,
        innerRadius: 0,
        maxRadius: 275.77164466275354,
        midAngle: NaN,
        middleRadius: 78,
        name: 'Page F',
        outerRadius: 156,
        paddingAngle: -0,
        payload: {
          amt: 1100,
          name: 'Page F',
          pv: 1108,
          uv: 1520,
        },
        percent: 0.16654140989027508,
        pv: 1108,
        startAngle: NaN,
        tooltipPayload: [
          {
            // @ts-expect-error dataKey does not exist in type TooltipPayloadEntry
            dataKey: 'pv',
            name: 5,
            payload: {
              amt: 1100,
              name: 'Page F',
              pv: 1108,
              uv: 1520,
            },
            type: undefined,
            value: 1108,
          },
        ],
        tooltipPosition: {
          x: NaN,
          y: NaN,
        },
        uv: 1520,
        value: 1108,
      },
      {
        amt: 1700,
        cornerRadius: undefined,
        cx: 200,
        cy: 200,
        endAngle: NaN,
        innerRadius: 0,
        maxRadius: 275.77164466275354,
        midAngle: NaN,
        middleRadius: 78,
        name: 'Page G',
        outerRadius: 156,
        paddingAngle: -0,
        payload: {
          amt: 1700,
          name: 'Page G',
          pv: 680,
          uv: 1400,
        },
        percent: 0.10220952953554788,
        pv: 680,
        startAngle: NaN,
        tooltipPayload: [
          {
            // @ts-expect-error dataKey does not exist in type TooltipPayloadEntry
            dataKey: 'pv',
            name: 6,
            payload: {
              amt: 1700,
              name: 'Page G',
              pv: 680,
              uv: 1400,
            },
            type: undefined,
            value: 680,
          },
        ],
        tooltipPosition: {
          x: NaN,
          y: NaN,
        },
        uv: 1400,
        value: 680,
      },
    ];

    // fourth render is when the Pie has dispatched new information and chart is in the middle of synchronization
    expect(spy).toHaveBeenNthCalledWith(4, undefined);
    // renders five and six are stabilized, the sectors are now updated
    expect(spy).toHaveBeenNthCalledWith(5, expectedResultAfter);
    // render number six is because Pie has dispatched new information after the first sectors it had received.
    expect(spy).toHaveBeenNthCalledWith(6, expectedResultAfter);
    // the sectors however did not change so they should be the same reference
    expect(spy.mock.calls[4][0]).toBe(spy.mock.calls[5][0]);

    expect(spy).toHaveBeenCalledTimes(6);
  });
});
