import React from 'react';
import { describe, it, beforeEach } from 'vitest';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { Line, LineChart, Tooltip } from '../../../src';
import { expectTooltipCoordinate, showTooltipOnCoordinate } from './tooltipTestHelpers';
import { lineChartMouseHoverTooltipSelector } from './tooltipMouseHoverSelectors';
import { mockGetBoundingClientRect } from '../../helper/mockGetBoundingClientRect';

describe('Tooltip offset', () => {
  beforeEach(() => {
    mockGetBoundingClientRect({ width: 10, height: 10 });
  });

  const renderTestCase = (offset: React.ComponentProps<typeof Tooltip>['offset']) =>
    createSelectorTestCase(({ children }) => (
      <LineChart
        width={100}
        height={100}
        data={[
          { name: 'A', value: 1 },
          { name: 'B', value: 1 },
          { name: 'C', value: 1 },
        ]}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        <Line dataKey="value" />
        {children}
        <Tooltip offset={offset} />
      </LineChart>
    ))();

  describe('with number offset', () => {
    it('should position tooltip at { x: 10, y: 30 } with default offset (10)', () => {
      const { container } = renderTestCase(10);
      showTooltipOnCoordinate(container, lineChartMouseHoverTooltipSelector, { clientX: 20, clientY: 20 });
      /*
       * Data points: A(x=0), B(x=50), C(x=100) with width=100, margin=0
       * Mouse at (20, 20) is closest to point A at x=0
       * tooltipX = 0 + offset(10) = 10
       * tooltipY = 20 + offset(10) = 30
       */
      expectTooltipCoordinate(container, { x: 10, y: 30 });
    });

    it('should position tooltip at { x: 20, y: 40 } with offset=20', () => {
      const { container } = renderTestCase(20);
      showTooltipOnCoordinate(container, lineChartMouseHoverTooltipSelector, { clientX: 20, clientY: 20 });
      expectTooltipCoordinate(container, { x: 20, y: 40 });
    });

    it('should position tooltip at { x: 0, y: 20 } with offset=0', () => {
      const { container } = renderTestCase(0);
      showTooltipOnCoordinate(container, lineChartMouseHoverTooltipSelector, { clientX: 20, clientY: 20 });
      expectTooltipCoordinate(container, { x: 0, y: 20 });
    });
  });

  describe('with Coordinate offset (different x and y)', () => {
    it('should position tooltip at { x: 10, y: 50 } with offset={ x: 10, y: 30 }', () => {
      const { container } = renderTestCase({ x: 10, y: 30 });
      showTooltipOnCoordinate(container, lineChartMouseHoverTooltipSelector, { clientX: 20, clientY: 20 });
      expectTooltipCoordinate(container, { x: 10, y: 50 });
    });

    it('should position tooltip at { x: 0, y: 30 } with offset={ x: 0, y: 10 }', () => {
      const { container } = renderTestCase({ x: 0, y: 10 });
      showTooltipOnCoordinate(container, lineChartMouseHoverTooltipSelector, { clientX: 20, clientY: 20 });
      expectTooltipCoordinate(container, { x: 0, y: 30 });
    });

    it('should position tooltip at { x: 10, y: 20 } with offset={ x: 10, y: 0 }', () => {
      const { container } = renderTestCase({ x: 10, y: 0 });
      showTooltipOnCoordinate(container, lineChartMouseHoverTooltipSelector, { clientX: 20, clientY: 20 });
      expectTooltipCoordinate(container, { x: 10, y: 20 });
    });
  });

  describe('with negative offset value', () => {
    it('should position tooltip at { x: 45, y: 35 } with offset={ x: -5, y: 15 }', () => {
      const { container } = renderTestCase({ x: -5, y: 15 });
      showTooltipOnCoordinate(container, lineChartMouseHoverTooltipSelector, { clientX: 50, clientY: 20 });
      /*
       * Data points: A(x=0), B(x=50), C(x=100) with width=100, margin=0
       * Mouse at (50, 20) is closest to point B at x=50
       * tooltipX = 50 + offset(-5) = 45
       * tooltipY = 20 + offset(15) = 35
       */
      expectTooltipCoordinate(container, { x: 45, y: 35 });
    });
  });
});
