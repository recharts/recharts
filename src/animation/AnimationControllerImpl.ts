import { AnimationController } from './AnimationController';
import { RechartsAnimation } from './RechartsAnimation';
import { CancelableTimeout, TimeoutController } from './timeoutController';

/**
 * JavaScript animations require trigger and repaint as soon as possible,
 * so this class uses the timeoutController to trigger updates as quickly as the controller allows.
 *
 * JavaScript animation progress is represented as a stream of values. The exact type depends on the animationHandle type.
 * Each individual consumer is then responsible for mapping those values onto a React component.
 */
export const animationControllerImpl: AnimationController = <T, E>(
  timeoutController: TimeoutController,
  animationHandle: RechartsAnimation<T, E>,
  listener: (progress: T) => void,
): CancelableTimeout => {
  let cancellable: CancelableTimeout | undefined;
  const nextUpdate = (now: number) => {
    const timeRemaining = animationHandle.tick(now);
    if (animationHandle.getState() === 'active') {
      listener(animationHandle.getInterpolated());
      if (animationHandle.getProgress() === 1) {
        animationHandle.complete();
        cancellable = undefined;
        return;
      }
      cancellable = timeoutController.setTimeout(nextUpdate, timeRemaining);
      return;
    }
    cancellable = timeoutController.setTimeout(nextUpdate, timeRemaining);
  };

  cancellable = timeoutController.setTimeout(nextUpdate, 0);

  return () => cancellable?.();
};
