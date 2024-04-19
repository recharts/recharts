import {
  useArbitraryPolarAngleAxis,
  useArbitraryPolarRadiusAxis,
  useArbitraryXAxis,
  useArbitraryYAxis,
  useChartLayout,
} from './chartLayoutContext';
import { getBandSizeOfAxis, getTicksOfAxis } from '../util/ChartUtils';

export const useTooltipAxis = () => {
  const layout = useChartLayout();
  const xAxis = useArbitraryXAxis();
  const yAxis = useArbitraryYAxis();
  const angleAxis = useArbitraryPolarAngleAxis();
  const radiusAxis = useArbitraryPolarRadiusAxis();
  if (layout === 'horizontal') {
    return xAxis;
  }
  if (layout === 'vertical') {
    return yAxis;
  }
  if (layout === 'centric') {
    return angleAxis;
  }
  return radiusAxis;
};

export const useTooltipAxisBandSize = (): number | undefined => {
  const tooltipAxis = useTooltipAxis();
  const tooltipTicks = getTicksOfAxis(tooltipAxis, false, true);
  return getBandSizeOfAxis(tooltipAxis, tooltipTicks);
};
