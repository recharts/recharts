import * as React from 'react';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { AnimationManagerContext, AnimationManagerFactory } from './useAnimationManager';
import { ProgressAnimationManager } from './ProgressAnimationManager';
import { AnimationManager } from './AnimationManager';

export type { AnimationStatus } from './ProgressAnimationManager';

/**
 * A handle to a single animation that supports manual progress control.
 * Returned by {@link useAnimationProgress}.
 */
export type AnimationHandle = {
  readonly animationId: string;
  readonly status: 'idle' | 'pending' | 'active' | 'complete';
  readonly progress: number;
  setProgress(percent: number): void;
  complete(): void;
  isAnimating(): boolean;
};

/**
 * Manages multiple ProgressAnimationManagers — one per animation in the chart.
 * Notifies subscribers when the animation list changes.
 * @internal
 */
class CompositeProgressManager {
  public animations: Map<string, ProgressAnimationManager> = new Map();

  private subscribers: Set<() => void> = new Set();

  subscribe(callback: () => void): () => void {
    this.subscribers.add(callback);
    return () => {
      this.subscribers.delete(callback);
    };
  }

  private notify(): void {
    this.subscribers.forEach(cb => cb());
  }

  factory: AnimationManagerFactory = (animationId: string): AnimationManager => {
    const onStop = () => {
      this.animations.delete(animationId);
      this.notify();
    };
    const manager = new ProgressAnimationManager(animationId, onStop);
    this.animations.set(animationId, manager);
    this.notify();
    return manager;
  };
}

const AnimationProgressContext = createContext<CompositeProgressManager | null>(null);

/**
 * Wraps chart components and intercepts their animations for manual control.
 *
 * When this provider is present, animations inside it do not play automatically.
 * Instead, they are paused at t=0, and you can use {@link useAnimationProgress} to build UI that scrubs through them manually.
 *
 * @example
 * ```tsx
 * import { AnimationProgressProvider, useAnimationProgress } from 'recharts';
 *
 * <AnimationProgressProvider>
 *   <BarChart data={data}>
 *     <Bar dataKey="value" />
 *   </BarChart>
 *   <MyCustomControls />
 * </AnimationProgressProvider>
 * ```
 */
export function AnimationProgressProvider({ children }: { children: React.ReactNode }) {
  const compositeManager = useMemo(() => new CompositeProgressManager(), []);

  return (
    <AnimationProgressContext.Provider value={compositeManager}>
      <AnimationManagerContext.Provider value={compositeManager.factory}>{children}</AnimationManagerContext.Provider>
    </AnimationProgressContext.Provider>
  );
}

/**
 * Returns a reactive map of all animations inside the nearest {@link AnimationProgressProvider}.
 * Each entry is an {@link AnimationHandle} that exposes the animation's status and allows manual scrubbing.
 *
 * Returns `null` when called outside an `AnimationProgressProvider`.
 *
 * @example
 * ```tsx
 * function MyControls() {
 *   const animations = useAnimationProgress();
 *   if (!animations) return null;
 *   return Array.from(animations.values()).map(handle => (
 *     <input
 *       key={handle.animationId}
 *       type="range" min={0} max={1} step={0.01}
 *       onChange={e => handle.setProgress(Number(e.target.value))}
 *     />
 *   ));
 * }
 * ```
 */
export function useAnimationProgress(): Map<string, AnimationHandle> | null {
  const compositeManager = useContext(AnimationProgressContext);
  const [animations, setAnimations] = useState<Map<string, ProgressAnimationManager>>(
    () => new Map(compositeManager?.animations),
  );

  useEffect(() => {
    if (!compositeManager) return undefined;
    setAnimations(new Map(compositeManager.animations));
    return compositeManager.subscribe(() => {
      setAnimations(new Map(compositeManager.animations));
    });
  }, [compositeManager]);

  if (!compositeManager) return null;

  // ProgressAnimationManager satisfies AnimationHandle
  return animations as Map<string, AnimationHandle>;
}
