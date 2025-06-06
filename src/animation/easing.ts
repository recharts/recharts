const ACCURACY = 1e-4;

const cubicBezierFactor = (c1: number, c2: number) => [0, 3 * c1, 3 * c2 - 6 * c1, 3 * c1 - 3 * c2 + 1];

const multyTime = (params: ReadonlyArray<number>, t: number) =>
  params.map((param, i) => param * t ** i).reduce((pre, curr) => pre + curr);

const cubicBezier = (c1: number, c2: number) => (t: number) => {
  const params = cubicBezierFactor(c1, c2);

  return multyTime(params, t);
};

const derivativeCubicBezier = (c1: number, c2: number) => (t: number) => {
  const params = cubicBezierFactor(c1, c2);
  const newParams = [...params.map((param, i) => param * i).slice(1), 0];

  return multyTime(newParams, t);
};

// calculate cubic-bezier using Newton's method
export const configBezier = (...args: any[]) => {
  let [x1, y1, x2, y2] = args;

  if (args.length === 1) {
    switch (args[0]) {
      case 'linear':
        [x1, y1, x2, y2] = [0.0, 0.0, 1.0, 1.0];
        break;
      case 'ease':
        [x1, y1, x2, y2] = [0.25, 0.1, 0.25, 1.0];
        break;
      case 'ease-in':
        [x1, y1, x2, y2] = [0.42, 0.0, 1.0, 1.0];
        break;
      case 'ease-out':
        [x1, y1, x2, y2] = [0.42, 0.0, 0.58, 1.0];
        break;
      case 'ease-in-out':
        [x1, y1, x2, y2] = [0.0, 0.0, 0.58, 1.0];
        break;
      default: {
        const easing = args[0].split('(');
        if (easing[0] === 'cubic-bezier' && easing[1].split(')')[0].split(',').length === 4) {
          [x1, y1, x2, y2] = easing[1]
            .split(')')[0]
            .split(',')
            .map((x: string) => parseFloat(x));
        } else {
          // TODO replace with a typescript error
          // warn(
          //   false,
          //   '[configBezier]: arguments should be one of ' +
          //     "oneOf 'linear', 'ease', 'ease-in', 'ease-out', " +
          //     "'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s",
          //   args,
          // );
        }
      }
    }
  }

  // TODO replace with a typescript error
  // warn(
  //   [x1, x2, y1, y2].every(num => typeof num === 'number' && num >= 0 && num <= 1),
  //   '[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s',
  //   args,
  // );

  const curveX = cubicBezier(x1, x2);
  const curveY = cubicBezier(y1, y2);
  const derCurveX = derivativeCubicBezier(x1, x2);
  const rangeValue = (value: number): number => {
    if (value > 1) {
      return 1;
    }
    if (value < 0) {
      return 0;
    }

    return value;
  };

  const bezier = (_t: number) => {
    const t = _t > 1 ? 1 : _t;
    let x = t;

    for (let i = 0; i < 8; ++i) {
      const evalT = curveX(x) - t;
      const derVal = derCurveX(x);

      if (Math.abs(evalT - t) < ACCURACY || derVal < ACCURACY) {
        return curveY(x);
      }

      x = rangeValue(x - evalT / derVal);
    }

    return curveY(x);
  };

  bezier.isStepper = false;

  return bezier;
};

type ConfigSpring = {
  stiff?: number;
  damping?: number;
  dt?: number;
};

export const configSpring = (config: ConfigSpring = {}) => {
  const { stiff = 100, damping = 8, dt = 17 } = config;
  const stepper = (currX: number, destX: number, currV: number) => {
    const FSpring = -(currX - destX) * stiff;
    const FDamping = currV * damping;
    const newV = currV + ((FSpring - FDamping) * dt) / 1000;
    const newX = (currV * dt) / 1000 + currX;

    if (Math.abs(newX - destX) < ACCURACY && Math.abs(newV) < ACCURACY) {
      return [destX, 0];
    }
    return [newX, newV];
  };

  stepper.isStepper = true;
  stepper.dt = dt;

  return stepper;
};

export const configEasing = (...args: any[]) => {
  const [easing] = args;

  if (typeof easing === 'string') {
    switch (easing) {
      case 'ease':
      case 'ease-in-out':
      case 'ease-out':
      case 'ease-in':
      case 'linear':
        return configBezier(easing);
      case 'spring':
        return configSpring();
      default:
        if (easing.split('(')[0] === 'cubic-bezier') {
          return configBezier(easing);
        }
      // TODO replace with a typescript error
      // warn(
      //   false,
      //   "[configEasing]: first argument should be one of 'ease', 'ease-in', " +
      //     "'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s",
      //   args,
      // );
    }
  }

  if (typeof easing === 'function') {
    return easing;
  }

  // TODO replace with a typescript error
  // warn(false, '[configEasing]: first argument type should be function or string, instead received %s', args);

  return null;
};
