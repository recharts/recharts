import { RechartsScaleType } from '../../../util/types';
import { BaseCartesianAxis } from '../../cartesianAxisSlice';
import { isRegisteredScaleName } from '../../../util/scale/scaleRegistry';

function isSupportedScaleName(name: string): name is RechartsScaleType {
  return isRegisteredScaleName(name);
}

export const combineRealScaleType = (
  axisConfig: BaseCartesianAxis | undefined,
  hasBar: boolean,
  chartType: string,
): RechartsScaleType | undefined => {
  if (axisConfig == null) {
    return undefined;
  }
  const { scale, type } = axisConfig;
  if (scale === 'auto') {
    if (
      type === 'category' &&
      chartType &&
      (chartType.indexOf('LineChart') >= 0 ||
        chartType.indexOf('AreaChart') >= 0 ||
        (chartType.indexOf('ComposedChart') >= 0 && !hasBar))
    ) {
      return 'point';
    }
    if (type === 'category') {
      return 'band';
    }

    return 'linear';
  }
  if (typeof scale === 'string') {
    return isSupportedScaleName(scale) ? scale : 'point';
  }
  return undefined;
};
