import * as React from 'react';
import { useAppSelector } from '../state/hooks';
import { selectChartHeight } from '../state/selectors/containerSelectors';
import { selectChartOffsetInternal } from '../state/selectors/selectChartOffsetInternal';
import { selectAllXAxes, selectAllYAxes } from '../state/selectors/selectAllAxes';
import { useIsPanorama } from '../context/PanoramaContext';
import { ResolvedZoomOptions, zoomEnabledForDimension } from '../util/zoom/ZoomOptions';

/** How far below the plot the x-axis target reaches (covers the labels, but not a legend further down). */
const X_AXIS_TARGET_DEPTH = 40;

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
  const height = useAppSelector(selectChartHeight);
  const hasXAxis = useAppSelector(state => selectAllXAxes(state).length > 0);
  const hasYAxis = useAppSelector(state => selectAllYAxes(state).length > 0);
  const isPanorama = useIsPanorama();

  const coarsePointer =
    typeof window !== 'undefined' && typeof window.matchMedia === 'function'
      ? window.matchMedia('(pointer: coarse)').matches
      : false;

  if (!coarsePointer || !options.axisInteractions || isPanorama || offset == null || height == null) {
    return null;
  }

  const base: React.CSSProperties = { position: 'absolute', background: 'transparent', touchAction: 'none' };
  const plotBottom = offset.top + offset.height;
  const xDepth = Math.min(Math.max(height - plotBottom, 0), X_AXIS_TARGET_DEPTH);
  const showX = hasXAxis && zoomEnabledForDimension(options, 'x') && xDepth > 0;
  const showY = hasYAxis && zoomEnabledForDimension(options, 'y') && offset.left > 0;

  return (
    <>
      {showX && (
        <div
          data-recharts-zoom-axis-target="x"
          style={{ ...base, left: offset.left, top: plotBottom, width: offset.width, height: xDepth }}
        />
      )}
      {showY && (
        <div
          data-recharts-zoom-axis-target="y"
          style={{ ...base, left: 0, top: offset.top, width: offset.left, height: offset.height }}
        />
      )}
    </>
  );
}
