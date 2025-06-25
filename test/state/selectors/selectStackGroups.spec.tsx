import { describe, expect, it, vi } from 'vitest';
import { act, fireEvent, render } from '@testing-library/react';
import React from 'react';
import { RechartsRootState } from '../../../src/state/store';
import { selectStackGroups } from '../../../src/state/selectors/axisSelectors';
import {
  shouldReturnFromInitialState,
  shouldReturnUndefinedOutOfContext,
  useAppSelectorWithStableTest,
} from '../../helper/selectorTestHelpers';
import { useIsPanorama } from '../../../src/context/PanoramaContext';
import { Area, AreaChart, Bar, BarChart, Legend, LegendPayload } from '../../../src';
import { PageData } from '../../_data';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { assertNotNull } from '../../helper/assertNotNull';

describe('selectStackGroups', () => {
  const selector = (state: RechartsRootState) => selectStackGroups(state, 'xAxis', 0, false);

  shouldReturnUndefinedOutOfContext(selector);
  shouldReturnFromInitialState(selector, {});

  it('should return empty object in an empty BarChart', () => {
    const stackGroupsSpy = vi.fn();
    const Comp = (): null => {
      const isPanorama = useIsPanorama();
      stackGroupsSpy(useAppSelectorWithStableTest(state => selectStackGroups(state, 'xAxis', 0, isPanorama)));
      return null;
    };
    render(
      <BarChart width={100} height={100}>
        <Comp />
      </BarChart>,
    );
    expect(stackGroupsSpy).toHaveBeenLastCalledWith({});
    expect(stackGroupsSpy).toHaveBeenCalledTimes(1);
  });

  it('should return object keyed by stack IDs, with bar settings and stacked data', () => {
    const stackGroupsSpy = vi.fn();
    const Comp = (): null => {
      const isPanorama = useIsPanorama();
      stackGroupsSpy(useAppSelectorWithStableTest(state => selectStackGroups(state, 'xAxis', 0, isPanorama)));
      return null;
    };
    render(
      <BarChart width={100} height={100} data={PageData}>
        <Bar dataKey="uv" stackId="a" />
        <Bar dataKey="pv" stackId="a" />
        <Bar dataKey="uv" stackId="b" />
        <Bar dataKey="amt" stackId="b" />
        <Comp />
      </BarChart>,
    );
    expect(stackGroupsSpy).toHaveBeenLastCalledWith({
      a: {
        graphicalItems: [
          {
            barSize: undefined,
            data: null,
            dataKey: 'uv',
            errorBars: [],
            hide: false,
            isPanorama: false,
            stackId: 'a',
            type: 'bar',
            xAxisId: 0,
            yAxisId: 0,
            zAxisId: 0,
          },
          {
            barSize: undefined,
            data: null,
            dataKey: 'pv',
            errorBars: [],
            hide: false,
            isPanorama: false,
            stackId: 'a',
            type: 'bar',
            xAxisId: 0,
            yAxisId: 0,
            zAxisId: 0,
          },
        ],
        stackedData: expect.toBeRechartsStackedData([
          [
            [0, 400],
            [0, 300],
            [0, 300],
            [0, 200],
            [0, 278],
            [0, 189],
          ],
          [
            [400, 2800],
            [300, 4867],
            [300, 1698],
            [200, 10000],
            [278, 4186],
            [189, 4989],
          ],
        ]),
      },
      b: {
        graphicalItems: [
          {
            barSize: undefined,
            data: null,
            dataKey: 'uv',
            errorBars: [],
            hide: false,
            isPanorama: false,
            stackId: 'b',
            type: 'bar',
            xAxisId: 0,
            yAxisId: 0,
            zAxisId: 0,
          },
          {
            barSize: undefined,
            data: null,
            dataKey: 'amt',
            errorBars: [],
            hide: false,
            isPanorama: false,
            stackId: 'b',
            type: 'bar',
            xAxisId: 0,
            yAxisId: 0,
            zAxisId: 0,
          },
        ],
        stackedData: expect.toBeRechartsStackedData([
          [
            [0, 400],
            [0, 300],
            [0, 300],
            [0, 200],
            [0, 278],
            [0, 189],
          ],
          [
            [400, 2800],
            [300, 2700],
            [300, 2700],
            [200, 2600],
            [278, 2678],
            [189, 2589],
          ],
        ]),
      },
    });
    expect(stackGroupsSpy).toHaveBeenCalledTimes(2);
  });

  it('should return empty object for Bars without stackId', () => {
    const stackGroupsSpy = vi.fn();
    const Comp = (): null => {
      const isPanorama = useIsPanorama();
      stackGroupsSpy(useAppSelectorWithStableTest(state => selectStackGroups(state, 'xAxis', 0, isPanorama)));
      return null;
    };
    render(
      <BarChart width={100} height={100} data={PageData}>
        <Bar dataKey="uv" />
        <Bar dataKey="pv" />
        <Bar dataKey="amt" />
        <Comp />
      </BarChart>,
    );
    expect(stackGroupsSpy).toHaveBeenLastCalledWith({});
    expect(stackGroupsSpy).toHaveBeenCalledTimes(2);
  });

  describe('when items in chart get hidden and then displayed again', () => {
    function MyTestCase({ children }: { children: React.ReactNode }) {
      const [hiddenItems, setHiddenItems] = React.useState<ReadonlyArray<string>>([]);

      const handleClick = ({ dataKey }: LegendPayload) => {
        if (typeof dataKey !== 'string') {
          return;
        }
        setHiddenItems(prev => (prev.includes(dataKey) ? prev.filter(key => key !== dataKey) : [...prev, dataKey]));
      };

      return (
        <AreaChart width={100} height={100} data={PageData}>
          <Legend onClick={handleClick} />
          <Area dataKey="uv" stackId="a" hide={hiddenItems.includes('uv')} />
          <Area dataKey="pv" stackId="a" hide={hiddenItems.includes('pv')} />
          {children}
        </AreaChart>
      );
    }

    const renderTestCase = createSelectorTestCase(MyTestCase);

    describe('on initial render', () => {
      it('should select two graphical items in stack group in the DOM insertion order', () => {
        const { spy } = renderTestCase((state: RechartsRootState) => selectStackGroups(state, 'xAxis', 0, false));
        expect(spy).toHaveBeenLastCalledWith({
          a: {
            graphicalItems: [
              {
                barSize: undefined,
                data: undefined,
                dataKey: 'uv',
                errorBars: [],
                hide: false,
                isPanorama: false,
                stackId: 'a',
                type: 'area',
                xAxisId: 0,
                yAxisId: 0,
                zAxisId: 0,
              },
              {
                barSize: undefined,
                data: undefined,
                dataKey: 'pv',
                errorBars: [],
                hide: false,
                isPanorama: false,
                stackId: 'a',
                type: 'area',
                xAxisId: 0,
                yAxisId: 0,
                zAxisId: 0,
              },
            ],
            stackedData: expect.toBeRechartsStackedData([
              [
                [0, 400],
                [0, 300],
                [0, 300],
                [0, 200],
                [0, 278],
                [0, 189],
              ],
              [
                [400, 2800],
                [300, 4867],
                [300, 1698],
                [200, 10000],
                [278, 4186],
                [189, 4989],
              ],
            ]),
          },
        });
        expect(spy).toHaveBeenCalledTimes(3);
      });
    });

    describe('after hiding one item and displaying it again', () => {
      // https://github.com/recharts/recharts/issues/5992
      it('should keep the order of graphical items in stack group', () => {
        const { container, spy } = renderTestCase((state: RechartsRootState) =>
          selectStackGroups(state, 'xAxis', 0, false),
        );

        expect(spy).toHaveBeenLastCalledWith({
          a: expect.objectContaining({
            graphicalItems: [
              expect.objectContaining({ dataKey: 'uv', hide: false }),
              expect.objectContaining({ dataKey: 'pv', hide: false }),
            ],
          }),
        });
        expect(spy).toHaveBeenCalledTimes(3);

        const legendItems = container.querySelectorAll('.recharts-legend-item');
        assertNotNull(legendItems);
        expect(legendItems).toHaveLength(2);
        const uvItem = legendItems[1];
        expect(uvItem.textContent).toBe('uv');
        act(() => {
          fireEvent.click(uvItem);
        });

        expect(spy).toHaveBeenLastCalledWith({
          a: expect.objectContaining({
            graphicalItems: [expect.objectContaining({ dataKey: 'pv', hide: false })],
          }),
        });
        expect(spy).toHaveBeenCalledTimes(5);

        act(() => {
          fireEvent.click(uvItem);
        });

        expect(spy).toHaveBeenLastCalledWith({
          a: expect.objectContaining({
            graphicalItems: [
              // This should be in the same order as before hiding
              expect.objectContaining({ dataKey: 'uv', hide: false }),
              expect.objectContaining({ dataKey: 'pv', hide: false }),
            ],
          }),
        });
        expect(spy).toHaveBeenCalledTimes(7);
      });
    });
  });
});
