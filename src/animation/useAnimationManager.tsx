import { useContext, useMemo } from 'react';
import { AnimationManager } from './AnimationManager';
import { AnimationManagerContext } from './Animate';
import { createDefaultAnimationManager } from './createDefaultAnimationManager';

export function useAnimationManager(animationManagerFromProps: AnimationManager | undefined): AnimationManager {
  const contextAnimationManager = useContext(AnimationManagerContext);
  return useMemo(
    () => animationManagerFromProps ?? contextAnimationManager ?? createDefaultAnimationManager(),
    [animationManagerFromProps, contextAnimationManager],
  );
}
