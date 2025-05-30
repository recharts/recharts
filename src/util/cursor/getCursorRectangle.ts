import { ChartCoordinate, ChartOffsetRequired, LayoutType } from '../types';

export type CursorRectangle = {
  stroke: string;
  fill: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

export function getCursorRectangle(
  layout: LayoutType,
  activeCoordinate: ChartCoordinate,
  offset: ChartOffsetRequired,
  tooltipAxisBandSize: number,
): CursorRectangle {
  const halfSize = tooltipAxisBandSize / 2;

  return {
    stroke: 'none',
    fill: '#ccc',
    x: layout === 'horizontal' ? activeCoordinate.x - halfSize : offset.left + 0.5,
    y: layout === 'horizontal' ? offset.top + 0.5 : activeCoordinate.y - halfSize,
    width: layout === 'horizontal' ? tooltipAxisBandSize : offset.width - 1,
    height: layout === 'horizontal' ? offset.height - 1 : tooltipAxisBandSize,
  };
}
