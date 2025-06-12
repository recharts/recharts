import { getIntersectionKeys, mapObject } from './util';
import { BezierEasingFunction, EasingFunction, SpringEasingFunction } from './easing';
import { TimeoutController } from './timeoutController';

export const alpha = (begin: number, end: number, k: number) => begin + (end - begin) * k;
const needContinue = ({ from, to }: Val) => from !== to;

type Val = {
  from: number;
  to: number;
  velocity: number;
};

/*
 * @description: cal new from value and velocity in each stepper
 * @return: { [styleProperty]: { from, to, velocity } }
 */
const calStepperVals = (easing: SpringEasingFunction, preVals: Record<string, Val>, steps: number) => {
  const nextStepVals: Record<string, Val> = mapObject((key, val: Val): Val => {
    if (needContinue(val)) {
      const [newX, newV] = easing(val.from, val.to, val.velocity);
      return {
        ...val,
        from: newX,
        velocity: newV,
      };
    }

    return val;
  }, preVals);

  if (steps < 1) {
    return mapObject((key, val: Val): Val => {
      if (needContinue(val)) {
        return {
          ...val,
          velocity: alpha(val.velocity, nextStepVals[key].velocity, steps),
          from: alpha(val.from, nextStepVals[key].from, steps),
        };
      }

      return val;
    }, preVals);
  }

  return calStepperVals(easing, nextStepVals, steps - 1);
};

export type FrameId = number;

export type RequestAnimationFrameCallback = (time: number) => void;

export type RequestAnimationFrameDi = (callback: RequestAnimationFrameCallback) => FrameId;

export type CancelAnimationFrameDi = (handle: FrameId) => void;

export type CancelAnimationFunction = () => void;

export type StartAnimationFunction = () => CancelAnimationFunction;

function createStepperUpdate<T extends Record<string, unknown>>(
  from: T,
  to: T,
  easing: SpringEasingFunction,
  interKeys: ReadonlyArray<string>,
  render: (currentStyle: T) => void,
  timeoutController: TimeoutController,
) {
  let preTime: number;
  let stepperStyle = interKeys.reduce(
    (res, key) => ({
      ...res,
      [key]: {
        from: from[key],
        velocity: 0,
        to: to[key],
      },
    }),
    {},
  );
  const getCurrStyle = () => mapObject((key, val: Val) => val.from, stepperStyle);
  const shouldStopAnimation = () => !Object.values(stepperStyle).filter(needContinue).length;

  let stopAnimation: CancelAnimationFunction | null = null;

  const stepperUpdate = (now: number) => {
    if (!preTime) {
      preTime = now;
    }
    const deltaTime = now - preTime;
    const steps = deltaTime / easing.dt;

    stepperStyle = calStepperVals(easing, stepperStyle, steps);
    // get union set and add compatible prefix
    render({
      ...from,
      ...to,
      ...getCurrStyle(),
    });

    preTime = now;

    if (!shouldStopAnimation()) {
      stopAnimation = timeoutController.setTimeout(stepperUpdate);
    }
  };

  // return start animation method
  return () => {
    stopAnimation = timeoutController.setTimeout(stepperUpdate);

    // return stop animation method
    return () => {
      stopAnimation();
    };
  };
}

type TimingStyle = Record<string, [number, number]>;

function createTimingUpdate<T extends Record<string, unknown>>(
  from: T,
  to: T,
  easing: BezierEasingFunction,
  duration: number,
  interKeys: ReadonlyArray<string>,
  render: (currentStyle: T) => void,
  timeoutController: TimeoutController,
) {
  let stopAnimation: CancelAnimationFunction | null = null;

  const timingStyle: TimingStyle = interKeys.reduce(
    (res, key): TimingStyle => ({
      ...res,
      [key]: [from[key], to[key]],
    }),
    {},
  );

  let beginTime: number;

  const timingUpdate = (now: number) => {
    if (!beginTime) {
      beginTime = now;
    }

    const t = (now - beginTime) / duration;
    const currStyle = mapObject((key, val) => alpha(...val, easing(t)), timingStyle);

    // get union set and add compatible prefix
    render({
      ...from,
      ...to,
      ...currStyle,
    });

    if (t < 1) {
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
      stopAnimation();
    };
  };
}

// configure update function
// eslint-disable-next-line import/no-default-export
export default <T extends Record<string, unknown>>(
  from: T,
  to: T,
  easing: EasingFunction,
  duration: number,
  render: (currentStyle: T) => void,
  timeoutController: TimeoutController,
): StartAnimationFunction => {
  const interKeys: ReadonlyArray<string> = getIntersectionKeys(from, to);

  return easing.isStepper === true
    ? createStepperUpdate(from, to, easing, interKeys, render, timeoutController)
    : createTimingUpdate(from, to, easing, duration, interKeys, render, timeoutController);
};
