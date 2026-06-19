import { createContext, useContext, useMemo } from 'react';
import { AnimationController } from './AnimationController';
import { animationControllerImpl } from './AnimationControllerImpl';

export const AnimationManagerContext = createContext<AnimationController>(animationControllerImpl);

export function useAnimationManager(animationManagerFromProps: AnimationController | undefined): AnimationController {
  const contextAnimationManager = useContext(AnimationManagerContext);
  return useMemo(
    () => animationManagerFromProps ?? contextAnimationManager,
    [animationManagerFromProps, contextAnimationManager],
  );
}
