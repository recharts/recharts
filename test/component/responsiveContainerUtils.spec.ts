import {
  calculateChartDimensions,
  getDefaultWidthAndHeight,
  getInnerDivStyle,
} from '../../src/component/responsiveContainerUtils';

describe('calculateChartDimensions', () => {
  it('should handle percentage width and height', () => {
    const dimensions = calculateChartDimensions(200, 100, {
      width: '50%',
      height: '50%',
      aspect: undefined,
      maxHeight: undefined,
    });
    /*
     * The containerWidth and containerHeight are already percentage based because it's set as that percentage in CSS.
     * Means we don't have to calculate percentages here.
     */
    expect(dimensions).toEqual({ calculatedWidth: 200, calculatedHeight: 100 });
  });

  it('should handle fixed width and height', () => {
    const dimensions = calculateChartDimensions(200, 100, {
      width: 150,
      height: 75,
      aspect: undefined,
      maxHeight: undefined,
    });
    expect(dimensions).toEqual({ calculatedWidth: 150, calculatedHeight: 75 });
  });

  it('should handle zero height correctly', () => {
    const dimensions = calculateChartDimensions(500, 500, { height: 0, aspect: 2, width: 300, maxHeight: undefined });
    expect(dimensions).toEqual({ calculatedWidth: 300, calculatedHeight: 150 });
  });

  it('should handle zero width correctly', () => {
    const dimensions = calculateChartDimensions(500, 500, { height: 300, aspect: 2, width: 0, maxHeight: undefined });
    expect(dimensions).toEqual({ calculatedWidth: 600, calculatedHeight: 300 });
  });

  it('should preserve aspect ratio when oversized', () => {
    const dimensions = calculateChartDimensions(500, 500, { aspect: 2, height: 100, width: 300, maxHeight: undefined });
    expect(dimensions).toEqual({ calculatedWidth: 300, calculatedHeight: 150 });
  });

  it('should preserve aspect ratio when undersized', () => {
    const dimensions = calculateChartDimensions(500, 500, { aspect: 2, height: 300, width: 100, maxHeight: undefined });
    expect(dimensions).toEqual({ calculatedWidth: 100, calculatedHeight: 50 });
  });

  it('should respect maxHeight when aspect ratio is used', () => {
    const dimensions = calculateChartDimensions(500, 500, { aspect: 2, width: 400, maxHeight: 150, height: undefined });
    expect(dimensions).toEqual({ calculatedWidth: 400, calculatedHeight: 150 });
  });

  it('should return container dimensions if width/height are 100%', () => {
    const dimensions = calculateChartDimensions(800, 600, {
      width: '100%',
      height: '100%',
      aspect: undefined,
      maxHeight: undefined,
    });
    expect(dimensions).toEqual({ calculatedWidth: 800, calculatedHeight: 600 });
  });

  it('should ignore negative aspect ratio', () => {
    const dimensions = calculateChartDimensions(200, 100, {
      width: '100%',
      height: '100%',
      aspect: -2,
      maxHeight: undefined,
    });
    expect(dimensions).toEqual({ calculatedWidth: 200, calculatedHeight: 100 });
  });
});

describe('getInnerDivStyle', () => {
  it('should return shrinkable object if both width and height are percentages', () => {
    const style = getInnerDivStyle({ width: '20%', height: '10%' });
    expect(style).toEqual({
      width: 0,
      height: 0,
      overflow: 'visible',
    });
  });

  it('should return shrinkable object if width is percentage and height is fixed', () => {
    const style = getInnerDivStyle({ width: '20%', height: 100 });
    expect(style).toEqual({
      width: 0,
      overflowX: 'visible',
    });
  });

  it('should return shrinkable object if width is fixed and height is percentage', () => {
    const style = getInnerDivStyle({ width: 200, height: '10%' });
    expect(style).toEqual({
      height: 0,
      overflowY: 'visible',
    });
  });

  it('should return empty object if both width and height are fixed', () => {
    const style = getInnerDivStyle({ width: 200, height: 100 });
    expect(style).toEqual({});
  });
});

describe('getDefaultWidthAndHeight', () => {
  it('should return 100% for both width and height if neither is provided', () => {
    const { width, height } = getDefaultWidthAndHeight({ width: undefined, height: undefined, aspect: undefined });
    expect(width).toBe('100%');
    expect(height).toBe('100%');
  });

  it('should return provided width and default height if only width is provided', () => {
    const { width, height } = getDefaultWidthAndHeight({ width: 300, height: undefined, aspect: undefined });
    expect(width).toBe(300);
    expect(height).toBe('100%');
  });

  it('should return 100% width and provided height if only height is provided but aspect is not', () => {
    const { width, height } = getDefaultWidthAndHeight({ width: undefined, height: 150, aspect: undefined });
    expect(width).toBe('100%');
    expect(height).toBe(150);
  });

  it('should return provided width and height if both are provided', () => {
    const { width, height } = getDefaultWidthAndHeight({ width: 300, height: 150, aspect: undefined });
    expect(width).toBe(300);
    expect(height).toBe(150);
  });

  it('should return default width and height if aspect is provided without width and height', () => {
    const { width, height } = getDefaultWidthAndHeight({ width: undefined, height: undefined, aspect: 2 });
    expect(width).toBe('100%');
    expect(height).toBe('100%');
  });

  it('should return provided width and no height if aspect is provided with width', () => {
    const { width, height } = getDefaultWidthAndHeight({ width: 300, height: undefined, aspect: 2 });
    expect(width).toBe(300);
    expect(height).toBe(undefined);
  });

  it('should return undefined width and provided height if aspect is provided with height', () => {
    const { width, height } = getDefaultWidthAndHeight({ width: undefined, height: 150, aspect: 2 });
    expect(width).toBe(undefined);
    expect(height).toBe(150);
  });
});
