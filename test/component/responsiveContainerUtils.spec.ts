import { calculateChartDimensions } from '../../src/component/responsiveContainerUtils';

describe('calculateChartDimensions', () => {
  it('should handle percentage width and height', () => {
    const dimensions = calculateChartDimensions(200, 100, { width: '50%', height: '50%' });
    /*
     * The containerWidth and containerHeight are already percentage based because it's set as that percentage in CSS.
     * Means we don't have to calculate percentages here.
     */
    expect(dimensions).toEqual({ calculatedWidth: 200, calculatedHeight: 100 });
  });

  it('should handle fixed width and height', () => {
    const dimensions = calculateChartDimensions(200, 100, { width: 150, height: 75 });
    expect(dimensions).toEqual({ calculatedWidth: 150, calculatedHeight: 75 });
  });

  it('should handle zero height correctly', () => {
    const dimensions = calculateChartDimensions(500, 500, { height: 0, aspect: 2, width: 300 });
    expect(dimensions).toEqual({ calculatedWidth: 300, calculatedHeight: 150 });
  });

  it('should handle zero width correctly', () => {
    const dimensions = calculateChartDimensions(500, 500, { height: 300, aspect: 2, width: 0 });
    expect(dimensions).toEqual({ calculatedWidth: 600, calculatedHeight: 300 });
  });

  it('should preserve aspect ratio when oversized', () => {
    const dimensions = calculateChartDimensions(500, 500, { aspect: 2, height: 100, width: 300 });
    expect(dimensions).toEqual({ calculatedWidth: 300, calculatedHeight: 150 });
  });

  it('should preserve aspect ratio when undersized', () => {
    const dimensions = calculateChartDimensions(500, 500, { aspect: 2, height: 300, width: 100 });
    expect(dimensions).toEqual({ calculatedWidth: 100, calculatedHeight: 50 });
  });

  it('should respect maxHeight when aspect ratio is used', () => {
    const dimensions = calculateChartDimensions(500, 500, { aspect: 2, width: 400, maxHeight: 150 });
    expect(dimensions).toEqual({ calculatedWidth: 400, calculatedHeight: 150 });
  });

  it('should return container dimensions if width/height are 100%', () => {
    const dimensions = calculateChartDimensions(800, 600, { width: '100%', height: '100%' });
    expect(dimensions).toEqual({ calculatedWidth: 800, calculatedHeight: 600 });
  });

  it('should ignore negative aspect ratio', () => {
    const dimensions = calculateChartDimensions(200, 100, { width: '100%', height: '100%', aspect: -2 });
    expect(dimensions).toEqual({ calculatedWidth: 200, calculatedHeight: 100 });
  });
});
