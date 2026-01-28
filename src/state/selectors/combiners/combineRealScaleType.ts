import * as d3Scales from 'victory-vendor/d3-scale';
import { D3ScaleType } from '../../../util/types';
import { BaseCartesianAxis } from '../../cartesianAxisSlice';
import { upperFirst } from '../../../util/DataUtils';

function isSupportedScaleName(name: string): name is D3ScaleType {
  return name in d3Scales;
}

export const combineRealScaleType = (
  axisConfig: BaseCartesianAxis | undefined,
  hasBar: boolean,
  chartType: string,
): D3ScaleType | undefined => {
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
    const name = `scale${upperFirst(scale)}`;

    return isSupportedScaleName(name) ? name : 'point';
  }
  return undefined;
};
