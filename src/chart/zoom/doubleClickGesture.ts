import { isInteractiveZoomTarget, ZoomGestureInstaller } from './ZoomGestureApi';

/**
 * Double-click to reset the chart to the full (un-zoomed) view.
 */
export const installDoubleClickGesture: ZoomGestureInstaller = api => {
  const onDoubleClick = (event: MouseEvent) => {
    if (!api.getOptions().doubleClickReset) {
      return;
    }
    if (isInteractiveZoomTarget(event.target)) {
      return;
    }
    // A double-click on a scrollbar just pages quickly, it must not reset the whole chart.
    if (event.target instanceof Element && event.target.closest('[data-recharts-zoom-scrollbar]') != null) {
      return;
    }
    const region = api.pointerRegion(event.clientX, event.clientY, event.target);
    if (region !== 'plot' && region !== 'xAxis' && region !== 'yAxis') {
      return;
    }
    api.reset();
    api.refreshPointer(event.clientX, event.clientY);
  };

  api.element.addEventListener('dblclick', onDoubleClick);
  return () => api.element.removeEventListener('dblclick', onDoubleClick);
};
