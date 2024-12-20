import { TickItem } from '../../../util/types';
import { TooltipIndex } from '../../tooltipSlice';
import { isNan } from '../../../util/DataUtils';

export const combineActiveLabel = (
  tooltipTicks: ReadonlyArray<TickItem>,
  activeIndex: TooltipIndex,
): string | undefined => {
  const n = Number(activeIndex);
  if (isNan(n) || activeIndex == null) {
    return undefined;
  }
  return n >= 0 ? tooltipTicks?.[n]?.value : undefined;
};
