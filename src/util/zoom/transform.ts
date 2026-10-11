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

type CameraZoomMode = 'independent' | 'uniform';

/*
 * Camera zoom is a chart capability, not a consequence of whether an axis component happened to
 * register. Cartesian charts commonly omit visible axes while still using implicit x/y scales, so
 * treating an empty axis registry as a camera chart would apply both range zoom and a second SVG
 * transform.
 */
const cameraZoomModes: Readonly<Partial<Record<string, CameraZoomMode>>> = {
  FunnelChart: 'independent',
  PieChart: 'uniform',
  RadarChart: 'uniform',
  RadialBarChart: 'uniform',
  Sankey: 'independent',
  Sunburst: 'uniform',
  Treemap: 'independent',
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

/**
 * Returns the render-time viewport projection for a camera-zoom chart, or `undefined` for charts
 * whose x/y scales already apply zoom. This never mutates or normalizes the public/store viewport.
 */
export function getCameraZoomState(chartName: string | undefined, zoom: ZoomStateLike): ZoomStateLike | undefined {
  const cameraZoomMode = chartName == null ? undefined : cameraZoomModes[chartName];
  if (cameraZoomMode == null) {
    return undefined;
  }
  return cameraZoomMode === 'uniform' ? getUniformZoomState(zoom) : zoom;
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

/**
 * Projects a raw SVG coordinate into wrapper/screen space for camera-zoom charts. Scale-based
 * cartesian charts are returned unchanged because their coordinates already include range zoom.
 */
export function transformCoordinateByCameraZoom(
  coordinate: Coordinate | undefined,
  plot: PlotArea,
  chartName: string | undefined,
  zoom: ZoomStateLike,
): Coordinate | undefined {
  const cameraZoomState = getCameraZoomState(chartName, zoom);
  return cameraZoomState == null ? coordinate : transformCoordinateByZoom(coordinate, plot, cameraZoomState);
}
