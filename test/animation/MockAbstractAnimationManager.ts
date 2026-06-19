import { AnimationManager, ReactSmoothStyle } from '../../src/animation/AnimationManager';
import { TimeoutController } from '../../src/animation/timeoutController';
import { MockTimeoutController } from './mockTimeoutController';
import { RechartsAnimation } from '../../src/animation/RechartsAnimation';
import { mockAnimationController } from './mockAnimationController';

/**
 * Abstract class for the various mock animation managers.
 * Don't use this directly, use the concrete implementations.
 */
export abstract class MockAbstractAnimationManager implements AnimationManager {
  protected animation: RechartsAnimation<any, any> | null = null;

  protected readonly timeoutController: MockTimeoutController = new MockTimeoutController();

  public isAnimating(): boolean {
    return this.animation !== null && this.animation.getState() !== 'completed';
  }

  start(animation: RechartsAnimation<any, any>, listener: (newState: T) => void): void {
    this.animation = animation;
    this.timeoutController.clear();
    mockAnimationController(this.timeoutController, this.animation, listener);
  }

  stop(): void {
    this.animation = null;
  }

  subscribe(handleChange: (style: ReactSmoothStyle) => void): () => void {
    return () => {};
  }

  getTimeoutController(): TimeoutController {
    return this.timeoutController;
  }
}
