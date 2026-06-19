import { CancelableTimeout, TimeoutController } from './timeoutController';
import { RechartsAnimation } from './RechartsAnimation';

/**
 * AnimationController accepts the animation state machine (= RechartsAnimation) plus a timeout controller,
 * and manages the animation by calling the tick method of the animation state machine at the right time.
 *
 * The animation state machine is responsible for calculating the animation progress and calling the onAnimationStart and onAnimationEnd callbacks at the right time, while the AnimationManager is responsible for calling the tick method of the animation state machine.
 */
export type AnimationController = <T, E>(
  timeoutController: TimeoutController,
  animationHandle: RechartsAnimation<T, E>,
  listener: (newState: T) => void,
) => CancelableTimeout;
