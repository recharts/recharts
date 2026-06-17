import { CancelableTimeout, TimeoutController } from './timeoutController';
import { RechartsAnimation } from './RechartsAnimation';

/**
 * AnimationController is a class that accepts the animation state machine (= RechartsAnimation) plus a timeout controller,
 * and manages the animation by calling the tick method of the animation state machine at the right time.
 *
 * The animation state machine is responsible for calculating the animation progress and calling the onAnimationStart and onAnimationEnd callbacks at the right time, while the AnimationManager is responsible for calling the tick method of the animation state machine.
 */
/**
 * Starts (or resumes) an animation using the provided timeout controller and the animation state machine.
 * Returns an animation handle which you can use to listen for updates, or interrupt.
 *
 * This function will mutate the animationHandle object!
 */
export type AnimationController<T, E> = (
  timeoutController: TimeoutController,
  animationHandle: RechartsAnimation<T, E>,
  listener: (newState: T) => void,
) => CancelableTimeout;
