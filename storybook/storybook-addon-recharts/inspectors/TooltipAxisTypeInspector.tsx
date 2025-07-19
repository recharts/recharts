import { useAppSelector } from '../../../src/state/hooks';

import { selectTooltipAxisType } from '../../../src/state/selectors/selectTooltipAxisType';

export function TooltipAxisTypeInspector() {
  return useAppSelector(selectTooltipAxisType);
}
