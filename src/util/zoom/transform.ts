import { Coordinate } from '../types';
import { AxisViewport, clampViewport, FULL_VIEWPORT, getViewportWidth, isFullViewport } from './viewport';

type PlotArea = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type ZoomStateLike = {
  x: AxisViewport;
  y: AxisViewport;
};

function getViewportCenter(viewport: AxisViewport): number {
  return (viewport.startRatio + viewport.endRatio) / 2;
}

export function resizeViewportAroundCenter(viewport: AxisViewport, targetWidth: number): AxisViewport {
  const width = Math.max(Math.min(targetWidth, 1), 0);
  if (!Number.isFinite(width) || width <= 0) {
    return clampViewport(viewport);
  }
  const center = getViewportCenter(viewport);
  const startRatio = center - width / 2;
  const endRatio = center + width / 2;
  return clampViewport({ startRatio, endRatio });
}

export function getUniformZoomState(zoom: ZoomStateLike): ZoomStateLike {
  const xWidth = getViewportWidth(zoom.x);
  const yWidth = getViewportWidth(zoom.y);
  const targetWidth = Math.min(xWidth, yWidth);

  if (!Number.isFinite(targetWidth) || targetWidth >= 1) {
    return { x: FULL_VIEWPORT, y: FULL_VIEWPORT };
  }

  return {
    x: resizeViewportAroundCenter(zoom.x, targetWidth),
    y: resizeViewportAroundCenter(zoom.y, targetWidth),
  };
}

export function getZoomTransformForPlot(plot: PlotArea, zoom: ZoomStateLike): string | null {
  if (plot.width <= 0 || plot.height <= 0 || (isFullViewport(zoom.x) && isFullViewport(zoom.y))) {
    return null;
  }

  const scaleX = 1 / getViewportWidth(zoom.x);
  const scaleY = 1 / getViewportWidth(zoom.y);
  const translateX = -plot.x - zoom.x.startRatio * plot.width;
  const translateY = -plot.y - zoom.y.startRatio * plot.height;

  return `translate(${plot.x} ${plot.y}) scale(${scaleX} ${scaleY}) translate(${translateX} ${translateY})`;
}

export function transformCoordinateByZoom(
  coordinate: Coordinate | undefined,
  plot: PlotArea,
  zoom: ZoomStateLike,
): Coordinate | undefined {
  if (coordinate == null) {
    return undefined;
  }

  const transform = getZoomTransformForPlot(plot, zoom);
  if (transform == null) {
    return coordinate;
  }

  const scaleX = 1 / getViewportWidth(zoom.x);
  const scaleY = 1 / getViewportWidth(zoom.y);

  return {
    x: plot.x + (coordinate.x - plot.x - zoom.x.startRatio * plot.width) * scaleX,
    y: plot.y + (coordinate.y - plot.y - zoom.y.startRatio * plot.height) * scaleY,
  };
}
