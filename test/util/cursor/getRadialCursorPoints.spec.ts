import { RadialCursorPoints, getRadialCursorPoints } from '../../../src/util/cursor/getRadialCursorPoints';
import { ChartCoordinate } from '../../../src/util/types';

describe('getRadialCursorPoints', () => {
  it('should return undefineds and NaNs when passed trivial ChartCoordinate', () => {
    const activeCoordinate: ChartCoordinate = {
      x: 0,
      y: 0,
    };
    const result = getRadialCursorPoints(activeCoordinate);
    const expected: RadialCursorPoints = {
      points: [
        { x: NaN, y: NaN },
        { x: NaN, y: NaN },
      ],
      cx: undefined,
      cy: undefined,
      radius: undefined,
      startAngle: undefined,
      endAngle: undefined,
    };
    expect(result).toEqual(expected);
  });

  it('should add cartesian startPoint and endPoint to activeCoordinate', () => {
    const activeCoordinate: ChartCoordinate = {
      x: 0,
      y: 0,
      cx: 10,
      cy: 15,
      radius: 5,
      startAngle: 30,
      endAngle: 60,
    };
    const result = getRadialCursorPoints(activeCoordinate);
    const expected: RadialCursorPoints = {
      points: [
        { x: 14.330127018922195, y: 12.5 },
        { x: 12.5, y: 10.669872981077807 },
      ],
      cx: 10,
      cy: 15,
      radius: 5,
      startAngle: 30,
      endAngle: 60,
    };
    expect(result).toEqual(expected);
  });
});
