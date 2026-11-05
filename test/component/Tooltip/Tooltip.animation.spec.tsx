import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { Line, LineChart, Tooltip, TooltipContentProps } from '../../../src';
import {
  expectTooltipCoordinate,
  expectTooltipNotVisible,
  getTooltip,
  hideTooltip,
  showTooltipOnCoordinate,
} from './tooltipTestHelpers';
import { lineChartMouseHoverTooltipSelector } from './tooltipMouseHoverSelectors';
import { selectIsTooltipActive } from '../../../src/state/selectors/selectors';
import { getMockDomRect, mockGetBoundingClientRect } from '../../helper/mockGetBoundingClientRect';
import { expectLastCalledWith } from '../../helper/expectLastCalledWith';

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
        expectLastCalledWith(spy, { activeIndex: null, isActive: false });
        prime(container);
        expectLastCalledWith(spy, { activeIndex: '0', isActive: true });
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

  describe('with animation disabled', () => {
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
        <Tooltip isAnimationActive={false} />
      </LineChart>
    ));

    it('should not set will-change when the position transition is disabled', () => {
      const { container } = renderTestCase();
      showTooltipOnCoordinate(container, lineChartMouseHoverTooltipSelector, {
        clientX: 20,
        clientY: 20,
      });

      const tooltip = getTooltip(container);
      expect(tooltip.style.transition).not.toContain('transform 400ms ease');
      expect(tooltip.style.willChange).not.toBe('transform');
    });
  });

  describe('with default animation settings', () => {
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

    it('should promote the wrapper to a compositor layer while the transition is enabled', () => {
      /*
       * Without will-change: transform, Chromium-based browsers can leave stale fragments
       * of the previous tooltip position on screen during fast pointer moves.
       * https://github.com/recharts/recharts/issues/7754
       */
      const { container } = renderTestCase();
      showTooltipOnCoordinate(container, lineChartMouseHoverTooltipSelector, {
        clientX: 20,
        clientY: 20,
      });

      const tooltip = getTooltip(container);
      expect(tooltip).toHaveStyle({
        transition: 'transform 400ms ease',
        willChange: 'transform',
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
        expectLastCalledWith(spy, { activeIndex: null, isActive: false });
        prime(container);
        expectLastCalledWith(spy, { activeIndex: '0', isActive: true });
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

  describe('with custom content that renders nothing while inactive', () => {
    beforeEach(() => {
      /*
       * Browsers measure the tooltip wrapper as 0x0 while the content renders nothing.
       * Everything else keeps the 10x10 mock.
       */
      vi.spyOn(Element.prototype, 'getBoundingClientRect').mockImplementation(function getRect(this: Element) {
        const isEmptyTooltipWrapper =
          this.classList.contains('recharts-tooltip-wrapper') && this.childElementCount === 0;
        return getMockDomRect(isEmptyTooltipWrapper ? { width: 0, height: 0 } : { width: 10, height: 10 });
      });
    });

    const MyCustomContent = ({ active, payload }: TooltipContentProps) => {
      if (active && payload && payload.length > 0) {
        return <p>My Custom Content</p>;
      }
      return null;
    };
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

    it('should start at 0,0 when displayed first time', () => {
      const { container } = renderTestCase();
      const tooltip = getTooltip(container);
      expect(tooltip.style.transform).toBe('');

      showTooltipOnCoordinate(container, lineChartMouseHoverTooltipSelector, {
        clientX: 20,
        clientY: 20,
      });

      expect(tooltip).toHaveStyle({
        transform: 'translate(15px, 30px)',
        transition: 'transform 400ms ease',
      });
    });

    describe('when tooltip hides, and then shows again', () => {
      it('should stay at its last position while hidden', () => {
        const { container } = renderTestCase();
        showTooltipOnCoordinate(container, lineChartMouseHoverTooltipSelector, {
          clientX: 20,
          clientY: 20,
        });
        hideTooltip(container, lineChartMouseHoverTooltipSelector);
        expectTooltipNotVisible(container);

        const tooltip = getTooltip(container);
        expect(tooltip).toBeEmptyDOMElement();
        expect(tooltip.style.transform).toBe('translate(15px, 30px)');
      });

      it('should animate from the last position towards the final position', () => {
        const { container } = renderTestCase();
        const tooltip = getTooltip(container);
        showTooltipOnCoordinate(container, lineChartMouseHoverTooltipSelector, {
          clientX: 20,
          clientY: 20,
        });
        hideTooltip(container, lineChartMouseHoverTooltipSelector);

        const observer = new MutationObserver(() => {});
        observer.observe(tooltip, { attributes: true, attributeFilter: ['style'], attributeOldValue: true });
        showTooltipOnCoordinate(container, lineChartMouseHoverTooltipSelector, {
          clientX: 80,
          clientY: 80,
        });
        // style values before each change; the transition starts from the first one
        const previousStyles = observer.takeRecords().map(record => record.oldValue);
        observer.disconnect();

        expect(previousStyles[0]).toContain('transform: translate(15px, 30px)');
        previousStyles.forEach(previousStyle => {
          expect(previousStyle).toContain('transform: translate(');
        });
        expect(tooltip).toHaveStyle({
          transform: 'translate(75px, 60px)',
          transition: 'transform 400ms ease',
        });
      });
    });
  });
});
