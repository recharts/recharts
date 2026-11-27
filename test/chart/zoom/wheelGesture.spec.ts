import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { installWheelGesture } from '../../../src/chart/zoom/wheelGesture';
import { cleanupMockZoomApi, createMockZoomApi, MockZoomApi, wheelEvent } from './zoomGestureTestHelpers';

const WHEEL_STEP = 1.15;
const WHEEL_PAN_STEP = 0.0015;

describe('installWheelGesture', () => {
  let api: MockZoomApi, uninstall: () => void;

  const install = (): void => {
    uninstall = installWheelGesture(api);
  };

  beforeEach(() => {
    api = createMockZoomApi();
  });

  afterEach(() => {
    uninstall?.();
    cleanupMockZoomApi(api);
  });

  describe('zoom direction', () => {
    it('zooms in when the wheel scrolls up', () => {
      install();
      api.element.dispatchEvent(wheelEvent({ deltaY: -100, clientX: 50, clientY: 50 }));

      expect(api.zoomBy).toHaveBeenCalledWith('x', WHEEL_STEP, 0.5);
      expect(api.zoomBy).toHaveBeenCalledWith('y', WHEEL_STEP, 0.5);
    });

    it('zooms out when the wheel scrolls down', () => {
      install();
      api.element.dispatchEvent(wheelEvent({ deltaY: 100, clientX: 50, clientY: 50 }));

      expect(api.zoomBy).toHaveBeenCalledWith('x', 1 / WHEEL_STEP, 0.5);
      expect(api.zoomBy).toHaveBeenCalledWith('y', 1 / WHEEL_STEP, 0.5);
    });

    /*
     * A trackpad can report a horizontal-only swipe, where deltaY is 0. Reading the direction off
     * deltaY made both swipe directions zoom out, so the direction must come from the dominant axis.
     */
    it('zooms in for a horizontal-only swipe with a negative deltaX', () => {
      install();
      api.element.dispatchEvent(wheelEvent({ deltaX: -100, deltaY: 0, clientX: 50, clientY: 50 }));

      expect(api.zoomBy).toHaveBeenCalledWith('x', WHEEL_STEP, 0.5);
    });

    it('zooms out for a horizontal-only swipe with a positive deltaX', () => {
      install();
      api.element.dispatchEvent(wheelEvent({ deltaX: 100, deltaY: 0, clientX: 50, clientY: 50 }));

      expect(api.zoomBy).toHaveBeenCalledWith('x', 1 / WHEEL_STEP, 0.5);
    });

    it('gives the two horizontal-only directions opposite zoom factors', () => {
      install();
      api.element.dispatchEvent(wheelEvent({ deltaX: -100, deltaY: 0, clientX: 50, clientY: 50 }));
      api.element.dispatchEvent(wheelEvent({ deltaX: 100, deltaY: 0, clientX: 50, clientY: 50 }));

      const factors = api.zoomBy.mock.calls.filter(([dimension]) => dimension === 'x').map(([, factor]) => factor);
      expect(factors).toHaveLength(2);
      expect(factors[0]).toBeGreaterThan(1);
      expect(factors[1]).toBeLessThan(1);
    });

    it('ignores deltaX when deltaY dominates', () => {
      install();
      api.element.dispatchEvent(wheelEvent({ deltaX: 10, deltaY: -100, clientX: 50, clientY: 50 }));

      expect(api.zoomBy).toHaveBeenCalledWith('x', WHEEL_STEP, 0.5);
    });

    it('zooms around the pointer position', () => {
      install();
      api.element.dispatchEvent(wheelEvent({ deltaY: -100, clientX: 25, clientY: 75 }));

      expect(api.zoomBy).toHaveBeenCalledWith('x', WHEEL_STEP, 0.25);
      // y fractions follow the data direction, so a low client y is a high fraction.
      expect(api.zoomBy).toHaveBeenCalledWith('y', WHEEL_STEP, 0.25);
    });
  });

  describe('modifiers over the plot', () => {
    it('pans horizontally with shift', () => {
      install();
      api.element.dispatchEvent(wheelEvent({ deltaY: 100, clientX: 50, clientY: 50, shiftKey: true }));

      expect(api.panBy).toHaveBeenCalledWith('x', 100 * WHEEL_PAN_STEP);
      expect(api.zoomBy).not.toHaveBeenCalled();
    });

    it('pans vertically with shift and ctrl', () => {
      install();
      api.element.dispatchEvent(wheelEvent({ deltaY: 100, clientX: 50, clientY: 50, shiftKey: true, ctrlKey: true }));

      expect(api.panBy).toHaveBeenCalledWith('y', 100 * WHEEL_PAN_STEP);
      expect(api.panBy).not.toHaveBeenCalledWith('x', expect.anything());
    });

    it('treats meta as ctrl', () => {
      install();
      api.element.dispatchEvent(wheelEvent({ deltaY: 100, clientX: 50, clientY: 50, shiftKey: true, metaKey: true }));

      expect(api.panBy).toHaveBeenCalledWith('y', 100 * WHEEL_PAN_STEP);
    });

    it('uses the dominant delta axis for the pan amount', () => {
      install();
      api.element.dispatchEvent(wheelEvent({ deltaX: -100, deltaY: 0, clientX: 50, clientY: 50, shiftKey: true }));

      expect(api.panBy).toHaveBeenCalledWith('x', -100 * WHEEL_PAN_STEP);
    });

    it('flips the pan direction on a flipped axis', () => {
      api.getFlipped.mockReturnValue({ x: true, y: false });
      install();
      api.element.dispatchEvent(wheelEvent({ deltaY: 100, clientX: 50, clientY: 50, shiftKey: true }));

      expect(api.panBy).toHaveBeenCalledWith('x', -(100 * WHEEL_PAN_STEP));
    });
  });

  describe('regions', () => {
    it('zooms only x over the x axis band', () => {
      api.pointerRegion.mockReturnValue('xAxis');
      install();
      api.element.dispatchEvent(wheelEvent({ deltaY: -100, clientX: 50, clientY: 50 }));

      expect(api.zoomBy).toHaveBeenCalledWith('x', WHEEL_STEP, 0.5);
      expect(api.zoomBy).not.toHaveBeenCalledWith('y', expect.anything(), expect.anything());
    });

    it('zooms only y over the y axis band', () => {
      api.pointerRegion.mockReturnValue('yAxis');
      install();
      api.element.dispatchEvent(wheelEvent({ deltaY: -100, clientX: 50, clientY: 50 }));

      expect(api.zoomBy).toHaveBeenCalledWith('y', WHEEL_STEP, 0.5);
      expect(api.zoomBy).not.toHaveBeenCalledWith('x', expect.anything(), expect.anything());
    });

    it('pans over a scrollbar band, and zooms it with shift', () => {
      api.pointerRegion.mockReturnValue('xScrollbar');
      install();
      api.element.dispatchEvent(wheelEvent({ deltaY: 100, clientX: 50, clientY: 50 }));
      expect(api.panBy).toHaveBeenCalledWith('x', 100 * WHEEL_PAN_STEP);

      api.element.dispatchEvent(wheelEvent({ deltaY: -100, clientX: 50, clientY: 50, shiftKey: true }));
      expect(api.zoomBy).toHaveBeenCalledWith('x', WHEEL_STEP, 0.5);
    });

    it('does nothing outside the chart', () => {
      api.pointerRegion.mockReturnValue('outside');
      install();
      const event = wheelEvent({ deltaY: -100, clientX: 50, clientY: 50 });
      api.element.dispatchEvent(event);

      expect(api.zoomBy).not.toHaveBeenCalled();
      expect(event.defaultPrevented).toBe(false);
    });

    it('ignores an axis band when axisInteractions is off', () => {
      api = createMockZoomApi({ axisInteractions: false });
      api.pointerRegion.mockReturnValue('xAxis');
      install();
      api.element.dispatchEvent(wheelEvent({ deltaY: -100, clientX: 50, clientY: 50 }));

      expect(api.zoomBy).not.toHaveBeenCalled();
    });

    it('only handles the regions listed in wheelRegions', () => {
      api = createMockZoomApi({ wheelRegions: ['xAxis'] });
      api.pointerRegion.mockReturnValue('plot');
      install();
      api.element.dispatchEvent(wheelEvent({ deltaY: -100, clientX: 50, clientY: 50 }));
      expect(api.zoomBy).not.toHaveBeenCalled();

      api.pointerRegion.mockReturnValue('xAxis');
      api.element.dispatchEvent(wheelEvent({ deltaY: -100, clientX: 50, clientY: 50 }));
      expect(api.zoomBy).toHaveBeenCalledWith('x', WHEEL_STEP, 0.5);
    });
  });

  describe('opt-outs', () => {
    it('does nothing when the wheel option is off', () => {
      api = createMockZoomApi({ wheel: false });
      install();
      const event = wheelEvent({ deltaY: -100, clientX: 50, clientY: 50 });
      api.element.dispatchEvent(event);

      expect(api.zoomBy).not.toHaveBeenCalled();
      expect(event.defaultPrevented).toBe(false);
    });

    it('leaves interactive targets to their native wheel behavior', () => {
      const button = document.createElement('button');
      api.element.appendChild(button);
      install();
      button.dispatchEvent(wheelEvent({ deltaY: -100, clientX: 50, clientY: 50 }));

      expect(api.zoomBy).not.toHaveBeenCalled();
    });

    it('still handles a scrollbar target when the scrollbar region is opted in', () => {
      api = createMockZoomApi({ wheelRegions: ['xScrollbar'] });
      api.pointerRegion.mockReturnValue('xScrollbar');
      const scrollbar = document.createElement('div');
      scrollbar.setAttribute('data-recharts-zoom-scrollbar', 'true');
      api.element.appendChild(scrollbar);
      install();
      scrollbar.dispatchEvent(wheelEvent({ deltaY: 100, clientX: 50, clientY: 50 }));

      expect(api.panBy).toHaveBeenCalledWith('x', 100 * WHEEL_PAN_STEP);
    });

    it('does nothing when the plot cannot be measured', () => {
      api.plotFractions.mockReturnValue(null);
      install();
      const event = wheelEvent({ deltaY: -100, clientX: 50, clientY: 50 });
      api.element.dispatchEvent(event);

      expect(api.zoomBy).not.toHaveBeenCalled();
      expect(event.defaultPrevented).toBe(false);
    });
  });

  it('prevents the page from scrolling and refreshes the tooltip', () => {
    install();
    const event = wheelEvent({ deltaY: -100, clientX: 25, clientY: 75 });
    api.element.dispatchEvent(event);

    expect(event.defaultPrevented).toBe(true);
    expect(api.refreshPointer).toHaveBeenCalledWith(25, 75);
  });

  it('stops handling wheel events after cleanup', () => {
    install();
    uninstall();
    api.element.dispatchEvent(wheelEvent({ deltaY: -100, clientX: 50, clientY: 50 }));

    expect(api.zoomBy).not.toHaveBeenCalled();
  });
});
