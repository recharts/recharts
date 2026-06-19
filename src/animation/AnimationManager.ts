import { RechartsAnimation } from './RechartsAnimation';

export type AnimationManager<T, E> = {
  stop: () => void;
  start: (animation: RechartsAnimation<T, E>, listener: (newStyle: T) => void) => void;
  isAnimating(): boolean;
};
