import * as React from 'react';
import PieChartDefaultIndexComponent from '../../../www/src/components/GuideView/ActiveIndex/PieChartDefaultIndex';
import BarChartClickableComponent from '../../../www/src/components/GuideView/ActiveIndex/BarChartClickable';

export const PieChartDefaultIndex = (props: React.ComponentProps<typeof PieChartDefaultIndexComponent>) => (
  <PieChartDefaultIndexComponent {...props} />
);

export const BarChartClickable = () => <BarChartClickableComponent />;
