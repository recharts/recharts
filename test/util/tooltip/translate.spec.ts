import { Dimension2D, getTooltipTranslateXY } from '../../../src/util/tooltip/translate';

const dimensions: ReadonlyArray<Dimension2D> = ['x', 'y'];

describe.each(dimensions)('getTooltipTranslateXY dimension %s', dimension => {
  describe('when position is defined', () => {
    it('should return position', () => {
      const result = getTooltipTranslateXY({
        key: dimension,
        position: { [dimension]: 8 },
        allowEscapeViewBox: {},
        coordinate: {},
        offsetTopLeft: 100,
        reverseDirection: {},
        tooltipDimension: 9,
        viewBox: {},
        viewBoxDimension: 4,
      });
      expect(result).toBe(8);
    });
  });

  describe('when allowEscapeViewBox: true', () => {
    it('should return number outside of viewBox', () => {
      const result = getTooltipTranslateXY({
        key: dimension,
        position: {},
        allowEscapeViewBox: { [dimension]: true },
        coordinate: { [dimension]: 150 },
        offsetTopLeft: 3,
        reverseDirection: {},
        tooltipDimension: 15,
        viewBox: {},
        viewBoxDimension: 4,
      });
      expect(result).toBe(153);
    });

    it('should return number even outside of viewBox when reversed', () => {
      const result = getTooltipTranslateXY({
        key: dimension,
        position: {},
        allowEscapeViewBox: { [dimension]: true },
        coordinate: { [dimension]: 150 },
        offsetTopLeft: 3,
        reverseDirection: { [dimension]: true },
        tooltipDimension: 15,
        viewBox: {},
        viewBoxDimension: 4,
      });
      expect(result).toBe(132);
    });

    it('should return Y even outside of viewBox when reversed', () => {
      const result = getTooltipTranslateXY({
        key: 'y',
        position: { x: 6 },
        allowEscapeViewBox: { y: true },
        coordinate: { y: 150 },
        offsetTopLeft: 3,
        reverseDirection: { y: true },
        tooltipDimension: 15,
        viewBox: {},
        viewBoxDimension: 4,
      });
      expect(result).toBe(132);
    });
  });

  describe('when reverseDirection: true', () => {
    it('should return viewBox.dimension if it is larger', () => {
      const result = getTooltipTranslateXY({
        key: dimension,
        position: {},
        allowEscapeViewBox: { [dimension]: false },
        coordinate: { [dimension]: 150 },
        offsetTopLeft: 3,
        reverseDirection: { [dimension]: true },
        tooltipDimension: 15,
        viewBox: { [dimension]: 99999 },
        viewBoxDimension: 4,
      });
      expect(result).toBe(99999);
    });

    it('should return calculated number if viewBox is smaller', () => {
      const result = getTooltipTranslateXY({
        key: dimension,
        position: {},
        allowEscapeViewBox: { [dimension]: false },
        coordinate: { [dimension]: 150 },
        offsetTopLeft: 3,
        reverseDirection: { [dimension]: true },
        tooltipDimension: 15,
        viewBox: { [dimension]: 9 },
        viewBoxDimension: 4,
      });
      expect(result).toBe(132);
    });
  });

  describe('when tooltip fits inside viewBox', () => {
    it('should return calculated translate', () => {
      const result = getTooltipTranslateXY({
        key: dimension,
        position: {},
        allowEscapeViewBox: { [dimension]: false },
        coordinate: { [dimension]: 150 },
        offsetTopLeft: 3,
        reverseDirection: { [dimension]: false },
        tooltipDimension: 15,
        viewBox: { [dimension]: 10 },
        viewBoxDimension: 400,
      });
      expect(result).toBe(153);
    });
  });

  describe('when tooltip is outside the viewBox', () => {
    it('should try to fit translate inside the viewBox', () => {
      const result = getTooltipTranslateXY({
        key: dimension,
        position: {},
        allowEscapeViewBox: { [dimension]: false },
        coordinate: { [dimension]: 190 },
        offsetTopLeft: 3,
        reverseDirection: { [dimension]: false },
        tooltipDimension: 15,
        viewBox: { [dimension]: 9 },
        viewBoxDimension: 60,
      });
      expect(result).toBe(172);
    });
  });
});
