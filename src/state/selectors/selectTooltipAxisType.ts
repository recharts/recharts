import { RechartsRootState } from '../store';
import { XorYType } from './axisSelectors';
import { selectChartLayout } from '../../context/chartLayoutContext';

export const selectTooltipAxisType = (state: RechartsRootState): XorYType => {
  const layout = selectChartLayout(state);

  if (layout === 'horizontal') {
    return 'xAxis';
  }

  if (layout === 'vertical') {
    return 'yAxis';
  }

  if (layout === 'centric') {
    return 'angleAxis';
  }

  return 'radiusAxis';
};
