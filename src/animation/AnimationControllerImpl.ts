import { AnimationController } from './AnimationController';
import { RechartsAnimation } from './RechartsAnimation';
import { CancelableTimeout, TimeoutController } from './timeoutController';

/**
 * JavaScript animations require trigger and repain as soon as possible,
 * so this class uses the timeoutController to trigger updates as quickly as the controller allows.
 *
 * JavaScript animation progress is represented as a stream of numbers between 0 and 1, where 0 means the animation just started, and 1 means the animation just ended. Each individual consumer is then responsible
 * for mapping that number onto a React component.
 */
export const animationControllerImpl = (<T, E>(
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
}) satisfies AnimationController<any, any>;
