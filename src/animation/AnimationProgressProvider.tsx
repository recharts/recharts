import { AnimationStatus } from './ProgressAnimationManager';

export type { AnimationStatus } from './ProgressAnimationManager';

/**
 * A handle to a single animation that supports manual progress control.
 * Returned by {@link useAnimationProgress}.
 * @deprecated
 */
export type AnimationHandle = {
  readonly animationId: string;
  getStatus(): AnimationStatus;
  getProgress(): number;
  setProgress(percent: number): void;
  complete(): void;
  isAnimating(): boolean;
};
