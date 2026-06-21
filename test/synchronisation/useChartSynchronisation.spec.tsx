import { describe, it, expect, vi, Mock, beforeEach } from 'vitest';
import React from 'react';
import { eventCenter, TOOLTIP_SYNC_EVENT } from '../../src/util/Events';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { Bar, BarChart, Tooltip, XAxis } from '../../src';
import { PageData } from '../_data';
import { setSyncInteraction } from '../../src/state/tooltipSlice';
import { selectSyncId } from '../../src/state/selectors/rootPropsSelectors';
import { hideTooltip, showTooltip } from '../component/Tooltip/tooltipTestHelpers';
import { barChartMouseHoverTooltipSelector } from '../component/Tooltip/tooltipMouseHoverSelectors';
import { mockGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';
import { expectLastCalledWith } from '../helper/expectLastCalledWith';
import { TickItem } from '../../src/util/types';
import { findClosestTick } from '../../src/synchronisation/useChartSynchronisation';

describe('useTooltipChartSynchronisation', () => {
  let eventSpy: Mock<(...args: any[]) => any>;

  beforeEach(() => {
    eventSpy = vi.fn();
    eventCenter.on(TOOLTIP_SYNC_EVENT, eventSpy);
    mockGetBoundingClientRect({ width: 100, height: 100 });
  });

  describe('when syncId is set and Tooltip is present', () => {
    const viewBox = {
      height: 390,
      width: 790,
      x: 5,
      y: 5,
    };

    const renderTestCase = createSelectorTestCase(({ children }) => (
      <BarChart width={800} height={400} data={PageData} syncId="my-sync-id">
        <Bar dataKey="uv" />
        <Tooltip />
        {children}
      </BarChart>
    ));

    it('should select syncId from the state', () => {
      const { spy } = renderTestCase(selectSyncId);
      expectLastCalledWith(spy, 'my-sync-id');
    });

    it('should send one sync event on the initial render', () => {
      renderTestCase();
      expect(eventSpy).toHaveBeenCalledTimes(1);
      expect(eventSpy).toHaveBeenLastCalledWith(
        'my-sync-id',
        setSyncInteraction({
          active: false,
          coordinate: undefined,
          dataKey: undefined,
          index: null,
          label: undefined,
          sourceViewBox: viewBox,
          graphicalItemId: undefined,
        }),
        expect.any(Symbol),
      );
    });

    it('should send a sync event after mouse move, and another after mouse leave', () => {
      const { container } = renderTestCase();
      eventSpy.mockClear();
      showTooltip(container, barChartMouseHoverTooltipSelector);
      expect(eventSpy).toHaveBeenCalledTimes(1);
      expect(eventSpy).toHaveBeenLastCalledWith(
        'my-sync-id',
        setSyncInteraction({
          active: true,
          coordinate: {
            x: 202.5,
            y: 200,
          },
          dataKey: undefined, // unsure if this is used for anything at all
          index: '1',
          label: '1',
          sourceViewBox: viewBox,
          graphicalItemId: undefined,
        }),
        expect.any(Symbol),
      );

      hideTooltip(container, barChartMouseHoverTooltipSelector);
      expect(eventSpy).toHaveBeenCalledTimes(2);
      expect(eventSpy).toHaveBeenLastCalledWith(
        'my-sync-id',
        setSyncInteraction({
          active: false,
          coordinate: {
            x: 202.5,
            y: 200,
          },
          dataKey: undefined,
          index: null,
          label: undefined,
          sourceViewBox: viewBox,
          graphicalItemId: undefined,
        }),
        expect.any(Symbol),
      );
    });
  });

  describe('with XAxis and dataKey', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <BarChart width={800} height={400} data={PageData} syncId="my-sync-id">
        <Bar dataKey="uv" />
        <XAxis dataKey="name" />
        <Tooltip />
        {children}
      </BarChart>
    ));

    it('should send the XAxis label as activeLabel', () => {
      const { container } = renderTestCase();
      eventSpy.mockClear();
      showTooltip(container, barChartMouseHoverTooltipSelector);
      expect(eventSpy).toHaveBeenCalledTimes(1);
      expect(eventSpy).toHaveBeenLastCalledWith(
        'my-sync-id',
        setSyncInteraction({
          active: true,
          coordinate: {
            x: 202.5,
            y: 200,
          },
          dataKey: undefined,
          index: '1',
          label: 'Page B',
          sourceViewBox: {
            height: 360,
            width: 790,
            x: 5,
            y: 5,
          },
          graphicalItemId: undefined,
        }),
        expect.any(Symbol),
      );
    });
  });

  describe('when syncId is set but Tooltip is not present', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <BarChart width={800} height={400} data={PageData} syncId="my-sync-id">
        <Bar dataKey="uv" />
        {children}
      </BarChart>
    ));

    it('should select syncId from the state', () => {
      const { spy } = renderTestCase(selectSyncId);
      expectLastCalledWith(spy, 'my-sync-id');
    });

    it('should not send any sync events', () => {
      renderTestCase();
      expect(eventSpy).not.toHaveBeenCalled();
    });
  });

  describe('when syncId is not set and Tooltip is not present', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <BarChart width={800} height={400} data={PageData}>
        <Bar dataKey="uv" />
        {children}
      </BarChart>
    ));

    it('should select syncId from the state', () => {
      const { spy } = renderTestCase(selectSyncId);
      expectLastCalledWith(spy, undefined);
    });

    it('should not send any sync events', () => {
      renderTestCase();
      expect(eventSpy).not.toHaveBeenCalled();
    });
  });

  describe('when syncId is not set but Tooltip is present', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <BarChart width={800} height={400} data={PageData}>
        <Bar dataKey="uv" />
        <Tooltip />
        {children}
      </BarChart>
    ));

    it('should select syncId from the state', () => {
      const { spy } = renderTestCase(selectSyncId);
      expectLastCalledWith(spy, undefined);
    });

    it('should not send any sync events', () => {
      renderTestCase();
      expect(eventSpy).not.toHaveBeenCalled();
    });
  });
});

describe('findClosestTick', () => {
  function tick(value: string, index: number): TickItem {
    return { value, coordinate: index * 100, index };
  }

  it('should return undefined for an empty ticks array', () => {
    expect(findClosestTick([], 'anything')).toBeUndefined();
  });

  it('should return the only tick when array has one element', () => {
    const ticks = [tick('B', 0)];
    expect(findClosestTick(ticks, 'A')).toEqual(ticks[0]);
    expect(findClosestTick(ticks, 'B')).toEqual(ticks[0]);
    expect(findClosestTick(ticks, 'C')).toEqual(ticks[0]);
  });

  it('should return the first tick when label is before all ticks', () => {
    const ticks = [tick('B', 0), tick('D', 1), tick('F', 2)];
    expect(findClosestTick(ticks, 'A')).toEqual(ticks[0]);
  });

  it('should return the last tick when label is after all ticks', () => {
    const ticks = [tick('B', 0), tick('D', 1), tick('F', 2)];
    expect(findClosestTick(ticks, 'Z')).toEqual(ticks[2]);
  });

  it('should return the exact tick when label matches', () => {
    const ticks = [tick('B', 0), tick('D', 1), tick('F', 2)];
    expect(findClosestTick(ticks, 'D')).toEqual(ticks[1]);
  });

  it('should return the previous tick when label falls between two ticks', () => {
    const ticks = [tick('B', 0), tick('D', 1), tick('F', 2)];
    // 'C' is between 'B' and 'D' — should return 'B' (the previous tick)
    expect(findClosestTick(ticks, 'C')).toEqual(ticks[0]);
    // 'E' is between 'D' and 'F' — should return 'D' (the previous tick)
    expect(findClosestTick(ticks, 'E')).toEqual(ticks[1]);
  });

  it('should use lexicographic string comparison, not numeric', () => {
    // Lexicographically: "Day 1" < "Day 10" < "Day 2" < "Day 3"
    const ticks = [tick('Day 1', 0), tick('Day 10', 1), tick('Day 2', 2), tick('Day 3', 3)];
    // "Day 15" falls between "Day 10" and "Day 2" lexicographically
    expect(findClosestTick(ticks, 'Day 15')).toEqual(ticks[1]); // "Day 10"
  });

  it('should handle date-like string labels', () => {
    // ISO date strings sort correctly lexicographically
    const ticks = [tick('2024-01-01', 0), tick('2024-01-03', 1), tick('2024-01-05', 2)];
    // '2024-01-02' is between '2024-01-01' and '2024-01-03' — returns previous tick
    expect(findClosestTick(ticks, '2024-01-02')).toEqual(ticks[0]);
    // '2024-01-04' is between '2024-01-03' and '2024-01-05' — returns previous tick
    expect(findClosestTick(ticks, '2024-01-04')).toEqual(ticks[1]);
  });
});
