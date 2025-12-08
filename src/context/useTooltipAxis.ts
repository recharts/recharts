import { useAppSelector } from '../state/hooks';
import { getBandSizeOfAxis } from '../util/ChartUtils';
import { RenderableAxisSettings, selectTooltipAxis } from '../state/selectors/axisSelectors';
import { selectTooltipAxisScale, selectTooltipAxisTicks } from '../state/selectors/tooltipSelectors';

export const useTooltipAxis = (): RenderableAxisSettings | undefined => useAppSelector(selectTooltipAxis);

export const useTooltipAxisBandSize = (): number | undefined => {
  const tooltipAxis = useTooltipAxis();
  const tooltipTicks = useAppSelector(selectTooltipAxisTicks);
  const tooltipAxisScale = useAppSelector(selectTooltipAxisScale);
  if (!tooltipAxis || !tooltipAxisScale) {
    return getBandSizeOfAxis(undefined, tooltipTicks);
  }
  return getBandSizeOfAxis({ ...tooltipAxis, scale: tooltipAxisScale }, tooltipTicks);
};
