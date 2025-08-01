import React from 'react';
import { fireEvent } from '@testing-library/react';
import { describe, expect } from 'vitest';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { BarChart, Bar, Brush } from '../../src';
import { PageData } from '../_data';
import { expectBrush } from '../helper/expectBrush';
import { assertNotNull } from '../helper/assertNotNull';
import { selectStackGroups } from '../../src/state/selectors/axisSelectors';
import { expectLastCalledWith } from '../helper/expectLastCalledWith';

describe('Brush in a stacked chart', () => {
  const renderTestCase = createSelectorTestCase(({ children }) => (
    <BarChart width={500} height={300} data={PageData}>
      <Bar dataKey="pv" stackId="a" />
      <Bar dataKey="uv" stackId="a" />
      <Brush dataKey="name" />
      {children}
    </BarChart>
  ));

  describe('before moving the brush traveller', () => {
    it('should render Brush', () => {
      const { container } = renderTestCase();
      expectBrush(container, {
        height: '40',
        width: '490',
        x: '5',
        y: '255',
      });
    });

    it('should select stack groups', () => {
      const { spy } = renderTestCase(state => selectStackGroups(state, 'xAxis', 0, false));
      expectLastCalledWith(spy, {
        a: {
          graphicalItems: [
            {
              id: expect.stringMatching('^recharts-bar-[:0-9a-z]+$'),
              barSize: undefined,
              data: undefined,
              dataKey: 'pv',
              hide: false,
              // @ts-expect-error unexpected property
              isPanorama: false,
              maxBarSize: undefined,
              minPointSize: 0,
              stackId: 'a',
              type: 'bar',
              xAxisId: 0,
              yAxisId: 0,
              zAxisId: 0,
            },
            {
              id: expect.stringMatching('bar-'),
              barSize: undefined,
              data: undefined,
              dataKey: 'uv',
              hide: false,
              // @ts-expect-error unexpected property
              isPanorama: false,
              maxBarSize: undefined,
              minPointSize: 0,
              stackId: 'a',
              type: 'bar',
              xAxisId: 0,
              yAxisId: 0,
              zAxisId: 0,
            },
          ],
          stackedData: expect.toBeRechartsStackedData([
            [
              // 6 elements for each stack, because PageData has 6 items
              [0, 2400],
              [0, 4567],
              [0, 1398],
              [0, 9800],
              [0, 3908],
              [0, 4800],
            ],
            [
              [2400, 2800],
              [4567, 4867],
              [1398, 1698],
              [9800, 10000],
              [3908, 4186],
              [4800, 4989],
            ],
          ]),
        },
      });
    });
  });

  describe('after moving the brush traveller', () => {
    function prime(container: Element) {
      const traveller = container.querySelector('.recharts-brush-traveller');
      assertNotNull(traveller);

      fireEvent.mouseDown(traveller);
      fireEvent.mouseMove(traveller, { clientX: 100, clientY: 0 });
    }

    it('should display fewer bars after moving the brush traveller', () => {
      /* Reproduces https://github.com/recharts/recharts/issues/6006 */
      const { container } = renderTestCase();
      prime(container);
      // Check if the brush has updated correctly
      expectBrush(container, {
        height: '40',
        width: '490',
        x: '5',
        y: '255',
      });
    });

    it('should select stack groups', () => {
      const { container, spy } = renderTestCase(state => selectStackGroups(state, 'xAxis', 0, false));
      prime(container);
      expectLastCalledWith(spy, {
        a: {
          graphicalItems: [
            {
              id: expect.stringMatching('bar-'),
              barSize: undefined,
              data: undefined,
              dataKey: 'pv',
              hide: false,
              // @ts-expect-error unexpected property
              isPanorama: false,
              maxBarSize: undefined,
              minPointSize: 0,
              stackId: 'a',
              type: 'bar',
              xAxisId: 0,
              yAxisId: 0,
              zAxisId: 0,
            },
            {
              id: expect.stringMatching('bar-'),
              barSize: undefined,
              data: undefined,
              dataKey: 'uv',
              hide: false,
              // @ts-expect-error unexpected property
              isPanorama: false,
              maxBarSize: undefined,
              minPointSize: 0,
              stackId: 'a',
              type: 'bar',
              xAxisId: 0,
              yAxisId: 0,
              zAxisId: 0,
            },
          ],
          stackedData: expect.toBeRechartsStackedData([
            [
              // 6 elements for each stack, because the index is applied later
              [0, 2400],
              [0, 4567],
              [0, 1398],
              [0, 9800],
              [0, 3908],
              [0, 4800],
            ],
            [
              [2400, 2800],
              [4567, 4867],
              [1398, 1698],
              [9800, 10000],
              [3908, 4186],
              [4800, 4989],
            ],
          ]),
        },
      });
    });
  });
});
