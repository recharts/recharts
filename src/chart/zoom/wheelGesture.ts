import { ZoomGestureInstaller } from './ZoomGestureApi';

/**
 * Wheel / trackpad to zoom, centred on the pointer. Calls `preventDefault` so the page does not
 * scroll while zooming the chart. The zoom factor per notch comes from `options.wheelStep`.
 */
export const installWheelGesture: ZoomGestureInstaller = api => {
  const onWheel = (event: WheelEvent) => {
    const options = api.getOptions();
    if (!options.wheel) {
      return;
    }
    const fractions = api.plotFractions(event.clientX, event.clientY);
    if (fractions == null) {
      return;
    }
    event.preventDefault();
    const step = options.wheelStep > 1 ? options.wheelStep : 1.15;
    const factor = event.deltaY < 0 ? step : 1 / step;
    api.zoomBy('x', factor, fractions.x);
    api.zoomBy('y', factor, fractions.y);
    api.refreshPointer(event.clientX, event.clientY);
  };

  api.element.addEventListener('wheel', onWheel, { passive: false });
  return () => api.element.removeEventListener('wheel', onWheel);
};
