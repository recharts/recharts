import { describe, expect, it } from 'vitest';
import { ZoomState } from '../../../src/state/zoomSlice';
import {
  hitTestViewportWindow,
  panZoomStateByPixels,
  pixelWindowToAxisViewport,
  resizeZoomStateRect,
  zoomStateToRect,
} from '../../../src/util/zoom/viewportWindow';

const zoom: ZoomState = {
  x: { startRatio: 0.25, endRatio: 0.5 },
  y: { startRatio: 0.1, endRatio: 0.6 },
};

describe('viewportWindow', () => {
  it('maps a zoom viewport to a pixel rectangle', () => {
    expect(zoomStateToRect(zoom, { x: 10, y: 20, width: 200, height: 100 }, { x: false, y: false })).toEqual({
      x: 60,
      y: 30,
      width: 50,
      height: 50,
    });
  });

  it('supports flipped axes when mapping pixels back to ratios', () => {
    expect(pixelWindowToAxisViewport(20, 60, 0, 100, true)).toEqual({
      startRatio: 0.4,
      endRatio: 0.8,
    });
  });

  it('pans by screen pixels while preserving viewport width', () => {
    const result = panZoomStateByPixels(zoom, { x: 0, y: 0, width: 200, height: 100 }, { x: false, y: false }, 20, 10);
    expect(result.x).toEqual({ startRatio: 0.35, endRatio: 0.6 });
    expect(result.y).toEqual({ startRatio: 0.2, endRatio: 0.7 });
  });

  it('resizes one edge of the viewport rectangle', () => {
    const result = resizeZoomStateRect(
      zoom,
      { x: 0, y: 0, width: 200, height: 100 },
      { x: false, y: false },
      'right',
      150,
      0,
    );
    expect(result.x).toEqual({ startRatio: 0.25, endRatio: 0.75 });
    expect(result.y).toEqual(zoom.y);
  });

  it('selects the nearest horizontal edge when handles overlap', () => {
    const rect = { x: 10, y: 20, width: 8, height: 40 };

    expect(hitTestViewportWindow(rect, 11, 40)).toBe('left');
    expect(hitTestViewportWindow(rect, 17, 40)).toBe('right');
    expect(hitTestViewportWindow(rect, 14, 40)).toBe('left');
  });

  it('selects the nearest vertical edge when handles overlap', () => {
    const rect = { x: 10, y: 20, width: 40, height: 8 };

    expect(hitTestViewportWindow(rect, 30, 21)).toBe('top');
    expect(hitTestViewportWindow(rect, 30, 27)).toBe('bottom');
    expect(hitTestViewportWindow(rect, 30, 24)).toBe('top');
  });

  it('preserves corner hit testing when both dimensions have overlapping handles', () => {
    const rect = { x: 10, y: 20, width: 8, height: 8 };

    expect(hitTestViewportWindow(rect, 11, 21)).toBe('top-left');
    expect(hitTestViewportWindow(rect, 17, 21)).toBe('top-right');
    expect(hitTestViewportWindow(rect, 11, 27)).toBe('bottom-left');
    expect(hitTestViewportWindow(rect, 17, 27)).toBe('bottom-right');
  });
});
