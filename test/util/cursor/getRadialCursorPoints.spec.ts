import { RadialCursorPoints, getRadialCursorPoints } from '../../../src/util/cursor/getRadialCursorPoints';
import { PolarCoordinate } from '../../../src/util/types';

describe('getRadialCursorPoints', () => {
  it('should add startPoint and endPoint to activeCoordinate', () => {
    const activeCoordinate: PolarCoordinate = {
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
