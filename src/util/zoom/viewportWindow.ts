import { ZoomState } from '../../state/zoomSlice';
import { AxisViewport, clampRatio, clampViewport, getViewportWidth, panViewport } from './viewport';
import { ZoomLimits } from './zoomActions';

export type ViewportWindowArea = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type ViewportWindowFlipped = {
  x: boolean;
  y: boolean;
};

export type ViewportWindowRect = ViewportWindowArea;

export type ViewportWindowHandle =
  | 'body'
  | 'left'
  | 'right'
  | 'top'
  | 'bottom'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

export type ViewportWindowHit = ViewportWindowHandle | 'outside';

const MIN_PIXEL_SIZE = 1;

function clampPixel(value: number, start: number, length: number): number {
  return Math.min(Math.max(value, start), start + length);
}

export function axisViewportToPixelWindow(
  viewport: AxisViewport,
  start: number,
  length: number,
  flipped: boolean,
): { start: number; end: number } {
  if (length <= 0) {
    return { start, end: start };
  }
  const pixelStartRatio = flipped ? 1 - viewport.endRatio : viewport.startRatio;
  const pixelEndRatio = flipped ? 1 - viewport.startRatio : viewport.endRatio;
  return {
    start: start + pixelStartRatio * length,
    end: start + pixelEndRatio * length,
  };
}

export function pixelWindowToAxisViewport(
  pixelStart: number,
  pixelEnd: number,
  start: number,
  length: number,
  flipped: boolean,
): AxisViewport {
  if (length <= 0) {
    return { startRatio: 0, endRatio: 1 };
  }
  const low = (Math.min(pixelStart, pixelEnd) - start) / length;
  const high = (Math.max(pixelStart, pixelEnd) - start) / length;
  if (flipped) {
    return clampViewport({ startRatio: 1 - high, endRatio: 1 - low });
  }
  return clampViewport({ startRatio: low, endRatio: high });
}

export function zoomStateToRect(
  zoom: ZoomState,
  area: ViewportWindowArea,
  flipped: ViewportWindowFlipped,
): ViewportWindowRect {
  const xWindow = axisViewportToPixelWindow(zoom.x, area.x, area.width, flipped.x);
  const yWindow = axisViewportToPixelWindow(zoom.y, area.y, area.height, flipped.y);
  return {
    x: xWindow.start,
    y: yWindow.start,
    width: Math.max(xWindow.end - xWindow.start, MIN_PIXEL_SIZE),
    height: Math.max(yWindow.end - yWindow.start, MIN_PIXEL_SIZE),
  };
}

export function rectToZoomState(
  rect: ViewportWindowRect,
  area: ViewportWindowArea,
  flipped: ViewportWindowFlipped,
): ZoomState {
  return {
    x: pixelWindowToAxisViewport(rect.x, rect.x + rect.width, area.x, area.width, flipped.x),
    y: pixelWindowToAxisViewport(rect.y, rect.y + rect.height, area.y, area.height, flipped.y),
  };
}

export function panZoomStateByPixels(
  zoom: ZoomState,
  area: ViewportWindowArea,
  flipped: ViewportWindowFlipped,
  deltaX: number,
  deltaY: number,
): ZoomState {
  const xDelta = area.width === 0 ? 0 : (flipped.x ? -deltaX : deltaX) / area.width;
  const yDelta = area.height === 0 ? 0 : (flipped.y ? -deltaY : deltaY) / area.height;
  return {
    x: panViewport(zoom.x, xDelta),
    y: panViewport(zoom.y, yDelta),
  };
}

export function centerViewportAroundRatio(viewport: AxisViewport, centerRatio: number): AxisViewport {
  const width = getViewportWidth(viewport);
  const targetStart = clampRatio(centerRatio) - width / 2;
  return panViewport(viewport, targetStart - viewport.startRatio);
}

export function centerZoomStateAtPoint(
  zoom: ZoomState,
  area: ViewportWindowArea,
  flipped: ViewportWindowFlipped,
  x: number,
  y: number,
): ZoomState {
  const xRatio = area.width === 0 ? 0.5 : clampRatio((x - area.x) / area.width);
  const yRatio = area.height === 0 ? 0.5 : clampRatio((y - area.y) / area.height);
  return {
    x: centerViewportAroundRatio(zoom.x, flipped.x ? 1 - xRatio : xRatio),
    y: centerViewportAroundRatio(zoom.y, flipped.y ? 1 - yRatio : yRatio),
  };
}

export function resizeZoomStateRect(
  zoom: ZoomState,
  area: ViewportWindowArea,
  flipped: ViewportWindowFlipped,
  handle: ViewportWindowHandle,
  pointerX: number,
  pointerY: number,
  limits?: ZoomLimits,
): ZoomState {
  const rect = zoomStateToRect(zoom, area, flipped);
  let left = rect.x;
  let right = rect.x + rect.width;
  let top = rect.y;
  let bottom = rect.y + rect.height;

  const clampedX = clampPixel(pointerX, area.x, area.width);
  const clampedY = clampPixel(pointerY, area.y, area.height);

  // The zoom limits in pixel terms: a window narrower than minSize would exceed maxZoom, wider
  // than maxSize would fall below minZoom. Only the dragged edge is clamped, so the anchor holds.
  const minSizeX = limits ? Math.max((1 / limits.maxZoom) * area.width, MIN_PIXEL_SIZE) : MIN_PIXEL_SIZE;
  const maxSizeX = limits ? Math.min(1, 1 / limits.minZoom) * area.width : area.width;
  const minSizeY = limits ? Math.max((1 / limits.maxZoom) * area.height, MIN_PIXEL_SIZE) : MIN_PIXEL_SIZE;
  const maxSizeY = limits ? Math.min(1, 1 / limits.minZoom) * area.height : area.height;

  if (handle.includes('left')) {
    left = Math.min(Math.max(clampedX, right - maxSizeX), right - minSizeX);
  } else if (handle.includes('right')) {
    right = Math.max(Math.min(clampedX, left + maxSizeX), left + minSizeX);
  }

  if (handle.includes('top')) {
    top = Math.min(Math.max(clampedY, bottom - maxSizeY), bottom - minSizeY);
  } else if (handle.includes('bottom')) {
    bottom = Math.max(Math.min(clampedY, top + maxSizeY), top + minSizeY);
  }

  return rectToZoomState({ x: left, y: top, width: right - left, height: bottom - top }, area, flipped);
}

export function hitTestViewportWindow(
  rect: ViewportWindowRect,
  x: number,
  y: number,
  handleSize = 8,
): ViewportWindowHit {
  const left = rect.x;
  const right = rect.x + rect.width;
  const top = rect.y;
  const bottom = rect.y + rect.height;
  const inX = x >= left && x <= right;
  const inY = y >= top && y <= bottom;
  if (!inX || !inY) {
    return 'outside';
  }

  const onLeft = Math.abs(x - left) <= handleSize;
  const onRight = Math.abs(x - right) <= handleSize;
  const onTop = Math.abs(y - top) <= handleSize;
  const onBottom = Math.abs(y - bottom) <= handleSize;

  if (onTop && onLeft) {
    return 'top-left';
  }
  if (onTop && onRight) {
    return 'top-right';
  }
  if (onBottom && onLeft) {
    return 'bottom-left';
  }
  if (onBottom && onRight) {
    return 'bottom-right';
  }
  if (onLeft) {
    return 'left';
  }
  if (onRight) {
    return 'right';
  }
  if (onTop) {
    return 'top';
  }
  if (onBottom) {
    return 'bottom';
  }
  return 'body';
}
