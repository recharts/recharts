import { ZoomGestureInstaller } from './ZoomGestureApi';

/** Fraction of the visible window panned per unit of wheel delta. */
const WHEEL_PAN_FACTOR = 0.0015;

/**
 * All wheel / trackpad behavior, which depends on where the pointer is and which modifiers are held:
 *
 * - over the plot: zoom (both enabled axes); Shift = pan horizontally; Ctrl/Cmd + Shift = pan vertically.
 * - over an axis band: zoom that axis; Shift = pan that axis.
 * - over a scrollbar band: pan that axis; Shift = zoom that axis.
 *
 * Calls `preventDefault` so the page does not scroll while interacting with the chart.
 */
export const installWheelGesture: ZoomGestureInstaller = api => {
  const onWheel = (event: WheelEvent) => {
    const options = api.getOptions();
    if (!options.wheel) {
      return;
    }
    const region = api.pointerRegion(event.clientX, event.clientY);
    if (region === 'outside') {
      return;
    }
    if ((region === 'xAxis' || region === 'yAxis') && !options.axisInteractions) {
      return;
    }
    const fractions = api.plotFractions(event.clientX, event.clientY);
    if (fractions == null) {
      return;
    }
    event.preventDefault();

    const step = options.wheelStep > 1 ? options.wheelStep : 1.15;
    const zoomFactor = event.deltaY < 0 ? step : 1 / step;
    const rawDelta = Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
    const panAmount = rawDelta * WHEEL_PAN_FACTOR;

    const zoomX = () => api.zoomBy('x', zoomFactor, fractions.x);
    const zoomY = () => api.zoomBy('y', zoomFactor, fractions.y);
    const panX = () => api.panBy('x', panAmount);
    const panY = () => api.panBy('y', -panAmount);

    const shift = event.shiftKey;
    const ctrl = event.ctrlKey || event.metaKey;

    switch (region) {
      case 'plot':
        if (shift && ctrl) {
          panY();
        } else if (shift) {
          panX();
        } else {
          zoomX();
          zoomY();
        }
        break;
      case 'xAxis':
        if (shift) {
          panX();
        } else {
          zoomX();
        }
        break;
      case 'yAxis':
        if (shift) {
          panY();
        } else {
          zoomY();
        }
        break;
      case 'xScrollbar':
        if (shift) {
          zoomX();
        } else {
          panX();
        }
        break;
      case 'yScrollbar':
        if (shift) {
          zoomY();
        } else {
          panY();
        }
        break;
      default:
        break;
    }

    api.refreshPointer(event.clientX, event.clientY);
  };

  api.element.addEventListener('wheel', onWheel, { passive: false });
  return () => api.element.removeEventListener('wheel', onWheel);
};
