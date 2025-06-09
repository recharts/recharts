import * as React from 'react';

// Define the types locally
export interface ZoomTransform {
  scaleX: number;
  scaleY: number;
  offsetX: number;
  offsetY: number;
}

export interface ZoomScales {
  offsetX: number;
  offsetY: number;
}

export interface ExtendedZoomConfig {
  preserveAspectRatio?: boolean;
  autoScaleYDomain?: boolean;
  // other config options
}

export function applyZoomToScale(scale: any, zoomScale: number, offset: number, axisRange: [number, number]): any {
  if (zoomScale === 1 && offset === 0) return scale;

  const [r0, r1] = axisRange;
  const base: any = scale;
  const min = Math.min(r0, r1);
  const max = Math.max(r0, r1);

  // Main scale transformation function - don't modify the actual positions, just apply scaling and offset
  const zoomed = (value: unknown) => {
    // Get the base value from the original scale
    const baseVal = base(value);
    if (baseVal === undefined || baseVal === null) return baseVal;

    // Apply zoom and offset without clamping - let the SVG clipping handle visibility
    return (baseVal - min) * zoomScale + min + offset;
  };

  zoomed.domain = base.domain;
  zoomed.range = () => [r0, r1];

  if (typeof base.invert === 'function') {
    zoomed.invert = (val: number) => base.invert((val - min - offset) / zoomScale + min);
  }

  if (typeof base.bandwidth === 'function') {
    zoomed.bandwidth = () => base.bandwidth() * zoomScale;
  }

  if (typeof base.step === 'function') {
    zoomed.step = () => base.step() * zoomScale;
  }

  if (typeof base.ticks === 'function') {
    zoomed.ticks = (...args: any[]) => base.ticks(...args);
  }

  return zoomed;
}

/**
 * Gets the adjusted x scale including the offset of parent elements.
 */
export function getAdjustedScale(e: MouseEvent | Touch | React.MouseEvent | React.Touch, ref: SVGSVGElement): ZoomScales {
  if (!ref) return { offsetX: 0, offsetY: 0 };

  // Get the client rectangle for the SVG element to account for its position
  const svgBounds = ref.getBoundingClientRect();

  // Calculate the actual offset within the SVG coordinate system, accounting for scaling
  const offsetX = (e.clientX - svgBounds.left);
  const offsetY = (e.clientY - svgBounds.top);

  return { offsetX, offsetY };
}

/**
 * Calculate final zoom result after zooming on area or wheel
 */
export function getZoomAreaResult(
  currentZoom: ZoomTransform,
  dragStart: ZoomScales,
  dragEnd: ZoomScales,
  ref: SVGSVGElement,
  config: ExtendedZoomConfig,
): ZoomTransform {
  // First convert to screen coordinates accounting for current zoom
  const rectStart = {
    x: dragStart.offsetX,
    y: dragStart.offsetY,
  };

  const rectEnd = {
    x: dragEnd.offsetX,
    y: dragEnd.offsetY,
  };

  // Sort coordinates so x1,y1 is always the top-left
  const [x1, x2] = [rectStart.x, rectEnd.x].sort((a, b) => a - b);
  const [y1, y2] = [rectStart.y, rectEnd.y].sort((a, b) => a - b);

  // Get the dimensions of the SVG element
  const svgRect = ref.getBoundingClientRect();
  const width = svgRect.width;
  const height = svgRect.height;

  // Calculate scales for each dimension (how much to zoom in)
  const scaleX = width / Math.max(1, x2 - x1);
  const scaleY = height / Math.max(1, y2 - y1);

  // Apply constraint to maintain aspect ratio if needed
  let finalScaleX = scaleX;
  let finalScaleY = scaleY;

  if (config.preserveAspectRatio) {
    const scale = Math.min(scaleX, scaleY);
    finalScaleX = scale;
    finalScaleY = scale;
  }

  // Calculate the new offset to center the selection area
  // Convert selection area center to original coordinates, then apply scale
  const centerX = (x1 + x2) / 2;
  const centerY = (y1 + y2) / 2;

  // Calculate new offset to center on the selection
  const newOffsetX = width / 2 - centerX * finalScaleX;
  const newOffsetY = height / 2 - centerY * finalScaleY;

  return {
    scaleX: currentZoom.scaleX * finalScaleX,
    scaleY: currentZoom.scaleY * finalScaleY,
    offsetX: newOffsetX,
    offsetY: newOffsetY,
  };
}
