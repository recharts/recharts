import { createContext, useContext, useMemo } from 'react';
import { AnimationManager } from './AnimationManager';
import { createDefaultAnimationManager } from './createDefaultAnimationManager';

export type AnimationManagerFactory = (animationId: string) => AnimationManager;

export const AnimationManagerContext = createContext<AnimationManagerFactory>(createDefaultAnimationManager);

export function useAnimationManager(
  animationId: string,
  animationManagerFromProps: AnimationManager | undefined,
): AnimationManager {
  const contextAnimationManager = useContext(AnimationManagerContext);
  return useMemo(
    () => animationManagerFromProps ?? contextAnimationManager(animationId),
    [animationId, animationManagerFromProps, contextAnimationManager],
  );
}
