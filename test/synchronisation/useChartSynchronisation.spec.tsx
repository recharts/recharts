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

describe('useTooltipChartSynchronisation', () => {
  let eventSpy: Mock<(...args: any[]) => any>;

  beforeEach(() => {
    eventSpy = vi.fn();
    eventCenter.on(TOOLTIP_SYNC_EVENT, eventSpy);
    mockGetBoundingClientRect({ width: 100, height: 100 });
  });

  describe('when syncId is set and Tooltip is present', () => {
    const renderTestCase = createSelectorTestCase(({ children }) => (
      <BarChart width={800} height={400} data={PageData} syncId="my-sync-id">
        <Bar dataKey="uv" />
        <Tooltip />
        {children}
      </BarChart>
    ));

    it('should select syncId from the state', () => {
      const { spy } = renderTestCase(selectSyncId);
      expect(spy).toHaveBeenLastCalledWith('my-sync-id');
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
      expect(spy).toHaveBeenLastCalledWith('my-sync-id');
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
      expect(spy).toHaveBeenLastCalledWith(undefined);
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
      expect(spy).toHaveBeenLastCalledWith(undefined);
    });

    it('should not send any sync events', () => {
      renderTestCase();
      expect(eventSpy).not.toHaveBeenCalled();
    });
  });
});
