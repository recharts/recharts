import { ZoomGestureInstaller } from './ZoomGestureApi';

/**
 * Double-click to reset the chart to the full (un-zoomed) view.
 */
export const installDoubleClickGesture: ZoomGestureInstaller = api => {
  const onDoubleClick = (event: MouseEvent) => {
    if (!api.getOptions().doubleClickReset) {
      return;
    }
    api.reset();
    api.refreshPointer(event.clientX, event.clientY);
  };

  api.element.addEventListener('dblclick', onDoubleClick);
  return () => api.element.removeEventListener('dblclick', onDoubleClick);
};
