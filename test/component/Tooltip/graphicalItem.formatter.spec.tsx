/**
 * Tests for per-graphical-item formatter prop, addressing:
 * https://github.com/recharts/recharts/issues/6210
 */
import { describe, it, expect, beforeEach, vi } from 'vitest';
import React from 'react';
import { BarChart, XAxis, YAxis, Tooltip, Bar, LineChart, Line } from '../../../src';
import { PageData } from '../../_data';
import { expectTooltipNotVisible, expectTooltipPayload, showTooltip } from './tooltipTestHelpers';
import { barChartMouseHoverTooltipSelector, lineChartMouseHoverTooltipSelector } from './tooltipMouseHoverSelectors';
import { mockGetBoundingClientRect } from '../../helper/mockGetBoundingClientRect';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { selectTooltipPayload } from '../../../src/state/selectors/selectors';
import { expectLastCalledWith } from '../../helper/expectLastCalledWith';

describe('per-graphical-item formatter prop (issue #6210)', () => {
  beforeEach(() => {
    mockGetBoundingClientRect({ width: 100, height: 100 });
  });

  describe('Bar with formatter', () => {
    const barFormatter = vi.fn(() => 'BAR_FORMATTED');

    const renderTestCase = createSelectorTestCase(({ children }) => (
      <BarChart width={500} height={300} data={PageData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="pv" fill="#8884d8" id="bar-pv" formatter={barFormatter} />
        {children}
      </BarChart>
    ));

    it('should include formatter in the tooltip payload entry', () => {
      const { spy } = renderTestCase(state => selectTooltipPayload(state, 'axis', 'hover', '1'));
      expectLastCalledWith(spy, [
        expect.objectContaining({
          dataKey: 'pv',
          formatter: barFormatter,
        }),
      ]);
    });

    it('should render the formatted value in the tooltip', () => {
      const { container } = renderTestCase();
      expectTooltipNotVisible(container);
      showTooltip(container, barChartMouseHoverTooltipSelector);
      expectTooltipPayload(container, 'Page B', ['pv : BAR_FORMATTED']);
    });
  });

  describe('Bar formatter takes precedence over Tooltip formatter', () => {
    const barFormatter = vi.fn(() => 'PER_BAR');
    const tooltipFormatter = vi.fn(() => 'TOOLTIP_LEVEL');

    const renderTestCase = createSelectorTestCase(({ children }) => (
      <BarChart width={500} height={300} data={PageData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip formatter={tooltipFormatter} />
        <Bar dataKey="pv" fill="#8884d8" id="bar-pv" formatter={barFormatter} />
        {children}
      </BarChart>
    ));

    it('should render value from the per-item formatter, not the tooltip-level formatter', () => {
      const { container } = renderTestCase();
      expectTooltipNotVisible(container);
      showTooltip(container, barChartMouseHoverTooltipSelector);
      expectTooltipPayload(container, 'Page B', ['pv : PER_BAR']);
    });
  });

  describe('mixed: two Bars, one with formatter, one without', () => {
    const barFormatterForPv = vi.fn(() => 'FORMATTED_PV');

    const renderTestCase = createSelectorTestCase(({ children }) => (
      <BarChart width={500} height={300} data={PageData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="pv" fill="#8884d8" id="bar-pv" formatter={barFormatterForPv} />
        <Bar dataKey="uv" fill="#82ca9d" id="bar-uv" />
        {children}
      </BarChart>
    ));

    it('should apply per-item formatter to pv but not uv', () => {
      const { container } = renderTestCase();
      expectTooltipNotVisible(container);
      showTooltip(container, barChartMouseHoverTooltipSelector);
      expectTooltipPayload(container, 'Page B', ['pv : FORMATTED_PV', 'uv : 300']);
    });

    it('should include formatter only on the bar that has it', () => {
      const { spy } = renderTestCase(state => selectTooltipPayload(state, 'axis', 'hover', '1'));
      expectLastCalledWith(spy, [
        expect.objectContaining({ dataKey: 'pv', formatter: barFormatterForPv }),
        expect.objectContaining({ dataKey: 'uv', formatter: undefined }),
      ]);
    });
  });

  describe('Line with formatter', () => {
    const lineFormatter = vi.fn(() => 'LINE_FORMATTED');

    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart width={500} height={300} data={PageData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line dataKey="pv" stroke="#8884d8" id="line-pv" formatter={lineFormatter} />
        {children}
      </LineChart>
    ));

    it('should include formatter in the tooltip payload entry', () => {
      const { spy } = renderTestCase(state => selectTooltipPayload(state, 'axis', 'hover', '1'));
      expectLastCalledWith(spy, [
        expect.objectContaining({
          dataKey: 'pv',
          formatter: lineFormatter,
        }),
      ]);
    });

    it('should render the formatted value in the tooltip', () => {
      const { container } = renderTestCase();
      expectTooltipNotVisible(container);
      showTooltip(container, lineChartMouseHoverTooltipSelector);
      expectTooltipPayload(container, 'Page C', ['pv : LINE_FORMATTED']);
    });
  });
});
