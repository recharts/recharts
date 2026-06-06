import { ZoomGestureInstaller } from './ZoomGestureApi';

const DOUBLE_TAP_MS = 300;
/** Vertical movement (px) after the second tap before it becomes a drag-zoom rather than a reset. */
const DOUBLE_TAP_MOVE_TOLERANCE = 8;
/** Zoom factor change per pixel of vertical drag in the double-tap-drag gesture. */
const DRAG_ZOOM_SENSITIVITY = 0.01;

type TouchPoint = { clientX: number; clientY: number };

function distance(a: TouchPoint, b: TouchPoint): number {
  return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
}

function midpoint(a: TouchPoint, b: TouchPoint): TouchPoint {
  return { clientX: (a.clientX + b.clientX) / 2, clientY: (a.clientY + b.clientY) / 2 };
}

/**
 * Touch gestures (mouse is handled by the pointer gesture, which ignores touch):
 * - two fingers: pinch to zoom + drag the midpoint to pan,
 * - double-tap: reset,
 * - double-tap then drag up/down without lifting: zoom in/out centred on the tap (Google-Maps style).
 *
 * A single tap is left untouched so the tooltip still works.
 */
export const installTouchGesture: ZoomGestureInstaller = api => {
  let mode: 'none' | 'pinch' | 'doubleTapPending' | 'doubleTapDrag' = 'none';
  let lastDist = 0;
  let lastMid: TouchPoint | null = null;
  let lastTapTime = 0;
  let anchor: { x: number; y: number } | null = null;
  let anchorClientY = 0;
  let lastDragY = 0;

  const zoomBoth = (factor: number, focusX: number, focusY: number) => {
    api.zoomBy('x', factor, focusX);
    api.zoomBy('y', factor, focusY);
  };

  const onTouchStart = (event: TouchEvent) => {
    if (!api.getOptions().touch) {
      return;
    }
    if (event.touches.length >= 2) {
      const a = event.touches[0];
      const b = event.touches[1];
      if (a != null && b != null) {
        mode = 'pinch';
        lastDist = distance(a, b);
        lastMid = midpoint(a, b);
        event.preventDefault();
      }
      return;
    }
    if (event.touches.length === 1) {
      const now = Date.now();
      const touch = event.touches[0];
      if (touch == null) {
        return;
      }
      if (now - lastTapTime < DOUBLE_TAP_MS) {
        // Second tap: a release resets, a drag zooms.
        mode = 'doubleTapPending';
        anchor = api.plotFractions(touch.clientX, touch.clientY);
        anchorClientY = touch.clientY;
        lastDragY = touch.clientY;
        lastTapTime = 0;
        event.preventDefault();
      } else {
        lastTapTime = now;
        mode = 'none';
      }
    }
  };

  const onTouchMove = (event: TouchEvent) => {
    if (!api.getOptions().touch) {
      return;
    }
    if (mode === 'pinch' && event.touches.length >= 2) {
      const a = event.touches[0];
      const b = event.touches[1];
      if (a == null || b == null) {
        return;
      }
      event.preventDefault();
      const dist = distance(a, b);
      const mid = midpoint(a, b);
      const fractions = api.plotFractions(mid.clientX, mid.clientY);
      if (fractions != null && lastDist > 0) {
        zoomBoth(dist / lastDist, fractions.x, fractions.y);
      }
      const offset = api.getOffset();
      if (offset != null && lastMid != null) {
        const dx = mid.clientX - lastMid.clientX;
        const dy = mid.clientY - lastMid.clientY;
        if (offset.width > 0) {
          api.panBy('x', -dx / offset.width);
        }
        if (offset.height > 0) {
          api.panBy('y', dy / offset.height);
        }
      }
      lastDist = dist;
      lastMid = mid;
    } else if ((mode === 'doubleTapPending' || mode === 'doubleTapDrag') && event.touches.length === 1) {
      const touch = event.touches[0];
      if (touch == null) {
        return;
      }
      if (mode === 'doubleTapPending' && Math.abs(touch.clientY - anchorClientY) < DOUBLE_TAP_MOVE_TOLERANCE) {
        return;
      }
      mode = 'doubleTapDrag';
      event.preventDefault();
      const dy = touch.clientY - lastDragY;
      lastDragY = touch.clientY;
      // Drag up (dy < 0) zooms in, drag down zooms out.
      const factor = 1 - dy * DRAG_ZOOM_SENSITIVITY;
      if (anchor != null && factor > 0) {
        zoomBoth(factor, anchor.x, anchor.y);
      }
    }
  };

  const onTouchEnd = (event: TouchEvent) => {
    if (mode === 'doubleTapPending' && api.getOptions().doubleClickReset) {
      // Released without dragging -> plain double-tap -> reset.
      api.reset();
    }
    if (event.touches.length === 0) {
      mode = 'none';
      lastMid = null;
      lastDist = 0;
      anchor = null;
    } else if (event.touches.length === 1 && mode === 'pinch') {
      mode = 'none';
      lastMid = null;
      lastDist = 0;
    }
  };

  api.element.addEventListener('touchstart', onTouchStart, { passive: false });
  api.element.addEventListener('touchmove', onTouchMove, { passive: false });
  api.element.addEventListener('touchend', onTouchEnd);
  return () => {
    api.element.removeEventListener('touchstart', onTouchStart);
    api.element.removeEventListener('touchmove', onTouchMove);
    api.element.removeEventListener('touchend', onTouchEnd);
  };
};
