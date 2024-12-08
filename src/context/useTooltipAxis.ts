import { useAppSelector } from '../state/hooks';
import { getBandSizeOfAxis } from '../util/ChartUtils';
import { AxisWithTicksSettings } from '../state/selectors/axisSelectors';
import { selectTooltipAxis, selectTooltipAxisScale, selectTooltipAxisTicks } from '../state/selectors/tooltipSelectors';

export const useTooltipAxis = (): AxisWithTicksSettings => useAppSelector(selectTooltipAxis);

export const useTooltipAxisBandSize = (): number | undefined => {
  const tooltipAxis = useTooltipAxis();
  const tooltipTicks = useAppSelector(selectTooltipAxisTicks);
  const tooltipAxisScale = useAppSelector(selectTooltipAxisScale);
  return getBandSizeOfAxis({ ...tooltipAxis, scale: tooltipAxisScale }, tooltipTicks);
};
