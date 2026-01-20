import React, { ReactElement } from 'react';
import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { act, fireEvent } from '@testing-library/react';
import { generateMockData } from '@recharts/devtools';
import { Bar, BarChart, BarShapeProps, DefaultZIndexes, Tooltip, XAxis } from '../../../src';
import { createSelectorTestCase } from '../../helper/createSelectorTestCase';
import { expectActiveBars, expectBars, ExpectedBar } from '../../helper/expectBars';
import { hideTooltip, showTooltip } from '../../component/Tooltip/tooltipTestHelpers';
import { barChartMouseHoverTooltipSelector } from '../../component/Tooltip/tooltipMouseHoverSelectors';
import { mockGetBoundingClientRect } from '../../helper/mockGetBoundingClientRect';
import { expectNthCalledWith } from '../../helper/expectLastCalledWith';
import { assertNotNull } from '../../helper/assertNotNull';

const expectedBars: ReadonlyArray<ExpectedBar> = [
  {
    d: 'M 24.5,61.7 h 156 v 303.3 h -156 Z',
    height: '303.3',
    radius: '0',
    width: '156',
    x: '24.5',
    y: '61.7',
  },
  {
    d: 'M 219.5,100.85 h 156 v 264.15 h -156 Z',
    height: '264.15',
    radius: '0',
    width: '156',
    x: '219.5',
    y: '100.85',
  },
];

describe('Bar CSS transitions', () => {
  beforeEach(() => {
    mockGetBoundingClientRect({ width: 100, height: 100 });
  });

  describe('width activeBar=false', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <BarChart width={400} height={400} data={generateMockData(2, 10)}>
        <Bar dataKey="y" isAnimationActive={false} />
        <XAxis dataKey="x" />
        {children}
        <Tooltip />
      </BarChart>
    ));

    it('should ignore mouse events and only render inactive shapes - this is performance optimization', () => {
      const { container } = renderTestCase();

      expectBars(container, expectedBars);
      expectActiveBars(container, []);

      showTooltip(container, barChartMouseHoverTooltipSelector);

      expectBars(container, expectedBars);
      expectActiveBars(container, []);
    });
  });

  describe('width activeBar=true', () => {
    it('should render active shapes on mouse over to give it a chance to start its CSS transition', () => {
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <BarChart width={400} height={400} data={generateMockData(2, 10)}>
          <Bar dataKey="y" isAnimationActive={false} activeBar />
          <XAxis dataKey="x" />
          {children}
          <Tooltip />
        </BarChart>
      ));

      const { container } = renderTestCase();

      expect(
        container.querySelectorAll(`.recharts-zIndex-layer_${DefaultZIndexes.bar} .recharts-inactive-bar`),
      ).toHaveLength(2);
      expect(
        container.querySelectorAll(`.recharts-zIndex-layer_${DefaultZIndexes.activeBar} .recharts-active-bar`),
      ).toHaveLength(0);
      expect(container.querySelectorAll(`.recharts-bar-rectangle`)).toHaveLength(2);

      showTooltip(container, barChartMouseHoverTooltipSelector);

      /*
       * So what happens now is that one of the bars is becoming active.
       * It does that in multiple steps so that the CSS animation gets a chance to kick in.
       *
       * 1) First, the active bar is rendered in its "active" position, but with an "inactive" CSS class
       * and inactive shape. This is necessary because due to ZIndex layering, the active bar needs to be rendered
       * somewhere else in the DOM tree, which inevitably causes a re-render. This re-render will reset any CSS transitions.
       * So we need to first render the bar in the right place, but still in its inactive shape.
       * For the consumer, this is invisible.
       */
      expect(
        container.querySelectorAll(`.recharts-zIndex-layer_${DefaultZIndexes.bar} .recharts-inactive-bar`),
      ).toHaveLength(1);
      expect(
        container.querySelectorAll(`.recharts-zIndex-layer_${DefaultZIndexes.activeBar} .recharts-active-bar`),
      ).toHaveLength(0);
      // Now we have inactive bar, in active position.
      expect(
        container.querySelectorAll(`.recharts-zIndex-layer_${DefaultZIndexes.activeBar} .recharts-inactive-bar`),
      ).toHaveLength(1);
      expect(container.querySelectorAll(`.recharts-bar-rectangle`)).toHaveLength(2);

      act(() => {
        vi.runOnlyPendingTimers();
      });

      expect(
        container.querySelectorAll(`.recharts-zIndex-layer_${DefaultZIndexes.bar} .recharts-inactive-bar`),
      ).toHaveLength(1);
      // After one more render, the active bar is now rendered with active shape and class.
      expect(
        container.querySelectorAll(`.recharts-zIndex-layer_${DefaultZIndexes.activeBar} .recharts-active-bar`),
      ).toHaveLength(1);
      expect(
        container.querySelectorAll(`.recharts-zIndex-layer_${DefaultZIndexes.activeBar} .recharts-inactive-bar`),
      ).toHaveLength(0);
      expect(container.querySelectorAll(`.recharts-bar-rectangle`)).toHaveLength(2);

      hideTooltip(container, barChartMouseHoverTooltipSelector);

      /*
       * Similar process happens in reverse. We begin by rendering the now inactive bar
       * in the active position, but with inactive shape and class.
       *
       * This gives the CSS transition a chance to animate from active to inactive.
       */
      expect(
        container.querySelectorAll(`.recharts-zIndex-layer_${DefaultZIndexes.bar} .recharts-inactive-bar`),
      ).toHaveLength(1);
      expect(
        container.querySelectorAll(`.recharts-zIndex-layer_${DefaultZIndexes.activeBar} .recharts-active-bar`),
      ).toHaveLength(0);
      expect(
        container.querySelectorAll(`.recharts-zIndex-layer_${DefaultZIndexes.activeBar} .recharts-inactive-bar`),
      ).toHaveLength(1);
      expect(container.querySelectorAll(`.recharts-bar-rectangle`)).toHaveLength(2);

      act(() => {
        vi.runOnlyPendingTimers();
      });

      /*
       * Now comes a twist: rendering alone does nothing. Recharts is now waiting for the CSS transition to finish.
       * It detects that via the transitionend event.
       *
       * So at this point, nothing has changed yet.
       */
      expect(
        container.querySelectorAll(`.recharts-zIndex-layer_${DefaultZIndexes.bar} .recharts-inactive-bar`),
      ).toHaveLength(1);
      expect(
        container.querySelectorAll(`.recharts-zIndex-layer_${DefaultZIndexes.activeBar} .recharts-active-bar`),
      ).toHaveLength(0);
      expect(
        container.querySelectorAll(`.recharts-zIndex-layer_${DefaultZIndexes.activeBar} .recharts-inactive-bar`),
      ).toHaveLength(1);
      expect(container.querySelectorAll(`.recharts-bar-rectangle`)).toHaveLength(2);
      // Now, we simulate the end of the CSS transition.
      const activeBarRect = container.querySelector(
        `.recharts-zIndex-layer_${DefaultZIndexes.activeBar} .recharts-inactive-bar path`,
      );
      assertNotNull(activeBarRect);
      act(() => {
        fireEvent.transitionEnd(activeBarRect);
      });

      /*
       * Finally, after the transition ends, the inactive bar is fully rendered back
       * in the bar layer.
       */
      expect(
        container.querySelectorAll(`.recharts-zIndex-layer_${DefaultZIndexes.bar} .recharts-inactive-bar`),
      ).toHaveLength(2);
      expect(
        container.querySelectorAll(`.recharts-zIndex-layer_${DefaultZIndexes.activeBar} .recharts-active-bar`),
      ).toHaveLength(0);
      expect(
        container.querySelectorAll(`.recharts-zIndex-layer_${DefaultZIndexes.activeBar} .recharts-inactive-bar`),
      ).toHaveLength(0);
      expect(container.querySelectorAll(`.recharts-bar-rectangle`)).toHaveLength(2);
    });

    it('should call the shape renderer with isActive=true for active bars', () => {
      const shapeSpy: Mock<(props: BarShapeProps) => ReactElement> = vi.fn();
      const renderTestCase = createSelectorTestCase(({ children }) => (
        <BarChart width={400} height={400} data={generateMockData(2, 10)}>
          <Bar dataKey="y" isAnimationActive={false} activeBar shape={shapeSpy} />
          <XAxis dataKey="x" />
          {children}
          <Tooltip />
        </BarChart>
      ));

      const { container } = renderTestCase();

      expect(shapeSpy).toHaveBeenCalledTimes(2);
      expectNthCalledWith(
        shapeSpy,
        1,
        expect.objectContaining({
          index: 0,
          isActive: false,
        }),
        0,
      );
      expectNthCalledWith(
        shapeSpy,
        2,
        expect.objectContaining({
          index: 1,
          isActive: false,
        }),
        1,
      );

      showTooltip(container, barChartMouseHoverTooltipSelector);

      /*
       * There are some extra re-renders that we could avoid with more memoization, but that's not critical.
       * Focus that all of those are isActive: false, even though the first bar is now in the active position.
       */
      expect(shapeSpy).toHaveBeenCalledTimes(5);
      expectNthCalledWith(
        shapeSpy,
        3,
        expect.objectContaining({
          index: 0,
          isActive: false,
        }),
        0,
      );

      expectNthCalledWith(
        shapeSpy,
        4,
        expect.objectContaining({
          index: 1,
          isActive: false,
        }),
        1,
      );

      expectNthCalledWith(
        shapeSpy,
        5,
        expect.objectContaining({
          index: 0,
          isActive: false,
        }),
        0,
      );

      hideTooltip(container, barChartMouseHoverTooltipSelector);

      /*
       * Now, finally, the first bar is becoming inactive again.
       * Still, all calls are isActive: false. The CSS animation can now begin.
       */
      expect(shapeSpy).toHaveBeenCalledTimes(7);
      expectNthCalledWith(
        shapeSpy,
        6,
        expect.objectContaining({
          index: 0,
          isActive: false,
        }),
        0,
      );
      expectNthCalledWith(
        shapeSpy,
        7,
        expect.objectContaining({
          index: 1,
          isActive: false,
        }),
        1,
      );

      /*
       * Next render is not going to do anything; it's waiting for the CSS transition to end.
       */
      act(() => {
        vi.runOnlyPendingTimers();
      });
      expect(shapeSpy).toHaveBeenCalledTimes(7);

      // Now, we simulate the end of the CSS transition.
      const lastTransitionEndProp = shapeSpy.mock.lastCall?.[0].onTransitionEnd;
      assertNotNull(lastTransitionEndProp);
      act(() => {
        // @ts-expect-error we don't have mock event for transition end
        lastTransitionEndProp();
      });

      /*
       * Finally, after the transition ends, the inactive bar is fully rendered back
       * in the bar layer.
       * React appears to optimize away the final render, so no extra calls are made.
       */
      expect(shapeSpy).toHaveBeenCalledTimes(7);
    });
  });
});
