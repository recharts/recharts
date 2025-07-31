import { AnimationManager, createAnimateManager } from './AnimationManager';
import { RequestAnimationFrameTimeoutController } from './timeoutController';

export function createDefaultAnimationManager(): AnimationManager {
  return createAnimateManager(new RequestAnimationFrameTimeoutController());
}
