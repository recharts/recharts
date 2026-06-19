import { TimeoutController } from './timeoutController';
import { RechartsAnimation } from './RechartsAnimation';

/**
 * @deprecated
 */
export type ReactSmoothStyle = string | Record<string, unknown>;

export type AnimationManager<T, E> = {
  stop: () => void;
  start: (animation: RechartsAnimation<T, E>, listener: (newStyle: T) => void) => void;
  subscribe: (handleChange: (style: T) => void) => () => void;
  getTimeoutController(): TimeoutController;
  isAnimating(): boolean;
};
