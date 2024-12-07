import { BaseCartesianAxis } from '../../cartesianAxisSlice';
import { AxisRange } from '../axisSelectors';

export const combineAxisRangeWithReverse = (
  axisSettings: BaseCartesianAxis | undefined,
  axisRange: AxisRange,
): AxisRange | undefined => {
  if (axisSettings?.reversed) {
    return [axisRange[1], axisRange[0]];
  }
  return axisRange;
};
