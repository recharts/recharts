import { useEffect, useState } from 'react';
import { MockAnimationManager, MockProgressAnimationManager } from './MockProgressAnimationManager';
import { AnimationManager } from '../../src/animation/AnimationManager';
import { AnimationManagerFactory } from '../../src/animation/useAnimationManager';

/*
 * CompositeAnimationManager allows for the management of multiple animations.
 * Exposes the same interface as MockProgressAnimationManager but allows for multiple animations to be managed at once.
 */
export class CompositeAnimationManager implements MockAnimationManager {
  /**
   * All animation managers under this composite manager.
   */
  public animationManagers: Map<string, MockAnimationManager> = new Map();

  private subscribers: Set<() => void> = new Set();

  public subscribe = (callback: () => void): (() => void) => {
    this.subscribers.add(callback);
    return () => {
      this.subscribers.delete(callback);
    };
  };

  private notifySubscribers = () => {
    this.subscribers.forEach(callback => callback());
  };

  async setAnimationProgress(percent: number): Promise<void> {
    const animatingManagers = this.getAnimatingManagers();
    if (animatingManagers.size === 0) {
      throw new Error('No active animation managers available');
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const [, manager] of animatingManagers) {
      /*
       * Here it's important that we process the managers one by one, with await in-between.
       * If we don't do this, the animation progress will be set in parallel,
       * and react-testing-library will log:
       * Warning: You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one.
       * And skip the render and test will fail.
       */
      // eslint-disable-next-line no-await-in-loop
      await manager.setAnimationProgress(percent);
    }
  }

  async completeAnimation(): Promise<void> {
    const animatingManagers = this.getAnimatingManagers();
    if (animatingManagers.size === 0) {
      throw new Error('No active animation managers available');
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const [, manager] of animatingManagers) {
      // eslint-disable-next-line no-await-in-loop
      await manager.completeAnimation();
    }
  }

  isAnimating(): boolean {
    // Check if any of the animation managers are animating
    return this.getAnimatingManagers().size > 0;
  }

  public factory: AnimationManagerFactory = (animationId: string): AnimationManager => {
    const onStop = () => {
      this.animationManagers.delete(animationId);
      this.notifySubscribers();
    };
    const manager = new MockProgressAnimationManager(onStop);
    this.animationManagers.set(animationId, manager);
    this.notifySubscribers();
    return manager;
  };

  public getAnimatingManagers(): Map<string, MockAnimationManager> {
    const animatingManagers = new Map<string, MockAnimationManager>();
    // eslint-disable-next-line no-restricted-syntax
    for (const [id, manager] of this.animationManagers) {
      if (manager.isAnimating()) {
        animatingManagers.set(id, manager);
      }
    }
    return animatingManagers;
  }
}

export function useAllAnimationManagers(
  compositeAnimationManager: CompositeAnimationManager,
): Map<string, MockAnimationManager> {
  const [managers, setManagers] = useState(compositeAnimationManager.animationManagers);

  useEffect(() => {
    return compositeAnimationManager.subscribe(() => {
      setManagers(new Map(compositeAnimationManager.animationManagers));
    });
  }, [compositeAnimationManager]);

  return managers;
}
