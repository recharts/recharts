import * as d3Scales from 'victory-vendor/d3-scale';
import { D3ScaleType, RechartsScaleType } from '../../../util/types';
import { BaseCartesianAxis } from '../../cartesianAxisSlice';
import { upperFirst } from '../../../util/DataUtils';

function getD3ScaleName(name: string): D3ScaleType {
  return `scale${upperFirst(name)}` as D3ScaleType;
}

function isSupportedScaleName(name: string): name is RechartsScaleType {
  return getD3ScaleName(name) in d3Scales;
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
