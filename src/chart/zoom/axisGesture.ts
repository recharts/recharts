import { ZoomGestureInstaller } from './ZoomGestureApi';
import { ZoomDimension } from '../../state/zoomSlice';

/**
 * Interactions on the axis bands around the plot:
 * - wheel over an axis zooms **only that axis**, centred on the pointer,
 * - drag over an axis pans **only that axis**.
 *
 * The plot-area wheel/pointer gestures bail out over the axis bands, so these don't double up.
 */
export const installAxisGesture: ZoomGestureInstaller = api => {
  const onWheel = (event: WheelEvent) => {
    const options = api.getOptions();
    if (!options.axisInteractions || !options.wheel) {
      return;
    }
    const region = api.pointerRegion(event.clientX, event.clientY);
    if (region !== 'xAxis' && region !== 'yAxis') {
      return;
    }
    const fractions = api.plotFractions(event.clientX, event.clientY);
    if (fractions == null) {
      return;
    }
    event.preventDefault();
    const step = options.wheelStep > 1 ? options.wheelStep : 1.15;
    const factor = event.deltaY < 0 ? step : 1 / step;
    const dimension: ZoomDimension = region === 'xAxis' ? 'x' : 'y';
    api.zoomBy(dimension, factor, dimension === 'x' ? fractions.x : fractions.y);
    api.refreshPointer(event.clientX, event.clientY);
  };

  let panAxis: ZoomDimension | null = null;
  let lastX = 0;
  let lastY = 0;

  const onPointerDown = (event: PointerEvent) => {
    const options = api.getOptions();
    if (event.button !== 0 || !options.axisInteractions || !options.pan) {
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
    } else if (panAxis === 'y' && offset.height > 0) {
      api.panBy('y', dy / offset.height);
    }
  };

  const onPointerUp = () => {
    panAxis = null;
  };

  api.element.addEventListener('wheel', onWheel, { passive: false });
  api.element.addEventListener('pointerdown', onPointerDown);
  window.addEventListener('pointermove', onPointerMove);
  window.addEventListener('pointerup', onPointerUp);
  return () => {
    api.element.removeEventListener('wheel', onWheel);
    api.element.removeEventListener('pointerdown', onPointerDown);
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
  };
};
