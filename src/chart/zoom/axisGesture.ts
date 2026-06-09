import { ZoomGestureInstaller } from './ZoomGestureApi';
import { ZoomDimension } from '../../state/zoomSlice';

/**
 * Dragging on an axis band pans only that axis. Wheel over an axis is handled by the wheel gesture.
 */
export const installAxisGesture: ZoomGestureInstaller = api => {
  let panAxis: ZoomDimension | null = null;
  let lastX = 0;
  let lastY = 0;

  const onPointerDown = (event: PointerEvent) => {
    const options = api.getOptions();
    // Touch axis pan is handled by the touch gesture (with a larger hit area); this is mouse/pen.
    if (event.pointerType === 'touch' || event.button !== 0 || !options.axisInteractions || !options.pan) {
      return;
    }
    const region = api.pointerRegion(event.clientX, event.clientY);
    if (region === 'xAxis') {
      panAxis = 'x';
    } else if (region === 'yAxis') {
      panAxis = 'y';
    } else {
      return;
    }
    lastX = event.clientX;
    lastY = event.clientY;
  };

  const onPointerMove = (event: PointerEvent) => {
    if (panAxis == null) {
      return;
    }
    const offset = api.getOffset();
    if (offset == null) {
      return;
    }
    const dx = event.clientX - lastX;
    const dy = event.clientY - lastY;
    lastX = event.clientX;
    lastY = event.clientY;
    if (panAxis === 'x' && offset.width > 0) {
      api.panBy('x', -dx / offset.width);
      api.refreshActivePointer();
    } else if (panAxis === 'y' && offset.height > 0) {
      api.panBy('y', dy / offset.height);
      api.refreshActivePointer();
    }
  };

  const onPointerUp = () => {
    panAxis = null;
  };

  api.element.addEventListener('pointerdown', onPointerDown);
  window.addEventListener('pointermove', onPointerMove);
  window.addEventListener('pointerup', onPointerUp);
  window.addEventListener('pointercancel', onPointerUp);
  return () => {
    api.element.removeEventListener('pointerdown', onPointerDown);
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
    window.removeEventListener('pointercancel', onPointerUp);
  };
};
