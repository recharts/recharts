import { AnimationController } from './AnimationController';
import { CancelableTimeout, TimeoutController } from './timeoutController';
import { RechartsAnimation } from './RechartsAnimation';
import { noop } from '../util/DataUtils';

/**
 * CSS animations require only one update at the start, and second at the end (to call onAnimationEnd)
 * so this controller only fires timeout twice per animation.
 *
 * CSS animation is represented as a stream of CSS rules that get applied to the appropriate element.
 */
export class CSSAnimationController implements AnimationController<string> {
  private cancellable: CancelableTimeout | undefined;

  start(
    timeoutController: TimeoutController,
    animationHandle: RechartsAnimation<string>,
    listener: (newState: string) => void,
  ): CancelableTimeout {
    const nextUpdate = (now: number) => {
      const timeRemaining = animationHandle.tick(now);
      if (animationHandle.getState() === 'active') {
        listener(animationHandle.getTo());
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
