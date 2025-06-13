import { TimeoutController } from './timeoutController';

export type ReactSmoothStyle = object;

/**
 * Represents a single item in the ReactSmoothQueue.
 * The item can be:
 * - A number representing a delay in milliseconds.
 * - An object representing a style change
 * - A function to be executed
 */
type ReactSmoothQueueItem = number | ReactSmoothStyle | (() => void);

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
        timeoutController.setTimeout(setStyle.bind(null, restStyles), curr);

        return;
      }

      setStyle(curr);
      timeoutController.setTimeout(setStyle.bind(null, restStyles));
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
