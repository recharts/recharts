import { describe, it, expect } from 'vitest';

import {
  CartesianLabelPositionInput,
  getAttrsOfCartesianLabel,
  LabelPositionAttributes,
} from '../../src/component/Label';
import { CartesianViewBoxRequired, TrapezoidViewBox } from '../../src/util/types';

describe('getAttrsOfCartesianLabel', () => {
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
      const input: CartesianLabelPositionInput = {
        position: 'insideTop',
        offset: 0,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = {
        x: 200,
        y: 50,
        textAnchor: 'middle',
        verticalAnchor: 'start',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "top"', () => {
      const input: CartesianLabelPositionInput = {
        position: 'top',
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = { x: 200, y: 45, textAnchor: 'middle', verticalAnchor: 'end' };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "bottom"', () => {
      const input: CartesianLabelPositionInput = {
        position: 'bottom',
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = { x: 200, y: 155, textAnchor: 'middle', verticalAnchor: 'start' };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "left"', () => {
      const input: CartesianLabelPositionInput = {
        position: 'left',
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = { x: 107.5, y: 100, textAnchor: 'end', verticalAnchor: 'middle' };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "right"', () => {
      const input: CartesianLabelPositionInput = {
        position: 'right',
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = { x: 292.5, y: 100, textAnchor: 'start', verticalAnchor: 'middle' };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideLeft"', () => {
      const input: CartesianLabelPositionInput = {
        position: 'insideLeft',
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = {
        x: 115,
        y: 100,
        textAnchor: 'start',
        verticalAnchor: 'middle',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideRight"', () => {
      const input: CartesianLabelPositionInput = {
        position: 'insideRight',
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = {
        x: 285,
        y: 100,
        textAnchor: 'end',
        verticalAnchor: 'middle',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideBottom"', () => {
      const input: CartesianLabelPositionInput = {
        position: 'insideBottom',
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = {
        x: 200,
        y: 145,
        textAnchor: 'middle',
        verticalAnchor: 'end',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideTopLeft"', () => {
      const input: CartesianLabelPositionInput = {
        position: 'insideTopLeft',
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = {
        x: 105,
        y: 55,
        textAnchor: 'start',
        verticalAnchor: 'start',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideTopRight"', () => {
      const input: CartesianLabelPositionInput = {
        position: 'insideTopRight',
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = {
        x: 295,
        y: 55,
        textAnchor: 'end',
        verticalAnchor: 'start',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideBottomLeft"', () => {
      const input: CartesianLabelPositionInput = {
        position: 'insideBottomLeft',
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = {
        x: 130,
        y: 145,
        textAnchor: 'start',
        verticalAnchor: 'end',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideBottomRight"', () => {
      const input: CartesianLabelPositionInput = {
        position: 'insideBottomRight',
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = {
        x: 270,
        y: 145,
        textAnchor: 'end',
        verticalAnchor: 'end',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position as an object with number coordinates', () => {
      const input: CartesianLabelPositionInput = {
        position: { x: 10, y: 20 },
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = { x: 110, y: 70, textAnchor: 'end', verticalAnchor: 'end' };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position as an object with percentage coordinates', () => {
      const input: CartesianLabelPositionInput = {
        position: { x: '50%', y: '50%' },
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = {
        x: 187.5,
        y: 100,
        textAnchor: 'end',
        verticalAnchor: 'end',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "center"', () => {
      const input: CartesianLabelPositionInput = {
        position: 'center',
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = {
        x: 200,
        y: 100,
        textAnchor: 'middle',
        verticalAnchor: 'middle',
      };
      expect(actual).toEqual(expected);
    });
  });

  describe('in regular Funnel (wide on top, narrow on bottom', () => {
    const viewBox: TrapezoidViewBox = { x: 100, y: 50, upperWidth: 200, lowerWidth: 150, width: 175, height: 100 };
    const offset = 5;

    it('should return correct attributes for position "insideTop"', () => {
      const input: CartesianLabelPositionInput = {
        position: 'insideTop',
        offset: 0,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = {
        x: 200,
        y: 50,
        textAnchor: 'middle',
        verticalAnchor: 'start',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "top"', () => {
      const input: CartesianLabelPositionInput = {
        position: 'top',
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = { x: 200, y: 45, textAnchor: 'middle', verticalAnchor: 'end' };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "bottom"', () => {
      const input: CartesianLabelPositionInput = {
        position: 'bottom',
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = { x: 200, y: 155, textAnchor: 'middle', verticalAnchor: 'start' };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "left"', () => {
      const input: CartesianLabelPositionInput = {
        position: 'left',
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = { x: 107.5, y: 100, textAnchor: 'end', verticalAnchor: 'middle' };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "right"', () => {
      const input: CartesianLabelPositionInput = {
        position: 'right',
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = { x: 292.5, y: 100, textAnchor: 'start', verticalAnchor: 'middle' };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideLeft"', () => {
      const input: CartesianLabelPositionInput = {
        position: 'insideLeft',
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = {
        x: 117.5,
        y: 100,
        textAnchor: 'start',
        verticalAnchor: 'middle',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideRight"', () => {
      const input: CartesianLabelPositionInput = {
        position: 'insideRight',
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = {
        x: 282.5,
        y: 100,
        textAnchor: 'end',
        verticalAnchor: 'middle',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideBottom"', () => {
      const input: CartesianLabelPositionInput = {
        position: 'insideBottom',
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = {
        x: 200,
        y: 145,
        textAnchor: 'middle',
        verticalAnchor: 'end',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideTopLeft"', () => {
      const input: CartesianLabelPositionInput = {
        position: 'insideTopLeft',
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = {
        x: 105,
        y: 55,
        textAnchor: 'start',
        verticalAnchor: 'start',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideTopRight"', () => {
      const input: CartesianLabelPositionInput = {
        position: 'insideTopRight',
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = {
        x: 295,
        y: 55,
        textAnchor: 'end',
        verticalAnchor: 'start',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideBottomLeft"', () => {
      const input: CartesianLabelPositionInput = {
        position: 'insideBottomLeft',
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = {
        x: 130,
        y: 145,
        textAnchor: 'start',
        verticalAnchor: 'end',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideBottomRight"', () => {
      const input: CartesianLabelPositionInput = {
        position: 'insideBottomRight',
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = {
        x: 270,
        y: 145,
        textAnchor: 'end',
        verticalAnchor: 'end',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position as an object with number coordinates', () => {
      const input: CartesianLabelPositionInput = {
        position: { x: 10, y: 20 },
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = { x: 110, y: 70, textAnchor: 'end', verticalAnchor: 'end' };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position as an object with percentage coordinates', () => {
      const input: CartesianLabelPositionInput = {
        position: { x: '50%', y: '50%' },
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = {
        x: 187.5,
        y: 100,
        textAnchor: 'end',
        verticalAnchor: 'end',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "center"', () => {
      const input: CartesianLabelPositionInput = {
        position: 'center',
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = {
        x: 200,
        y: 100,
        textAnchor: 'middle',
        verticalAnchor: 'middle',
      };
      expect(actual).toEqual(expected);
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

      it('should return correct attributes for position "top"', () => {
        const input: CartesianLabelPositionInput = {
          position: 'top',
          offset,
        };
        const actual = getAttrsOfCartesianLabel(input, negativeHeightViewBox);
        const expected: LabelPositionAttributes = { x: 200, y: 155, textAnchor: 'middle', verticalAnchor: 'start' };
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

      it('should return correct attributes for position "left"', () => {
        const input: CartesianLabelPositionInput = {
          position: 'left',
          offset,
        };
        const actual = getAttrsOfCartesianLabel(input, negativeWidthViewBox);
        const expected: LabelPositionAttributes = { x: 292.5, y: 100, textAnchor: 'start', verticalAnchor: 'middle' };
        expect(actual).toEqual(expected);
      });
    });

    describe('with parentViewBox', () => {
      const parentViewBox: CartesianViewBoxRequired = { x: 0, y: 0, width: 500, height: 500 };

      it('should return correct attributes for position "top"', () => {
        const input: CartesianLabelPositionInput = {
          position: 'top',
          offset,
          parentViewBox,
        };
        const actual = getAttrsOfCartesianLabel(input, viewBox);
        const expected: LabelPositionAttributes = {
          x: 200,
          y: 45,
          textAnchor: 'middle',
          verticalAnchor: 'end',
          height: 50,
          width: 200,
        };
        expect(actual).toEqual(expected);
      });

      it('should return correct attributes for position "insideLeft"', () => {
        const input: CartesianLabelPositionInput = {
          position: 'insideLeft',
          offset,
          parentViewBox,
        };
        const actual = getAttrsOfCartesianLabel(input, viewBox);
        const expected: LabelPositionAttributes = {
          x: 117.5,
          y: 100,
          textAnchor: 'start',
          verticalAnchor: 'middle',
          width: 175,
          height: 100,
        };
        expect(actual).toEqual(expected);
      });
    });
  });

  describe('in reversed Funnel (narrow on top, wide on bottom', () => {
    const viewBox: TrapezoidViewBox = { x: 100, y: 50, upperWidth: 150, lowerWidth: 200, width: 175, height: 100 };
    const offset = 5;

    it('should return correct attributes for position "insideTop"', () => {
      const input: CartesianLabelPositionInput = {
        position: 'insideTop',
        offset: 0,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = {
        x: 175,
        y: 50,
        textAnchor: 'middle',
        verticalAnchor: 'start',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "top"', () => {
      const input: CartesianLabelPositionInput = {
        position: 'top',
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = { x: 175, y: 45, textAnchor: 'middle', verticalAnchor: 'end' };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "bottom"', () => {
      const input: CartesianLabelPositionInput = {
        position: 'bottom',
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = { x: 175, y: 155, textAnchor: 'middle', verticalAnchor: 'start' };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "left"', () => {
      const input: CartesianLabelPositionInput = {
        position: 'left',
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = { x: 82.5, y: 100, textAnchor: 'end', verticalAnchor: 'middle' };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "right"', () => {
      const input: CartesianLabelPositionInput = {
        position: 'right',
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = { x: 267.5, y: 100, textAnchor: 'start', verticalAnchor: 'middle' };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideLeft"', () => {
      const input: CartesianLabelPositionInput = {
        position: 'insideLeft',
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = {
        x: 92.5,
        y: 100,
        textAnchor: 'start',
        verticalAnchor: 'middle',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideRight"', () => {
      const input: CartesianLabelPositionInput = {
        position: 'insideRight',
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = {
        x: 257.5,
        y: 100,
        textAnchor: 'end',
        verticalAnchor: 'middle',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideBottom"', () => {
      const input: CartesianLabelPositionInput = {
        position: 'insideBottom',
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = {
        x: 175,
        y: 145,
        textAnchor: 'middle',
        verticalAnchor: 'end',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideTopLeft"', () => {
      const input: CartesianLabelPositionInput = {
        position: 'insideTopLeft',
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = {
        x: 105,
        y: 55,
        textAnchor: 'start',
        verticalAnchor: 'start',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideTopRight"', () => {
      const input: CartesianLabelPositionInput = {
        position: 'insideTopRight',
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = {
        x: 245,
        y: 55,
        textAnchor: 'end',
        verticalAnchor: 'start',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideBottomLeft"', () => {
      const input: CartesianLabelPositionInput = {
        position: 'insideBottomLeft',
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = {
        x: 80,
        y: 145,
        textAnchor: 'start',
        verticalAnchor: 'end',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "insideBottomRight"', () => {
      const input: CartesianLabelPositionInput = {
        position: 'insideBottomRight',
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = {
        x: 270,
        y: 145,
        textAnchor: 'end',
        verticalAnchor: 'end',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position as an object with number coordinates', () => {
      const input: CartesianLabelPositionInput = {
        position: { x: 10, y: 20 },
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = { x: 110, y: 70, textAnchor: 'end', verticalAnchor: 'end' };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position as an object with percentage coordinates', () => {
      const input: CartesianLabelPositionInput = {
        position: { x: '50%', y: '50%' },
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = {
        x: 187.5,
        y: 100,
        textAnchor: 'end',
        verticalAnchor: 'end',
      };
      expect(actual).toEqual(expected);
    });

    it('should return correct attributes for position "center"', () => {
      const input: CartesianLabelPositionInput = {
        position: 'center',
        offset,
      };
      const actual = getAttrsOfCartesianLabel(input, viewBox);
      const expected: LabelPositionAttributes = {
        x: 175,
        y: 100,
        textAnchor: 'middle',
        verticalAnchor: 'middle',
      };
      expect(actual).toEqual(expected);
    });
  });
});
