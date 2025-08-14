/*
 * Reproducing https://github.com/recharts/recharts/issues/6192
 */
import React from 'react';
import { describe, expect, it, test } from 'vitest';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { Bar, Area, CartesianGrid, ComposedChart, XAxis, YAxis, Legend } from '../../src';
import { expectBars } from '../helper/expectBars';
import { selectBarRectangles } from '../../src/state/selectors/barSelectors';
import { selectChartDataWithIndexesIfNotInPanorama } from '../../src/state/selectors/dataSelectors';
import { selectDisplayedStackedData, selectStackGroups } from '../../src/state/selectors/axisSelectors';

/*
 * Example data in the original report are larger, here I removed some data to make it simpler while still reproducing the issue.
 * You will find that the day=1 data point is repeated, and it's used as XAxis dataKey.
 * Recharts should render these two as two separate bars.
 */
const data = [
  {
    date: '2025-06-30T17:00:00.000Z',
    day: 1,
    wins: 0,
    losses: 0,
  },
  {
    date: '2025-07-31T17:00:00.000Z',
    day: 1,
    wins: 3,
    losses: -5,
    kd: 9.764204545454545,
  },
];

describe('Bar stacked with truncateByDomain', () => {
  const renderTestCase = createSelectorTestCase(({ children }) => (
    <ComposedChart
      width={800}
      height={400}
      data={data}
      stackOffset="sign"
      margin={{
        top: 5,
        right: 0,
        left: -20,
        bottom: 5,
      }}
    >
      <CartesianGrid stroke="#ffffff" strokeOpacity="0.2" />
      <XAxis dataKey="day" strokeOpacity="0" tick={{ fill: '#ffffff', fillOpacity: '0.6' }} tickLine={false} />
      <YAxis strokeOpacity="0" tick={{ fill: '#ffffff', fillOpacity: '0.6' }} tickLine={false} />
      <Area
        name="Av"
        dataKey="kd"
        fill="url(#fillKD)"
        type="monotoneX"
        stroke="gold"
        strokeWidth={2}
        dot={false}
        connectNulls
        pointerEvents="none"
      />
      <Bar
        id="bar-wins"
        name="Wi"
        dataKey="wins"
        fill="#ffffff"
        opacity={0.8}
        stackId="date"
        cursor="pointer"
        isAnimationActive={false}
      />
      <Bar
        id="bar-losses"
        name="Lo"
        dataKey="losses"
        fill="red"
        opacity={0.8}
        stackId="date"
        cursor="pointer"
        isAnimationActive={false}
      />
      <Legend verticalAlign="bottom" wrapperStyle={{ left: 0, width: '100%' }} />
      {children}
    </ComposedChart>
  ));

  describe('wins', () => {
    test('selectBarRectangles', () => {
      const { spy } = renderTestCase(state => selectBarRectangles(state, 0, 0, false, 'bar-wins', undefined));
      expect(spy).toHaveBeenLastCalledWith([
        {
          background: {
            height: 360,
            width: 304,
            x: 78,
            y: 5,
          },
          date: '2025-06-30T17:00:00.000Z',
          day: 1,
          height: 0,
          losses: 0,
          payload: {
            date: '2025-06-30T17:00:00.000Z',
            day: 1,
            losses: 0,
            wins: 0,
          },
          tooltipPosition: {
            x: 230,
            y: 275,
          },
          value: [0, 0],
          width: 304,
          wins: 0,
          x: 78,
          y: 275,
          parentViewBox: {
            height: 400,
            width: 800,
            x: 0,
            y: 0,
          },
        },
        {
          background: {
            height: 360,
            width: 304,
            x: 458,
            y: 5,
          },
          date: '2025-07-31T17:00:00.000Z',
          day: 1,
          height: 54,
          kd: 9.764204545454545,
          losses: -5,
          payload: {
            date: '2025-07-31T17:00:00.000Z',
            day: 1,
            kd: 9.764204545454545,
            losses: -5,
            wins: 3,
          },
          tooltipPosition: {
            x: 610,
            y: 248,
          },
          value: [0, 3],
          width: 304,
          wins: 3,
          x: 458,
          y: 221,
          parentViewBox: {
            height: 400,
            width: 800,
            x: 0,
            y: 0,
          },
        },
      ]);
    });

    test('selectChartDataWithIndexesIfNotInPanorama', () => {
      const { spy } = renderTestCase(state => selectChartDataWithIndexesIfNotInPanorama(state, 0, 0, false));
      expect(spy).toHaveBeenLastCalledWith({
        chartData: data,
        computedData: undefined,
        dataEndIndex: 1,
        dataStartIndex: 0,
      });
    });

    test('selectDisplayedStackedData', () => {
      const { spy } = renderTestCase(state => selectDisplayedStackedData(state, 'yAxis', 0, false));
      expect(spy).toHaveBeenLastCalledWith([
        {
          'bar-losses': 0,
          'bar-wins': 0,
        },
        {
          'bar-losses': -5,
          'bar-wins': 3,
        },
      ]);
    });

    test('selectStackGroups', () => {
      const { spy } = renderTestCase(state => selectStackGroups(state, 'yAxis', 0, false));
      expect(spy).toHaveBeenLastCalledWith({
        date: {
          graphicalItems: [
            {
              barSize: undefined,
              data: undefined,
              dataKey: 'wins',
              hide: false,
              id: 'bar-wins',
              isPanorama: false,
              maxBarSize: undefined,
              minPointSize: 0,
              stackId: 'date',
              type: 'bar',
              xAxisId: 0,
              yAxisId: 0,
              zAxisId: 0,
            },
            {
              barSize: undefined,
              data: undefined,
              dataKey: 'losses',
              hide: false,
              id: 'bar-losses',
              isPanorama: false,
              maxBarSize: undefined,
              minPointSize: 0,
              stackId: 'date',
              type: 'bar',
              xAxisId: 0,
              yAxisId: 0,
              zAxisId: 0,
            },
          ],
          stackedData: expect.toBeRechartsStackedData([
            [
              [0, 0],
              [0, 3],
            ],
            [
              [0, 0],
              [0, -5],
            ],
          ]),
        },
      });
    });
  });

  it('should render bars', () => {
    const { container } = renderTestCase();
    expectBars(container, [
      {
        d: 'M 458,221 h 304 v 54 h -304 Z',
        height: '54',
        radius: '0',
        width: '304',
        x: '458',
        y: '221',
      },
      {
        d: 'M 458,365 h 304 v -90 h -304 Z',
        height: '-90',
        radius: '0',
        width: '304',
        x: '458',
        y: '365',
      },
    ]);
  });
});
