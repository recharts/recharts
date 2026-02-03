import { describe, it, expect } from 'vitest';
import { getRelativeCoordinate } from '../../src';
import { getMockDomRect } from '../helper/mockGetBoundingClientRect';
import {
  RelativePointer,
  HTMLMousePointer,
  SVGMousePointer,
  HTMLTouchPointer,
  SVGTouchPointer,
} from '../../src/util/types';

describe('getRelativeCoordinate', () => {
  describe('with HTML elements', () => {
    it('should return chart coordinates relative to the top-left corner of the chart', () => {
      const event: HTMLMousePointer = {
        clientX: 100,
        clientY: 100,
        currentTarget: {
          getBoundingClientRect: () => getMockDomRect({ left: 50, top: 50, width: 100, height: 100 }),
          offsetWidth: 100,
          offsetHeight: 100,
        },
      };
      const actual = getRelativeCoordinate(event);

      const expected: RelativePointer = {
        relativeX: 50,
        relativeY: 50,
      };

      expect(actual).toEqual(expected);
    });

    it('should return chart coordinates relative to the top-left corner of the chart with scale', () => {
      const event: HTMLMousePointer = {
        /*
         * clientX and clientY are the mouse position relative to the viewport, including scroll.
         * These ignore scale on whatever is being hovered over,
         * so while we hover over the same position relative to the viewport,
         * the chart below has moved because it's now scaled 2x.
         */
        clientX: 100,
        clientY: 100,
        currentTarget: {
          /*
           * As one zooms in and out, the rect.width and rect.height will change,
           * but the offsetWidth and offsetHeight will remain the same.
           *
           * So this mock target represents a chart that's been scaled by 2x.
           */
          getBoundingClientRect: () => getMockDomRect({ left: 50, top: 50, width: 200, height: 200 }),
          offsetWidth: 100,
          offsetHeight: 100,
        },
      };
      const actual = getRelativeCoordinate(event);

      const expected: RelativePointer = {
        /*
         * Since we hover over the same position relative to the viewport,
         * but the chart is now twice as big, the chart coordinates should be half.
         */
        relativeX: 25,
        relativeY: 25,
      };

      expect(actual).toEqual(expected);
    });

    it('should handle zero offsetWidth/offsetHeight gracefully', () => {
      const event: HTMLMousePointer = {
        clientX: 100,
        clientY: 100,
        currentTarget: {
          getBoundingClientRect: () => getMockDomRect({ left: 50, top: 50, width: 100, height: 100 }),
          offsetWidth: 0,
          offsetHeight: 0,
        },
      };
      const actual = getRelativeCoordinate(event);

      // When offsetWidth/offsetHeight is 0, scale defaults to 1
      const expected: RelativePointer = {
        relativeX: 50,
        relativeY: 50,
      };

      expect(actual).toEqual(expected);
    });
  });

  describe('with SVG elements', () => {
    it('should return chart coordinates relative to the top-left corner of the SVG', () => {
      const event: SVGMousePointer = {
        clientX: 100,
        clientY: 100,
        currentTarget: {
          getBoundingClientRect: () => getMockDomRect({ left: 50, top: 50, width: 100, height: 100 }),
          getBBox: () => getMockDomRect({ x: 0, y: 0, width: 100, height: 100 }),
        },
      };
      const actual = getRelativeCoordinate(event);

      const expected: RelativePointer = {
        relativeX: 50,
        relativeY: 50,
      };

      expect(actual).toEqual(expected);
    });

    it('should return chart coordinates with SVG scale (CSS transform)', () => {
      const event: SVGMousePointer = {
        clientX: 100,
        clientY: 100,
        currentTarget: {
          /*
           * The bounding client rect represents the visual size on screen (affected by CSS transform).
           * getBBox returns the intrinsic SVG coordinate space size (not affected by CSS transform).
           */
          getBoundingClientRect: () => getMockDomRect({ left: 50, top: 50, width: 200, height: 200 }),
          getBBox: () => getMockDomRect({ x: 0, y: 0, width: 100, height: 100 }),
        },
      };
      const actual = getRelativeCoordinate(event);

      const expected: RelativePointer = {
        // SVG is scaled 2x, so coordinates should be halved
        relativeX: 25,
        relativeY: 25,
      };

      expect(actual).toEqual(expected);
    });

    it('should handle zero getBBox width/height gracefully', () => {
      const event: SVGMousePointer = {
        clientX: 100,
        clientY: 100,
        currentTarget: {
          getBoundingClientRect: () => getMockDomRect({ left: 50, top: 50, width: 100, height: 100 }),
          getBBox: () => getMockDomRect({ x: 0, y: 0, width: 0, height: 0 }),
        },
      };
      const actual = getRelativeCoordinate(event);

      // When getBBox returns 0, scale defaults to 1
      const expected: RelativePointer = {
        relativeX: 50,
        relativeY: 50,
      };

      expect(actual).toEqual(expected);
    });

    it('should handle non-uniform SVG scaling', () => {
      const event: SVGMousePointer = {
        clientX: 100,
        clientY: 100,
        currentTarget: {
          // SVG is scaled 2x horizontally, 4x vertically
          getBoundingClientRect: () => getMockDomRect({ left: 0, top: 0, width: 200, height: 400 }),
          getBBox: () => getMockDomRect({ x: 0, y: 0, width: 100, height: 100 }),
        },
      };
      const actual = getRelativeCoordinate(event);

      const expected: RelativePointer = {
        relativeX: 50, // 100 / 2
        relativeY: 25, // 100 / 4
      };

      expect(actual).toEqual(expected);
    });
  });

  describe('with Touch events', () => {
    it('should return array of coordinates for single touch on HTML element', () => {
      const event: HTMLTouchPointer = {
        touches: [{ clientX: 100, clientY: 100 }],
        currentTarget: {
          getBoundingClientRect: () => getMockDomRect({ left: 50, top: 50, width: 100, height: 100 }),
          offsetWidth: 100,
          offsetHeight: 100,
        },
      };
      const actual = getRelativeCoordinate(event);

      const expected: RelativePointer[] = [
        {
          relativeX: 50,
          relativeY: 50,
        },
      ];

      expect(actual).toEqual(expected);
    });

    it('should return array of coordinates for multiple touches on HTML element', () => {
      const event: HTMLTouchPointer = {
        touches: [
          { clientX: 100, clientY: 100 },
          { clientX: 150, clientY: 150 },
        ],
        currentTarget: {
          getBoundingClientRect: () => getMockDomRect({ left: 50, top: 50, width: 100, height: 100 }),
          offsetWidth: 100,
          offsetHeight: 100,
        },
      };
      const actual = getRelativeCoordinate(event);

      const expected: RelativePointer[] = [
        { relativeX: 50, relativeY: 50 },
        { relativeX: 100, relativeY: 100 },
      ];

      expect(actual).toEqual(expected);
    });

    it('should return array of coordinates for touch on SVG element', () => {
      const event: SVGTouchPointer = {
        touches: [{ clientX: 100, clientY: 100 }],
        currentTarget: {
          getBoundingClientRect: () => getMockDomRect({ left: 50, top: 50, width: 100, height: 100 }),
          getBBox: () => getMockDomRect({ x: 0, y: 0, width: 100, height: 100 }),
        },
      };
      const actual = getRelativeCoordinate(event);

      const expected: RelativePointer[] = [
        {
          relativeX: 50,
          relativeY: 50,
        },
      ];

      expect(actual).toEqual(expected);
    });
  });
});
