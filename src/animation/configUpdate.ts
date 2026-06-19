import { getIntersectionKeys, mapObject } from './util';
import { EasingFunction } from './easing';
import { TimeoutController } from './timeoutController';

export const alpha = (begin: number, end: number, k: number) => begin + (end - begin) * k;

export type FrameId = number;

export type RequestAnimationFrameCallback = (time: number) => void;

export type RequestAnimationFrameDi = (callback: RequestAnimationFrameCallback) => FrameId;

export type CancelAnimationFrameDi = (handle: FrameId) => void;

export type CancelAnimationFunction = () => void;

export type StartAnimationFunction = () => CancelAnimationFunction;

type TimingStyle = Record<string, [number, number]>;

function createTimingUpdate<T extends Record<string, number>>(
  from: T,
  to: T,
  easing: EasingFunction,
  duration: number,
  interKeys: ReadonlyArray<string>,
  render: (currentStyle: T) => void,
  timeoutController: TimeoutController,
) {
  let stopAnimation: CancelAnimationFunction | null = null;

  const timingStyle: TimingStyle = interKeys.reduce((res: TimingStyle, key: string): TimingStyle => {
    const fromElement = from[key];
    const toElement = to[key];
    if (fromElement == null || toElement == null) {
      return res;
    }
    return {
      ...res,
      [key]: [fromElement, toElement] as const,
    };
  }, {});

  let beginTime: number;

  const timingUpdate = (now: number) => {
    if (!beginTime) {
      beginTime = now;
    }

    const animationElapsedTime = (now - beginTime) / duration;
    const currStyle = mapObject((key, val) => alpha(...val, easing(animationElapsedTime)), timingStyle);

    // get union set and add compatible prefix
    render({
      ...from,
      ...to,
      ...currStyle,
    });

    if (animationElapsedTime < 1) {
      stopAnimation = timeoutController.setTimeout(timingUpdate);
    } else {
      const finalStyle = mapObject((key, val) => alpha(...val, easing(1)), timingStyle);

      render({
        ...from,
        ...to,
        ...finalStyle,
      });
    }
  };

  // return start animation method
  return () => {
    stopAnimation = timeoutController.setTimeout(timingUpdate);

    // return stop animation method
    return () => {
      stopAnimation?.();
    };
  };
}

/**
 * @deprecated
 */
// eslint-disable-next-line import/no-default-export
export default <T extends Record<string, number>>(
  from: T,
  to: T,
  easing: EasingFunction | null,
  duration: number,
  render: (currentStyle: T) => void,
  timeoutController: TimeoutController,
): StartAnimationFunction => {
  const interKeys: ReadonlyArray<string> = getIntersectionKeys(from, to);

  if (easing == null) {
    // no animation, just set to final state
    return () => {
      render({
        ...from,
        ...to,
      });
      return () => {};
    };
  }

  return createTimingUpdate(from, to, easing, duration, interKeys, render, timeoutController);
};
