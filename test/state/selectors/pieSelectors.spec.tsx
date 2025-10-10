import { describe, expect, it } from 'vitest';
import React, { ReactElement, ReactNode, useState } from 'react';
import { act } from '@testing-library/react';
import { shouldReturnFromInitialState, shouldReturnUndefinedOutOfContext } from '../../helper/selectorTestHelpers';
import { selectPieSectors } from '../../../src/state/selectors/pieSelectors';
import { pageData } from '../../../storybook/stories/data';
import { Pie, PieChart } from '../../../src';
import { assertNotNull } from '../../helper/assertNotNull';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { RechartsRootState } from '../../../src/state/store';
import { PieSectorDataItem } from '../../../src/polar/Pie';

const cells: ReadonlyArray<ReactElement> = [];

describe('selectPieSectors', () => {
  const selector = (state: RechartsRootState) => selectPieSectors(state, 'pie-id', cells);

  shouldReturnUndefinedOutOfContext(selector);
  shouldReturnFromInitialState(selector, undefined);

  describe('after interaction', () => {
    const TestCase = ({ children }: { children: ReactNode }) => {
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
            <Pie data={pageData} dataKey={dataKey} id="pie-id" />
            {children}
          </PieChart>
        </>
      );
    };

    const renderTestCase = createSelectorTestCase(({ children }) => <TestCase>{children}</TestCase>);

    it('should return new data', () => {
      const { container, spy } = renderTestCase(selector);
      const expectedResultBefore: ReadonlyArray<PieSectorDataItem> = [
        {
          amt: 1400,
          cornerRadius: undefined,
          cx: 200,
          cy: 200,
          endAngle: 27.074569789674953,
          fill: '#808080',
          innerRadius: 0,
          maxRadius: 275.77164466275354,
          midAngle: 13.537284894837477,
          middleRadius: 78,
          name: 'Page A',
          outerRadius: 156,
          paddingAngle: 0,
          payload: {
            amt: 1400,
            name: 'Page A',
            pv: 800,
            uv: 590,
          },
          percent: 0.07520713830465264,
          pv: 800,
          startAngle: 0,
          stroke: '#fff',
          tooltipPayload: [
            {
              dataKey: 'uv',
              name: 'Page A',
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
            x: 275.83298850246524,
            y: 181.74190988123425,
          },
          uv: 590,
          value: 590,
        },
        {
          amt: 1400,
          cornerRadius: undefined,
          cx: 200,
          cy: 200,
          endAngle: 54.14913957934991,
          fill: '#808080',
          innerRadius: 0,
          maxRadius: 275.77164466275354,
          midAngle: 40.61185468451243,
          middleRadius: 78,
          name: 'Page B',
          outerRadius: 156,
          paddingAngle: 0,
          payload: {
            amt: 1400,
            name: 'Page B',
            pv: 800,
            uv: 590,
          },
          percent: 0.07520713830465264,
          pv: 800,
          startAngle: 27.074569789674953,
          stroke: '#fff',
          tooltipPayload: [
            {
              dataKey: 'uv',
              name: 'Page B',
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
            x: 259.21265821376363,
            y: 149.22735867359262,
          },
          uv: 590,
          value: 590,
        },
        {
          amt: 1506,
          cornerRadius: undefined,
          cx: 200,
          cy: 200,
          endAngle: 93.98087954110899,
          fill: '#808080',
          innerRadius: 0,
          maxRadius: 275.77164466275354,
          midAngle: 74.06500956022944,
          middleRadius: 78,
          name: 'Page C',
          outerRadius: 156,
          paddingAngle: 0,
          payload: {
            amt: 1506,
            name: 'Page C',
            pv: 967,
            uv: 868,
          },
          percent: 0.11064372211599745,
          pv: 967,
          startAngle: 54.14913957934991,
          stroke: '#fff',
          tooltipPayload: [
            {
              dataKey: 'uv',
              name: 'Page C',
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
            x: 221.41462711149688,
            y: 124.99724174621615,
          },
          uv: 868,
          value: 868,
        },
        {
          amt: 989,
          cornerRadius: undefined,
          cx: 200,
          cy: 200,
          endAngle: 158.08795411089866,
          fill: '#808080',
          innerRadius: 0,
          maxRadius: 275.77164466275354,
          midAngle: 126.03441682600382,
          middleRadius: 78,
          name: 'Page D',
          outerRadius: 156,
          paddingAngle: 0,
          payload: {
            amt: 989,
            name: 'Page D',
            pv: 1098,
            uv: 1397,
          },
          percent: 0.17807520713830466,
          pv: 1098,
          startAngle: 93.98087954110899,
          stroke: '#fff',
          tooltipPayload: [
            {
              dataKey: 'uv',
              name: 'Page D',
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
            x: 154.11485325185743,
            y: 136.92422566546313,
          },
          uv: 1397,
          value: 1397,
        },
        {
          amt: 1228,
          cornerRadius: undefined,
          cx: 200,
          cy: 200,
          endAngle: 226.0038240917782,
          fill: '#808080',
          innerRadius: 0,
          maxRadius: 275.77164466275354,
          midAngle: 192.04588910133845,
          middleRadius: 78,
          name: 'Page E',
          outerRadius: 156,
          paddingAngle: 0,
          payload: {
            amt: 1228,
            name: 'Page E',
            pv: 1200,
            uv: 1480,
          },
          percent: 0.18865519439133205,
          pv: 1200,
          startAngle: 158.08795411089866,
          stroke: '#fff',
          tooltipPayload: [
            {
              dataKey: 'uv',
              name: 'Page E',
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
            x: 123.71750015478113,
            y: 216.27821296593038,
          },
          uv: 1480,
          value: 1480,
        },
        {
          amt: 1100,
          cornerRadius: undefined,
          cx: 200,
          cy: 200,
          endAngle: 295.75525812619503,
          fill: '#808080',
          innerRadius: 0,
          maxRadius: 275.77164466275354,
          midAngle: 260.8795411089866,
          middleRadius: 78,
          name: 'Page F',
          outerRadius: 156,
          paddingAngle: 0,
          payload: {
            amt: 1100,
            name: 'Page F',
            pv: 1108,
            uv: 1520,
          },
          percent: 0.19375398342893563,
          pv: 1108,
          startAngle: 226.0038240917782,
          stroke: '#fff',
          tooltipPayload: [
            {
              dataKey: 'uv',
              name: 'Page F',
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
            x: 187.636170239227,
            y: 277.01386702176836,
          },
          uv: 1520,
          value: 1520,
        },
        {
          amt: 1700,
          cornerRadius: undefined,
          cx: 200,
          cy: 200,
          endAngle: 360,
          fill: '#808080',
          innerRadius: 0,
          maxRadius: 275.77164466275354,
          midAngle: 327.8776290630975,
          middleRadius: 78,
          name: 'Page G',
          outerRadius: 156,
          paddingAngle: 0,
          payload: {
            amt: 1700,
            name: 'Page G',
            pv: 680,
            uv: 1400,
          },
          percent: 0.17845761631612492,
          pv: 680,
          startAngle: 295.75525812619503,
          stroke: '#fff',
          tooltipPayload: [
            {
              dataKey: 'uv',
              name: 'Page G',
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
            x: 266.0593211796189,
            y: 241.47488499427035,
          },
          uv: 1400,
          value: 1400,
        },
      ];

      expect(spy).toHaveBeenNthCalledWith(1, undefined); // first render does not yet have the state done and parsed so it will provide undefined
      expect(spy).toHaveBeenNthCalledWith(2, expectedResultBefore); // second render has the right sectors
      expect(spy).toHaveBeenCalledTimes(2);

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
          endAngle: 43.28874192093792,
          fill: '#808080',
          innerRadius: 0,
          maxRadius: 275.77164466275354,
          midAngle: 21.64437096046896,
          middleRadius: 78,
          name: 'Page A',
          outerRadius: 156,
          paddingAngle: 0,
          payload: {
            amt: 1400,
            name: 'Page A',
            pv: 800,
            uv: 590,
          },
          percent: 0.12024650533593867,
          pv: 800,
          startAngle: 0,
          stroke: '#fff',
          tooltipPayload: [
            {
              dataKey: 'pv',
              name: 'Page A',
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
            x: 272.5003076980357,
            y: 171.23013062785745,
          },
          uv: 590,
          value: 800,
        },
        {
          amt: 1400,
          cornerRadius: undefined,
          cx: 200,
          cy: 200,
          endAngle: 86.57748384187585,
          fill: '#808080',
          innerRadius: 0,
          maxRadius: 275.77164466275354,
          midAngle: 64.93311288140688,
          middleRadius: 78,
          name: 'Page B',
          outerRadius: 156,
          paddingAngle: 0,
          payload: {
            amt: 1400,
            name: 'Page B',
            pv: 800,
            uv: 590,
          },
          percent: 0.12024650533593867,
          pv: 800,
          startAngle: 43.28874192093792,
          stroke: '#fff',
          tooltipPayload: [
            {
              dataKey: 'pv',
              name: 'Page B',
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
            x: 233.0467278158159,
            y: 129.34652322307574,
          },
          uv: 590,
          value: 800,
        },
        {
          amt: 1506,
          cornerRadius: undefined,
          cx: 200,
          cy: 200,
          endAngle: 138.90275063880955,
          fill: '#808080',
          innerRadius: 0,
          maxRadius: 275.77164466275354,
          midAngle: 112.7401172403427,
          middleRadius: 78,
          name: 'Page C',
          outerRadius: 156,
          paddingAngle: 0,
          payload: {
            amt: 1506,
            name: 'Page C',
            pv: 967,
            uv: 868,
          },
          percent: 0.14534796332481587,
          pv: 967,
          startAngle: 86.57748384187585,
          stroke: '#fff',
          tooltipPayload: [
            {
              dataKey: 'pv',
              name: 'Page C',
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
            x: 169.8489526980104,
            y: 128.06312248510375,
          },
          uv: 868,
          value: 967,
        },
        {
          amt: 989,
          cornerRadius: undefined,
          cx: 200,
          cy: 200,
          endAngle: 198.31654892529684,
          fill: '#808080',
          innerRadius: 0,
          maxRadius: 275.77164466275354,
          midAngle: 168.6096497820532,
          middleRadius: 78,
          name: 'Page D',
          outerRadius: 156,
          paddingAngle: 0,
          payload: {
            amt: 989,
            name: 'Page D',
            pv: 1098,
            uv: 1397,
          },
          percent: 0.16503832857357584,
          pv: 1098,
          startAngle: 138.90275063880955,
          stroke: '#fff',
          tooltipPayload: [
            {
              dataKey: 'pv',
              name: 'Page D',
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
            x: 123.53625287967324,
            y: 184.59560529203694,
          },
          uv: 1397,
          value: 1098,
        },
        {
          amt: 1228,
          cornerRadius: undefined,
          cx: 200,
          cy: 200,
          endAngle: 263.2496618067037,
          fill: '#808080',
          innerRadius: 0,
          maxRadius: 275.77164466275354,
          midAngle: 230.78310536600029,
          middleRadius: 78,
          name: 'Page E',
          outerRadius: 156,
          paddingAngle: 0,
          payload: {
            amt: 1228,
            name: 'Page E',
            pv: 1200,
            uv: 1480,
          },
          percent: 0.180369758003908,
          pv: 1200,
          startAngle: 198.31654892529684,
          stroke: '#fff',
          tooltipPayload: [
            {
              dataKey: 'pv',
              name: 'Page E',
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
            x: 150.6838931027986,
            y: 260.4311310543151,
          },
          uv: 1480,
          value: 1200,
        },
        {
          amt: 1100,
          cornerRadius: undefined,
          cx: 200,
          cy: 200,
          endAngle: 323.20456936720274,
          fill: '#808080',
          innerRadius: 0,
          maxRadius: 275.77164466275354,
          midAngle: 293.22711558695323,
          middleRadius: 78,
          name: 'Page F',
          outerRadius: 156,
          paddingAngle: 0,
          payload: {
            amt: 1100,
            name: 'Page F',
            pv: 1108,
            uv: 1520,
          },
          percent: 0.16654140989027508,
          pv: 1108,
          startAngle: 263.2496618067037,
          stroke: '#fff',
          tooltipPayload: [
            {
              dataKey: 'pv',
              name: 'Page F',
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
            x: 230.76139445771477,
            y: 271.67800646653666,
          },
          uv: 1520,
          value: 1108,
        },
        {
          amt: 1700,
          cornerRadius: undefined,
          cx: 200,
          cy: 200,
          endAngle: 360,
          fill: '#808080',
          innerRadius: 0,
          maxRadius: 275.77164466275354,
          midAngle: 341.6022846836014,
          middleRadius: 78,
          name: 'Page G',
          outerRadius: 156,
          paddingAngle: 0,
          payload: {
            amt: 1700,
            name: 'Page G',
            pv: 680,
            uv: 1400,
          },
          percent: 0.10220952953554788,
          pv: 680,
          startAngle: 323.20456936720274,
          stroke: '#fff',
          tooltipPayload: [
            {
              dataKey: 'pv',
              name: 'Page G',
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
            x: 274.01331060303147,
            y: 224.61767360209305,
          },
          uv: 1400,
          value: 680,
        },
      ];

      // third render is when the Pie has rendered again after the dataKey change
      expect(spy).toHaveBeenNthCalledWith(3, expectedResultAfter);
      expect(spy).toHaveBeenCalledTimes(3);
    });
  });
});
