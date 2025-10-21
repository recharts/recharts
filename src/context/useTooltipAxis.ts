import { useAppSelector } from '../state/hooks';
import { getBandSizeOfAxis } from '../util/ChartUtils';
import { AxisWithTicksSettings } from '../state/selectors/axisSelectors';
import { selectTooltipAxisScale, selectTooltipAxisTicks } from '../state/selectors/tooltipSelectors';
import { selectTooltipAxis } from '../state/selectors/selectTooltipAxis';

export const useTooltipAxis = (): AxisWithTicksSettings | undefined => useAppSelector(selectTooltipAxis);

export const useTooltipAxisBandSize = (): number | undefined => {
  const tooltipAxis = useTooltipAxis();
  const tooltipTicks = useAppSelector(selectTooltipAxisTicks);
  const tooltipAxisScale = useAppSelector(selectTooltipAxisScale);
  if (!tooltipAxis || !tooltipAxisScale) {
    return getBandSizeOfAxis(undefined, tooltipTicks);
  }
  return getBandSizeOfAxis({ ...tooltipAxis, scale: tooltipAxisScale }, tooltipTicks);
};
