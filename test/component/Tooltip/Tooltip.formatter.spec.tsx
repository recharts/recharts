import { describe, it, beforeEach } from 'vitest';
import React from 'react';
import { BarChart, YAxis, XAxis, Tooltip, Bar } from '../../../src';
import { PageData } from '../../_data';
import { expectTooltipNotVisible, expectTooltipPayload, showTooltip } from './tooltipTestHelpers';
import { barChartMouseHoverTooltipSelector } from './tooltipMouseHoverSelectors';
import { mockGetBoundingClientRect } from '../../helper/mockGetBoundingClientRect';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { selectTooltipPayload } from '../../../src/state/selectors/selectors';

describe('Tooltip.formatter reproducing https://github.com/recharts/recharts/issues/5658', () => {
  beforeEach(() => {
    mockGetBoundingClientRect({ width: 100, height: 100 });
  });
  const dataKeyAsFunction = (x: any) => x.pv;

  describe('with a name prop', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <BarChart
        width={500}
        height={300}
        data={PageData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip formatter={() => 'FORMATTED'} />
        <Bar dataKey={dataKeyAsFunction} name="ultraviolet" fill="#8884d8" />
        <Bar dataKey="pv" fill="#8ff4d8" />
        {children}
      </BarChart>
    ));

    it('should render inside tooltip value what the formatter returned', () => {
      const { container } = renderTestCase();

      expectTooltipNotVisible(container);

      showTooltip(container, barChartMouseHoverTooltipSelector);

      expectTooltipPayload(container, 'Page B', ['pv : FORMATTED', 'ultraviolet : FORMATTED']);
    });

    it('should select payload', () => {
      const { spy } = renderTestCase(state => selectTooltipPayload(state, 'axis', 'hover', '1'));
      expect(spy).toHaveBeenLastCalledWith([
        {
          color: '#8884d8',
          dataKey: dataKeyAsFunction,
          fill: '#8884d8',
          hide: false,
          name: 'ultraviolet',
          nameKey: undefined,
          payload: {
            amt: 2400,
            name: 'Page B',
            pv: 4567,
            uv: 300,
          },
          stroke: undefined,
          strokeWidth: undefined,
          type: undefined,
          unit: undefined,
          value: 4567,
        },
        {
          color: '#8ff4d8',
          dataKey: 'pv',
          fill: '#8ff4d8',
          hide: false,
          name: 'pv',
          nameKey: undefined,
          payload: {
            amt: 2400,
            name: 'Page B',
            pv: 4567,
            uv: 300,
          },
          stroke: undefined,
          strokeWidth: undefined,
          type: undefined,
          unit: undefined,
          value: 4567,
        },
      ]);
    });
  });

  describe('without name prop', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <BarChart
        width={500}
        height={300}
        data={PageData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip formatter={() => 'FORMATTED'} />
        <Bar dataKey={dataKeyAsFunction} fill="#8884d8" />
        <Bar dataKey="pv" fill="#8ff4d8" />
        {children}
      </BarChart>
    ));

    it('should render inside tooltip value what the formatter returned', () => {
      const { container } = renderTestCase();

      expectTooltipNotVisible(container);

      showTooltip(container, barChartMouseHoverTooltipSelector);

      expectTooltipPayload(container, 'Page B', ['pv : FORMATTED', 'FORMATTED']);
    });

    it('should select payload', () => {
      const { spy } = renderTestCase(state => selectTooltipPayload(state, 'axis', 'hover', '1'));
      expect(spy).toHaveBeenLastCalledWith([
        {
          color: '#8884d8',
          dataKey: dataKeyAsFunction,
          fill: '#8884d8',
          hide: false,
          name: undefined,
          nameKey: undefined,
          payload: {
            amt: 2400,
            name: 'Page B',
            pv: 4567,
            uv: 300,
          },
          stroke: undefined,
          strokeWidth: undefined,
          type: undefined,
          unit: undefined,
          value: 4567,
        },
        {
          color: '#8ff4d8',
          dataKey: 'pv',
          fill: '#8ff4d8',
          hide: false,
          name: 'pv',
          nameKey: undefined,
          payload: {
            amt: 2400,
            name: 'Page B',
            pv: 4567,
            uv: 300,
          },
          stroke: undefined,
          strokeWidth: undefined,
          type: undefined,
          unit: undefined,
          value: 4567,
        },
      ]);
    });
  });
});
