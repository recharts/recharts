import * as React from 'react';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { selectZoom } from '../state/selectors/zoomSelectors';
import { selectChartOffsetInternal } from '../state/selectors/selectChartOffsetInternal';
import { setAxisViewport, ZoomDimension } from '../state/zoomSlice';
import { useIsPanorama } from '../context/PanoramaContext';
import { AxisViewport, getViewportWidth, isFullViewport } from '../util/zoom/viewport';
import { ResolvedZoomOptions, zoomEnabledForDimension } from '../util/zoom/ZoomOptions';

/** Marker so the pointer gesture knows not to start a plot pan when a scrollbar is grabbed. */
export const ZOOM_SCROLLBAR_ATTR = 'data-recharts-zoom-scrollbar';

export const SCROLLBAR_THICKNESS = 10;
export const SCROLLBAR_GAP = 2;
/** Touch keeps the same slim bar but gets a larger, transparent drag/hit area around it. */
const SCROLLBAR_TOUCH_HIT = 24;
const GAP = SCROLLBAR_GAP;

type AxisScrollbarProps = {
  dimension: ZoomDimension;
  viewport: AxisViewport;
  plot: { left: number; top: number; width: number; height: number };
};

/**
 * One on-canvas scrollbar (horizontal for x, vertical for y). The whole band is a drag handle: grab
 * the thumb, or press the track to jump the thumb under the pointer and drag from there. Rendered as
 * an absolutely-positioned overlay inside the chart wrapper.
 */
function AxisScrollbar({ dimension, viewport, plot }: AxisScrollbarProps) {
  const dispatch = useAppDispatch();
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const horizontal = dimension === 'x';
  const trackLength = horizontal ? plot.width : plot.height;
  const windowRatio = getViewportWidth(viewport);
  const coarsePointer =
    typeof window !== 'undefined' && typeof window.matchMedia === 'function'
      ? window.matchMedia('(pointer: coarse)').matches
      : false;
  // The visible bar stays slim; on touch the draggable hit area around it is enlarged.
  const barThickness = SCROLLBAR_THICKNESS;
  const hitThickness = coarsePointer ? SCROLLBAR_TOUCH_HIT : SCROLLBAR_THICKNESS;
  const barInset = hitThickness - barThickness;
  const thumbLength = Math.max(windowRatio * trackLength, coarsePointer ? 24 : 16);
  // Offset of the thumb from the start of the track. The y domain grows upward, so it is flipped.
  const thumbOffset = (horizontal ? viewport.startRatio : 1 - viewport.endRatio) * trackLength;

  const apply = (next: AxisViewport) => dispatch(setAxisViewport({ dimension, viewport: next }));

  // The whole band is a drag handle (like a native scrollbar): grab the thumb where you touch it, or,
  // when you press the empty track, jump the thumb under the pointer and drag from there. Touch and
  // mouse are handled with their own events (pointer events proved unreliable for touch on mobile).
  const beginDrag = (clientX: number, clientY: number, trackRect: DOMRect) => {
    setActive(true);
    const trackStart = horizontal ? trackRect.left : trackRect.top;
    const pressed = (horizontal ? clientX : clientY) - trackStart;
    const onThumb = pressed >= thumbOffset && pressed <= thumbOffset + thumbLength;
    const grab = onThumb ? pressed - thumbOffset : thumbLength / 2;
    const maxThumbStart = Math.max(trackLength - thumbLength, 1);
    const maxStartRatio = Math.max(1 - windowRatio, 0);
    const moveTo = (cx: number, cy: number) => {
      const local = (horizontal ? cx : cy) - trackStart;
      const desired = Math.max(0, Math.min(maxThumbStart, local - grab));
      const ratio = desired / maxThumbStart;
      // The y track is flipped: the top of the track is the end of the domain.
      const startRatio = (horizontal ? ratio : 1 - ratio) * maxStartRatio;
      apply({ startRatio, endRatio: startRatio + windowRatio });
    };
    moveTo(clientX, clientY);
    return moveTo;
  };

  const onTouchStart = (event: React.TouchEvent) => {
    const t = event.touches[0];
    if (t == null) {
      return;
    }
    event.preventDefault();
    const moveTo = beginDrag(t.clientX, t.clientY, event.currentTarget.getBoundingClientRect());
    const onMove = (e: TouchEvent) => {
      const m = e.touches[0];
      if (m != null) {
        if (e.cancelable) {
          e.preventDefault();
        }
        moveTo(m.clientX, m.clientY);
      }
    };
    const onEnd = () => {
      setActive(false);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onEnd);
      window.removeEventListener('touchcancel', onEnd);
    };
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('touchend', onEnd);
    window.addEventListener('touchcancel', onEnd);
  };

  const onMouseDown = (event: React.MouseEvent) => {
    event.preventDefault();
    const moveTo = beginDrag(event.clientX, event.clientY, event.currentTarget.getBoundingClientRect());
    const onMove = (e: MouseEvent) => moveTo(e.clientX, e.clientY);
    const onUp = () => {
      setActive(false);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };

  const trackStyle: React.CSSProperties = horizontal
    ? {
        left: plot.left,
        top: plot.top + plot.height - hitThickness - GAP,
        width: trackLength,
        height: hitThickness,
      }
    : {
        left: plot.left + plot.width - hitThickness - GAP,
        top: plot.top,
        width: hitThickness,
        height: trackLength,
      };

  // The slim visible bar sits at the outer edge of the (possibly larger) hit area.
  const thumbStyle: React.CSSProperties = horizontal
    ? { left: thumbOffset, top: barInset, width: thumbLength, height: barThickness }
    : { left: barInset, top: thumbOffset, width: barThickness, height: thumbLength };

  let thumbBackground = 'rgba(0,0,0,0.35)';
  if (active) {
    thumbBackground = 'rgba(0,0,0,0.6)';
  } else if (!coarsePointer && hover) {
    thumbBackground = 'rgba(0,0,0,0.55)';
  }

  return (
    // A supplementary visual control; the accessible path for panning is the keyboard.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      {...{ [ZOOM_SCROLLBAR_ATTR]: 'track' }}
      className={`recharts-zoom-scrollbar recharts-zoom-scrollbar-${dimension}`}
      onTouchStart={onTouchStart}
      onMouseDown={onMouseDown}
      style={{ position: 'absolute', touchAction: 'none', ...trackStyle }}
    >
      <div
        {...{ [ZOOM_SCROLLBAR_ATTR]: 'thumb' }}
        className="recharts-zoom-scrollbar-thumb"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          position: 'absolute',
          borderRadius: barThickness / 2,
          background: thumbBackground,
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
