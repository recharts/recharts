import { describe, it, expect, beforeEach } from 'vitest';
import React from 'react';
import { fireEvent } from '@testing-library/react';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { RadialBar, RadialBarChart, Tooltip } from '../../../src';
import { PageData } from '../../_data';
import { selectActiveTooltipIndex } from '../../../src/state/selectors/tooltipSelectors';
import { showTooltip } from '../../component/Tooltip/tooltipTestHelpers';
import { assertNotNull } from '../../helper/assertNotNull';
import { radialBarChartMouseHoverTooltipSelector } from '../../component/Tooltip/tooltipMouseHoverSelectors';
import { mockGetBoundingClientRect } from '../../helper/mockGetBoundingClientRect';

describe('selectActiveTooltipIndex', () => {
  beforeEach(() => {
    mockGetBoundingClientRect({ width: 100, height: 100 });
  });

  describe('in RadialChart', () => {
    describe('with default Tooltip', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <RadialBarChart width={300} height={300} data={PageData}>
          <RadialBar dataKey="uv" isAnimationActive={false} />
          <Tooltip />
          {children}
        </RadialBarChart>
      ));

      it('should return undefined before any interaction', () => {
        const { spy } = renderTestCase(selectActiveTooltipIndex);
        expect(spy).toHaveBeenLastCalledWith(null);
      });

      it('should return index after mouse hover, and undefined again after mouse leave', () => {
        const { container, spy } = renderTestCase(selectActiveTooltipIndex);
        const trigger = showTooltip(container, '.recharts-radial-bar-sector');
        expect(spy).toHaveBeenLastCalledWith('3');
        fireEvent.mouseLeave(trigger);
        expect(spy).toHaveBeenLastCalledWith(null);
      });

      it('should return undefined after clicking on a sector', () => {
        const { container, spy } = renderTestCase(selectActiveTooltipIndex);
        const trigger = container.querySelector('.recharts-radial-bar-sector');
        assertNotNull(trigger);
        expect(spy).toHaveBeenLastCalledWith(null);
        expect(spy).toHaveBeenCalledTimes(1);
        fireEvent.click(trigger);
        expect(spy).toHaveBeenLastCalledWith(null);
        expect(spy).toHaveBeenCalledTimes(1);
      });
    });

    describe('with defaultIndex=number', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <RadialBarChart width={300} height={300} data={PageData}>
          <RadialBar dataKey="uv" isAnimationActive={false} />
          <Tooltip defaultIndex={0} />
          {children}
        </RadialBarChart>
      ));

      it('should return the default index before any interaction', () => {
        const { spy } = renderTestCase(selectActiveTooltipIndex);
        expect(spy).toHaveBeenLastCalledWith('0');
      });

      it('should return mouse hover index after mouse hover, and undefined again after mouse leave', () => {
        const { container, spy } = renderTestCase(selectActiveTooltipIndex);
        const trigger = showTooltip(container, radialBarChartMouseHoverTooltipSelector);
        expect(spy).toHaveBeenLastCalledWith('3');
        fireEvent.mouseLeave(trigger);
        expect(spy).toHaveBeenLastCalledWith(null);
      });

      it('should return the default index after clicking on a sector', () => {
        const { container, spy } = renderTestCase(selectActiveTooltipIndex);
        const trigger = container.querySelector('.recharts-radial-bar-sector');
        assertNotNull(trigger);
        expect(spy).toHaveBeenLastCalledWith('0');
        expect(spy).toHaveBeenCalledTimes(3);
        fireEvent.click(trigger);
        expect(spy).toHaveBeenLastCalledWith('0');
        expect(spy).toHaveBeenCalledTimes(3);
      });
    });

    describe('with shared=false', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <RadialBarChart width={300} height={300} data={PageData}>
          <RadialBar dataKey="uv" isAnimationActive={false} />
          <Tooltip shared={false} />
          {children}
        </RadialBarChart>
      ));

      it('should return undefined before any interaction', () => {
        const { spy } = renderTestCase(selectActiveTooltipIndex);
        expect(spy).toHaveBeenLastCalledWith(null);
      });

      it('should return index after mouse hover, and undefined again after mouse leave', () => {
        const { container, spy } = renderTestCase(selectActiveTooltipIndex);
        const trigger = showTooltip(container, '.recharts-radial-bar-sector');
        expect(spy).toHaveBeenLastCalledWith('0');
        fireEvent.mouseLeave(trigger);
        expect(spy).toHaveBeenLastCalledWith(null);
      });

      it('should return undefined after clicking on a sector', () => {
        const { container, spy } = renderTestCase(selectActiveTooltipIndex);
        const trigger = container.querySelector('.recharts-radial-bar-sector');
        assertNotNull(trigger);
        expect(spy).toHaveBeenLastCalledWith(null);
        expect(spy).toHaveBeenCalledTimes(1);
        fireEvent.click(trigger);
        expect(spy).toHaveBeenLastCalledWith(null);
        expect(spy).toHaveBeenCalledTimes(1);
      });
    });

    describe('with shared=false and defaultIndex=number', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <RadialBarChart width={300} height={300} data={PageData}>
          <RadialBar dataKey="uv" isAnimationActive={false} />
          <Tooltip shared={false} defaultIndex={3} />
          {children}
        </RadialBarChart>
      ));

      it('should return the default index before any interaction', () => {
        const { spy } = renderTestCase(selectActiveTooltipIndex);
        expect(spy).toHaveBeenLastCalledWith('3');
      });

      it('should return mouse hover index after mouse hover, and undefined again after mouse leave', () => {
        const { container, spy } = renderTestCase(selectActiveTooltipIndex);
        const trigger = showTooltip(container, '.recharts-radial-bar-sector');
        expect(spy).toHaveBeenLastCalledWith('0');
        fireEvent.mouseLeave(trigger);
        expect(spy).toHaveBeenLastCalledWith(null);
      });

      it('should return the default index after clicking on a sector', () => {
        const { container, spy } = renderTestCase(selectActiveTooltipIndex);
        const trigger = container.querySelector('.recharts-radial-bar-sector');
        assertNotNull(trigger);
        expect(spy).toHaveBeenLastCalledWith('3');
        expect(spy).toHaveBeenCalledTimes(3);
        fireEvent.click(trigger);
        expect(spy).toHaveBeenLastCalledWith('3');
        expect(spy).toHaveBeenCalledTimes(3);
      });
    });

    describe('with trigger=click', () => {
      describe('without defaultIndex', () => {
        const renderTestCase = createSelectorTestCase(({ children }) => (
          <RadialBarChart width={300} height={300} data={PageData}>
            <RadialBar dataKey="uv" isAnimationActive={false} />
            <Tooltip trigger="click" />
            {children}
          </RadialBarChart>
        ));

        it('should return undefined before any interaction', () => {
          const { spy } = renderTestCase(selectActiveTooltipIndex);
          expect(spy).toHaveBeenLastCalledWith(null);
        });

        it('should return index after clicking on a chart, and continue returning that index after clicking again', () => {
          const { container, spy } = renderTestCase(selectActiveTooltipIndex);
          const trigger = container.querySelector(radialBarChartMouseHoverTooltipSelector);
          assertNotNull(trigger);
          expect(spy).toHaveBeenLastCalledWith(null);
          expect(spy).toHaveBeenCalledTimes(1);
          fireEvent.click(trigger, { clientX: 200, clientY: 200 });
          expect(spy).toHaveBeenLastCalledWith('3');
          expect(spy).toHaveBeenCalledTimes(2);
          fireEvent.click(trigger, { clientX: 200, clientY: 200 });
          expect(spy).toHaveBeenLastCalledWith('3');
          expect(spy).toHaveBeenCalledTimes(2);
        });

        it('should return undefined after mouse hover', () => {
          const { container, spy } = renderTestCase(selectActiveTooltipIndex);
          const trigger = showTooltip(container, '.recharts-radial-bar-sector');
          expect(spy).toHaveBeenLastCalledWith(null);
          fireEvent.mouseLeave(trigger);
          expect(spy).toHaveBeenLastCalledWith(null);
        });
      });

      describe('with defaultIndex=number', () => {
        const renderTestCase = createSelectorTestCase(({ children }) => (
          <RadialBarChart width={300} height={300} data={PageData}>
            <RadialBar dataKey="uv" isAnimationActive={false} />
            <Tooltip trigger="click" defaultIndex={1} />
            {children}
          </RadialBarChart>
        ));

        it('should return the default index before any interaction', () => {
          const { spy } = renderTestCase(selectActiveTooltipIndex);
          expect(spy).toHaveBeenLastCalledWith('1');
        });

        it('should return mouse hover index after clicking on the chart, and continue returning that index after clicking again', () => {
          const { container, spy } = renderTestCase(selectActiveTooltipIndex);
          const trigger = container.querySelector(radialBarChartMouseHoverTooltipSelector);
          assertNotNull(trigger);
          expect(spy).toHaveBeenLastCalledWith('1');
          expect(spy).toHaveBeenCalledTimes(3);
          fireEvent.click(trigger, { clientX: 200, clientY: 200 });
          expect(spy).toHaveBeenLastCalledWith('3');
          expect(spy).toHaveBeenCalledTimes(4);
          fireEvent.click(trigger, { clientX: 200, clientY: 200 });
          expect(spy).toHaveBeenLastCalledWith('3');
          expect(spy).toHaveBeenCalledTimes(4);
        });

        it('should ignore mouse hover events', () => {
          const { container, spy } = renderTestCase(selectActiveTooltipIndex);
          const trigger = showTooltip(container, radialBarChartMouseHoverTooltipSelector);
          expect(spy).toHaveBeenLastCalledWith('1');
          fireEvent.mouseLeave(trigger);
          expect(spy).toHaveBeenLastCalledWith('1');
        });
      });
    });
  });
});
