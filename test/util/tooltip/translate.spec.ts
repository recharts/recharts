import {
  Dimension2D,
  getTooltipCSSClassName,
  getTooltipTranslate,
  getTooltipTranslateXY,
  getTransformStyle,
} from '../../../src/util/tooltip/translate';

const dimensions: ReadonlyArray<Dimension2D> = ['x', 'y'];

describe.each(dimensions)('getTooltipTranslateXY dimension %s', dimension => {
  describe('when position is defined', () => {
    it('should return position', () => {
      const result = getTooltipTranslateXY({
        allowEscapeViewBox: {},
        coordinate: { x: 1, y: 2 },
        key: dimension,
        offsetTopLeft: 100,
        position: { [dimension]: 8 },
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
        allowEscapeViewBox: { [dimension]: true },
        coordinate: { x: 1, y: 2, [dimension]: 150 },
        key: dimension,
        offsetTopLeft: 3,
        position: {},
        reverseDirection: {},
        tooltipDimension: 15,
        viewBox: {},
        viewBoxDimension: 4,
      });
      expect(result).toBe(153);
    });

    it('should return number even outside of viewBox when reversed', () => {
      const result = getTooltipTranslateXY({
        allowEscapeViewBox: { [dimension]: true },
        coordinate: { x: 1, y: 2, [dimension]: 150 },
        key: dimension,
        offsetTopLeft: 3,
        position: {},
        reverseDirection: { [dimension]: true },
        tooltipDimension: 15,
        viewBox: {},
        viewBoxDimension: 4,
      });
      expect(result).toBe(132);
    });

    it('should return number outside of viewBox even when offsetTopLeft is negative', () => {
      const result = getTooltipTranslateXY({
        allowEscapeViewBox: { [dimension]: true },
        coordinate: { x: 1, y: 2, [dimension]: 900 },
        key: dimension,
        offsetTopLeft: -35,
        position: {},
        reverseDirection: { [dimension]: false },
        tooltipDimension: 70,
        viewBox: { [dimension]: 65 },
        viewBoxDimension: 800,
      });
      expect(result).toBe(865);
    });

    it('should return number even outside of viewBox when reversed', () => {
      const result = getTooltipTranslateXY({
        allowEscapeViewBox: { [dimension]: true },
        coordinate: { x: 1, y: 2, [dimension]: 150 },
        key: dimension,
        offsetTopLeft: 3,
        position: {},
        reverseDirection: { [dimension]: true },
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
        allowEscapeViewBox: { [dimension]: false },
        coordinate: { x: 1, y: 2, [dimension]: 150 },
        key: dimension,
        offsetTopLeft: 3,
        position: {},
        reverseDirection: { [dimension]: true },
        tooltipDimension: 15,
        viewBox: { [dimension]: 99999 },
        viewBoxDimension: 4,
      });
      expect(result).toBe(99999);
    });

    it('should return calculated number if viewBox is smaller', () => {
      const result = getTooltipTranslateXY({
        allowEscapeViewBox: { [dimension]: false },
        coordinate: { x: 1, y: 2, [dimension]: 150 },
        key: dimension,
        offsetTopLeft: 3,
        position: {},
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
        allowEscapeViewBox: { [dimension]: false },
        coordinate: { x: 1, y: 2, [dimension]: 150 },
        key: dimension,
        offsetTopLeft: 3,
        position: {},
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
        allowEscapeViewBox: { [dimension]: false },
        coordinate: { x: 1, y: 2, [dimension]: 190 },
        key: dimension,
        offsetTopLeft: 3,
        position: {},
        reverseDirection: { [dimension]: false },
        tooltipDimension: 15,
        viewBox: { [dimension]: 9 },
        viewBoxDimension: 60,
      });
      expect(result).toBe(172);
    });
  });

  describe('when tooltip has negative offset', () => {
    it('should try to fit translate inside the viewBox', () => {
      const result = getTooltipTranslateXY({
        allowEscapeViewBox: { [dimension]: false },
        coordinate: { x: 1, y: 2, [dimension]: 900 },
        key: dimension,
        offsetTopLeft: -35,
        position: {},
        reverseDirection: { [dimension]: false },
        tooltipDimension: 70,
        viewBox: { [dimension]: 65 },
        viewBoxDimension: 800,
      });
      expect(result).toBe(830);
    });
  });
});

describe('getTranslateTransform', () => {
  describe('with translate3d', () => {
    it('should generate transform string with prefixes', () => {
      const result = getTransformStyle({
        translateX: 7,
        translateY: 18,
        useTranslate3d: true,
      });
      const expected = {
        transform: 'translate3d(7px, 18px, 0)',
      };
      expect(result).toEqual(expected);
    });
  });
  describe('without translate3d', () => {
    it('should generate transform string with prefixes', () => {
      const result = getTransformStyle({
        translateX: 7,
        translateY: 18,
        useTranslate3d: false,
      });
      const expected = {
        transform: 'translate(7px, 18px)',
      };
      expect(result).toEqual(expected);
    });
  });
});

describe('getTooltipCSSClassName', () => {
  it('should return only base class if nothing is defined', () => {
    const result = getTooltipCSSClassName({
      coordinate: undefined,
      translateX: undefined,
      translateY: undefined,
    });
    const expected = 'recharts-tooltip-wrapper';
    expect(result).toEqual(expected);
  });
  it('should add `right` if translateX is bigger than coordinate.x', () => {
    const result = getTooltipCSSClassName({
      coordinate: { x: 40 },
      translateX: 85,
      translateY: undefined,
    });
    const expected = 'recharts-tooltip-wrapper recharts-tooltip-wrapper-right';
    expect(result).toEqual(expected);
  });
  it('should add `left` if translateX is smaller than coordinate.x', () => {
    const result = getTooltipCSSClassName({
      coordinate: { x: 40 },
      translateX: 15,
      translateY: undefined,
    });
    const expected = 'recharts-tooltip-wrapper recharts-tooltip-wrapper-left';
    expect(result).toEqual(expected);
  });
  it('should add `bottom` if translateY is bigger than coordinate.y', () => {
    const result = getTooltipCSSClassName({
      coordinate: { y: 40 },
      translateX: 85,
      translateY: 94,
    });
    const expected = 'recharts-tooltip-wrapper recharts-tooltip-wrapper-bottom';
    expect(result).toEqual(expected);
  });
  it('should add `top` if translateY is smaller than coordinate.y', () => {
    const result = getTooltipCSSClassName({
      coordinate: { y: 40 },
      translateX: 15,
      translateY: 9,
    });
    const expected = 'recharts-tooltip-wrapper recharts-tooltip-wrapper-top';
    expect(result).toEqual(expected);
  });
});

describe('getTooltipTranslate', () => {
  it('should hide the tooltip when tooltip box size is negative or zero', () => {
    const expected = { visibility: 'hidden' };
    expect(
      getTooltipTranslate({
        allowEscapeViewBox: {},
        coordinate: { x: 1, y: 2 },
        offsetTopLeft: 0,
        position: {},
        reverseDirection: {},
        tooltipBox: { height: 0, width: 100 },
        useTranslate3d: false,
        viewBox: {},
      }).cssProperties,
    ).toEqual(expected);
    expect(
      getTooltipTranslate({
        allowEscapeViewBox: {},
        coordinate: { x: 1, y: 2 },
        offsetTopLeft: 0,
        position: {},
        reverseDirection: {},
        tooltipBox: { height: -10, width: 100 },
        useTranslate3d: false,
        viewBox: {},
      }).cssProperties,
    ).toEqual(expected);
    expect(
      getTooltipTranslate({
        allowEscapeViewBox: {},
        coordinate: { x: 1, y: 2 },
        offsetTopLeft: 0,
        position: {},
        reverseDirection: {},
        tooltipBox: { height: 100, width: 0 },
        useTranslate3d: false,
        viewBox: {},
      }).cssProperties,
    ).toEqual(expected);
    expect(
      getTooltipTranslate({
        allowEscapeViewBox: {},
        coordinate: { x: 1, y: 2 },
        offsetTopLeft: 0,
        position: {},
        reverseDirection: {},
        tooltipBox: { height: 10, width: -100 },
        useTranslate3d: false,
        viewBox: {},
      }).cssProperties,
    ).toEqual(expected);
  });

  it('should hide the tooltip if coordinate is undefined', () => {
    const expected = { visibility: 'hidden' };
    expect(
      getTooltipTranslate({
        allowEscapeViewBox: {},
        coordinate: undefined,
        offsetTopLeft: 0,
        position: {},
        reverseDirection: {},
        tooltipBox: { height: 100, width: 100 },
        useTranslate3d: false,
        viewBox: {},
      }).cssProperties,
    ).toEqual(expected);
  });

  it('should compute and prefix the transform based on width and height', () => {
    const { cssProperties } = getTooltipTranslate({
      allowEscapeViewBox: {},
      coordinate: { x: 15, y: 67 },
      offsetTopLeft: 0,
      position: { x: 33, y: 87 },
      reverseDirection: {},
      tooltipBox: { height: 90, width: 120 },
      useTranslate3d: false,
      viewBox: { height: 400, width: 900 },
    });
    const expected = {
      transform: 'translate(33px, 87px)',
    };
    expect(cssProperties).toEqual(expected);
  });

  it('should return CSS classes', () => {
    const { cssClasses } = getTooltipTranslate({
      allowEscapeViewBox: {},
      coordinate: { x: 15, y: 67 },
      offsetTopLeft: 0,
      position: { x: 33, y: 87 },
      reverseDirection: {},
      tooltipBox: { height: 90, width: 120 },
      useTranslate3d: false,
      viewBox: { height: 400, width: 900 },
    });
    const expected = 'recharts-tooltip-wrapper recharts-tooltip-wrapper-right recharts-tooltip-wrapper-bottom';
    expect(cssClasses).toEqual(expected);
  });
});
