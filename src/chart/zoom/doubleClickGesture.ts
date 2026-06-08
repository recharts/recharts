import { ZoomGestureInstaller } from './ZoomGestureApi';

/**
 * Double-click to reset the chart to the full (un-zoomed) view.
 */
export const installDoubleClickGesture: ZoomGestureInstaller = api => {
  const onDoubleClick = (event: MouseEvent) => {
    if (!api.getOptions().doubleClickReset) {
      return;
    }
    // A double-click on a scrollbar just pages quickly, it must not reset the whole chart.
    if ((event.target as Element | null)?.closest?.('[data-recharts-zoom-scrollbar]') != null) {
      return;
    }
    api.reset();
    api.refreshPointer(event.clientX, event.clientY);
  };

  api.element.addEventListener('dblclick', onDoubleClick);
  return () => api.element.removeEventListener('dblclick', onDoubleClick);
};
