import { getCateCoordinateOfBar, getValueByDataKey } from '../../../util/ChartUtils';
import type { ChartDataState } from '../../chartDataSlice';
import type { GraphicalItemId } from '../../graphicalItemsSlice';
import type { BarSettings } from '../../types/BarSettings';
import type { BaseAxisWithScale } from '../axisSelectors';
import type { SizeList } from '../barSelectors';
import { combineAllBarPositions } from './combineAllBarPositions';
import { isWellBehavedNumber } from '../../../util/isWellBehavedNumber';
import type { TickItem } from '../../../util/types';

export type CategoryBarPosition = { size: number; offsets: ReadonlyArray<number | undefined> };

type BarEntry = { offsets: Array<number | undefined>; index: number };
type OccupiedSlot = { size: number; entries: Array<BarEntry> };

/** Place each occupied series or stack once at its category, including bars with their own data. */
export function combineCategoryBarOffsets(
  sizeList: SizeList,
  maxBarSize: number | undefined,
  barGap: number | string,
  barCategoryGap: number | string,
  barBandSize: number,
  bandSize: number | undefined,
  bars: ReadonlyArray<BarSettings>,
  { chartData, dataStartIndex, dataEndIndex }: ChartDataState,
  axis: BaseAxisWithScale | undefined,
  ticks: ReadonlyArray<TickItem> | undefined,
): ReadonlyMap<GraphicalItemId, CategoryBarPosition> | undefined {
  // Resolve the shared gaps first. Each slot's own width limit is applied below.
  const positions = combineAllBarPositions(
    sizeList,
    undefined,
    barGap,
    barCategoryGap,
    barBandSize,
    bandSize,
    undefined,
  );
  const fixedSize = isWellBehavedNumber(sizeList[0]?.barSize);
  const first = positions?.[0]?.position;
  if (!positions || !first || !axis || !ticks || bandSize == null) {
    return undefined;
  }
  const positionById = new Map<GraphicalItemId, CategoryBarPosition>();
  const slotsByCategory = new Map<number, Array<OccupiedSlot>>();
  const chartRows = chartData?.slice(dataStartIndex, dataEndIndex + 1);

  // combineBarSizeList gives each unstacked bar its own slot in registration order.
  // Independent series can legitimately use the same dataKey on different data arrays.
  const unstackedGroups = bars
    .filter(bar => bar.stackId == null)
    .map(bar => [bar])
    .values();
  for (const { position, stackId } of positions) {
    const entriesByCategory = new Map<number, Array<BarEntry>>();
    const members =
      stackId == null ? (unstackedGroups.next().value ?? []) : bars.filter(bar => bar.stackId === stackId);
    const limit = members[0]?.maxBarSize ?? maxBarSize;
    const size = !fixedSize && isWellBehavedNumber(limit) ? Math.min(position.size, limit) : position.size;
    for (const bar of members) {
      const offsets: Array<number | undefined> = [];
      positionById.set(bar.id, { size, offsets });
      const data = bar.data?.length ? bar.data : chartRows;
      data?.forEach((entry, index) => {
        if (getValueByDataKey(entry, bar.dataKey) == null) {
          return;
        }
        // The axis resolves named categories and duplicate ticks in the same way as the rendered rectangle.
        const category = getCateCoordinateOfBar({ axis, ticks, entry, index, bandSize: 0, offset: 0 });
        if (category != null) {
          const entries = entriesByCategory.get(category) ?? [];
          entries.push({ offsets, index });
          entriesByCategory.set(category, entries);
        }
      });
    }
    for (const [category, entries] of entriesByCategory) {
      const slots = slotsByCategory.get(category) ?? [];
      slots.push({ size, entries });
      slotsByCategory.set(category, slots);
    }
  }

  // Keep the widths and actual gap from the chart's bar layout, including any reductions made to fit the band.
  const second = positions[1]?.position;
  const gap = second ? second.offset - first.offset - first.size : 0;
  const center = bandSize / 2;
  for (const slots of slotsByCategory.values()) {
    const width = slots.reduce((sum, slot) => sum + slot.size, 0) + (slots.length - 1) * gap;
    let offset = center - width / 2;
    for (const { size, entries } of slots) {
      for (const { offsets, index } of entries) {
        offsets[index] = offset;
      }
      offset += size + gap;
    }
  }
  return positionById;
}
