import { getIntersectionKeys, mapObject } from './util';

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
const calStepperVals = (
  easing: (arg0: any, arg1: any, arg2: any) => [any, any],
  preVals: Record<string, Val>,
  steps: number,
) => {
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

// configure update function
// eslint-disable-next-line import/no-default-export
export default (
  from: Record<string, unknown>,
  to: Record<string, unknown>,
  easing:
    | ((arg0: any, arg1: any, arg2: any) => [any, any])
    | {
        (arg0: number): any;
        dt: number;
        isStepper: any;
      },
  duration: number,
  render: (arg0: any) => void,
) => {
  const interKeys = getIntersectionKeys(from, to);
  const timingStyle = interKeys.reduce(
    (res, key) => ({
      ...res,
      [key]: [from[key], to[key]],
    }),
    {},
  );

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
  let cafId = -1;
  let preTime: number, beginTime: number;
  // @ts-expect-error TODO fix type
  let update = () => null;

  const getCurrStyle = () => mapObject((key, val: Val) => val.from, stepperStyle);
  const shouldStopAnimation = () => !Object.values(stepperStyle).filter(needContinue).length;

  // stepper timing function like spring
  const stepperUpdate = (now: number) => {
    if (!preTime) {
      preTime = now;
    }
    const deltaTime = now - preTime;
    // @ts-expect-error TODO fix type
    const steps = deltaTime / easing.dt;

    stepperStyle = calStepperVals(easing, stepperStyle, steps);
    // get union set and add compatible prefix
    render({
      ...from,
      ...to,
      // @ts-expect-error TODO fix type
      ...getCurrStyle(stepperStyle),
    });

    preTime = now;

    if (!shouldStopAnimation()) {
      cafId = requestAnimationFrame(update);
    }
  };

  // t => val timing function like cubic-bezier
  const timingUpdate = (now: number) => {
    if (!beginTime) {
      beginTime = now;
    }

    const t = (now - beginTime) / duration;
    // @ts-expect-error TODO fix type
    const currStyle = mapObject((key, val) => alpha(...val, easing(t)), timingStyle);

    // get union set and add compatible prefix
    render({
      ...from,
      ...to,
      ...currStyle,
    });

    if (t < 1) {
      cafId = requestAnimationFrame(update);
    } else {
      // @ts-expect-error TODO fix type
      const finalStyle = mapObject((key, val) => alpha(...val, easing(1)), timingStyle);

      render({
        ...from,
        ...to,
        ...finalStyle,
      });
    }
  };

  // @ts-expect-error TODO fix type
  update = easing.isStepper ? stepperUpdate : timingUpdate;

  // return start animation method
  return () => {
    requestAnimationFrame(update);

    // return stop animation method
    return () => {
      cancelAnimationFrame(cafId);
    };
  };
};
