import { ZoomGestureInstaller } from './ZoomGestureApi';

/** Fraction of the visible window panned per arrow press. */
const PAN_STEP = 0.1;

/**
 * Keyboard zoom/pan when the chart is focused:
 * - `+` / `=` zoom in, `-` / `_` zoom out (centred on the plot),
 * - `0` / `Escape` reset,
 * - <kbd>Shift</kbd> + arrows pan.
 *
 * Plain arrow keys are intentionally left to the accessibility layer (data-point navigation), so
 * panning uses Shift + arrows and stops propagation to avoid moving the tooltip at the same time.
 */
export const installKeyboardGesture: ZoomGestureInstaller = api => {
  const onKeyDown = (event: KeyboardEvent) => {
    const options = api.getOptions();
    if (!options.keyboard) {
      return;
    }
    const step = options.wheelStep > 1 ? options.wheelStep : 1.15;

    switch (event.key) {
      case '+':
      case '=':
        api.zoomBy('x', step, 0.5);
        api.zoomBy('y', step, 0.5);
        event.preventDefault();
        break;
      case '-':
      case '_':
        api.zoomBy('x', 1 / step, 0.5);
        api.zoomBy('y', 1 / step, 0.5);
        event.preventDefault();
        break;
      case '0':
      case 'Escape':
        api.reset();
        event.preventDefault();
        break;
      case 'ArrowLeft':
      case 'ArrowRight':
      case 'ArrowUp':
      case 'ArrowDown':
        if (!event.shiftKey) {
          return;
        }
        if (event.key === 'ArrowLeft') {
          api.panBy('x', -PAN_STEP);
        } else if (event.key === 'ArrowRight') {
          api.panBy('x', PAN_STEP);
        } else if (event.key === 'ArrowUp') {
          api.panBy('y', PAN_STEP);
        } else {
          api.panBy('y', -PAN_STEP);
        }
        event.preventDefault();
        event.stopPropagation();
        break;
      default:
        break;
    }
  };

  api.element.addEventListener('keydown', onKeyDown);
  return () => api.element.removeEventListener('keydown', onKeyDown);
};
