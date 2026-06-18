import { createContext, useContext, useMemo } from 'react';
import { AnimationManager } from './AnimationManager';
import { AnimationController } from './AnimationController';
import { animationControllerImpl } from './AnimationControllerImpl';

export type AnimationManagerFactory = (animationId: string) => AnimationManager;

export const AnimationManagerContext = createContext<AnimationController>(animationControllerImpl);

export function useAnimationManager(animationManagerFromProps: AnimationController | undefined): AnimationController {
  const contextAnimationManager = useContext(AnimationManagerContext);
  return useMemo(
    () => animationManagerFromProps ?? contextAnimationManager,
    [animationManagerFromProps, contextAnimationManager],
  );
}
