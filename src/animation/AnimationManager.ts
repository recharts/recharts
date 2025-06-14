import { CancelableTimeout, TimeoutController } from './timeoutController';
import { StartAnimationFunction } from './configUpdate';

export type ReactSmoothStyle = object;

/**
 * Represents a single item in the ReactSmoothQueue.
 * The item can be:
 * - A number representing a delay in milliseconds.
 * - An object representing a style change
 * - A StartAnimationFunction that starts eased transition and calls different render
 *      because of course in Recharts we have to have three ways to do everything
 * - An arbitrary function to be executed
 */
export type ReactSmoothQueueItem = number | ReactSmoothStyle | StartAnimationFunction | (() => void);

export type ReactSmoothQueue = ReadonlyArray<ReactSmoothQueueItem>;

export type HandleChangeFn = (currentStyle: ReactSmoothStyle) => null | void;

export type AnimationManager = {
  stop: () => void;
  start: (style: ReactSmoothQueue) => void;
  subscribe: (handleChange: (style: ReactSmoothStyle) => void) => () => void;
  getTimeoutController(): TimeoutController;
};

export function createAnimateManager(timeoutController: TimeoutController): AnimationManager {
  let currStyle: ReactSmoothQueueItem | ReactSmoothQueue = {};
  let handleChange: HandleChangeFn = () => null;
  let shouldStop = false;
  let cancelTimeout: CancelableTimeout | null = null;

  const setStyle = (_style: ReactSmoothQueueItem | ReactSmoothQueue) => {
    if (shouldStop) {
      return;
    }

    if (Array.isArray(_style)) {
      if (!_style.length) {
        return;
      }

      const styles = _style;
      const [curr, ...restStyles] = styles;

      if (typeof curr === 'number') {
        cancelTimeout = timeoutController.setTimeout(setStyle.bind(null, restStyles), curr);

        return;
      }

      setStyle(curr);
      cancelTimeout = timeoutController.setTimeout(setStyle.bind(null, restStyles));
      return;
    }

    if (typeof _style === 'object') {
      currStyle = _style;
      handleChange(currStyle);
    }

    if (typeof _style === 'function') {
      _style();
    }
  };

  return {
    stop: () => {
      shouldStop = true;
    },
    start: (style: ReactSmoothQueue) => {
      shouldStop = false;
      if (cancelTimeout) {
        cancelTimeout();
        cancelTimeout = null;
      }
      setStyle(style);
    },
    subscribe: (_handleChange: HandleChangeFn) => {
      handleChange = _handleChange;

      return () => {
        handleChange = () => null;
      };
    },
    getTimeoutController: () => timeoutController,
  } satisfies AnimationManager;
}
