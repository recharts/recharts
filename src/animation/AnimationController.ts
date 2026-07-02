import type { CancelableTimeout, TimeoutController } from './timeoutController';
import { AnimationHandle } from './AnimationHandle';

/**
 * It's actually always the case that JavaScript-based animations produce numbers,
 * and CSS transition-based animations always produce strings,
 * but it's so much easier to just have them together than to deal with all the generics.
 *
 * @see {@link https://recharts.github.io/en-US/guide/animations/ Animation guide}
 *
 * @since 3.9
 */
export type OnAnimationStateUpdate = (newState: number | string) => void;

/**
 * AnimationController accepts the animation state machine (= RechartsAnimation) plus a timeout controller,
 * and manages the animation by calling the tick method of the animation state machine at the right time.
 *
 * One controller is only responsible for one animation. Every new animation will create a new controller.
 *
 * The animation state machine is responsible for calculating the animation progress
 * and calling the onAnimationStart and onAnimationEnd callbacks at the right time,
 * while the AnimationController is responsible for calling the tick method of the animation state machine.
 *
 * @see {@link https://recharts.github.io/en-US/guide/animations/ Animation guide}
 *
 * @since 3.9
 */
export type AnimationController = (
  timeoutController: TimeoutController,
  animationHandle: AnimationHandle,
  listener: OnAnimationStateUpdate,
) => CancelableTimeout;
