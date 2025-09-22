import type { CSSProperties } from 'react';
import { isPercent } from '../util/DataUtils';

export const calculateChartDimensions = (
  containerWidth: number,
  containerHeight: number,
  props: {
    width?: string | number;
    height?: string | number;
    aspect?: number;
    maxHeight?: number;
  },
) => {
  const { width = '100%', height = '100%', aspect, maxHeight } = props;

  /*
   * The containerWidth and containerHeight are already percentage based because it's set as that percentage in CSS.
   * Means we don't have to calculate percentages here.
   */
  let calculatedWidth: number = isPercent(width) ? containerWidth : Number(width);
  let calculatedHeight: number = isPercent(height) ? containerHeight : Number(height);

  if (aspect && aspect > 0) {
    // Preserve the desired aspect ratio
    if (calculatedWidth) {
      // Will default to using width for aspect ratio
      calculatedHeight = calculatedWidth / aspect;
    } else if (calculatedHeight) {
      // But we should also take height into consideration
      calculatedWidth = calculatedHeight * aspect;
    }

    // if maxHeight is set, overwrite if calculatedHeight is greater than maxHeight
    if (maxHeight && calculatedHeight > maxHeight) {
      calculatedHeight = maxHeight;
    }
  }

  return { calculatedWidth, calculatedHeight };
};

export const getInnerDivStyle = (): CSSProperties => ({
  width: 0,
  height: 0,
  overflow: 'visible',
});
