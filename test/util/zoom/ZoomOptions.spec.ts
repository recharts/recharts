import { describe, it, expect } from 'vitest';
import {
  resolveZoomOptions,
  viewportToWindow,
  windowToViewport,
  zoomEnabledForDimension,
  zoomStateFromViewport,
  zoomStateToViewport,
} from '../../../src/util/zoom/ZoomOptions';
import { FULL_VIEWPORT } from '../../../src/util/zoom/viewport';

describe('resolveZoomOptions', () => {
  it('returns null when zoom is disabled', () => {
    expect(resolveZoomOptions(undefined)).toBeNull();
    expect(resolveZoomOptions(false)).toBeNull();
  });

  it('applies all defaults for zoom={true}', () => {
    expect(resolveZoomOptions(true)).toEqual({
      axis: 'xy',
      minZoom: 1,
      maxZoom: 25,
      wheel: true,
      pan: true,
      doubleClickReset: true,
    });
  });

  it('accepts an axis shorthand', () => {
    expect(resolveZoomOptions('x')).toMatchObject({ axis: 'x', maxZoom: 25 });
    expect(resolveZoomOptions('y')).toMatchObject({ axis: 'y' });
  });

  it('merges options over the defaults and passes controlled fields through', () => {
    const onZoomChange = () => {};
    const resolved = resolveZoomOptions({
      axis: 'x',
      maxZoom: 10,
      pan: false,
      viewport: { x: { start: 0, end: 0.5 } },
      onZoomChange,
    });
    expect(resolved).toMatchObject({
      axis: 'x',
      maxZoom: 10,
      pan: false,
      wheel: true,
      doubleClickReset: true,
      viewport: { x: { start: 0, end: 0.5 } },
      onZoomChange,
    });
  });
});

describe('zoomEnabledForDimension', () => {
  const base = resolveZoomOptions(true)!;
  it('respects the axis constraint', () => {
    expect(zoomEnabledForDimension({ ...base, axis: 'xy' }, 'x')).toBe(true);
    expect(zoomEnabledForDimension({ ...base, axis: 'xy' }, 'y')).toBe(true);
    expect(zoomEnabledForDimension({ ...base, axis: 'x' }, 'x')).toBe(true);
    expect(zoomEnabledForDimension({ ...base, axis: 'x' }, 'y')).toBe(false);
    expect(zoomEnabledForDimension({ ...base, axis: 'y' }, 'x')).toBe(false);
  });
});

describe('window <-> viewport mapping', () => {
  it('windowToViewport maps and clamps', () => {
    expect(windowToViewport({ start: 0.2, end: 0.6 })).toEqual({ startRatio: 0.2, endRatio: 0.6 });
    expect(windowToViewport({ start: -1, end: 2 })).toEqual({ startRatio: 0, endRatio: 1 });
  });

  it('viewportToWindow is the inverse', () => {
    expect(viewportToWindow({ startRatio: 0.1, endRatio: 0.4 })).toEqual({ start: 0.1, end: 0.4 });
  });

  it('zoomStateFromViewport fills omitted dimensions with the full view', () => {
    expect(zoomStateFromViewport({ x: { start: 0.2, end: 0.6 } })).toEqual({
      x: { startRatio: 0.2, endRatio: 0.6 },
      y: FULL_VIEWPORT,
    });
    expect(zoomStateFromViewport({})).toEqual({ x: FULL_VIEWPORT, y: FULL_VIEWPORT });
  });

  it('zoomStateToViewport returns both dimensions in window form', () => {
    expect(zoomStateToViewport({ x: { startRatio: 0.1, endRatio: 0.4 }, y: { startRatio: 0, endRatio: 1 } })).toEqual({
      x: { start: 0.1, end: 0.4 },
      y: { start: 0, end: 1 },
    });
  });
});
