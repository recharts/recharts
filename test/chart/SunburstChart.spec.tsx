import React from 'react';
import { fireEvent } from '@testing-library/react';
import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { Customized, SunburstChart, SunburstData, Tooltip } from '../../src';
import { exampleSunburstData } from '../_data';
import { useChartHeight, useChartWidth, useViewBox } from '../../src/context/chartLayoutContext';
import { useAppSelector } from '../../src/state/hooks';
import { sunburstChartMouseHoverTooltipSelector } from '../component/Tooltip/tooltipMouseHoverSelectors';
import { assertNotNull } from '../helper/assertNotNull';

import { useClipPathId } from '../../src/container/ClipPathProvider';
import { rechartsTestRender } from '../helper/createSelectorTestCase';
import { userEventSetup } from '../helper/userEventSetup';
import { expectLastCalledWith } from '../helper/expectLastCalledWith';
import { TooltipInteractionState } from '../../src/state/tooltipSlice';
import { mockGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';
import {
  expectTooltipCoordinate,
  expectTooltipNotVisible,
  expectTooltipPayload,
} from '../component/Tooltip/tooltipTestHelpers';

describe('<Sunburst />', () => {
  it('renders each sector in order under the correct category', () => {
    const { container } = rechartsTestRender(<SunburstChart width={500} height={500} data={exampleSunburstData} />);

    const sectors = container.querySelectorAll('.recharts-sector');

    expect(sectors[0]).toHaveAttribute('fill', '#264653');
    expect(sectors[1]).toHaveAttribute('fill', '#264653');
    expect(sectors[2]).toHaveAttribute('fill', '#2a9d8f');
    expect(sectors[3]).toHaveAttribute('fill', '#2a9d8f');
    expect(sectors[4]).toHaveAttribute('fill', '#e9c46a');
  });

  it('fires callbacks upon hover and click events', async () => {
    const user = userEventSetup();
    const onMouseEnter = vi.fn();
    const onMouseLeave = vi.fn();
    const onClick = vi.fn();

    const { container } = rechartsTestRender(
      <SunburstChart
        width={500}
        height={500}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        data={exampleSunburstData}
      />,
    );
    const sector = container.querySelectorAll('.recharts-sector')[0];

    await user.hover(sector);
    expect(onMouseEnter).toHaveBeenCalled();
    expectLastCalledWith(
      onMouseEnter,
      {
        name: 'Child1',
        fill: '#264653',
        value: 30,
        children: [
          {
            name: 'third child',
            value: 10,
          },
        ],
        tooltipIndex: '[0]',
      },
      expect.any(Object),
    );

    await user.unhover(sector);
    expect(onMouseLeave).toHaveBeenCalled();
    expectLastCalledWith(
      onMouseLeave,
      {
        name: 'Child1',
        fill: '#264653',
        value: 30,
        children: [
          {
            name: 'third child',
            value: 10,
          },
        ],
        tooltipIndex: '[0]',
      },
      expect.any(Object),
    );

    await user.click(sector);
    expect(onClick).toHaveBeenCalled();
    // click doesn't add the original event, not sure why?
    expectLastCalledWith(onClick, {
      name: 'Child1',
      fill: '#264653',
      value: 30,
      children: [
        {
          name: 'third child',
          value: 10,
        },
      ],
      tooltipIndex: '[0]',
    });
  });

  it('does not call touch event callbacks', async () => {
    const onTouchMove = vi.fn();
    const onTouchEnd = vi.fn();

    const { container } = rechartsTestRender(
      <SunburstChart
        width={500}
        height={500}
        // @ts-expect-error typescript is correct here - indeed SunburstChart does not fire touch events
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        data={exampleSunburstData}
      />,
    );
    const sector = container.querySelectorAll('.recharts-sector')[0];

    fireEvent.touchMove(sector, { touches: [{ clientX: 200, clientY: 200 }] });
    expect(onTouchMove).not.toHaveBeenCalled();
  });

  describe('SunburstChart layout context', () => {
    it('should provide viewBox but not clipPathId', () => {
      const clipPathSpy = vi.fn();
      const viewBoxSpy = vi.fn();
      const Comp = (): null => {
        clipPathSpy(useClipPathId());
        viewBoxSpy(useViewBox());
        return null;
      };
      rechartsTestRender(
        <SunburstChart width={100} height={50} data={exampleSunburstData}>
          <Customized component={<Comp />} />
        </SunburstChart>,
      );

      expect(clipPathSpy).toHaveBeenLastCalledWith(undefined);
      expect(viewBoxSpy).toHaveBeenLastCalledWith({ x: 0, y: 0, width: 100, height: 50 });
      expect(viewBoxSpy).toHaveBeenCalledTimes(2);
    });

    it('should set width and height in context', () => {
      const widthSpy = vi.fn();
      const heightSpy = vi.fn();
      const Comp = (): null => {
        widthSpy(useChartWidth());
        heightSpy(useChartHeight());
        return null;
      };
      rechartsTestRender(
        <SunburstChart width={100} height={50} data={exampleSunburstData}>
          <Customized component={<Comp />} />
        </SunburstChart>,
      );
      expect(widthSpy).toHaveBeenLastCalledWith(100);
      expect(heightSpy).toHaveBeenLastCalledWith(50);
      expect(widthSpy).toHaveBeenCalledTimes(2);
      expect(heightSpy).toHaveBeenCalledTimes(2);
    });
  });

  describe('tooltip state', () => {
    it('should start with tooltip inactive, and activate it on hover and click on a link', () => {
      const tooltipStateSpy: Mock<
        (state: { click: TooltipInteractionState; hover: TooltipInteractionState } | undefined) => void
      > = vi.fn();
      const Comp = (): null => {
        tooltipStateSpy(useAppSelector(state => state.tooltip.itemInteraction));
        return null;
      };
      const { container } = rechartsTestRender(
        <SunburstChart width={1000} height={500} data={exampleSunburstData}>
          <Customized component={<Comp />} />
        </SunburstChart>,
      );
      expect(tooltipStateSpy).toHaveBeenLastCalledWith({
        click: {
          active: false,
          index: null,
          dataKey: undefined,
          coordinate: undefined,
        },
        hover: {
          active: false,
          index: null,
          dataKey: undefined,
          coordinate: undefined,
        },
      });
      expect(tooltipStateSpy).toHaveBeenCalledTimes(1);

      const tooltipTriggerElement = container.querySelector(sunburstChartMouseHoverTooltipSelector);
      assertNotNull(tooltipTriggerElement);

      fireEvent.mouseOver(tooltipTriggerElement, { clientX: 200, clientY: 200 });

      expectLastCalledWith(tooltipStateSpy, {
        click: {
          active: false,
          index: null,
          dataKey: undefined,
          coordinate: undefined,
          graphicalItemId: undefined,
        },
        hover: {
          active: true,
          index: '[0]',
          dataKey: 'value',
          graphicalItemId: expect.stringMatching(/^recharts-sunburst-.+/),
          coordinate: {
            x: 583.3333333333334,
            y: 250,
          },
        },
      });
      expect(tooltipStateSpy).toHaveBeenCalledTimes(2);

      fireEvent.click(tooltipTriggerElement);

      expectLastCalledWith(tooltipStateSpy, {
        click: {
          active: true,
          coordinate: {
            x: 583.3333333333334,
            y: 250,
          },
          dataKey: 'value',
          index: '[0]',
          graphicalItemId: expect.stringMatching(/^recharts-sunburst-.+/),
        },
        hover: {
          active: true,
          coordinate: {
            x: 583.3333333333334,
            y: 250,
          },
          dataKey: 'value',
          index: '[0]',
          graphicalItemId: expect.stringMatching(/^recharts-sunburst-.+/),
        },
      });
      expect(tooltipStateSpy).toHaveBeenCalledTimes(3);

      fireEvent.mouseLeave(tooltipTriggerElement);

      expectLastCalledWith(tooltipStateSpy, {
        click: {
          active: true,
          coordinate: {
            x: 583.3333333333334,
            y: 250,
          },
          dataKey: 'value',
          index: '[0]',
          graphicalItemId: expect.stringMatching(/^recharts-sunburst-.+/),
        },
        hover: {
          active: false,
          index: '[0]',
          dataKey: 'value',
          coordinate: {
            x: 583.3333333333334,
            y: 250,
          },
          graphicalItemId: expect.stringMatching(/^recharts-sunburst-.+/),
        },
      });
      expect(tooltipStateSpy).toHaveBeenCalledTimes(4);
    });
  });

  describe('tooltip coordinate resolved from defaultIndex', () => {
    /*
     * jsdom reports a zero-sized tooltip which Tooltip reads as "do not show me",
     * so the bounding rect has to be mocked before the tooltip is expected to be visible.
     */
    beforeEach(() => {
      mockGetBoundingClientRect({ width: 10, height: 10 });
    });

    it('should show the tooltip at the sector position when defaultIndex is the tooltip index of a first ring node', () => {
      const { container } = rechartsTestRender(
        <SunburstChart width={400} height={400} data={exampleSunburstData}>
          <Tooltip defaultIndex="[0]" />
        </SunburstChart>,
      );

      expectTooltipPayload(container, '', ['Child1 : 30']);
      /*
       * The chart is 400x400 so cx, cy are 200, 200. The first ring node starts at angle 0 and its
       * label sits half way through the ring thickness, which is (200 - 50) / 3 = 50,
       * so the coordinate is 200 + (50 + 50 / 2) = 275 on the x axis.
       */
      expectTooltipCoordinate(container, { x: 285, y: 210 });
    });

    it('should show the tooltip at the sector position when defaultIndex is the tooltip index of a nested node', () => {
      const { container } = rechartsTestRender(
        <SunburstChart width={400} height={400} data={exampleSunburstData}>
          <Tooltip defaultIndex="[0]children[0]" />
        </SunburstChart>,
      );

      expectTooltipPayload(container, '', ['third child : 10']);
      // The second ring starts at 50 + 50 + 2 and its label is half way through it, so 200 + 127 on the x axis.
      expectTooltipCoordinate(container, { x: 337, y: 210 });
    });

    it('should not show the tooltip when defaultIndex does not match any node', () => {
      const { container } = rechartsTestRender(
        <SunburstChart width={400} height={400} data={exampleSunburstData}>
          <Tooltip defaultIndex="[9]" />
        </SunburstChart>,
      );

      expectTooltipNotVisible(container);
    });
  });

  describe('with repeated node names', () => {
    const duplicateNameData: SunburstData = {
      name: 'Root',
      value: 100,
      children: [
        {
          name: 'A',
          value: 50,
          children: [{ name: 'shared', value: 25 }],
        },
        {
          name: 'B',
          value: 50,
          children: [{ name: 'shared', value: 25 }],
        },
      ],
    };

    /*
     * Sectors are rendered depth first, so these are: A, A/shared, B, B/shared.
     * Two of them are named `shared` which used to collide both in the React key and in
     * the map of tooltip positions.
     */
    it('should render each sector with its own key and give each of them its own coordinate', () => {
      const coordinateSpy: Mock<(coordinate: TooltipInteractionState['coordinate']) => void> = vi.fn();
      const Comp = (): null => {
        coordinateSpy(useAppSelector(state => state.tooltip.itemInteraction.hover.coordinate));
        return null;
      };
      const { container } = rechartsTestRender(
        <SunburstChart width={400} height={400} data={duplicateNameData}>
          <Customized component={<Comp />} />
        </SunburstChart>,
      );

      const sectors = container.querySelectorAll('.recharts-sector');
      expect(sectors).toHaveLength(4);

      const hoverCoordinates: TooltipInteractionState['coordinate'][] = [];
      sectors.forEach(sector => {
        fireEvent.mouseEnter(sector);
        expectLastCalledWith(coordinateSpy, expect.anything());
        hoverCoordinates.push(coordinateSpy.mock.lastCall?.[0]);
      });

      // A is at the start of the first ring, A/shared at the start of the second ring
      expect(hoverCoordinates[0]).toEqual({ x: 275, y: 200 });
      expect(hoverCoordinates[1]).toEqual({ x: 327, y: 200 });
      /*
       * B and B/shared are half a circle away which is where the two `shared` sectors used to
       * collapse onto the same position.
       */
      expect(hoverCoordinates[3]).not.toEqual(hoverCoordinates[1]);
      expect(new Set(hoverCoordinates.map(coordinate => `${coordinate?.x},${coordinate?.y}`)).size).toBe(4);
    });
  });
});
