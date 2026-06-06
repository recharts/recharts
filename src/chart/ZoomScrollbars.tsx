import * as React from 'react';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { selectZoom } from '../state/selectors/zoomSelectors';
import { selectChartOffsetInternal } from '../state/selectors/selectChartOffsetInternal';
import { setAxisViewport, ZoomDimension } from '../state/zoomSlice';
import { useIsPanorama } from '../context/PanoramaContext';
import { AxisViewport, getViewportWidth, isFullViewport, panViewport } from '../util/zoom/viewport';
import { ResolvedZoomOptions, zoomEnabledForDimension } from '../util/zoom/ZoomOptions';

/** Marker so the pointer gesture knows not to start a plot pan when a scrollbar is grabbed. */
export const ZOOM_SCROLLBAR_ATTR = 'data-recharts-zoom-scrollbar';

const THICKNESS = 10;
const GAP = 2;

type AxisScrollbarProps = {
  dimension: ZoomDimension;
  viewport: AxisViewport;
  plot: { left: number; top: number; width: number; height: number };
};

/**
 * One on-canvas scrollbar (horizontal for x, vertical for y). Drag the thumb to pan; click the
 * track to page. Rendered as an absolutely-positioned overlay inside the chart wrapper.
 */
function AxisScrollbar({ dimension, viewport, plot }: AxisScrollbarProps) {
  const dispatch = useAppDispatch();
  const [hover, setHover] = useState(false);

  const horizontal = dimension === 'x';
  const trackLength = horizontal ? plot.width : plot.height;
  const windowRatio = getViewportWidth(viewport);
  const thumbLength = Math.max(windowRatio * trackLength, 16);
  // Offset of the thumb from the start of the track. The y domain grows upward, so it is flipped.
  const thumbOffset = (horizontal ? viewport.startRatio : 1 - viewport.endRatio) * trackLength;

  const apply = (next: AxisViewport) => dispatch(setAxisViewport({ dimension, viewport: next }));

  const onThumbPointerDown = (event: React.PointerEvent) => {
    event.stopPropagation();
    event.preventDefault();
    const startPos = horizontal ? event.clientX : event.clientY;
    const startViewport = viewport;
    const sign = horizontal ? 1 : -1;
    const onMove = (e: PointerEvent) => {
      const pos = horizontal ? e.clientX : e.clientY;
      const ratio = (sign * (pos - startPos)) / trackLength;
      if (!Number.isFinite(ratio) || trackLength <= 0) {
        return;
      }
      apply(panViewport(startViewport, ratio));
    };
    const onUp = () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
  };

  const onTrackPointerDown = (event: React.PointerEvent) => {
    // Page towards the click by one window width.
    const offset = horizontal ? event.nativeEvent.offsetX : event.nativeEvent.offsetY;
    const screenRatio = offset / trackLength;
    const domainClick = horizontal ? screenRatio : 1 - screenRatio;
    if (domainClick < viewport.startRatio) {
      apply(panViewport(viewport, -windowRatio));
    } else if (domainClick > viewport.endRatio) {
      apply(panViewport(viewport, windowRatio));
    }
  };

  const trackStyle: React.CSSProperties = horizontal
    ? {
        left: plot.left,
        top: plot.top + plot.height - THICKNESS - GAP,
        width: trackLength,
        height: THICKNESS,
      }
    : {
        left: plot.left + plot.width - THICKNESS - GAP,
        top: plot.top,
        width: THICKNESS,
        height: trackLength,
      };

  const thumbStyle: React.CSSProperties = horizontal
    ? { left: thumbOffset, top: 0, width: thumbLength, height: THICKNESS }
    : { left: 0, top: thumbOffset, width: THICKNESS, height: thumbLength };

  return (
    <div
      {...{ [ZOOM_SCROLLBAR_ATTR]: 'track' }}
      className={`recharts-zoom-scrollbar recharts-zoom-scrollbar-${dimension}`}
      onPointerDown={onTrackPointerDown}
      style={{ position: 'absolute', borderRadius: THICKNESS / 2, ...trackStyle }}
    >
      <div
        {...{ [ZOOM_SCROLLBAR_ATTR]: 'thumb' }}
        className="recharts-zoom-scrollbar-thumb"
        onPointerDown={onThumbPointerDown}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          position: 'absolute',
          borderRadius: THICKNESS / 2,
          background: hover ? 'rgba(0,0,0,0.55)' : 'rgba(0,0,0,0.35)',
          cursor: horizontal ? 'ew-resize' : 'ns-resize',
          touchAction: 'none',
          ...thumbStyle,
        }}
      />
    </div>
  );
}

/**
 * Renders the on-canvas scrollbars for the zoomed axes. Mounted on the main chart only.
 */
export function ZoomScrollbars({ options }: { options: ResolvedZoomOptions }) {
  const zoom = useAppSelector(selectZoom);
  const offset = useAppSelector(selectChartOffsetInternal);
  const isPanorama = useIsPanorama();

  if (!options.scrollbars || isPanorama || zoom == null || offset == null) {
    return null;
  }

  const plot = { left: offset.left, top: offset.top, width: offset.width, height: offset.height };
  const showX = zoomEnabledForDimension(options, 'x') && !isFullViewport(zoom.x);
  const showY = zoomEnabledForDimension(options, 'y') && !isFullViewport(zoom.y);

  if (!showX && !showY) {
    return null;
  }

  return (
    <>
      {showX && <AxisScrollbar dimension="x" viewport={zoom.x} plot={plot} />}
      {showY && <AxisScrollbar dimension="y" viewport={zoom.y} plot={plot} />}
    </>
  );
}
