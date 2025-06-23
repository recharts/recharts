import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { Line, LineChart, Tooltip } from '../../../src';
import {
  expectTooltipCoordinate,
  expectTooltipNotVisible,
  getTooltip,
  hideTooltip,
  showTooltipOnCoordinate,
} from './tooltipTestHelpers';
import { lineChartMouseHoverTooltipSelector } from './tooltipMouseHoverSelectors';
import { selectIsTooltipActive } from '../../../src/state/selectors/selectors';
import { mockGetBoundingClientRect } from '../../helper/mockGetBoundingClientRect';

describe('Tooltip animation', () => {
  beforeEach(() => {
    mockGetBoundingClientRect({
      width: 10,
      height: 10,
    });
  });

  describe('with default content', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart
        width={100}
        height={100}
        data={[
          { name: 'A', value: 1 },
          { name: 'B', value: 2 },
        ]}
      >
        <Line dataKey="value" />
        {children}
        <Tooltip />
      </LineChart>
    ));

    describe('when tooltip is displayed first time', () => {
      function prime(container: Element) {
        showTooltipOnCoordinate(container, lineChartMouseHoverTooltipSelector, {
          clientX: 20,
          clientY: 20,
        });
      }

      it('should select isActive: true', () => {
        const { container, spy } = renderTestCase(state => selectIsTooltipActive(state, 'axis', 'hover', undefined));
        expect(spy).toHaveBeenLastCalledWith({ activeIndex: null, isActive: false });
        prime(container);
        expect(spy).toHaveBeenLastCalledWith({ activeIndex: '0', isActive: true });
      });

      it('should animate towards the final position', () => {
        const { container } = renderTestCase();
        prime(container);

        expectTooltipCoordinate(container, {
          x: 15,
          y: 30,
        });
      });

      it('should start at 0,0', () => {
        const { container } = renderTestCase();
        prime(container);

        const tooltip = getTooltip(container);
        expect(tooltip).toHaveStyle({
          top: 0,
          left: 0,
          transform: 'translate(15px, 30px)',
          transition: 'transform 400ms ease',
        });
      });
    });

    describe('when tooltip hides, and then shows again', () => {
      function prime(container: Element) {
        expectTooltipNotVisible(container);
        showTooltipOnCoordinate(container, lineChartMouseHoverTooltipSelector, {
          clientX: 20,
          clientY: 20,
        });
        hideTooltip(container, lineChartMouseHoverTooltipSelector);
        expectTooltipNotVisible(container);

        showTooltipOnCoordinate(container, lineChartMouseHoverTooltipSelector, {
          clientX: 80,
          clientY: 80,
        });
        return getTooltip(container);
      }

      it('should animate towards the final position', () => {
        const { container } = renderTestCase();
        const tooltip = prime(container);

        expect(tooltip).toHaveStyle({
          top: 0,
          left: 0,
          transform: 'translate(75px, 60px)',
          transition: 'transform 400ms ease',
        });
      });
    });
  });

  describe('with custom content', () => {
    const MyCustomContent = () => <p>My Custom Content</p>;
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <LineChart
        width={100}
        height={100}
        data={[
          { name: 'A', value: 1 },
          { name: 'B', value: 2 },
        ]}
      >
        <Line dataKey="value" />
        {children}
        <Tooltip content={MyCustomContent} />
      </LineChart>
    ));

    describe('when tooltip is displayed first time', () => {
      function prime(container: Element) {
        showTooltipOnCoordinate(container, lineChartMouseHoverTooltipSelector, {
          clientX: 20,
          clientY: 20,
        });
      }

      it('should select isActive: true', () => {
        const { container, spy } = renderTestCase(state => selectIsTooltipActive(state, 'axis', 'hover', undefined));
        expect(spy).toHaveBeenLastCalledWith({ activeIndex: null, isActive: false });
        prime(container);
        expect(spy).toHaveBeenLastCalledWith({ activeIndex: '0', isActive: true });
      });

      it('should animate towards the final position', () => {
        const { container } = renderTestCase();
        prime(container);

        expectTooltipCoordinate(container, {
          x: 15,
          y: 30,
        });
      });

      it('should start at 0,0', () => {
        const { container } = renderTestCase();
        prime(container);

        const tooltip = getTooltip(container);
        expect(tooltip).toHaveStyle({
          top: 0,
          left: 0,
          transform: 'translate(15px, 30px)',
          transition: 'transform 400ms ease',
        });
      });
    });

    describe('when tooltip hides, and then shows again', () => {
      function prime(container: Element) {
        expectTooltipNotVisible(container);
        showTooltipOnCoordinate(container, lineChartMouseHoverTooltipSelector, {
          clientX: 20,
          clientY: 20,
        });
        hideTooltip(container, lineChartMouseHoverTooltipSelector);
        expectTooltipNotVisible(container);

        showTooltipOnCoordinate(container, lineChartMouseHoverTooltipSelector, {
          clientX: 80,
          clientY: 80,
        });
        return getTooltip(container);
      }

      it('should animate towards the final position', () => {
        const { container } = renderTestCase();
        const tooltip = prime(container);

        expect(tooltip).toHaveStyle({
          top: 0,
          left: 0,
          transform: 'translate(75px, 60px)',
          transition: 'transform 400ms ease',
        });
      });
    });
  });
});
