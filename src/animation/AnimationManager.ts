import { TimeoutController } from './timeoutController';
import { RechartsAnimation } from './RechartsAnimation';

/**
 * @deprecated
 */
export type ReactSmoothStyle = string | Record<string, unknown>;
export type HandleChangeFn = (currentStyle: ReactSmoothStyle) => null | void;

export type AnimationManager<T, E> = {
  stop: () => void;
  start: (animation: RechartsAnimation<T, E>, listener: (newStyle: T) => void) => void;
  subscribe: (handleChange: (style: T) => void) => () => void;
  getTimeoutController(): TimeoutController;
  /**
   * When true, this manager controls animation progress manually (e.g. via a scrubber).
   * CSS-transition-based animations should fall back to JS interpolation in this mode,
   * because browsers don't allow scrubbing CSS transitions to an arbitrary progress point.
   */
  isManualControl?: boolean;
};
