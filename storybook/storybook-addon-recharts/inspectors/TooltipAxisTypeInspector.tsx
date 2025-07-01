import { useAppSelector } from '../../../src/state/hooks';
import { selectTooltipAxisType } from '../../../src/state/selectors/tooltipSelectors';

export function TooltipAxisTypeInspector() {
  return useAppSelector(selectTooltipAxisType);
}
