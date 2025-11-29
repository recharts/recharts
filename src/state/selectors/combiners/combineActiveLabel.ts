import { TickItem } from '../../../util/types';
import { TooltipIndex } from '../../tooltipSlice';
import { isNan } from '../../../util/DataUtils';
import { ActiveLabel } from '../../../synchronisation/types';

export const combineActiveLabel = (tooltipTicks: ReadonlyArray<TickItem>, activeIndex: TooltipIndex): ActiveLabel => {
  const n = Number(activeIndex);
  if (isNan(n) || activeIndex == null) {
    return undefined;
  }
  return n >= 0 ? tooltipTicks?.[n]?.value : undefined;
};
