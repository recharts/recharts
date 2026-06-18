import { AnimationManager, createAnimateManager } from './AnimationManager';
import { RequestAnimationFrameTimeoutController } from './timeoutController';

/**
 * @deprecated
 */
export function createDefaultAnimationManager(): AnimationManager {
  return createAnimateManager(new RequestAnimationFrameTimeoutController());
}
