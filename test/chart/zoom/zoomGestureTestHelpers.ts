import { Mock, vi } from 'vitest';
import { PointerRegion, ZoomGestureApi } from '../../../src/chart/zoom/ZoomGestureApi';
import { ResolvedZoomOptions, resolveZoomOptions } from '../../../src/util/zoom/ZoomOptions';

/**
 * The mocked plot area spans this many client pixels from the client origin, so a client coordinate
 * maps to a plot fraction by dividing by it. Keeps the expected values in the gesture specs readable.
 */
export const PLOT_SIZE = 100;

/** Every {@link ZoomGestureApi} method replaced by a mock, so specs can both stub and assert on them. */
export type MockZoomApi = {
  [K in keyof ZoomGestureApi]: ZoomGestureApi[K] extends (...args: infer A) => infer R
    ? Mock<(...args: A) => R>
    : ZoomGestureApi[K];
};

const clampToPlot = (value: number): number => Math.min(Math.max(value, 0), PLOT_SIZE);

/**
 * A {@link ZoomGestureApi} whose element is attached to the document (so events bubble to `window`)
 * and whose geometry is a square plot at the client origin. `y` fractions are flipped to follow the
 * data direction, matching the real controller.
 */
export function createMockZoomApi(overrides: Partial<ResolvedZoomOptions> = {}): MockZoomApi {
  const element = document.createElement('div');
  document.body.appendChild(element);
  // Overrides are applied to the resolved options so specs can set the internal ones the
  // composable components use (wheelRegions, pointerMode, onSelectRegion) as well as public ones.
  const options: ResolvedZoomOptions = { ...resolveZoomOptions({}), ...overrides };

  return {
    element,
    getOptions: vi.fn(() => options),
    getOffset: vi.fn(() => ({ left: 0, top: 0, width: PLOT_SIZE, height: PLOT_SIZE })),
    plotFractions: vi.fn((clientX: number, clientY: number) => ({
      x: clampToPlot(clientX) / PLOT_SIZE,
      y: 1 - clampToPlot(clientY) / PLOT_SIZE,
    })),
    plotPixels: vi.fn((clientX: number, clientY: number) => ({
      x: clampToPlot(clientX),
      y: clampToPlot(clientY),
    })),
    pointerRegion: vi.fn((): PointerRegion => 'plot'),
    zoomBy: vi.fn(),
    panBy: vi.fn(),
    panByPixels: vi.fn(),
    getFlipped: vi.fn(() => ({ x: false, y: false })),
    selectInto: vi.fn(),
    previewSelection: vi.fn(() => ({ startRatio: 0.25, endRatio: 0.75 })),
    reset: vi.fn(),
    refreshPointer: vi.fn(),
    refreshActivePointer: vi.fn(),
    setSelection: vi.fn(),
  };
}

export function cleanupMockZoomApi(api: MockZoomApi): void {
  api.element.remove();
}

export function pointerEvent(type: string, init: PointerEventInit = {}): PointerEvent {
  return new PointerEvent(type, { bubbles: true, cancelable: true, pointerId: 1, pointerType: 'mouse', ...init });
}

export function wheelEvent(init: WheelEventInit = {}): WheelEvent {
  return new WheelEvent('wheel', { bubbles: true, cancelable: true, ...init });
}
