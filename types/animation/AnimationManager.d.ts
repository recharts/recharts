import { TimeoutController } from './timeoutController';
import { StartAnimationFunction } from './configUpdate';
export type ReactSmoothStyle = object;
/**
 * Represents a single item in the ReactSmoothQueue.
 * The item can be:
 * - A number representing a delay in milliseconds.
 * - An object representing a style change
 * - A StartAnimationFunction that starts eased transition and calls different render
 *      because of course in Recharts we have to have three ways to do everything
 * - An arbitrary function to be executed
 */
export type ReactSmoothQueueItem = number | ReactSmoothStyle | StartAnimationFunction | (() => void);
export type ReactSmoothQueue = ReadonlyArray<ReactSmoothQueueItem>;
export type HandleChangeFn = (currentStyle: ReactSmoothStyle) => null | void;
export type AnimationManager = {
    stop: () => void;
    start: (style: ReactSmoothQueue) => void;
    subscribe: (handleChange: (style: ReactSmoothStyle) => void) => () => void;
    getTimeoutController(): TimeoutController;
};
export declare function createAnimateManager(timeoutController: TimeoutController): AnimationManager;
