import { createContext, useContext, useMemo } from 'react';
import { AnimationController } from './AnimationController';
import { animationControllerImpl } from './AnimationControllerImpl';

const AnimationControllerContext = createContext<AnimationController>(animationControllerImpl);

/**
 * Allows overriding the default AnimationController that Recharts uses internally to drive animations.
 * The default one uses requestAnimationFrame-based TimeoutController, and ticks through the animations
 * as time moves forward.
 *
 * Why would you want to use this? Several reasons:
 * - Unit tests are an excellent use (Recharts itself has ton of tests with mock TimeoutController)
 * - If you want to animate charts back and forth (Recharts only animates forward)
 * - If you want to replace requestAnimationFrame with something else
 *   - Perhaps a manual animation controls (`@recharts/devtools` does this, it's available on https://recharts.github.io too)
 *   - If you want to maybe animate charts based on mouse movement, or page scroll position, instead of time
 *
 * If you don't use this provider then all charts use the default requestAnimationFrame and default animation logic.
 *
 * If you use this component then all charts inside use your custom animationController.
 *
 * @since 3.9
 */
export const AnimationControllerProvider = AnimationControllerContext.Provider;

export function useAnimationController(
  animationControllerFromProps: AnimationController | undefined,
): AnimationController {
  const animationControllerFromContext = useContext(AnimationControllerContext);
  return useMemo(
    () => animationControllerFromProps ?? animationControllerFromContext,
    [animationControllerFromProps, animationControllerFromContext],
  );
}
