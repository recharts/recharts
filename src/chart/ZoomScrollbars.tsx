import * as React from 'react';
import { useContext, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { selectZoom } from '../state/selectors/zoomSelectors';
import { selectChartOffsetInternal } from '../state/selectors/selectChartOffsetInternal';
import { selectAxisRangeWithReverse } from '../state/selectors/axisSelectors';
import { selectActiveTooltipCoordinate } from '../state/selectors/tooltipSelectors';
import { mouseMoveAction } from '../state/mouseEventsMiddleware';
import { setAxisViewport, ZoomDimension } from '../state/zoomSlice';
import { useIsPanorama } from '../context/PanoramaContext';
import { TooltipPortalContext } from '../context/tooltipPortalContext';
import { AxisViewport, getViewportWidth, isFullViewport, isRangeFlipped } from '../util/zoom/viewport';
import { ResolvedZoomOptions, zoomEnabledForDimension } from '../util/zoom/ZoomOptions';

/** Marker so the pointer gesture knows not to start a plot pan when a scrollbar is grabbed. */
export const ZOOM_SCROLLBAR_ATTR = 'data-recharts-zoom-scrollbar';

/**
 * Look of the on-canvas scrollbars. Style with `className`/`style` (track) and
 * `thumbClassName`/`thumbStyle` (thumb), like other Recharts HTML overlays. Default colors are inline
 * and merged *before* your `*Style` (so yours win); the class names are stable for plain CSS / Tailwind.
 */
export type ScrollbarStyle = {
  /** Visible bar thickness in px (the touch hit area is enlarged automatically). @defaultValue 10 */
  thickness?: number;
  /** Class added to the scrollbar track (the band). */
  className?: string;
  /** Inline style merged onto the track. */
  style?: React.CSSProperties;
  /** Class added to the draggable thumb. */
  thumbClassName?: string;
  /** Inline style merged onto the thumb. */
  thumbStyle?: React.CSSProperties;
};

export const SCROLLBAR_THICKNESS = 10;
export const SCROLLBAR_GAP = 2;
/** Touch keeps the same slim bar but gets a larger, transparent drag/hit area around it. */
const SCROLLBAR_TOUCH_HIT = 24;
const GAP = SCROLLBAR_GAP;

type AxisScrollbarProps = {
  dimension: ZoomDimension;
  viewport: AxisViewport;
  plot: { left: number; top: number; width: number; height: number };
  scrollbarStyle: ScrollbarStyle;
  refreshActivePointer: () => void;
  /** Whether this axis' domain grows toward the low-pixel edge (e.g. a horizontal-layout value y). */
  flipped: boolean;
};

/**
 * One on-canvas scrollbar (horizontal for x, vertical for y). The whole band is a drag handle: grab
 * the thumb, or press the track to jump the thumb under the pointer and drag from there. Rendered as
 * an absolutely-positioned overlay inside the chart wrapper.
 */
function AxisScrollbar({
  dimension,
  viewport,
  plot,
  scrollbarStyle,
  refreshActivePointer,
  flipped,
}: AxisScrollbarProps) {
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
  // The visible bar keeps its (customizable) thickness; on touch the draggable hit area is enlarged.
  const barThickness = scrollbarStyle.thickness ?? SCROLLBAR_THICKNESS;
  const hitThickness = coarsePointer ? Math.max(SCROLLBAR_TOUCH_HIT, barThickness) : barThickness;
  const barInset = hitThickness - barThickness;
  const radius = barThickness / 2;
  const thumbLength = Math.max(windowRatio * trackLength, coarsePointer ? 24 : 16);
  // Offset of the thumb from the start of the track. The y domain grows upward, so it is flipped.
  const thumbOffset = (flipped ? 1 - viewport.endRatio : viewport.startRatio) * trackLength;

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
      const startRatio = (flipped ? 1 - ratio : ratio) * maxStartRatio;
      apply({ startRatio, endRatio: startRatio + windowRatio });
      refreshActivePointer();
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

  let thumbBackground = 'rgba(0, 0, 0, 0.35)';
  if (active) {
    thumbBackground = 'rgba(0, 0, 0, 0.6)';
  } else if (!coarsePointer && hover) {
    thumbBackground = 'rgba(0, 0, 0, 0.55)';
  }

  return (
    // A supplementary visual control; the accessible path for panning is the keyboard.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      {...{ [ZOOM_SCROLLBAR_ATTR]: 'track' }}
      className={`recharts-zoom-scrollbar recharts-zoom-scrollbar-${dimension}${
        scrollbarStyle.className ? ` ${scrollbarStyle.className}` : ''
      }`}
      onTouchStart={onTouchStart}
      onMouseDown={onMouseDown}
      style={{
        position: 'absolute',
        touchAction: 'none',
        borderRadius: radius,
        ...trackStyle,
        ...scrollbarStyle.style,
      }}
    >
      <div
        {...{ [ZOOM_SCROLLBAR_ATTR]: 'thumb' }}
        className={`recharts-zoom-scrollbar-thumb${
          scrollbarStyle.thumbClassName ? ` ${scrollbarStyle.thumbClassName}` : ''
        }`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          position: 'absolute',
          borderRadius: radius,
          background: thumbBackground,
          cursor: horizontal ? 'ew-resize' : 'ns-resize',
          touchAction: 'none',
          ...thumbStyle,
          ...scrollbarStyle.thumbStyle,
        }}
      />
    </div>
  );
}

/**
 * Renders the on-canvas scrollbars for the zoomed axes. Mounted on the main chart only.
 */
export function ZoomScrollbars({
  options,
  scrollbarStyle = {},
}: {
  options: ResolvedZoomOptions;
  scrollbarStyle?: ScrollbarStyle;
}) {
  const dispatch = useAppDispatch();
  const element = useContext(TooltipPortalContext);
  const zoom = useAppSelector(selectZoom);
  const offset = useAppSelector(selectChartOffsetInternal);
  const activeTooltipCoordinate = useAppSelector(selectActiveTooltipCoordinate);
  const xFlipped =
    useAppSelector(state => isRangeFlipped(selectAxisRangeWithReverse(state, 'xAxis', 0, false))) ?? false;
  const yFlipped =
    useAppSelector(state => isRangeFlipped(selectAxisRangeWithReverse(state, 'yAxis', 0, false))) ?? false;
  const isPanorama = useIsPanorama();

  if (!options.scrollbars || isPanorama || zoom == null || offset == null || element == null) {
    return null;
  }

  const plot = { left: offset.left, top: offset.top, width: offset.width, height: offset.height };
  const showX = zoomEnabledForDimension(options, 'x') && !isFullViewport(zoom.x);
  const showY = zoomEnabledForDimension(options, 'y') && !isFullViewport(zoom.y);
  // The scrollbar pans via setAxisViewport directly (no api / pointer event), so nudge the cursor to
  // follow its data point - mirroring api.refreshActivePointer used by the axis / touch gestures.
  const refreshActivePointer = () => {
    if (activeTooltipCoordinate == null) {
      return;
    }
    const rect = element.getBoundingClientRect();
    dispatch(
      mouseMoveAction({
        clientX: rect.left + activeTooltipCoordinate.x,
        clientY: rect.top + activeTooltipCoordinate.y,
        currentTarget: element,
      }),
    );
  };

  if (!showX && !showY) {
    return null;
  }

  return (
    <>
      {showX && (
        <AxisScrollbar
          dimension="x"
          viewport={zoom.x}
          plot={plot}
          scrollbarStyle={scrollbarStyle}
          refreshActivePointer={refreshActivePointer}
          flipped={xFlipped}
        />
      )}
      {showY && (
        <AxisScrollbar
          dimension="y"
          viewport={zoom.y}
          plot={plot}
          scrollbarStyle={scrollbarStyle}
          refreshActivePointer={refreshActivePointer}
          flipped={yFlipped}
        />
      )}
    </>
  );
}
