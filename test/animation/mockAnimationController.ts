import { AnimationController } from '../../src/animation/AnimationController';
import { CancelableTimeout, TimeoutController } from '../../src/animation/timeoutController';
import { AnimationStateMachine } from '../../src/animation/AnimationStateMachine';

/**
 * Animation controller that does not automatically complete when reaching 100%.
 * That is the default and useful behavior but a lot of our unit tests are written with the assumption
 * that "100% progress animation" and "completed animation" are two different states
 * and it's just easier to write a new controller than rewrite all the tests.
 */
export const mockAnimationController: AnimationController = <T, E>(
  timeoutController: TimeoutController,
  animationHandle: AnimationStateMachine<T, E>,
  listener: (progress: T) => void,
): CancelableTimeout => {
  let cancellable: CancelableTimeout | undefined;
  const nextUpdate = (now: number) => {
    const timeRemaining = animationHandle.tick(now);
    if (animationHandle.getState() === 'active') {
      listener(animationHandle.getInterpolated());
      if (animationHandle.getProgress() === 1) {
        // don't complete!
        // animationHandle.complete();
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
