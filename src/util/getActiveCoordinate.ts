import {
  AxisType,
  ChartCoordinate,
  ChartOffsetInternal,
  LayoutType,
  PolarViewBoxRequired,
  RangeObj,
  TickItem,
} from './types';
import { inRangeOfSector, polarToCartesian } from './PolarUtils';
import { AxisRange } from '../state/selectors/axisSelectors';
import { mathSign } from './DataUtils';

export const getActiveCoordinate = (
  layout: LayoutType,
  tooltipTicks: readonly TickItem[],
  activeIndex: number,
  rangeObj: RangeObj,
): ChartCoordinate => {
  const entry = tooltipTicks.find(tick => tick && tick.index === activeIndex);

  if (entry) {
    if (layout === 'horizontal') {
      return { x: entry.coordinate, y: rangeObj.y };
    }
    if (layout === 'vertical') {
      return { x: rangeObj.x, y: entry.coordinate };
    }
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

  return { x: 0, y: 0 };
};

export function inRange(
  x: number,
  y: number,
  layout: LayoutType,
  polarViewBox: PolarViewBoxRequired | undefined,
  offset: ChartOffsetInternal,
): RangeObj | null {
  if (layout === 'horizontal' || layout === 'vertical') {
    const isInRange =
      x >= offset.left && x <= offset.left + offset.width && y >= offset.top && y <= offset.top + offset.height;

    return isInRange ? { x, y } : null;
  }

  if (polarViewBox) {
    return inRangeOfSector({ x, y }, polarViewBox);
  }

  return null;
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
  let index = -1;
  const len = ticks?.length ?? 0;

  // if there are 1 or fewer ticks or if there is no coordinate then the active tick is at index 0
  if (len <= 1 || coordinate == null) {
    return 0;
  }

  if (axisType === 'angleAxis' && range != null && Math.abs(Math.abs(range[1] - range[0]) - 360) <= 1e-6) {
    // ticks are distributed in a circle
    for (let i = 0; i < len; i++) {
      const before = i > 0 ? unsortedTicks[i - 1].coordinate : unsortedTicks[len - 1].coordinate;
      const cur = unsortedTicks[i].coordinate;
      const after = i >= len - 1 ? unsortedTicks[0].coordinate : unsortedTicks[i + 1].coordinate;
      let sameDirectionCoord;

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
        const sameInterval = [
          Math.min(cur, (sameDirectionCoord + cur) / 2),
          Math.max(cur, (sameDirectionCoord + cur) / 2),
        ];

        if (
          (coordinate > sameInterval[0] && coordinate <= sameInterval[1]) ||
          (coordinate >= diffInterval[0] && coordinate <= diffInterval[1])
        ) {
          ({ index } = unsortedTicks[i]);
          break;
        }
      } else {
        const minValue = Math.min(before, after);
        const maxValue = Math.max(before, after);

        if (coordinate > (minValue + cur) / 2 && coordinate <= (maxValue + cur) / 2) {
          ({ index } = unsortedTicks[i]);
          break;
        }
      }
    }
  } else if (ticks) {
    // ticks are distributed in a single direction
    for (let i = 0; i < len; i++) {
      if (
        (i === 0 && coordinate <= (ticks[i].coordinate + ticks[i + 1].coordinate) / 2) ||
        (i > 0 &&
          i < len - 1 &&
          coordinate > (ticks[i].coordinate + ticks[i - 1].coordinate) / 2 &&
          coordinate <= (ticks[i].coordinate + ticks[i + 1].coordinate) / 2) ||
        (i === len - 1 && coordinate > (ticks[i].coordinate + ticks[i - 1].coordinate) / 2)
      ) {
        ({ index } = ticks[i]);
        break;
      }
    }
  }

  return index;
};
