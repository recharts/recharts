import { describe, it, expect } from 'vitest';
import {
  getCartesianPosition,
  GetCartesianPositionOptions,
  CartesianPosition,
} from '../../src/cartesian/getCartesianPosition';
import { CartesianViewBoxRequired, TrapezoidViewBox } from '../../src/util/types';

describe('useCartesianPosition', () => {
  describe('in a rectangle', () => {
    const viewBox: TrapezoidViewBox = {
      x: 100,
      y: 50,
      width: 200,
      upperWidth: 200,
      lowerWidth: 200,
      height: 100,
    };
    const offset = 5;

    it('should return correct attributes for position "insideTop"', () => {
      const options: GetCartesianPositionOptions = {
        position: 'insideTop',
        offset: 0,
        viewBox,
      };
      const actual = getCartesianPosition(options);
      const expected: CartesianPosition = {
        x: 200,
        y: 50,
        horizontalAnchor: 'middle',
        verticalAnchor: 'start',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "top"', () => {
      const options: GetCartesianPositionOptions = {
        position: 'top',
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(options);
      const expected: CartesianPosition = { x: 200, y: 45, horizontalAnchor: 'middle', verticalAnchor: 'end' };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "bottom"', () => {
      const options: GetCartesianPositionOptions = {
        position: 'bottom',
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(options);
      const expected: CartesianPosition = { x: 200, y: 155, horizontalAnchor: 'middle', verticalAnchor: 'start' };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "left"', () => {
      const options: GetCartesianPositionOptions = {
        position: 'left',
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(options);
      const expected: CartesianPosition = { x: 95, y: 100, horizontalAnchor: 'end', verticalAnchor: 'middle' };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "right"', () => {
      const options: GetCartesianPositionOptions = {
        position: 'right',
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(options);
      const expected: CartesianPosition = { x: 305, y: 100, horizontalAnchor: 'start', verticalAnchor: 'middle' };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideLeft"', () => {
      const options: GetCartesianPositionOptions = {
        position: 'insideLeft',
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(options);
      const expected: CartesianPosition = {
        x: 105,
        y: 100,
        horizontalAnchor: 'start',
        verticalAnchor: 'middle',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideRight"', () => {
      const options: GetCartesianPositionOptions = {
        position: 'insideRight',
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(options);
      const expected: CartesianPosition = {
        x: 295,
        y: 100,
        horizontalAnchor: 'end',
        verticalAnchor: 'middle',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideBottom"', () => {
      const options: GetCartesianPositionOptions = {
        position: 'insideBottom',
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(options);
      const expected: CartesianPosition = {
        x: 200,
        y: 145,
        horizontalAnchor: 'middle',
        verticalAnchor: 'end',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideTopLeft"', () => {
      const options: GetCartesianPositionOptions = {
        position: 'insideTopLeft',
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(options);
      const expected: CartesianPosition = {
        x: 105,
        y: 55,
        horizontalAnchor: 'start',
        verticalAnchor: 'start',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideTopRight"', () => {
      const options: GetCartesianPositionOptions = {
        position: 'insideTopRight',
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(options);
      const expected: CartesianPosition = {
        x: 295,
        y: 55,
        horizontalAnchor: 'end',
        verticalAnchor: 'start',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideBottomLeft"', () => {
      const options: GetCartesianPositionOptions = {
        position: 'insideBottomLeft',
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(options);
      const expected: CartesianPosition = {
        x: 105,
        y: 145,
        horizontalAnchor: 'start',
        verticalAnchor: 'end',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideBottomRight"', () => {
      const options: GetCartesianPositionOptions = {
        position: 'insideBottomRight',
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(options);
      const expected: CartesianPosition = {
        x: 295,
        y: 145,
        horizontalAnchor: 'end',
        verticalAnchor: 'end',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position as an object with number coordinates', () => {
      const options: GetCartesianPositionOptions = {
        position: { x: 10, y: 20 },
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(options);
      const expected: CartesianPosition = { x: 110, y: 70, horizontalAnchor: 'end', verticalAnchor: 'end' };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position as an object with percentage coordinates', () => {
      const options: GetCartesianPositionOptions = {
        position: { x: '50%', y: '50%' },
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(options);
      const expected: CartesianPosition = {
        x: 200,
        y: 100,
        horizontalAnchor: 'end',
        verticalAnchor: 'end',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "center"', () => {
      const options: GetCartesianPositionOptions = {
        position: 'center',
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(options);
      const expected: CartesianPosition = {
        x: 200,
        y: 100,
        horizontalAnchor: 'middle',
        verticalAnchor: 'middle',
      };
      expect(actual).toEqual(expected);
    });
  });

  describe('in regular Funnel (wide on top, narrow on bottom)', () => {
    const viewBox: TrapezoidViewBox = { x: 100, y: 50, upperWidth: 200, lowerWidth: 150, width: 175, height: 100 };
    const offset = 5;

    it('should return correct attributes for position "insideTop"', () => {
      const options: GetCartesianPositionOptions = {
        position: 'insideTop',
        offset: 0,
        viewBox,
      };
      const actual = getCartesianPosition(options);
      const expected: CartesianPosition = {
        x: 200,
        y: 50,
        horizontalAnchor: 'middle',
        verticalAnchor: 'start',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "top"', () => {
      const options: GetCartesianPositionOptions = {
        position: 'top',
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(options);
      const expected: CartesianPosition = { x: 200, y: 45, horizontalAnchor: 'middle', verticalAnchor: 'end' };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "bottom"', () => {
      const options: GetCartesianPositionOptions = {
        position: 'bottom',
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(options);
      const expected: CartesianPosition = { x: 200, y: 155, horizontalAnchor: 'middle', verticalAnchor: 'start' };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "left"', () => {
      const options: GetCartesianPositionOptions = {
        position: 'left',
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(options);
      const expected: CartesianPosition = { x: 107.5, y: 100, horizontalAnchor: 'end', verticalAnchor: 'middle' };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "right"', () => {
      const options: GetCartesianPositionOptions = {
        position: 'right',
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(options);
      const expected: CartesianPosition = {
        x: 292.5,
        y: 100,
        horizontalAnchor: 'start',
        verticalAnchor: 'middle',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideLeft"', () => {
      const options: GetCartesianPositionOptions = {
        position: 'insideLeft',
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(options);
      const expected: CartesianPosition = {
        x: 117.5,
        y: 100,
        horizontalAnchor: 'start',
        verticalAnchor: 'middle',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideRight"', () => {
      const options: GetCartesianPositionOptions = {
        position: 'insideRight',
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(options);
      const expected: CartesianPosition = {
        x: 282.5,
        y: 100,
        horizontalAnchor: 'end',
        verticalAnchor: 'middle',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideBottom"', () => {
      const options: GetCartesianPositionOptions = {
        position: 'insideBottom',
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(options);
      const expected: CartesianPosition = {
        x: 200,
        y: 145,
        horizontalAnchor: 'middle',
        verticalAnchor: 'end',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideTopLeft"', () => {
      const options: GetCartesianPositionOptions = {
        position: 'insideTopLeft',
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(options);
      const expected: CartesianPosition = {
        x: 105,
        y: 55,
        horizontalAnchor: 'start',
        verticalAnchor: 'start',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideTopRight"', () => {
      const options: GetCartesianPositionOptions = {
        position: 'insideTopRight',
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(options);
      const expected: CartesianPosition = {
        x: 295,
        y: 55,
        horizontalAnchor: 'end',
        verticalAnchor: 'start',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideBottomLeft"', () => {
      const options: GetCartesianPositionOptions = {
        position: 'insideBottomLeft',
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(options);
      const expected: CartesianPosition = {
        x: 130,
        y: 145,
        horizontalAnchor: 'start',
        verticalAnchor: 'end',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideBottomRight"', () => {
      const options: GetCartesianPositionOptions = {
        position: 'insideBottomRight',
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(options);
      const expected: CartesianPosition = {
        x: 270,
        y: 145,
        horizontalAnchor: 'end',
        verticalAnchor: 'end',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position as an object with number coordinates', () => {
      const options: GetCartesianPositionOptions = {
        position: { x: 10, y: 20 },
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(options);
      const expected: CartesianPosition = { x: 110, y: 70, horizontalAnchor: 'end', verticalAnchor: 'end' };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position as an object with percentage coordinates', () => {
      const options: GetCartesianPositionOptions = {
        position: { x: '50%', y: '50%' },
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(options);
      const expected: CartesianPosition = {
        x: 187.5,
        y: 100,
        horizontalAnchor: 'end',
        verticalAnchor: 'end',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "center"', () => {
      const options: GetCartesianPositionOptions = {
        position: 'center',
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(options);
      const expected: CartesianPosition = {
        x: 200,
        y: 100,
        horizontalAnchor: 'middle',
        verticalAnchor: 'middle',
      };
      expect(actual).toEqual(expected);
    });
  });

  describe('with negative height', () => {
    const negativeHeightViewBox: TrapezoidViewBox = {
      x: 100,
      y: 150,
      upperWidth: 200,
      lowerWidth: 150,
      width: 175,
      height: -100,
    };
    const offset = 5;

    it('should return correct attributes for position "top"', () => {
      const options: GetCartesianPositionOptions = {
        position: 'top',
        offset,
        viewBox: negativeHeightViewBox,
      };
      const actual = getCartesianPosition(options);
      const expected: CartesianPosition = { x: 200, y: 155, horizontalAnchor: 'middle', verticalAnchor: 'start' };
      expect(actual).toEqual(expected);
    });
  });

  describe('with negative width', () => {
    const negativeWidthViewBox: TrapezoidViewBox = {
      x: 300,
      y: 50,
      upperWidth: -200,
      lowerWidth: -150,
      width: -175,
      height: 100,
    };
    const offset = 5;

    it('should return correct attributes for position "left"', () => {
      const options: GetCartesianPositionOptions = {
        position: 'left',
        offset,
        viewBox: negativeWidthViewBox,
      };
      const actual = getCartesianPosition(options);
      const expected: CartesianPosition = {
        x: 292.5,
        y: 100,
        horizontalAnchor: 'start',
        verticalAnchor: 'middle',
      };
      expect(actual).toEqual(expected);
    });
  });

  describe('with parentViewBox and clamp=true', () => {
    const viewBox: TrapezoidViewBox = {
      x: 100,
      y: 50,
      width: 200,
      upperWidth: 200,
      lowerWidth: 200,
      height: 100,
    };
    const parentViewBox: CartesianViewBoxRequired = { x: 0, y: 0, width: 500, height: 500 };
    const offset = 5;

    it('should return correct attributes for position "top"', () => {
      const options: GetCartesianPositionOptions = {
        position: 'top',
        offset,
        viewBox,
        parentViewBox,
        clamp: true,
      };
      const actual = getCartesianPosition(options);
      const expected: CartesianPosition = {
        x: 200,
        y: 45,
        horizontalAnchor: 'middle',
        verticalAnchor: 'end',
        height: 50,
        width: 200,
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideLeft"', () => {
      const options: GetCartesianPositionOptions = {
        position: 'insideLeft',
        offset,
        viewBox,
        parentViewBox,
        clamp: true,
      };
      const actual = getCartesianPosition(options);

      const expected: CartesianPosition = {
        x: 105,
        y: 100,
        horizontalAnchor: 'start',
        verticalAnchor: 'middle',
        width: 200, // midHeightWidth -> (200+200)/2 = 200
        height: 100,
      };
      expect(actual).toEqual(expected);
    });
  });

  describe('with parentViewBox and clamp=false', () => {
    const viewBox: TrapezoidViewBox = {
      x: 100,
      y: 50,
      width: 200,
      upperWidth: 200,
      lowerWidth: 200,
      height: 100,
    };
    const parentViewBox: CartesianViewBoxRequired = { x: 0, y: 0, width: 500, height: 500 };
    const offset = 5;

    it('should NOT clamp attributes for position "top"', () => {
      const options: GetCartesianPositionOptions = {
        position: 'top',
        offset,
        viewBox,
        parentViewBox,
        clamp: false,
      };
      const actual = getCartesianPosition(options);

      const expected: CartesianPosition = {
        x: 200,
        y: 45,
        horizontalAnchor: 'middle',
        verticalAnchor: 'end',
      };
      expect(actual).toEqual(expected);
    });
  });

  describe('in reversed Funnel (narrow on top, wide on bottom', () => {
    const viewBox: TrapezoidViewBox = { x: 100, y: 50, upperWidth: 150, lowerWidth: 200, width: 175, height: 100 };
    const offset = 5;

    it('should return correct attributes for position "insideTop"', () => {
      const input: GetCartesianPositionOptions = {
        position: 'insideTop',
        offset: 0,
        viewBox,
      };
      const actual = getCartesianPosition(input);
      const expected: CartesianPosition = {
        x: 175,
        y: 50,
        horizontalAnchor: 'middle',
        verticalAnchor: 'start',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "top"', () => {
      const input: GetCartesianPositionOptions = {
        position: 'top',
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(input);
      const expected: CartesianPosition = { x: 175, y: 45, horizontalAnchor: 'middle', verticalAnchor: 'end' };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "bottom"', () => {
      const input: GetCartesianPositionOptions = {
        position: 'bottom',
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(input);
      const expected: CartesianPosition = { x: 175, y: 155, horizontalAnchor: 'middle', verticalAnchor: 'start' };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "left"', () => {
      const input: GetCartesianPositionOptions = {
        position: 'left',
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(input);
      const expected: CartesianPosition = { x: 82.5, y: 100, horizontalAnchor: 'end', verticalAnchor: 'middle' };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "right"', () => {
      const input: GetCartesianPositionOptions = {
        position: 'right',
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(input);
      const expected: CartesianPosition = { x: 267.5, y: 100, horizontalAnchor: 'start', verticalAnchor: 'middle' };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideLeft"', () => {
      const input: GetCartesianPositionOptions = {
        position: 'insideLeft',
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(input);
      const expected: CartesianPosition = {
        x: 92.5,
        y: 100,
        horizontalAnchor: 'start',
        verticalAnchor: 'middle',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideRight"', () => {
      const input: GetCartesianPositionOptions = {
        position: 'insideRight',
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(input);
      const expected: CartesianPosition = {
        x: 257.5,
        y: 100,
        horizontalAnchor: 'end',
        verticalAnchor: 'middle',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideBottom"', () => {
      const input: GetCartesianPositionOptions = {
        position: 'insideBottom',
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(input);
      const expected: CartesianPosition = {
        x: 175,
        y: 145,
        horizontalAnchor: 'middle',
        verticalAnchor: 'end',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideTopLeft"', () => {
      const input: GetCartesianPositionOptions = {
        position: 'insideTopLeft',
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(input);
      const expected: CartesianPosition = {
        x: 105,
        y: 55,
        horizontalAnchor: 'start',
        verticalAnchor: 'start',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideTopRight"', () => {
      const input: GetCartesianPositionOptions = {
        position: 'insideTopRight',
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(input);
      const expected: CartesianPosition = {
        x: 245,
        y: 55,
        horizontalAnchor: 'end',
        verticalAnchor: 'start',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideBottomLeft"', () => {
      const input: GetCartesianPositionOptions = {
        position: 'insideBottomLeft',
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(input);
      const expected: CartesianPosition = {
        x: 80,
        y: 145,
        horizontalAnchor: 'start',
        verticalAnchor: 'end',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideBottomRight"', () => {
      const input: GetCartesianPositionOptions = {
        position: 'insideBottomRight',
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(input);
      const expected: CartesianPosition = {
        x: 270,
        y: 145,
        horizontalAnchor: 'end',
        verticalAnchor: 'end',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position as an object with number coordinates', () => {
      const input: GetCartesianPositionOptions = {
        position: { x: 10, y: 20 },
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(input);
      const expected: CartesianPosition = { x: 110, y: 70, horizontalAnchor: 'end', verticalAnchor: 'end' };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position as an object with percentage coordinates', () => {
      const input: GetCartesianPositionOptions = {
        position: { x: '50%', y: '50%' },
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(input);
      const expected: CartesianPosition = {
        x: 187.5,
        y: 100,
        horizontalAnchor: 'end',
        verticalAnchor: 'end',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "center"', () => {
      const input: GetCartesianPositionOptions = {
        position: 'center',
        offset,
        viewBox,
      };
      const actual = getCartesianPosition(input);
      const expected: CartesianPosition = {
        x: 175,
        y: 100,
        horizontalAnchor: 'middle',
        verticalAnchor: 'middle',
      };
      expect(actual).toEqual(expected);
    });
  });
});
