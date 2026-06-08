import { ZoomGestureInstaller } from './ZoomGestureApi';
import { ZoomDimension } from '../../state/zoomSlice';

const DOUBLE_TAP_MS = 300;
/** Vertical movement (px) after the second tap before it becomes a drag-zoom rather than a reset. */
const DOUBLE_TAP_MOVE_TOLERANCE = 8;
/** Zoom factor change per pixel of vertical drag in the double-tap-drag gesture. */
const DRAG_ZOOM_SENSITIVITY = 0.01;
/** Finger-spread change (px) before pinch-zoom engages, so small two-finger moves stay pure pan. */
const ZOOM_START_THRESHOLD = 12;

type Pt = { clientX: number; clientY: number };

function distance(a: Pt, b: Pt): number {
  return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
}

function midpoint(a: Pt, b: Pt): Pt {
  return { clientX: (a.clientX + b.clientX) / 2, clientY: (a.clientY + b.clientY) / 2 };
}

type TouchRegion = 'plot' | 'xAxis' | 'yAxis' | 'outside';

/**
 * All touch gestures, using `event.touches` as the single source of truth (so a missed touchend can
 * never leave a phantom finger stuck):
 * - one finger on an axis (the label area outside the plot): pan that axis,
 * - one finger on the plot: left to the tooltip, with double-tap to reset and double-tap-then-drag to zoom,
 * - two fingers: pinch to zoom + pan; over an axis it zooms only that axis, over the plot both.
 *
 * Mouse / pen pan and wheel are handled by the pointer / axis / wheel gestures, which ignore touch.
 */
export const installTouchGesture: ZoomGestureInstaller = api => {
  let mode: 'none' | 'axisPan' | 'pinch' | 'doubleTapPending' | 'doubleTapDrag' = 'none';
  // single-finger axis pan
  let panAxis: ZoomDimension | null = null;
  let lastAxis: Pt | null = null;
  // double-tap / double-tap-drag (Google-Maps style)
  let lastTapTime = 0;
  let anchor: { x: number; y: number } | null = null;
  let anchorClientY = 0;
  let lastDragY = 0;
  // pinch
  let pinchAxis: ZoomDimension | 'both' = 'both';
  let initialDistance = 0;
  let zoomDistance = 0;
  let zooming = false;
  let lastMid: Pt | null = null;

  const regionAt = (clientX: number, clientY: number): TouchRegion => {
    const o = api.getOffset();
    if (o == null) {
      return 'outside';
    }
    const rect = api.element.getBoundingClientRect();
    const px = clientX - rect.left;
    const py = clientY - rect.top;
    const inX = px >= o.left && px <= o.left + o.width;
    const inY = py >= o.top && py <= o.top + o.height;
    // Axis regions sit outside the plot (the label area, covered by the stable touch overlays).
    // Keeping them out of the plot avoids fighting the scrollbar that lives at the plot edge.
    if (inX && inY) {
      return 'plot';
    }
    if (inX) {
      return 'xAxis';
    }
    if (inY) {
      return 'yAxis';
    }
    return 'outside';
  };

  const pinchAxisFor = (region: TouchRegion): ZoomDimension | 'both' => {
    if (region === 'xAxis') {
      return 'x';
    }
    if (region === 'yAxis') {
      return 'y';
    }
    return 'both';
  };

  const onScrollbar = (event: TouchEvent) =>
    (event.target as Element | null)?.closest?.('[data-recharts-zoom-scrollbar]') != null;

  const onTouchStart = (event: TouchEvent) => {
    if (!api.getOptions().touch || onScrollbar(event)) {
      return;
    }
    const { touches } = event;

    if (touches.length >= 2) {
      // Suppress the browser's native pinch-zoom and start a (region-aware) pinch.
      if (event.cancelable) {
        event.preventDefault();
      }
      const a = touches[0];
      const b = touches[1];
      if (a == null || b == null) {
        return;
      }
      const m = midpoint(a, b);
      pinchAxis = pinchAxisFor(regionAt(m.clientX, m.clientY));
      initialDistance = distance(a, b);
      zoomDistance = initialDistance;
      zooming = false;
      lastMid = m;
      mode = 'pinch';
      return;
    }

    const t = touches[0];
    if (t == null) {
      return;
    }
    const region = regionAt(t.clientX, t.clientY);
    if ((region === 'xAxis' || region === 'yAxis') && api.getOptions().pan) {
      mode = 'axisPan';
      panAxis = region === 'xAxis' ? 'x' : 'y';
      lastAxis = { clientX: t.clientX, clientY: t.clientY };
      if (event.cancelable) {
        event.preventDefault();
      }
      return;
    }

    // On the plot a single finger is left to the tooltip; detect double-tap (reset / drag-zoom).
    const now = Date.now();
    if (now - lastTapTime < DOUBLE_TAP_MS) {
      mode = 'doubleTapPending';
      anchor = api.plotFractions(t.clientX, t.clientY);
      anchorClientY = t.clientY;
      lastDragY = t.clientY;
      lastTapTime = 0;
      if (event.cancelable) {
        event.preventDefault();
      }
    } else {
      lastTapTime = now;
      mode = 'none';
    }
  };

  const onTouchMove = (event: TouchEvent) => {
    if (!api.getOptions().touch) {
      return;
    }
    const { touches } = event;

    if (mode === 'pinch' && touches.length >= 2) {
      if (event.cancelable) {
        event.preventDefault();
      }
      const a = touches[0];
      const b = touches[1];
      if (a == null || b == null) {
        return;
      }
      const d = distance(a, b);
      const m = midpoint(a, b);

      if (!zooming && Math.abs(d - initialDistance) > ZOOM_START_THRESHOLD) {
        zooming = true;
        // Start zooming from the edge of the dead zone so there is no jump when it engages.
        zoomDistance = initialDistance + Math.sign(d - initialDistance) * ZOOM_START_THRESHOLD;
      }
      if (zooming && zoomDistance > 0 && d > 0) {
        const fractions = api.plotFractions(m.clientX, m.clientY);
        if (fractions != null) {
          const factor = d / zoomDistance;
          if (pinchAxis === 'both' || pinchAxis === 'x') {
            api.zoomBy('x', factor, fractions.x);
          }
          if (pinchAxis === 'both' || pinchAxis === 'y') {
            api.zoomBy('y', factor, fractions.y);
          }
        }
        zoomDistance = d;
      }

      const offset = api.getOffset();
      if (offset != null && lastMid != null) {
        if ((pinchAxis === 'both' || pinchAxis === 'x') && offset.width > 0) {
          api.panBy('x', -(m.clientX - lastMid.clientX) / offset.width);
        }
        if ((pinchAxis === 'both' || pinchAxis === 'y') && offset.height > 0) {
          api.panBy('y', (m.clientY - lastMid.clientY) / offset.height);
        }
      }
      lastMid = m;
      return;
    }

    if (mode === 'axisPan' && touches.length === 1 && panAxis != null && lastAxis != null) {
      const t = touches[0];
      if (t == null) {
        return;
      }
      if (event.cancelable) {
        event.preventDefault();
      }
      const offset = api.getOffset();
      if (offset != null) {
        const dx = t.clientX - lastAxis.clientX;
        const dy = t.clientY - lastAxis.clientY;
        if (panAxis === 'x' && offset.width > 0) {
          api.panBy('x', -dx / offset.width);
        } else if (panAxis === 'y' && offset.height > 0) {
          api.panBy('y', dy / offset.height);
        }
      }
      lastAxis = { clientX: t.clientX, clientY: t.clientY };
      return;
    }

    if ((mode === 'doubleTapPending' || mode === 'doubleTapDrag') && touches.length === 1) {
      const t = touches[0];
      if (t == null) {
        return;
      }
      if (mode === 'doubleTapPending' && Math.abs(t.clientY - anchorClientY) < DOUBLE_TAP_MOVE_TOLERANCE) {
        return;
      }
      mode = 'doubleTapDrag';
      if (event.cancelable) {
        event.preventDefault();
      }
      const dy = t.clientY - lastDragY;
      lastDragY = t.clientY;
      // Drag up (dy < 0) zooms in, drag down zooms out.
      const factor = 1 - dy * DRAG_ZOOM_SENSITIVITY;
      if (anchor != null && factor > 0) {
        api.zoomBy('x', factor, anchor.x);
        api.zoomBy('y', factor, anchor.y);
      }
    }
  };

  const onTouchEnd = (event: TouchEvent) => {
    if (mode === 'doubleTapPending' && api.getOptions().doubleClickReset) {
      // Released without dragging -> plain double-tap -> reset.
      api.reset();
    }
    // event.touches is authoritative: reconcile state with however many fingers actually remain.
    if (event.touches.length === 0) {
      mode = 'none';
      panAxis = null;
      lastAxis = null;
      anchor = null;
      lastMid = null;
      zooming = false;
      initialDistance = 0;
      zoomDistance = 0;
    } else if (event.touches.length < 2 && mode === 'pinch') {
      mode = 'none';
      lastMid = null;
      zooming = false;
    }
  };

  api.element.addEventListener('touchstart', onTouchStart, { passive: false });
  api.element.addEventListener('touchmove', onTouchMove, { passive: false });
  api.element.addEventListener('touchend', onTouchEnd);
  api.element.addEventListener('touchcancel', onTouchEnd);
  return () => {
    api.element.removeEventListener('touchstart', onTouchStart);
    api.element.removeEventListener('touchmove', onTouchMove);
    api.element.removeEventListener('touchend', onTouchEnd);
    api.element.removeEventListener('touchcancel', onTouchEnd);
  };
};
