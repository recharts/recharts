import * as React from 'react';
import { useAppSelector } from '../state/hooks';
import { selectChartHeight, selectChartWidth } from '../state/selectors/containerSelectors';
import { selectChartOffsetInternal } from '../state/selectors/selectChartOffsetInternal';
import { selectAllXAxes, selectAllYAxes } from '../state/selectors/selectAllAxes';
import { useIsPanorama } from '../context/PanoramaContext';
import { ResolvedZoomOptions, zoomEnabledForDimension } from '../util/zoom/ZoomOptions';

const MAX_AXIS_TARGET_DEPTH = 48;

function numericAxisSize(size: number | 'auto' | undefined): number {
  return typeof size === 'number' ? size : 0;
}

function axisTargetDepth(measuredSize: number, availableSize: number): number {
  return Math.min(measuredSize > 0 ? measuredSize : availableSize, availableSize, MAX_AXIS_TARGET_DEPTH);
}

/**
 * Transparent, *stable* touch targets over the axis label areas, mounted only on touch devices.
 *
 * Why: dragging or pinching directly on an axis tick label cancels the touch. Panning re-renders the
 * ticks, so the `<text>` under the finger is removed from the DOM and the browser fires `touchcancel`
 * (series paths survive a zoom because React only updates their `d`, which is why plot pinch is fine).
 * These overlays sit on top of the labels and never unmount during a zoom/pan, so the touch keeps a
 * live target. They carry no handlers; the touch gesture on the wrapper does the work via bubbling.
 */
export function ZoomAxisTouchTargets({ options }: { options: ResolvedZoomOptions }) {
  const offset = useAppSelector(selectChartOffsetInternal);
  const width = useAppSelector(selectChartWidth);
  const height = useAppSelector(selectChartHeight);
  const xAxes = useAppSelector(selectAllXAxes) ?? [];
  const yAxes = useAppSelector(selectAllYAxes) ?? [];
  const isPanorama = useIsPanorama();

  const coarsePointer =
    typeof window !== 'undefined' && typeof window.matchMedia === 'function'
      ? window.matchMedia('(any-pointer: coarse)').matches || window.matchMedia('(pointer: coarse)').matches
      : false;

  if (!coarsePointer || !options.axisInteractions || isPanorama || offset == null || width == null || height == null) {
    return null;
  }

  const base: React.CSSProperties = { position: 'absolute', background: 'transparent', touchAction: 'none' };
  const plotRight = offset.left + offset.width;
  const plotBottom = offset.top + offset.height;
  const topAxes = xAxes.filter(axis => axis.orientation === 'top');
  const bottomAxes = xAxes.filter(axis => axis.orientation === 'bottom');
  const leftAxes = yAxes.filter(axis => axis.orientation === 'left');
  const rightAxes = yAxes.filter(axis => axis.orientation === 'right');
  const topXAxisDepth =
    topAxes.length > 0
      ? axisTargetDepth(
          topAxes.reduce((sum, axis) => sum + numericAxisSize(axis.height), 0),
          offset.top,
        )
      : 0;
  const bottomXAxisDepth =
    bottomAxes.length > 0
      ? axisTargetDepth(
          bottomAxes.reduce((sum, axis) => sum + numericAxisSize(axis.height), 0),
          Math.max(height - plotBottom, 0),
        )
      : 0;
  const leftYAxisDepth =
    leftAxes.length > 0
      ? axisTargetDepth(
          leftAxes.reduce((sum, axis) => sum + numericAxisSize(axis.width), 0),
          offset.left,
        )
      : 0;
  const rightYAxisDepth =
    rightAxes.length > 0
      ? axisTargetDepth(
          rightAxes.reduce((sum, axis) => sum + numericAxisSize(axis.width), 0),
          Math.max(width - plotRight, 0),
        )
      : 0;
  const showX = xAxes.length > 0 && zoomEnabledForDimension(options, 'x');
  const showY = yAxes.length > 0 && zoomEnabledForDimension(options, 'y');

  return (
    <>
      {showX && topXAxisDepth > 0 && (
        <div
          data-recharts-zoom-axis-target="x"
          style={{
            ...base,
            left: offset.left,
            top: offset.top - topXAxisDepth,
            width: offset.width,
            height: topXAxisDepth,
          }}
        />
      )}
      {showX && bottomXAxisDepth > 0 && (
        <div
          data-recharts-zoom-axis-target="x"
          style={{ ...base, left: offset.left, top: plotBottom, width: offset.width, height: bottomXAxisDepth }}
        />
      )}
      {showY && leftYAxisDepth > 0 && (
        <div
          data-recharts-zoom-axis-target="y"
          style={{
            ...base,
            left: offset.left - leftYAxisDepth,
            top: offset.top,
            width: leftYAxisDepth,
            height: offset.height,
          }}
        />
      )}
      {showY && rightYAxisDepth > 0 && (
        <div
          data-recharts-zoom-axis-target="y"
          style={{ ...base, left: plotRight, top: offset.top, width: rightYAxisDepth, height: offset.height }}
        />
      )}
    </>
  );
}
