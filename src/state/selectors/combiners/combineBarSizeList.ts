import { DefinitelyStackedGraphicalItem, isStacked, MaybeStackedGraphicalItem } from '../../types/StackedGraphicalItem';
import { StackId } from '../../../util/ChartUtils';
import { SizeList } from '../barSelectors';
import { getPercentValue, isNullish } from '../../../util/DataUtils';
import { DataKey } from '../../../util/types';

const getBarSize = (
  globalSize: number | undefined,
  totalSize: number | undefined,
  selfSize: number | string | undefined,
): number | undefined => {
  const barSize: string | number | undefined = selfSize ?? globalSize;

  if (isNullish(barSize)) {
    return undefined;
  }
  return getPercentValue(barSize, totalSize, 0);
};

export const combineBarSizeList = (
  allBars: ReadonlyArray<MaybeStackedGraphicalItem>,
  globalSize: number | undefined,
  totalSize: number | undefined,
): SizeList => {
  const initialValue: Record<StackId, Array<DefinitelyStackedGraphicalItem>> = {};

  const stackedBars: ReadonlyArray<DefinitelyStackedGraphicalItem> = allBars.filter(isStacked);
  const unstackedBars = allBars.filter(b => b.stackId == null);

  const groupByStack: Record<StackId, Array<DefinitelyStackedGraphicalItem>> = stackedBars.reduce((acc, bar) => {
    if (!acc[bar.stackId]) {
      acc[bar.stackId] = [];
    }
    acc[bar.stackId].push(bar);
    return acc;
  }, initialValue);

  const stackedSizeList: SizeList = Object.entries(groupByStack).map(([stackId, bars]): BarCategory => {
    const dataKeys = bars.map(b => b.dataKey);
    const barSize: number | undefined = getBarSize(globalSize, totalSize, bars[0].barSize);
    return { stackId, dataKeys, barSize };
  });

  const unstackedSizeList: SizeList = unstackedBars.map((b): BarCategory => {
    const dataKeys = [b.dataKey].filter(dk => dk != null);
    const barSize: number | undefined = getBarSize(globalSize, totalSize, b.barSize);
    return { stackId: undefined, dataKeys, barSize };
  });

  return [...stackedSizeList, ...unstackedSizeList];
};
export type BarCategory = {
  stackId: StackId | undefined;
  /**
   * List of dataKeys of items stacked at this position.
   * All of these Bars are either sharing the same stackId,
   * or this is an array with one Bar because it has no stackId defined.
   *
   * This structure limits us to having one dataKey only once per stack which I think is reasonable.
   * People who want to have the same data twice can duplicate their data to have two distinct dataKeys.
   */
  dataKeys: ReadonlyArray<DataKey<any>>;
  /**
   * Width (in horizontal chart) or height (in vertical chart) of this stack of items
   */
  barSize: number | undefined;
};
