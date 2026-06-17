import { AnimationController } from './AnimationController';
import { JavascriptAnimation } from './RechartsAnimation';
import { CancelableTimeout, TimeoutController } from './timeoutController';
import { noop } from '../util/DataUtils';
import { EasingFunction } from './easing';

/**
 * JavaScript animations require trigger and repain as soon as possible,
 * so this class uses the timeoutController to trigger updates as quickly as the controller allows.
 *
 * JavaScript animation progress is represented as a stream of numbers between 0 and 1, where 0 means the animation just started, and 1 means the animation just ended. Each individual consumer is then responsible
 * for mapping that number onto a React component.
 */
export class JavaScriptAnimationController implements AnimationController<number, EasingFunction> {
  private cancellable: CancelableTimeout | undefined;

  start(
    timeoutController: TimeoutController,
    animationHandle: JavascriptAnimation,
    listener: (progress: number) => void,
  ): CancelableTimeout {
    const nextUpdate = (now: number) => {
      const timeRemaining = animationHandle.tick(now);
      if (animationHandle.getState() === 'active') {
        listener(animationHandle.getInterpolated());
        if (animationHandle.getProgress() === 1) {
          animationHandle.complete();
          this.cancellable = undefined;
          return;
        }
        this.cancellable = timeoutController.setTimeout(nextUpdate, timeRemaining);
        return;
      }
      this.cancellable = timeoutController.setTimeout(nextUpdate, timeRemaining);
    };

    this.cancellable = timeoutController.setTimeout(nextUpdate, 0);

    return this.cancellable ?? noop;
  }
}
