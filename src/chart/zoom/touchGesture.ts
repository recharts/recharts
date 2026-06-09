import { ZoomGestureInstaller } from './ZoomGestureApi';
import { ZoomDimension } from '../../state/zoomSlice';
import { ZoomViewport, viewportToWindow, zoomEnabledForDimension } from '../../util/zoom/ZoomOptions';

const DOUBLE_TAP_MS = 300;
/** Vertical movement (px) after the second tap before it becomes a drag-zoom rather than a reset. */
const DOUBLE_TAP_MOVE_TOLERANCE = 8;
/** Zoom factor change per pixel of vertical drag in the double-tap-drag gesture. */
const DRAG_ZOOM_SENSITIVITY = 0.01;

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
  let anchorPixels: { x: number; y: number } | null = null;
  let lastDragClient: Pt | null = null;
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

  const buildSelectionRect = (currentPixels: { x: number; y: number }) => {
    const offset = api.getOffset();
    const options = api.getOptions();
    const start = anchorPixels;
    if (start == null) {
      return null;
    }
    let x = Math.min(start.x, currentPixels.x);
    let y = Math.min(start.y, currentPixels.y);
    let width = Math.abs(currentPixels.x - start.x);
    let height = Math.abs(currentPixels.y - start.y);
    if (offset != null) {
      if (!zoomEnabledForDimension(options, 'x')) {
        x = offset.left;
        width = offset.width;
      }
      if (!zoomEnabledForDimension(options, 'y')) {
        y = offset.top;
        height = offset.height;
      }
    }
    return { x, y, width, height };
  };

  const emitTouchSelection = (endClient: Pt) => {
    const { onTouchSelectRegion } = api.getOptions();
    if (anchor == null || onTouchSelectRegion == null) {
      return;
    }
    const to = api.plotFractions(endClient.clientX, endClient.clientY);
    if (to == null) {
      return;
    }
    const selection: ZoomViewport = {};
    const vx = Math.abs(to.x - anchor.x) > 0.01 ? api.previewSelection('x', anchor.x, to.x) : null;
    const vy = Math.abs(to.y - anchor.y) > 0.01 ? api.previewSelection('y', anchor.y, to.y) : null;
    if (vx != null) {
      selection.x = viewportToWindow(vx);
    }
    if (vy != null) {
      selection.y = viewportToWindow(vy);
    }
    if (selection.x != null || selection.y != null) {
      onTouchSelectRegion(selection);
    }
  };

  const zoomIntoTouchSelection = (endClient: Pt) => {
    if (anchor == null) {
      return;
    }
    const to = api.plotFractions(endClient.clientX, endClient.clientY);
    if (to == null) {
      return;
    }
    if (Math.abs(to.x - anchor.x) > 0.01) {
      api.selectInto('x', anchor.x, to.x);
    }
    if (Math.abs(to.y - anchor.y) > 0.01) {
      api.selectInto('y', anchor.y, to.y);
    }
  };

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
      anchorPixels = api.plotPixels(t.clientX, t.clientY);
      lastDragClient = { clientX: t.clientX, clientY: t.clientY };
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

      const threshold = api.getOptions().pinchThreshold;
      if (!zooming && Math.abs(d - initialDistance) > threshold) {
        zooming = true;
        // Start zooming from the edge of the dead zone so there is no jump when it engages.
        zoomDistance = initialDistance + Math.sign(d - initialDistance) * threshold;
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
        api.refreshPointer(m.clientX, m.clientY);
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
          api.refreshActivePointer();
        } else if (panAxis === 'y' && offset.height > 0) {
          api.panBy('y', dy / offset.height);
          api.refreshActivePointer();
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
      lastDragClient = { clientX: t.clientX, clientY: t.clientY };
      if (
        api.getOptions().touchDoubleTapDrag === 'selectCallback' ||
        api.getOptions().touchDoubleTapDrag === 'selectZoom'
      ) {
        const pixels = api.plotPixels(t.clientX, t.clientY);
        const rect = pixels == null ? null : buildSelectionRect(pixels);
        api.setSelection(rect);
        return;
      }
      const dy = t.clientY - lastDragY;
      lastDragY = t.clientY;
      // Drag up (dy < 0) zooms in, drag down zooms out.
      const factor = 1 - dy * DRAG_ZOOM_SENSITIVITY;
      if (anchor != null && factor > 0) {
        api.zoomBy('x', factor, anchor.x);
        api.zoomBy('y', factor, anchor.y);
        api.refreshPointer(t.clientX, t.clientY);
      }
    }
  };

  const onTouchEnd = (event: TouchEvent) => {
    if (mode === 'doubleTapDrag' && lastDragClient != null) {
      if (api.getOptions().touchDoubleTapDrag === 'selectCallback') {
        emitTouchSelection(lastDragClient);
      } else if (api.getOptions().touchDoubleTapDrag === 'selectZoom') {
        zoomIntoTouchSelection(lastDragClient);
        emitTouchSelection(lastDragClient);
        api.refreshPointer(lastDragClient.clientX, lastDragClient.clientY);
      }
      api.setSelection(null);
    }
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
      anchorPixels = null;
      lastDragClient = null;
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
