import {
  AxisType,
  CartesianLayout,
  ChartOffsetInternal,
  ChartPointer,
  Coordinate,
  PolarCoordinate,
  PolarLayout,
  RangeObj,
  TickItem,
} from './types';
import { polarToCartesian } from './PolarUtils';
import { AxisRange } from '../state/selectors/axisSelectors';
import { mathSign } from './DataUtils';

export const getActiveCartesianCoordinate = (
  layout: CartesianLayout,
  tooltipTicks: readonly TickItem[],
  activeIndex: number | undefined,
  pointer: ChartPointer,
): Coordinate => {
  const entry = tooltipTicks.find(tick => tick && tick.index === activeIndex);

  if (entry) {
    if (layout === 'horizontal') {
      return { x: entry.coordinate, y: pointer.chartY };
    }
    if (layout === 'vertical') {
      return { x: pointer.chartX, y: entry.coordinate };
    }
  }

  return { x: 0, y: 0 };
};

/**
 * Get the active coordinate in polar coordinate system.
 * Internally we only really use x and y, but this returned object is part of public API
 * (because it goes straight to the tooltip content) so we keep all the other properties
 * for backwards compatibility.
 *
 * @param layout - The polar layout type ('centric' or 'radial').
 * @param tooltipTicks - Array of tick items used for tooltips.
 * @param activeIndex - The index of the active tick.
 * @param rangeObj - The range object containing polar chart properties.
 * @returns The active coordinate object with polar properties.
 */
export const getActivePolarCoordinate = (
  layout: PolarLayout,
  tooltipTicks: readonly TickItem[],
  activeIndex: number | undefined,
  rangeObj: RangeObj,
): PolarCoordinate => {
  const entry = tooltipTicks.find(tick => tick && tick.index === activeIndex);

  if (entry) {
    if (layout === 'centric') {
      const angle = entry.coordinate;
      const { radius } = rangeObj;

      return {
        ...rangeObj,
        ...polarToCartesian(rangeObj.cx, rangeObj.cy, radius, angle),
        angle,
        radius,
      };
    }

    const radius = entry.coordinate;
    const { angle } = rangeObj;

    return {
      ...rangeObj,
      ...polarToCartesian(rangeObj.cx, rangeObj.cy, radius, angle),
      angle,
      radius,
    };
  }

  return {
    angle: 0,
    clockWise: false,
    cx: 0,
    cy: 0,
    endAngle: 0,
    innerRadius: 0,
    outerRadius: 0,
    radius: 0,
    startAngle: 0,
    x: 0,
    y: 0,
  };
};

export function isInCartesianRange(pointer: ChartPointer, offset: ChartOffsetInternal): boolean {
  const { chartX: x, chartY: y } = pointer;
  return x >= offset.left && x <= offset.left + offset.width && y >= offset.top && y <= offset.top + offset.height;
}

export const calculateActiveTickIndex = (
  /**
   * For different layouts, `coordinate` is different:
   * In horizontal layout, this is expected to be the `x` coordinate
   * vertical -> y
   * centric -> angle
   * radial -> radius
   */
  coordinate: number | undefined,
  ticks: ReadonlyArray<TickItem> | undefined,
  unsortedTicks: ReadonlyArray<TickItem>,
  axisType: AxisType | undefined,
  range: AxisRange | undefined,
): number => {
  const len = ticks?.length ?? 0;

  // if there are 1 or fewer ticks or if there is no coordinate then the active tick is at index 0
  if (len <= 1 || coordinate == null) {
    return 0;
  }

  if (axisType === 'angleAxis' && range != null && Math.abs(Math.abs(range[1] - range[0]) - 360) <= 1e-6) {
    // ticks are distributed in a circle
    for (let i = 0; i < len; i++) {
      const before = i > 0 ? unsortedTicks[i - 1]?.coordinate : unsortedTicks[len - 1]?.coordinate;
      const cur = unsortedTicks[i]?.coordinate;
      const after = i >= len - 1 ? unsortedTicks[0]?.coordinate : unsortedTicks[i + 1]?.coordinate;
      let sameDirectionCoord;

      if (before == null || cur == null || after == null) {
        continue;
      }

      if (mathSign(cur - before) !== mathSign(after - cur)) {
        const diffInterval = [];
        if (mathSign(after - cur) === mathSign(range[1] - range[0])) {
          sameDirectionCoord = after;

          const curInRange = cur + range[1] - range[0];
          diffInterval[0] = Math.min(curInRange, (curInRange + before) / 2);
          diffInterval[1] = Math.max(curInRange, (curInRange + before) / 2);
        } else {
          sameDirectionCoord = before;

          const afterInRange = after + range[1] - range[0];
          diffInterval[0] = Math.min(cur, (afterInRange + cur) / 2);
          diffInterval[1] = Math.max(cur, (afterInRange + cur) / 2);
        }
        const sameInterval: [number, number] = [
          Math.min(cur, (sameDirectionCoord + cur) / 2),
          Math.max(cur, (sameDirectionCoord + cur) / 2),
        ];

        if (
          (coordinate > sameInterval[0] && coordinate <= sameInterval[1]) ||
          (coordinate >= diffInterval[0] && coordinate <= diffInterval[1])
        ) {
          return unsortedTicks[i]?.index;
        }
      } else {
        const minValue = Math.min(before, after);
        const maxValue = Math.max(before, after);

        if (coordinate > (minValue + cur) / 2 && coordinate <= (maxValue + cur) / 2) {
          return unsortedTicks[i]?.index;
        }
      }
    }
  } else if (ticks) {
    // ticks are distributed in a single direction
    for (let i = 0; i < len; i++) {
      const curr = ticks[i];
      if (curr == null) {
        continue;
      }
      const next = ticks[i + 1];
      const prev = ticks[i - 1];

      if (i === 0 && next != null && coordinate <= (curr.coordinate + next.coordinate) / 2) {
        return curr.index;
      }

      if (i === len - 1 && prev != null && coordinate > (curr.coordinate + prev.coordinate) / 2) {
        return curr.index;
      }

      if (
        i > 0 &&
        i < len - 1 &&
        prev != null &&
        next != null &&
        coordinate > (curr.coordinate + prev.coordinate) / 2 &&
        coordinate <= (curr.coordinate + next.coordinate) / 2
      ) {
        return curr.index;
      }
    }
  }

  return -1;
};
