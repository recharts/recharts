import _ from 'lodash';
import { getTicksOfScale, parseScale, checkDomainOfScale, getBandSizeOfAxis } from './ChartUtils';
import { Coordinate, AxisType } from './types';

/**
 * Calculate the scale function, position, width, height of axes
 * @param  {Object} props     Latest props
 * @param  {Object} axisMap   The configuration of axes
 * @param  {Object} offset    The offset of main part in the svg element
 * @param  {String} axisType  The type of axes, x-axis or y-axis
 * @param  {String} chartName The name of chart
 * @return {Object} Configuration
 */
export const formatAxisMap = (props: any, axisMap: any, offset: any, axisType: AxisType, chartName: string) => {
  const { width, height, layout } = props;
  const ids = Object.keys(axisMap);
  const steps: Record<string, any> = {
    left: offset.left,
    leftMirror: offset.left,
    right: width - offset.right,
    rightMirror: width - offset.right,
    top: offset.top,
    topMirror: offset.top,
    bottom: height - offset.bottom,
    bottomMirror: height - offset.bottom,
  };

  return ids.reduce((result, id) => {
    const axis = axisMap[id];
    const { orientation, domain, padding = {}, mirror, reversed } = axis;
    const offsetKey = `${orientation}${mirror ? 'Mirror' : ''}`;

    let range, x, y, needSpace;

    if (axisType === 'xAxis') {
      range = [offset.left + (padding.left || 0), offset.left + offset.width - (padding.right || 0)];
    } else if (axisType === 'yAxis') {
      range =
        layout === 'horizontal'
          ? [offset.top + offset.height - (padding.bottom || 0), offset.top + (padding.top || 0)]
          : [offset.top + (padding.top || 0), offset.top + offset.height - (padding.bottom || 0)];
    } else {
      ({ range } = axis);
    }

    if (reversed) {
      range = [range[1], range[0]];
    }

    const { scale, realScaleType } = parseScale(axis, chartName);
    scale.domain(domain).range(range);
    checkDomainOfScale(scale);
    const ticks = getTicksOfScale(scale, { ...axis, realScaleType });

    if (axisType === 'xAxis') {
      needSpace = (orientation === 'top' && !mirror) || (orientation === 'bottom' && mirror);
      x = offset.left;
      y = steps[offsetKey] - needSpace * axis.height;
    } else if (axisType === 'yAxis') {
      needSpace = (orientation === 'left' && !mirror) || (orientation === 'right' && mirror);
      x = steps[offsetKey] - needSpace * axis.width;
      y = offset.top;
    }

    const finalAxis = {
      ...axis,
      ...ticks,
      realScaleType,
      x,
      y,
      scale,
      width: axisType === 'xAxis' ? offset.width : axis.width,
      height: axisType === 'yAxis' ? offset.height : axis.height,
    };

    finalAxis.bandSize = getBandSizeOfAxis(finalAxis, ticks as any);

    if (!axis.hide && axisType === 'xAxis') {
      steps[offsetKey] += (needSpace ? -1 : 1) * finalAxis.height;
    } else if (!axis.hide) {
      steps[offsetKey] += (needSpace ? -1 : 1) * finalAxis.width;
    }

    return { ...result, [id]: finalAxis };
  }, {});
};

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
    apply(coord: any, { bandAware }: any = {}) {
      return _.mapValues(coord, (value, label) => scales[label].apply(value, { bandAware }));
    },

    isInRange(coord: any) {
      return _.every(coord, (value, label) => scales[label].isInRange(value));
    },
  } as LabeledScales<Record<string, any>>;
};
