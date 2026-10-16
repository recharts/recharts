import React from 'react';
import { beforeEach, describe, it, expect, vi } from 'vitest';
import { act, fireEvent, render } from '@testing-library/react';
import { Bar, BarChart } from '../../src';
import { RechartsWrapper } from '../../src/chart/RechartsWrapper';
import { assertNotNull } from '../helper/assertNotNull';
import { getMockDomRect, mockGetBoundingClientRect } from '../helper/mockGetBoundingClientRect';
import { mockHTMLElementProperty } from '../helper/mockHTMLElementProperty';

describe('RechartsWrapper', () => {
  it('should call onMouseEnter, and onMouseLeave handlers', async () => {
    const onMouseEnterSpy = vi.fn();
    const onMouseLeaveSpy = vi.fn();
    const { container } = render(
      <BarChart width={800} height={400} onMouseEnter={onMouseEnterSpy} onMouseLeave={onMouseLeaveSpy} />,
    );

    const wrapper = container.querySelector('.recharts-wrapper');
    assertNotNull(wrapper);
    expect(wrapper).toBeInTheDocument();

    expect(onMouseEnterSpy).not.toHaveBeenCalled();
    expect(onMouseLeaveSpy).not.toHaveBeenCalled();

    fireEvent.mouseEnter(wrapper);

    act(() => {
      vi.runOnlyPendingTimers();
    });

    expect(onMouseEnterSpy).toHaveBeenCalledTimes(1);
    expect(onMouseLeaveSpy).not.toHaveBeenCalled();

    fireEvent.mouseLeave(wrapper);

    act(() => {
      vi.runOnlyPendingTimers();
    });

    expect(onMouseEnterSpy).toHaveBeenCalledTimes(1);
    expect(onMouseLeaveSpy).toHaveBeenCalledTimes(1);
  });

  it('should disconnect the previous ResizeObserver before creating a new one when the DOM node changes', () => {
    const observeSpy = vi.fn();
    const disconnectSpy = vi.fn();

    // Mock global ResizeObserver
    const ResizeObserverMock = vi.fn(function ResizeObserverMock() {
      return {
        observe: observeSpy,
        unobserve: vi.fn(),
        disconnect: disconnectSpy,
      };
    });
    vi.stubGlobal('ResizeObserver', ResizeObserverMock);

    // Initial render. Passing an inline function ref guarantees the component invokes the callback
    // ref and goes through the observer setup on re-render.
    const { rerender } = render(
      <RechartsWrapper responsive width={100} height={100} ref={() => {}}>
        <div />
      </RechartsWrapper>,
    );

    expect(ResizeObserverMock).toHaveBeenCalledTimes(1);
    expect(observeSpy).toHaveBeenCalledTimes(1);
    expect(disconnectSpy).not.toHaveBeenCalled();

    // Re-render with a newly created inline function ref to force React to call
    // the callback ref again. This simulates a ref change that causes a new ResizeObserver to be instantiated.
    rerender(
      <RechartsWrapper responsive width={100} height={100} ref={() => {}}>
        <div />
      </RechartsWrapper>,
    );

    // The test asserts that the first observer was disconnected before the second one is created
    expect(disconnectSpy).toHaveBeenCalledTimes(1);

    // Assert that a second observer wrapper was indeed created
    expect(ResizeObserverMock).toHaveBeenCalledTimes(2);
    expect(observeSpy).toHaveBeenCalledTimes(2);

    vi.unstubAllGlobals();
  });

  describe('first size measurement', () => {
    const data = [{ uv: 4 }, { uv: 3 }, { uv: 5 }];

    function getSurfaceSize(container: Element) {
      const surface = container.querySelector('svg.recharts-surface');
      assertNotNull(surface);
      return { width: surface.getAttribute('width'), height: surface.getAttribute('height') };
    }

    beforeEach(() => {
      // The border box: a 400x200 content box with 20px of padding on every side
      mockGetBoundingClientRect({ width: 440, height: 240 });
    });

    it('excludes padding in a chart with a percentage size', () => {
      const { container } = render(
        <BarChart width="100%" height="100%" data={data} style={{ padding: 20 }}>
          <Bar dataKey="uv" isAnimationActive={false} />
        </BarChart>,
      );
      expect(getSurfaceSize(container)).toEqual({ width: '400', height: '200' });
    });

    it('excludes padding in a responsive chart', () => {
      vi.stubGlobal(
        'ResizeObserver',
        vi.fn(function ResizeObserverMock() {
          return { observe: vi.fn(), unobserve: vi.fn(), disconnect: vi.fn() };
        }),
      );
      const { container } = render(
        <BarChart responsive data={data} style={{ width: 400, height: 200, padding: 20 }}>
          <Bar dataKey="uv" isAnimationActive={false} />
        </BarChart>,
      );
      expect(getSurfaceSize(container)).toEqual({ width: '400', height: '200' });
    });

    it('excludes border as well as padding', () => {
      // The client size excludes the 5px border on each side
      mockHTMLElementProperty('clientWidth', 430);
      mockHTMLElementProperty('clientHeight', 230);
      const { container } = render(
        <BarChart width="100%" height="100%" data={data} style={{ padding: 15, border: '5px solid black' }}>
          <Bar dataKey="uv" isAnimationActive={false} />
        </BarChart>,
      );
      expect(getSurfaceSize(container)).toEqual({ width: '400', height: '200' });
    });

    it('ignores a CSS transform that scales the painted box', () => {
      // Inside a parent with `transform: scale(0.5)`, the painted box is half the layout box
      vi.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue(getMockDomRect({ width: 220, height: 120 }));
      mockHTMLElementProperty('clientWidth', 440);
      mockHTMLElementProperty('clientHeight', 240);
      const { container } = render(
        <BarChart width="100%" height="100%" data={data} style={{ padding: 20 }}>
          <Bar dataKey="uv" isAnimationActive={false} />
        </BarChart>,
      );
      expect(getSurfaceSize(container)).toEqual({ width: '400', height: '200' });
    });

    it('measures the whole box when there is no padding or border', () => {
      const { container } = render(
        <BarChart width="100%" height="100%" data={data}>
          <Bar dataKey="uv" isAnimationActive={false} />
        </BarChart>,
      );
      expect(getSurfaceSize(container)).toEqual({ width: '440', height: '240' });
    });
  });
});
