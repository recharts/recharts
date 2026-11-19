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
        offset: 100,
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
        offset: 3,
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
        offset: 3,
        position: {},
        reverseDirection: { [dimension]: true },
        tooltipDimension: 15,
        viewBox: {},
        viewBoxDimension: 4,
      });
      expect(result).toBe(132);
    });

    it('should return number outside of viewBox even when offset is negative', () => {
      const result = getTooltipTranslateXY({
        allowEscapeViewBox: { [dimension]: true },
        coordinate: { x: 1, y: 2, [dimension]: 900 },
        key: dimension,
        offset: -35,
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
        offset: 3,
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
        offset: 3,
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
        offset: 3,
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
        offset: 3,
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
    it('should fit translate inside the viewBox', () => {
      const result = getTooltipTranslateXY({
        allowEscapeViewBox: { [dimension]: false },
        coordinate: { x: 1, y: 2, [dimension]: 190 },
        key: dimension,
        offset: 3,
        position: {},
        reverseDirection: { [dimension]: false },
        tooltipDimension: 15,
        viewBox: { [dimension]: 9 },
        viewBoxDimension: 60,
      });
      // viewBox ends at 9 + 60 = 69. The tooltip is 15 long, so it starts at 69 - 15 = 54.
      expect(result).toBe(54);
    });
  });

  describe('when tooltip has negative offset', () => {
    it('should not subtract the negative offset when the tooltip goes before the coordinate', () => {
      const result = getTooltipTranslateXY({
        allowEscapeViewBox: { [dimension]: false },
        coordinate: { x: 1, y: 2, [dimension]: 850 },
        key: dimension,
        offset: -35,
        position: {},
        reverseDirection: { [dimension]: false },
        tooltipDimension: 70,
        viewBox: { [dimension]: 65 },
        viewBoxDimension: 800,
      });
      // positive = 850 - 35 = 815, and 815 + 70 > 865, so the tooltip goes before the coordinate.
      // negative = 850 - 70 = 780. The negative offset is not subtracted.
      expect(result).toBe(780);
    });

    it('should keep the tooltip inside the viewBox when the coordinate is after the viewBox', () => {
      const result = getTooltipTranslateXY({
        allowEscapeViewBox: { [dimension]: false },
        coordinate: { x: 1, y: 2, [dimension]: 900 },
        key: dimension,
        offset: -35,
        position: {},
        reverseDirection: { [dimension]: false },
        tooltipDimension: 70,
        viewBox: { [dimension]: 65 },
        viewBoxDimension: 800,
      });
      // viewBox ends at 65 + 800 = 865. The tooltip is 70 long, so it starts at 865 - 70 = 795.
      expect(result).toBe(795);
    });
  });

  describe('when the tooltip touches the edge of the viewBox exactly', () => {
    it('should keep the tooltip after the coordinate when it ends exactly at the end of the viewBox', () => {
      const result = getTooltipTranslateXY({
        allowEscapeViewBox: { [dimension]: false },
        coordinate: { x: 1, y: 2, [dimension]: 100 },
        key: dimension,
        offset: 10,
        position: {},
        reverseDirection: { [dimension]: false },
        tooltipDimension: 20,
        viewBox: { [dimension]: 0 },
        viewBoxDimension: 130,
      });
      // positive = 100 + 10 = 110, and 110 + 20 = 130 is the end of the viewBox, so it still fits.
      expect(result).toBe(110);
    });

    it('should keep the tooltip before the coordinate when it starts exactly at the start of the viewBox and reverseDirection is true', () => {
      const result = getTooltipTranslateXY({
        allowEscapeViewBox: { [dimension]: false },
        coordinate: { x: 1, y: 2, [dimension]: 100 },
        key: dimension,
        offset: 10,
        position: {},
        reverseDirection: { [dimension]: true },
        tooltipDimension: 20,
        viewBox: { [dimension]: 70 },
        viewBoxDimension: 200,
      });
      // negative = 100 - 20 - 10 = 70, which is the start of the viewBox, so it still fits.
      expect(result).toBe(70);
    });

    it('should put the tooltip at the start of the viewBox when the tooltip is exactly as large as the viewBox', () => {
      const result = getTooltipTranslateXY({
        allowEscapeViewBox: { [dimension]: false },
        coordinate: { x: 1, y: 2, [dimension]: 500 },
        key: dimension,
        offset: 10,
        position: {},
        reverseDirection: { [dimension]: false },
        tooltipDimension: 100,
        viewBox: { [dimension]: 20 },
        viewBoxDimension: 100,
      });
      // The tooltip fills the viewBox, so the only position inside it is the start: 20.
      expect(result).toBe(20);
    });
  });

  describe('when the viewBox is not complete', () => {
    it('should return 0 when the viewBox has no start', () => {
      const result = getTooltipTranslateXY({
        allowEscapeViewBox: { [dimension]: false },
        coordinate: { x: 1, y: 2, [dimension]: 150 },
        key: dimension,
        offset: 10,
        position: {},
        reverseDirection: { [dimension]: false },
        tooltipDimension: 15,
        viewBox: {},
        viewBoxDimension: 400,
      });
      expect(result).toBe(0);
    });

    it('should return 0 when the viewBox has no dimension', () => {
      const result = getTooltipTranslateXY({
        allowEscapeViewBox: { [dimension]: false },
        coordinate: { x: 1, y: 2, [dimension]: 150 },
        key: dimension,
        offset: 10,
        position: {},
        reverseDirection: { [dimension]: false },
        tooltipDimension: 15,
        viewBox: { [dimension]: 10 },
        viewBoxDimension: undefined,
      });
      expect(result).toBe(0);
    });

    it('should only keep the start edge when the viewBox has no dimension and reverseDirection is true', () => {
      const result = getTooltipTranslateXY({
        allowEscapeViewBox: { [dimension]: false },
        coordinate: { x: 1, y: 2, [dimension]: 950 },
        key: dimension,
        offset: 10,
        position: {},
        reverseDirection: { [dimension]: true },
        tooltipDimension: 15,
        viewBox: { [dimension]: 10 },
        viewBoxDimension: undefined,
      });
      // negative = 950 - 15 - 10 = 925. Without a dimension there is no end edge to clamp to.
      expect(result).toBe(925);
    });
  });

  describe('when the coordinate is stale after the viewBox gets smaller', () => {
    // The tooltip keeps its last coordinate after the mouse leaves the chart.
    // This is the coordinate of the last bar in a 1000px chart, after the chart shrinks to 400px.
    const staleCoordinate = 950;

    it('should keep the tooltip inside the new viewBox', () => {
      const result = getTooltipTranslateXY({
        allowEscapeViewBox: { [dimension]: false },
        coordinate: { x: 1, y: 2, [dimension]: staleCoordinate },
        key: dimension,
        offset: 10,
        position: {},
        reverseDirection: { [dimension]: false },
        tooltipDimension: 22,
        viewBox: { [dimension]: 60 },
        viewBoxDimension: 340,
      });
      expect(result).toBe(60 + 340 - 22);
    });

    it('should keep the tooltip inside the new viewBox when reverseDirection is true', () => {
      const result = getTooltipTranslateXY({
        allowEscapeViewBox: { [dimension]: false },
        coordinate: { x: 1, y: 2, [dimension]: staleCoordinate },
        key: dimension,
        offset: 10,
        position: {},
        reverseDirection: { [dimension]: true },
        tooltipDimension: 22,
        viewBox: { [dimension]: 60 },
        viewBoxDimension: 340,
      });
      expect(result).toBe(60 + 340 - 22);
    });

    it('should let the tooltip leave the viewBox when allowEscapeViewBox is true', () => {
      const result = getTooltipTranslateXY({
        allowEscapeViewBox: { [dimension]: true },
        coordinate: { x: 1, y: 2, [dimension]: staleCoordinate },
        key: dimension,
        offset: 10,
        position: {},
        reverseDirection: { [dimension]: false },
        tooltipDimension: 22,
        viewBox: { [dimension]: 60 },
        viewBoxDimension: 340,
      });
      expect(result).toBe(staleCoordinate + 10);
    });
  });

  describe('when tooltip is larger than the viewBox', () => {
    it('should keep the start of the tooltip at the start of the viewBox', () => {
      const result = getTooltipTranslateXY({
        allowEscapeViewBox: { [dimension]: false },
        coordinate: { x: 1, y: 2, [dimension]: 150 },
        key: dimension,
        offset: 10,
        position: {},
        reverseDirection: { [dimension]: false },
        tooltipDimension: 400,
        viewBox: { [dimension]: 20 },
        viewBoxDimension: 260,
      });
      expect(result).toBe(20);
    });

    it('should not move the tooltip before the viewBox when reverseDirection is true', () => {
      const result = getTooltipTranslateXY({
        allowEscapeViewBox: { [dimension]: false },
        coordinate: { x: 1, y: 2, [dimension]: 150 },
        key: dimension,
        offset: 10,
        position: {},
        reverseDirection: { [dimension]: true },
        tooltipDimension: 400,
        viewBox: { [dimension]: 20 },
        viewBoxDimension: 260,
      });
      // negative = 150 - 400 - 10 < 20, so the tooltip goes after the coordinate: 150 + 10.
      expect(result).toBe(160);
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
  it('should add `right` and `bottom`, and not `left` or `top`, if translate is equal to coordinate', () => {
    const result = getTooltipCSSClassName({
      coordinate: { x: 40, y: 60 },
      translateX: 40,
      translateY: 60,
    });
    expect(result).toEqual('recharts-tooltip-wrapper recharts-tooltip-wrapper-right recharts-tooltip-wrapper-bottom');
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
        offsetTop: 0,
        offsetLeft: 0,
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
        offsetTop: 0,
        offsetLeft: 0,
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
        offsetTop: 0,
        offsetLeft: 0,
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
        offsetTop: 0,
        offsetLeft: 0,
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
        offsetTop: 0,
        offsetLeft: 0,
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
      offsetTop: 0,
      offsetLeft: 0,
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
      offsetTop: 0,
      offsetLeft: 0,
      position: { x: 33, y: 87 },
      reverseDirection: {},
      tooltipBox: { height: 90, width: 120 },
      useTranslate3d: false,
      viewBox: { height: 400, width: 900 },
    });
    const expected = 'recharts-tooltip-wrapper recharts-tooltip-wrapper-right recharts-tooltip-wrapper-bottom';
    expect(cssClasses).toEqual(expected);
  });

  describe('when offsetTop and offsetLeft are different', () => {
    it('should apply different offsets to x and y axes', () => {
      const { cssProperties } = getTooltipTranslate({
        allowEscapeViewBox: { x: true, y: true },
        coordinate: { x: 100, y: 100 },
        offsetTop: 20,
        offsetLeft: 10,
        position: {},
        reverseDirection: {},
        tooltipBox: { height: 50, width: 100 },
        useTranslate3d: false,
        viewBox: { height: 400, width: 400, x: 0, y: 0 },
      });
      expect(cssProperties).toEqual({
        transform: 'translate(110px, 120px)',
      });
    });

    it('should handle negative offsetTop with positive offsetLeft', () => {
      const { cssProperties } = getTooltipTranslate({
        allowEscapeViewBox: { x: true, y: true },
        coordinate: { x: 100, y: 100 },
        offsetTop: -15,
        offsetLeft: 25,
        position: {},
        reverseDirection: {},
        tooltipBox: { height: 50, width: 100 },
        useTranslate3d: false,
        viewBox: { height: 400, width: 400, x: 0, y: 0 },
      });
      expect(cssProperties).toEqual({
        transform: 'translate(125px, 85px)',
      });
    });
  });
});
