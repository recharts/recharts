import type { CSSProperties } from 'react';
import { isPercent } from '../util/DataUtils';

import { Percent } from '../util/types';

export const calculateChartDimensions = (
  containerWidth: number,
  containerHeight: number,
  props: {
    width: Percent | number;
    height: Percent | number;
    aspect: number;
    maxHeight: number;
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

const bothOverflow: CSSProperties = {
  width: 0,
  height: 0,
  overflow: 'visible',
};
const overflowX: CSSProperties = {
  width: 0,
  overflowX: 'visible',
};
const overflowY: CSSProperties = {
  height: 0,
  overflowY: 'visible',
};
const noStyle: CSSProperties = {};

/**
 * This zero-size, overflow-visible is required to allow the chart to shrink.
 * Without it, the chart itself will fill the ResponsiveContainer, and while it allows the chart to grow,
 * it would always keep the container at the size of the chart,
 * and ResizeObserver would never fire.
 * With this zero-size element, the chart itself never actually fills the container,
 * it just so happens that it is visible because it overflows.
 * I learned this trick from the `react-virtualized` library: https://github.com/bvaughn/react-virtualized-auto-sizer/blob/master/src/AutoSizer.ts
 * See https://github.com/recharts/recharts/issues/172 and also https://github.com/bvaughn/react-virtualized/issues/68
 *
 * Also, we don't need to apply the zero-size style if the dimension is a fixed number (or undefined),
 * because in that case the chart can't shrink in that dimension anyway.
 * This fixes defining the dimensions using aspect ratio: https://github.com/recharts/recharts/issues/6245
 */
export const getInnerDivStyle = (props: { width?: Percent | number; height?: Percent | number }): CSSProperties => {
  const { width, height } = props;
  const isWidthPercent = isPercent(width);
  const isHeightPercent = isPercent(height);

  if (isWidthPercent && isHeightPercent) {
    return bothOverflow;
  }
  if (isWidthPercent) {
    return overflowX;
  }
  if (isHeightPercent) {
    return overflowY;
  }
  return noStyle;
};

export function getDefaultWidthAndHeight({
  width,
  height,
  aspect,
}: {
  width: Percent | number | undefined;
  height: Percent | number | undefined;
  aspect: number | undefined;
}): { width: Percent | number; height: Percent | number } {
  let calculatedWidth = width;
  let calculatedHeight = height;

  if (calculatedWidth === undefined && calculatedHeight === undefined) {
    calculatedWidth = '100%';
    calculatedHeight = '100%';
  } else if (calculatedWidth === undefined) {
    calculatedWidth = aspect && aspect > 0 ? undefined : '100%';
  } else if (calculatedHeight === undefined) {
    calculatedHeight = aspect && aspect > 0 ? undefined : '100%';
  }

  return { width: calculatedWidth, height: calculatedHeight };
}
