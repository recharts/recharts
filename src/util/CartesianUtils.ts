import { Coordinate, Size } from './types';

export const rectWithPoints = ({ x: x1, y: y1 }: Coordinate, { x: x2, y: y2 }: Coordinate) => ({
  x: Math.min(x1, x2),
  y: Math.min(y1, y2),
  width: Math.abs(x2 - x1),
  height: Math.abs(y2 - y1),
});

/**
 * Compute the x, y, width, and height of a box from two reference points.
 * @param  {Object} coords     x1, x2, y1, and y2
 * @return {Object} object
 */
export const rectWithCoords = ({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) =>
  rectWithPoints({ x: x1, y: y1 }, { x: x2, y: y2 });

export class ScaleHelper {
  static EPS = 1e-4;

  private scale: any;

  static create(obj: any) {
    return new ScaleHelper(obj);
  }

  constructor(scale: any) {
    this.scale = scale;
  }

  get domain() {
    return this.scale.domain;
  }

  get range() {
    return this.scale.range;
  }

  get rangeMin() {
    return this.range()[0];
  }

  get rangeMax() {
    return this.range()[1];
  }

  get bandwidth() {
    return this.scale.bandwidth;
  }

  apply(value: any, { bandAware, position }: { bandAware?: boolean; position?: any } = {}) {
    if (value === undefined) {
      return undefined;
    }
    if (position) {
      switch (position) {
        case 'start': {
          return this.scale(value);
        }
        case 'middle': {
          const offset = this.bandwidth ? this.bandwidth() / 2 : 0;
          return this.scale(value) + offset;
        }
        case 'end': {
          const offset = this.bandwidth ? this.bandwidth() : 0;
          return this.scale(value) + offset;
        }
        default: {
          return this.scale(value);
        }
      }
    }
    if (bandAware) {
      const offset = this.bandwidth ? this.bandwidth() / 2 : 0;
      return this.scale(value) + offset;
    }
    return this.scale(value);
  }

  isInRange(value: number) {
    const range = this.range();

    const first = range[0];
    const last = range[range.length - 1];

    return first <= last ? value >= first && value <= last : value >= last && value <= first;
  }
}

type ScaleResult<T> = {
  [P in keyof T]: number;
};
type Scales<T> = {
  [P in keyof T]: ScaleHelper;
};
type ScalesApply<T> = (coord: { [P in keyof T]: any }, options: any) => ScaleResult<T>;
type ScalesIsInRange<T> = (coord: { [P in keyof T]: any }) => boolean;
type LabeledScales<T> = Scales<T> & { apply: ScalesApply<T> } & { isInRange: ScalesIsInRange<T> };

export const createLabeledScales = (options: Record<string, any>): LabeledScales<Record<string, any>> => {
  const scales: Scales<Record<string, any>> = Object.keys(options).reduce(
    (res, key: string) => ({
      ...res,
      [key]: ScaleHelper.create(options[key]),
    }),
    {},
  );

  return {
    ...scales,
    apply(coord: any, { bandAware, position }: any = {}) {
      return Object.fromEntries(
        Object.entries(coord).map(([label, value]) => [label, scales[label].apply(value, { bandAware, position })]),
      );
    },

    isInRange(coord) {
      return Object.keys(coord).every(label => scales[label].isInRange(coord[label]));
    },
  } as LabeledScales<Record<string, any>>;
};

/** Normalizes the angle so that 0 <= angle < 180.
 * @param {number} angle Angle in degrees.
 * @return {number} the normalized angle with a value of at least 0 and never greater or equal to 180. */
export function normalizeAngle(angle: number) {
  return ((angle % 180) + 180) % 180;
}

/** Calculates the width of the largest horizontal line that fits inside a rectangle that is displayed at an angle.
 * @param {Object} size Width and height of the text in a horizontal position.
 * @param {number} angle Angle in degrees in which the text is displayed.
 * @return {number} The width of the largest horizontal line that fits inside a rectangle that is displayed at an angle.
 */
export const getAngledRectangleWidth = ({ width, height }: Size, angle: number | undefined = 0) => {
  // Ensure angle is >= 0 && < 180
  const normalizedAngle = normalizeAngle(angle);
  const angleRadians = (normalizedAngle * Math.PI) / 180;

  /* Depending on the height and width of the rectangle, we may need to use different formulas to calculate the angled
   * width. This threshold defines when each formula should kick in. */
  const angleThreshold = Math.atan(height / width);

  const angledWidth =
    angleRadians > angleThreshold && angleRadians < Math.PI - angleThreshold
      ? height / Math.sin(angleRadians)
      : width / Math.cos(angleRadians);

  return Math.abs(angledWidth);
};
