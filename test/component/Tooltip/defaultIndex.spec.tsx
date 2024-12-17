import { describe, it, expect } from 'vitest';
import React from 'react';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { Bar, BarChart, Pie, PieChart, Tooltip, XAxis, YAxis } from '../../../src';
import { PageData } from '../../_data';
import { selectActiveIndex, selectTooltipPayload } from '../../../src/state/selectors/selectors';
import { showTooltip } from './tooltipTestHelpers';
import { barChartMouseHoverTooltipSelector, pieChartMouseHoverTooltipSelector } from './tooltipMouseHoverSelectors';

describe('defaultIndex', () => {
  describe('in BarChart', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <BarChart width={800} height={400} data={PageData}>
        <XAxis dataKey="name" />
        <YAxis dataKey="uv" />
        <Bar />
        <Tooltip />
        {children}
      </BarChart>
    ));

    it('should select tooltip payload', () => {
      const { spy } = renderTestCase(state => selectTooltipPayload(state, 'axis', 'hover', 3));
      expect(spy).toHaveBeenLastCalledWith([
        {
          color: undefined,
          dataKey: 'name',
          fill: undefined,
          hide: false,
          name: undefined,
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
          value: 'Page D',
        },
      ]);
    });

    it('should update the payload after mouse hover', () => {
      const { container, spy } = renderTestCase(state => selectTooltipPayload(state, 'axis', 'hover', undefined));
      showTooltip(container, barChartMouseHoverTooltipSelector);
      expect(spy).toHaveBeenLastCalledWith([
        {
          color: undefined,
          dataKey: 'name',
          fill: undefined,
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
          value: 'Page B',
        },
      ]);
    });
  });

  describe('in PieChart', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <PieChart width={400} height={400}>
        <Pie data={PageData} dataKey="pv" isAnimationActive={false} />
        {children}
      </PieChart>
    ));

    it('should select active index as the default', () => {
      const { spy } = renderTestCase(state => selectActiveIndex(state, 'item', 'hover', 3));
      expect(spy).toHaveBeenLastCalledWith('3');
    });

    it('should render sectors', () => {
      const { container } = renderTestCase();
      expect(container.querySelectorAll(pieChartMouseHoverTooltipSelector)).toHaveLength(6);
    });

    it('should update the active index after mouse hover', () => {
      const { container, spy } = renderTestCase(state => selectActiveIndex(state, 'item', 'hover', 3));
      showTooltip(container, pieChartMouseHoverTooltipSelector);
      expect(spy).toHaveBeenLastCalledWith('0');
    });

    it('should select tooltip payload', () => {
      const { spy } = renderTestCase(state => selectTooltipPayload(state, 'item', 'hover', 3));
      expect(spy).toHaveBeenLastCalledWith([
        {
          color: undefined,
          dataKey: 'pv',
          fill: undefined,
          hide: false,
          name: 'Page D',
          nameKey: 'name',
          payload: {
            amt: 2400,
            name: 'Page D',
            pv: 9800,
            uv: 200,
          },
          stroke: '#fff',
          strokeWidth: undefined,
          type: undefined,
          unit: undefined,
          value: 9800,
        },
      ]);
    });

    it('should update the payload after mouse hover', () => {
      const { container, spy } = renderTestCase(state => selectTooltipPayload(state, 'item', 'hover', 3));
      showTooltip(container, pieChartMouseHoverTooltipSelector);
      expect(spy).toHaveBeenLastCalledWith([
        {
          color: undefined,
          dataKey: 'pv',
          fill: undefined,
          hide: false,
          name: 'Page A',
          nameKey: 'name',
          payload: {
            amt: 2400,
            name: 'Page A',
            pv: 2400,
            uv: 400,
          },
          stroke: '#fff',
          strokeWidth: undefined,
          type: undefined,
          unit: undefined,
          value: 2400,
        },
      ]);
    });
  });
});
