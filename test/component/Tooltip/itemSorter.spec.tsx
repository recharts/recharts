import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { Selector } from '@reduxjs/toolkit';
import { Area, Bar, ComposedChart, Line, Scatter, Tooltip, TooltipProps, XAxis, YAxis } from '../../../src';
import { PageData } from '../../_data';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { RechartsRootState } from '../../../src/state/store';
import { expectTooltipPayload, showTooltip } from './tooltipTestHelpers';
import { composedChartMouseHoverTooltipSelector } from './tooltipMouseHoverSelectors';
import { selectTooltipPayload } from '../../../src/state/selectors/selectors';
import { mockGetBoundingClientRect } from '../../helper/mockGetBoundingClientRect';

describe('itemSorter', () => {
  beforeEach(() => {
    mockGetBoundingClientRect({ width: 100, height: 100 });
  });

  function renderTestCase<T>(
    itemSorter: TooltipProps<number, string>['itemSorter'],
    selector?: Selector<RechartsRootState, T, never>,
  ) {
    return createSelectorTestCase(({ children }) => (
      <ComposedChart width={300} height={300} data={PageData}>
        <Area dataKey="uv" />
        <Bar dataKey="pv" />
        <Line dataKey="amt" />
        <Scatter dataKey="uv" />
        <YAxis dataKey="pv" />
        <XAxis dataKey="name" />
        <Tooltip itemSorter={itemSorter} />
        {children}
      </ComposedChart>
    ))(selector);
  }

  describe('when itemSorter is undefined', () => {
    it('should render payload in arbitrary order', () => {
      const { container } = renderTestCase(undefined);
      showTooltip(container, composedChartMouseHoverTooltipSelector);
      expectTooltipPayload(container, 'Page D', ['uv : 200', 'pv : 9800', 'amt : 2400', 'name : Page D', 'pv : 9800']);
    });

    it('should select payload in arbitrary order', () => {
      const { spy } = renderTestCase(undefined, state => selectTooltipPayload(state, 'axis', 'hover', '0'));
      expect(spy).toHaveBeenLastCalledWith([
        {
          color: '#3182bd',
          dataKey: 'uv',
          fill: '#3182bd',
          hide: false,
          name: 'uv',
          nameKey: undefined,
          payload: {
            amt: 2400,
            name: 'Page A',
            pv: 2400,
            uv: 400,
          },
          stroke: '#3182bd',
          strokeWidth: undefined,
          type: undefined,
          unit: undefined,
          value: 400,
        },
        {
          color: undefined,
          dataKey: 'pv',
          fill: undefined,
          hide: false,
          name: 'pv',
          nameKey: undefined,
          payload: {
            amt: 2400,
            name: 'Page A',
            pv: 2400,
            uv: 400,
          },
          stroke: undefined,
          strokeWidth: undefined,
          type: undefined,
          unit: undefined,
          value: 2400,
        },
        {
          color: '#3182bd',
          dataKey: 'amt',
          fill: '#fff',
          hide: false,
          name: 'amt',
          nameKey: undefined,
          payload: {
            amt: 2400,
            name: 'Page A',
            pv: 2400,
            uv: 400,
          },
          stroke: '#3182bd',
          strokeWidth: 1,
          type: undefined,
          unit: undefined,
          value: 2400,
        },
        {
          color: undefined,
          dataKey: 'name',
          fill: undefined,
          hide: false,
          name: 'name',
          nameKey: undefined,
          payload: {
            amt: 2400,
            name: 'Page A',
            pv: 2400,
            uv: 400,
          },
          stroke: undefined,
          strokeWidth: undefined,
          type: undefined,
          unit: '',
          value: 'Page A',
        },
        {
          color: undefined,
          dataKey: 'pv',
          fill: undefined,
          hide: false,
          name: 'pv',
          nameKey: undefined,
          payload: {
            amt: 2400,
            name: 'Page A',
            pv: 2400,
            uv: 400,
          },
          stroke: undefined,
          strokeWidth: undefined,
          type: undefined,
          unit: '',
          value: 2400,
        },
      ]);
      expect(spy).toHaveBeenCalledTimes(3);
    });
  });

  describe('when itemSorter=`dataKey`', () => {
    it('should render sorted payload', () => {
      const { container } = renderTestCase('dataKey');
      showTooltip(container, composedChartMouseHoverTooltipSelector);
      expectTooltipPayload(container, 'Page D', ['amt : 2400', 'name : Page D', 'pv : 9800', 'pv : 9800', 'uv : 200']);
    });
  });

  describe('when itemSorter=`value`', () => {
    it('should render sorted payload', () => {
      const { container } = renderTestCase('value');
      showTooltip(container, composedChartMouseHoverTooltipSelector);
      expectTooltipPayload(container, 'Page D', ['uv : 200', 'amt : 2400', 'pv : 9800', 'name : Page D', 'pv : 9800']);
    });
  });

  describe('when itemSorter is a function', () => {
    it('should render sorted payload', () => {
      const { container } = renderTestCase(item => item.value);
      showTooltip(container, composedChartMouseHoverTooltipSelector);
      expectTooltipPayload(container, 'Page D', ['uv : 200', 'amt : 2400', 'pv : 9800', 'name : Page D', 'pv : 9800']);
    });

    it('should call the function once for every payload item, and pass the item as an argument', () => {
      const spy = vi.fn();
      const { container } = renderTestCase(spy);
      expect(spy).toHaveBeenCalledTimes(0);
      showTooltip(container, composedChartMouseHoverTooltipSelector);
      expect(spy).toHaveBeenCalledTimes(5);
      expect(spy).toHaveBeenNthCalledWith(1, {
        color: '#3182bd',
        dataKey: 'uv',
        fill: '#3182bd',
        hide: false,
        name: 'uv',
        nameKey: undefined,
        payload: {
          amt: 2400,
          name: 'Page D',
          pv: 9800,
          uv: 200,
        },
        stroke: '#3182bd',
        strokeWidth: undefined,
        type: undefined,
        unit: undefined,
        value: 200,
      });
      expect(spy).toHaveBeenNthCalledWith(2, {
        color: undefined,
        dataKey: 'pv',
        fill: undefined,
        hide: false,
        name: 'pv',
        nameKey: undefined,
        payload: {
          amt: 2400,
          name: 'Page D',
          pv: 9800,
          uv: 200,
        },
        stroke: undefined,
        strokeWidth: undefined,
        type: undefined,
        unit: undefined,
        value: 9800,
      });
      expect(spy).toHaveBeenNthCalledWith(3, {
        color: '#3182bd',
        dataKey: 'amt',
        fill: '#fff',
        hide: false,
        name: 'amt',
        nameKey: undefined,
        payload: {
          amt: 2400,
          name: 'Page D',
          pv: 9800,
          uv: 200,
        },
        stroke: '#3182bd',
        strokeWidth: 1,
        type: undefined,
        unit: undefined,
        value: 2400,
      });
      expect(spy).toHaveBeenNthCalledWith(4, {
        color: undefined,
        dataKey: 'name',
        fill: undefined,
        hide: false,
        name: 'name',
        nameKey: undefined,
        payload: {
          amt: 2400,
          name: 'Page D',
          pv: 9800,
          uv: 200,
        },
        stroke: undefined,
        strokeWidth: undefined,
        type: undefined,
        unit: '',
        value: 'Page D',
      });
      expect(spy).toHaveBeenNthCalledWith(5, {
        color: undefined,
        dataKey: 'pv',
        fill: undefined,
        hide: false,
        name: 'pv',
        nameKey: undefined,
        payload: {
          amt: 2400,
          name: 'Page D',
          pv: 9800,
          uv: 200,
        },
        stroke: undefined,
        strokeWidth: undefined,
        type: undefined,
        unit: '',
        value: 9800,
      });
    });
  });
});
