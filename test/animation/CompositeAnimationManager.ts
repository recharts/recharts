import { MockAnimationManager, MockProgressAnimationManager } from './MockProgressAnimationManager';
import { AnimationController } from '../../src/animation/AnimationController';
import { CancelableTimeout, TimeoutController } from '../../src/animation/timeoutController';
import { AnimationStateMachine } from '../../src/animation/AnimationStateMachine';

/*
 * CompositeAnimationManager allows for the management of multiple animations.
 * Exposes the same interface as MockProgressAnimationManager but allows for multiple animations to be managed at once.
 */
export class CompositeAnimationManager implements MockAnimationManager {
  /**
   * All animation managers under this composite manager.
   */
  private animationManagers: Map<string, MockAnimationManager> = new Map();

  async setAnimationProgress(percent: number): Promise<void> {
    const animatingManagers = this.getAnimatingManagers();
    if (animatingManagers.size === 0) {
      throw new Error('No active animation managers available');
    }

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

    for (const [, manager] of animatingManagers) {
      // eslint-disable-next-line no-await-in-loop
      await manager.completeAnimation();
    }
  }

  isAnimating(): boolean {
    // Check if any of the animation managers are animating
    return this.getAnimatingManagers().size > 0;
  }

  public factory: AnimationController = <T, E>(
    timeoutController: TimeoutController,
    animationHandle: AnimationStateMachine<T, E>,
    listener: (newState: T) => void,
  ): CancelableTimeout => {
    const animationId = animationHandle.getAnimationId();
    const onStop = () => {
      this.animationManagers.delete(animationId);
    };
    const manager = new MockProgressAnimationManager<T, E>(animationId, onStop);
    manager.start(animationHandle, listener);
    this.animationManagers.set(animationId, manager);
    return () => {
      onStop();
      manager.stop();
    };
  };

  private getAnimatingManagers(): Map<string, MockAnimationManager> {
    const animatingManagers = new Map<string, MockAnimationManager>();

    for (const [id, manager] of this.animationManagers) {
      if (manager.isAnimating()) {
        animatingManagers.set(id, manager);
      }
    }
    return animatingManagers;
  }
}
