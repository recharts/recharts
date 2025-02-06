import { describe, it, expect, beforeEach } from 'vitest';
import React from 'react';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { Bar, BarChart, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from '../../../src';
import { PageData } from '../../_data';
import { selectIsTooltipActive } from '../../../src/state/selectors/selectors';
import {
  barChartMouseHoverTooltipSelector,
  scatterChartMouseHoverTooltipSelector,
} from '../../component/Tooltip/tooltipMouseHoverSelectors';
import { hideTooltip, showTooltip } from '../../component/Tooltip/tooltipTestHelpers';
import { mockGetBoundingClientRect } from '../../helper/mockGetBoundingClientRect';

describe('selectIsTooltipActive', () => {
  beforeEach(() => {
    mockGetBoundingClientRect({ width: 100, height: 100 });
  });

  describe('default Tooltip props', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <BarChart width={800} height={400} data={PageData}>
        <Bar dataKey="uv" />
        <Tooltip />
        {children}
      </BarChart>
    ));

    it('should select false before any interactions', () => {
      const { spy } = renderTestCase(state => selectIsTooltipActive(state, 'axis', 'hover', undefined));
      expect(spy).toHaveBeenLastCalledWith({
        activeIndex: null,
        isActive: false,
      });
    });

    it('should select true after mouse hover, and then false again on mouse leave', () => {
      const { container, spy } = renderTestCase(state => selectIsTooltipActive(state, 'axis', 'hover', undefined));
      expect(spy).toHaveBeenLastCalledWith({
        activeIndex: null,
        isActive: false,
      });
      expect(spy).toHaveBeenCalledTimes(2);

      showTooltip(container, barChartMouseHoverTooltipSelector);
      expect(spy).toHaveBeenLastCalledWith({
        activeIndex: '1',
        isActive: true,
      });
      expect(spy).toHaveBeenCalledTimes(3);

      hideTooltip(container, barChartMouseHoverTooltipSelector);
      expect(spy).toHaveBeenLastCalledWith({
        activeIndex: null,
        isActive: false,
      });
      expect(spy).toHaveBeenCalledTimes(4);
    });
  });

  describe('with defaultIndex=number', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <BarChart width={800} height={400} data={PageData}>
        <Bar dataKey="uv" />
        <Tooltip defaultIndex={0} />
        {children}
      </BarChart>
    ));

    it('should select true before any interactions', () => {
      const { spy } = renderTestCase(state => selectIsTooltipActive(state, 'axis', 'hover', '0'));
      expect(spy).toHaveBeenLastCalledWith({
        activeIndex: '0',
        isActive: true,
      });
    });

    it('should select true after mouse hover, and then false on mouse leave', () => {
      const { container, spy } = renderTestCase(state => selectIsTooltipActive(state, 'axis', 'hover', '0'));
      expect(spy).toHaveBeenLastCalledWith({
        activeIndex: '0',
        isActive: true,
      });
      expect(spy).toHaveBeenCalledTimes(2);

      showTooltip(container, barChartMouseHoverTooltipSelector);
      expect(spy).toHaveBeenLastCalledWith({
        activeIndex: '1',
        isActive: true,
      });
      expect(spy).toHaveBeenCalledTimes(3);

      hideTooltip(container, barChartMouseHoverTooltipSelector);
      expect(spy).toHaveBeenLastCalledWith({
        activeIndex: null,
        isActive: false,
      });
      expect(spy).toHaveBeenCalledTimes(4);
    });
  });

  describe('in ScatterChart without defaultIndex', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <ScatterChart width={800} height={400}>
        <Scatter data={PageData} />
        <XAxis dataKey="uv" />
        <YAxis dataKey="pv" />
        <Tooltip />
        {children}
      </ScatterChart>
    ));

    it('should select false before any interactions', () => {
      const { spy } = renderTestCase(state => selectIsTooltipActive(state, 'item', 'hover', undefined));
      expect(spy).toHaveBeenLastCalledWith({
        activeIndex: null,
        isActive: false,
      });
    });

    it('should select true after mouse hover, and then false on mouse leave', () => {
      const { container, spy } = renderTestCase(state => selectIsTooltipActive(state, 'item', 'hover', undefined));
      expect(spy).toHaveBeenLastCalledWith({
        activeIndex: null,
        isActive: false,
      });
      expect(spy).toHaveBeenCalledTimes(3);

      showTooltip(container, scatterChartMouseHoverTooltipSelector);
      expect(spy).toHaveBeenLastCalledWith({
        activeIndex: '0',
        isActive: true,
      });
      expect(spy).toHaveBeenCalledTimes(4);

      hideTooltip(container, scatterChartMouseHoverTooltipSelector);
      expect(spy).toHaveBeenLastCalledWith({
        activeIndex: null,
        isActive: false,
      });
      expect(spy).toHaveBeenCalledTimes(5);
    });
  });

  describe('with defaultIndex, and in ScatterChart', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <ScatterChart width={800} height={400}>
        <Scatter data={PageData} />
        <XAxis dataKey="uv" />
        <YAxis dataKey="pv" />
        <Tooltip defaultIndex={0} />
        {children}
      </ScatterChart>
    ));

    it('should select true before any interactions', () => {
      const { spy } = renderTestCase(state => selectIsTooltipActive(state, 'item', 'hover', '0'));
      expect(spy).toHaveBeenLastCalledWith({
        activeIndex: '0',
        isActive: true,
      });
    });

    it('should select true after mouse hover, and then false on mouse leave', () => {
      const { container, spy } = renderTestCase(state => selectIsTooltipActive(state, 'item', 'hover', '3'));
      expect(spy).toHaveBeenLastCalledWith({
        activeIndex: '3',
        isActive: true,
      });
      expect(spy).toHaveBeenCalledTimes(3);

      showTooltip(container, scatterChartMouseHoverTooltipSelector);
      expect(spy).toHaveBeenLastCalledWith({
        activeIndex: '0',
        isActive: true,
      });
      expect(spy).toHaveBeenCalledTimes(4);

      hideTooltip(container, scatterChartMouseHoverTooltipSelector);
      expect(spy).toHaveBeenLastCalledWith({
        activeIndex: null,
        isActive: false,
      });
      expect(spy).toHaveBeenCalledTimes(5);
    });
  });

  describe('with active=true', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <BarChart width={800} height={400} data={PageData}>
        <Bar dataKey="uv" />
        <Tooltip active />
        {children}
      </BarChart>
    ));

    it('should select false before any interactions', () => {
      const { spy } = renderTestCase(state => selectIsTooltipActive(state, 'axis', 'hover', undefined));
      expect(spy).toHaveBeenLastCalledWith({
        activeIndex: null,
        isActive: false,
      });
    });

    it('should select true after mouse hover, and then continue returning true after mouse leave', () => {
      const { container, spy } = renderTestCase(state => selectIsTooltipActive(state, 'axis', 'hover', undefined));
      expect(spy).toHaveBeenLastCalledWith({
        activeIndex: null,
        isActive: false,
      });
      expect(spy).toHaveBeenCalledTimes(2);

      showTooltip(container, barChartMouseHoverTooltipSelector);
      expect(spy).toHaveBeenLastCalledWith({
        activeIndex: '1',
        isActive: true,
      });
      expect(spy).toHaveBeenCalledTimes(3);

      hideTooltip(container, barChartMouseHoverTooltipSelector);
      expect(spy).toHaveBeenLastCalledWith({
        activeIndex: '1',
        isActive: true,
      });
      expect(spy).toHaveBeenCalledTimes(4);
    });
  });
});
