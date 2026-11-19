import { isInteractiveZoomTarget, ZoomGestureInstaller, SelectionRect } from './ZoomGestureApi';
import { ZoomViewport, viewportToWindow, zoomEnabledForDimension } from '../../util/zoom/ZoomOptions';

/** Minimum drag length (as a fraction of the visible window) before a drag-to-zoom selection counts. */
const MIN_SELECT_FRACTION = 0.01;

/**
 * Pointer gestures: drag to pan, or (with a modifier, or when panning is off) drag-to-zoom a region.
 * Pan/move/up are tracked on `window` so a drag keeps working when the pointer leaves the chart.
 */
export const installPointerGesture: ZoomGestureInstaller = api => {
  let mode: 'pan' | 'select' | null = null;
  // The window listeners see every pointer, so a second pointer (touch or pen on a hybrid device)
  // must not drive or commit the gesture the first one started.
  let activePointerId: number | null = null;
  let lastX = 0;
  let lastY = 0;
  let startClientX = 0;
  let startClientY = 0;
  let startPixels: { x: number; y: number } | null = null;

  const buildSelectionRect = (currentPixels: { x: number; y: number }): SelectionRect | null => {
    const offset = api.getOffset();
    const options = api.getOptions();
    const start = startPixels;
    if (start == null) {
      return null;
    }
    let x = Math.min(start.x, currentPixels.x);
    let y = Math.min(start.y, currentPixels.y);
    let width = Math.abs(currentPixels.x - start.x);
    let height = Math.abs(currentPixels.y - start.y);
    // An axis-constrained selection spans the full extent of the other axis.
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

  const onPointerDown = (event: PointerEvent) => {
    // The pointer that started the gesture stays authoritative until it ends, so a second one cannot
    // take the gesture over and strand the first pointer's pointerup behind the active-id guard.
    if (activePointerId != null) {
      return;
    }
    if (event.button !== 0 || isInteractiveZoomTarget(event.target)) {
      return;
    }
    // Touch is handled by the dedicated touch gesture (pinch, two-finger pan, double-tap).
    if (event.pointerType === 'touch') {
      return;
    }
    // Dragging on an axis band is handled by the axis gesture (pans only that axis).
    if (api.pointerRegion(event.clientX, event.clientY, event.target) !== 'plot') {
      return;
    }
    const options = api.getOptions();
    let wantsSelect: boolean;
    if (options.pointerMode === 'pan') {
      // Plain drag pans; a Shift drag is left for a coexisting select component.
      if (event.shiftKey) {
        return;
      }
      wantsSelect = false;
    } else if (options.pointerMode === 'select') {
      // Plain drag selects.
      wantsSelect = true;
    } else if (options.pointerMode === 'selectShift') {
      // Shift + drag selects, so it can coexist with a plain-drag pan component.
      if (!event.shiftKey) {
        return;
      }
      wantsSelect = true;
    } else {
      wantsSelect = options.dragToZoom && (event.shiftKey || !options.pan);
    }
    if (wantsSelect) {
      const pixels = api.plotPixels(event.clientX, event.clientY);
      if (pixels == null) {
        return;
      }
      mode = 'select';
      activePointerId = event.pointerId;
      startClientX = event.clientX;
      startClientY = event.clientY;
      startPixels = pixels;
      api.setSelection(buildSelectionRect(pixels));
    } else if (options.pan) {
      mode = 'pan';
      activePointerId = event.pointerId;
      lastX = event.clientX;
      lastY = event.clientY;
    }
  };

  const onPointerMove = (event: PointerEvent) => {
    if (event.pointerId !== activePointerId) {
      return;
    }
    if (mode === 'pan') {
      const dx = event.clientX - lastX;
      const dy = event.clientY - lastY;
      lastX = event.clientX;
      lastY = event.clientY;
      api.panByPixels('x', dx);
      api.panByPixels('y', dy);
      api.refreshPointer(event.clientX, event.clientY);
    } else if (mode === 'select' && startPixels != null) {
      const pixels = api.plotPixels(event.clientX, event.clientY);
      if (pixels != null) {
        api.setSelection(buildSelectionRect(pixels));
      }
    }
  };

  const onPointerUp = (event: PointerEvent) => {
    if (event.pointerId !== activePointerId) {
      return;
    }
    if (mode === 'select' && startPixels != null) {
      const from = api.plotFractions(startClientX, startClientY);
      const to = api.plotFractions(event.clientX, event.clientY);
      if (from != null && to != null) {
        const draggedX = Math.abs(to.x - from.x) > MIN_SELECT_FRACTION;
        const draggedY = Math.abs(to.y - from.y) > MIN_SELECT_FRACTION;
        const options = api.getOptions();
        const { onSelectRegion } = options;
        if (onSelectRegion != null) {
          // Drag-to-select: emit the selected window instead of zooming into it.
          const selection: ZoomViewport = {};
          const vx = draggedX && zoomEnabledForDimension(options, 'x') ? api.previewSelection('x', from.x, to.x) : null;
          const vy = draggedY && zoomEnabledForDimension(options, 'y') ? api.previewSelection('y', from.y, to.y) : null;
          if (vx != null) {
            selection.x = viewportToWindow(vx);
          }
          if (vy != null) {
            selection.y = viewportToWindow(vy);
          }
          if (selection.x != null || selection.y != null) {
            onSelectRegion(selection);
          }
        } else {
          // Only zoom a dimension that was actually dragged, so a horizontal selection in xy mode
          // doesn't collapse the y axis to maximum zoom.
          if (draggedX) {
            api.selectInto('x', from.x, to.x);
          }
          if (draggedY) {
            api.selectInto('y', from.y, to.y);
          }
        }
      }
      api.setSelection(null);
      api.refreshPointer(event.clientX, event.clientY);
    }
    mode = null;
    startPixels = null;
    activePointerId = null;
  };

  // A canceled drag (browser took over the gesture, window lost focus, ...) must not commit the
  // selection or zoom; it only clears the in-progress state.
  const onPointerCancel = (event: PointerEvent) => {
    if (event.pointerId !== activePointerId) {
      return;
    }
    if (mode === 'select') {
      api.setSelection(null);
    }
    mode = null;
    startPixels = null;
    activePointerId = null;
  };

  api.element.addEventListener('pointerdown', onPointerDown);
  window.addEventListener('pointermove', onPointerMove);
  window.addEventListener('pointerup', onPointerUp);
  window.addEventListener('pointercancel', onPointerCancel);
  return () => {
    api.element.removeEventListener('pointerdown', onPointerDown);
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
    window.removeEventListener('pointercancel', onPointerCancel);
  };
};
