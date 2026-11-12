import { polarToCartesian } from '../util/PolarUtils';
import type { Coordinate } from '../util/types';
import type { PieSectorDataItem } from './Pie';

export type PieLabelExtent = { left: number; right: number } | 'hidden';

type LabelPosition = { point: Coordinate; cx: number; cy: number; limitX?: number };

function spaceLabelColumn(labels: LabelPosition[], top: number, height: number, minSpacing: number): void {
  if (labels.length === 0) {
    return;
  }
  labels.sort((a, b) => a.point.y - b.point.y);
  const spacing = Math.min(minSpacing, height / labels.length);
  const groups: { start: number; count: number; mean: number }[] = [];

  // Subtracting one spacing per label turns the minimum-distance constraint into a simple ordering constraint.
  // Pool adjacent groups that violate that order, so a collision moves labels around their original midpoint.
  labels.forEach(({ point }, index) => {
    let group = { start: index, count: 1, mean: point.y - index * spacing };
    let previous = groups[groups.length - 1];
    while (previous && previous.mean > group.mean) {
      const count = previous.count + group.count;
      group = {
        start: previous.start,
        count,
        mean: (previous.mean * previous.count + group.mean * group.count) / count,
      };
      groups.pop();
      previous = groups[groups.length - 1];
    }
    groups.push(group);
  });

  const firstCenter = top + spacing / 2;
  const lastGroupStart = top + height - spacing / 2 - (labels.length - 1) * spacing;
  for (const { start, count, mean } of groups) {
    const base = Math.max(firstCenter, Math.min(lastGroupStart, mean));
    if (count === 1 && base === mean) {
      continue;
    }
    for (const [offset, { point, cx, cy, limitX }] of labels.slice(start, start + count).entries()) {
      const y = base + (start + offset) * spacing;
      if (y !== point.y) {
        // When a label moves toward the middle of the pie, keep its text outside the original label radius.
        const dx = point.x - cx;
        const radiusSquared = dx ** 2 + (point.y - cy) ** 2;
        const outsideX = Math.sqrt(Math.max(0, radiusSquared - (y - cy) ** 2));
        const x = cx + (dx < 0 ? -1 : 1) * Math.max(Math.abs(dx), outsideX);
        point.x = x;
        if (limitX != null) {
          point.x = dx < 0 ? Math.max(x, limitX) : Math.min(x, limitX);
        }
        point.y = y;
      }
    }
  }
}

export function getSpacedPieLabelPositions(
  sectors: ReadonlyArray<PieSectorDataItem>,
  offsetRadius: number,
  plot: { x: number; y: number; width: number; height: number },
  minSpacing: number,
  extents: ReadonlyArray<PieLabelExtent | undefined>,
): Coordinate[] {
  const left: LabelPosition[] = [];
  const right: LabelPosition[] = [];
  const positions = sectors.map(({ cx, cy, outerRadius, startAngle, endAngle }, index) => {
    const point = polarToCartesian(cx, cy, outerRadius + offsetRadius, (startAngle + endAngle) / 2);
    const extent = extents[index];
    if (extent !== 'hidden') {
      const isLeft = point.x < cx;
      const column = isLeft ? left : right;
      // Keep the original anchor if the label was already wider than the available space.
      let limitX;
      if (extent) {
        limitX = isLeft
          ? Math.min(point.x, plot.x + extent.left)
          : Math.max(point.x, plot.x + plot.width - extent.right);
      }
      column.push({ point, cx, cy, limitX });
    }
    return point;
  });
  spaceLabelColumn(left, plot.y, plot.height, minSpacing);
  spaceLabelColumn(right, plot.y, plot.height, minSpacing);
  return positions;
}
