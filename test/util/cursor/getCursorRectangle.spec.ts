import { CursorRectangle, getCursorRectangle } from '../../../src/util/cursor/getCursorRectangle';
import { ChartCoordinate, ChartOffset, LayoutType } from '../../../src/util/types';

const activeCoordinate: ChartCoordinate = {
  x: 100,
  y: 170,
};
const offset: ChartOffset = {
  left: 10,
  top: 80,
  width: 13,
  height: 17,
};
const tooltipAxisBandSize = 256;

describe('getCursorRectangle', () => {
  describe('horizontal layout', () => {
    it('should return rectangle props', () => {
      const layout = 'horizontal';
      const result = getCursorRectangle(layout, activeCoordinate, offset, tooltipAxisBandSize);
      const expected: CursorRectangle = {
        stroke: 'none',
        fill: '#ccc',
        x: -28,
        y: 80.5,
        width: 256,
        height: 16,
      };
      expect(result).toEqual(expected);
    });
  });

  const otherLayouts: ReadonlyArray<LayoutType> = ['vertical', 'centric', 'radial'];
  describe.each(otherLayouts)('%s layout', (layout: LayoutType) => {
    it('should return rectangle props', () => {
      const result = getCursorRectangle(layout, activeCoordinate, offset, tooltipAxisBandSize);
      const expected: CursorRectangle = {
        stroke: 'none',
        fill: '#ccc',
        x: 10.5,
        y: 42,
        width: 12,
        height: 256,
      };
      expect(result).toEqual(expected);
    });
  });
});
