import { ZoomGestureInstaller } from './ZoomGestureApi';

/** Fraction of the visible window panned per arrow press, and the faster step with Shift. */
const PAN_STEP = 0.1;
const PAN_STEP_FAST = 0.25;

/**
 * Keyboard zoom/pan when the chart is focused:
 * - `+` / `=` zoom in, `-` / `_` zoom out (centred on the plot),
 * - `0` / `Escape` reset,
 * - arrow keys pan, <kbd>Shift</kbd> + arrows pan faster.
 *
 * The arrow handlers stop propagation so panning doesn't also move the tooltip through the
 * accessibility data-point navigation.
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
      case 'ArrowDown': {
        const dist = event.shiftKey ? PAN_STEP_FAST : PAN_STEP;
        if (event.key === 'ArrowLeft') {
          api.panBy('x', -dist);
        } else if (event.key === 'ArrowRight') {
          api.panBy('x', dist);
        } else if (event.key === 'ArrowUp') {
          api.panBy('y', dist);
        } else {
          api.panBy('y', -dist);
        }
        event.preventDefault();
        event.stopPropagation();
        break;
      }
      default:
        break;
    }
  };

  api.element.addEventListener('keydown', onKeyDown);
  return () => api.element.removeEventListener('keydown', onKeyDown);
};
